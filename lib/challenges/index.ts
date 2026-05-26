import type { Challenge, ThemeId, LanguageId } from "@/types";
import { strangerThingsPythonChallenges } from "./stranger-things-python";
import { severanceJavaScriptChallenges } from "./severance-javascript";
import { breakingBadSQLChallenges } from "./breaking-bad-sql";
import { theOfficePythonChallenges } from "./the-office-python";
import { gameOfThronesJavaScriptChallenges } from "./game-of-thrones-javascript";
import { theMatrixPythonChallenges } from "./the-matrix-python";
import { rickAndMortyPythonChallenges } from "./rick-and-morty-python";
import { squidGameSQLChallenges } from "./squid-game-sql";

export const ALL_CHALLENGES: Record<string, Challenge[]> = {
  "stranger-things-python": strangerThingsPythonChallenges,
  "severance-javascript": severanceJavaScriptChallenges,
  "breaking-bad-sql": breakingBadSQLChallenges,
  "the-office-python": theOfficePythonChallenges,
  "game-of-thrones-javascript": gameOfThronesJavaScriptChallenges,
  "the-matrix-python": theMatrixPythonChallenges,
  "rick-and-morty-python": rickAndMortyPythonChallenges,
  "squid-game-sql": squidGameSQLChallenges,
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
  theOfficePythonChallenges,
  gameOfThronesJavaScriptChallenges,
  theMatrixPythonChallenges,
  rickAndMortyPythonChallenges,
  squidGameSQLChallenges,
};
