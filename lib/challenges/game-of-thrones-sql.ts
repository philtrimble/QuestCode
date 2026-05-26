import type { Challenge } from "@/types";

export const gameOfThronesSQLChallenges: Challenge[] = [
  {
    id: "got-sql-01",
    themeId: "game-of-thrones",
    languageId: "sql",
    order: 1,
    title: "SELECT",
    themedTitle: "The Great Houses",
    narrative:
      "The Maesters of the Citadel have compiled a `houses` table recording every great house in Westeros — their words, their regions, and the size of their armies. The Small Council demands a full accounting before the next war council. Retrieve everything.",
    prompt:
      "Write a SQL query that selects ALL columns from the `houses` table.",
    hint: "Use `SELECT * FROM houses` to retrieve every column and every row.",
    solution: `SELECT * FROM houses;`,
    starterCode: `-- The Great Houses\n-- Select all columns from the houses table\n\nSELECT ___ FROM houses;`,
    testCases: [
      {
        input: "",
        expected: "SELECT * FROM houses",
        description: "Retrieves all house records",
      },
    ],
    concept: "SELECT",
    difficulty: "beginner",
  },
  {
    id: "got-sql-02",
    themeId: "game-of-thrones",
    languageId: "sql",
    order: 2,
    title: "WHERE",
    themedTitle: "Loyal to the Dragon Queen",
    narrative:
      "Daenerys Targaryen, First of Her Name, wishes to know which houses have pledged their allegiance to her. Tyrion Lannister advises pulling only the loyal houses from the `houses` table before the march on King's Landing.",
    prompt:
      "Write a query that selects `name`, `region`, and `army_size` from `houses` WHERE the `allegiance` is 'Targaryen'.",
    hint: "Use `WHERE allegiance = 'Targaryen'` — single quotes around the string value.",
    solution: `SELECT name, region, army_size\nFROM houses\nWHERE allegiance = 'Targaryen';`,
    starterCode: `-- Loyal to the Dragon Queen\n-- Select name, region, and army_size for houses pledged to the Targaryens\n\nSELECT name, region, army_size\nFROM houses\nWHERE ___;`,
    testCases: [
      {
        input: "",
        expected: "WHERE allegiance = 'Targaryen'",
        description: "Filters for Targaryen-aligned houses only",
      },
    ],
    concept: "WHERE",
    difficulty: "beginner",
  },
  {
    id: "got-sql-03",
    themeId: "game-of-thrones",
    languageId: "sql",
    order: 3,
    title: "ORDER BY & LIMIT",
    themedTitle: "The Mightiest Armies",
    narrative:
      "Jon Snow must know who can stand against the Night King. Ser Davos has been tallying banners for weeks. Pull the top 5 largest armies in Westeros so the King in the North knows who to call upon when winter truly arrives.",
    prompt:
      "Write a query that selects `name`, `region`, and `army_size` from `houses`, ordered by `army_size` from largest to smallest, showing only the top 5 results.",
    hint: "Use `ORDER BY army_size DESC` followed by `LIMIT 5`.",
    solution: `SELECT name, region, army_size\nFROM houses\nORDER BY army_size DESC\nLIMIT 5;`,
    starterCode: `-- The Mightiest Armies\n-- Select name, region, and army_size ordered by army size (largest first), top 5 only\n\nSELECT name, region, army_size\nFROM houses\nORDER BY ___ ___\nLIMIT ___;`,
    testCases: [
      {
        input: "",
        expected: "ORDER BY army_size DESC LIMIT 5",
        description: "Top 5 houses by army size descending",
      },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "got-sql-04",
    themeId: "game-of-thrones",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "The Realm's Strength",
    narrative:
      "The Master of Coin, Lord Baelish, needs a comprehensive military census. How many houses stand ready? What is the combined strength of all armies in Westeros? And what is the average host size? The Iron Throne depends on these numbers.",
    prompt:
      "Write a query that returns: the total number of houses (as `total_houses`), the total combined army size (as `total_armies`), and the average army size (as `avg_army`) from the `houses` table.",
    hint: "Use `COUNT(*)`, `SUM(army_size)`, and `AVG(army_size)` with `AS` aliases.",
    solution: `SELECT\n  COUNT(*) AS total_houses,\n  SUM(army_size) AS total_armies,\n  AVG(army_size) AS avg_army\nFROM houses;`,
    starterCode: `-- The Realm's Strength\n-- Return total_houses, total_armies, and avg_army\n\nSELECT\n  ___ AS total_houses,\n  ___ AS total_armies,\n  ___ AS avg_army\nFROM houses;`,
    testCases: [
      {
        input: "",
        expected: "COUNT(*) AS total_houses",
        description: "Counts all house records",
      },
    ],
    concept: "Aggregate Functions",
    difficulty: "intermediate",
  },
  {
    id: "got-sql-05",
    themeId: "game-of-thrones",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Armies by Allegiance",
    narrative:
      "The war of the five kings has fractured Westeros. Cersei Lannister wants to know how many armies are pledged to each banner — and which allegiance commands the most total soldiers. A queen must know her enemies as well as her allies.",
    prompt:
      "Write a query that selects `allegiance` and the total army strength per allegiance (as `total_strength`) from `houses`, grouped by `allegiance`, ordered by `total_strength` from highest to lowest.",
    hint: "Use `GROUP BY allegiance` and `SUM(army_size)`. Order by the alias `total_strength DESC`.",
    solution: `SELECT\n  allegiance,\n  SUM(army_size) AS total_strength\nFROM houses\nGROUP BY allegiance\nORDER BY total_strength DESC;`,
    starterCode: `-- Armies by Allegiance\n-- Total army strength per allegiance, ordered by strongest first\n\nSELECT\n  allegiance,\n  ___ AS total_strength\nFROM houses\nGROUP BY ___\nORDER BY ___ DESC;`,
    testCases: [
      {
        input: "",
        expected: "GROUP BY allegiance",
        description: "Groups houses by allegiance correctly",
      },
    ],
    concept: "GROUP BY",
    difficulty: "intermediate",
  },
];
