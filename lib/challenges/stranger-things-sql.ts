import type { Challenge } from "@/types";

export const strangerThingsSQLChallenges: Challenge[] = [
  {
    id: "st-sql-01",
    themeId: "stranger-things",
    languageId: "sql",
    order: 1,
    title: "SELECT",
    themedTitle: "The Sightings Board",
    narrative:
      "Chief Hopper needs a full picture of every strange occurrence logged in Hawkins. Joyce has been pinning string to the wall for months, but the lab keeps a digital `sightings` table. Pull everything so the whole team can review it.",
    prompt:
      "Write a SQL query that selects ALL columns from the `sightings` table.",
    hint: "Use `SELECT * FROM sightings` to retrieve every column and every row.",
    solution: `SELECT * FROM sightings;`,
    starterCode: `-- The Sightings Board\n-- Select all columns from the sightings table\n\nSELECT ___ FROM sightings;`,
    testCases: [
      {
        input: "",
        expected: "SELECT * FROM sightings",
        description: "Retrieves all sighting records",
      },
    ],
    concept: "SELECT",
    difficulty: "beginner",
  },
  {
    id: "st-sql-02",
    themeId: "stranger-things",
    languageId: "sql",
    order: 2,
    title: "WHERE",
    themedTitle: "Demogorgon Encounters",
    narrative:
      "Eleven senses it — somewhere in Hawkins the Demogorgon is on the move. The team needs to filter the `sightings` table and find only the incidents where the `creature` column matches 'Demogorgon'. Every second counts.",
    prompt:
      "Write a query that selects `location`, `witnesses`, and `reported_date` from `sightings` WHERE the `creature` is 'Demogorgon'.",
    hint: "Use `WHERE creature = 'Demogorgon'` — remember single quotes around string values.",
    solution: `SELECT location, witnesses, reported_date\nFROM sightings\nWHERE creature = 'Demogorgon';`,
    starterCode: `-- Demogorgon Encounters\n-- Select location, witnesses, and reported_date for Demogorgon sightings\n\nSELECT location, witnesses, reported_date\nFROM sightings\nWHERE ___;`,
    testCases: [
      {
        input: "",
        expected: "WHERE creature = 'Demogorgon'",
        description: "Filters for Demogorgon sightings only",
      },
    ],
    concept: "WHERE",
    difficulty: "beginner",
  },
  {
    id: "st-sql-03",
    themeId: "stranger-things",
    languageId: "sql",
    order: 3,
    title: "ORDER BY & LIMIT",
    themedTitle: "Highest Threat Levels",
    narrative:
      "The Mind Flayer's influence is spreading and the team needs to triage. Dr. Owens wants to see the 5 most dangerous sightings on record so they can prioritize where to send resources first.",
    prompt:
      "Write a query that selects `location`, `creature`, and `threat_level` from `sightings`, ordered by `threat_level` from highest to lowest, showing only the top 5 results.",
    hint: "Use `ORDER BY threat_level DESC` followed by `LIMIT 5` at the end of your query.",
    solution: `SELECT location, creature, threat_level\nFROM sightings\nORDER BY threat_level DESC\nLIMIT 5;`,
    starterCode: `-- Highest Threat Levels\n-- Select location, creature, and threat_level ordered by threat (highest first), top 5 only\n\nSELECT location, creature, threat_level\nFROM sightings\nORDER BY ___ ___\nLIMIT ___;`,
    testCases: [
      {
        input: "",
        expected: "ORDER BY threat_level DESC LIMIT 5",
        description: "Top 5 sightings by threat level descending",
      },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "st-sql-04",
    themeId: "stranger-things",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "Upside Down Statistics",
    narrative:
      "The Hawkins National Laboratory needs a statistical summary to send to Washington. How many sightings have been logged? What is the total witness count? And on average, how threatening are these incidents? Dustin's graph board is not going to cut it.",
    prompt:
      "Write a query that returns: the total number of sightings (as `total_sightings`), the total number of witnesses across all sightings (as `total_witnesses`), and the average threat level (as `avg_threat`) from the `sightings` table.",
    hint: "Use `COUNT(*)`, `SUM(witnesses)`, and `AVG(threat_level)` with `AS` to name each result column.",
    solution: `SELECT\n  COUNT(*) AS total_sightings,\n  SUM(witnesses) AS total_witnesses,\n  AVG(threat_level) AS avg_threat\nFROM sightings;`,
    starterCode: `-- Upside Down Statistics\n-- Return total_sightings, total_witnesses, and avg_threat\n\nSELECT\n  ___ AS total_sightings,\n  ___ AS total_witnesses,\n  ___ AS avg_threat\nFROM sightings;`,
    testCases: [
      {
        input: "",
        expected: "COUNT(*) AS total_sightings",
        description: "Counts all sighting records",
      },
    ],
    concept: "Aggregate Functions",
    difficulty: "intermediate",
  },
  {
    id: "st-sql-05",
    themeId: "stranger-things",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Creatures by Location",
    narrative:
      "The party has spread out across Hawkins and the Upside Down. Will Byers keeps having visions of different locations being overrun. Group the sightings by creature type so the team knows which entity poses the greatest collective threat.",
    prompt:
      "Write a query that selects `creature` and the total number of sightings per creature (as `sighting_count`) from `sightings`, grouped by `creature`, ordered by `sighting_count` from highest to lowest.",
    hint: "Use `GROUP BY creature` and `COUNT(*)`. Then order by the alias `sighting_count DESC`.",
    solution: `SELECT\n  creature,\n  COUNT(*) AS sighting_count\nFROM sightings\nGROUP BY creature\nORDER BY sighting_count DESC;`,
    starterCode: `-- Creatures by Location\n-- Count sightings per creature type, ordered by most common first\n\nSELECT\n  creature,\n  ___ AS sighting_count\nFROM sightings\nGROUP BY ___\nORDER BY ___ DESC;`,
    testCases: [
      {
        input: "",
        expected: "GROUP BY creature",
        description: "Groups sightings by creature type correctly",
      },
    ],
    concept: "GROUP BY",
    difficulty: "intermediate",
  },
];
