/**
 * /api/run — server-side code execution proxy
 *
 * Uses Judge0 Community Edition (https://judge0.com) for real sandboxed execution.
 * By default targets the free public CE instance at ce.judge0.com.
 *
 * To switch to a self-hosted Judge0 instance, set JUDGE0_URL in your environment.
 * To add an auth token (required on most paid/hosted instances), set JUDGE0_TOKEN.
 *
 * SQL challenges are handled by wrapping the user's query in a Python/SQLite
 * script that seeds an in-memory database from lib/sql-scaffolds.ts, then
 * submits the generated script as Python (language ID 92) to Judge0.
 */

import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";
import { SQL_SETUP } from "@/lib/sql-scaffolds";

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

  let body: { language?: string; code?: string; themeId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { language, code, themeId } = body;

  if (!language || !code) {
    return NextResponse.json({ error: "Missing required fields: language, code" }, { status: 400 });
  }

  if (Buffer.byteLength(code, "utf8") > MAX_CODE_BYTES) {
    return NextResponse.json({ error: "Code exceeds maximum allowed size" }, { status: 413 });
  }

  // ── Resolve the source code and Judge0 language ID to submit ─────────────
  // SQL is executed by wrapping user code in a Python/SQLite script.
  let submitCode: string;
  let langId: number;

  if (language === "sql") {
    // Look up the seed schema for the given theme
    const setup = themeId ? SQL_SETUP[themeId] : undefined;
    if (!setup) {
      return NextResponse.json(
        { error: `No SQL schema found for theme "${themeId ?? "(none)"}"` },
        { status: 400 }
      );
    }

    const setupB64 = Buffer.from(setup).toString("base64");
    const codeB64  = Buffer.from(code).toString("base64");

    // Generate a self-contained Python script that runs the user's SQL
    // against an in-memory SQLite database seeded with the theme's tables.
    submitCode = `import sqlite3, sys, base64
try:
    setup = base64.b64decode("${setupB64}").decode()
    query = base64.b64decode("${codeB64}").decode()
    conn = sqlite3.connect(':memory:')
    conn.executescript(setup)
    c = conn.cursor()
    parts = query.split(';')
    stmts = []
    for p in parts:
        lines = [l for l in p.splitlines() if not l.strip().startswith('--')]
        s = ' '.join(lines).strip()
        if s:
            stmts.append(s)
    found = False
    for stmt in stmts:
        c.execute(stmt)
        if c.description:
            rows = c.fetchall()
            for row in rows:
                print('|'.join('' if x is None else str(x) for x in row))
            if rows:
                found = True
    if not found:
        print('(0 rows)')
except Exception as e:
    print(str(e), file=sys.stderr)
    sys.exit(1)`;

    langId = LANGUAGE_ID["python"]; // Python 3.11.2 — includes sqlite3 stdlib
  } else {
    langId = LANGUAGE_ID[language];
    if (!langId) {
      return NextResponse.json({ error: `Language "${language}" is not supported` }, { status: 400 });
    }
    submitCode = code;
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
          source_code:  submitCode,
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
