import type { Challenge } from "@/types";

export const severanceSQLChallenges: Challenge[] = [
  {
    id: "sv-sql-01",
    themeId: "severance",
    languageId: "sql",
    order: 1,
    title: "SELECT",
    themedTitle: "The Employee Roster",
    narrative:
      "Welcome to Lumon Industries. You are your work self now. Mr. Milchick has asked you to pull the complete employee roster from the `employees` table. You will not question this task. You will complete this task.",
    prompt:
      "Write a SQL query that selects ALL columns from the `employees` table.",
    hint: "Use `SELECT * FROM employees` to retrieve all columns and all rows.",
    solution: `SELECT * FROM employees;`,
    starterCode: `-- The Employee Roster\n-- Select all columns from the employees table\n\nSELECT ___ FROM employees;`,
    testCases: [
      {
        input: "",
        expected: "SELECT * FROM employees",
        description: "Retrieves all employee records",
      },
    ],
    concept: "SELECT",
    difficulty: "beginner",
  },
  {
    id: "sv-sql-02",
    themeId: "severance",
    languageId: "sql",
    order: 2,
    title: "WHERE",
    themedTitle: "Macrodata Refinement Staff",
    narrative:
      "Harmony Cobel needs a list of everyone currently working in Macrodata Refinement. The department has a certain... turnover problem. Filter the `employees` table to find only those assigned to the MDR department.",
    prompt:
      "Write a query that selects `name`, `refinement_score`, and `hire_date` from `employees` WHERE the `department` is 'Macrodata Refinement'.",
    hint: "Use `WHERE department = 'Macrodata Refinement'` — single quotes around the string value.",
    solution: `SELECT name, refinement_score, hire_date\nFROM employees\nWHERE department = 'Macrodata Refinement';`,
    starterCode: `-- Macrodata Refinement Staff\n-- Select name, refinement_score, and hire_date for MDR employees\n\nSELECT name, refinement_score, hire_date\nFROM employees\nWHERE ___;`,
    testCases: [
      {
        input: "",
        expected: "WHERE department = 'Macrodata Refinement'",
        description: "Filters for Macrodata Refinement employees only",
      },
    ],
    concept: "WHERE",
    difficulty: "beginner",
  },
  {
    id: "sv-sql-03",
    themeId: "severance",
    languageId: "sql",
    order: 3,
    title: "ORDER BY & LIMIT",
    themedTitle: "Top Refiners",
    narrative:
      "Quarterly performance reviews are here. Kier Eagan's eternal wisdom demands that we recognize the top performers. Pull the names and scores of the 3 highest-scoring refiners — they will receive a waffle party.",
    prompt:
      "Write a query that selects `name` and `refinement_score` from `employees`, ordered by `refinement_score` from highest to lowest, showing only the top 3 results.",
    hint: "Use `ORDER BY refinement_score DESC` followed by `LIMIT 3`.",
    solution: `SELECT name, refinement_score\nFROM employees\nORDER BY refinement_score DESC\nLIMIT 3;`,
    starterCode: `-- Top Refiners\n-- Select name and refinement_score, ordered by score (highest first), top 3 only\n\nSELECT name, refinement_score\nFROM employees\nORDER BY ___ ___\nLIMIT ___;`,
    testCases: [
      {
        input: "",
        expected: "ORDER BY refinement_score DESC LIMIT 3",
        description: "Top 3 employees by refinement score descending",
      },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "sv-sql-04",
    themeId: "severance",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "Workforce Analytics",
    narrative:
      "The Board requires a full workforce summary. How many severed employees are on file? What is the combined refinement output? What is the average score? This information does not leave this floor.",
    prompt:
      "Write a query that returns: the total number of employees (as `total_employees`), the total combined refinement score (as `total_score`), and the average refinement score (as `avg_score`) from the `employees` table.",
    hint: "Use `COUNT(*)`, `SUM(refinement_score)`, and `AVG(refinement_score)` with `AS` aliases.",
    solution: `SELECT\n  COUNT(*) AS total_employees,\n  SUM(refinement_score) AS total_score,\n  AVG(refinement_score) AS avg_score\nFROM employees;`,
    starterCode: `-- Workforce Analytics\n-- Return total_employees, total_score, and avg_score\n\nSELECT\n  ___ AS total_employees,\n  ___ AS total_score,\n  ___ AS avg_score\nFROM employees;`,
    testCases: [
      {
        input: "",
        expected: "COUNT(*) AS total_employees",
        description: "Counts all employee records",
      },
    ],
    concept: "Aggregate Functions",
    difficulty: "intermediate",
  },
  {
    id: "sv-sql-05",
    themeId: "severance",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Department Headcount",
    narrative:
      "Lumon's org chart has been compromised. Someone — possibly Mark S. — has been asking too many questions. Rebuild a department-level headcount from the `employees` table so management knows exactly how many bodies are in each department.",
    prompt:
      "Write a query that selects `department` and the number of employees per department (as `headcount`) from `employees`, grouped by `department`, ordered by `headcount` from highest to lowest.",
    hint: "Use `GROUP BY department` and `COUNT(*)`. Order by the alias `headcount DESC`.",
    solution: `SELECT\n  department,\n  COUNT(*) AS headcount\nFROM employees\nGROUP BY department\nORDER BY headcount DESC;`,
    starterCode: `-- Department Headcount\n-- Count employees per department, ordered by largest department first\n\nSELECT\n  department,\n  ___ AS headcount\nFROM employees\nGROUP BY ___\nORDER BY ___ DESC;`,
    testCases: [
      {
        input: "",
        expected: "GROUP BY department",
        description: "Groups employees by department correctly",
      },
    ],
    concept: "GROUP BY",
    difficulty: "intermediate",
  },
];
