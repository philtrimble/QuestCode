import type { Challenge } from "@/types";

export const arrestedDevelopmentSQLChallenges: Challenge[] = [
  {
    id: "ad-sql-01",
    themeId: "arrested-development",
    languageId: "sql",
    order: 1,
    title: "SELECT",
    themedTitle: "The Bluth Company Books",
    narrative:
      "The SEC has subpoenaed the Bluth Company's financial records. Michael needs to pull everything from the `ventures` table before the lawyers get involved and complicate things.",
    prompt: "Select all columns from the `ventures` table.",
    hint: "Use `SELECT * FROM table_name` to return all columns from a table.",
    solution: "SELECT * FROM ventures;",
    starterCode: "-- Select all columns from ventures\nSELECT ___ FROM ___;",
    testCases: [
      { input: "", expected: "name | revenue | is_legal", description: "Full ventures table" },
    ],
    concept: "SELECT",
    difficulty: "beginner",
  },
  {
    id: "ad-sql-02",
    themeId: "arrested-development",
    languageId: "sql",
    order: 2,
    title: "WHERE",
    themedTitle: "Finding the Legitimate Businesses",
    narrative:
      "Against all odds, some Bluth ventures are actually legal. The lawyer Barry Zuckerkorn needs to find them quickly — he charges by the hour and hasn't won a case in years.",
    prompt: "Select the `name` and `revenue` from `ventures` where `is_legal = true`.",
    hint: "Use `WHERE column = value` to filter rows. For booleans, use `true` or `false`.",
    solution: "SELECT name, revenue FROM ventures WHERE is_legal = true;",
    starterCode: "-- Find only the legal ventures\nSELECT name, revenue FROM ventures WHERE ___;",
    testCases: [
      { input: "", expected: "name | revenue", description: "Legal ventures only" },
    ],
    concept: "WHERE",
    difficulty: "beginner",
  },
  {
    id: "ad-sql-03",
    themeId: "arrested-development",
    languageId: "sql",
    order: 3,
    title: "ORDER BY & LIMIT",
    themedTitle: "Top Revenue Streams",
    narrative:
      "Lucille needs to know which ventures bring in the most money — so she can spend it. Get the top 3 revenue-generating ventures, highest first.",
    prompt: "Select `name` and `revenue` from `ventures`, ordered by `revenue` descending, limited to 3 rows.",
    hint: "Use `ORDER BY column DESC` and `LIMIT n`.",
    solution: "SELECT name, revenue FROM ventures ORDER BY revenue DESC LIMIT 3;",
    starterCode: "-- Top 3 revenue ventures\nSELECT name, revenue FROM ventures\nORDER BY ___ DESC\nLIMIT ___;",
    testCases: [
      { input: "", expected: "name | revenue (top 3)", description: "Top 3 earning ventures" },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "ad-sql-04",
    themeId: "arrested-development",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "The Bluth Audit Summary",
    narrative:
      "The auditors are here and they want a summary. Michael needs the total number of ventures, total revenue, and average revenue per venture — in one query.",
    prompt: "Write a query that returns `COUNT(*)` as `total_ventures`, `SUM(revenue)` as `total_revenue`, and `AVG(revenue)` as `avg_revenue` from `ventures`.",
    hint: "Use `COUNT(*)`, `SUM(column)`, and `AVG(column)` in the SELECT clause.",
    solution: "SELECT COUNT(*) AS total_ventures, SUM(revenue) AS total_revenue, AVG(revenue) AS avg_revenue FROM ventures;",
    starterCode: "-- Audit summary\nSELECT COUNT(*) AS total_ventures,\n       ___ AS total_revenue,\n       ___ AS avg_revenue\nFROM ventures;",
    testCases: [
      { input: "", expected: "total_ventures | total_revenue | avg_revenue", description: "Bluth audit numbers" },
    ],
    concept: "Aggregate Functions",
    difficulty: "beginner",
  },
  {
    id: "ad-sql-05",
    themeId: "arrested-development",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Revenue by Family Member",
    narrative:
      "Each Bluth family member oversees a different set of ventures. Michael wants to know how much revenue each of them is responsible for — so he can assign blame accurately.",
    prompt: "Select `owner` and `SUM(revenue)` as `total` from `ventures`, grouped by `owner`, ordered by `total` descending.",
    hint: "Use `GROUP BY column` after `WHERE` (or after `FROM` if there's no WHERE). Add `ORDER BY total DESC` at the end.",
    solution: "SELECT owner, SUM(revenue) AS total FROM ventures GROUP BY owner ORDER BY total DESC;",
    starterCode: "-- Revenue by family member\nSELECT owner, SUM(revenue) AS total\nFROM ventures\nGROUP BY ___\nORDER BY total DESC;",
    testCases: [
      { input: "", expected: "owner | total", description: "Revenue per Bluth" },
    ],
    concept: "GROUP BY",
    difficulty: "beginner",
  },
  {
    id: "ad-sql-06",
    themeId: "arrested-development",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Ventures Meet the Bluth Company",
    narrative:
      "Michael has discovered that the `ventures` table and the `bluth_company` table share a `contact_id` column — meaning every venture is linked to a Bluth family member who signed off on it. There's always money in the banana stand, but first he needs to JOIN these tables to prove it.",
    prompt:
      "Write a query that selects `ventures.name`, `ventures.revenue`, and `bluth_company.member` by performing an INNER JOIN between `ventures` and `bluth_company` on `ventures.contact_id = bluth_company.contact_id`.",
    hint: "Use `INNER JOIN bluth_company ON ventures.contact_id = bluth_company.contact_id`. Reference columns with `table.column` notation.",
    solution: `SELECT ventures.name, ventures.revenue, bluth_company.member\nFROM ventures\nINNER JOIN bluth_company ON ventures.contact_id = bluth_company.contact_id;`,
    starterCode: `-- Ventures Meet the Bluth Company\n-- Join ventures and bluth_company on contact_id\n\nSELECT ventures.name, ventures.revenue, bluth_company.member\nFROM ventures\n___ JOIN bluth_company ON ___;`,
    testCases: [
      { input: "", expected: "INNER JOIN bluth_company ON ventures.contact_id = bluth_company.contact_id", description: "Joins ventures and bluth_company on contact_id" },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "ad-sql-07",
    themeId: "arrested-development",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "Family Members Running Multiple Ventures",
    narrative:
      "Gob's magic act is one thing, but it turns out several family members are technically running multiple ventures. Michael needs to identify anyone overseeing more than one venture — for liability reasons, of course.",
    prompt:
      "Write a query that selects `owner` and `COUNT(*) AS venture_count` from `ventures`, grouped by `owner`, filtered to only include owners with more than 1 venture, ordered by `venture_count` descending.",
    hint: "Use `GROUP BY owner` then `HAVING COUNT(*) > 1`. HAVING filters groups; WHERE filters rows.",
    solution: `SELECT owner, COUNT(*) AS venture_count\nFROM ventures\nGROUP BY owner\nHAVING COUNT(*) > 1\nORDER BY venture_count DESC;`,
    starterCode: `-- Family Members Running Multiple Ventures\n-- Find owners responsible for more than one venture\n\nSELECT owner, COUNT(*) AS venture_count\nFROM ventures\nGROUP BY owner\nHAVING ___\nORDER BY venture_count DESC;`,
    testCases: [
      { input: "", expected: "HAVING COUNT(*) > 1", description: "Filters for owners with more than one venture" },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "ad-sql-08",
    themeId: "arrested-development",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Above-Average Revenue Ventures",
    narrative:
      "Barry Zuckerkorn needs a list of every venture generating above-average revenue — the ones that look good on paper when the SEC comes calling. Use a subquery to find the average and filter against it.",
    prompt:
      "Write a query that selects `name` and `revenue` from `ventures` WHERE `revenue` is greater than the average `revenue` (use a subquery with `SELECT AVG(revenue) FROM ventures`).",
    hint: "Use `WHERE revenue > (SELECT AVG(revenue) FROM ventures)` — the subquery runs first and returns the average.",
    solution: `SELECT name, revenue\nFROM ventures\nWHERE revenue > (SELECT AVG(revenue) FROM ventures);`,
    starterCode: `-- Above-Average Revenue Ventures\n-- Find ventures earning more than the average\n\nSELECT name, revenue\nFROM ventures\nWHERE revenue > (___ AVG(revenue) FROM ventures);`,
    testCases: [
      { input: "", expected: "WHERE revenue > (SELECT AVG(revenue) FROM ventures)", description: "Filters for above-average revenue ventures using a subquery" },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "ad-sql-09",
    themeId: "arrested-development",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "The Bluth Viability Report",
    narrative:
      "Michael needs to present the board with a viability rating for every venture. He's going to assign a label based on revenue: profitable operations deserve credit, break-even ones need watching, and the losses are exactly what Barry warned about.",
    prompt:
      "Write a query that selects `name`, `revenue`, and a computed column `viability` using CASE WHEN: when `revenue > 30000` then 'Profitable', when `revenue > 0` then 'Marginal', else 'Loss'.",
    hint: "Use `CASE WHEN revenue > 30000 THEN 'Profitable' WHEN revenue > 0 THEN 'Marginal' ELSE 'Loss' END AS viability`.",
    solution: `SELECT\n  name,\n  revenue,\n  CASE\n    WHEN revenue > 30000 THEN 'Profitable'\n    WHEN revenue > 0 THEN 'Marginal'\n    ELSE 'Loss'\n  END AS viability\nFROM ventures;`,
    starterCode: `-- The Bluth Viability Report\n-- Classify each venture as Profitable, Marginal, or Loss\n\nSELECT\n  name,\n  revenue,\n  CASE\n    WHEN revenue > 30000 THEN 'Profitable'\n    WHEN revenue > 0 THEN ___\n    ELSE ___\n  END AS viability\nFROM ventures;`,
    testCases: [
      { input: "", expected: "CASE WHEN revenue > 30000 THEN 'Profitable'", description: "Assigns viability labels using CASE WHEN" },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "ad-sql-10",
    themeId: "arrested-development",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "Full Family Business Briefing",
    narrative:
      "The SEC wants everything: which Bluth family member is running which type of venture, and how much they're pulling in — but only for ventures that are actually legal. Michael has to produce this report before the lawyers file the injunction.",
    prompt:
      "Write a query that JOINs `ventures` and `bluth_company` on `contact_id`, selects `bluth_company.member`, `ventures.category`, and `SUM(ventures.revenue) AS total_revenue`, filters to `ventures.is_legal = true`, groups by `bluth_company.member` and `ventures.category`, and orders by `total_revenue` descending.",
    hint: "Chain: INNER JOIN ... ON ... WHERE is_legal = true GROUP BY member, category ORDER BY total_revenue DESC.",
    solution: `SELECT\n  bluth_company.member,\n  ventures.category,\n  SUM(ventures.revenue) AS total_revenue\nFROM ventures\nINNER JOIN bluth_company ON ventures.contact_id = bluth_company.contact_id\nWHERE ventures.is_legal = true\nGROUP BY bluth_company.member, ventures.category\nORDER BY total_revenue DESC;`,
    starterCode: `-- Full Family Business Briefing\n-- Join, filter, group, and order venture data\n\nSELECT\n  bluth_company.member,\n  ventures.category,\n  SUM(ventures.revenue) AS total_revenue\nFROM ventures\nINNER JOIN bluth_company ON ___\nWHERE ventures.is_legal = true\nGROUP BY ___, ___\nORDER BY total_revenue DESC;`,
    testCases: [
      { input: "", expected: "INNER JOIN bluth_company ON ventures.contact_id = bluth_company.contact_id", description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY" },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
