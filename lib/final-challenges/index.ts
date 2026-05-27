import type { FinalChallenge, ThemeId, LanguageId } from "@/types";

// ── Per-language final challenge sets ────────────────────────────────────────
// Each file exports one FinalChallenge per theme (12 total per language file)
import { pythonFinalChallenges } from "./python";
import { javascriptFinalChallenges } from "./javascript";
import { javaFinalChallenges } from "./java";
import { sqlFinalChallenges } from "./sql";
import { goFinalChallenges } from "./go";

// ── Central registry ─────────────────────────────────────────────────────────
export const ALL_FINAL_CHALLENGES: Record<string, FinalChallenge> = {
  ...pythonFinalChallenges,
  ...javascriptFinalChallenges,
  ...javaFinalChallenges,
  ...sqlFinalChallenges,
  ...goFinalChallenges,
};

// ── Lookup helper ─────────────────────────────────────────────────────────────
export function getFinalChallenge(
  themeId: ThemeId,
  languageId: LanguageId,
): FinalChallenge | null {
  const key = `${themeId}-${languageId}`;
  return ALL_FINAL_CHALLENGES[key] ?? null;
}
