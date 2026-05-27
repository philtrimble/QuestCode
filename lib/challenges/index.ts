import type { Challenge, ThemeId, LanguageId } from "@/types";

// Stranger Things
import { strangerThingsPythonChallenges } from "./stranger-things-python";
import { strangerThingsJavaScriptChallenges } from "./stranger-things-javascript";
import { strangerThingsJavaChallenges } from "./stranger-things-java";
import { strangerThingsSQLChallenges } from "./stranger-things-sql";
import { strangerThingsGoChallenges } from "./stranger-things-go";

// Severance
import { severancePythonChallenges } from "./severance-python";
import { severanceJavaScriptChallenges } from "./severance-javascript";
import { severanceJavaChallenges } from "./severance-java";
import { severanceSQLChallenges } from "./severance-sql";
import { severanceGoChallenges } from "./severance-go";

// Breaking Bad
import { breakingBadPythonChallenges } from "./breaking-bad-python";
import { breakingBadJavaScriptChallenges } from "./breaking-bad-javascript";
import { breakingBadJavaChallenges } from "./breaking-bad-java";
import { breakingBadSQLChallenges } from "./breaking-bad-sql";
import { breakingBadGoChallenges } from "./breaking-bad-go";

// The Office
import { theOfficePythonChallenges } from "./the-office-python";
import { theOfficeJavaScriptChallenges } from "./the-office-javascript";
import { theOfficeJavaChallenges } from "./the-office-java";
import { theOfficeSQLChallenges } from "./the-office-sql";
import { theOfficeGoChallenges } from "./the-office-go";

// Game of Thrones
import { gameOfThronesPythonChallenges } from "./game-of-thrones-python";
import { gameOfThronesJavaScriptChallenges } from "./game-of-thrones-javascript";
import { gameOfThronesJavaChallenges } from "./game-of-thrones-java";
import { gameOfThronesSQLChallenges } from "./game-of-thrones-sql";
import { gameOfThronesGoChallenges } from "./game-of-thrones-go";

// The Matrix
import { theMatrixPythonChallenges } from "./the-matrix-python";
import { theMatrixJavaScriptChallenges } from "./the-matrix-javascript";
import { theMatrixJavaChallenges } from "./the-matrix-java";
import { theMatrixSQLChallenges } from "./the-matrix-sql";
import { theMatrixGoChallenges } from "./the-matrix-go";

// Rick and Morty
import { rickAndMortyPythonChallenges } from "./rick-and-morty-python";
import { rickAndMortyJavaScriptChallenges } from "./rick-and-morty-javascript";
import { rickAndMortyJavaChallenges } from "./rick-and-morty-java";
import { rickAndMortySQLChallenges } from "./rick-and-morty-sql";
import { rickAndMortyGoChallenges } from "./rick-and-morty-go";

// Squid Game
import { squidGamePythonChallenges } from "./squid-game-python";
import { squidGameJavaScriptChallenges } from "./squid-game-javascript";
import { squidGameJavaChallenges } from "./squid-game-java";
import { squidGameSQLChallenges } from "./squid-game-sql";
import { squidGameGoChallenges } from "./squid-game-go";

// Arrested Development
import { arrestedDevelopmentPythonChallenges } from "./arrested-development-python";
import { arrestedDevelopmentJavaScriptChallenges } from "./arrested-development-javascript";
import { arrestedDevelopmentJavaChallenges } from "./arrested-development-java";
import { arrestedDevelopmentSQLChallenges } from "./arrested-development-sql";
import { arrestedDevelopmentGoChallenges } from "./arrested-development-go";

// Barbie
import { barbiePythonChallenges } from "./barbie-python";
import { barbieJavaScriptChallenges } from "./barbie-javascript";
import { barbieJavaChallenges } from "./barbie-java";
import { barbieSQLChallenges } from "./barbie-sql";
import { barbieGoChallenges } from "./barbie-go";

// Sex and the City
import { sexAndTheCityPythonChallenges } from "./sex-and-the-city-python";
import { sexAndTheCityJavaScriptChallenges } from "./sex-and-the-city-javascript";
import { sexAndTheCityJavaChallenges } from "./sex-and-the-city-java";
import { sexAndTheCitySQLChallenges } from "./sex-and-the-city-sql";
import { sexAndTheCityGoChallenges } from "./sex-and-the-city-go";

