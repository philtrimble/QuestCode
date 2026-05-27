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
  {
    id: "mx-sql-06",
    themeId: "the-matrix",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Anomalies and Their Agents",
    narrative:
      "The Architect needs a consolidated view linking each anomaly record with the agent assigned to handle it. The `anomalies` table and the `agents` table share a relationship through the `assigned_agent` column. Merge them before the next iteration begins.",
    prompt:
      "Write a query that selects `anomalies.type`, `anomalies.threat_level`, and `agents.designation` by performing an INNER JOIN between `anomalies` and `agents` on `anomalies.assigned_agent = agents.name`.",
    hint: "Use `INNER JOIN agents ON anomalies.assigned_agent = agents.name`.",
    solution: `SELECT anomalies.type, anomalies.threat_level, agents.designation\nFROM anomalies\nINNER JOIN agents ON anomalies.assigned_agent = agents.name;`,
    starterCode: `-- Anomalies and Their Agents\n-- Join anomalies with agents on assigned_agent\n\nSELECT anomalies.type, anomalies.threat_level, agents.designation\nFROM anomalies\n___ JOIN agents ON ___;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN agents ON anomalies.assigned_agent = agents.name",
        description: "Joins anomalies and agents tables",
      },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "mx-sql-07",
    themeId: "the-matrix",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "Overloaded Agents",
    narrative:
      "The system is experiencing cascading failures. Neo and Morpheus need to know which agents have been assigned more than one anomaly — those agents are either overwhelmed or dangerously capable.",
    prompt:
      "Write a query that selects `assigned_agent` and `COUNT(*) AS assignment_count` from `anomalies`, grouped by `assigned_agent`, filtered with HAVING to show only agents with more than 1 assignment, ordered by `assignment_count` descending.",
    hint: "Use `HAVING COUNT(*) > 1` after `GROUP BY assigned_agent`.",
    solution: `SELECT assigned_agent, COUNT(*) AS assignment_count\nFROM anomalies\nGROUP BY assigned_agent\nHAVING COUNT(*) > 1\nORDER BY assignment_count DESC;`,
    starterCode: `-- Overloaded Agents\n-- Find agents assigned to more than one anomaly\n\nSELECT assigned_agent, COUNT(*) AS assignment_count\nFROM anomalies\nGROUP BY assigned_agent\nHAVING ___\nORDER BY assignment_count DESC;`,
    testCases: [
      {
        input: "",
        expected: "HAVING COUNT(*) > 1",
        description: "Filters for agents with multiple assignments",
      },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "mx-sql-08",
    themeId: "the-matrix",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Above-Threshold Anomalies",
    narrative:
      "The Oracle has foreseen that only the anomalies exceeding the average threat level will trigger the system reboot. Trinity needs to isolate exactly those records before the machines can respond.",
    prompt:
      "Write a query that selects `type`, `assigned_agent`, and `threat_level` from `anomalies` WHERE `threat_level` is greater than the average threat level across all anomalies (use a subquery).",
    hint: "Use `WHERE threat_level > (SELECT AVG(threat_level) FROM anomalies)`.",
    solution: `SELECT type, assigned_agent, threat_level\nFROM anomalies\nWHERE threat_level > (SELECT AVG(threat_level) FROM anomalies);`,
    starterCode: `-- Above-Threshold Anomalies\n-- Find anomalies with above-average threat levels\n\nSELECT type, assigned_agent, threat_level\nFROM anomalies\nWHERE threat_level > (___ AVG(threat_level) FROM anomalies);`,
    testCases: [
      {
        input: "",
        expected: "WHERE threat_level > (SELECT AVG(threat_level) FROM anomalies)",
        description: "Subquery isolates above-average threat anomalies",
      },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "mx-sql-09",
    themeId: "the-matrix",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "Anomaly Severity Codes",
    narrative:
      "The Architect classifies every anomaly into a response protocol tier. The machines don't respond to nuance — they respond to codes. Translate each threat level into the system's official severity classification.",
    prompt:
      "Write a query that selects `type`, `threat_level`, and a computed `severity`: 'CRITICAL' when threat_level >= 9, 'ELEVATED' when threat_level >= 6, 'MONITORED' otherwise.",
    hint: "Use `CASE WHEN threat_level >= 9 THEN 'CRITICAL' WHEN threat_level >= 6 THEN 'ELEVATED' ELSE 'MONITORED' END AS severity`.",
    solution: `SELECT\n  type,\n  threat_level,\n  CASE\n    WHEN threat_level >= 9 THEN 'CRITICAL'\n    WHEN threat_level >= 6 THEN 'ELEVATED'\n    ELSE 'MONITORED'\n  END AS severity\nFROM anomalies;`,
    starterCode: `-- Anomaly Severity Codes\n-- Classify each anomaly by threat severity code\n\nSELECT\n  type,\n  threat_level,\n  CASE\n    WHEN threat_level >= 9 THEN 'CRITICAL'\n    WHEN threat_level >= 6 THEN ___\n    ELSE ___\n  END AS severity\nFROM anomalies;`,
    testCases: [
      {
        input: "",
        expected: "CASE WHEN threat_level >= 9 THEN 'CRITICAL'",
        description: "Classifies anomalies into severity codes",
      },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "mx-sql-10",
    themeId: "the-matrix",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "Simulation Integrity Report",
    narrative:
      "The sixth version of the Matrix is failing. The Architect needs a complete integrity report: agent workloads joined with anomaly data, filtered to critical threats, grouped to show which agents face the most dangerous conditions.",
    prompt:
      "Write a query that JOINs `anomalies` and `agents` on `assigned_agent = agents.name`, selects `agents.designation`, `COUNT(*) AS anomaly_count`, and `AVG(anomalies.threat_level) AS avg_threat`, filters to `anomalies.threat_level >= 7`, groups by `agents.designation`, and orders by `avg_threat` descending.",
    hint: "Chain INNER JOIN ... WHERE threat_level >= 7 GROUP BY agents.designation ORDER BY avg_threat DESC.",
    solution: `SELECT\n  agents.designation,\n  COUNT(*) AS anomaly_count,\n  AVG(anomalies.threat_level) AS avg_threat\nFROM anomalies\nINNER JOIN agents ON anomalies.assigned_agent = agents.name\nWHERE anomalies.threat_level >= 7\nGROUP BY agents.designation\nORDER BY avg_threat DESC;`,
    starterCode: `-- Simulation Integrity Report\n-- Join, filter, group, and rank agent threat data\n\nSELECT\n  agents.designation,\n  COUNT(*) AS anomaly_count,\n  AVG(anomalies.threat_level) AS avg_threat\nFROM anomalies\nINNER JOIN agents ON ___\nWHERE anomalies.threat_level >= 7\nGROUP BY ___\nORDER BY avg_threat DESC;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN agents ON anomalies.assigned_agent = agents.name",
        description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY",
      },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
