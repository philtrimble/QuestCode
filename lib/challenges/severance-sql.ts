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
  {
    id: "sv-sql-06",
    themeId: "severance",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Employees and Their Departments",
    narrative:
      "Mr. Milchick needs a comprehensive report combining employee records from the `employees` table with official department data from the `departments` table. The Board requires complete transparency — at least on the severed floor.",
    prompt:
      "Write a query that selects `employees.name`, `employees.refinement_score`, and `departments.budget` by performing an INNER JOIN between `employees` and `departments` on `employees.department = departments.name`.",
    hint: "Use `INNER JOIN departments ON employees.department = departments.name` to link the tables.",
    solution: `SELECT employees.name, employees.refinement_score, departments.budget\nFROM employees\nINNER JOIN departments ON employees.department = departments.name;`,
    starterCode: `-- Employees and Their Departments\n-- Join employees with departments on department name\n\nSELECT employees.name, employees.refinement_score, departments.budget\nFROM employees\n___ JOIN departments ON ___;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN departments ON employees.department = departments.name",
        description: "Joins employees and departments tables",
      },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "sv-sql-07",
    themeId: "severance",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "Departments Worth Monitoring",
    narrative:
      "The Board suspects some departments are understaffed. Harmony Cobel needs to identify departments with more than one employee so that truly isolated workers can be flagged for additional oversight — or wellness checks.",
    prompt:
      "Write a query that selects `department` and `COUNT(*) AS headcount` from `employees`, grouped by `department`, filtered with HAVING to show only departments with more than 1 employee, ordered by `headcount` descending.",
    hint: "Use `HAVING COUNT(*) > 1` after `GROUP BY department`.",
    solution: `SELECT department, COUNT(*) AS headcount\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 1\nORDER BY headcount DESC;`,
    starterCode: `-- Departments Worth Monitoring\n-- Find departments with more than one employee\n\nSELECT department, COUNT(*) AS headcount\nFROM employees\nGROUP BY department\nHAVING ___\nORDER BY headcount DESC;`,
    testCases: [
      {
        input: "",
        expected: "HAVING COUNT(*) > 1",
        description: "Filters departments with more than one employee",
      },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "sv-sql-08",
    themeId: "severance",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Above-Average Refiners",
    narrative:
      "The waffle party committee needs to identify employees performing above the company average. Kier Eagan's vision demands excellence, and excellence must be measured against the collective mean.",
    prompt:
      "Write a query that selects `name`, `department`, and `refinement_score` from `employees` WHERE `refinement_score` is greater than the average `refinement_score` (use a subquery).",
    hint: "Use `WHERE refinement_score > (SELECT AVG(refinement_score) FROM employees)`.",
    solution: `SELECT name, department, refinement_score\nFROM employees\nWHERE refinement_score > (SELECT AVG(refinement_score) FROM employees);`,
    starterCode: `-- Above-Average Refiners\n-- Find employees scoring above the company average\n\nSELECT name, department, refinement_score\nFROM employees\nWHERE refinement_score > (___ AVG(refinement_score) FROM employees);`,
    testCases: [
      {
        input: "",
        expected: "WHERE refinement_score > (SELECT AVG(refinement_score) FROM employees)",
        description: "Subquery finds above-average refinement scores",
      },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "sv-sql-09",
    themeId: "severance",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "Performance Classification",
    narrative:
      "Lumon's annual review cycle requires each employee to be classified into a performance tier. The system does not explain what happens to employees in the lowest tier. It simply categorizes them.",
    prompt:
      "Write a query that selects `name`, `refinement_score`, and a computed `performance_tier`: 'Outstanding' when score >= 900, 'Proficient' when score >= 700, 'Developing' otherwise.",
    hint: "Use `CASE WHEN refinement_score >= 900 THEN 'Outstanding' WHEN refinement_score >= 700 THEN 'Proficient' ELSE 'Developing' END AS performance_tier`.",
    solution: `SELECT\n  name,\n  refinement_score,\n  CASE\n    WHEN refinement_score >= 900 THEN 'Outstanding'\n    WHEN refinement_score >= 700 THEN 'Proficient'\n    ELSE 'Developing'\n  END AS performance_tier\nFROM employees;`,
    starterCode: `-- Performance Classification\n-- Assign a performance tier to each employee\n\nSELECT\n  name,\n  refinement_score,\n  CASE\n    WHEN refinement_score >= 900 THEN 'Outstanding'\n    WHEN refinement_score >= 700 THEN ___\n    ELSE ___\n  END AS performance_tier\nFROM employees;`,
    testCases: [
      {
        input: "",
        expected: "CASE WHEN refinement_score >= 900 THEN 'Outstanding'",
        description: "Classifies employees into performance tiers",
      },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "sv-sql-10",
    themeId: "severance",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "Full Department Briefing",
    narrative:
      "The Board's quarterly review requires a joined, filtered, and summarized report. Mr. Milchick needs department-level averages for MDR and Optics only — combined with official budget figures from the departments table.",
    prompt:
      "Write a query that JOINs `employees` and `departments` on `department = departments.name`, selects `employees.department`, `departments.budget`, and `AVG(employees.refinement_score) AS avg_score`, filters to departments other than 'Management', groups by `employees.department` and `departments.budget`, and orders by `avg_score` descending.",
    hint: "Chain INNER JOIN ... WHERE department != 'Management' GROUP BY employees.department, departments.budget ORDER BY avg_score DESC.",
    solution: `SELECT\n  employees.department,\n  departments.budget,\n  AVG(employees.refinement_score) AS avg_score\nFROM employees\nINNER JOIN departments ON employees.department = departments.name\nWHERE employees.department != 'Management'\nGROUP BY employees.department, departments.budget\nORDER BY avg_score DESC;`,
    starterCode: `-- Full Department Briefing\n-- Join, filter, group, and summarize department data\n\nSELECT\n  employees.department,\n  departments.budget,\n  AVG(employees.refinement_score) AS avg_score\nFROM employees\nINNER JOIN departments ON ___\nWHERE employees.department != 'Management'\nGROUP BY ___, ___\nORDER BY avg_score DESC;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN departments ON employees.department = departments.name",
        description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY",
      },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
