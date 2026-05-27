import type { FinalChallenge } from "@/types";

export const sqlFinalChallenges: Record<string, FinalChallenge> = {
  // ─── Stranger Things ────────────────────────────────────────────────────────
  "stranger-things-sql": {
    id: "st-sql-final",
    themeId: "stranger-things",
    languageId: "sql",
    themedTitle: "The Hawkins Lab Database Breach",
    introNarrative:
      "You've infiltrated Hawkins National Laboratory's mainframe. Dr. Brenner's classified database holds the key to defeating the Mind Flayer — but only a skilled SQL operative can extract the intel. Five queries stand between you and the truth. The fate of Hawkins depends on your ability to SELECT the right data.",
    questions: [
      {
        id: "st-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "Eleven needs a full roster of Hawkins Lab subjects. Query the `subjects` table and retrieve every subject's `name` and `power_level`.",
        prompt:
          "Write a SELECT statement that retrieves the `name` and `power_level` columns FROM the `subjects` table.",
        hint: "Use SELECT col1, col2 FROM table_name;",
        solution: "SELECT name, power_level FROM subjects;",
        starterCode: "___ name, power_level ___ subjects;",
        testCases: [{ input: "", expected: "SELECT name, power_level FROM subjects", description: "Basic SELECT query" }],
        conceptKeywords: ["SELECT", "FROM", "subjects"],
      },
      {
        id: "st-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Chief Hopper is searching for subjects who have escaped the lab. Filter the `subjects` table to show only those whose `status` is 'escaped'.",
        prompt:
          "Write a query that selects all columns (*) from `subjects` WHERE `status` equals 'escaped'.",
        hint: "Use WHERE column = 'value' to filter rows.",
        solution: "SELECT * FROM subjects WHERE status = 'escaped';",
        starterCode: "SELECT * FROM subjects ___ status = 'escaped';",
        testCases: [{ input: "", expected: "SELECT * FROM subjects WHERE status = 'escaped'", description: "WHERE filter" }],
        conceptKeywords: ["SELECT", "WHERE", "status"],
      },
      {
        id: "st-sql-final-3",
        concept: "ORDER BY & COUNT",
        narrative:
          "The Party needs to know how many subjects are at each power level. Count the subjects grouped by `power_level` and order from highest count to lowest.",
        prompt:
          "Write a query that SELECTs `power_level` and COUNT(*) AS `total`, grouped by `power_level`, ordered by `total` DESC.",
        hint: "Use GROUP BY with COUNT(*) and ORDER BY alias DESC.",
        solution:
          "SELECT power_level, COUNT(*) AS total FROM subjects GROUP BY power_level ORDER BY total DESC;",
        starterCode:
          "SELECT power_level, ___(*)  AS total FROM subjects ___ BY power_level ORDER BY total ___;",
        testCases: [{ input: "", expected: "COUNT(*) AS total", description: "Aggregate COUNT query" }],
        conceptKeywords: ["COUNT", "GROUP BY", "ORDER BY"],
      },
      {
        id: "st-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "Will Byers has gone missing. Combine the `sightings` and `locations` tables to see where each sighting occurred.",
        prompt:
          "Write a query that selects `sightings.date` and `locations.name` by joining `sightings` INNER JOIN `locations` ON `sightings.location_id = locations.id`.",
        hint: "Use INNER JOIN table ON tableA.col = tableB.col.",
        solution:
          "SELECT sightings.date, locations.name FROM sightings INNER JOIN locations ON sightings.location_id = locations.id;",
        starterCode:
          "SELECT sightings.date, locations.name FROM sightings ___ JOIN locations ON sightings.location_id = locations.id;",
        testCases: [{ input: "", expected: "INNER JOIN locations ON sightings.location_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "locations"],
      },
      {
        id: "st-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "The Mind Flayer only controls factions with more than 3 members. Find factions from the `soldiers` table that have more than 3 members.",
        prompt:
          "Write a query that selects `faction` and COUNT(*) AS `members` from `soldiers`, grouped by `faction`, HAVING COUNT(*) > 3.",
        hint: "HAVING filters after GROUP BY — use HAVING COUNT(*) > number.",
        solution:
          "SELECT faction, COUNT(*) AS members FROM soldiers GROUP BY faction HAVING COUNT(*) > 3;",
        starterCode:
          "SELECT faction, COUNT(*) AS members FROM soldiers GROUP BY faction ___ COUNT(*) > 3;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 3", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },

  // ─── Severance ──────────────────────────────────────────────────────────────
  "severance-sql": {
    id: "sv-sql-final",
    themeId: "severance",
    languageId: "sql",
    themedTitle: "The Lumon MDR Data Terminal",
    introNarrative:
      "You've been granted access to Lumon Industries' mysterious MDR (Macrodata Refinement) database terminal. The numbers need 'refining' — but what do they really mean? Five queries into Lumon's records and you might just uncover what Kier Eagan was really up to. Don't let your outie find out.",
    questions: [
      {
        id: "sv-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "Mark S. needs to pull the current employee roster. Select each employee's `name` and `department` from the `employees` table.",
        prompt: "Write a SELECT statement retrieving `name` and `department` FROM the `employees` table.",
        hint: "SELECT col1, col2 FROM table_name;",
        solution: "SELECT name, department FROM employees;",
        starterCode: "___ name, department ___ employees;",
        testCases: [{ input: "", expected: "SELECT name, department FROM employees", description: "Basic SELECT" }],
        conceptKeywords: ["SELECT", "FROM", "employees"],
      },
      {
        id: "sv-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Helly R. wants to find only MDR employees. Filter the `employees` table to show only those in the 'MDR' department.",
        prompt: "Select all columns from `employees` WHERE `department` equals 'MDR'.",
        hint: "WHERE column = 'value'",
        solution: "SELECT * FROM employees WHERE department = 'MDR';",
        starterCode: "SELECT * FROM employees WHERE ___ = 'MDR';",
        testCases: [{ input: "", expected: "WHERE department = 'MDR'", description: "WHERE filter" }],
        conceptKeywords: ["SELECT", "WHERE", "department"],
      },
      {
        id: "sv-sql-final-3",
        concept: "ORDER BY & COUNT",
        narrative:
          "Cobel needs a count of employees per department. Count employees per `department` and order the result alphabetically.",
        prompt:
          "Select `department` and COUNT(*) AS `headcount` from `employees`, GROUP BY `department`, ORDER BY `department` ASC.",
        hint: "Use GROUP BY and ORDER BY with ASC for alphabetical order.",
        solution:
          "SELECT department, COUNT(*) AS headcount FROM employees GROUP BY department ORDER BY department ASC;",
        starterCode:
          "SELECT department, COUNT(*) AS headcount FROM employees GROUP BY department ORDER BY department ___;",
        testCases: [{ input: "", expected: "COUNT(*) AS headcount", description: "COUNT aggregate" }],
        conceptKeywords: ["COUNT", "GROUP BY", "ORDER BY"],
      },
      {
        id: "sv-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "The wellness sessions need to be matched with employees. Join `sessions` and `employees` on `employee_id` to see who attended what.",
        prompt:
          "Select `employees.name` and `sessions.type` from `sessions` INNER JOIN `employees` ON `sessions.employee_id = employees.id`.",
        hint: "INNER JOIN table ON foreign_key = primary_key",
        solution:
          "SELECT employees.name, sessions.type FROM sessions INNER JOIN employees ON sessions.employee_id = employees.id;",
        starterCode:
          "SELECT employees.name, sessions.type FROM sessions ___ JOIN employees ON sessions.employee_id = employees.id;",
        testCases: [{ input: "", expected: "INNER JOIN employees ON sessions.employee_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "employees"],
      },
      {
        id: "sv-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "Harmony wants departments with more than 5 wellness violations. Find them using HAVING on the `violations` table.",
        prompt:
          "Select `department` and COUNT(*) AS `violation_count` from `violations`, GROUP BY `department`, HAVING COUNT(*) > 5.",
        hint: "HAVING filters grouped results — use HAVING COUNT(*) > n.",
        solution:
          "SELECT department, COUNT(*) AS violation_count FROM violations GROUP BY department HAVING COUNT(*) > 5;",
        starterCode:
          "SELECT department, COUNT(*) AS violation_count FROM violations GROUP BY department ___ COUNT(*) > 5;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 5", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },

  // ─── Breaking Bad ────────────────────────────────────────────────────────────
  "breaking-bad-sql": {
    id: "bb-sql-final",
    themeId: "breaking-bad",
    languageId: "sql",
    themedTitle: "The Heisenberg Ledger Query",
    introNarrative:
      "You've gained access to Saul Goodman's encrypted database of Heisenberg's operations. Lydia's supply chain records, Gus's distribution network, and Walt's chemistry logs are all here — if you know the right SQL. Say my name. Query the data.",
    questions: [
      {
        id: "bb-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "Jesse needs a list of all product batches. Select the `batch_id` and `purity` from the `batches` table.",
        prompt: "Write a SELECT query to retrieve `batch_id` and `purity` FROM `batches`.",
        hint: "SELECT col1, col2 FROM table_name;",
        solution: "SELECT batch_id, purity FROM batches;",
        starterCode: "___ batch_id, purity ___ batches;",
        testCases: [{ input: "", expected: "SELECT batch_id, purity FROM batches", description: "Basic SELECT" }],
        conceptKeywords: ["SELECT", "FROM", "batches"],
      },
      {
        id: "bb-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Gus wants only the highest quality product. Filter the `batches` table for rows where `purity` is greater than 99.",
        prompt: "Select all columns from `batches` WHERE `purity` > 99.",
        hint: "Use WHERE column > value for numeric comparisons.",
        solution: "SELECT * FROM batches WHERE purity > 99;",
        starterCode: "SELECT * FROM batches ___ purity > 99;",
        testCases: [{ input: "", expected: "WHERE purity > 99", description: "Numeric WHERE filter" }],
        conceptKeywords: ["SELECT", "WHERE", "purity"],
      },
      {
        id: "bb-sql-final-3",
        concept: "ORDER BY & COUNT",
        narrative:
          "Lydia wants to track distribution by territory. Count the deliveries per `territory` and order from most to fewest.",
        prompt:
          "Select `territory` and COUNT(*) AS `deliveries` from `shipments`, GROUP BY `territory`, ORDER BY `deliveries` DESC.",
        hint: "GROUP BY territory then ORDER BY the alias DESC.",
        solution:
          "SELECT territory, COUNT(*) AS deliveries FROM shipments GROUP BY territory ORDER BY deliveries DESC;",
        starterCode:
          "SELECT territory, COUNT(*) AS deliveries FROM shipments GROUP BY territory ORDER BY deliveries ___;",
        testCases: [{ input: "", expected: "COUNT(*) AS deliveries", description: "COUNT aggregate" }],
        conceptKeywords: ["COUNT", "GROUP BY", "ORDER BY"],
      },
      {
        id: "bb-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "The DEA wants to link distributors with their deliveries. Join `distributors` and `shipments` on `distributor_id`.",
        prompt:
          "Select `distributors.name` and `shipments.amount` from `shipments` INNER JOIN `distributors` ON `shipments.distributor_id = distributors.id`.",
        hint: "INNER JOIN links rows across tables using a shared key.",
        solution:
          "SELECT distributors.name, shipments.amount FROM shipments INNER JOIN distributors ON shipments.distributor_id = distributors.id;",
        starterCode:
          "SELECT distributors.name, shipments.amount FROM shipments ___ JOIN distributors ON shipments.distributor_id = distributors.id;",
        testCases: [{ input: "", expected: "INNER JOIN distributors ON shipments.distributor_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "distributors"],
      },
      {
        id: "bb-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "Skyler needs to flag cook sites that produced more than 10 batches — suspicious activity for the car wash books.",
        prompt:
          "Select `location` and COUNT(*) AS `batch_count` from `batches`, GROUP BY `location`, HAVING COUNT(*) > 10.",
        hint: "HAVING filters on aggregate conditions after GROUP BY.",
        solution:
          "SELECT location, COUNT(*) AS batch_count FROM batches GROUP BY location HAVING COUNT(*) > 10;",
        starterCode:
          "SELECT location, COUNT(*) AS batch_count FROM batches GROUP BY location ___ COUNT(*) > 10;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 10", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },

  // ─── The Office ──────────────────────────────────────────────────────────────
  "the-office-sql": {
    id: "to-sql-final",
    themeId: "the-office",
    languageId: "sql",
    themedTitle: "The Dunder Mifflin Database Audit",
    introNarrative:
      "Corporate has mandated a full audit of the Scranton branch database. Michael Scott has already 'accidentally' deleted the backup, but the primary tables are intact. You'll need to run five queries to prove the branch is profitable — and save everyone's jobs. That's what she said.",
    questions: [
      {
        id: "to-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "Kevin needs to see the full employee list. Select `name` and `position` from the `employees` table.",
        prompt: "Write a SELECT statement retrieving `name` and `position` FROM `employees`.",
        hint: "SELECT col1, col2 FROM table_name;",
        solution: "SELECT name, position FROM employees;",
        starterCode: "___ name, position ___ employees;",
        testCases: [{ input: "", expected: "SELECT name, position FROM employees", description: "Basic SELECT" }],
        conceptKeywords: ["SELECT", "FROM", "employees"],
      },
      {
        id: "to-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Dwight is conducting a performance review. Pull all employees from the `employees` table WHERE their `branch` is 'Scranton'.",
        prompt: "Select all columns from `employees` WHERE `branch` = 'Scranton'.",
        hint: "WHERE column = 'value'",
        solution: "SELECT * FROM employees WHERE branch = 'Scranton';",
        starterCode: "SELECT * FROM employees ___ branch = 'Scranton';",
        testCases: [{ input: "", expected: "WHERE branch = 'Scranton'", description: "WHERE filter" }],
        conceptKeywords: ["SELECT", "WHERE", "branch"],
      },
      {
        id: "to-sql-final-3",
        concept: "ORDER BY & SUM",
        narrative:
          "Michael wants to show that Scranton outsells every other branch. Sum the `sales_amount` per `branch` and order by total sales DESC.",
        prompt:
          "Select `branch` and SUM(`sales_amount`) AS `total_sales` from `sales`, GROUP BY `branch`, ORDER BY `total_sales` DESC.",
        hint: "Use SUM() for totals, GROUP BY branch, ORDER BY alias DESC.",
        solution:
          "SELECT branch, SUM(sales_amount) AS total_sales FROM sales GROUP BY branch ORDER BY total_sales DESC;",
        starterCode:
          "SELECT branch, ___(sales_amount) AS total_sales FROM sales GROUP BY branch ORDER BY total_sales DESC;",
        testCases: [{ input: "", expected: "SUM(sales_amount) AS total_sales", description: "SUM aggregate" }],
        conceptKeywords: ["SUM", "GROUP BY", "ORDER BY"],
      },
      {
        id: "to-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "Jim wants to see which clients are linked to which salespeople. Join `clients` and `salespeople` on `salesperson_id`.",
        prompt:
          "Select `salespeople.name` and `clients.company` from `clients` INNER JOIN `salespeople` ON `clients.salesperson_id = salespeople.id`.",
        hint: "INNER JOIN links rows that have matching keys in both tables.",
        solution:
          "SELECT salespeople.name, clients.company FROM clients INNER JOIN salespeople ON clients.salesperson_id = salespeople.id;",
        starterCode:
          "SELECT salespeople.name, clients.company FROM clients ___ JOIN salespeople ON clients.salesperson_id = salespeople.id;",
        testCases: [{ input: "", expected: "INNER JOIN salespeople ON clients.salesperson_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "salespeople"],
      },
      {
        id: "to-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "Andy wants to see which salespeople closed more than 20 deals — a benchmark for his Cornell buddies.",
        prompt:
          "Select `salesperson_id` and COUNT(*) AS `deals` from `sales`, GROUP BY `salesperson_id`, HAVING COUNT(*) > 20.",
        hint: "HAVING filters after GROUP BY — use HAVING COUNT(*) > n.",
        solution:
          "SELECT salesperson_id, COUNT(*) AS deals FROM sales GROUP BY salesperson_id HAVING COUNT(*) > 20;",
        starterCode:
          "SELECT salesperson_id, COUNT(*) AS deals FROM sales GROUP BY salesperson_id ___ COUNT(*) > 20;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 20", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },

  // ─── Game of Thrones ─────────────────────────────────────────────────────────
  "game-of-thrones-sql": {
    id: "got-sql-final",
    themeId: "game-of-thrones",
    languageId: "sql",
    themedTitle: "The Maester's Grand Raven Database",
    introNarrative:
      "The Citadel's grand database holds records of every house, battle, and raven sent across Westeros. To claim the Iron Throne, you must first master the data. Five queries, each more treacherous than the last. Winter is coming — and it brings GROUP BY.",
    questions: [
      {
        id: "got-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "Tyrion needs a list of all noble houses. Select the `house_name` and `sigil` from the `houses` table.",
        prompt: "Write a SELECT query to retrieve `house_name` and `sigil` FROM `houses`.",
        hint: "SELECT col1, col2 FROM table_name;",
        solution: "SELECT house_name, sigil FROM houses;",
        starterCode: "___ house_name, sigil ___ houses;",
        testCases: [{ input: "", expected: "SELECT house_name, sigil FROM houses", description: "Basic SELECT" }],
        conceptKeywords: ["SELECT", "FROM", "houses"],
      },
      {
        id: "got-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Jon Snow seeks only Northern houses. Filter `houses` WHERE `region` equals 'The North'.",
        prompt: "Select all columns from `houses` WHERE `region` = 'The North'.",
        hint: "WHERE column = 'value'",
        solution: "SELECT * FROM houses WHERE region = 'The North';",
        starterCode: "SELECT * FROM houses ___ region = 'The North';",
        testCases: [{ input: "", expected: "WHERE region = 'The North'", description: "WHERE filter" }],
        conceptKeywords: ["SELECT", "WHERE", "region"],
      },
      {
        id: "got-sql-final-3",
        concept: "ORDER BY & COUNT",
        narrative:
          "The Small Council counts battles per region to allocate troops. Count battles per `region` and order by count DESC.",
        prompt:
          "Select `region` and COUNT(*) AS `battle_count` from `battles`, GROUP BY `region`, ORDER BY `battle_count` DESC.",
        hint: "COUNT(*) counts rows; ORDER BY alias DESC sorts highest first.",
        solution:
          "SELECT region, COUNT(*) AS battle_count FROM battles GROUP BY region ORDER BY battle_count DESC;",
        starterCode:
          "SELECT region, COUNT(*) AS battle_count FROM battles GROUP BY region ORDER BY battle_count ___;",
        testCases: [{ input: "", expected: "COUNT(*) AS battle_count", description: "COUNT aggregate" }],
        conceptKeywords: ["COUNT", "GROUP BY", "ORDER BY"],
      },
      {
        id: "got-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "Cersei wants to see which ravens were sent by which house. Join `ravens` and `houses` on `house_id`.",
        prompt:
          "Select `houses.house_name` and `ravens.message` from `ravens` INNER JOIN `houses` ON `ravens.house_id = houses.id`.",
        hint: "INNER JOIN links matching rows between two tables.",
        solution:
          "SELECT houses.house_name, ravens.message FROM ravens INNER JOIN houses ON ravens.house_id = houses.id;",
        starterCode:
          "SELECT houses.house_name, ravens.message FROM ravens ___ JOIN houses ON ravens.house_id = houses.id;",
        testCases: [{ input: "", expected: "INNER JOIN houses ON ravens.house_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "houses"],
      },
      {
        id: "got-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "Daenerys only trusts houses that have sworn loyalty more than 4 times. Find them from the `oaths` table.",
        prompt:
          "Select `house_id` and COUNT(*) AS `oath_count` from `oaths`, GROUP BY `house_id`, HAVING COUNT(*) > 4.",
        hint: "HAVING filters aggregated groups after GROUP BY.",
        solution:
          "SELECT house_id, COUNT(*) AS oath_count FROM oaths GROUP BY house_id HAVING COUNT(*) > 4;",
        starterCode:
          "SELECT house_id, COUNT(*) AS oath_count FROM oaths GROUP BY house_id ___ COUNT(*) > 4;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 4", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },

  // ─── The Matrix ──────────────────────────────────────────────────────────────
  "the-matrix-sql": {
    id: "mx-sql-final",
    themeId: "the-matrix",
    languageId: "sql",
    themedTitle: "The Oracle's Database",
    introNarrative:
      "You have taken the red pill and discovered the truth: reality is a SQL database. The Oracle's schema holds every agent, every human, and every anomaly in the Matrix. Neo needs you to query five tables before Agent Smith traces the connection. There is no spoon — only SELECT.",
    questions: [
      {
        id: "mx-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "Morpheus needs the list of all freed humans. Select `codename` and `ship` from the `operatives` table.",
        prompt: "Write a SELECT query retrieving `codename` and `ship` FROM `operatives`.",
        hint: "SELECT col1, col2 FROM table_name;",
        solution: "SELECT codename, ship FROM operatives;",
        starterCode: "___ codename, ship ___ operatives;",
        testCases: [{ input: "", expected: "SELECT codename, ship FROM operatives", description: "Basic SELECT" }],
        conceptKeywords: ["SELECT", "FROM", "operatives"],
      },
      {
        id: "mx-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Neo searches for agents in the 'Simulation' sector. Filter `entities` WHERE `type` = 'agent'.",
        prompt: "Select all columns from `entities` WHERE `type` = 'agent'.",
        hint: "WHERE column = 'value'",
        solution: "SELECT * FROM entities WHERE type = 'agent';",
        starterCode: "SELECT * FROM entities ___ type = 'agent';",
        testCases: [{ input: "", expected: "WHERE type = 'agent'", description: "WHERE filter" }],
        conceptKeywords: ["SELECT", "WHERE", "type"],
      },
      {
        id: "mx-sql-final-3",
        concept: "ORDER BY & COUNT",
        narrative:
          "The Oracle tracks how many anomalies occurred per `sector`. Count them and order from most to least.",
        prompt:
          "Select `sector` and COUNT(*) AS `anomaly_count` from `anomalies`, GROUP BY `sector`, ORDER BY `anomaly_count` DESC.",
        hint: "Use COUNT(*) with GROUP BY, ORDER BY alias DESC.",
        solution:
          "SELECT sector, COUNT(*) AS anomaly_count FROM anomalies GROUP BY sector ORDER BY anomaly_count DESC;",
        starterCode:
          "SELECT sector, COUNT(*) AS anomaly_count FROM anomalies GROUP BY sector ORDER BY anomaly_count ___;",
        testCases: [{ input: "", expected: "COUNT(*) AS anomaly_count", description: "COUNT aggregate" }],
        conceptKeywords: ["COUNT", "GROUP BY", "ORDER BY"],
      },
      {
        id: "mx-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "Link each operative to their ship by joining `operatives` and `ships` on `ship_id`.",
        prompt:
          "Select `operatives.codename` and `ships.name` from `operatives` INNER JOIN `ships` ON `operatives.ship_id = ships.id`.",
        hint: "INNER JOIN connects rows that share a foreign/primary key pair.",
        solution:
          "SELECT operatives.codename, ships.name FROM operatives INNER JOIN ships ON operatives.ship_id = ships.id;",
        starterCode:
          "SELECT operatives.codename, ships.name FROM operatives ___ JOIN ships ON operatives.ship_id = ships.id;",
        testCases: [{ input: "", expected: "INNER JOIN ships ON operatives.ship_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "ships"],
      },
      {
        id: "mx-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "Agent Smith has replicated himself. Find entities with more than 3 copies from the `copies` table.",
        prompt:
          "Select `entity_id` and COUNT(*) AS `copy_count` from `copies`, GROUP BY `entity_id`, HAVING COUNT(*) > 3.",
        hint: "HAVING filters after GROUP BY — perfect for aggregate thresholds.",
        solution:
          "SELECT entity_id, COUNT(*) AS copy_count FROM copies GROUP BY entity_id HAVING COUNT(*) > 3;",
        starterCode:
          "SELECT entity_id, COUNT(*) AS copy_count FROM copies GROUP BY entity_id ___ COUNT(*) > 3;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 3", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },

  // ─── Rick & Morty ────────────────────────────────────────────────────────────
  "rick-and-morty-sql": {
    id: "rm-sql-final",
    themeId: "rick-and-morty",
    languageId: "sql",
    themedTitle: "The Interdimensional Council of SQL",
    introNarrative:
      "Wubba lubba dub dub! Rick's portal gun crashed into the Interdimensional Council's database server — now it's up to you to run the queries that keep the multiverse indexed. Five SQL challenges across infinite dimensions. Don't overthink it, Morty. It's just SELECT.",
    questions: [
      {
        id: "rm-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "Morty needs to look up all the dimensions in the registry. Select `dimension_id` and `name` from `dimensions`.",
        prompt: "Write a SELECT query retrieving `dimension_id` and `name` FROM `dimensions`.",
        hint: "SELECT col1, col2 FROM table_name;",
        solution: "SELECT dimension_id, name FROM dimensions;",
        starterCode: "___ dimension_id, name ___ dimensions;",
        testCases: [{ input: "", expected: "SELECT dimension_id, name FROM dimensions", description: "Basic SELECT" }],
        conceptKeywords: ["SELECT", "FROM", "dimensions"],
      },
      {
        id: "rm-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Rick needs only the Cronenberg'd dimensions. Filter `dimensions` WHERE `status` = 'cronenberged'.",
        prompt: "Select all columns from `dimensions` WHERE `status` = 'cronenberged'.",
        hint: "WHERE column = 'value'",
        solution: "SELECT * FROM dimensions WHERE status = 'cronenberged';",
        starterCode: "SELECT * FROM dimensions ___ status = 'cronenberged';",
        testCases: [{ input: "", expected: "WHERE status = 'cronenberged'", description: "WHERE filter" }],
        conceptKeywords: ["SELECT", "WHERE", "status"],
      },
      {
        id: "rm-sql-final-3",
        concept: "ORDER BY & COUNT",
        narrative:
          "The Council tallies interdimensional crimes per dimension. Count them per `dimension_id` and order by count DESC.",
        prompt:
          "Select `dimension_id` and COUNT(*) AS `crime_count` from `crimes`, GROUP BY `dimension_id`, ORDER BY `crime_count` DESC.",
        hint: "COUNT(*) + GROUP BY + ORDER BY alias DESC.",
        solution:
          "SELECT dimension_id, COUNT(*) AS crime_count FROM crimes GROUP BY dimension_id ORDER BY crime_count DESC;",
        starterCode:
          "SELECT dimension_id, COUNT(*) AS crime_count FROM crimes GROUP BY dimension_id ORDER BY crime_count ___;",
        testCases: [{ input: "", expected: "COUNT(*) AS crime_count", description: "COUNT aggregate" }],
        conceptKeywords: ["COUNT", "GROUP BY", "ORDER BY"],
      },
      {
        id: "rm-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "Mr. Meeseeks tasks need to be matched with their requesters. Join `tasks` and `requesters` on `requester_id`.",
        prompt:
          "Select `requesters.name` and `tasks.description` from `tasks` INNER JOIN `requesters` ON `tasks.requester_id = requesters.id`.",
        hint: "INNER JOIN links rows across tables using a shared key.",
        solution:
          "SELECT requesters.name, tasks.description FROM tasks INNER JOIN requesters ON tasks.requester_id = requesters.id;",
        starterCode:
          "SELECT requesters.name, tasks.description FROM tasks ___ JOIN requesters ON tasks.requester_id = requesters.id;",
        testCases: [{ input: "", expected: "INNER JOIN requesters ON tasks.requester_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "requesters"],
      },
      {
        id: "rm-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "Rick only visits dimensions he's visited more than 5 times. Find those dimension IDs from `visits`.",
        prompt:
          "Select `dimension_id` and COUNT(*) AS `visit_count` from `visits`, GROUP BY `dimension_id`, HAVING COUNT(*) > 5.",
        hint: "HAVING COUNT(*) > n filters groups after aggregation.",
        solution:
          "SELECT dimension_id, COUNT(*) AS visit_count FROM visits GROUP BY dimension_id HAVING COUNT(*) > 5;",
        starterCode:
          "SELECT dimension_id, COUNT(*) AS visit_count FROM visits GROUP BY dimension_id ___ COUNT(*) > 5;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 5", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },

  // ─── Squid Game ──────────────────────────────────────────────────────────────
  "squid-game-sql": {
    id: "sg-sql-final",
    themeId: "squid-game",
    languageId: "sql",
    themedTitle: "The Front Man's Player Database",
    introNarrative:
      "456 players. Billions of won at stake. The Front Man's database tracks every player's performance, debt, and game result. Your mission: run five queries that could expose the organisation's secrets. Player 456 is counting on you. Don't get eliminated.",
    questions: [
      {
        id: "sg-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "The Front Man reviews player records. Select `player_number` and `debt_amount` from the `players` table.",
        prompt: "Write a SELECT query retrieving `player_number` and `debt_amount` FROM `players`.",
        hint: "SELECT col1, col2 FROM table_name;",
        solution: "SELECT player_number, debt_amount FROM players;",
        starterCode: "___ player_number, debt_amount ___ players;",
        testCases: [{ input: "", expected: "SELECT player_number, debt_amount FROM players", description: "Basic SELECT" }],
        conceptKeywords: ["SELECT", "FROM", "players"],
      },
      {
        id: "sg-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Player 067 checks who made it past Round 3. Filter `players` WHERE `rounds_survived` > 3.",
        prompt: "Select all columns from `players` WHERE `rounds_survived` > 3.",
        hint: "Use WHERE with > for numeric comparisons.",
        solution: "SELECT * FROM players WHERE rounds_survived > 3;",
        starterCode: "SELECT * FROM players ___ rounds_survived > 3;",
        testCases: [{ input: "", expected: "WHERE rounds_survived > 3", description: "Numeric WHERE" }],
        conceptKeywords: ["SELECT", "WHERE", "rounds_survived"],
      },
      {
        id: "sg-sql-final-3",
        concept: "ORDER BY & COUNT",
        narrative:
          "The VIPs want to see which game eliminated the most players. Count eliminations per `game_name` and order DESC.",
        prompt:
          "Select `game_name` and COUNT(*) AS `eliminations` from `results`, GROUP BY `game_name`, ORDER BY `eliminations` DESC.",
        hint: "COUNT(*) + GROUP BY + ORDER BY alias DESC.",
        solution:
          "SELECT game_name, COUNT(*) AS eliminations FROM results GROUP BY game_name ORDER BY eliminations DESC;",
        starterCode:
          "SELECT game_name, COUNT(*) AS eliminations FROM results GROUP BY game_name ORDER BY eliminations ___;",
        testCases: [{ input: "", expected: "COUNT(*) AS eliminations", description: "COUNT aggregate" }],
        conceptKeywords: ["COUNT", "GROUP BY", "ORDER BY"],
      },
      {
        id: "sg-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "Connect each player to their assigned team by joining `players` and `teams` on `team_id`.",
        prompt:
          "Select `players.player_number` and `teams.color` from `players` INNER JOIN `teams` ON `players.team_id = teams.id`.",
        hint: "INNER JOIN links rows that have matching keys.",
        solution:
          "SELECT players.player_number, teams.color FROM players INNER JOIN teams ON players.team_id = teams.id;",
        starterCode:
          "SELECT players.player_number, teams.color FROM players ___ JOIN teams ON players.team_id = teams.id;",
        testCases: [{ input: "", expected: "INNER JOIN teams ON players.team_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "teams"],
      },
      {
        id: "sg-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "The Front Man wants groups with more than 2 survivors. Find them from the `survivors` table.",
        prompt:
          "Select `group_id` and COUNT(*) AS `survivor_count` from `survivors`, GROUP BY `group_id`, HAVING COUNT(*) > 2.",
        hint: "HAVING filters after GROUP BY — use HAVING COUNT(*) > n.",
        solution:
          "SELECT group_id, COUNT(*) AS survivor_count FROM survivors GROUP BY group_id HAVING COUNT(*) > 2;",
        starterCode:
          "SELECT group_id, COUNT(*) AS survivor_count FROM survivors GROUP BY group_id ___ COUNT(*) > 2;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 2", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },

  // ─── Arrested Development ────────────────────────────────────────────────────
  "arrested-development-sql": {
    id: "ad-sql-final",
    themeId: "arrested-development",
    languageId: "sql",
    themedTitle: "The Bluth Company Frozen Assets",
    introNarrative:
      "There's always money in the banana stand — but the SEC has frozen the Bluth Company's database. Michael needs a skilled developer to run five SQL queries and prove the family's finances are (mostly) legitimate. Ann's data is also in here, her?",
    questions: [
      {
        id: "ad-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "Michael needs a full list of Bluth Company assets. Select `asset_name` and `value` from `assets`.",
        prompt: "Write a SELECT query retrieving `asset_name` and `value` FROM `assets`.",
        hint: "SELECT col1, col2 FROM table_name;",
        solution: "SELECT asset_name, value FROM assets;",
        starterCode: "___ asset_name, value ___ assets;",
        testCases: [{ input: "", expected: "SELECT asset_name, value FROM assets", description: "Basic SELECT" }],
        conceptKeywords: ["SELECT", "FROM", "assets"],
      },
      {
        id: "ad-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Lucille wants to find all assets that are 'frozen' by the SEC. Filter `assets` WHERE `status` = 'frozen'.",
        prompt: "Select all columns from `assets` WHERE `status` = 'frozen'.",
        hint: "WHERE column = 'value'",
        solution: "SELECT * FROM assets WHERE status = 'frozen';",
        starterCode: "SELECT * FROM assets ___ status = 'frozen';",
        testCases: [{ input: "", expected: "WHERE status = 'frozen'", description: "WHERE filter" }],
        conceptKeywords: ["SELECT", "WHERE", "status"],
      },
      {
        id: "ad-sql-final-3",
        concept: "ORDER BY & SUM",
        narrative:
          "The SEC wants total expenditures per `family_member`. Sum `amount` from `expenses`, GROUP BY `family_member`, ORDER BY total DESC.",
        prompt:
          "Select `family_member` and SUM(`amount`) AS `total_spent` from `expenses`, GROUP BY `family_member`, ORDER BY `total_spent` DESC.",
        hint: "SUM() for totals, ORDER BY alias DESC.",
        solution:
          "SELECT family_member, SUM(amount) AS total_spent FROM expenses GROUP BY family_member ORDER BY total_spent DESC;",
        starterCode:
          "SELECT family_member, ___(amount) AS total_spent FROM expenses GROUP BY family_member ORDER BY total_spent DESC;",
        testCases: [{ input: "", expected: "SUM(amount) AS total_spent", description: "SUM aggregate" }],
        conceptKeywords: ["SUM", "GROUP BY", "ORDER BY"],
      },
      {
        id: "ad-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "Tobias wants to know which audition led to which role. Join `auditions` and `roles` on `role_id`.",
        prompt:
          "Select `auditions.date` and `roles.title` from `auditions` INNER JOIN `roles` ON `auditions.role_id = roles.id`.",
        hint: "INNER JOIN links rows by a shared key column.",
        solution:
          "SELECT auditions.date, roles.title FROM auditions INNER JOIN roles ON auditions.role_id = roles.id;",
        starterCode:
          "SELECT auditions.date, roles.title FROM auditions ___ JOIN roles ON auditions.role_id = roles.id;",
        testCases: [{ input: "", expected: "INNER JOIN roles ON auditions.role_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "roles"],
      },
      {
        id: "ad-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "Buster's magic show venues with more than 1 booking are worth pursuing. Find them from the `bookings` table.",
        prompt:
          "Select `venue_id` and COUNT(*) AS `booking_count` from `bookings`, GROUP BY `venue_id`, HAVING COUNT(*) > 1.",
        hint: "HAVING COUNT(*) > n filters after GROUP BY.",
        solution:
          "SELECT venue_id, COUNT(*) AS booking_count FROM bookings GROUP BY venue_id HAVING COUNT(*) > 1;",
        starterCode:
          "SELECT venue_id, COUNT(*) AS booking_count FROM bookings GROUP BY venue_id ___ COUNT(*) > 1;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 1", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },

  // ─── Barbie ──────────────────────────────────────────────────────────────────
  "barbie-sql": {
    id: "ba-sql-final",
    themeId: "barbie",
    languageId: "sql",
    themedTitle: "The Barbieland Registry Query",
    introNarrative:
      "Every Barbie in Barbieland is registered in the central database — their careers, dream houses, and Ken assignments. Gloria needs five queries to understand the full scope of Barbieland before presenting her findings to the real world. It's SQL-tastic!",
    questions: [
      {
        id: "ba-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "Gloria needs every Barbie's `name` and `career` from the `barbies` table.",
        prompt: "Write a SELECT query retrieving `name` and `career` FROM `barbies`.",
        hint: "SELECT col1, col2 FROM table_name;",
        solution: "SELECT name, career FROM barbies;",
        starterCode: "___ name, career ___ barbies;",
        testCases: [{ input: "", expected: "SELECT name, career FROM barbies", description: "Basic SELECT" }],
        conceptKeywords: ["SELECT", "FROM", "barbies"],
      },
      {
        id: "ba-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Barbie is looking for Kens who are 'beach' type. Filter `kens` WHERE `type` = 'beach'.",
        prompt: "Select all columns from `kens` WHERE `type` = 'beach'.",
        hint: "WHERE column = 'value'",
        solution: "SELECT * FROM kens WHERE type = 'beach';",
        starterCode: "SELECT * FROM kens ___ type = 'beach';",
        testCases: [{ input: "", expected: "WHERE type = 'beach'", description: "WHERE filter" }],
        conceptKeywords: ["SELECT", "WHERE", "type"],
      },
      {
        id: "ba-sql-final-3",
        concept: "ORDER BY & COUNT",
        narrative:
          "The Barbieland Council counts how many Barbies share each career. Count per `career`, order by total DESC.",
        prompt:
          "Select `career` and COUNT(*) AS `count` from `barbies`, GROUP BY `career`, ORDER BY `count` DESC.",
        hint: "COUNT(*) + GROUP BY career + ORDER BY alias DESC.",
        solution:
          "SELECT career, COUNT(*) AS count FROM barbies GROUP BY career ORDER BY count DESC;",
        starterCode:
          "SELECT career, COUNT(*) AS count FROM barbies GROUP BY career ORDER BY count ___;",
        testCases: [{ input: "", expected: "COUNT(*) AS count", description: "COUNT aggregate" }],
        conceptKeywords: ["COUNT", "GROUP BY", "ORDER BY"],
      },
      {
        id: "ba-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "Barbie needs to link dream houses to their owners. Join `barbies` and `houses` on `house_id`.",
        prompt:
          "Select `barbies.name` and `houses.style` from `barbies` INNER JOIN `houses` ON `barbies.house_id = houses.id`.",
        hint: "INNER JOIN links rows with matching foreign/primary keys.",
        solution:
          "SELECT barbies.name, houses.style FROM barbies INNER JOIN houses ON barbies.house_id = houses.id;",
        starterCode:
          "SELECT barbies.name, houses.style FROM barbies ___ JOIN houses ON barbies.house_id = houses.id;",
        testCases: [{ input: "", expected: "INNER JOIN houses ON barbies.house_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "houses"],
      },
      {
        id: "ba-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "Weird Barbie wants neighborhoods with more than 3 dream houses. Find them from `neighborhoods`.",
        prompt:
          "Select `neighborhood_id` and COUNT(*) AS `house_count` from `houses`, GROUP BY `neighborhood_id`, HAVING COUNT(*) > 3.",
        hint: "HAVING filters after GROUP BY — use HAVING COUNT(*) > n.",
        solution:
          "SELECT neighborhood_id, COUNT(*) AS house_count FROM houses GROUP BY neighborhood_id HAVING COUNT(*) > 3;",
        starterCode:
          "SELECT neighborhood_id, COUNT(*) AS house_count FROM houses GROUP BY neighborhood_id ___ COUNT(*) > 3;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 3", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },

  // ─── Sex and the City ────────────────────────────────────────────────────────
  "sex-and-the-city-sql": {
    id: "sc-sql-final",
    themeId: "sex-and-the-city",
    languageId: "sql",
    themedTitle: "Carrie's Column Database",
    introNarrative:
      "I couldn't help but wonder — what if New York City ran on SQL? Carrie's laptop holds the ultimate relational database of relationships, fashion, and cosmos. Five queries to discover what the city (and its data) truly holds. Will you find love, or just a well-formed JOIN?",
    questions: [
      {
        id: "sc-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "Carrie needs a full list of her column topics. Select `title` and `publish_date` from `columns`.",
        prompt: "Write a SELECT query retrieving `title` and `publish_date` FROM `columns`.",
        hint: "SELECT col1, col2 FROM table_name;",
        solution: "SELECT title, publish_date FROM columns;",
        starterCode: "___ title, publish_date ___ columns;",
        testCases: [{ input: "", expected: "SELECT title, publish_date FROM columns", description: "Basic SELECT" }],
        conceptKeywords: ["SELECT", "FROM", "columns"],
      },
      {
        id: "sc-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Samantha needs to find only 'fabulous' rated nights out. Filter `events` WHERE `rating` = 'fabulous'.",
        prompt: "Select all columns from `events` WHERE `rating` = 'fabulous'.",
        hint: "WHERE column = 'value'",
        solution: "SELECT * FROM events WHERE rating = 'fabulous';",
        starterCode: "SELECT * FROM events ___ rating = 'fabulous';",
        testCases: [{ input: "", expected: "WHERE rating = 'fabulous'", description: "WHERE filter" }],
        conceptKeywords: ["SELECT", "WHERE", "rating"],
      },
      {
        id: "sc-sql-final-3",
        concept: "ORDER BY & COUNT",
        narrative:
          "Miranda is tracking how many dates each person went on. Count dates per `person` and order DESC.",
        prompt:
          "Select `person` and COUNT(*) AS `date_count` from `dates`, GROUP BY `person`, ORDER BY `date_count` DESC.",
        hint: "COUNT(*) + GROUP BY person + ORDER BY alias DESC.",
        solution:
          "SELECT person, COUNT(*) AS date_count FROM dates GROUP BY person ORDER BY date_count DESC;",
        starterCode:
          "SELECT person, COUNT(*) AS date_count FROM dates GROUP BY person ORDER BY date_count ___;",
        testCases: [{ input: "", expected: "COUNT(*) AS date_count", description: "COUNT aggregate" }],
        conceptKeywords: ["COUNT", "GROUP BY", "ORDER BY"],
      },
      {
        id: "sc-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "Charlotte wants to pair every shoe with its designer. Join `shoes` and `designers` on `designer_id`.",
        prompt:
          "Select `shoes.style` and `designers.name` from `shoes` INNER JOIN `designers` ON `shoes.designer_id = designers.id`.",
        hint: "INNER JOIN links rows with matching keys.",
        solution:
          "SELECT shoes.style, designers.name FROM shoes INNER JOIN designers ON shoes.designer_id = designers.id;",
        starterCode:
          "SELECT shoes.style, designers.name FROM shoes ___ JOIN designers ON shoes.designer_id = designers.id;",
        testCases: [{ input: "", expected: "INNER JOIN designers ON shoes.designer_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "designers"],
      },
      {
        id: "sc-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "Big needs restaurants that received more than 5 reservations — those are the power spots.",
        prompt:
          "Select `restaurant_id` and COUNT(*) AS `reservation_count` from `reservations`, GROUP BY `restaurant_id`, HAVING COUNT(*) > 5.",
        hint: "HAVING filters aggregate results after GROUP BY.",
        solution:
          "SELECT restaurant_id, COUNT(*) AS reservation_count FROM reservations GROUP BY restaurant_id HAVING COUNT(*) > 5;",
        starterCode:
          "SELECT restaurant_id, COUNT(*) AS reservation_count FROM reservations GROUP BY restaurant_id ___ COUNT(*) > 5;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 5", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },

  // ─── Sopranos ────────────────────────────────────────────────────────────────
  "sopranos-sql": {
    id: "sp-sql-final",
    themeId: "sopranos",
    languageId: "sql",
    themedTitle: "Tony's Pork Store Ledger",
    introNarrative:
      "Forget about it. The Bada Bing runs on more than gabagool — it runs on a PostgreSQL database that the Feds would love to get their hands on. Tony needs a trusted data analyst to run five queries before Christopher spills everything. Don't be a gavone — write the SQL.",
    questions: [
      {
        id: "sp-sql-final-1",
        concept: "SELECT & FROM",
        narrative:
          "Carmela needs a list of all crew members. Select `name` and `rank` from the `crew` table.",
        prompt: "Write a SELECT query retrieving `name` and `rank` FROM `crew`.",
        hint: "SELECT col1, col2 FROM table_name;",
        solution: "SELECT name, rank FROM crew;",
        starterCode: "___ name, rank ___ crew;",
        testCases: [{ input: "", expected: "SELECT name, rank FROM crew", description: "Basic SELECT" }],
        conceptKeywords: ["SELECT", "FROM", "crew"],
      },
      {
        id: "sp-sql-final-2",
        concept: "WHERE Clause",
        narrative:
          "Tony wants to find only 'capo' rank members. Filter `crew` WHERE `rank` = 'capo'.",
        prompt: "Select all columns from `crew` WHERE `rank` = 'capo'.",
        hint: "WHERE column = 'value'",
        solution: "SELECT * FROM crew WHERE rank = 'capo';",
        starterCode: "SELECT * FROM crew ___ rank = 'capo';",
        testCases: [{ input: "", expected: "WHERE rank = 'capo'", description: "WHERE filter" }],
        conceptKeywords: ["SELECT", "WHERE", "rank"],
      },
      {
        id: "sp-sql-final-3",
        concept: "ORDER BY & SUM",
        narrative:
          "The Feds want to see total earnings per `crew_member`. Sum `amount` from `earnings`, GROUP BY `crew_member`, ORDER BY total DESC.",
        prompt:
          "Select `crew_member` and SUM(`amount`) AS `total_earnings` from `earnings`, GROUP BY `crew_member`, ORDER BY `total_earnings` DESC.",
        hint: "SUM() aggregates numbers; ORDER BY alias DESC sorts highest first.",
        solution:
          "SELECT crew_member, SUM(amount) AS total_earnings FROM earnings GROUP BY crew_member ORDER BY total_earnings DESC;",
        starterCode:
          "SELECT crew_member, ___(amount) AS total_earnings FROM earnings GROUP BY crew_member ORDER BY total_earnings DESC;",
        testCases: [{ input: "", expected: "SUM(amount) AS total_earnings", description: "SUM aggregate" }],
        conceptKeywords: ["SUM", "GROUP BY", "ORDER BY"],
      },
      {
        id: "sp-sql-final-4",
        concept: "INNER JOIN",
        narrative:
          "Silvio needs to connect each hit to the crew member ordered it. Join `hits` and `crew` on `crew_id`.",
        prompt:
          "Select `crew.name` and `hits.target` from `hits` INNER JOIN `crew` ON `hits.crew_id = crew.id`.",
        hint: "INNER JOIN links rows using matching foreign/primary key pairs.",
        solution:
          "SELECT crew.name, hits.target FROM hits INNER JOIN crew ON hits.crew_id = crew.id;",
        starterCode:
          "SELECT crew.name, hits.target FROM hits ___ JOIN crew ON hits.crew_id = crew.id;",
        testCases: [{ input: "", expected: "INNER JOIN crew ON hits.crew_id", description: "JOIN query" }],
        conceptKeywords: ["INNER JOIN", "ON", "crew"],
      },
      {
        id: "sp-sql-final-5",
        concept: "HAVING & Subquery",
        narrative:
          "Paulie Walnuts wants to identify rackets generating more than 4 incidents. Check the `incidents` table.",
        prompt:
          "Select `racket_id` and COUNT(*) AS `incident_count` from `incidents`, GROUP BY `racket_id`, HAVING COUNT(*) > 4.",
        hint: "HAVING COUNT(*) > n keeps only the busy groups.",
        solution:
          "SELECT racket_id, COUNT(*) AS incident_count FROM incidents GROUP BY racket_id HAVING COUNT(*) > 4;",
        starterCode:
          "SELECT racket_id, COUNT(*) AS incident_count FROM incidents GROUP BY racket_id ___ COUNT(*) > 4;",
        testCases: [{ input: "", expected: "HAVING COUNT(*) > 4", description: "HAVING clause" }],
        conceptKeywords: ["HAVING", "COUNT", "GROUP BY"],
      },
    ],
  },
};
