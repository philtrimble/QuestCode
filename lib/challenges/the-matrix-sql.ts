import type { Challenge } from "@/types";

export const theMatrixSQLChallenges: Challenge[] = [
  {
    id: "mx-sql-01",
    themeId: "the-matrix",
    languageId: "sql",
    order: 1,
    title: "SELECT",
    themedTitle: "The Anomaly Registry",
    narrative:
      "The Architect monitors every anomaly within the simulation. The `anomalies` table contains every logged irregularity — rogue programs, unplugged humans, and unresolved variables. Morpheus needs the full dump before the next meeting with the Oracle.",
    prompt:
      "Write a SQL query that selects ALL columns from the `anomalies` table.",
    hint: "Use `SELECT * FROM anomalies` to retrieve every column and every row.",
    solution: `SELECT * FROM anomalies;`,
    starterCode: `-- The Anomaly Registry\n-- Select all columns from the anomalies table\n\nSELECT ___ FROM anomalies;`,
    testCases: [
      {
        input: "",
        expected: "SELECT * FROM anomalies",
        description: "Retrieves all anomaly records",
      },
    ],
    concept: "SELECT",
    difficulty: "beginner",
  },
  {
    id: "mx-sql-02",
    themeId: "the-matrix",
    languageId: "sql",
    order: 2,
    title: "WHERE",
    themedTitle: "Active Threats",
    narrative:
      "Agent Smith is multiplying. Trinity needs to identify only the anomalies that are currently 'active' — everything else can wait. Filter the registry so the crew of the Nebuchadnezzar knows what they're dealing with right now.",
    prompt:
      "Write a query that selects `name`, `type`, and `threat_level` from `anomalies` WHERE the `status` is 'active'.",
    hint: "Use `WHERE status = 'active'` — single quotes around the string value.",
    solution: `SELECT name, type, threat_level\nFROM anomalies\nWHERE status = 'active';`,
    starterCode: `-- Active Threats\n-- Select name, type, and threat_level for active anomalies\n\nSELECT name, type, threat_level\nFROM anomalies\nWHERE ___;`,
    testCases: [
      {
        input: "",
        expected: "WHERE status = 'active'",
        description: "Filters for active anomalies only",
      },
    ],
    concept: "WHERE",
    difficulty: "beginner",
  },
  {
    id: "mx-sql-03",
    themeId: "the-matrix",
    languageId: "sql",
    order: 3,
    title: "ORDER BY & LIMIT",
    themedTitle: "Most Dangerous Programs",
    narrative:
      "Neo has chosen the red pill but the simulation is adapting. The Oracle tells him he needs to prioritize — focus on the top 5 most dangerous anomalies first. There is no spoon, but there is a LIMIT clause.",
    prompt:
      "Write a query that selects `name`, `type`, and `threat_level` from `anomalies`, ordered by `threat_level` from highest to lowest, showing only the top 5 results.",
    hint: "Use `ORDER BY threat_level DESC` followed by `LIMIT 5`.",
    solution: `SELECT name, type, threat_level\nFROM anomalies\nORDER BY threat_level DESC\nLIMIT 5;`,
    starterCode: `-- Most Dangerous Programs\n-- Select name, type, and threat_level ordered by threat (highest first), top 5 only\n\nSELECT name, type, threat_level\nFROM anomalies\nORDER BY ___ ___\nLIMIT ___;`,
    testCases: [
      {
        input: "",
        expected: "ORDER BY threat_level DESC LIMIT 5",
        description: "Top 5 anomalies by threat level descending",
      },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "mx-sql-04",
    themeId: "the-matrix",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "Simulation Statistics",
    narrative:
      "The Architect reclines in his white chair and demands a summary report. How many anomalies exist in the current cycle? What is the total threat load on the simulation? And what is the average threat level? This is the sixth version of the Matrix.",
    prompt:
      "Write a query that returns: the total number of anomalies (as `total_anomalies`), the total combined threat level (as `total_threat`), and the average threat level (as `avg_threat`) from the `anomalies` table.",
    hint: "Use `COUNT(*)`, `SUM(threat_level)`, and `AVG(threat_level)` with `AS` aliases.",
    solution: `SELECT\n  COUNT(*) AS total_anomalies,\n  SUM(threat_level) AS total_threat,\n  AVG(threat_level) AS avg_threat\nFROM anomalies;`,
    starterCode: `-- Simulation Statistics\n-- Return total_anomalies, total_threat, and avg_threat\n\nSELECT\n  ___ AS total_anomalies,\n  ___ AS total_threat,\n  ___ AS avg_threat\nFROM anomalies;`,
    testCases: [
      {
        input: "",
        expected: "COUNT(*) AS total_anomalies",
        description: "Counts all anomaly records",
      },
    ],
    concept: "Aggregate Functions",
    difficulty: "intermediate",
  },
  {
    id: "mx-sql-05",
    themeId: "the-matrix",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Anomalies by Type",
    narrative:
      "The machines are classifying threats to better deploy their Agents. Morpheus needs to understand which types of anomalies are most prevalent in the simulation. Group the registry by anomaly type so the resistance can allocate its resources.",
    prompt:
      "Write a query that selects `type` and the total number of anomalies per type (as `anomaly_count`) from `anomalies`, grouped by `type`, ordered by `anomaly_count` from highest to lowest.",
    hint: "Use `GROUP BY type` and `COUNT(*)`. Order by the alias `anomaly_count DESC`.",
    solution: `SELECT\n  type,\n  COUNT(*) AS anomaly_count\nFROM anomalies\nGROUP BY type\nORDER BY anomaly_count DESC;`,
    starterCode: `-- Anomalies by Type\n-- Count anomalies per type, ordered by most common first\n\nSELECT\n  type,\n  ___ AS anomaly_count\nFROM anomalies\nGROUP BY ___\nORDER BY ___ DESC;`,
    testCases: [
      {
        input: "",
        expected: "GROUP BY type",
        description: "Groups anomalies by type correctly",
      },
    ],
    concept: "GROUP BY",
    difficulty: "intermediate",
  },
];
