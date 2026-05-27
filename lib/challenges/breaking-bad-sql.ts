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
  {
    id: "bb-sql-06",
    themeId: "breaking-bad",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Batches and Their Products",
    narrative:
      "Walter White's operation is expanding. The `batches` table tracks each production run and references `products` by product name. Mike needs a combined report showing batch details alongside product purity to verify quality control.",
    prompt:
      "Write a query that selects `batches.batch_id`, `products.name`, `products.purity`, and `batches.quantity_grams` by performing an INNER JOIN between `batches` and `products` on `batches.product_name = products.name`.",
    hint: "Use `INNER JOIN products ON batches.product_name = products.name`.",
    solution: `SELECT batches.batch_id, products.name, products.purity, batches.quantity_grams\nFROM batches\nINNER JOIN products ON batches.product_name = products.name;`,
    starterCode: `-- Batches and Their Products\n-- Join batches with products on product name\n\nSELECT batches.batch_id, products.name, products.purity, batches.quantity_grams\nFROM batches\n___ JOIN products ON ___;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN products ON batches.product_name = products.name",
        description: "Joins batches and products tables",
      },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "bb-sql-07",
    themeId: "breaking-bad",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "High-Volume Territories",
    narrative:
      "Lydia wants a list of only the distribution territories moving more than 100 pounds total — the truly significant routes. Use GROUP BY and HAVING to filter the noise.",
    prompt:
      "Write a query that selects `territory` and `SUM(quantity_lbs) AS total_quantity` from `deliveries`, grouped by `territory`, filtered with HAVING to show only territories with total quantity greater than 100, ordered by `total_quantity` descending.",
    hint: "Use `HAVING SUM(quantity_lbs) > 100` after `GROUP BY territory`.",
    solution: `SELECT territory, SUM(quantity_lbs) AS total_quantity\nFROM deliveries\nGROUP BY territory\nHAVING SUM(quantity_lbs) > 100\nORDER BY total_quantity DESC;`,
    starterCode: `-- High-Volume Territories\n-- Find territories moving more than 100 lbs total\n\nSELECT territory, SUM(quantity_lbs) AS total_quantity\nFROM deliveries\nGROUP BY territory\nHAVING ___\nORDER BY total_quantity DESC;`,
    testCases: [
      {
        input: "",
        expected: "HAVING SUM(quantity_lbs) > 100",
        description: "Filters for high-volume territories",
      },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "bb-sql-08",
    themeId: "breaking-bad",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Purer Than Average",
    narrative:
      "Jesse insists that only the best product goes out. Walt needs to find all products whose purity exceeds the average purity across their entire catalog — the ones that meet Heisenberg's standard.",
    prompt:
      "Write a query that selects `name` and `purity` from `products` WHERE `purity` is greater than the average purity of all products (use a subquery).",
    hint: "Use `WHERE purity > (SELECT AVG(purity) FROM products)`.",
    solution: `SELECT name, purity\nFROM products\nWHERE purity > (SELECT AVG(purity) FROM products);`,
    starterCode: `-- Purer Than Average\n-- Find products with above-average purity\n\nSELECT name, purity\nFROM products\nWHERE purity > (___ AVG(purity) FROM products);`,
    testCases: [
      {
        input: "",
        expected: "WHERE purity > (SELECT AVG(purity) FROM products)",
        description: "Subquery finds above-average purity products",
      },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "bb-sql-09",
    themeId: "breaking-bad",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "Product Grade Classification",
    narrative:
      "Heisenberg's product line needs to be officially graded for the distribution network. A classification system will help distributors know what they're working with — and what premium they can charge.",
    prompt:
      "Write a query that selects `name`, `purity`, and a computed `grade`: 'Blue Sky' when purity >= 99, 'Premium' when purity >= 90, 'Standard' otherwise.",
    hint: "Use `CASE WHEN purity >= 99 THEN 'Blue Sky' WHEN purity >= 90 THEN 'Premium' ELSE 'Standard' END AS grade`.",
    solution: `SELECT\n  name,\n  purity,\n  CASE\n    WHEN purity >= 99 THEN 'Blue Sky'\n    WHEN purity >= 90 THEN 'Premium'\n    ELSE 'Standard'\n  END AS grade\nFROM products;`,
    starterCode: `-- Product Grade Classification\n-- Classify each product by purity grade\n\nSELECT\n  name,\n  purity,\n  CASE\n    WHEN purity >= 99 THEN 'Blue Sky'\n    WHEN purity >= 90 THEN ___\n    ELSE ___\n  END AS grade\nFROM products;`,
    testCases: [
      {
        input: "",
        expected: "CASE WHEN purity >= 99 THEN 'Blue Sky'",
        description: "Classifies products into quality grades",
      },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "bb-sql-10",
    themeId: "breaking-bad",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "Distribution Network Report",
    narrative:
      "Mike needs a full distribution intelligence report: which products from high-purity batches are moving through high-volume territories. This is the kind of data that keeps the operation running — and the DEA guessing.",
    prompt:
      "Write a query that JOINs `batches` and `products` on `product_name = products.name`, selects `products.name`, `COUNT(*) AS batch_count`, and `SUM(batches.quantity_grams) AS total_grams`, filters to `products.purity >= 90`, groups by `products.name`, and orders by `total_grams` descending.",
    hint: "Chain INNER JOIN ... WHERE purity >= 90 GROUP BY products.name ORDER BY total_grams DESC.",
    solution: `SELECT\n  products.name,\n  COUNT(*) AS batch_count,\n  SUM(batches.quantity_grams) AS total_grams\nFROM batches\nINNER JOIN products ON batches.product_name = products.name\nWHERE products.purity >= 90\nGROUP BY products.name\nORDER BY total_grams DESC;`,
    starterCode: `-- Distribution Network Report\n-- Join, filter, group, and summarize production data\n\nSELECT\n  products.name,\n  COUNT(*) AS batch_count,\n  SUM(batches.quantity_grams) AS total_grams\nFROM batches\nINNER JOIN products ON ___\nWHERE products.purity >= 90\nGROUP BY ___\nORDER BY total_grams DESC;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN products ON batches.product_name = products.name",
        description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY",
      },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
