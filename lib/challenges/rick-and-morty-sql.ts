import type { Challenge } from "@/types";

export const rickAndMortySQLChallenges: Challenge[] = [
  {
    id: "rm-sql-01",
    themeId: "rick-and-morty",
    languageId: "sql",
    order: 1,
    title: "SELECT",
    themedTitle: "The Dimension Database",
    narrative:
      "Wubba lubba dub dub! Rick Sanchez, the smartest man in the universe, has catalogued every dimension he's ever visited in a `dimensions` table. Morty accidentally spilled Szechuan sauce on the printout, so now you need to pull the whole thing from the database.",
    prompt:
      "Write a SQL query that selects ALL columns from the `dimensions` table.",
    hint: "Use `SELECT * FROM dimensions` to retrieve every column and every row.",
    solution: `SELECT * FROM dimensions;`,
    starterCode: `-- The Dimension Database\n-- Select all columns from the dimensions table\n\nSELECT ___ FROM dimensions;`,
    testCases: [
      {
        input: "",
        expected: "SELECT * FROM dimensions",
        description: "Retrieves all dimension records",
      },
    ],
    concept: "SELECT",
    difficulty: "beginner",
  },
  {
    id: "rm-sql-02",
    themeId: "rick-and-morty",
    languageId: "sql",
    order: 2,
    title: "WHERE",
    themedTitle: "Portals Already Opened",
    narrative:
      "The Council of Ricks wants to audit every dimension that has already been visited. Evil Morty is probably hiding in one of them. Filter the `dimensions` table to show only the dimensions where `visited` is 'yes' so Rick knows which portals have been opened.",
    prompt:
      "Write a query that selects `name`, `danger_level`, and `portal_color` from `dimensions` WHERE `visited` is 'yes'.",
    hint: "Use `WHERE visited = 'yes'` — single quotes around the string value.",
    solution: `SELECT name, danger_level, portal_color\nFROM dimensions\nWHERE visited = 'yes';`,
    starterCode: `-- Portals Already Opened\n-- Select name, danger_level, and portal_color for visited dimensions\n\nSELECT name, danger_level, portal_color\nFROM dimensions\nWHERE ___;`,
    testCases: [
      {
        input: "",
        expected: "WHERE visited = 'yes'",
        description: "Filters for already-visited dimensions only",
      },
    ],
    concept: "WHERE",
    difficulty: "beginner",
  },
  {
    id: "rm-sql-03",
    themeId: "rick-and-morty",
    languageId: "sql",
    order: 3,
    title: "ORDER BY & LIMIT",
    themedTitle: "Most Dangerous Dimensions",
    narrative:
      "Morty is freaking out again. He wants to know which dimensions are the absolute most dangerous so he can make sure Rick never drags him there. Pull the top 5 most dangerous dimensions — Morty is writing them on his hand right now.",
    prompt:
      "Write a query that selects `dimension_id`, `name`, and `danger_level` from `dimensions`, ordered by `danger_level` from highest to lowest, showing only the top 5 results.",
    hint: "Use `ORDER BY danger_level DESC` followed by `LIMIT 5`.",
    solution: `SELECT dimension_id, name, danger_level\nFROM dimensions\nORDER BY danger_level DESC\nLIMIT 5;`,
    starterCode: `-- Most Dangerous Dimensions\n-- Select dimension_id, name, and danger_level ordered by danger (highest first), top 5 only\n\nSELECT dimension_id, name, danger_level\nFROM dimensions\nORDER BY ___ ___\nLIMIT ___;`,
    testCases: [
      {
        input: "",
        expected: "ORDER BY danger_level DESC LIMIT 5",
        description: "Top 5 dimensions by danger level descending",
      },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "rm-sql-04",
    themeId: "rick-and-morty",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "Interdimensional Census",
    narrative:
      "The Citadel of Ricks needs a census report. How many dimensions are in the database? What is the total danger load across the multiverse? And what is the average danger level? Rick submits this every fiscal quarter — mostly to brag about surviving all of them.",
    prompt:
      "Write a query that returns: the total number of dimensions (as `total_dimensions`), the total combined danger level (as `total_danger`), and the average danger level (as `avg_danger`) from the `dimensions` table.",
    hint: "Use `COUNT(*)`, `SUM(danger_level)`, and `AVG(danger_level)` with `AS` aliases.",
    solution: `SELECT\n  COUNT(*) AS total_dimensions,\n  SUM(danger_level) AS total_danger,\n  AVG(danger_level) AS avg_danger\nFROM dimensions;`,
    starterCode: `-- Interdimensional Census\n-- Return total_dimensions, total_danger, and avg_danger\n\nSELECT\n  ___ AS total_dimensions,\n  ___ AS total_danger,\n  ___ AS avg_danger\nFROM dimensions;`,
    testCases: [
      {
        input: "",
        expected: "COUNT(*) AS total_dimensions",
        description: "Counts all dimension records",
      },
    ],
    concept: "Aggregate Functions",
    difficulty: "intermediate",
  },
  {
    id: "rm-sql-05",
    themeId: "rick-and-morty",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Portals by Color",
    narrative:
      "Rick's portal gun uses different colored portals for different dimension clusters. Summer wants to organize Rick's dimension log by portal color to understand his travel patterns — she suspects he has a favorite. Group the dimensions by `portal_color` and count them up.",
    prompt:
      "Write a query that selects `portal_color` and the number of dimensions per portal color (as `dimension_count`) from `dimensions`, grouped by `portal_color`, ordered by `dimension_count` from highest to lowest.",
    hint: "Use `GROUP BY portal_color` and `COUNT(*)`. Order by the alias `dimension_count DESC`.",
    solution: `SELECT\n  portal_color,\n  COUNT(*) AS dimension_count\nFROM dimensions\nGROUP BY portal_color\nORDER BY dimension_count DESC;`,
    starterCode: `-- Portals by Color\n-- Count dimensions per portal color, ordered by most common first\n\nSELECT\n  portal_color,\n  ___ AS dimension_count\nFROM dimensions\nGROUP BY ___\nORDER BY ___ DESC;`,
    testCases: [
      {
        input: "",
        expected: "GROUP BY portal_color",
        description: "Groups dimensions by portal color correctly",
      },
    ],
    concept: "GROUP BY",
    difficulty: "intermediate",
  },
  {
    id: "rm-sql-06",
    themeId: "rick-and-morty",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Portals and Their Dimensions",
    narrative:
      "Rick's portal gun log records every portal opened in the `portals` table, referencing target dimension IDs that link to the `dimensions` table. Morty wants a joined view so he can finally understand where they've been going all this time.",
    prompt:
      "Write a query that selects `portals.portal_id`, `portals.opened_by`, and `dimensions.name` by performing an INNER JOIN between `portals` and `dimensions` on `portals.dimension_id = dimensions.dim_id`.",
    hint: "Use `INNER JOIN dimensions ON portals.dimension_id = dimensions.dim_id`.",
    solution: `SELECT portals.portal_id, portals.opened_by, dimensions.name\nFROM portals\nINNER JOIN dimensions ON portals.dimension_id = dimensions.dim_id;`,
    starterCode: `-- Portals and Their Dimensions\n-- Join portals with dimensions on dimension ID\n\nSELECT portals.portal_id, portals.opened_by, dimensions.name\nFROM portals\n___ JOIN dimensions ON ___;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN dimensions ON portals.dimension_id = dimensions.dim_id",
        description: "Joins portals and dimensions tables",
      },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "rm-sql-07",
    themeId: "rick-and-morty",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "Frequent Flyer Dimensions",
    narrative:
      "The Citadel of Ricks has noticed that certain dimensions keep showing up in the portal logs — which means someone keeps going back. Use GROUP BY and HAVING to find dimensions visited more than twice.",
    prompt:
      "Write a query that selects `dimension_id` and `COUNT(*) AS visit_count` from `portals`, grouped by `dimension_id`, filtered with HAVING to show only dimensions visited more than 2 times, ordered by `visit_count` descending.",
    hint: "Use `HAVING COUNT(*) > 2` after `GROUP BY dimension_id`.",
    solution: `SELECT dimension_id, COUNT(*) AS visit_count\nFROM portals\nGROUP BY dimension_id\nHAVING COUNT(*) > 2\nORDER BY visit_count DESC;`,
    starterCode: `-- Frequent Flyer Dimensions\n-- Find dimensions visited more than twice\n\nSELECT dimension_id, COUNT(*) AS visit_count\nFROM portals\nGROUP BY dimension_id\nHAVING ___\nORDER BY visit_count DESC;`,
    testCases: [
      {
        input: "",
        expected: "HAVING COUNT(*) > 2",
        description: "Filters for frequently visited dimensions",
      },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "rm-sql-08",
    themeId: "rick-and-morty",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Dangerously Above Average",
    narrative:
      "Morty's anxiety is through the roof. He wants to know which dimensions are more dangerous than the average so he can argue that Rick should stop taking him to those specific ones. Use a subquery to find them.",
    prompt:
      "Write a query that selects `dim_id`, `name`, and `danger_level` from `dimensions` WHERE `danger_level` is greater than the average danger level across all dimensions (use a subquery).",
    hint: "Use `WHERE danger_level > (SELECT AVG(danger_level) FROM dimensions)`.",
    solution: `SELECT dim_id, name, danger_level\nFROM dimensions\nWHERE danger_level > (SELECT AVG(danger_level) FROM dimensions);`,
    starterCode: `-- Dangerously Above Average\n-- Find dimensions with above-average danger levels\n\nSELECT dim_id, name, danger_level\nFROM dimensions\nWHERE danger_level > (___ AVG(danger_level) FROM dimensions);`,
    testCases: [
      {
        input: "",
        expected: "WHERE danger_level > (SELECT AVG(danger_level) FROM dimensions)",
        description: "Subquery finds above-average danger dimensions",
      },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "rm-sql-09",
    themeId: "rick-and-morty",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "Dimension Safety Classification",
    narrative:
      "Rick refuses to admit any dimension is truly dangerous, but Beth has insisted on a formal safety rating system. Each dimension in the database needs a human-readable safety label for family trip planning purposes.",
    prompt:
      "Write a query that selects `dim_id`, `name`, `danger_level`, and a computed `safety_label`: 'Do Not Enter' when danger_level >= 9, 'Risky' when danger_level >= 6, 'Safe Enough' otherwise.",
    hint: "Use `CASE WHEN danger_level >= 9 THEN 'Do Not Enter' WHEN danger_level >= 6 THEN 'Risky' ELSE 'Safe Enough' END AS safety_label`.",
    solution: `SELECT\n  dim_id,\n  name,\n  danger_level,\n  CASE\n    WHEN danger_level >= 9 THEN 'Do Not Enter'\n    WHEN danger_level >= 6 THEN 'Risky'\n    ELSE 'Safe Enough'\n  END AS safety_label\nFROM dimensions;`,
    starterCode: `-- Dimension Safety Classification\n-- Assign safety labels to each dimension\n\nSELECT\n  dim_id,\n  name,\n  danger_level,\n  CASE\n    WHEN danger_level >= 9 THEN 'Do Not Enter'\n    WHEN danger_level >= 6 THEN ___\n    ELSE ___\n  END AS safety_label\nFROM dimensions;`,
    testCases: [
      {
        input: "",
        expected: "CASE WHEN danger_level >= 9 THEN 'Do Not Enter'",
        description: "Classifies dimensions into safety label tiers",
      },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "rm-sql-10",
    themeId: "rick-and-morty",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "Interdimensional Travel Report",
    narrative:
      "The Council of Ricks demands a full interdimensional travel audit. Portals opened, dimensions visited, danger levels summarized — all joined and filtered so they can track which Ricks are recklessly endangering their Mortys.",
    prompt:
      "Write a query that JOINs `portals` and `dimensions` on `dimension_id = dimensions.dim_id`, selects `portals.opened_by`, `COUNT(*) AS trips`, and `AVG(dimensions.danger_level) AS avg_danger`, filters to `dimensions.danger_level >= 5`, groups by `portals.opened_by`, and orders by `avg_danger` descending.",
    hint: "Chain INNER JOIN ... WHERE danger_level >= 5 GROUP BY portals.opened_by ORDER BY avg_danger DESC.",
    solution: `SELECT\n  portals.opened_by,\n  COUNT(*) AS trips,\n  AVG(dimensions.danger_level) AS avg_danger\nFROM portals\nINNER JOIN dimensions ON portals.dimension_id = dimensions.dim_id\nWHERE dimensions.danger_level >= 5\nGROUP BY portals.opened_by\nORDER BY avg_danger DESC;`,
    starterCode: `-- Interdimensional Travel Report\n-- Join, filter, group, and rank portal travel data\n\nSELECT\n  portals.opened_by,\n  COUNT(*) AS trips,\n  AVG(dimensions.danger_level) AS avg_danger\nFROM portals\nINNER JOIN dimensions ON ___\nWHERE dimensions.danger_level >= 5\nGROUP BY ___\nORDER BY avg_danger DESC;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN dimensions ON portals.dimension_id = dimensions.dim_id",
        description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY",
      },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
