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
  {
    id: "st-sql-06",
    themeId: "stranger-things",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Lab Reports vs. Sightings",
    narrative:
      "Chief Hopper has discovered that Hawkins National Laboratory keeps its own records in a `labs` table that cross-references the `sightings` table by `location`. To build a complete picture, he needs to JOIN both tables so the team can see the official lab notes alongside each sighting.",
    prompt:
      "Write a query that selects `sightings.location`, `sightings.creature`, and `labs.classification` by performing an INNER JOIN between `sightings` and `labs` on `sightings.location = labs.location`.",
    hint: "Use `INNER JOIN labs ON sightings.location = labs.location`. Reference columns with `table.column` notation.",
    solution: `SELECT sightings.location, sightings.creature, labs.classification\nFROM sightings\nINNER JOIN labs ON sightings.location = labs.location;`,
    starterCode: `-- Lab Reports vs. Sightings\n-- Join sightings and labs on matching location\n\nSELECT sightings.location, sightings.creature, labs.classification\nFROM sightings\n___ JOIN labs ON ___;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN labs ON sightings.location = labs.location",
        description: "Joins sightings and labs on location",
      },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "st-sql-07",
    themeId: "stranger-things",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "High-Frequency Creatures",
    narrative:
      "The party needs to focus their efforts. Dustin wants to know which creatures have appeared in more than one sighting — single appearances could be noise, but repeat creatures signal a real pattern. GROUP and filter with HAVING.",
    prompt:
      "Write a query that selects `creature` and `COUNT(*) AS sighting_count` from `sightings`, grouped by `creature`, filtered to only include creatures with more than 1 sighting, ordered by `sighting_count` descending.",
    hint: "Use `GROUP BY creature` then `HAVING COUNT(*) > 1`. Remember: HAVING filters groups, WHERE filters rows.",
    solution: `SELECT creature, COUNT(*) AS sighting_count\nFROM sightings\nGROUP BY creature\nHAVING COUNT(*) > 1\nORDER BY sighting_count DESC;`,
    starterCode: `-- High-Frequency Creatures\n-- Find creatures with more than one sighting\n\nSELECT creature, COUNT(*) AS sighting_count\nFROM sightings\nGROUP BY creature\nHAVING ___\nORDER BY sighting_count DESC;`,
    testCases: [
      {
        input: "",
        expected: "HAVING COUNT(*) > 1",
        description: "Filters for creatures seen more than once",
      },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "st-sql-08",
    themeId: "stranger-things",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Above-Average Threats",
    narrative:
      "Dr. Owens needs a list of every sighting that is more threatening than average — the ones that demand immediate military response. Use a subquery to calculate the average threat level and filter against it.",
    prompt:
      "Write a query that selects `location`, `creature`, and `threat_level` from `sightings` WHERE `threat_level` is greater than the average `threat_level` (use a subquery with `SELECT AVG(threat_level) FROM sightings`).",
    hint: "Use `WHERE threat_level > (SELECT AVG(threat_level) FROM sightings)` — the subquery runs first.",
    solution: `SELECT location, creature, threat_level\nFROM sightings\nWHERE threat_level > (SELECT AVG(threat_level) FROM sightings);`,
    starterCode: `-- Above-Average Threats\n-- Find sightings with threat_level above the overall average\n\nSELECT location, creature, threat_level\nFROM sightings\nWHERE threat_level > (___ AVG(threat_level) FROM sightings);`,
    testCases: [
      {
        input: "",
        expected: "WHERE threat_level > (SELECT AVG(threat_level) FROM sightings)",
        description: "Filters for above-average threat sightings using a subquery",
      },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "st-sql-09",
    themeId: "stranger-things",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "Threat Classification System",
    narrative:
      "The Hawkins Lab needs to classify every sighting into a threat tier so first responders know how to react. Write a query that assigns a human-readable label based on the numeric threat level.",
    prompt:
      "Write a query that selects `location`, `creature`, `threat_level`, and a computed column `threat_tier` using CASE WHEN: when `threat_level >= 9` then 'Critical', when `threat_level >= 6` then 'High', else 'Moderate'.",
    hint: "Use `CASE WHEN threat_level >= 9 THEN 'Critical' WHEN threat_level >= 6 THEN 'High' ELSE 'Moderate' END AS threat_tier`.",
    solution: `SELECT\n  location,\n  creature,\n  threat_level,\n  CASE\n    WHEN threat_level >= 9 THEN 'Critical'\n    WHEN threat_level >= 6 THEN 'High'\n    ELSE 'Moderate'\n  END AS threat_tier\nFROM sightings;`,
    starterCode: `-- Threat Classification System\n-- Classify each sighting's threat level as Critical, High, or Moderate\n\nSELECT\n  location,\n  creature,\n  threat_level,\n  CASE\n    WHEN threat_level >= 9 THEN 'Critical'\n    WHEN threat_level >= 6 THEN ___\n    ELSE ___\n  END AS threat_tier\nFROM sightings;`,
    testCases: [
      {
        input: "",
        expected: "CASE WHEN threat_level >= 9 THEN 'Critical'",
        description: "Assigns threat tier labels using CASE WHEN",
      },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "st-sql-10",
    themeId: "stranger-things",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "Full Upside Down Briefing",
    narrative:
      "Before the final confrontation, Chief Hopper needs a comprehensive briefing document. He wants a joined report of high-threat sightings with lab classifications, grouped and summarized so the team knows exactly what they're facing.",
    prompt:
      "Write a query that JOINs `sightings` and `labs` on `location`, selects `sightings.creature`, `labs.classification`, and `COUNT(*) AS encounter_count`, filters to `sightings.threat_level >= 8`, groups by `sightings.creature` and `labs.classification`, and orders by `encounter_count` descending.",
    hint: "Chain: INNER JOIN ... ON ... WHERE threat_level >= 8 GROUP BY creature, classification ORDER BY encounter_count DESC.",
    solution: `SELECT\n  sightings.creature,\n  labs.classification,\n  COUNT(*) AS encounter_count\nFROM sightings\nINNER JOIN labs ON sightings.location = labs.location\nWHERE sightings.threat_level >= 8\nGROUP BY sightings.creature, labs.classification\nORDER BY encounter_count DESC;`,
    starterCode: `-- Full Upside Down Briefing\n-- Join, filter, group, and order sighting data\n\nSELECT\n  sightings.creature,\n  labs.classification,\n  COUNT(*) AS encounter_count\nFROM sightings\nINNER JOIN labs ON ___\nWHERE sightings.threat_level >= 8\nGROUP BY ___, ___\nORDER BY encounter_count DESC;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN labs ON sightings.location = labs.location",
        description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY",
      },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
