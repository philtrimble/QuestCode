import type { Challenge } from "@/types";

export const theOfficeSQLChallenges: Challenge[] = [
  {
    id: "to-sql-01",
    themeId: "the-office",
    languageId: "sql",
    order: 1,
    title: "SELECT",
    themedTitle: "The Sales Ledger",
    narrative:
      "Michael Scott has declared today 'Business Data Day' — a holiday he invented five minutes ago. He wants everyone to pull up the full sales ledger so he can prove, definitively, that the Scranton branch is the best branch. Let's start by looking at everything.",
    prompt:
      "Write a SQL query that selects ALL columns from the `sales` table.",
    hint: "Use `SELECT * FROM sales` to get every column and every row.",
    solution: `SELECT * FROM sales;`,
    starterCode: `-- The Sales Ledger\n-- Select all columns from the sales table\n\nSELECT ___ FROM sales;`,
    testCases: [
      {
        input: "",
        expected: "SELECT * FROM sales",
        description: "Retrieves all sales records",
      },
    ],
    concept: "SELECT",
    difficulty: "beginner",
  },
  {
    id: "to-sql-02",
    themeId: "the-office",
    languageId: "sql",
    order: 2,
    title: "WHERE",
    themedTitle: "Dwight's Territory",
    narrative:
      "Dwight Schrute, Assistant to the Regional Manager, insists his sales numbers from the Scranton region speak for themselves. Pull only the sales records from 'Scranton' so Dwight can verify — with documented evidence — that he is the top salesperson.",
    prompt:
      "Write a query that selects `salesperson`, `client`, and `amount` from `sales` WHERE the `region` is 'Scranton'.",
    hint: "Use `WHERE region = 'Scranton'` after specifying the table name.",
    solution: `SELECT salesperson, client, amount\nFROM sales\nWHERE region = 'Scranton';`,
    starterCode: `-- Dwight's Territory\n-- Select salesperson, client, and amount for Scranton sales\n\nSELECT salesperson, client, amount\nFROM sales\nWHERE ___;`,
    testCases: [
      {
        input: "",
        expected: "WHERE region = 'Scranton'",
        description: "Filters for Scranton region sales only",
      },
    ],
    concept: "WHERE",
    difficulty: "beginner",
  },
  {
    id: "to-sql-03",
    themeId: "the-office",
    languageId: "sql",
    order: 3,
    title: "ORDER BY & LIMIT",
    themedTitle: "The Top Closers",
    narrative:
      "Jan Levinson is flying in from corporate. She wants a rundown of Dunder Mifflin's biggest deals — the top 5 sales by amount. Michael is already planning a banner that reads 'World's Best Sales Branch.' Pull the data before he orders the banner.",
    prompt:
      "Write a query that selects `salesperson`, `client`, and `amount` from `sales`, ordered by `amount` from highest to lowest, showing only the top 5 results.",
    hint: "Use `ORDER BY amount DESC` then `LIMIT 5` at the end of your query.",
    solution: `SELECT salesperson, client, amount\nFROM sales\nORDER BY amount DESC\nLIMIT 5;`,
    starterCode: `-- The Top Closers\n-- Select salesperson, client, and amount ordered by amount (highest first), top 5 only\n\nSELECT salesperson, client, amount\nFROM sales\nORDER BY ___ ___\nLIMIT ___;`,
    testCases: [
      {
        input: "",
        expected: "ORDER BY amount DESC LIMIT 5",
        description: "Top 5 sales by amount descending",
      },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "to-sql-04",
    themeId: "the-office",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "End-of-Quarter Numbers",
    narrative:
      "It's end of quarter and Ryan Howard — Business School Ryan — has built a new analytics dashboard. He needs the total number of sales, the total revenue, and the average deal size from the `sales` table. Kevin is on standby to check the math.",
    prompt:
      "Write a query that returns: the total number of sales (as `total_sales`), the total revenue (as `total_revenue`), and the average sale amount (as `avg_amount`) from the `sales` table.",
    hint: "Use `COUNT(*)`, `SUM(amount)`, and `AVG(amount)` with `AS` to alias each column.",
    solution: `SELECT\n  COUNT(*) AS total_sales,\n  SUM(amount) AS total_revenue,\n  AVG(amount) AS avg_amount\nFROM sales;`,
    starterCode: `-- End-of-Quarter Numbers\n-- Return total_sales, total_revenue, and avg_amount\n\nSELECT\n  ___ AS total_sales,\n  ___ AS total_revenue,\n  ___ AS avg_amount\nFROM sales;`,
    testCases: [
      {
        input: "",
        expected: "COUNT(*) AS total_sales",
        description: "Counts all sales records",
      },
    ],
    concept: "Aggregate Functions",
    difficulty: "intermediate",
  },
  {
    id: "to-sql-05",
    themeId: "the-office",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Branch vs. Branch",
    narrative:
      "David Wallace is evaluating which regional branches are pulling their weight. He needs total sales grouped by salesperson so he can see who's really contributing. Toby from HR will file this report. Michael will ignore it.",
    prompt:
      "Write a query that selects `salesperson` and the total sales amount per salesperson (as `total_amount`) from `sales`, grouped by `salesperson`, ordered by `total_amount` from highest to lowest.",
    hint: "Use `GROUP BY salesperson` and `SUM(amount)`. Order by the alias `total_amount DESC`.",
    solution: `SELECT\n  salesperson,\n  SUM(amount) AS total_amount\nFROM sales\nGROUP BY salesperson\nORDER BY total_amount DESC;`,
    starterCode: `-- Branch vs. Branch\n-- Total sales per salesperson, ordered by highest earner first\n\nSELECT\n  salesperson,\n  ___ AS total_amount\nFROM sales\nGROUP BY ___\nORDER BY ___ DESC;`,
    testCases: [
      {
        input: "",
        expected: "GROUP BY salesperson",
        description: "Groups sales by salesperson correctly",
      },
    ],
    concept: "GROUP BY",
    difficulty: "intermediate",
  },
  {
    id: "to-sql-06",
    themeId: "the-office",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Sales Reps and Their Branches",
    narrative:
      "David Wallace wants a combined report linking `sales` to the `employees` table so he can see which branch each deal came from. Michael has been claiming credit for Dwight's numbers and this JOIN will set the record straight.",
    prompt:
      "Write a query that selects `sales.salesperson`, `sales.amount`, and `employees.branch` by performing an INNER JOIN between `sales` and `employees` on `sales.salesperson = employees.name`.",
    hint: "Use `INNER JOIN employees ON sales.salesperson = employees.name`.",
    solution: `SELECT sales.salesperson, sales.amount, employees.branch\nFROM sales\nINNER JOIN employees ON sales.salesperson = employees.name;`,
    starterCode: `-- Sales Reps and Their Branches\n-- Join sales with employees on salesperson name\n\nSELECT sales.salesperson, sales.amount, employees.branch\nFROM sales\n___ JOIN employees ON ___;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN employees ON sales.salesperson = employees.name",
        description: "Joins sales and employees tables",
      },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "to-sql-07",
    themeId: "the-office",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "Consistent Closers",
    narrative:
      "Jan wants to identify salespeople who have closed more than two deals — the reliable performers. Michael insists he qualifies. Let the HAVING clause decide.",
    prompt:
      "Write a query that selects `salesperson` and `COUNT(*) AS deal_count` from `sales`, grouped by `salesperson`, filtered with HAVING to show only salespeople with more than 2 deals, ordered by `deal_count` descending.",
    hint: "Use `HAVING COUNT(*) > 2` after `GROUP BY salesperson`.",
    solution: `SELECT salesperson, COUNT(*) AS deal_count\nFROM sales\nGROUP BY salesperson\nHAVING COUNT(*) > 2\nORDER BY deal_count DESC;`,
    starterCode: `-- Consistent Closers\n-- Find salespeople with more than 2 deals\n\nSELECT salesperson, COUNT(*) AS deal_count\nFROM sales\nGROUP BY salesperson\nHAVING ___\nORDER BY deal_count DESC;`,
    testCases: [
      {
        input: "",
        expected: "HAVING COUNT(*) > 2",
        description: "Filters salespeople with more than 2 deals",
      },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "to-sql-08",
    themeId: "the-office",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Above-Average Deals",
    narrative:
      "Kevin has been running the numbers — slowly but correctly. He wants to know which individual sales were above the company-wide average deal size. Those are the ones worth celebrating with a pretzel day.",
    prompt:
      "Write a query that selects `salesperson`, `client`, and `amount` from `sales` WHERE `amount` is greater than the average amount across all sales (use a subquery).",
    hint: "Use `WHERE amount > (SELECT AVG(amount) FROM sales)`.",
    solution: `SELECT salesperson, client, amount\nFROM sales\nWHERE amount > (SELECT AVG(amount) FROM sales);`,
    starterCode: `-- Above-Average Deals\n-- Find sales with above-average amounts\n\nSELECT salesperson, client, amount\nFROM sales\nWHERE amount > (___ AVG(amount) FROM sales);`,
    testCases: [
      {
        input: "",
        expected: "WHERE amount > (SELECT AVG(amount) FROM sales)",
        description: "Subquery finds above-average deals",
      },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "to-sql-09",
    themeId: "the-office",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "Commission Tier Labels",
    narrative:
      "Ryan Howard has redesigned the commission structure — again. Salespeople need to know their tier: big deals, standard deals, and small deals each earn different rates. The CASE WHEN expression will do the categorizing.",
    prompt:
      "Write a query that selects `salesperson`, `amount`, and a computed `deal_tier`: 'Big Fish' when amount >= 15000, 'Good Deal' when amount >= 7000, 'Small Potatoes' otherwise.",
    hint: "Use `CASE WHEN amount >= 15000 THEN 'Big Fish' WHEN amount >= 7000 THEN 'Good Deal' ELSE 'Small Potatoes' END AS deal_tier`.",
    solution: `SELECT\n  salesperson,\n  amount,\n  CASE\n    WHEN amount >= 15000 THEN 'Big Fish'\n    WHEN amount >= 7000 THEN 'Good Deal'\n    ELSE 'Small Potatoes'\n  END AS deal_tier\nFROM sales;`,
    starterCode: `-- Commission Tier Labels\n-- Classify each sale by deal size tier\n\nSELECT\n  salesperson,\n  amount,\n  CASE\n    WHEN amount >= 15000 THEN 'Big Fish'\n    WHEN amount >= 7000 THEN ___\n    ELSE ___\n  END AS deal_tier\nFROM sales;`,
    testCases: [
      {
        input: "",
        expected: "CASE WHEN amount >= 15000 THEN 'Big Fish'",
        description: "Classifies sales into deal size tiers",
      },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "to-sql-10",
    themeId: "the-office",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "Branch Performance Report",
    narrative:
      "David Wallace's final quarterly review requires a complete picture: branch-level totals from joined employee and sales data, filtered to deals over $5,000, summarized and ranked. Michael has prepared a speech for whoever comes out on top.",
    prompt:
      "Write a query that JOINs `sales` and `employees` on `salesperson = employees.name`, selects `employees.branch`, `COUNT(*) AS deals`, and `SUM(sales.amount) AS total_revenue`, filters to `sales.amount > 5000`, groups by `employees.branch`, and orders by `total_revenue` descending.",
    hint: "Chain INNER JOIN ... WHERE amount > 5000 GROUP BY employees.branch ORDER BY total_revenue DESC.",
    solution: `SELECT\n  employees.branch,\n  COUNT(*) AS deals,\n  SUM(sales.amount) AS total_revenue\nFROM sales\nINNER JOIN employees ON sales.salesperson = employees.name\nWHERE sales.amount > 5000\nGROUP BY employees.branch\nORDER BY total_revenue DESC;`,
    starterCode: `-- Branch Performance Report\n-- Join, filter, group, and rank branch sales data\n\nSELECT\n  employees.branch,\n  COUNT(*) AS deals,\n  SUM(sales.amount) AS total_revenue\nFROM sales\nINNER JOIN employees ON ___\nWHERE sales.amount > 5000\nGROUP BY ___\nORDER BY total_revenue DESC;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN employees ON sales.salesperson = employees.name",
        description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY",
      },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