// Sopranos
import { sopranosPythonChallenges } from "./sopranos-python";
import { sopranosJavaScriptChallenges } from "./sopranos-javascript";
import { sopranosJavaChallenges } from "./sopranos-java";
import { sopranosSQLChallenges } from "./sopranos-sql";
import { sopranosGoChallenges } from "./sopranos-go";

export const ALL_CHALLENGES: Record<string, Challenge[]> = {
  "stranger-things-python": strangerThingsPythonChallenges,
  "stranger-things-javascript": strangerThingsJavaScriptChallenges,
  "stranger-things-java": strangerThingsJavaChallenges,
  "stranger-things-sql": strangerThingsSQLChallenges,
  "stranger-things-go": strangerThingsGoChallenges,

  "severance-python": severancePythonChallenges,
  "severance-javascript": severanceJavaScriptChallenges,
  "severance-java": severanceJavaChallenges,
  "severance-sql": severanceSQLChallenges,
  "severance-go": severanceGoChallenges,

  "breaking-bad-python": breakingBadPythonChallenges,
  "breaking-bad-javascript": breakingBadJavaScriptChallenges,
  "breaking-bad-java": breakingBadJavaChallenges,
  "breaking-bad-sql": breakingBadSQLChallenges,
  "breaking-bad-go": breakingBadGoChallenges,

  "the-office-python": theOfficePythonChallenges,
  "the-office-javascript": theOfficeJavaScriptChallenges,
  "the-office-java": theOfficeJavaChallenges,
  "the-office-sql": theOfficeSQLChallenges,
  "the-office-go": theOfficeGoChallenges,

  "game-of-thrones-python": gameOfThronesPythonChallenges,
  "game-of-thrones-javascript": gameOfThronesJavaScriptChallenges,
  "game-of-thrones-java": gameOfThronesJavaChallenges,
  "game-of-thrones-sql": gameOfThronesSQLChallenges,
  "game-of-thrones-go": gameOfThronesGoChallenges,

  "the-matrix-python": theMatrixPythonChallenges,
  "the-matrix-javascript": theMatrixJavaScriptChallenges,
  "the-matrix-java": theMatrixJavaChallenges,
  "the-matrix-sql": theMatrixSQLChallenges,
  "the-matrix-go": theMatrixGoChallenges,

  "rick-and-morty-python": rickAndMortyPythonChallenges,
  "rick-and-morty-javascript": rickAndMortyJavaScriptChallenges,
  "rick-and-morty-java": rickAndMortyJavaChallenges,
  "rick-and-morty-sql": rickAndMortySQLChallenges,
  "rick-and-morty-go": rickAndMortyGoChallenges,

  "squid-game-python": squidGamePythonChallenges,
  "squid-game-javascript": squidGameJavaScriptChallenges,
  "squid-game-java": squidGameJavaChallenges,
  "squid-game-sql": squidGameSQLChallenges,
  "squid-game-go": squidGameGoChallenges,

  "arrested-development-python": arrestedDevelopmentPythonChallenges,
  "arrested-development-javascript": arrestedDevelopmentJavaScriptChallenges,
  "arrested-development-java": arrestedDevelopmentJavaChallenges,
  "arrested-development-sql": arrestedDevelopmentSQLChallenges,
  "arrested-development-go": arrestedDevelopmentGoChallenges,

  "barbie-python": barbiePythonChallenges,
  "barbie-javascript": barbieJavaScriptChallenges,
  "barbie-java": barbieJavaChallenges,
  "barbie-sql": barbieSQLChallenges,
  "barbie-go": barbieGoChallenges,

  "sex-and-the-city-python": sexAndTheCityPythonChallenges,
  "sex-and-the-city-javascript": sexAndTheCityJavaScriptChallenges,
  "sex-and-the-city-java": sexAndTheCityJavaChallenges,
  "sex-and-the-city-sql": sexAndTheCitySQLChallenges,
  "sex-and-the-city-go": sexAndTheCityGoChallenges,

  "sopranos-python": sopranosPythonChallenges,
  "sopranos-javascript": sopranosJavaScriptChallenges,
  "sopranos-java": sopranosJavaChallenges,
  "sopranos-sql": sopranosSQLChallenges,
  "sopranos-go": sopranosGoChallenges,
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
