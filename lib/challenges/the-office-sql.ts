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
];
