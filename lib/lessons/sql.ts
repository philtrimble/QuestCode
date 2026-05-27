import type { Lesson } from "@/types";

export const sqlLessons: Record<string, Lesson> = {

  // ─── Stranger Things ──────────────────────────────────────────────────────

  "st-sql-01": {
    intro: "Hopper has a database of every Upside Down sighting logged by the Hawkins police department. Before he can analyse the data, he needs to know how to read the whole table — and that starts with `SELECT`.",
    concept: "SQL's `SELECT` statement retrieves data from a database table. `SELECT *` returns every column. Listing specific column names after `SELECT` returns only those columns. Every SQL statement ends with a semicolon.",
    example: `-- Get every column from every row
SELECT * FROM sightings;

-- Get only specific columns
SELECT location, creature FROM sightings;`,
    exampleOutput: "All rows and all columns from the sightings table.\nThen: only location and creature columns.",
    notes: "`*` is shorthand for 'all columns'. Listing column names explicitly gives you a narrower, more focused result set.",
    keyPoints: [
      "`SELECT * FROM table;` returns every column and every row.",
      "List column names to retrieve only what you need: `SELECT col1, col2 FROM table;`",
      "SQL keywords like `SELECT` and `FROM` are case-insensitive, but uppercase is conventional.",
      "Every SQL statement ends with a semicolon `;`.",
    ],
  },

  "st-sql-02": {
    intro: "The sightings database has entries for every kind of creature — but Hopper only cares about the Demogorgon. SQL's `WHERE` clause narrows the result set to only the rows that match a condition.",
    concept: "The `WHERE` clause filters rows. Only rows where the condition evaluates to `true` are returned. You can compare column values using `=`, `!=`, `>`, `<`, `>=`, `<=`, and test strings with `= 'value'` (single quotes).",
    example: `SELECT location, threat_level
FROM sightings
WHERE threat_level > 7;`,
    exampleOutput: "Rows from sightings where threat_level is greater than 7.",
    notes: "The `WHERE` clause goes after `FROM`. Only rows satisfying `threat_level > 7` are included in the result — all others are filtered out.",
    keyPoints: [
      "Clause order: `SELECT ... FROM ... WHERE ...`",
      "String values use single quotes: `WHERE creature = 'Demogorgon'`",
      "Numbers don't need quotes: `WHERE threat_level > 7`",
      "Multiple conditions: `WHERE creature = 'Demogorgon' AND threat_level > 5`",
    ],
  },

  "st-sql-03": {
    intro: "Eleven needs to see the worst sightings first. `ORDER BY` sorts the results, and `LIMIT` cuts the list down to a manageable number so the team can focus on the most urgent threats.",
    concept: "`ORDER BY column DESC` sorts results from highest to lowest. `ASC` sorts lowest to highest (the default). `LIMIT n` restricts the result to the first n rows after sorting.",
    example: `SELECT location, creature, threat_level
FROM sightings
ORDER BY threat_level DESC
LIMIT 3;`,
    exampleOutput: "The 3 sightings with the highest threat_level, in descending order.",
    notes: "The query first sorts all rows by `threat_level` descending, then returns only the top 3. Without `ORDER BY`, `LIMIT` gives an arbitrary set of rows.",
    keyPoints: [
      "`ORDER BY column DESC` sorts highest-first; `ASC` (or no keyword) sorts lowest-first.",
      "`LIMIT n` returns at most n rows from the result.",
      "Sorting happens before `LIMIT` is applied.",
      "You can sort by multiple columns: `ORDER BY col1 DESC, col2 ASC`",
    ],
  },

  "st-sql-04": {
    intro: "The chief wants statistics, not individual sightings. SQL's aggregate functions collapse many rows into a single summary number — perfect for a threat briefing.",
    concept: "Aggregate functions compute a single result across all matching rows. `COUNT(*)` counts rows. `SUM(col)` totals a numeric column. `AVG(col)` calculates the average. `MAX` and `MIN` find extremes. Use `AS` to give the result a readable name.",
    example: `SELECT
  COUNT(*) AS total_sightings,
  MAX(threat_level) AS highest_threat
FROM sightings;`,
    exampleOutput: "One row with total_sightings and highest_threat columns.",
    notes: "Aggregate functions collapse all matching rows into one. `AS` renames the output column — without it, the column header would be the function expression itself.",
    keyPoints: [
      "`COUNT(*)` counts all rows; `COUNT(col)` counts non-null values in a column.",
      "`SUM`, `AVG`, `MAX`, `MIN` operate on numeric columns.",
      "`AS alias` renames the output column for readability.",
      "Aggregates with no `GROUP BY` collapse the entire table into a single row.",
    ],
  },

  "st-sql-05": {
    intro: "The debrief needs a breakdown by creature type — how many sightings per creature. `GROUP BY` is SQL's way of splitting rows into buckets and aggregating each bucket separately.",
    concept: "`GROUP BY` splits rows into groups based on the values in a column. An aggregate function is then applied to each group. Every column in `SELECT` must either be in `GROUP BY` or be an aggregate.",
    example: `SELECT
  location,
  COUNT(*) AS sighting_count
FROM sightings
GROUP BY location
ORDER BY sighting_count DESC;`,
    exampleOutput: "One row per unique location, with a count of sightings at that location, sorted most-sighted first.",
    notes: "Each unique `location` value becomes its own group. `COUNT(*)` counts the rows in each group, not the whole table.",
    keyPoints: [
      "`GROUP BY col` creates one output row per unique value of `col`.",
      "Only grouped columns and aggregates can appear in `SELECT`.",
      "Add `ORDER BY aggregate DESC` to rank groups by their aggregate value.",
      "Add `HAVING condition` to filter groups (like `WHERE` but for group results).",
    ],
  },

  // ─── Severance ────────────────────────────────────────────────────────────

  "sv-sql-01": {
    intro: "Harmony Cobel has a database of every severed employee on the floor. Before she can run compliance reports, she needs to know how to pull the full roster from the `employees` table.",
    concept: "The `SELECT` statement tells the database which data to return. `SELECT *` gives all columns; naming columns explicitly gives you a focused view. SQL reads naturally: 'select these columns from this table'.",
    example: `-- All employee data
SELECT * FROM employees;

-- Just names and departments
SELECT name, department FROM employees;`,
    exampleOutput: "All rows and columns from employees.\nThen: only name and department columns.",
    notes: "Selecting only the columns you need reduces the data returned and makes queries easier to read. In production systems it also improves performance.",
    keyPoints: [
      "`SELECT *` returns all columns.",
      "Name columns explicitly to return only what you need.",
      "Columns are returned in the order you list them.",
      "Table and column names are case-insensitive in most SQL databases.",
    ],
  },

  "sv-sql-02": {
    intro: "Management wants to see only the MDR employees — not the full org chart. The `WHERE` clause filters the employee roster down to just the department that matters right now.",
    concept: "`WHERE` filters rows based on a condition. Only rows where the condition is `true` are included in the results. You can combine conditions with `AND` and `OR`.",
    example: `SELECT name, refinement_score
FROM employees
WHERE refinement_score >= 80;`,
    exampleOutput: "Employees with a refinement_score of 80 or higher.",
    notes: "The database checks every row against `refinement_score >= 80` and includes only those that pass. All other rows are silently discarded from the result.",
    keyPoints: [
      "`WHERE` goes after `FROM`.",
      "String comparisons use single quotes: `WHERE department = 'MDR'`",
      "Numeric comparisons don't need quotes: `WHERE refinement_score >= 80`",
      "Combine with `AND`: `WHERE department = 'MDR' AND refinement_score >= 80`",
    ],
  },

  "sv-sql-03": {
    intro: "Cobel wants the top refiners for the quarterly wellness report. `ORDER BY` sorts them by score, and `LIMIT` keeps the list short enough to fit on the reward board.",
    concept: "`ORDER BY column DESC` returns results sorted highest-first. `LIMIT n` caps the number of rows returned. Used together, they answer 'what are the top N?' questions.",
    example: `SELECT name, refinement_score
FROM employees
ORDER BY refinement_score DESC
LIMIT 5;`,
    exampleOutput: "The 5 employees with the highest refinement_score, sorted highest-first.",
    notes: "The database sorts all employees by `refinement_score` descending, then returns only the first 5 rows of that sorted result.",
    keyPoints: [
      "`ORDER BY col DESC` sorts largest-first; `ASC` (or default) sorts smallest-first.",
      "`LIMIT n` truncates the result to n rows.",
      "Sorting and limiting combine: sort first, then cut.",
      "Without `ORDER BY`, `LIMIT` returns an unpredictable subset.",
    ],
  },

  "sv-sql-04": {
    intro: "The quarterly workforce report needs aggregate numbers — total headcount, combined scores, average performance. SQL's aggregate functions compress the whole table into a single summary row.",
    concept: "Aggregate functions like `COUNT`, `SUM`, and `AVG` compute statistics across all matching rows and return a single result. Alias each result with `AS` to give it a meaningful column name.",
    example: `SELECT
  COUNT(*) AS total_employees,
  AVG(refinement_score) AS avg_score
FROM employees;`,
    exampleOutput: "One row: total number of employees and their average refinement score.",
    notes: "`COUNT(*)` counts every row in the table. `AVG(refinement_score)` computes the mean across all employees. Both are reported as a single summary row.",
    keyPoints: [
      "`COUNT(*)` counts rows; `COUNT(col)` counts non-null values in that column.",
      "`AVG(col)` computes the mean of a numeric column.",
      "`AS name` renames the output column.",
      "No `GROUP BY` means the aggregate spans the entire table.",
    ],
  },

  "sv-sql-05": {
    intro: "Management needs to know the headcount of each department on the severed floor. `GROUP BY` buckets employees by department and counts each bucket — one row of output per department.",
    concept: "`GROUP BY` partitions rows into groups by the unique values in a column. Aggregate functions are then computed per group. The result has one row per distinct group value.",
    example: `SELECT
  department,
  COUNT(*) AS headcount
FROM employees
GROUP BY department
ORDER BY headcount DESC;`,
    exampleOutput: "One row per department showing the department name and employee count, largest first.",
    notes: "Every unique `department` value becomes a row. `COUNT(*)` counts how many employees are in each department group.",
    keyPoints: [
      "`GROUP BY col` produces one output row per unique value of `col`.",
      "Every non-aggregate column in `SELECT` must appear in `GROUP BY`.",
      "`ORDER BY headcount DESC` sorts the groups by their count.",
      "Use `HAVING` to filter groups: `HAVING COUNT(*) > 5` keeps only large departments.",
    ],
  },

  // ─── Breaking Bad ─────────────────────────────────────────────────────────

  "bb-sql-01": {
    intro: "Walt's lab keeps a precise inventory of every batch in the `products` table. Before any analysis can happen, he needs to know how to pull that data out of the database.",
    concept: "`SELECT` retrieves data from a database table. `SELECT *` returns all columns. Listing specific columns returns just those fields. Every query needs at minimum a `SELECT` and a `FROM`.",
    example: `-- All product data
SELECT * FROM products;

-- Just name and purity
SELECT name, purity FROM products;`,
    exampleOutput: "All rows from products.\nThen: only name and purity for each row.",
    notes: "`*` is a wildcard for 'all columns'. Naming columns explicitly documents what you need and often makes the result cleaner.",
    keyPoints: [
      "`SELECT * FROM table;` returns all columns and rows.",
      "Named columns: `SELECT name, purity FROM products;`",
      "SQL statements end with `;`.",
      "Column order in `SELECT` determines output column order.",
    ],
  },

  "bb-sql-02": {
    intro: "Walt only wants to see the batches that meet his standard — purity 99% or higher. Everything below that gets filtered out before it ever reaches his eyes.",
    concept: "`WHERE` filters rows by a condition. Rows that satisfy the condition are returned; rows that don't are excluded. Numeric comparisons use `>`, `<`, `>=`, `<=`, `=`, `!=`. String comparisons use `= 'value'`.",
    example: `SELECT name, purity, batch_size_grams
FROM products
WHERE purity >= 96;`,
    exampleOutput: "Products with purity 96 or higher.",
    notes: "The database evaluates `purity >= 96` for every row. Only rows where the condition is true appear in the output.",
    keyPoints: [
      "`WHERE condition` goes after `FROM table`.",
      "Use `>=` for 'greater than or equal to'.",
      "Numbers don't use quotes; strings do: `WHERE name = 'Blue Sky'`",
      "Combine conditions: `WHERE purity >= 99 AND batch_size_grams > 200`",
    ],
  },

  "bb-sql-03": {
    intro: "Gus wants the top three purest batches on the market — the crown jewels of the operation. `ORDER BY` sorts by purity descending, and `LIMIT 3` keeps only the best.",
    concept: "`ORDER BY` sorts the result rows. `DESC` means highest-first (descending). `ASC` or no keyword means lowest-first. `LIMIT n` returns only the first n rows of the sorted result.",
    example: `SELECT name, purity
FROM products
ORDER BY purity DESC
LIMIT 3;`,
    exampleOutput: "The 3 products with the highest purity, sorted highest-first.",
    notes: "SQL sorts all matching rows first, then applies `LIMIT`. The top 3 purity values are returned.",
    keyPoints: [
      "`ORDER BY col DESC` sorts from highest to lowest.",
      "`LIMIT n` caps the number of rows returned.",
      "You can `ORDER BY` a column not in your `SELECT` list.",
      "Combine multiple sort keys: `ORDER BY purity DESC, name ASC`",
    ],
  },

  "bb-sql-04": {
    intro: "Saul wants a summary of the client book — total fees collected, average deal size. Aggregate functions compress the `clients` table into a single executive summary.",
    concept: "`COUNT(*)` counts rows. `SUM(col)` adds up a numeric column. `AVG(col)` computes the mean. Use `AS` to name the output columns. Without `GROUP BY`, aggregates reduce the entire table to one summary row.",
    example: `SELECT
  COUNT(*) AS total_clients,
  SUM(fees_paid) AS total_fees
FROM clients;`,
    exampleOutput: "One row: the total number of clients and their combined fees.",
    notes: "Both aggregate functions collapse all rows into a single number. The result is always one row when there's no `GROUP BY` clause.",
    keyPoints: [
      "`COUNT(*)` counts all rows including nulls.",
      "`SUM(col)` totals a numeric column.",
      "`AVG(col)` = sum / count for non-null values.",
      "`AS alias` renames the output column.",
    ],
  },

  "bb-sql-05": {
    intro: "Walt needs a breakdown of deliveries by territory — total quantity shipped to each area. `GROUP BY` splits the deliveries table into per-territory buckets and sums each one.",
    concept: "`GROUP BY column` creates one output row per unique value of that column. You then apply aggregates (like `SUM`) to each group. Every non-aggregate column in `SELECT` must appear in `GROUP BY`.",
    example: `SELECT
  territory,
  COUNT(*) AS delivery_count
FROM deliveries
GROUP BY territory
ORDER BY delivery_count DESC;`,
    exampleOutput: "One row per territory, showing the territory name and number of deliveries, most-delivered first.",
    notes: "The database groups all delivery rows by their `territory` value, then counts within each group. The result is one row per unique territory.",
    keyPoints: [
      "`GROUP BY col` collapses multiple rows into one per unique value.",
      "Non-aggregate columns in `SELECT` must be in `GROUP BY`.",
      "Aggregates (like `COUNT`) are computed independently for each group.",
      "`ORDER BY aggregate DESC` ranks groups by their summary value.",
    ],
  },

  // ─── The Office ───────────────────────────────────────────────────────────

  "to-sql-01": {
    intro: "The Scranton branch keeps every sale in a `sales` table. Dwight needs to see the whole ledger before he can identify the top performers — and that starts with a plain `SELECT`.",
    concept: "`SELECT` retrieves rows and columns from a database table. You choose what to return with `*` (all columns) or by listing specific column names. The result is called a result set.",
    example: `-- Every column of every sale
SELECT * FROM sales;

-- Just salesperson and amount
SELECT salesperson, amount FROM sales;`,
    exampleOutput: "All sales data.\nThen: only salesperson and amount.",
    notes: "The first query returns everything; the second returns a focused two-column view. Both look at the same data, just through different lenses.",
    keyPoints: [
      "`SELECT *` retrieves all columns.",
      "Column names after `SELECT` retrieve only those columns.",
      "The `FROM` clause names the table to query.",
      "All SQL statements end with `;`.",
    ],
  },

  "to-sql-02": {
    intro: "Michael wants to review only the Scranton sales — not Stamford, not Nashua. The `WHERE` clause is how SQL narrows the result set to a specific region.",
    concept: "`WHERE` filters rows. The database evaluates the condition for each row and only includes rows where it's `true`. Strings need single quotes; numbers don't.",
    example: `SELECT salesperson, client, amount
FROM sales
WHERE region = 'Scranton';`,
    exampleOutput: "Only sales where region is 'Scranton'.",
    notes: "The database scans every row and checks `region = 'Scranton'`. Only matching rows are included. The comparison is case-sensitive in most databases.",
    keyPoints: [
      "String values use single quotes: `'Scranton'`",
      "Numbers don't need quotes: `WHERE amount > 1000`",
      "`AND` requires both conditions true; `OR` requires either.",
      "`<>` or `!=` means 'not equal'.",
    ],
  },

  "to-sql-03": {
    intro: "At the end of the quarter, Dwight wants to see the five biggest deals — ranked by amount. `ORDER BY` puts them in order and `LIMIT` cuts the list to the top five.",
    concept: "`ORDER BY column DESC` sorts results from largest to smallest. `LIMIT n` caps the returned rows at n. Together they implement 'top N' queries.",
    example: `SELECT salesperson, client, amount
FROM sales
ORDER BY amount DESC
LIMIT 5;`,
    exampleOutput: "The 5 sales with the highest amounts, sorted largest-first.",
    notes: "The database sorts all matching rows by `amount` descending, then returns the first 5. Combining `ORDER BY` and `LIMIT` is the standard 'top N' pattern.",
    keyPoints: [
      "`DESC` sorts highest-first; omit it (or write `ASC`) for lowest-first.",
      "`LIMIT n` goes at the end of the query.",
      "Sort must come before `LIMIT` in the clause order.",
      "You can combine: `ORDER BY amount DESC, salesperson ASC`",
    ],
  },

  "to-sql-04": {
    intro: "The end-of-quarter numbers meeting needs a single summary row: total sales, total revenue, and average deal size. SQL's aggregate functions produce exactly that from the entire `sales` table.",
    concept: "Aggregate functions reduce a set of rows to a single summary value. `COUNT(*)` counts rows, `SUM(col)` totals them, `AVG(col)` averages them. With no `GROUP BY`, they apply to the whole table.",
    example: `SELECT
  COUNT(*) AS total_sales,
  AVG(amount) AS avg_deal_size
FROM sales;`,
    exampleOutput: "One row showing total sales count and average deal size.",
    notes: "No `GROUP BY` means all rows are aggregated together into a single result row.",
    keyPoints: [
      "`COUNT(*)` counts all rows; `COUNT(col)` skips nulls.",
      "`AVG` divides the sum by the count of non-null values.",
      "`AS alias` labels the output column.",
      "Mixing aggregates and plain columns without `GROUP BY` is a SQL error.",
    ],
  },

  "to-sql-05": {
    intro: "Michael wants to know which region brought in the most sales. `GROUP BY` groups the rows by region and lets you compute a total per region.",
    concept: "`GROUP BY column` partitions the table into groups, one per unique value. Each group is aggregated independently. The result has one row per group.",
    example: `SELECT
  region,
  SUM(amount) AS total_revenue
FROM sales
GROUP BY region
ORDER BY total_revenue DESC;`,
    exampleOutput: "One row per region, showing region name and total revenue, highest revenue first.",
    notes: "Rows with the same `region` are combined into a group. `SUM(amount)` is computed per group, giving a per-region revenue total.",
    keyPoints: [
      "`GROUP BY col` gives one output row per unique value of `col`.",
      "Every non-aggregate in `SELECT` must be in `GROUP BY`.",
      "`SUM(amount)` totals the amount within each group.",
      "Sort by the aggregate to rank groups.",
    ],
  },

  // ─── Game of Thrones ──────────────────────────────────────────────────────

  "got-sql-01": {
    intro: "The Citadel's database holds records on every Great House in Westeros. Jon Snow needs to query the `houses` table — and before any strategy can be planned, all the data must be visible.",
    concept: "`SELECT` is the foundation of SQL queries. It tells the database what to return. `SELECT *` gets everything; naming columns narrows the view. Every `SELECT` requires a `FROM` clause.",
    example: `-- All Great House data
SELECT * FROM houses;

-- Just name and region
SELECT name, region FROM houses;`,
    exampleOutput: "All rows from houses.\nThen: only name and region columns.",
    notes: "Both queries retrieve from the same table. The first gets everything; the second gets a cleaner, focused view.",
    keyPoints: [
      "`SELECT *` returns every column.",
      "Specify column names for a focused result set.",
      "SQL is case-insensitive for keywords; column and table names match the schema.",
      "Every statement ends with `;`.",
    ],
  },

  "got-sql-02": {
    intro: "Daenerys wants to see only the houses sworn to her cause. The `WHERE` clause filters the `houses` table to just those with `allegiance = 'Targaryen'`.",
    concept: "`WHERE` narrows query results to rows that satisfy a condition. String values require single quotes. Numeric values don't. You can chain conditions with `AND` and `OR`.",
    example: `SELECT name, region, army_size
FROM houses
WHERE army_size > 5000;`,
    exampleOutput: "Houses with an army_size greater than 5000.",
    notes: "Every row is evaluated against `army_size > 5000`. Only houses with large armies are returned.",
    keyPoints: [
      "Order: `SELECT ... FROM ... WHERE ...`",
      "Strings need single quotes: `WHERE allegiance = 'Targaryen'`",
      "Numbers don't: `WHERE army_size > 5000`",
      "`AND` joins conditions: `WHERE region = 'North' AND army_size > 1000`",
    ],
  },

  "got-sql-03": {
    intro: "The war council needs to know which five houses command the largest armies. `ORDER BY army_size DESC` ranks them, and `LIMIT 5` keeps only the mightiest.",
    concept: "Sorting and limiting are essential for 'top N' queries. `ORDER BY` determines the sort order; `LIMIT` cuts off the rest.",
    example: `SELECT name, army_size
FROM houses
ORDER BY army_size DESC
LIMIT 3;`,
    exampleOutput: "The 3 houses with the largest armies, sorted largest-first.",
    notes: "All houses are sorted by army size descending, then only the first three rows are returned.",
    keyPoints: [
      "`DESC` sorts highest-first.",
      "`LIMIT n` returns at most n rows.",
      "The database sorts first, then limits.",
      "Without `ORDER BY`, `LIMIT` returns arbitrary rows.",
    ],
  },

  "got-sql-04": {
    intro: "Tyrion needs a strategic overview: total houses in the database, combined armies across the realm, and average army size. Aggregate functions compress the entire `houses` table into a single briefing row.",
    concept: "SQL aggregate functions (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`) compute summaries across rows. Applied to a whole table without `GROUP BY`, they produce a single-row result.",
    example: `SELECT
  COUNT(*) AS total_houses,
  SUM(army_size) AS total_armies
FROM houses;`,
    exampleOutput: "One row showing how many houses exist and the combined army strength.",
    notes: "`COUNT(*)` counts every row in `houses`. `SUM(army_size)` adds up all army sizes into one total.",
    keyPoints: [
      "`COUNT(*)` counts rows; `COUNT(col)` counts non-null values.",
      "`SUM(col)` totals a numeric column.",
      "`AVG`, `MAX`, `MIN` compute mean, maximum, and minimum respectively.",
      "`AS alias` names the output column.",
    ],
  },

  "got-sql-05": {
    intro: "How many houses does each allegiance faction control? `GROUP BY allegiance` splits the table into groups and counts each one — exactly what the Master of Coin needs for the war budget.",
    concept: "`GROUP BY` creates groups based on unique column values and runs aggregates per group. Each unique value of the grouped column becomes one output row.",
    example: `SELECT
  allegiance,
  COUNT(*) AS house_count
FROM houses
GROUP BY allegiance
ORDER BY house_count DESC;`,
    exampleOutput: "One row per allegiance faction showing the number of houses loyal to them, most-supported first.",
    notes: "The database groups all houses by their `allegiance` value. `COUNT(*)` counts how many houses are in each group.",
    keyPoints: [
      "`GROUP BY col` produces one row per distinct value.",
      "The grouped column and aggregates are what goes in `SELECT`.",
      "Sort by the aggregate to rank from most to least.",
      "`HAVING COUNT(*) > 1` would filter to only factions with more than one house.",
    ],
  },

  // ─── The Matrix ───────────────────────────────────────────────────────────

  "mx-sql-01": {
    intro: "The Architect logs every anomaly in the simulation to the `anomalies` table. Before Neo can identify the threats, someone needs to pull the full data — a job for `SELECT`.",
    concept: "`SELECT` tells the database what to retrieve. `SELECT *` gets all columns. Listing column names gets specific ones. Always pair `SELECT` with `FROM table_name`.",
    example: `-- All anomaly data
SELECT * FROM anomalies;

-- Just name and threat_level
SELECT name, threat_level FROM anomalies;`,
    exampleOutput: "All anomaly records.\nThen: just name and threat_level.",
    notes: "These two queries look at the same data from different angles. The second is more focused and returns less data.",
    keyPoints: [
      "`SELECT *` retrieves all columns and all rows.",
      "List column names to narrow the result.",
      "`FROM` specifies which table to query.",
      "SQL statements end with `;`.",
    ],
  },

  "mx-sql-02": {
    intro: "Oracle needs to identify which programs are still running active threats — filtering by `status = 'active'` removes everything that's already been dealt with.",
    concept: "`WHERE` filters rows. Only rows where the condition is `true` are included. String comparisons use single quotes; numeric comparisons don't need them.",
    example: `SELECT name, type, threat_level
FROM anomalies
WHERE type = 'Agent';`,
    exampleOutput: "Anomalies where type is 'Agent'.",
    notes: "Every row is checked: if `type = 'Agent'` is true, the row appears in results. All others are excluded.",
    keyPoints: [
      "String equality: `WHERE type = 'Agent'` (single quotes required).",
      "Numeric comparison: `WHERE threat_level > 8`",
      "`AND`/`OR` combine conditions.",
      "`!=` or `<>` tests inequality.",
    ],
  },

  "mx-sql-03": {
    intro: "Morpheus needs to know the five most dangerous programs in the simulation before the crew goes in. `ORDER BY threat_level DESC LIMIT 5` surfaces the top threats instantly.",
    concept: "`ORDER BY col DESC` sorts highest-first. `LIMIT n` returns only the first n rows. This combination answers 'what are the top N?' in a single query.",
    example: `SELECT name, type, threat_level
FROM anomalies
ORDER BY threat_level DESC
LIMIT 5;`,
    exampleOutput: "The 5 most dangerous anomalies, sorted by threat_level descending.",
    notes: "The database sorts all rows by `threat_level` descending, then returns the first 5. The rest are discarded.",
    keyPoints: [
      "`ORDER BY` goes before `LIMIT`.",
      "`DESC` = highest first; `ASC` = lowest first.",
      "`LIMIT n` caps output rows at n.",
      "You can sort by a column that isn't in your `SELECT` list.",
    ],
  },

  "mx-sql-04": {
    intro: "The Oracle wants the big picture on simulation health: how many anomalies total, what's the combined threat load, and what's the average danger level.",
    concept: "Aggregate functions distill many rows into summary statistics. `COUNT(*)` counts rows. `SUM` totals a column. `AVG` computes the mean. Without `GROUP BY`, they summarise the whole table.",
    example: `SELECT
  COUNT(*) AS total_anomalies,
  AVG(threat_level) AS avg_threat
FROM anomalies;`,
    exampleOutput: "One row: total anomaly count and average threat level.",
    notes: "`COUNT(*)` and `AVG(threat_level)` each collapse all rows into a single value. The result is a one-row summary.",
    keyPoints: [
      "`COUNT(*)` counts all rows including those with nulls.",
      "`AVG(col)` ignores null values when computing the average.",
      "Rename outputs with `AS` for readability.",
      "Multiple aggregates can appear in one `SELECT`.",
    ],
  },

  "mx-sql-05": {
    intro: "The Architect wants to see the anomaly distribution by program type — how many of each type exist. `GROUP BY type` groups the rows and `COUNT(*)` tallies each type.",
    concept: "`GROUP BY column` partitions rows into buckets by unique values of that column. Aggregate functions are computed per bucket. The result has one row per unique group value.",
    example: `SELECT
  type,
  COUNT(*) AS count,
  AVG(threat_level) AS avg_threat
FROM anomalies
GROUP BY type
ORDER BY avg_threat DESC;`,
    exampleOutput: "One row per program type showing count and average threat, most dangerous type first.",
    notes: "Rows are grouped by `type`. `COUNT(*)` and `AVG(threat_level)` are computed independently for each type group.",
    keyPoints: [
      "One output row per unique `GROUP BY` value.",
      "All non-aggregate `SELECT` columns must appear in `GROUP BY`.",
      "Multiple aggregates per group are fine.",
      "`HAVING` filters groups: `HAVING COUNT(*) > 5`",
    ],
  },

  // ─── Rick and Morty ───────────────────────────────────────────────────────

  "rm-sql-01": {
    intro: "Rick keeps a database of every dimension he's catalogued in the `dimensions` table. Morty needs to pull the full list before Rick will let him navigate — basic `SELECT` is the first skill to learn.",
    concept: "`SELECT` retrieves data from a table. `SELECT *` gets all columns. Named columns give you a narrower view. The database engine pulls only what you ask for.",
    example: `-- Full dimension database
SELECT * FROM dimensions;

-- Just the ID and danger level
SELECT dimension_id, danger_level FROM dimensions;`,
    exampleOutput: "All dimension records.\nThen: only dimension_id and danger_level.",
    notes: "Listing specific columns is a good habit — it makes your query's intent clear and avoids pulling unnecessary data.",
    keyPoints: [
      "`SELECT *` returns all columns.",
      "List column names to retrieve a subset.",
      "`FROM table_name` specifies the data source.",
      "SQL is case-insensitive for keywords.",
    ],
  },

  "rm-sql-02": {
    intro: "Rick only opens portals to dimensions that have already been visited. `WHERE visited = 'yes'` filters the `dimensions` table down to the pre-scouted ones.",
    concept: "`WHERE` tests each row against a condition and keeps only those that pass. String values require single quotes in SQL.",
    example: `SELECT dimension_id, name, danger_level
FROM dimensions
WHERE danger_level < 5;`,
    exampleOutput: "Dimensions with a danger_level below 5.",
    notes: "The database evaluates `danger_level < 5` for each row. Only low-danger dimensions appear in the result.",
    keyPoints: [
      "`WHERE` goes after `FROM`.",
      "String values: single quotes. Numbers: no quotes.",
      "`<` means 'less than'; `>` means 'greater than'.",
      "`AND` and `OR` chain multiple conditions.",
    ],
  },

  "rm-sql-03": {
    intro: "Rick wants to know the five most dangerous places he's catalogued — for the sake of absolutely not going there, he says. `ORDER BY danger_level DESC LIMIT 5` surfaces the worst.",
    concept: "`ORDER BY col DESC` sorts rows highest-first. `LIMIT n` returns only the first n rows after sorting. This combo is the standard 'top N' SQL pattern.",
    example: `SELECT name, danger_level
FROM dimensions
ORDER BY danger_level DESC
LIMIT 5;`,
    exampleOutput: "The 5 most dangerous dimensions, ordered from most to least dangerous.",
    notes: "All rows are sorted by `danger_level` descending. The first 5 rows of that sorted set are returned.",
    keyPoints: [
      "`DESC` sorts highest-first.",
      "`LIMIT` restricts the result count.",
      "Sort is applied before the limit.",
      "Omit `DESC` for ascending (lowest-first) order.",
    ],
  },

  "rm-sql-04": {
    intro: "Morty wants a summary of the dimension database — how many dimensions total, the combined danger index, and the average danger level across all catalogued dimensions.",
    concept: "SQL aggregate functions summarise data: `COUNT` for counting rows, `SUM` for totalling a column, `AVG` for averaging. Without `GROUP BY`, they summarise the whole table.",
    example: `SELECT
  COUNT(*) AS total_dimensions,
  MAX(danger_level) AS most_dangerous
FROM dimensions;`,
    exampleOutput: "One row: total count and the highest danger level on record.",
    notes: "`MAX(danger_level)` scans all rows and returns the single highest value. `COUNT(*)` counts every row.",
    keyPoints: [
      "`MAX(col)` returns the maximum value; `MIN(col)` returns the minimum.",
      "`COUNT(*)` counts all rows.",
      "`AS alias` names the output column.",
      "Multiple aggregates in one query is fine.",
    ],
  },

  "rm-sql-05": {
    intro: "Rick wants to see a breakdown of dimensions by portal colour — how many dimensions share each colour. `GROUP BY portal_color` groups them and `COUNT` tallies each group.",
    concept: "`GROUP BY` partitions rows into groups by unique values of a column. Each group gets its own output row with aggregate values computed from only the rows in that group.",
    example: `SELECT
  portal_color,
  COUNT(*) AS dimension_count
FROM dimensions
GROUP BY portal_color
ORDER BY dimension_count DESC;`,
    exampleOutput: "One row per portal colour showing how many dimensions have that colour, most common first.",
    notes: "Rows are bucketed by `portal_color`. `COUNT(*)` tallies how many dimensions fall into each colour group.",
    keyPoints: [
      "One output row per unique grouped value.",
      "Aggregate computed independently per group.",
      "Sort by the aggregate to rank groups.",
      "`HAVING` filters groups post-aggregation.",
    ],
  },

  // ─── Squid Game ───────────────────────────────────────────────────────────

  "sg-sql-01": {
    intro: "The Front Man keeps a full record of every player in the `players` table. Before any elimination analysis can be run, the basic `SELECT` query must be in the arsenal.",
    concept: "`SELECT` is the starting point for all SQL data retrieval. `SELECT *` returns every column. Naming columns returns a focused subset. Both always pair with `FROM table`.",
    example: `-- Every player record
SELECT * FROM players;

-- Just number and status
SELECT player_number, status FROM players;`,
    exampleOutput: "All player data.\nThen: only player_number and status.",
    notes: "The second query is more focused — only the two most operationally relevant columns.",
    keyPoints: [
      "`SELECT *` returns all columns.",
      "Named columns narrow the result.",
      "`FROM players` tells SQL which table to read.",
      "SQL is read top-to-bottom: SELECT → FROM → WHERE → ORDER → LIMIT.",
    ],
  },

  "sg-sql-02": {
    intro: "After round one, many players were eliminated. The roster of survivors — where `status = 'alive'` — is what the staff needs for round two planning.",
    concept: "`WHERE` filters rows by a boolean condition. Only rows where the condition evaluates to `true` are included. String comparisons require single quotes around the value.",
    example: `SELECT player_number, name, prize_won
FROM players
WHERE prize_won > 0;`,
    exampleOutput: "Players who have won at least some prize money.",
    notes: "Every row is evaluated: rows where `prize_won > 0` are returned; others are not.",
    keyPoints: [
      "`WHERE` follows `FROM`.",
      "String values: `WHERE status = 'alive'` (single quotes).",
      "Numbers: `WHERE prize_won > 0` (no quotes).",
      "`AND`, `OR`, `NOT` combine and negate conditions.",
    ],
  },

  "sg-sql-03": {
    intro: "The top three prize earners after the marble round need to be identified. `ORDER BY prize_won DESC LIMIT 3` surfaces the leaders quickly.",
    concept: "`ORDER BY col DESC` sorts rows from highest to lowest. `LIMIT n` returns only the first n rows. Together they implement efficient 'top N' queries.",
    example: `SELECT player_number, name, prize_won
FROM players
ORDER BY prize_won DESC
LIMIT 3;`,
    exampleOutput: "The 3 players with the highest prize totals, sorted highest-first.",
    notes: "Sort is applied to all rows first; `LIMIT` then cuts it to the first 3. This is the classic 'top N' pattern.",
    keyPoints: [
      "`ORDER BY col DESC` sorts highest-to-lowest.",
      "`LIMIT n` caps output at n rows.",
      "Always combine `ORDER BY` with `LIMIT` for predictable results.",
      "Omit `DESC` for ascending (lowest-first) order.",
    ],
  },

  "sg-sql-04": {
    intro: "The game statistics report needs a global summary: total player count, how many are still alive, and average debt carried into the game.",
    concept: "Aggregate functions compress rows into statistics. `COUNT(*)` counts all rows. `AVG(col)` averages a column. `SUM(CASE WHEN ...)` conditionally sums rows matching a criterion.",
    example: `SELECT
  COUNT(*) AS total_players,
  AVG(debt_amount) AS avg_debt
FROM players;`,
    exampleOutput: "One row: total player count and average debt across all players.",
    notes: "`COUNT(*)` includes all rows. `AVG(debt_amount)` divides the total debt by the count of non-null debt values.",
    keyPoints: [
      "`COUNT(*)` counts every row.",
      "`AVG(col)` computes the mean of non-null values.",
      "Without `GROUP BY`, all rows are aggregated into one result row.",
      "`AS alias` names the result column.",
    ],
  },

  "sg-sql-05": {
    intro: "The Front Man wants a status breakdown — how many players are alive vs. eliminated. `GROUP BY status` groups by survival state and `COUNT(*)` tallies each group.",
    concept: "`GROUP BY` creates one output row per unique value of the grouped column. Each output row has the group value and any aggregates computed across rows in that group.",
    example: `SELECT
  status,
  COUNT(*) AS player_count
FROM players
GROUP BY status
ORDER BY player_count DESC;`,
    exampleOutput: "One row per status value ('alive', 'eliminated', etc.) showing how many players have that status.",
    notes: "All rows are bucketed by their `status` value. `COUNT(*)` counts how many players are in each bucket.",
    keyPoints: [
      "`GROUP BY col` creates one row per unique value.",
      "`SELECT` can only contain the grouped column and aggregates.",
      "`ORDER BY` after `GROUP BY` sorts the groups.",
      "`HAVING` filters groups: `HAVING COUNT(*) > 10`",
    ],
  },

  // ─── Arrested Development ─────────────────────────────────────────────────

  "ad-sql-01": {
    intro: "The Bluth Company has a database of its many ventures. George Sr. needs everything pulled from the ventures table before the lawyers arrive — every column, every row.",
    concept: "`SELECT *` retrieves every column. `FROM table` specifies which table to query. Together they form the simplest complete SQL query.",
    example: `SELECT * FROM ventures;`,
    exampleOutput: "name | status | profit — all rows from the ventures table.",
    notes: "`*` is a wildcard meaning \"all columns\". Use it for exploration; in production, name the columns you actually need.",
    keyPoints: [
      "`SELECT *` retrieves all columns.",
      "`FROM table_name` specifies the source table.",
      "SQL keywords are conventionally written in uppercase.",
      "Add a semicolon `;` to end the statement.",
    ],
  },

  "ad-sql-02": {
    intro: "Michael needs to know which Bluth Company ventures are actually in the black. Filter the ventures table down to only the rows where profit exceeds zero.",
    concept: "`WHERE` filters rows by a condition. Only rows where the condition is true are returned. Comparison operators work on numbers and text.",
    example: `SELECT name, profit
FROM ventures
WHERE profit > 0;`,
    exampleOutput: "name | profit — only profitable ventures.",
    notes: "Rows where `profit` is 0 or negative are excluded. `WHERE` is evaluated before `SELECT`, so it filters the full table first.",
    keyPoints: [
      "`WHERE condition` keeps only rows that satisfy the condition.",
      "Comparison operators: `>`, `<`, `>=`, `<=`, `=`, `<>` (not equal).",
      "Text comparison: `WHERE status = 'active'` — string literals use single quotes.",
      "Multiple conditions: `WHERE a > 0 AND b = 'open'`.",
    ],
  },

  "ad-sql-03": {
    intro: "Buster wants to pitch the top 3 most profitable ventures to the Bluth Company board. George Michael pulls them with an ORDER BY and LIMIT so the presentation is ready in time.",
    concept: "`ORDER BY col DESC` sorts rows from largest to smallest. `LIMIT n` returns only the first `n` rows after sorting. Together they extract the top-N rows.",
    example: `SELECT name, profit
FROM ventures
ORDER BY profit DESC
LIMIT 3;`,
    exampleOutput: "The three rows with the highest profit values.",
    notes: "`DESC` sorts descending (largest first). Without `DESC` the default is ascending. `LIMIT` applies after sorting.",
    keyPoints: [
      "`ORDER BY col` sorts ascending by default.",
      "Add `DESC` to sort descending (highest first).",
      "`LIMIT n` returns at most `n` rows.",
      "Common pattern: `ORDER BY metric DESC LIMIT n` gives the top-N.",
    ],
  },

  "ad-sql-04": {
    intro: "Lucille wants a single-row summary of the ventures table: how many ventures exist, total profit generated, and the average profit per venture — all in one query.",
    concept: "Aggregate functions compute a single result from many rows. `COUNT(*)` counts rows, `SUM(col)` totals a column, and `AVG(col)` averages it.",
    example: `SELECT
  COUNT(*) AS total_ventures,
  SUM(profit) AS total_profit,
  AVG(profit) AS avg_profit
FROM ventures;`,
    exampleOutput: "total_ventures | total_profit | avg_profit",
    notes: "`AS` renames the column in the result. When you use only aggregates in `SELECT`, the query returns a single summary row.",
    keyPoints: [
      "`COUNT(*)` counts every row regardless of nulls.",
      "`SUM(col)` totals non-null values.",
      "`AVG(col)` computes the mean of non-null values.",
      "`AS alias` gives the output column a readable name.",
    ],
  },

  "ad-sql-05": {
    intro: "The Bluth Company ventures span multiple categories. Tony Wonder wants to know the total profit per category so he can decide where to 'invest' next.",
    concept: "`GROUP BY` creates one output row per unique value of the grouped column. Aggregate functions compute results within each group.",
    example: `SELECT category, SUM(profit) AS total
FROM ventures
GROUP BY category
ORDER BY total DESC;`,
    exampleOutput: "category | total — one row per category, sorted by total.",
    notes: "Without `GROUP BY`, `SUM` would collapse all rows into one. With it, each category gets its own sum.",
    keyPoints: [
      "`GROUP BY col` produces one row per unique value of `col`.",
      "`SELECT` may only contain the grouped column(s) and aggregates.",
      "`ORDER BY total DESC` sorts the groups after aggregation.",
      "Filter groups with `HAVING`: `HAVING SUM(profit) > 1000`.",
    ],
  },

  // ─── Barbie ───────────────────────────────────────────────────────────────

  "ba-sql-01": {
    intro: "The Barbieland registry has a database of every Barbie. Before the welcome parade, the event coordinator needs a full pull of the barbies table — every Barbie, every column.",
    concept: "`SELECT * FROM table` is the simplest complete SQL query. It retrieves all rows and all columns from the specified table.",
    example: `SELECT * FROM barbies;`,
    exampleOutput: "name | career | location — all rows from the barbies table.",
    notes: "`*` means all columns. It's a quick way to inspect a table but in production you should name only the columns you need.",
    keyPoints: [
      "`SELECT *` — retrieve all columns.",
      "`FROM barbies` — the table to read from.",
      "SQL is case-insensitive for keywords, but column/table names may be case-sensitive.",
      "End statements with `;`.",
    ],
  },

  "ba-sql-02": {
    intro: "Not all Barbies are in Barbieland. Some made it to the Real World. Filter the table to return only the Barbies currently located in Barbieland.",
    concept: "`WHERE` filters rows to only those matching a condition. String values in SQL are wrapped in single quotes.",
    example: `SELECT name, career
FROM barbies
WHERE location = 'Barbieland';`,
    exampleOutput: "name | career — only Barbieland residents.",
    notes: "String literals in SQL use single quotes. `WHERE location = 'Barbieland'` keeps only rows where the `location` column matches exactly.",
    keyPoints: [
      "`WHERE col = 'value'` — string comparison uses single quotes.",
      "Case-sensitive: `'Barbieland'` ≠ `'barbieland'` in most databases.",
      "Combine conditions: `WHERE location = 'Barbieland' AND career = 'Doctor'`.",
      "`<>` means 'not equal': `WHERE location <> 'Real World'`.",
    ],
  },

  "ba-sql-03": {
    intro: "The Barbie awards ceremony needs the top 3 highest-rated Barbies by happiness score. Pull them in descending order so the MC can announce them dramatically.",
    concept: "`ORDER BY col DESC` sorts highest-first. `LIMIT n` returns the first `n` rows after sorting, giving you the top-N results.",
    example: `SELECT name, happiness
FROM barbies
ORDER BY happiness DESC
LIMIT 3;`,
    exampleOutput: "The three happiest Barbies, ranked highest to lowest.",
    notes: "`DESC` reverses the default ascending sort. `LIMIT 3` keeps only the top three rows.",
    keyPoints: [
      "`ORDER BY col` — ascending by default.",
      "`DESC` reverses to descending (highest first).",
      "`LIMIT n` — return at most `n` rows.",
      "Chain them: `ORDER BY col DESC LIMIT n` for top-N.",
    ],
  },

  "ba-sql-04": {
    intro: "How many Barbies are there? What's the total wardrobe budget, and the average? The registry needs a one-row summary before budget day.",
    concept: "Aggregate functions reduce many rows to a single computed value. `COUNT(*)`, `SUM()`, and `AVG()` are the most common.",
    example: `SELECT
  COUNT(*) AS total_barbies,
  SUM(wardrobe_budget) AS total_budget,
  AVG(wardrobe_budget) AS avg_budget
FROM barbies;`,
    exampleOutput: "total_barbies | total_budget | avg_budget",
    notes: "All three aggregates run on the full table and return one result row. `AS` labels each output column.",
    keyPoints: [
      "`COUNT(*)` counts every row.",
      "`SUM(col)` totals the column values.",
      "`AVG(col)` computes the average.",
      "`AS alias` names the output column.",
    ],
  },

  "ba-sql-05": {
    intro: "The Barbieland career fair needs to know how many Barbies hold each career. Group the registry by career and count each group.",
    concept: "`GROUP BY` groups rows by a column value. Each group becomes one output row. Aggregate functions compute results per group.",
    example: `SELECT career, COUNT(*) AS count
FROM barbies
GROUP BY career
ORDER BY count DESC;`,
    exampleOutput: "career | count — one row per career, sorted by popularity.",
    notes: "`GROUP BY career` creates one row per unique career. `COUNT(*)` counts Barbies per career. `ORDER BY count DESC` puts the most popular careers first.",
    keyPoints: [
      "`GROUP BY col` — one output row per unique value.",
      "`COUNT(*)` inside a `GROUP BY` counts per group.",
      "Only the grouped column and aggregates may appear in `SELECT`.",
      "`ORDER BY` after `GROUP BY` sorts the aggregated results.",
    ],
  },

  // ─── Sex and the City ─────────────────────────────────────────────────────

  "sc-sql-01": {
    intro: "Carrie keeps a database of every date she's been on. Before the chapter deadline, she needs the full table — every man, every disaster, every column.",
    concept: "`SELECT * FROM table` retrieves all columns and all rows. It's the starting point for exploring any table.",
    example: `SELECT * FROM dates;`,
    exampleOutput: "name | rating | outcome — all rows from the dates table.",
    notes: "`*` is a wildcard meaning all columns. Add a `WHERE` clause later to filter.",
    keyPoints: [
      "`SELECT *` — all columns.",
      "`FROM dates` — the table to query.",
      "Semicolon ends the statement.",
      "Explore a new table with `SELECT *` first to see its structure.",
    ],
  },

  "sc-sql-02": {
    intro: "Miranda is only interested in dates that scored above 7 on Carrie's proprietary rating system. Pull names and ratings for those high-scorers only.",
    concept: "`WHERE` filters rows based on a condition. Rows where the condition is false are excluded from the result.",
    example: `SELECT name, rating
FROM dates
WHERE rating > 7;`,
    exampleOutput: "name | rating — only dates with a rating above 7.",
    notes: "Rows with `rating` of 7 or lower are excluded. `>` is strictly greater than; use `>=` to include 7.",
    keyPoints: [
      "`WHERE col > value` keeps rows where the column exceeds the value.",
      "`>` is strictly greater; `>=` includes the boundary.",
      "Add multiple conditions: `WHERE rating > 7 AND outcome = 'good'`.",
      "String comparison: `WHERE name = 'Aidan'` — single quotes.",
    ],
  },

  "sc-sql-03": {
    intro: "Samantha wants the top 3 most expensive apartments in the database — she's helping Charlotte upgrade. Sort by price and take just the top 3.",
    concept: "`ORDER BY col DESC` sorts from highest to lowest. `LIMIT n` truncates the result to the first `n` rows — ideal for top-N queries.",
    example: `SELECT address, price
FROM apartments
ORDER BY price DESC
LIMIT 3;`,
    exampleOutput: "The three most expensive apartments.",
    notes: "`DESC` makes the sort descend (highest first). `LIMIT` applies after the sort, keeping only the top rows.",
    keyPoints: [
      "Default `ORDER BY` is ascending; add `DESC` to reverse.",
      "`LIMIT n` keeps the first `n` rows after sorting.",
      "Combining `ORDER BY DESC` and `LIMIT` is the standard top-N pattern.",
      "Can order by multiple columns: `ORDER BY price DESC, address ASC`.",
    ],
  },

  "sc-sql-04": {
    intro: "Charlotte is calculating the shoe collection statistics before Carrie's intervention — total pairs, total spent, and the average cost per pair.",
    concept: "Aggregate functions return a single computed value for a whole column (or all rows). `COUNT(*)`, `SUM()`, and `AVG()` are the core three.",
    example: `SELECT
  COUNT(*) AS total_pairs,
  SUM(price) AS total_spent,
  AVG(price) AS avg_price
FROM shoes;`,
    exampleOutput: "total_pairs | total_spent | avg_price",
    notes: "All three aggregates scan the entire table and return one result row. `AS` provides friendly column names in the output.",
    keyPoints: [
      "`COUNT(*)` counts all rows.",
      "`SUM(price)` totals the price column.",
      "`AVG(price)` computes the mean price.",
      "`AS` renames output columns for readability.",
    ],
  },

  "sc-sql-05": {
    intro: "Carrie's editor wants the date count broken down by outcome — how many dates went well, how many were disasters, and everything in between.",
    concept: "`GROUP BY` partitions rows into groups by a column value. Each group becomes one result row with aggregate functions computed per group.",
    example: `SELECT outcome, COUNT(*) AS total
FROM dates
GROUP BY outcome
ORDER BY total DESC;`,
    exampleOutput: "outcome | total — one row per outcome, sorted by frequency.",
    notes: "`GROUP BY outcome` creates one row per unique outcome value. `COUNT(*)` counts dates per outcome. `ORDER BY total DESC` puts the most common outcome first.",
    keyPoints: [
      "`GROUP BY col` — one result row per unique value of `col`.",
      "Aggregate functions compute per group.",
      "Only the grouped column(s) and aggregates may appear in `SELECT`.",
      "`HAVING COUNT(*) > 5` filters groups after aggregation.",
    ],
  },

  // ─── Sopranos ─────────────────────────────────────────────────────────────

  "sp-sql-01": {
    intro: "The DiMeo family's legitimate business is waste disposal. Bobby needs to pull all contract records from the database before the quarterly review — and before the feds subpoena them.",
    concept: "`SELECT * FROM table` retrieves every column and every row. It's the simplest complete SQL query.",
    example: `SELECT * FROM contracts;`,
    exampleOutput: "client | territory | value — all rows from the contracts table.",
    notes: "`*` selects all columns. Use it for exploration; specify column names in production queries.",
    keyPoints: [
      "`SELECT *` — all columns.",
      "`FROM contracts` — the source table.",
      "SQL keywords are conventionally uppercase.",
      "End statements with `;`.",
    ],
  },

  "sp-sql-02": {
    intro: "Paulie needs a list of every contract worth over $50,000. The smaller ones can wait. Right now, Tony wants to know which clients are bringing in real money.",
    concept: "`WHERE col > value` filters to only rows where the condition is true. Number comparisons use `>`, `<`, `>=`, `<=`, `=`, `<>`.",
    example: `SELECT client, value
FROM contracts
WHERE value > 50000;`,
    exampleOutput: "client | value — contracts above $50,000.",
    notes: "Only rows with `value > 50000` are returned. Rows at exactly 50000 are excluded; use `>=` to include them.",
    keyPoints: [
      "`WHERE value > 50000` keeps rows exceeding the threshold.",
      "`>` is strictly greater than; `>=` includes the boundary.",
      "String comparison uses single quotes: `WHERE client = 'Triborough'`.",
      "Combine conditions: `WHERE value > 50000 AND territory = 'Newark'`.",
    ],
  },

  "sp-sql-03": {
    intro: "The family is dividing up territory after a sit-down with New York. Get the top 3 territories by contract value so they can be assigned to the most senior capos.",
    concept: "`ORDER BY col DESC` sorts from highest to lowest. `LIMIT n` returns only the first `n` rows after sorting.",
    example: `SELECT territory, value
FROM contracts
ORDER BY value DESC
LIMIT 3;`,
    exampleOutput: "The three highest-value territories.",
    notes: "`DESC` reverses the default ascending sort. `LIMIT 3` keeps only the top three rows after sorting.",
    keyPoints: [
      "`ORDER BY value DESC` — descending sort (largest first).",
      "`LIMIT 3` — return at most 3 rows.",
      "Pattern for top-N: `ORDER BY col DESC LIMIT n`.",
      "Can order by text too: `ORDER BY territory ASC`.",
    ],
  },

  "sp-sql-04": {
    intro: "Silvio runs the numbers every quarter. He needs a summary: total contracts on the books, total value brought in, and the average value per contract — all in one clean query.",
    concept: "Aggregate functions compute a single result across all rows. `COUNT(*)`, `SUM()`, and `AVG()` are the core aggregates. They return one row when used without `GROUP BY`.",
    example: `SELECT
  COUNT(*) AS total_contracts,
  SUM(value) AS total_value,
  AVG(value) AS avg_value
FROM contracts;`,
    exampleOutput: "total_contracts | total_value | avg_value",
    notes: "All three aggregates scan the entire table and produce a single summary row. `AS` labels each column.",
    keyPoints: [
      "`COUNT(*)` counts all rows.",
      "`SUM(value)` adds up all contract values.",
      "`AVG(value)` computes the mean contract value.",
      "`AS alias` renames the column in the output.",
    ],
  },

  "sp-sql-05": {
    intro: "Tony wants to know which territory is producing the most revenue so he can reward the capo running it — or apply pressure to the one who isn't pulling their weight.",
    concept: "`GROUP BY` creates one result row per unique value of the grouped column. `SUM()` computes the total within each group.",
    example: `SELECT territory, SUM(value) AS total
FROM contracts
GROUP BY territory
ORDER BY total DESC;`,
    exampleOutput: "territory | total — one row per territory, highest revenue first.",
    notes: "`GROUP BY territory` partitions all contracts by territory. `SUM(value)` totals each partition. `ORDER BY total DESC` ranks them.",
    keyPoints: [
      "`GROUP BY col` — one output row per unique value.",
      "Only the grouped column(s) and aggregates are valid in `SELECT`.",
      "`SUM(value)` computes the total per group.",
      "`ORDER BY total DESC` ranks groups by their aggregate.",
    ],
  },

  // ─── Lesson 06 — INNER JOIN ───────────────────────────────────────────────

  "st-sql-06": {
    intro: "Joyce needs to link each of Will's sighting records to the location name stored in a separate table. She uses `INNER JOIN` to combine both tables on a shared key.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only rows that have a match in both tables are returned.",
    example: `SELECT sightings.date, locations.name
FROM sightings
INNER JOIN locations
  ON sightings.location_id = locations.id;`,
    exampleOutput: "date | name — one row per matched sighting and location.",
    notes: "`INNER JOIN locations ON sightings.location_id = locations.id` links each sighting to its location. Only sightings with a matching location are returned.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — joins on matching values.",
      "Only rows present in both tables are returned.",
      "Prefix columns with the table name to avoid ambiguity: `table.column`.",
      "You can join more than two tables by chaining `INNER JOIN` clauses.",
    ],
  },

  "sv-sql-06": {
    intro: "Mark needs to link each MDR employee's sessions to their department details stored in a separate table. He uses `INNER JOIN` to combine the two.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only rows that have a match in both tables are returned.",
    example: `SELECT employees.name, sessions.type
FROM sessions
INNER JOIN employees
  ON sessions.employee_id = employees.id;`,
    exampleOutput: "name | type — one row per matched session and employee.",
    notes: "`INNER JOIN employees ON sessions.employee_id = employees.id` connects each session to its employee. Unmatched rows are excluded.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — joins on matching values.",
      "Only matching rows are returned.",
      "Use table prefixes to disambiguate column names.",
      "Chain multiple `INNER JOIN` clauses to join more tables.",
    ],
  },

  "bb-sql-06": {
    intro: "The DEA wants to link each shipment to its distributor. Hank uses `INNER JOIN` to connect the `shipments` and `distributors` tables on `distributor_id`.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only rows with a match in both tables are included.",
    example: `SELECT distributors.name, shipments.amount
FROM shipments
INNER JOIN distributors
  ON shipments.distributor_id = distributors.id;`,
    exampleOutput: "name | amount — one row per matched shipment and distributor.",
    notes: "`INNER JOIN distributors ON shipments.distributor_id = distributors.id` links each shipment to its distributor. Shipments with no matching distributor are excluded.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — links on matching key.",
      "Only matching rows are returned.",
      "Prefix with table name to avoid column ambiguity.",
      "Chain `INNER JOIN` clauses to join additional tables.",
    ],
  },

  "to-sql-06": {
    intro: "Jim wants to see each client paired with their salesperson. He uses `INNER JOIN` to connect the `clients` and `salespeople` tables on `salesperson_id`.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only matching rows from both tables appear in the result.",
    example: `SELECT salespeople.name, clients.company
FROM clients
INNER JOIN salespeople
  ON clients.salesperson_id = salespeople.id;`,
    exampleOutput: "name | company — one row per matched client and salesperson.",
    notes: "`INNER JOIN salespeople ON clients.salesperson_id = salespeople.id` links clients to their reps. Clients without a matching salesperson are excluded.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — links matching rows.",
      "Only rows present in both tables are returned.",
      "Use table prefixes for clarity.",
      "Chain multiple `INNER JOIN` for more tables.",
    ],
  },

  "got-sql-06": {
    intro: "The Small Council links each raven message to the house that sent it. Tyrion uses `INNER JOIN` on the `ravens` and `houses` tables.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only rows with a match in both tables are returned.",
    example: `SELECT houses.house_name, ravens.message
FROM ravens
INNER JOIN houses
  ON ravens.house_id = houses.id;`,
    exampleOutput: "house_name | message — one row per matched raven and house.",
    notes: "`INNER JOIN houses ON ravens.house_id = houses.id` links each raven to its source house. Messages from unknown houses are excluded.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — links rows on a shared key.",
      "Only matching rows from both tables are returned.",
      "Prefix columns with the table name.",
      "Chain `INNER JOIN` for additional tables.",
    ],
  },

  "mx-sql-06": {
    intro: "Tank links each operative to their ship assignment. He uses `INNER JOIN` to connect the `operatives` and `ships` tables on `ship_id`.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only matching rows are included in the result.",
    example: `SELECT operatives.codename, ships.name
FROM operatives
INNER JOIN ships
  ON operatives.ship_id = ships.id;`,
    exampleOutput: "codename | name — one row per matched operative and ship.",
    notes: "`INNER JOIN ships ON operatives.ship_id = ships.id` links each operative to their ship. Operatives without a ship assignment are excluded.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — links rows on matching keys.",
      "Only matching rows are returned.",
      "Use table prefixes for column clarity.",
      "Chain `INNER JOIN` clauses for multiple tables.",
    ],
  },

  "rm-sql-06": {
    intro: "Rick links each Mr. Meeseeks task to the person who requested it. He uses `INNER JOIN` on the `tasks` and `requesters` tables.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only matching rows appear in the result.",
    example: `SELECT requesters.name, tasks.description
FROM tasks
INNER JOIN requesters
  ON tasks.requester_id = requesters.id;`,
    exampleOutput: "name | description — one row per matched task and requester.",
    notes: "`INNER JOIN requesters ON tasks.requester_id = requesters.id` pairs each task with its requester. Tasks without a matching requester are excluded.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — joins on a shared key.",
      "Only matching rows are returned.",
      "Prefix columns with table names for clarity.",
      "Chain multiple `INNER JOIN` for additional tables.",
    ],
  },

  "sg-sql-06": {
    intro: "The organisers connect each player to their assigned team colour. They use `INNER JOIN` to link the `players` and `teams` tables on `team_id`.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only matching rows are included.",
    example: `SELECT players.player_number, teams.color
FROM players
INNER JOIN teams
  ON players.team_id = teams.id;`,
    exampleOutput: "player_number | color — one row per matched player and team.",
    notes: "`INNER JOIN teams ON players.team_id = teams.id` links each player to their team colour. Players without a team are excluded.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — joins on a shared key.",
      "Only matching rows from both tables are returned.",
      "Prefix column names with the table name.",
      "Chain `INNER JOIN` for more than two tables.",
    ],
  },

  "ad-sql-06": {
    intro: "Tobias wants to link each audition to the role it was for. Michael uses `INNER JOIN` on the `auditions` and `roles` tables.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only rows with a match in both tables appear.",
    example: `SELECT auditions.date, roles.title
FROM auditions
INNER JOIN roles
  ON auditions.role_id = roles.id;`,
    exampleOutput: "date | title — one row per matched audition and role.",
    notes: "`INNER JOIN roles ON auditions.role_id = roles.id` links each audition to its role. Auditions without a matching role are excluded.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — links rows on a shared key.",
      "Only matching rows are returned.",
      "Prefix columns with the table name.",
      "Chain `INNER JOIN` clauses for additional tables.",
    ],
  },

  "ba-sql-06": {
    intro: "Barbie links each registered Barbie to her dream house details. She uses `INNER JOIN` to connect the `barbies` and `houses` tables on `house_id`.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only matching rows appear in the result.",
    example: `SELECT barbies.name, houses.style
FROM barbies
INNER JOIN houses
  ON barbies.house_id = houses.id;`,
    exampleOutput: "name | style — one row per matched Barbie and house.",
    notes: "`INNER JOIN houses ON barbies.house_id = houses.id` links each Barbie to her house style. Barbies without a house are excluded.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — joins on a shared key.",
      "Only matching rows from both tables are returned.",
      "Prefix column names with the table name.",
      "Chain `INNER JOIN` for more tables.",
    ],
  },

  "sc-sql-06": {
    intro: "Charlotte links each shoe to its designer. She uses `INNER JOIN` to connect the `shoes` and `designers` tables on `designer_id`.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only rows with a match in both tables are returned.",
    example: `SELECT shoes.style, designers.name
FROM shoes
INNER JOIN designers
  ON shoes.designer_id = designers.id;`,
    exampleOutput: "style | name — one row per matched shoe and designer.",
    notes: "`INNER JOIN designers ON shoes.designer_id = designers.id` pairs each shoe with its designer. Shoes without a matched designer are excluded.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — links rows on a shared key.",
      "Only matching rows are included.",
      "Prefix column names for clarity.",
      "Chain `INNER JOIN` for additional tables.",
    ],
  },

  "sp-sql-06": {
    intro: "Silvio links each operation hit to the crew member who ordered it. He uses `INNER JOIN` on the `hits` and `crew` tables on `crew_id`.",
    concept: "`INNER JOIN` combines rows from two tables where a shared key matches. Only matching rows are returned.",
    example: `SELECT crew.name, hits.target
FROM hits
INNER JOIN crew
  ON hits.crew_id = crew.id;`,
    exampleOutput: "name | target — one row per matched hit and crew member.",
    notes: "`INNER JOIN crew ON hits.crew_id = crew.id` links each hit to the responsible crew member. Hits without a crew match are excluded.",
    keyPoints: [
      "`INNER JOIN table ON a.col = b.col` — joins on a shared key.",
      "Only matching rows from both tables are returned.",
      "Prefix column names with the table name.",
      "Chain multiple `INNER JOIN` for more tables.",
    ],
  },

  // ─── Lesson 07 — HAVING ───────────────────────────────────────────────────

  "st-sql-07": {
    intro: "Eleven needs to find factions with more than three members — the Mind Flayer only controls large groups. She uses `HAVING` to filter after grouping.",
    concept: "`HAVING` filters the results of a `GROUP BY` based on an aggregate condition. Unlike `WHERE` (which filters rows), `HAVING` filters groups.",
    example: `SELECT faction, COUNT(*) AS members
FROM soldiers
GROUP BY faction
HAVING COUNT(*) > 3;`,
    exampleOutput: "faction | members — only factions with more than 3 members.",
    notes: "`GROUP BY faction` creates one row per faction. `HAVING COUNT(*) > 3` keeps only the factions with more than 3 soldiers.",
    keyPoints: [
      "`HAVING` filters groups after `GROUP BY` — not individual rows.",
      "`WHERE` cannot reference aggregate functions; `HAVING` can.",
      "Syntax: `GROUP BY col HAVING aggregate_function condition`.",
      "Common: `HAVING COUNT(*) > n`, `HAVING SUM(col) > n`.",
    ],
  },

  "sv-sql-07": {
    intro: "Cobel wants to identify departments with more than 5 wellness violations — they need extra monitoring. She uses `HAVING` on the grouped violations table.",
    concept: "`HAVING` filters groups created by `GROUP BY` using aggregate conditions. It runs after grouping, unlike `WHERE` which runs before.",
    example: `SELECT department, COUNT(*) AS violation_count
FROM violations
GROUP BY department
HAVING COUNT(*) > 5;`,
    exampleOutput: "department | violation_count — only departments with more than 5 violations.",
    notes: "`GROUP BY department` groups violations. `HAVING COUNT(*) > 5` keeps only departments that exceeded the threshold.",
    keyPoints: [
      "`HAVING` filters after `GROUP BY`.",
      "Use `HAVING` for aggregate conditions, `WHERE` for row-level conditions.",
      "`HAVING COUNT(*) > n` keeps only large groups.",
      "Both `WHERE` and `HAVING` can appear in the same query.",
    ],
  },

  "bb-sql-07": {
    intro: "Skyler flags cook sites that produced more than 10 batches for the car wash audit. She uses `HAVING` to filter the grouped batch counts.",
    concept: "`HAVING` filters groups created by `GROUP BY` using aggregate conditions. It runs after grouping, unlike `WHERE`.",
    example: `SELECT location, COUNT(*) AS batch_count
FROM batches
GROUP BY location
HAVING COUNT(*) > 10;`,
    exampleOutput: "location | batch_count — only locations with more than 10 batches.",
    notes: "`GROUP BY location` groups batches by site. `HAVING COUNT(*) > 10` keeps only the high-volume sites.",
    keyPoints: [
      "`HAVING` filters groups — `WHERE` filters rows.",
      "Syntax: `GROUP BY col HAVING aggregate condition`.",
      "`HAVING COUNT(*) > n` is very common.",
      "Can use `HAVING SUM(col) > n`, `HAVING AVG(col) < n`, etc.",
    ],
  },

  "to-sql-07": {
    intro: "Andy wants to highlight salespeople who closed more than 20 deals. He uses `HAVING` on the grouped sales count.",
    concept: "`HAVING` filters groups created by `GROUP BY` using aggregate conditions. It runs after grouping.",
    example: `SELECT salesperson_id, COUNT(*) AS deals
FROM sales
GROUP BY salesperson_id
HAVING COUNT(*) > 20;`,
    exampleOutput: "salesperson_id | deals — only salespeople with more than 20 deals.",
    notes: "`GROUP BY salesperson_id` groups sales. `HAVING COUNT(*) > 20` keeps only high performers.",
    keyPoints: [
      "`HAVING` filters after `GROUP BY` — not individual rows.",
      "Use `HAVING` for aggregate conditions.",
      "`HAVING COUNT(*) > n` keeps groups above the threshold.",
      "Both `WHERE` and `HAVING` can be used in one query.",
    ],
  },

  "got-sql-07": {
    intro: "Daenerys only trusts houses that have sworn loyalty more than 4 times. She uses `HAVING` on the `oaths` table to find them.",
    concept: "`HAVING` filters groups created by `GROUP BY` using aggregate conditions. It runs after grouping, unlike `WHERE` which filters before.",
    example: `SELECT house_id, COUNT(*) AS oath_count
FROM oaths
GROUP BY house_id
HAVING COUNT(*) > 4;`,
    exampleOutput: "house_id | oath_count — only houses with more than 4 oaths.",
    notes: "`GROUP BY house_id` groups oaths by house. `HAVING COUNT(*) > 4` keeps only the most loyal houses.",
    keyPoints: [
      "`HAVING` filters groups — `WHERE` filters individual rows.",
      "`GROUP BY col HAVING aggregate condition`.",
      "`HAVING COUNT(*) > n` is the most common form.",
      "Can combine `WHERE` and `HAVING` in the same query.",
    ],
  },

  "mx-sql-07": {
    intro: "Agent Smith has replicated beyond control — find entity IDs with more than 3 copies. The Oracle uses `HAVING` to identify them.",
    concept: "`HAVING` filters groups created by `GROUP BY` using aggregate conditions. It runs after grouping.",
    example: `SELECT entity_id, COUNT(*) AS copy_count
FROM copies
GROUP BY entity_id
HAVING COUNT(*) > 3;`,
    exampleOutput: "entity_id | copy_count — only entities with more than 3 copies.",
    notes: "`GROUP BY entity_id` groups copies. `HAVING COUNT(*) > 3` keeps only entities with more than 3 copies.",
    keyPoints: [
      "`HAVING` filters after `GROUP BY`.",
      "`WHERE` filters individual rows before grouping.",
      "Syntax: `GROUP BY col HAVING aggregate condition`.",
      "`HAVING COUNT(*) > n`, `HAVING SUM(col) > n` are common.",
    ],
  },

  "rm-sql-07": {
    intro: "Rick only revisits dimensions he has visited more than 5 times. He uses `HAVING` on the `visits` table to find his favourite dimensions.",
    concept: "`HAVING` filters groups created by `GROUP BY` using aggregate conditions. It runs after grouping, unlike `WHERE`.",
    example: `SELECT dimension_id, COUNT(*) AS visit_count
FROM visits
GROUP BY dimension_id
HAVING COUNT(*) > 5;`,
    exampleOutput: "dimension_id | visit_count — only dimensions visited more than 5 times.",
    notes: "`GROUP BY dimension_id` groups visits by dimension. `HAVING COUNT(*) > 5` keeps only the most-visited ones.",
    keyPoints: [
      "`HAVING` filters groups — `WHERE` filters rows.",
      "`GROUP BY col HAVING aggregate condition`.",
      "`HAVING COUNT(*) > n` keeps large groups.",
      "Combine with `ORDER BY` to rank groups.",
    ],
  },

  "sg-sql-07": {
    intro: "The Front Man identifies survival groups with more than 2 members still in the game. He uses `HAVING` on the `survivors` table.",
    concept: "`HAVING` filters groups created by `GROUP BY` using aggregate conditions. It runs after grouping.",
    example: `SELECT group_id, COUNT(*) AS survivor_count
FROM survivors
GROUP BY group_id
HAVING COUNT(*) > 2;`,
    exampleOutput: "group_id | survivor_count — only groups with more than 2 survivors.",
    notes: "`GROUP BY group_id` groups survivors. `HAVING COUNT(*) > 2` keeps only the larger groups.",
    keyPoints: [
      "`HAVING` filters after `GROUP BY`.",
      "Use `HAVING` for aggregate conditions, not `WHERE`.",
      "`HAVING COUNT(*) > n` keeps large groups.",
      "Can combine `WHERE` and `HAVING` in one query.",
    ],
  },

  "ad-sql-07": {
    intro: "Buster's magic show venues with more than 1 booking are worth pursuing. Michael uses `HAVING` on the `bookings` table to find them.",
    concept: "`HAVING` filters groups created by `GROUP BY` using aggregate conditions. It runs after grouping.",
    example: `SELECT venue_id, COUNT(*) AS booking_count
FROM bookings
GROUP BY venue_id
HAVING COUNT(*) > 1;`,
    exampleOutput: "venue_id | booking_count — only venues with more than 1 booking.",
    notes: "`GROUP BY venue_id` groups bookings by venue. `HAVING COUNT(*) > 1` keeps only venues with repeat bookings.",
    keyPoints: [
      "`HAVING` filters groups — `WHERE` filters rows.",
      "Syntax: `GROUP BY col HAVING aggregate condition`.",
      "`HAVING COUNT(*) > 1` finds repeat occurrences.",
      "Can be combined with `ORDER BY` to rank results.",
    ],
  },

  "ba-sql-07": {
    intro: "Weird Barbie wants neighbourhoods with more than 3 dream houses. She uses `HAVING` on the `houses` table to identify them.",
    concept: "`HAVING` filters groups created by `GROUP BY` using aggregate conditions. It runs after grouping.",
    example: `SELECT neighborhood_id, COUNT(*) AS house_count
FROM houses
GROUP BY neighborhood_id
HAVING COUNT(*) > 3;`,
    exampleOutput: "neighborhood_id | house_count — only neighbourhoods with more than 3 houses.",
    notes: "`GROUP BY neighborhood_id` groups houses. `HAVING COUNT(*) > 3` keeps neighbourhoods with enough dream houses.",
    keyPoints: [
      "`HAVING` filters groups — `WHERE` filters rows.",
      "`GROUP BY col HAVING aggregate condition`.",
      "`HAVING COUNT(*) > n` keeps groups above the threshold.",
      "Combine with `ORDER BY COUNT(*) DESC` to rank.",
    ],
  },

  "sc-sql-07": {
    intro: "Big needs restaurants that received more than 5 reservations — the power spots of the city. Carrie helps with a `HAVING` query on the `reservations` table.",
    concept: "`HAVING` filters groups created by `GROUP BY` using aggregate conditions. It runs after grouping.",
    example: `SELECT restaurant_id, COUNT(*) AS reservation_count
FROM reservations
GROUP BY restaurant_id
HAVING COUNT(*) > 5;`,
    exampleOutput: "restaurant_id | reservation_count — only restaurants with more than 5 reservations.",
    notes: "`GROUP BY restaurant_id` groups reservations. `HAVING COUNT(*) > 5` keeps only the popular spots.",
    keyPoints: [
      "`HAVING` filters groups — `WHERE` filters individual rows.",
      "`GROUP BY col HAVING aggregate condition`.",
      "`HAVING COUNT(*) > n` is the most common pattern.",
      "Combine with `ORDER BY reservation_count DESC` to rank.",
    ],
  },

  "sp-sql-07": {
    intro: "Paulie wants rackets with more than 4 incidents — those need extra attention. He uses `HAVING` on the `incidents` table.",
    concept: "`HAVING` filters groups created by `GROUP BY` using aggregate conditions. It runs after grouping.",
    example: `SELECT racket_id, COUNT(*) AS incident_count
FROM incidents
GROUP BY racket_id
HAVING COUNT(*) > 4;`,
    exampleOutput: "racket_id | incident_count — only rackets with more than 4 incidents.",
    notes: "`GROUP BY racket_id` groups incidents. `HAVING COUNT(*) > 4` keeps only the troublesome ones.",
    keyPoints: [
      "`HAVING` filters groups — `WHERE` filters rows.",
      "`GROUP BY col HAVING aggregate condition`.",
      "`HAVING COUNT(*) > n` keeps large groups.",
      "Can pair with `ORDER BY` to rank by incident count.",
    ],
  },

  // ─── Lesson 08 — Subquery ─────────────────────────────────────────────────

  "st-sql-08": {
    intro: "Eleven needs to find characters whose power level is above the average of all subjects. She uses a subquery inside `WHERE` to compute the average dynamically.",
    concept: "A subquery is a `SELECT` statement nested inside another query. In a `WHERE` clause, it can compute a value to compare against — like an average.",
    example: `SELECT name, power_level
FROM subjects
WHERE power_level > (
  SELECT AVG(power_level) FROM subjects
);`,
    exampleOutput: "name | power_level — subjects above the average power level.",
    notes: "The inner query computes the average power level. The outer query compares each subject's power level to that result.",
    keyPoints: [
      "A subquery is a `SELECT` inside parentheses `( )`.",
      "Used in `WHERE` to produce a dynamic comparison value.",
      "`WHERE col > (SELECT AVG(col) FROM table)` is a common pattern.",
      "Subqueries run first; their result is passed to the outer query.",
    ],
  },

  "sv-sql-08": {
    intro: "Mark wants to see employees whose clearance is above the average clearance for their floor. He uses a subquery to compute the average dynamically.",
    concept: "A subquery is a `SELECT` nested inside another query. It computes a value dynamically for the outer query to use in a comparison.",
    example: `SELECT name, clearance
FROM employees
WHERE clearance > (
  SELECT AVG(clearance) FROM employees
);`,
    exampleOutput: "name | clearance — employees with above-average clearance.",
    notes: "The subquery computes the average clearance. The outer query filters employees whose clearance exceeds that value.",
    keyPoints: [
      "A subquery is placed in parentheses `( )` inside `WHERE`.",
      "The inner query runs first and returns a single value.",
      "`WHERE col > (SELECT AVG(col) FROM table)` is very common.",
      "Subqueries can also be used with `IN`, `=`, `<`, etc.",
    ],
  },

  "bb-sql-08": {
    intro: "Gus wants to find batches whose purity exceeds the average purity across all batches. Walt writes a subquery inside the `WHERE` clause.",
    concept: "A subquery is a `SELECT` nested inside another query. In a `WHERE` clause, it computes a value dynamically for comparison.",
    example: `SELECT batch_id, purity
FROM batches
WHERE purity > (
  SELECT AVG(purity) FROM batches
);`,
    exampleOutput: "batch_id | purity — batches above the average purity.",
    notes: "The subquery computes `AVG(purity)` across all batches. The outer query returns only batches that exceed this average.",
    keyPoints: [
      "A subquery sits inside `( )` in the `WHERE` clause.",
      "The inner query runs first and returns a value.",
      "`WHERE col > (SELECT AVG(col) FROM table)` filters above-average rows.",
      "Subqueries can also use `IN (SELECT ...)` for multiple values.",
    ],
  },

  "to-sql-08": {
    intro: "Oscar wants to find sales that exceeded the average sale amount for the quarter. He uses a subquery inside `WHERE` to compute the average dynamically.",
    concept: "A subquery is a `SELECT` nested inside another query. In a `WHERE` clause, it produces a dynamic value to compare against.",
    example: `SELECT salesperson_id, amount
FROM sales
WHERE amount > (
  SELECT AVG(amount) FROM sales
);`,
    exampleOutput: "salesperson_id | amount — sales above the average.",
    notes: "The inner query computes the average sale amount. The outer query returns only sales that exceed it.",
    keyPoints: [
      "A subquery is placed inside `( )` in the `WHERE` clause.",
      "It runs first and returns a value or values.",
      "`WHERE col > (SELECT AVG(col) FROM table)` is a common pattern.",
      "Subqueries can return a single value or a list for `IN`.",
    ],
  },

  "got-sql-08": {
    intro: "Jon Snow wants to find battles with more casualties than the average. He uses a subquery inside `WHERE` to compute the average dynamically.",
    concept: "A subquery is a `SELECT` nested inside another query. In a `WHERE` clause, it computes a value for the outer query to filter against.",
    example: `SELECT battle_name, casualties
FROM battles
WHERE casualties > (
  SELECT AVG(casualties) FROM battles
);`,
    exampleOutput: "battle_name | casualties — battles above the average casualty count.",
    notes: "The subquery computes average casualties. The outer query filters battles that exceeded that average.",
    keyPoints: [
      "A subquery is wrapped in `( )`.",
      "The inner query runs first and returns one value.",
      "`WHERE col > (SELECT AVG(col) FROM table)` is a common filter.",
      "Can also use `WHERE col IN (SELECT col FROM table WHERE condition)`.",
    ],
  },

  "mx-sql-08": {
    intro: "Neo wants to find agents whose threat level exceeds the average threat across all agents. The Oracle writes the subquery to compute it dynamically.",
    concept: "A subquery is a `SELECT` nested inside another query. It computes a value the outer query can use in a `WHERE` condition.",
    example: `SELECT codename, threat_level
FROM agents
WHERE threat_level > (
  SELECT AVG(threat_level) FROM agents
);`,
    exampleOutput: "codename | threat_level — agents above the average threat level.",
    notes: "The subquery returns the average threat level. The outer query filters agents that exceed it.",
    keyPoints: [
      "A subquery is placed in `( )` inside the `WHERE` clause.",
      "The inner query runs first.",
      "`WHERE col > (SELECT AVG(col) FROM table)` filters above-average rows.",
      "Subqueries can also be used in `SELECT`, `FROM`, or `HAVING`.",
    ],
  },

  "rm-sql-08": {
    intro: "Rick wants to find dimensions he has visited more than the average number of times. He nests a subquery inside `WHERE` to compute that average.",
    concept: "A subquery is a `SELECT` nested inside another query. In a `WHERE` clause, it computes a dynamic value for comparison.",
    example: `SELECT dimension_id, COUNT(*) AS visits
FROM visit_log
GROUP BY dimension_id
HAVING COUNT(*) > (
  SELECT AVG(cnt) FROM (
    SELECT COUNT(*) AS cnt FROM visit_log GROUP BY dimension_id
  ) AS sub
);`,
    exampleOutput: "dimension_id | visits — dimensions visited more than average.",
    notes: "A subquery in `HAVING` computes the average visit count across dimensions. The outer query keeps only those above the average.",
    keyPoints: [
      "Subqueries can appear in `HAVING` too, not just `WHERE`.",
      "Nest subqueries in `( )` and alias derived tables with `AS sub`.",
      "The inner query runs first.",
      "Subqueries in `FROM` create a temporary inline table.",
    ],
  },

  "sg-sql-08": {
    intro: "The Front Man wants players who have more debt than the average player. He uses a subquery inside `WHERE` to compute the average dynamically.",
    concept: "A subquery is a `SELECT` nested inside another query. In a `WHERE` clause, it produces a dynamic value for comparison.",
    example: `SELECT player_number, debt_amount
FROM players
WHERE debt_amount > (
  SELECT AVG(debt_amount) FROM players
);`,
    exampleOutput: "player_number | debt_amount — players with above-average debt.",
    notes: "The subquery computes the average debt. The outer query keeps players whose debt exceeds it.",
    keyPoints: [
      "A subquery is wrapped in `( )` inside `WHERE`.",
      "The inner query runs first and returns a single value.",
      "`WHERE col > (SELECT AVG(col) FROM table)` filters above-average rows.",
      "Subqueries can also return a list for `IN (SELECT ...)`.",
    ],
  },

  "ad-sql-08": {
    intro: "Michael wants to find Bluth assets worth more than the average asset value. He uses a subquery to compute the average dynamically.",
    concept: "A subquery is a `SELECT` nested inside another query. It produces a dynamic value the outer query uses for filtering.",
    example: `SELECT asset_name, value
FROM assets
WHERE value > (
  SELECT AVG(value) FROM assets
);`,
    exampleOutput: "asset_name | value — assets above the average value.",
    notes: "The subquery computes `AVG(value)`. The outer query returns only assets that exceed the average.",
    keyPoints: [
      "A subquery is wrapped in `( )`.",
      "The inner query runs first and produces a single value.",
      "`WHERE col > (SELECT AVG(col) FROM table)` is very common.",
      "Subqueries can also be used in `FROM` as inline views.",
    ],
  },

  "ba-sql-08": {
    intro: "Barbie wants to find Ken assignments in neighbourhoods with more houses than average. She uses a subquery to dynamically compute the average house count.",
    concept: "A subquery is a `SELECT` nested inside another query. It computes a value the outer query can use in a `WHERE` or `HAVING` condition.",
    example: `SELECT neighborhood_id, COUNT(*) AS house_count
FROM houses
GROUP BY neighborhood_id
HAVING COUNT(*) > (
  SELECT AVG(cnt)
  FROM (SELECT COUNT(*) AS cnt FROM houses GROUP BY neighborhood_id) AS sub
);`,
    exampleOutput: "neighborhood_id | house_count — neighbourhoods above the average.",
    notes: "The nested subquery computes average house counts per neighbourhood. The outer `HAVING` filters those that exceed the average.",
    keyPoints: [
      "Subqueries can appear in `HAVING` as well as `WHERE`.",
      "Nest subqueries in `( )` and alias with `AS name`.",
      "Derived table subqueries in `FROM` create inline views.",
      "The inner query always runs before the outer query.",
    ],
  },

  "sc-sql-08": {
    intro: "Carrie wants column topics that have more reader comments than the average. She uses a subquery inside `WHERE` to compare dynamically.",
    concept: "A subquery is a `SELECT` nested inside another query. In a `WHERE` clause, it produces a dynamic value for comparison.",
    example: `SELECT title, comment_count
FROM columns
WHERE comment_count > (
  SELECT AVG(comment_count) FROM columns
);`,
    exampleOutput: "title | comment_count — columns with above-average comments.",
    notes: "The subquery computes the average comment count. The outer query keeps columns that exceed it.",
    keyPoints: [
      "A subquery is placed in `( )` inside `WHERE`.",
      "The inner query runs first.",
      "`WHERE col > (SELECT AVG(col) FROM table)` is a common pattern.",
      "Subqueries can also be nested in `SELECT`, `FROM`, or `HAVING`.",
    ],
  },

  "sp-sql-08": {
    intro: "Tony wants to find rackets generating more revenue than the average racket. He uses a subquery to compute the average dynamically.",
    concept: "A subquery is a `SELECT` nested inside another query. In a `WHERE` clause, it produces a dynamic value for comparison.",
    example: `SELECT racket_id, SUM(amount) AS total
FROM earnings
GROUP BY racket_id
HAVING SUM(amount) > (
  SELECT AVG(total_by_racket)
  FROM (SELECT SUM(amount) AS total_by_racket FROM earnings GROUP BY racket_id) AS sub
);`,
    exampleOutput: "racket_id | total — rackets above the average total earnings.",
    notes: "The inner subquery computes each racket's total, then the outer computes the average. `HAVING` keeps rackets above it.",
    keyPoints: [
      "Subqueries can appear in `HAVING` as well as `WHERE`.",
      "Derived table subqueries in `FROM` need an alias.",
      "The inner query runs first.",
      "Subqueries enable dynamic thresholds without hard-coded values.",
    ],
  },

  // ─── Lesson 09 — CASE WHEN ────────────────────────────────────────────────

  "st-sql-09": {
    intro: "The Party labels each character's threat level as 'High', 'Medium', or 'Low' based on their power score. Joyce writes a `CASE WHEN` to produce the label in the query.",
    concept: "`CASE WHEN` works like an if-else inside SQL. It evaluates conditions in order and returns the first matching value. `ELSE` provides a default.",
    example: `SELECT name,
  CASE
    WHEN power_level >= 8 THEN 'High'
    WHEN power_level >= 4 THEN 'Medium'
    ELSE 'Low'
  END AS threat
FROM subjects;`,
    exampleOutput: "name | threat — each subject labelled High, Medium, or Low.",
    notes: "The `CASE` checks conditions top-to-bottom. The first `WHEN` that is true determines the result. `ELSE` catches everything else.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END` — evaluated top-to-bottom.",
      "The first matching `WHEN` wins; later ones are skipped.",
      "`ELSE` provides the fallback value.",
      "Alias the `CASE` expression with `AS label`.",
    ],
  },

  "sv-sql-09": {
    intro: "The MDR system classifies each employee's clearance as 'Restricted', 'Standard', or 'Elevated' based on their level. Harmony writes a `CASE WHEN` for the labels.",
    concept: "`CASE WHEN` works like if-else inside SQL. It evaluates conditions in order and returns the first matching result.",
    example: `SELECT name,
  CASE
    WHEN clearance >= 3 THEN 'Elevated'
    WHEN clearance >= 2 THEN 'Standard'
    ELSE 'Restricted'
  END AS access_level
FROM employees;`,
    exampleOutput: "name | access_level — each employee labelled by their access tier.",
    notes: "Conditions are checked top-to-bottom. The first true `WHEN` sets the result. `ELSE` catches the remaining rows.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END`.",
      "Top-to-bottom evaluation — first match wins.",
      "`ELSE` handles rows matching no `WHEN`.",
      "Alias the expression: `END AS column_name`.",
    ],
  },

  "bb-sql-09": {
    intro: "Gus grades each batch as 'Premium', 'Standard', or 'Reject' based on purity. Walt writes the `CASE WHEN` to label each batch in the query results.",
    concept: "`CASE WHEN` evaluates conditions in order and returns the first matching value. It functions like an if-else inside a SQL query.",
    example: `SELECT batch_id,
  CASE
    WHEN purity >= 97 THEN 'Premium'
    WHEN purity >= 90 THEN 'Standard'
    ELSE 'Reject'
  END AS grade
FROM batches;`,
    exampleOutput: "batch_id | grade — each batch labelled Premium, Standard, or Reject.",
    notes: "The `CASE` checks purity from highest to lowest. The first true condition sets the grade. `ELSE` handles low-purity batches.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END`.",
      "Conditions checked top-to-bottom; first match wins.",
      "`ELSE` provides the fallback.",
      "Alias with `AS grade`.",
    ],
  },

  "to-sql-09": {
    intro: "Michael labels each employee's performance as 'Outstanding', 'Adequate', or 'Needs Improvement' using `CASE WHEN` in the employee query.",
    concept: "`CASE WHEN` evaluates conditions in order and returns the first matching value, like an if-else inside a SQL query.",
    example: `SELECT name,
  CASE
    WHEN sales >= 80 THEN 'Outstanding'
    WHEN sales >= 50 THEN 'Adequate'
    ELSE 'Needs Improvement'
  END AS performance
FROM employees;`,
    exampleOutput: "name | performance — each employee labelled by performance tier.",
    notes: "Conditions are checked from top to bottom. The first true `WHEN` determines the label. `ELSE` handles the remaining rows.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END`.",
      "First matching condition wins.",
      "`ELSE` is the fallback.",
      "Alias the expression: `END AS performance`.",
    ],
  },

  "got-sql-09": {
    intro: "The Small Council labels each house as 'Ally', 'Neutral', or 'Enemy' based on their allegiance score. Tyrion writes the `CASE WHEN` for the query.",
    concept: "`CASE WHEN` evaluates conditions in order and returns the first matching value. It functions as an if-else expression inside SQL.",
    example: `SELECT house_name,
  CASE
    WHEN allegiance_score >= 7 THEN 'Ally'
    WHEN allegiance_score >= 4 THEN 'Neutral'
    ELSE 'Enemy'
  END AS standing
FROM houses;`,
    exampleOutput: "house_name | standing — each house labelled by their political standing.",
    notes: "Conditions checked top-to-bottom. First true `WHEN` sets the standing. `ELSE` labels the remainder as 'Enemy'.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END`.",
      "Conditions evaluated top-to-bottom; first match wins.",
      "`ELSE` provides the default.",
      "Alias the expression with `AS standing`.",
    ],
  },

  "mx-sql-09": {
    intro: "The Oracle labels each agent as 'Critical Threat', 'Moderate', or 'Dormant' based on their replication count. Neo runs the `CASE WHEN` query.",
    concept: "`CASE WHEN` evaluates conditions in order and returns the first matching value, functioning as an if-else expression inside SQL.",
    example: `SELECT codename,
  CASE
    WHEN copy_count >= 10 THEN 'Critical Threat'
    WHEN copy_count >= 3  THEN 'Moderate'
    ELSE 'Dormant'
  END AS status
FROM agents;`,
    exampleOutput: "codename | status — each agent labelled by threat level.",
    notes: "Conditions are evaluated top-to-bottom. The first true `WHEN` sets the status. `ELSE` catches agents with low copy counts.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END`.",
      "Evaluated top-to-bottom; first match wins.",
      "`ELSE` handles unmatched rows.",
      "Alias: `END AS status`.",
    ],
  },

  "rm-sql-09": {
    intro: "Rick labels each dimension by its danger level — 'Extreme', 'Moderate', or 'Safe' — based on the anomaly count. He uses `CASE WHEN` in the query.",
    concept: "`CASE WHEN` evaluates conditions in order and returns the first matching value. It acts as an if-else inside a SQL query.",
    example: `SELECT dimension_id,
  CASE
    WHEN anomaly_count >= 10 THEN 'Extreme'
    WHEN anomaly_count >= 5  THEN 'Moderate'
    ELSE 'Safe'
  END AS danger
FROM dimensions;`,
    exampleOutput: "dimension_id | danger — each dimension labelled by danger level.",
    notes: "Conditions evaluated top-to-bottom. First true `WHEN` sets the danger label. `ELSE` covers low-anomaly dimensions.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END`.",
      "Top-to-bottom evaluation; first match wins.",
      "`ELSE` provides the fallback.",
      "Alias the expression: `END AS danger`.",
    ],
  },

  "sg-sql-09": {
    intro: "The Front Man labels each player as 'Elite', 'Survivor', or 'Eliminated' based on rounds survived. He uses `CASE WHEN` in the player query.",
    concept: "`CASE WHEN` evaluates conditions in order and returns the first matching value — an if-else inside SQL.",
    example: `SELECT player_number,
  CASE
    WHEN rounds_survived >= 5 THEN 'Elite'
    WHEN rounds_survived >= 2 THEN 'Survivor'
    ELSE 'Eliminated'
  END AS status
FROM players;`,
    exampleOutput: "player_number | status — each player labelled by survival status.",
    notes: "Conditions checked top-to-bottom. First true `WHEN` sets the status. `ELSE` labels players who survived fewer than 2 rounds.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END`.",
      "Top-to-bottom evaluation; first match wins.",
      "`ELSE` provides the default value.",
      "Alias: `END AS status`.",
    ],
  },

  "ad-sql-09": {
    intro: "Michael labels each Bluth asset as 'Frozen', 'At Risk', or 'Secure' based on its SEC status code. He uses `CASE WHEN` in the assets query.",
    concept: "`CASE WHEN` evaluates conditions in order and returns the first matching value, functioning as an if-else inside SQL.",
    example: `SELECT asset_name,
  CASE
    WHEN status_code = 1 THEN 'Frozen'
    WHEN status_code = 2 THEN 'At Risk'
    ELSE 'Secure'
  END AS label
FROM assets;`,
    exampleOutput: "asset_name | label — each asset labelled by its SEC status.",
    notes: "Conditions checked top-to-bottom. The first true `WHEN` sets the label. `ELSE` covers non-problematic assets.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END`.",
      "Evaluated top-to-bottom; first match wins.",
      "`ELSE` provides the fallback.",
      "Works with both numeric and string conditions.",
    ],
  },

  "ba-sql-09": {
    intro: "The Barbieland Council labels each career as 'Iconic', 'Popular', or 'Niche' based on how many Barbies hold it. She uses `CASE WHEN` in the query.",
    concept: "`CASE WHEN` evaluates conditions in order and returns the first matching value — an if-else inside SQL.",
    example: `SELECT career,
  CASE
    WHEN holder_count >= 10 THEN 'Iconic'
    WHEN holder_count >= 5  THEN 'Popular'
    ELSE 'Niche'
  END AS popularity
FROM careers;`,
    exampleOutput: "career | popularity — each career labelled by popularity tier.",
    notes: "Conditions checked top-to-bottom. First true `WHEN` sets the tier. `ELSE` catches careers with fewer than 5 holders.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END`.",
      "Top-to-bottom; first match wins.",
      "`ELSE` provides the default.",
      "Alias: `END AS popularity`.",
    ],
  },

  "sc-sql-09": {
    intro: "Carrie labels each relationship as 'Serious', 'Casual', or 'Complicated' based on its duration in months. She uses `CASE WHEN` in the relationships query.",
    concept: "`CASE WHEN` evaluates conditions in order and returns the first matching value — an if-else inside SQL.",
    example: `SELECT name,
  CASE
    WHEN duration_months >= 12 THEN 'Serious'
    WHEN duration_months >= 3  THEN 'Casual'
    ELSE 'Complicated'
  END AS label
FROM relationships;`,
    exampleOutput: "name | label — each relationship labelled by duration tier.",
    notes: "Conditions checked top-to-bottom. First true `WHEN` sets the label. `ELSE` catches short or unusual durations.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END`.",
      "Top-to-bottom evaluation; first match wins.",
      "`ELSE` provides the fallback.",
      "Alias with `AS label`.",
    ],
  },

  "sp-sql-09": {
    intro: "Tony labels each racket as 'Gold Mine', 'Steady', or 'Drain' based on monthly earnings. Carmela writes the `CASE WHEN` for the quarterly review.",
    concept: "`CASE WHEN` evaluates conditions in order and returns the first matching value — an if-else inside SQL.",
    example: `SELECT racket_name,
  CASE
    WHEN monthly_earnings >= 30000 THEN 'Gold Mine'
    WHEN monthly_earnings >= 10000 THEN 'Steady'
    ELSE 'Drain'
  END AS rating
FROM rackets;`,
    exampleOutput: "racket_name | rating — each racket labelled by earnings tier.",
    notes: "Conditions checked top-to-bottom. First true `WHEN` sets the rating. `ELSE` labels low-performing rackets.",
    keyPoints: [
      "`CASE WHEN cond THEN val ... ELSE val END`.",
      "Top-to-bottom; first match wins.",
      "`ELSE` provides the fallback.",
      "Alias: `END AS rating`.",
    ],
  },

  // ─── Lesson 10 — Multi-clause Query ──────────────────────────────────────

  "st-sql-10": {
    intro: "The Party pulls a complex report: characters in the 'Party' faction, grouped by power tier, filtered to tiers with more than 1 member, ordered by count. All five SQL clauses together.",
    concept: "A multi-clause SQL query combines `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY` in one statement. Each clause has a fixed position.",
    example: `SELECT faction, COUNT(*) AS member_count
FROM characters
WHERE status = 'active'
GROUP BY faction
HAVING COUNT(*) > 1
ORDER BY member_count DESC;`,
    exampleOutput: "faction | member_count — active factions with more than 1 member, ranked.",
    notes: "`WHERE` filters individual rows first. `GROUP BY` groups them. `HAVING` filters the groups. `ORDER BY` sorts the final result.",
    keyPoints: [
      "Clause order: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`.",
      "`WHERE` filters before grouping; `HAVING` filters after.",
      "Aggregate functions (`COUNT`, `SUM`) live in `SELECT` or `HAVING`.",
      "Use `ORDER BY alias` to sort by a calculated column.",
    ],
  },

  "sv-sql-10": {
    intro: "The MDR audit pulls active employees per department, filtered to departments with more than 2 members, ordered alphabetically. Mark writes the full multi-clause query.",
    concept: "A multi-clause SQL query combines `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY`. Each clause serves a specific filtering or sorting role.",
    example: `SELECT department, COUNT(*) AS headcount
FROM employees
WHERE status = 'active'
GROUP BY department
HAVING COUNT(*) > 2
ORDER BY department ASC;`,
    exampleOutput: "department | headcount — active departments with more than 2 staff, A-Z.",
    notes: "`WHERE` keeps only active employees. `GROUP BY` groups by department. `HAVING` filters small departments. `ORDER BY` sorts A-Z.",
    keyPoints: [
      "Clause order: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`.",
      "`WHERE` runs before `GROUP BY`; `HAVING` runs after.",
      "Use `ORDER BY col ASC` for ascending, `DESC` for descending.",
      "Combine all clauses for powerful, precise queries.",
    ],
  },

  "bb-sql-10": {
    intro: "The DEA wants a report of territories with more than 2 active shipments, ranked by total amount. Walt writes the full multi-clause query to cover his tracks.",
    concept: "A multi-clause SQL query uses `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY` together. Each clause has a specific role and fixed position.",
    example: `SELECT territory, COUNT(*) AS shipment_count, SUM(amount) AS total
FROM shipments
WHERE status = 'active'
GROUP BY territory
HAVING COUNT(*) > 2
ORDER BY total DESC;`,
    exampleOutput: "territory | shipment_count | total — active territories with 3+ shipments, ranked.",
    notes: "`WHERE` filters active shipments. `GROUP BY` groups by territory. `HAVING` keeps territories with more than 2 shipments. `ORDER BY` ranks by total amount.",
    keyPoints: [
      "Clause order is fixed: `FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY`.",
      "`WHERE` filters before grouping; `HAVING` filters after.",
      "`SUM(col)` and `COUNT(*)` can both appear in `SELECT`.",
      "Alias aggregate columns for use in `ORDER BY`.",
    ],
  },

  "to-sql-10": {
    intro: "Michael wants branches with more than 3 active employees and their total sales, ranked highest first. He writes a full multi-clause query for the board.",
    concept: "A multi-clause SQL query combines `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY` together for precise data retrieval.",
    example: `SELECT branch, COUNT(*) AS staff, SUM(sales) AS total_sales
FROM employees
WHERE status = 'active'
GROUP BY branch
HAVING COUNT(*) > 3
ORDER BY total_sales DESC;`,
    exampleOutput: "branch | staff | total_sales — active branches with 4+ staff, ranked by sales.",
    notes: "`WHERE` keeps active staff. `GROUP BY` groups by branch. `HAVING` filters small branches. `ORDER BY` ranks by total sales.",
    keyPoints: [
      "Clause order: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`.",
      "`WHERE` before grouping; `HAVING` after.",
      "Multiple aggregate functions can appear in `SELECT`.",
      "Alias columns for use in `ORDER BY`.",
    ],
  },

  "got-sql-10": {
    intro: "The Small Council needs a report of active regions with more than 2 battles, ranked by total casualties. Tyrion writes the full multi-clause query.",
    concept: "A multi-clause SQL query chains `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY` for precise, filtered, and sorted results.",
    example: `SELECT region, COUNT(*) AS battles, SUM(casualties) AS total_casualties
FROM battles
WHERE outcome = 'decisive'
GROUP BY region
HAVING COUNT(*) > 2
ORDER BY total_casualties DESC;`,
    exampleOutput: "region | battles | total_casualties — regions with 3+ decisive battles, ranked.",
    notes: "`WHERE` keeps decisive battles. `GROUP BY` groups by region. `HAVING` filters small regions. `ORDER BY` ranks by casualties.",
    keyPoints: [
      "Clause order is fixed: `FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY`.",
      "`WHERE` before grouping; `HAVING` after.",
      "Combine `COUNT` and `SUM` in `SELECT`.",
      "Alias columns for readable results.",
    ],
  },

  "mx-sql-10": {
    intro: "The Oracle pulls a report of active sectors with more than 3 anomalies, ranked by total energy. She writes the full multi-clause query.",
    concept: "A multi-clause SQL query chains `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY` together for precise results.",
    example: `SELECT sector, COUNT(*) AS anomaly_count, SUM(energy) AS total_energy
FROM anomalies
WHERE status = 'active'
GROUP BY sector
HAVING COUNT(*) > 3
ORDER BY total_energy DESC;`,
    exampleOutput: "sector | anomaly_count | total_energy — active sectors with 4+ anomalies, ranked.",
    notes: "`WHERE` keeps active anomalies. `GROUP BY` groups by sector. `HAVING` filters small sectors. `ORDER BY` ranks by energy.",
    keyPoints: [
      "Clause order: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`.",
      "`WHERE` runs before grouping; `HAVING` after.",
      "Multiple aggregates can appear in `SELECT`.",
      "Alias aggregates for use in `ORDER BY`.",
    ],
  },

  "rm-sql-10": {
    intro: "Rick generates a dimension report: active dimensions with more than 2 anomalies, ranked by total anomaly score. He writes the full multi-clause SQL query.",
    concept: "A multi-clause SQL query combines `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY` for precise, multi-step data retrieval.",
    example: `SELECT dimension_id, COUNT(*) AS anomalies, SUM(score) AS total_score
FROM dimension_events
WHERE status = 'active'
GROUP BY dimension_id
HAVING COUNT(*) > 2
ORDER BY total_score DESC;`,
    exampleOutput: "dimension_id | anomalies | total_score — active dimensions with 3+ events, ranked.",
    notes: "`WHERE` keeps active events. `GROUP BY` groups by dimension. `HAVING` filters small groups. `ORDER BY` ranks by total score.",
    keyPoints: [
      "Clause order: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`.",
      "`WHERE` before grouping; `HAVING` after.",
      "Combine `COUNT` and `SUM` in `SELECT`.",
      "Alias aggregate columns for use in `ORDER BY`.",
    ],
  },

  "sg-sql-10": {
    intro: "The Front Man generates a summary: active games with more than 2 eliminations, ranked by total eliminated. He writes the full multi-clause query.",
    concept: "A multi-clause SQL query chains `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY` for filtered, grouped, and sorted results.",
    example: `SELECT game_name, COUNT(*) AS eliminations
FROM results
WHERE round >= 1
GROUP BY game_name
HAVING COUNT(*) > 2
ORDER BY eliminations DESC;`,
    exampleOutput: "game_name | eliminations — games with 3+ eliminations, ranked highest first.",
    notes: "`WHERE` filters results from round 1 onwards. `GROUP BY` groups by game. `HAVING` filters low-elimination games. `ORDER BY` ranks.",
    keyPoints: [
      "Clause order: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`.",
      "`WHERE` before grouping; `HAVING` after.",
      "`COUNT(*)` counts rows per group.",
      "Alias columns for use in `ORDER BY`.",
    ],
  },

  "ad-sql-10": {
    intro: "Michael generates the Bluth Company's asset report: active assets by type with more than 1 asset in the category, ranked by total value.",
    concept: "A multi-clause SQL query combines `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY` together for precise data retrieval.",
    example: `SELECT asset_type, COUNT(*) AS count, SUM(value) AS total_value
FROM assets
WHERE status = 'active'
GROUP BY asset_type
HAVING COUNT(*) > 1
ORDER BY total_value DESC;`,
    exampleOutput: "asset_type | count | total_value — active asset types with 2+, ranked by value.",
    notes: "`WHERE` keeps active assets. `GROUP BY` groups by type. `HAVING` removes single-asset types. `ORDER BY` ranks by value.",
    keyPoints: [
      "Clause order: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`.",
      "`WHERE` before grouping; `HAVING` after.",
      "Combine `COUNT` and `SUM` in `SELECT`.",
      "Alias columns for readable output.",
    ],
  },

  "ba-sql-10": {
    intro: "The Barbieland Council generates a career report: active careers with more than 3 Barbies holding them, ranked by total holders.",
    concept: "A multi-clause SQL query chains `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY` together for precise data retrieval.",
    example: `SELECT career, COUNT(*) AS holder_count
FROM barbies
WHERE active = true
GROUP BY career
HAVING COUNT(*) > 3
ORDER BY holder_count DESC;`,
    exampleOutput: "career | holder_count — active careers held by 4+ Barbies, ranked.",
    notes: "`WHERE` keeps active Barbies. `GROUP BY` groups by career. `HAVING` filters rare careers. `ORDER BY` ranks by popularity.",
    keyPoints: [
      "Clause order: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`.",
      "`WHERE` before grouping; `HAVING` after.",
      "`COUNT(*)` counts rows per group.",
      "Alias the aggregate for use in `ORDER BY`.",
    ],
  },

  "sc-sql-10": {
    intro: "Carrie generates the year's top date spots: active restaurants with more than 4 reservations, ranked by reservation count.",
    concept: "A multi-clause SQL query chains `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY` for precise, multi-step data retrieval.",
    example: `SELECT restaurant_name, COUNT(*) AS reservations
FROM bookings
WHERE year = 2004
GROUP BY restaurant_name
HAVING COUNT(*) > 4
ORDER BY reservations DESC;`,
    exampleOutput: "restaurant_name | reservations — 2004's hot spots with 5+ bookings, ranked.",
    notes: "`WHERE` keeps 2004 bookings. `GROUP BY` groups by restaurant. `HAVING` filters quiet spots. `ORDER BY` ranks by popularity.",
    keyPoints: [
      "Clause order: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`.",
      "`WHERE` before grouping; `HAVING` after.",
      "`COUNT(*)` counts rows per group.",
      "Alias for readable `ORDER BY`.",
    ],
  },

  "sp-sql-10": {
    intro: "Tony generates the quarterly earnings report: active rackets with more than 2 transactions, ranked by total earnings.",
    concept: "A multi-clause SQL query chains `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and `ORDER BY` together for filtered, grouped, and sorted results.",
    example: `SELECT racket_name, COUNT(*) AS transactions, SUM(amount) AS total
FROM earnings
WHERE status = 'active'
GROUP BY racket_name
HAVING COUNT(*) > 2
ORDER BY total DESC;`,
    exampleOutput: "racket_name | transactions | total — active rackets with 3+ txns, ranked.",
    notes: "`WHERE` filters active earnings. `GROUP BY` groups by racket. `HAVING` removes low-activity rackets. `ORDER BY` ranks by total.",
    keyPoints: [
      "Clause order: `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`.",
      "`WHERE` before grouping; `HAVING` after.",
      "Combine `COUNT` and `SUM` in `SELECT`.",
      "Alias aggregate columns for `ORDER BY`.",
    ],
  },
};
