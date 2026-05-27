import type { Challenge } from "@/types";

export const barbieSQLChallenges: Challenge[] = [
  {
    id: "ba-sql-01",
    themeId: "barbie",
    languageId: "sql",
    order: 1,
    title: "SELECT",
    themedTitle: "The Barbieland Census",
    narrative:
      "The Barbieland Department of Resident Affairs needs a complete list of every Barbie currently registered. Pull all records from the `barbies` table so the census is official.",
    prompt: "Select all columns from the `barbies` table.",
    hint: "Use `SELECT * FROM table_name`.",
    solution: "SELECT * FROM barbies;",
    starterCode: "-- Get all Barbie records\nSELECT ___ FROM ___;",
    testCases: [
      { input: "", expected: "name | job | is_in_crisis", description: "Full barbies table" },
    ],
    concept: "SELECT",
    difficulty: "beginner",
  },
  {
    id: "ba-sql-02",
    themeId: "barbie",
    languageId: "sql",
    order: 2,
    title: "WHERE",
    themedTitle: "Barbies in Crisis",
    narrative:
      "Weird Barbie can feel it when a Barbie starts thinking about death. She needs a query to find all Barbies who are currently experiencing an existential crisis so she can send help.",
    prompt: "Select `name` and `job` from `barbies` where `is_in_crisis = true`.",
    hint: "Use `WHERE column = true`.",
    solution: "SELECT name, job FROM barbies WHERE is_in_crisis = true;",
    starterCode: "-- Find Barbies in crisis\nSELECT name, job FROM barbies WHERE ___;",
    testCases: [
      { input: "", expected: "name | job", description: "Only crisis Barbies" },
    ],
    concept: "WHERE",
    difficulty: "beginner",
  },
  {
    id: "ba-sql-03",
    themeId: "barbie",
    languageId: "sql",
    order: 3,
    title: "ORDER BY & LIMIT",
    themedTitle: "Most Outfits",
    narrative:
      "The Barbieland Fashion Museum wants to feature the three Barbies with the most outfits. Pull their names and outfit counts, highest first.",
    prompt: "Select `name` and `outfit_count` from `barbies`, ordered by `outfit_count` descending, limit to 3.",
    hint: "Use `ORDER BY column DESC LIMIT n`.",
    solution: "SELECT name, outfit_count FROM barbies ORDER BY outfit_count DESC LIMIT 3;",
    starterCode: "-- Top 3 best-dressed Barbies\nSELECT name, outfit_count FROM barbies\nORDER BY ___ DESC\nLIMIT ___;",
    testCases: [
      { input: "", expected: "name | outfit_count (top 3)", description: "Top 3 most outfits" },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "ba-sql-04",
    themeId: "barbie",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "Barbieland Population Stats",
    narrative:
      "The Barbieland Council needs a summary: total Barbies, total outfits across all Barbies, and the average number of outfits per Barbie. One query, please.",
    prompt: "Write a query returning `COUNT(*)` as `total_barbies`, `SUM(outfit_count)` as `total_outfits`, and `AVG(outfit_count)` as `avg_outfits` from `barbies`.",
    hint: "Use aggregate functions in the SELECT clause.",
    solution: "SELECT COUNT(*) AS total_barbies, SUM(outfit_count) AS total_outfits, AVG(outfit_count) AS avg_outfits FROM barbies;",
    starterCode: "-- Barbieland population stats\nSELECT COUNT(*) AS total_barbies,\n       ___ AS total_outfits,\n       ___ AS avg_outfits\nFROM barbies;",
    testCases: [
      { input: "", expected: "total_barbies | total_outfits | avg_outfits", description: "Population summary" },
    ],
    concept: "Aggregate Functions",
    difficulty: "beginner",
  },
  {
    id: "ba-sql-05",
    themeId: "barbie",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Careers by District",
    narrative:
      "Barbieland is organized by career district. The urban planning office needs to know how many Barbies work in each field so they can allocate Dream House space accordingly.",
    prompt: "Select `job` and `COUNT(*)` as `count` from `barbies`, grouped by `job`, ordered by `count` descending.",
    hint: "Use `GROUP BY column` and `ORDER BY count DESC`.",
    solution: "SELECT job, COUNT(*) AS count FROM barbies GROUP BY job ORDER BY count DESC;",
    starterCode: "-- Barbies per career\nSELECT job, COUNT(*) AS count\nFROM barbies\nGROUP BY ___\nORDER BY count DESC;",
    testCases: [
      { input: "", expected: "job | count", description: "Career distribution" },
    ],
    concept: "GROUP BY",
    difficulty: "beginner",
  },
  {
    id: "ba-sql-06",
    themeId: "barbie",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Barbies and Their Dream Careers",
    narrative:
      "The Barbieland Employment Registry links every Barbie to an official career listing in the `careers` table through a shared `career_id`. The Council wants a combined view — Barbie names alongside their official career titles and salary ranges. Time to JOIN.",
    prompt:
      "Write a query that selects `barbies.name`, `barbies.job`, and `careers.salary_range` by performing an INNER JOIN between `barbies` and `careers` on `barbies.career_id = careers.career_id`.",
    hint: "Use `INNER JOIN careers ON barbies.career_id = careers.career_id`. Reference columns with `table.column` notation.",
    solution: `SELECT barbies.name, barbies.job, careers.salary_range\nFROM barbies\nINNER JOIN careers ON barbies.career_id = careers.career_id;`,
    starterCode: `-- Barbies and Their Dream Careers\n-- Join barbies and careers on career_id\n\nSELECT barbies.name, barbies.job, careers.salary_range\nFROM barbies\n___ JOIN careers ON ___;`,
    testCases: [
      { input: "", expected: "INNER JOIN careers ON barbies.career_id = careers.career_id", description: "Joins barbies and careers on career_id" },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "ba-sql-07",
    themeId: "barbie",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "Overcrowded Career Districts",
    narrative:
      "The Barbieland Urban Planning Committee is concerned about career district overcrowding. Any career with more than one Barbie assigned to it needs a second Dream House. GROUP and filter to find those careers.",
    prompt:
      "Write a query that selects `job` and `COUNT(*) AS barbie_count` from `barbies`, grouped by `job`, filtered to only include jobs with more than 1 Barbie, ordered by `barbie_count` descending.",
    hint: "Use `GROUP BY job` then `HAVING COUNT(*) > 1`. HAVING filters groups after aggregation.",
    solution: `SELECT job, COUNT(*) AS barbie_count\nFROM barbies\nGROUP BY job\nHAVING COUNT(*) > 1\nORDER BY barbie_count DESC;`,
    starterCode: `-- Overcrowded Career Districts\n-- Find careers with more than one Barbie assigned\n\nSELECT job, COUNT(*) AS barbie_count\nFROM barbies\nGROUP BY job\nHAVING ___\nORDER BY barbie_count DESC;`,
    testCases: [
      { input: "", expected: "HAVING COUNT(*) > 1", description: "Filters for jobs with more than one Barbie" },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "ba-sql-08",
    themeId: "barbie",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Barbies with Above-Average Happiness",
    narrative:
      "Weird Barbie can sense which Barbies are truly thriving beyond the average. Find all Barbies whose happiness score exceeds the Barbieland average — they're the ones keeping the pink glow going.",
    prompt:
      "Write a query that selects `name` and `happiness` from `barbies` WHERE `happiness` is greater than the average `happiness` (use a subquery with `SELECT AVG(happiness) FROM barbies`).",
    hint: "Use `WHERE happiness > (SELECT AVG(happiness) FROM barbies)` — the subquery runs first.",
    solution: `SELECT name, happiness\nFROM barbies\nWHERE happiness > (SELECT AVG(happiness) FROM barbies);`,
    starterCode: `-- Barbies with Above-Average Happiness\n-- Find Barbies happier than average using a subquery\n\nSELECT name, happiness\nFROM barbies\nWHERE happiness > (___ AVG(happiness) FROM barbies);`,
    testCases: [
      { input: "", expected: "WHERE happiness > (SELECT AVG(happiness) FROM barbies)", description: "Filters for above-average happiness Barbies using a subquery" },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "ba-sql-09",
    themeId: "barbie",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "The Barbieland Wellness Check",
    narrative:
      "The Barbieland Wellness Board wants a status label for every Barbie based on their happiness score. Very happy Barbies are thriving, mid-range ones are stable, and anyone below a 5 is experiencing The Thought — and needs a visit from Weird Barbie.",
    prompt:
      "Write a query that selects `name`, `happiness`, and a computed column `wellness_status` using CASE WHEN: when `happiness >= 9` then 'Thriving', when `happiness >= 6` then 'Stable', else 'In Crisis'.",
    hint: "Use `CASE WHEN happiness >= 9 THEN 'Thriving' WHEN happiness >= 6 THEN 'Stable' ELSE 'In Crisis' END AS wellness_status`.",
    solution: `SELECT\n  name,\n  happiness,\n  CASE\n    WHEN happiness >= 9 THEN 'Thriving'\n    WHEN happiness >= 6 THEN 'Stable'\n    ELSE 'In Crisis'\n  END AS wellness_status\nFROM barbies;`,
    starterCode: `-- The Barbieland Wellness Check\n-- Classify each Barbie's wellbeing status\n\nSELECT\n  name,\n  happiness,\n  CASE\n    WHEN happiness >= 9 THEN 'Thriving'\n    WHEN happiness >= 6 THEN ___\n    ELSE ___\n  END AS wellness_status\nFROM barbies;`,
    testCases: [
      { input: "", expected: "CASE WHEN happiness >= 9 THEN 'Thriving'", description: "Assigns wellness status labels using CASE WHEN" },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "ba-sql-10",
    themeId: "barbie",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "Full Barbieland Career Report",
    narrative:
      "The Barbieland Department of Career Affairs wants a final summary: for each career in Barbieland (not the Real World), how many Barbies hold it and what is their average happiness — ranked from most to least happy. The Council will use this to allocate Dream Houses.",
    prompt:
      "Write a query that JOINs `barbies` and `careers` on `career_id`, selects `careers.title`, `COUNT(*) AS barbie_count`, and `AVG(barbies.happiness) AS avg_happiness`, filters to `barbies.location = 'Barbieland'`, groups by `careers.title`, and orders by `avg_happiness` descending.",
    hint: "Chain: INNER JOIN ... ON ... WHERE location = 'Barbieland' GROUP BY careers.title ORDER BY avg_happiness DESC.",
    solution: `SELECT\n  careers.title,\n  COUNT(*) AS barbie_count,\n  AVG(barbies.happiness) AS avg_happiness\nFROM barbies\nINNER JOIN careers ON barbies.career_id = careers.career_id\nWHERE barbies.location = 'Barbieland'\nGROUP BY careers.title\nORDER BY avg_happiness DESC;`,
    starterCode: `-- Full Barbieland Career Report\n-- Join, filter, group, and order Barbie career data\n\nSELECT\n  careers.title,\n  COUNT(*) AS barbie_count,\n  AVG(barbies.happiness) AS avg_happiness\nFROM barbies\nINNER JOIN careers ON ___\nWHERE barbies.location = 'Barbieland'\nGROUP BY ___\nORDER BY avg_happiness DESC;`,
    testCases: [
      { input: "", expected: "INNER JOIN careers ON barbies.career_id = careers.career_id", description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY" },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
