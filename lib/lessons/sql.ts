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
};
