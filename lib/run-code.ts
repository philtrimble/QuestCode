import type { TestCase } from "@/types";

// Languages that go through Piston for real execution.
// SQL is excluded — it stays on keyword-based evaluation.
export const PISTON_LANGUAGES = new Set(["python", "javascript", "java", "go"]);

export interface RunResult {
  stdout:    string;
  stderr:    string;
  exit_code: number;
  stage?:    "compile" | "run";
  error?:    string;  // set when the service itself failed (network, 5xx, etc.)
}

/** POST to /api/run and return the structured result. Throws on network failure. */
export async function executeCode(language: string, code: string): Promise<RunResult> {
  const res = await fetch("/api/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ language, code }),
  });

  const data = await res.json();

  if (!res.ok) {
    return {
      stdout:    "",
      stderr:    "",
      exit_code: 1,
      error:     data.error ?? `Server error ${res.status}`,
    };
  }

  return data as RunResult;
}

/**
 * Compare actual stdout against a challenge's testCases.
 *
 * Strategy: collect every non-empty expected line across all testCases,
 * then verify each one appears as a trimmed line in the actual output.
 * Extra output (debug prints, blank lines) is tolerated.
 */
export function outputMatchesExpected(stdout: string, testCases: TestCase[]): boolean {
  if (testCases.length === 0) return true;

  const outLines = stdout
    .trim()
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (outLines.length === 0) return false;

  const required = testCases.flatMap((tc) =>
    tc.expected
      .trim()
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0)
  );

  if (required.length === 0) return true;

  return required.every((exp) => outLines.includes(exp));
}

/**
 * Build a human-readable error string from a RunResult that failed.
 * Prefers compile output, then stderr, then a generic message.
 */
export function formatRunError(result: RunResult): string {
  if (result.stage === "compile") {
    return `Compile error:\n${result.stderr || "Unknown compilation failure"}`;
  }
  if (result.stderr) {
    return result.stderr;
  }
  if (result.stdout) {
    // Program ran but produced output that didn't match — show it so the
    // user can see what their code actually printed.
    return result.stdout;
  }
  return "Runtime error — check your code and try again.";
}
