import type { Challenge } from "@/types";

export const sexAndTheCitySQLChallenges: Challenge[] = [
  {
    id: "sc-sql-01",
    themeId: "sex-and-the-city",
    languageId: "sql",
    order: 1,
    title: "SELECT",
    themedTitle: "Manhattan Dating Records",
    narrative:
      "Carrie has been compiling a personal database of every date in Manhattan for her column. She needs to pull the full table to fact-check her latest piece before it goes to print.",
    prompt: "Select all columns from the `dates` table.",
    hint: "Use `SELECT * FROM table_name`.",
    solution: "SELECT * FROM dates;",
    starterCode: "-- Get all dating records\nSELECT ___ FROM ___;",
    testCases: [
      { input: "", expected: "name | location | rating", description: "Full dates table" },
    ],
    concept: "SELECT",
    difficulty: "beginner",
  },
  {
    id: "sc-sql-02",
    themeId: "sex-and-the-city",
    languageId: "sql",
    order: 2,
    title: "WHERE",
    themedTitle: "Finding the Good Ones",
    narrative:
      "Samantha needs the names of anyone rated above 7 for a follow-up. She doesn't have time to scroll through disappointing entries.",
    prompt: "Select `name` and `rating` from `dates` where `rating > 7`.",
    hint: "Use `WHERE column > value`.",
    solution: "SELECT name, rating FROM dates WHERE rating > 7;",
    starterCode: "-- Find only the highly-rated dates\nSELECT name, rating FROM dates WHERE ___;",
    testCases: [
      { input: "", expected: "name | rating", description: "High-rating dates only" },
    ],
    concept: "WHERE",
    difficulty: "beginner",
  },
  {
    id: "sc-sql-03",
    themeId: "sex-and-the-city",
    languageId: "sql",
    order: 3,
    title: "ORDER BY & LIMIT",
    themedTitle: "Priciest Apartments",
    narrative:
      "Miranda is apartment-hunting — again. She wants to see the three most expensive listings in the `apartments` table so she knows what she's up against.",
    prompt: "Select `address` and `rent` from `apartments`, ordered by `rent` descending, limited to 3.",
    hint: "Use `ORDER BY rent DESC LIMIT 3`.",
    solution: "SELECT address, rent FROM apartments ORDER BY rent DESC LIMIT 3;",
    starterCode: "-- Top 3 most expensive apartments\nSELECT address, rent FROM apartments\nORDER BY ___ DESC\nLIMIT ___;",
    testCases: [
      { input: "", expected: "address | rent (top 3)", description: "Three priciest listings" },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "sc-sql-04",
    themeId: "sex-and-the-city",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "The Shoe Expense Report",
    narrative:
      "Charlotte has finally convinced Carrie to file her shoe purchases as research expenses. The accountant needs a summary: total purchases, total spent, and the average cost per pair.",
    prompt: "Write a query returning `COUNT(*)` as `total_pairs`, `SUM(price)` as `total_spent`, and `AVG(price)` as `avg_price` from `shoes`.",
    hint: "Use aggregate functions `COUNT(*)`, `SUM()`, and `AVG()` in the SELECT clause.",
    solution: "SELECT COUNT(*) AS total_pairs, SUM(price) AS total_spent, AVG(price) AS avg_price FROM shoes;",
    starterCode: "-- Shoe expense summary\nSELECT COUNT(*) AS total_pairs,\n       ___ AS total_spent,\n       ___ AS avg_price\nFROM shoes;",
    testCases: [
      { input: "", expected: "total_pairs | total_spent | avg_price", description: "Shoe expense report" },
    ],
    concept: "Aggregate Functions",
    difficulty: "beginner",
  },
  {
    id: "sc-sql-05",
    themeId: "sex-and-the-city",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Dating Stats by Borough",
    narrative:
      "Carrie's column research requires knowing which Manhattan neighborhood produces the most dates worth writing about. Group the data and let the numbers tell the story.",
    prompt: "Select `neighborhood` and `COUNT(*)` as `date_count` from `dates`, grouped by `neighborhood`, ordered by `date_count` descending.",
    hint: "Use `GROUP BY neighborhood ORDER BY date_count DESC`.",
    solution: "SELECT neighborhood, COUNT(*) AS date_count FROM dates GROUP BY neighborhood ORDER BY date_count DESC;",
    starterCode: "-- Dates per neighborhood\nSELECT neighborhood, COUNT(*) AS date_count\nFROM dates\nGROUP BY ___\nORDER BY date_count DESC;",
    testCases: [
      { input: "", expected: "neighborhood | date_count", description: "Dating activity by neighborhood" },
    ],
    concept: "GROUP BY",
    difficulty: "beginner",
  },
  {
    id: "sc-sql-06",
    themeId: "sex-and-the-city",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Dates and Their Apartments",
    narrative:
      "Carrie has been tracking dates and apartments in separate tables, but they share an `apartment_id` column — each date ended at (or near) someone's apartment. For the column, she needs to JOIN the tables and see addresses alongside the men she was seeing.",
    prompt:
      "Write a query that selects `dates.name`, `dates.rating`, and `apartments.address` by performing an INNER JOIN between `dates` and `apartments` on `dates.apartment_id = apartments.apartment_id`.",
    hint: "Use `INNER JOIN apartments ON dates.apartment_id = apartments.apartment_id`. Reference columns with `table.column` notation.",
    solution: `SELECT dates.name, dates.rating, apartments.address\nFROM dates\nINNER JOIN apartments ON dates.apartment_id = apartments.apartment_id;`,
    starterCode: `-- Dates and Their Apartments\n-- Join dates and apartments on apartment_id\n\nSELECT dates.name, dates.rating, apartments.address\nFROM dates\n___ JOIN apartments ON ___;`,
    testCases: [
      { input: "", expected: "INNER JOIN apartments ON dates.apartment_id = apartments.apartment_id", description: "Joins dates and apartments on apartment_id" },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "sc-sql-07",
    themeId: "sex-and-the-city",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "Neighborhoods Worth Writing About",
    narrative:
      "Carrie's editor wants her to focus her column on neighborhoods that have generated more than one memorable date. Use HAVING to filter out the one-off encounters and surface the truly column-worthy locations.",
    prompt:
      "Write a query that selects `neighborhood` and `COUNT(*) AS date_count` from `dates`, grouped by `neighborhood`, filtered to only include neighborhoods with more than 1 date, ordered by `date_count` descending.",
    hint: "Use `GROUP BY neighborhood` then `HAVING COUNT(*) > 1`. HAVING filters groups; WHERE filters rows.",
    solution: `SELECT neighborhood, COUNT(*) AS date_count\nFROM dates\nGROUP BY neighborhood\nHAVING COUNT(*) > 1\nORDER BY date_count DESC;`,
    starterCode: `-- Neighborhoods Worth Writing About\n-- Find neighborhoods with more than one date\n\nSELECT neighborhood, COUNT(*) AS date_count\nFROM dates\nGROUP BY neighborhood\nHAVING ___\nORDER BY date_count DESC;`,
    testCases: [
      { input: "", expected: "HAVING COUNT(*) > 1", description: "Filters for neighborhoods with more than one date" },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "sc-sql-08",
    themeId: "sex-and-the-city",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Above-Average Dates",
    narrative:
      "Samantha has no patience for mediocre. Find every date rated above the average — those are the ones worth a second call. Use a subquery to calculate the average rating dynamically.",
    prompt:
      "Write a query that selects `name` and `rating` from `dates` WHERE `rating` is greater than the average `rating` (use a subquery with `SELECT AVG(rating) FROM dates`).",
    hint: "Use `WHERE rating > (SELECT AVG(rating) FROM dates)` — the subquery runs first and returns the average.",
    solution: `SELECT name, rating\nFROM dates\nWHERE rating > (SELECT AVG(rating) FROM dates);`,
    starterCode: `-- Above-Average Dates\n-- Find dates rated above the overall average using a subquery\n\nSELECT name, rating\nFROM dates\nWHERE rating > (___ AVG(rating) FROM dates);`,
    testCases: [
      { input: "", expected: "WHERE rating > (SELECT AVG(rating) FROM dates)", description: "Filters for above-average rated dates using a subquery" },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "sc-sql-09",
    themeId: "sex-and-the-city",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "The Carrie Bradshaw Rating System",
    narrative:
      "Carrie has finally formalized her personal rating system for the column. Every date gets a label: exceptional men get 'Keeper', decent ones get 'Maybe', and the rest — well, there will be a column about them.",
    prompt:
      "Write a query that selects `name`, `rating`, and a computed column `verdict` using CASE WHEN: when `rating >= 8` then 'Keeper', when `rating >= 5` then 'Maybe', else 'Column Material'.",
    hint: "Use `CASE WHEN rating >= 8 THEN 'Keeper' WHEN rating >= 5 THEN 'Maybe' ELSE 'Column Material' END AS verdict`.",
    solution: `SELECT\n  name,\n  rating,\n  CASE\n    WHEN rating >= 8 THEN 'Keeper'\n    WHEN rating >= 5 THEN 'Maybe'\n    ELSE 'Column Material'\n  END AS verdict\nFROM dates;`,
    starterCode: `-- The Carrie Bradshaw Rating System\n-- Classify each date with a verdict label\n\nSELECT\n  name,\n  rating,\n  CASE\n    WHEN rating >= 8 THEN 'Keeper'\n    WHEN rating >= 5 THEN ___\n    ELSE ___\n  END AS verdict\nFROM dates;`,
    testCases: [
      { input: "", expected: "CASE WHEN rating >= 8 THEN 'Keeper'", description: "Assigns verdict labels using CASE WHEN" },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "sc-sql-10",
    themeId: "sex-and-the-city",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "The Manhattan Love Report",
    narrative:
      "The final column of the season requires everything: which neighborhoods are producing the highest-rated dates with real apartment connections, grouped and ranked. Carrie is writing the definitive guide to Manhattan romance.",
    prompt:
      "Write a query that JOINs `dates` and `apartments` on `apartment_id`, selects `apartments.neighborhood`, `COUNT(*) AS date_count`, and `AVG(dates.rating) AS avg_rating`, filters to `dates.rating >= 6`, groups by `apartments.neighborhood`, and orders by `avg_rating` descending.",
    hint: "Chain: INNER JOIN ... ON ... WHERE rating >= 6 GROUP BY neighborhood ORDER BY avg_rating DESC.",
    solution: `SELECT\n  apartments.neighborhood,\n  COUNT(*) AS date_count,\n  AVG(dates.rating) AS avg_rating\nFROM dates\nINNER JOIN apartments ON dates.apartment_id = apartments.apartment_id\nWHERE dates.rating >= 6\nGROUP BY apartments.neighborhood\nORDER BY avg_rating DESC;`,
    starterCode: `-- The Manhattan Love Report\n-- Join, filter, group, and order dating data\n\nSELECT\n  apartments.neighborhood,\n  COUNT(*) AS date_count,\n  AVG(dates.rating) AS avg_rating\nFROM dates\nINNER JOIN apartments ON ___\nWHERE dates.rating >= 6\nGROUP BY ___\nORDER BY avg_rating DESC;`,
    testCases: [
      { input: "", expected: "INNER JOIN apartments ON dates.apartment_id = apartments.apartment_id", description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY" },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
