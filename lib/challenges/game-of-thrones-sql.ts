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
  {
    id: "got-sql-06",
    themeId: "game-of-thrones",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Battles and the Houses That Fought",
    narrative:
      "The Maester's archive contains two tables: `battles` recording every major engagement, and `houses` recording each noble house. Tyrion needs them joined so the Small Council can see which houses fought which battles — and who survived.",
    prompt:
      "Write a query that selects `battles.name`, `battles.year`, and `houses.region` by performing an INNER JOIN between `battles` and `houses` on `battles.attacker = houses.name`.",
    hint: "Use `INNER JOIN houses ON battles.attacker = houses.name`.",
    solution: `SELECT battles.name, battles.year, houses.region\nFROM battles\nINNER JOIN houses ON battles.attacker = houses.name;`,
    starterCode: `-- Battles and the Houses That Fought\n-- Join battles with houses on attacker name\n\nSELECT battles.name, battles.year, houses.region\nFROM battles\n___ JOIN houses ON ___;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN houses ON battles.attacker = houses.name",
        description: "Joins battles and houses tables",
      },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "got-sql-07",
    themeId: "game-of-thrones",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "Major Military Allegiances",
    narrative:
      "The Hand of the King needs to know which allegiances command enough combined forces to matter in the wars to come. Filter out any allegiance with a total army smaller than 20,000 — the rest are noise.",
    prompt:
      "Write a query that selects `allegiance` and `SUM(army_size) AS total_strength` from `houses`, grouped by `allegiance`, filtered with HAVING to show only allegiances with total strength greater than 20000, ordered by `total_strength` descending.",
    hint: "Use `HAVING SUM(army_size) > 20000` after `GROUP BY allegiance`.",
    solution: `SELECT allegiance, SUM(army_size) AS total_strength\nFROM houses\nGROUP BY allegiance\nHAVING SUM(army_size) > 20000\nORDER BY total_strength DESC;`,
    starterCode: `-- Major Military Allegiances\n-- Find allegiances with combined armies over 20,000\n\nSELECT allegiance, SUM(army_size) AS total_strength\nFROM houses\nGROUP BY allegiance\nHAVING ___\nORDER BY total_strength DESC;`,
    testCases: [
      {
        input: "",
        expected: "HAVING SUM(army_size) > 20000",
        description: "Filters for allegiances with significant combined forces",
      },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "got-sql-08",
    themeId: "game-of-thrones",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Mightier Than Most",
    narrative:
      "Cersei wants to know which houses field armies larger than the Westerosi average — the ones who could actually challenge her in open battle, and the ones she should be watching.",
    prompt:
      "Write a query that selects `name`, `region`, and `army_size` from `houses` WHERE `army_size` is greater than the average army size across all houses (use a subquery).",
    hint: "Use `WHERE army_size > (SELECT AVG(army_size) FROM houses)`.",
    solution: `SELECT name, region, army_size\nFROM houses\nWHERE army_size > (SELECT AVG(army_size) FROM houses);`,
    starterCode: `-- Mightier Than Most\n-- Find houses with above-average army sizes\n\nSELECT name, region, army_size\nFROM houses\nWHERE army_size > (___ AVG(army_size) FROM houses);`,
    testCases: [
      {
        input: "",
        expected: "WHERE army_size > (SELECT AVG(army_size) FROM houses)",
        description: "Subquery finds above-average army sizes",
      },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "got-sql-09",
    themeId: "game-of-thrones",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "Military Power Rating",
    narrative:
      "The Master of Whisperers needs to assign power ratings to each great house for his little birds to report on. A numeric army size alone says nothing — the rating system speaks the language of politics.",
    prompt:
      "Write a query that selects `name`, `army_size`, and a computed `power_rating`: 'Dominant' when army_size >= 35000, 'Formidable' when army_size >= 15000, 'Minor' otherwise.",
    hint: "Use `CASE WHEN army_size >= 35000 THEN 'Dominant' WHEN army_size >= 15000 THEN 'Formidable' ELSE 'Minor' END AS power_rating`.",
    solution: `SELECT\n  name,\n  army_size,\n  CASE\n    WHEN army_size >= 35000 THEN 'Dominant'\n    WHEN army_size >= 15000 THEN 'Formidable'\n    ELSE 'Minor'\n  END AS power_rating\nFROM houses;`,
    starterCode: `-- Military Power Rating\n-- Classify each house by army size power rating\n\nSELECT\n  name,\n  army_size,\n  CASE\n    WHEN army_size >= 35000 THEN 'Dominant'\n    WHEN army_size >= 15000 THEN ___\n    ELSE ___\n  END AS power_rating\nFROM houses;`,
    testCases: [
      {
        input: "",
        expected: "CASE WHEN army_size >= 35000 THEN 'Dominant'",
        description: "Classifies houses into power rating tiers",
      },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "got-sql-10",
    themeId: "game-of-thrones",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "War Council Intelligence Report",
    narrative:
      "Jon Snow must rally the North and its allies before the dead march south. He needs a complete war council report: battle history joined with house data, filtered to significant conflicts, and summarized by region.",
    prompt:
      "Write a query that JOINs `battles` and `houses` on `battles.attacker = houses.name`, selects `houses.region`, `COUNT(*) AS battle_count`, and `SUM(houses.army_size) AS region_strength`, filters to `houses.army_size >= 10000`, groups by `houses.region`, and orders by `battle_count` descending.",
    hint: "Chain INNER JOIN ... WHERE army_size >= 10000 GROUP BY houses.region ORDER BY battle_count DESC.",
    solution: `SELECT\n  houses.region,\n  COUNT(*) AS battle_count,\n  SUM(houses.army_size) AS region_strength\nFROM battles\nINNER JOIN houses ON battles.attacker = houses.name\nWHERE houses.army_size >= 10000\nGROUP BY houses.region\nORDER BY battle_count DESC;`,
    starterCode: `-- War Council Intelligence Report\n-- Join, filter, group, and rank regional battle data\n\nSELECT\n  houses.region,\n  COUNT(*) AS battle_count,\n  SUM(houses.army_size) AS region_strength\nFROM battles\nINNER JOIN houses ON ___\nWHERE houses.army_size >= 10000\nGROUP BY ___\nORDER BY battle_count DESC;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN houses ON battles.attacker = houses.name",
        description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY",
      },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
