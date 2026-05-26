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
];
