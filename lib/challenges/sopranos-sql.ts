import type { Challenge } from "@/types";

export const sopranosSQLChallenges: Challenge[] = [
  {
    id: "sp-sql-01",
    themeId: "sopranos",
    languageId: "sql",
    order: 1,
    title: "SELECT",
    themedTitle: "The Waste Management Contracts",
    narrative:
      "The DiMeo family's legitimate business is waste disposal. Bobby needs to pull all contract records from the database before the quarterly review — and before the feds subpoena them.",
    prompt: "Select all columns from the `contracts` table.",
    hint: "Use `SELECT * FROM table_name`.",
    solution: "SELECT * FROM contracts;",
    starterCode: "-- Get all contract records\nSELECT ___ FROM ___;",
    testCases: [
      { input: "", expected: "client | territory | value", description: "Full contracts table" },
    ],
    concept: "SELECT",
    difficulty: "beginner",
  },
  {
    id: "sp-sql-02",
    themeId: "sopranos",
    languageId: "sql",
    order: 2,
    title: "WHERE",
    themedTitle: "High-Value Contracts",
    narrative:
      "Paulie needs a list of every contract worth over $50,000. The smaller ones can wait. Right now, Tony wants to know which clients are bringing in real money.",
    prompt: "Select `client` and `value` from `contracts` where `value > 50000`.",
    hint: "Use `WHERE column > value`.",
    solution: "SELECT client, value FROM contracts WHERE value > 50000;",
    starterCode: "-- High-value contracts only\nSELECT client, value FROM contracts WHERE ___;",
    testCases: [
      { input: "", expected: "client | value", description: "Contracts above $50,000" },
    ],
    concept: "WHERE",
    difficulty: "beginner",
  },
  {
    id: "sp-sql-03",
    themeId: "sopranos",
    languageId: "sql",
    order: 3,
    title: "ORDER BY & LIMIT",
    themedTitle: "Most Valuable Territories",
    narrative:
      "The family is dividing up territory after a sit-down with New York. Get the top 3 territories by contract value so they can be assigned to the most senior capos.",
    prompt: "Select `territory` and `value` from `contracts`, ordered by `value` descending, limited to 3.",
    hint: "Use `ORDER BY value DESC LIMIT 3`.",
    solution: "SELECT territory, value FROM contracts ORDER BY value DESC LIMIT 3;",
    starterCode: "-- Top 3 territories by value\nSELECT territory, value FROM contracts\nORDER BY ___ DESC\nLIMIT ___;",
    testCases: [
      { input: "", expected: "territory | value (top 3)", description: "Three highest-value territories" },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "sp-sql-04",
    themeId: "sopranos",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "The Family Earnings Report",
    narrative:
      "Silvio runs the numbers every quarter. He needs a summary: total contracts on the books, total value brought in, and the average value per contract — all in one clean query.",
    prompt: "Write a query returning `COUNT(*)` as `total_contracts`, `SUM(value)` as `total_value`, and `AVG(value)` as `avg_value` from `contracts`.",
    hint: "Use `COUNT(*)`, `SUM()`, and `AVG()` in the SELECT.",
    solution: "SELECT COUNT(*) AS total_contracts, SUM(value) AS total_value, AVG(value) AS avg_value FROM contracts;",
    starterCode: "-- Earnings summary\nSELECT COUNT(*) AS total_contracts,\n       ___ AS total_value,\n       ___ AS avg_value\nFROM contracts;",
    testCases: [
      { input: "", expected: "total_contracts | total_value | avg_value", description: "Family earnings summary" },
    ],
    concept: "Aggregate Functions",
    difficulty: "beginner",
  },
  {
    id: "sp-sql-05",
    themeId: "sopranos",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Revenue by Territory",
    narrative:
      "Tony wants to know which territory is producing the most revenue so he can reward the capo running it — or apply pressure to the one who isn't pulling their weight.",
    prompt: "Select `territory` and `SUM(value)` as `total` from `contracts`, grouped by `territory`, ordered by `total` descending.",
    hint: "Use `GROUP BY territory ORDER BY total DESC`.",
    solution: "SELECT territory, SUM(value) AS total FROM contracts GROUP BY territory ORDER BY total DESC;",
    starterCode: "-- Revenue by territory\nSELECT territory, SUM(value) AS total\nFROM contracts\nGROUP BY ___\nORDER BY total DESC;",
    testCases: [
      { input: "", expected: "territory | total", description: "Revenue per territory" },
    ],
    concept: "GROUP BY",
    difficulty: "beginner",
  },
  {
    id: "sp-sql-06",
    themeId: "sopranos",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Contracts and Their Crews",
    narrative:
      "Every contract in the DiMeo family's books is tied to a specific crew through a `crew_id` column shared between the `contracts` and `crews` tables. Tony wants a joined view — contract details alongside the crew boss responsible. No more excuses.",
    prompt:
      "Write a query that selects `contracts.client`, `contracts.value`, and `crews.boss` by performing an INNER JOIN between `contracts` and `crews` on `contracts.crew_id = crews.crew_id`.",
    hint: "Use `INNER JOIN crews ON contracts.crew_id = crews.crew_id`. Reference columns with `table.column` notation.",
    solution: `SELECT contracts.client, contracts.value, crews.boss\nFROM contracts\nINNER JOIN crews ON contracts.crew_id = crews.crew_id;`,
    starterCode: `-- Contracts and Their Crews\n-- Join contracts and crews on crew_id\n\nSELECT contracts.client, contracts.value, crews.boss\nFROM contracts\n___ JOIN crews ON ___;`,
    testCases: [
      { input: "", expected: "INNER JOIN crews ON contracts.crew_id = crews.crew_id", description: "Joins contracts and crews on crew_id" },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "sp-sql-07",
    themeId: "sopranos",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "Crews Pulling Their Weight",
    narrative:
      "Tony needs to know which crew bosses are managing more than one contract — they're the ones earning their keep. Anyone running just one contract is on thin ice. Use HAVING to filter the real earners.",
    prompt:
      "Write a query that selects `territory` and `COUNT(*) AS contract_count` from `contracts`, grouped by `territory`, filtered to only include territories with more than 1 contract, ordered by `contract_count` descending.",
    hint: "Use `GROUP BY territory` then `HAVING COUNT(*) > 1`. HAVING filters aggregated groups.",
    solution: `SELECT territory, COUNT(*) AS contract_count\nFROM contracts\nGROUP BY territory\nHAVING COUNT(*) > 1\nORDER BY contract_count DESC;`,
    starterCode: `-- Crews Pulling Their Weight\n-- Find territories with more than one contract\n\nSELECT territory, COUNT(*) AS contract_count\nFROM contracts\nGROUP BY territory\nHAVING ___\nORDER BY contract_count DESC;`,
    testCases: [
      { input: "", expected: "HAVING COUNT(*) > 1", description: "Filters for territories with more than one contract" },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "sp-sql-08",
    themeId: "sopranos",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Above-Average Earners",
    narrative:
      "Silvio only wants to see the contracts bringing in more than average. The low-value ones are handled by the associate level. Use a subquery to find the average contract value, then surface everything above it.",
    prompt:
      "Write a query that selects `client` and `value` from `contracts` WHERE `value` is greater than the average `value` (use a subquery with `SELECT AVG(value) FROM contracts`).",
    hint: "Use `WHERE value > (SELECT AVG(value) FROM contracts)` — the subquery computes the average first.",
    solution: `SELECT client, value\nFROM contracts\nWHERE value > (SELECT AVG(value) FROM contracts);`,
    starterCode: `-- Above-Average Earners\n-- Find contracts above the average value using a subquery\n\nSELECT client, value\nFROM contracts\nWHERE value > (___ AVG(value) FROM contracts);`,
    testCases: [
      { input: "", expected: "WHERE value > (SELECT AVG(value) FROM contracts)", description: "Filters for above-average value contracts using a subquery" },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "sp-sql-09",
    themeId: "sopranos",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "The DiMeo Priority System",
    narrative:
      "Paulie Walnuts has a simple priority system: big contracts get personal attention, mid-range ones go to the capos, and small fry are left to the associates. Formalize it in SQL with CASE WHEN.",
    prompt:
      "Write a query that selects `client`, `value`, and a computed column `priority` using CASE WHEN: when `value >= 80000` then 'Boss Priority', when `value >= 40000` then 'Capo Priority', else 'Associate Level'.",
    hint: "Use `CASE WHEN value >= 80000 THEN 'Boss Priority' WHEN value >= 40000 THEN 'Capo Priority' ELSE 'Associate Level' END AS priority`.",
    solution: `SELECT\n  client,\n  value,\n  CASE\n    WHEN value >= 80000 THEN 'Boss Priority'\n    WHEN value >= 40000 THEN 'Capo Priority'\n    ELSE 'Associate Level'\n  END AS priority\nFROM contracts;`,
    starterCode: `-- The DiMeo Priority System\n-- Classify each contract by priority level\n\nSELECT\n  client,\n  value,\n  CASE\n    WHEN value >= 80000 THEN 'Boss Priority'\n    WHEN value >= 40000 THEN ___\n    ELSE ___\n  END AS priority\nFROM contracts;`,
    testCases: [
      { input: "", expected: "CASE WHEN value >= 80000 THEN 'Boss Priority'", description: "Assigns priority labels using CASE WHEN" },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "sp-sql-10",
    themeId: "sopranos",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "The Full Family Earnings Briefing",
    narrative:
      "Before the sit-down with New York, Tony needs the complete picture: every crew boss, their territory, total earnings — but only from high-value contracts. This is the report that determines who gets promoted and who gets a talking-to in the Bada Bing parking lot.",
    prompt:
      "Write a query that JOINs `contracts` and `crews` on `crew_id`, selects `crews.boss`, `contracts.territory`, and `SUM(contracts.value) AS total_value`, filters to `contracts.value >= 40000`, groups by `crews.boss` and `contracts.territory`, and orders by `total_value` descending.",
    hint: "Chain: INNER JOIN ... ON ... WHERE value >= 40000 GROUP BY boss, territory ORDER BY total_value DESC.",
    solution: `SELECT\n  crews.boss,\n  contracts.territory,\n  SUM(contracts.value) AS total_value\nFROM contracts\nINNER JOIN crews ON contracts.crew_id = crews.crew_id\nWHERE contracts.value >= 40000\nGROUP BY crews.boss, contracts.territory\nORDER BY total_value DESC;`,
    starterCode: `-- The Full Family Earnings Briefing\n-- Join, filter, group, and order contract data\n\nSELECT\n  crews.boss,\n  contracts.territory,\n  SUM(contracts.value) AS total_value\nFROM contracts\nINNER JOIN crews ON ___\nWHERE contracts.value >= 40000\nGROUP BY ___, ___\nORDER BY total_value DESC;`,
    testCases: [
      { input: "", expected: "INNER JOIN crews ON contracts.crew_id = crews.crew_id", description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY" },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
