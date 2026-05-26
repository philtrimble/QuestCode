import type { Challenge } from "@/types";

export const breakingBadSQLChallenges: Challenge[] = [
  {
    id: "bb-sql-01",
    themeId: "breaking-bad",
    languageId: "sql",
    order: 1,
    title: "SELECT Basics",
    themedTitle: "The Product Inventory",
    narrative:
      "Walter White's operation is growing. He needs to keep track of his inventory. A table called `products` has columns: `name`, `purity`, and `batch_size_grams`. Let's start by looking at everything.",
    prompt:
      "Write a SQL query that selects ALL columns from the `products` table. Then write a second query that selects ONLY the `name` and `purity` columns.",
    hint: "Use `SELECT *` to get all columns, or list specific column names separated by commas.",
    solution: `-- All columns\nSELECT * FROM products;\n\n-- Just name and purity\nSELECT name, purity FROM products;`,
    starterCode: `-- The Product Inventory\n\n-- Query 1: Select all columns from products\nSELECT ___ FROM products;\n\n-- Query 2: Select only name and purity\nSELECT ___, ___ FROM products;`,
    testCases: [
      { input: "", expected: "SELECT * FROM products", description: "Selects all columns" },
      { input: "", expected: "SELECT name, purity FROM products", description: "Selects specific columns" },
    ],
    concept: "SELECT Basics",
    difficulty: "beginner",
  },
  {
    id: "bb-sql-02",
    themeId: "breaking-bad",
    languageId: "sql",
    order: 2,
    title: "WHERE Clause",
    themedTitle: "Finding the Good Stuff",
    narrative:
      "Jesse says the quality has to be 99% pure or Heisenberg's reputation is done. You need to query the `products` table and find only the batches with purity greater than or equal to 99.",
    prompt:
      "Write a query that selects `name`, `purity`, and `batch_size_grams` from `products` WHERE the `purity` is 99 or higher.",
    hint: "Use the `WHERE` clause after the table name: `WHERE purity >= 99`",
    solution: `SELECT name, purity, batch_size_grams\nFROM products\nWHERE purity >= 99;`,
    starterCode: `-- Finding the Good Stuff\n-- Select name, purity, and batch_size_grams where purity >= 99\n\nSELECT name, purity, batch_size_grams\nFROM products\nWHERE ___;`,
    testCases: [
      { input: "", expected: "WHERE purity >= 99", description: "Filters for high purity products" },
    ],
    concept: "WHERE Clause",
    difficulty: "beginner",
  },
  {
    id: "bb-sql-03",
    themeId: "breaking-bad",
    languageId: "sql",
    order: 3,
    title: "ORDER BY & LIMIT",
    themedTitle: "Top Batches",
    narrative:
      "Mike wants to know Walt's top 3 batches by purity. He doesn't trust Walt's memory. Write a query that pulls it straight from the database.",
    prompt:
      "Write a query that selects `name` and `purity` from `products`, ordered by `purity` from highest to lowest, and limited to the top 3 results.",
    hint: "Chain `ORDER BY purity DESC` and `LIMIT 3` at the end of your query.",
    solution: `SELECT name, purity\nFROM products\nORDER BY purity DESC\nLIMIT 3;`,
    starterCode: `-- Top Batches\n-- Select name and purity, ordered by purity (highest first), top 3 only\n\nSELECT name, purity\nFROM products\nORDER BY ___ ___\nLIMIT ___;`,
    testCases: [
      { input: "", expected: "ORDER BY purity DESC LIMIT 3", description: "Top 3 by purity descending" },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "bb-sql-04",
    themeId: "breaking-bad",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "Counting Saul's Clients",
    narrative:
      "Saul Goodman keeps a `clients` table with columns `name`, `case_type`, and `fees_paid`. He wants a dashboard showing total clients and total fees — because it's all about the Benjamins.",
    prompt:
      "Write a query that returns: the total number of clients (as `total_clients`), the total fees paid (as `total_fees`), and the average fee (as `avg_fee`) from the `clients` table.",
    hint: "Use `COUNT(*)`, `SUM(fees_paid)`, and `AVG(fees_paid)` with column aliases using `AS`.",
    solution: `SELECT\n  COUNT(*) AS total_clients,\n  SUM(fees_paid) AS total_fees,\n  AVG(fees_paid) AS avg_fee\nFROM clients;`,
    starterCode: `-- Counting Saul's Clients\n-- Return total_clients, total_fees, and avg_fee\n\nSELECT\n  ___ AS total_clients,\n  ___ AS total_fees,\n  ___ AS avg_fee\nFROM clients;`,
    testCases: [
      { input: "", expected: "COUNT(*) AS total_clients", description: "Counts all clients" },
    ],
    concept: "Aggregate Functions",
    difficulty: "beginner",
  },
  {
    id: "bb-sql-05",
    themeId: "breaking-bad",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Distribution Routes",
    narrative:
      "The distribution network has a `deliveries` table with columns `distributor`, `territory`, and `quantity_lbs`. Walt needs a breakdown of total deliveries per territory to know which routes are most profitable.",
    prompt:
      "Write a query that selects `territory` and the total quantity delivered (as `total_quantity`) from `deliveries`, grouped by territory, ordered by total quantity from highest to lowest.",
    hint: "Use `GROUP BY territory` and `SUM(quantity_lbs)`. Then `ORDER BY total_quantity DESC`.",
    solution: `SELECT\n  territory,\n  SUM(quantity_lbs) AS total_quantity\nFROM deliveries\nGROUP BY territory\nORDER BY total_quantity DESC;`,
    starterCode: `-- Distribution Routes\n-- Group deliveries by territory, sum the quantities, order by highest first\n\nSELECT\n  territory,\n  ___ AS total_quantity\nFROM deliveries\nGROUP BY ___\nORDER BY ___ DESC;`,
    testCases: [
      { input: "", expected: "GROUP BY territory", description: "Groups by territory correctly" },
    ],
    concept: "GROUP BY",
    difficulty: "beginner",
  },
];
