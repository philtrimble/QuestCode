/**
 * /api/run — server-side code execution proxy
 *
 * Uses Judge0 Community Edition (https://judge0.com) for real sandboxed execution.
 * By default targets the free public CE instance at ce.judge0.com.
 *
 * To switch to a self-hosted Judge0 instance, set JUDGE0_URL in your environment.
 * To add an auth token (required on most paid/hosted instances), set JUDGE0_TOKEN.
 *
 * SQL is not supported by Judge0 — those challenges use keyword-based evaluation
 * on the client side and never reach this endpoint.
 */

import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";

// ── Config ────────────────────────────────────────────────────────────────────

const JUDGE0_BASE = (process.env.JUDGE0_URL ?? "https://ce.judge0.com").replace(/\/$/, "");
const JUDGE0_TOKEN = process.env.JUDGE0_TOKEN; // optional; required on most non-CE instances

// Judge0 language IDs — using modern versions available on ce.judge0.com
const LANGUAGE_ID: Record<string, number> = {
  python:     92,   // Python 3.11.2
  javascript: 93,   // Node.js 18.15.0
  java:       91,   // Java JDK 17.0.6
  go:         95,   // Go 1.18.5
};

const MAX_CODE_BYTES  = 50_000;
const RUN_TIMEOUT_MS  = 5_000;  // passed to Judge0 as run_timeout
const FETCH_ABORT_MS  = 15_000; // wall-clock abort for the HTTP fetch

// Judge0 status IDs (https://github.com/judge0/judge0/blob/master/docs/api/statuses-and-languages.md)
const STATUS_ACCEPTED         = 3;
const STATUS_COMPILE_ERROR    = 6;
const STATUS_TIME_LIMIT       = 5;

// ── Handler ───────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // Must be authenticated
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { language?: string; code?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { language, code } = body;

  if (!language || !code) {
    return NextResponse.json({ error: "Missing required fields: language, code" }, { status: 400 });
  }

  const langId = LANGUAGE_ID[language];
  if (!langId) {
    return NextResponse.json({ error: `Language "${language}" is not supported` }, { status: 400 });
  }

  if (Buffer.byteLength(code, "utf8") > MAX_CODE_BYTES) {
    return NextResponse.json({ error: "Code exceeds maximum allowed size" }, { status: 413 });
  }

  // ── Submit to Judge0 ──────────────────────────────────────────────────────
  const controller = new AbortController();
  const abortTimer = setTimeout(() => controller.abort(), FETCH_ABORT_MS);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  };
  if (JUDGE0_TOKEN) headers["X-Auth-Token"] = JUDGE0_TOKEN;

  try {
    const judge0Res = await fetch(
      `${JUDGE0_BASE}/submissions?wait=true&base64_encoded=false`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          language_id:  langId,
          source_code:  code,
          stdin:        "",
          cpu_time_limit: RUN_TIMEOUT_MS / 1000, // Judge0 uses seconds
        }),
        signal: controller.signal,
      }
    );

    clearTimeout(abortTimer);

    if (!judge0Res.ok) {
      const text = await judge0Res.text().catch(() => "");
      console.error(`Judge0 ${judge0Res.status}: ${text}`);
      return NextResponse.json(
        { error: "Code execution service returned an error" },
        { status: 502 }
      );
    }

    const data = await judge0Res.json();
    const statusId: number = data.status?.id ?? 0;

    // Compilation failure
    if (statusId === STATUS_COMPILE_ERROR) {
      return NextResponse.json({
        stdout:    "",
        stderr:    (data.compile_output ?? "Compilation failed").trim(),
        exit_code: 1,
        stage:     "compile",
      });
    }

    // Time limit exceeded
    if (statusId === STATUS_TIME_LIMIT) {
      return NextResponse.json({
        stdout:    "",
        stderr:    "Time limit exceeded — check for infinite loops.",
        exit_code: 1,
        stage:     "run",
      });
    }

    // Runtime error or other non-accepted status
    if (statusId !== STATUS_ACCEPTED) {
      return NextResponse.json({
        stdout:    (data.stdout ?? "").trimEnd(),
        stderr:    (data.stderr ?? data.message ?? `Runtime error (status ${statusId})`).trimEnd(),
        exit_code: 1,
        stage:     "run",
      });
    }

    // Success
    return NextResponse.json({
      stdout:    (data.stdout ?? "").trimEnd(),
      stderr:    (data.stderr ?? "").trimEnd(),
      exit_code: 0,
      stage:     "run",
    });

  } catch (err) {
    clearTimeout(abortTimer);

    if (err instanceof Error && err.name === "AbortError") {
      return NextResponse.json({ error: "Execution timed out" }, { status: 408 });
    }

    console.error("Judge0 fetch error:", err);
    return NextResponse.json(
      { error: "Code execution service unavailable" },
      { status: 503 }
    );
  }
}
