import type { Challenge, ThemeId, LanguageId } from "@/types";
import { strangerThingsPythonChallenges } from "./stranger-things-python";
import { severanceJavaScriptChallenges } from "./severance-javascript";
import { breakingBadSQLChallenges } from "./breaking-bad-sql";

// All challenges keyed by themeId + languageId
export const ALL_CHALLENGES: Record<string, Challenge[]> = {
  "stranger-things-python": strangerThingsPythonChallenges,
  "severance-javascript": severanceJavaScriptChallenges,
  "breaking-bad-sql": breakingBadSQLChallenges,
  // Additional theme+language combos can be added here
};

export function getChallenges(themeId: ThemeId, languageId: LanguageId): Challenge[] {
  const key = `${themeId}-${languageId}`;
  return ALL_CHALLENGES[key] ?? [];
}

export function getChallenge(id: string): Challenge | undefined {
  for (const challenges of Object.values(ALL_CHALLENGES)) {
    const found = challenges.find((c) => c.id === id);
    if (found) return found;
  }
  return undefined;
}

export {
  strangerThingsPythonChallenges,
  severanceJavaScriptChallenges,
  breakingBadSQLChallenges,
};
