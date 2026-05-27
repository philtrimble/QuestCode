import type { Challenge } from "@/types";

export const squidGameSQLChallenges: Challenge[] = [
  {
    id: "sg-sql-01",
    themeId: "squid-game",
    languageId: "sql",
    order: 1,
    title: "SELECT",
    themedTitle: "The Player Registry",
    narrative:
      "456 players have arrived on the island. The Front Man needs a complete list of all participants before the games begin. No one leaves until we have a full registry.",
    prompt:
      "Write a query to select all columns from the `players` table.",
    hint: "Use `SELECT * FROM table_name` to get all columns from a table.",
    solution: `SELECT * FROM players;`,
    starterCode: `-- The Player Registry\n-- Select all columns from the players table\n\nSELECT ___ FROM players;`,
    testCases: [
      { input: "", expected: "SELECT * FROM players", description: "Retrieves all player records" },
    ],
    concept: "SELECT",
    difficulty: "beginner",
  },
  {
    id: "sg-sql-02",
    themeId: "squid-game",
    languageId: "sql",
    order: 2,
    title: "WHERE",
    themedTitle: "Who Survived Round One",
    narrative:
      "Red Light, Green Light is over. The guards are collecting the eliminated players. The Front Man needs a list of only the players who are still alive. Every second counts.",
    prompt:
      "Write a query to select `player_number` and `name` from the `players` table where `status` equals `'alive'`.",
    hint: "Use a `WHERE` clause: `WHERE column = 'value'`.",
    solution: `SELECT player_number, name FROM players WHERE status = 'alive';`,
    starterCode: `-- Who Survived Round One\n-- Select player_number and name for alive players only\n\nSELECT player_number, name\nFROM players\nWHERE status = ___;`,
    testCases: [
      { input: "", expected: "WHERE status = 'alive'", description: "Filters to alive players only" },
    ],
    concept: "WHERE",
    difficulty: "beginner",
  },
  {
    id: "sg-sql-03",
    themeId: "squid-game",
    languageId: "sql",
    order: 3,
    title: "ORDER BY",
    themedTitle: "The Final Rankings",
    narrative:
      "The games are over. The Front Man wants to present the final leaderboard — players ranked by their prize winnings from highest to lowest. Only one player took the full prize, but the others earned something too.",
    prompt:
      "Write a query to select `player_number`, `name`, and `prize_won` from the `players` table, ordered by `prize_won` in descending order. Limit results to the top `3`.",
    hint: "Use `ORDER BY column DESC` to sort highest first, and `LIMIT 3` to get only the top 3.",
    solution: `SELECT player_number, name, prize_won\nFROM players\nORDER BY prize_won DESC\nLIMIT 3;`,
    starterCode: `-- The Final Rankings\n-- Select top 3 players by prize won, highest first\n\nSELECT player_number, name, prize_won\nFROM players\nORDER BY prize_won ___\nLIMIT ___;`,
    testCases: [
      { input: "", expected: "ORDER BY prize_won DESC LIMIT 3", description: "Top 3 prize earners" },
    ],
    concept: "ORDER BY & LIMIT",
    difficulty: "beginner",
  },
  {
    id: "sg-sql-04",
    themeId: "squid-game",
    languageId: "sql",
    order: 4,
    title: "Aggregate Functions",
    themedTitle: "Game Statistics Report",
    narrative:
      "The VIPs want a full statistical breakdown of the games — total players, how many survived, and the average debt amount that brought players to the island. The Front Man never misses a detail.",
    prompt:
      "Write a query that returns three values: `COUNT(*)` aliased as `total_players`, `SUM(CASE WHEN status = 'alive' THEN 1 ELSE 0 END)` aliased as `survivors`, and `AVG(debt_amount)` aliased as `avg_debt`. Select from the `players` table.",
    hint: "You can alias columns with `column AS alias_name`. Combine multiple aggregates in one SELECT statement.",
    solution: `SELECT\n  COUNT(*) AS total_players,\n  SUM(CASE WHEN status = 'alive' THEN 1 ELSE 0 END) AS survivors,\n  AVG(debt_amount) AS avg_debt\nFROM players;`,
    starterCode: `-- Game Statistics Report\n-- Return total players, survivors count, and average debt\n\nSELECT\n  COUNT(*) AS total_players,\n  SUM(CASE WHEN status = 'alive' THEN 1 ELSE 0 END) AS survivors,\n  AVG(___) AS avg_debt\nFROM players;`,
    testCases: [
      { input: "", expected: "count(*) avg(debt_amount)", description: "Aggregate stats query" },
    ],
    concept: "Aggregate Functions",
    difficulty: "intermediate",
  },
  {
    id: "sg-sql-05",
    themeId: "squid-game",
    languageId: "sql",
    order: 5,
    title: "GROUP BY",
    themedTitle: "Survival by Team",
    narrative:
      "In the tug of war and marble games, players were split into teams. The Front Man wants to know the survival rate per team — which team held together, and which crumbled under pressure.",
    prompt:
      "Write a query that selects `team_id` and `COUNT(*)` aliased as `survivors` from the `players` table, filtered to only `alive` players, grouped by `team_id`, and ordered by `survivors` descending.",
    hint: "Combine `WHERE`, `GROUP BY`, and `ORDER BY`. Remember: filter rows with `WHERE` before grouping.",
    solution: `SELECT team_id, COUNT(*) AS survivors\nFROM players\nWHERE status = 'alive'\nGROUP BY team_id\nORDER BY survivors DESC;`,
    starterCode: `-- Survival by Team\n-- Count alive players per team, ordered by most survivors first\n\nSELECT team_id, COUNT(*) AS survivors\nFROM players\nWHERE status = 'alive'\nGROUP BY ___\nORDER BY survivors ___;`,
    testCases: [
      { input: "", expected: "GROUP BY team_id ORDER BY survivors DESC", description: "Survivors grouped by team" },
    ],
    concept: "GROUP BY",
    difficulty: "intermediate",
  },
  {
    id: "sg-sql-06",
    themeId: "squid-game",
    languageId: "sql",
    order: 6,
    title: "INNER JOIN",
    themedTitle: "Players and Their Games",
    narrative:
      "The Front Man has two tables: `players` and `games`, linked by the round each player participated in. He needs a combined view to confirm which players were present for which games — no one leaves the island without being accounted for.",
    prompt:
      "Write a query that selects `players.name`, `players.status`, and `games.game_name` by performing an INNER JOIN between `players` and `games` on `players.current_round = games.round_number`.",
    hint: "Use `INNER JOIN games ON players.current_round = games.round_number`.",
    solution: `SELECT players.name, players.status, games.game_name\nFROM players\nINNER JOIN games ON players.current_round = games.round_number;`,
    starterCode: `-- Players and Their Games\n-- Join players with games on round number\n\nSELECT players.name, players.status, games.game_name\nFROM players\n___ JOIN games ON ___;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN games ON players.current_round = games.round_number",
        description: "Joins players and games tables",
      },
    ],
    concept: "INNER JOIN",
    difficulty: "intermediate",
  },
  {
    id: "sg-sql-07",
    themeId: "squid-game",
    languageId: "sql",
    order: 7,
    title: "HAVING",
    themedTitle: "Teams With Survivors",
    narrative:
      "The Front Man tracks team compositions. He needs to know which teams still have more than one living player — those are the teams that still pose a strategic challenge in the upcoming games.",
    prompt:
      "Write a query that selects `team_id` and `COUNT(*) AS survivor_count` from `players` WHERE `status = 'alive'`, grouped by `team_id`, filtered with HAVING to show only teams with more than 1 survivor, ordered by `survivor_count` descending.",
    hint: "Use `WHERE status = 'alive'` then `GROUP BY team_id` then `HAVING COUNT(*) > 1`.",
    solution: `SELECT team_id, COUNT(*) AS survivor_count\nFROM players\nWHERE status = 'alive'\nGROUP BY team_id\nHAVING COUNT(*) > 1\nORDER BY survivor_count DESC;`,
    starterCode: `-- Teams With Survivors\n-- Find teams with more than one surviving player\n\nSELECT team_id, COUNT(*) AS survivor_count\nFROM players\nWHERE status = 'alive'\nGROUP BY team_id\nHAVING ___\nORDER BY survivor_count DESC;`,
    testCases: [
      {
        input: "",
        expected: "HAVING COUNT(*) > 1",
        description: "Filters for teams with multiple survivors",
      },
    ],
    concept: "HAVING",
    difficulty: "intermediate",
  },
  {
    id: "sg-sql-08",
    themeId: "squid-game",
    languageId: "sql",
    order: 8,
    title: "Subquery",
    themedTitle: "Desperate Players",
    narrative:
      "The games prey on desperation. The guards have identified that players with debt above the average are the most motivated — and most dangerous. Find every player carrying more than average debt.",
    prompt:
      "Write a query that selects `player_number`, `name`, and `debt_amount` from `players` WHERE `debt_amount` is greater than the average debt across all players (use a subquery).",
    hint: "Use `WHERE debt_amount > (SELECT AVG(debt_amount) FROM players)`.",
    solution: `SELECT player_number, name, debt_amount\nFROM players\nWHERE debt_amount > (SELECT AVG(debt_amount) FROM players);`,
    starterCode: `-- Desperate Players\n-- Find players with above-average debt\n\nSELECT player_number, name, debt_amount\nFROM players\nWHERE debt_amount > (___ AVG(debt_amount) FROM players);`,
    testCases: [
      {
        input: "",
        expected: "WHERE debt_amount > (SELECT AVG(debt_amount) FROM players)",
        description: "Subquery finds players with above-average debt",
      },
    ],
    concept: "Subquery",
    difficulty: "intermediate",
  },
  {
    id: "sg-sql-09",
    themeId: "squid-game",
    languageId: "sql",
    order: 9,
    title: "CASE WHEN",
    themedTitle: "Debt Risk Classification",
    narrative:
      "The VIPs want a risk assessment for each player based on their financial desperation. Players with the most to lose make for the most entertaining viewing. Classify each player's debt level into a risk tier.",
    prompt:
      "Write a query that selects `name`, `debt_amount`, and a computed `risk_tier`: 'Extreme' when debt_amount >= 400000000, 'High' when debt_amount >= 50000000, 'Moderate' otherwise.",
    hint: "Use `CASE WHEN debt_amount >= 400000000 THEN 'Extreme' WHEN debt_amount >= 50000000 THEN 'High' ELSE 'Moderate' END AS risk_tier`.",
    solution: `SELECT\n  name,\n  debt_amount,\n  CASE\n    WHEN debt_amount >= 400000000 THEN 'Extreme'\n    WHEN debt_amount >= 50000000 THEN 'High'\n    ELSE 'Moderate'\n  END AS risk_tier\nFROM players;`,
    starterCode: `-- Debt Risk Classification\n-- Classify each player by debt risk tier\n\nSELECT\n  name,\n  debt_amount,\n  CASE\n    WHEN debt_amount >= 400000000 THEN 'Extreme'\n    WHEN debt_amount >= 50000000 THEN ___\n    ELSE ___\n  END AS risk_tier\nFROM players;`,
    testCases: [
      {
        input: "",
        expected: "CASE WHEN debt_amount >= 400000000 THEN 'Extreme'",
        description: "Classifies players into debt risk tiers",
      },
    ],
    concept: "CASE WHEN",
    difficulty: "advanced",
  },
  {
    id: "sg-sql-10",
    themeId: "squid-game",
    languageId: "sql",
    order: 10,
    title: "Multi-clause Query",
    themedTitle: "Final Games Survivor Report",
    narrative:
      "The Front Man needs a final comprehensive report: survivor data joined with game records, filtered to the most dangerous rounds, and summarized by game to determine how many players survived each event.",
    prompt:
      "Write a query that JOINs `players` and `games` on `current_round = games.round_number`, selects `games.game_name`, `COUNT(*) AS survivors`, and `AVG(players.debt_amount) AS avg_debt`, filters to `players.status = 'alive'`, groups by `games.game_name`, and orders by `survivors` descending.",
    hint: "Chain INNER JOIN ... WHERE status = 'alive' GROUP BY games.game_name ORDER BY survivors DESC.",
    solution: `SELECT\n  games.game_name,\n  COUNT(*) AS survivors,\n  AVG(players.debt_amount) AS avg_debt\nFROM players\nINNER JOIN games ON players.current_round = games.round_number\nWHERE players.status = 'alive'\nGROUP BY games.game_name\nORDER BY survivors DESC;`,
    starterCode: `-- Final Games Survivor Report\n-- Join, filter, group, and rank game survivor data\n\nSELECT\n  games.game_name,\n  COUNT(*) AS survivors,\n  AVG(players.debt_amount) AS avg_debt\nFROM players\nINNER JOIN games ON ___\nWHERE players.status = 'alive'\nGROUP BY ___\nORDER BY survivors DESC;`,
    testCases: [
      {
        input: "",
        expected: "INNER JOIN games ON players.current_round = games.round_number",
        description: "Multi-clause query combining JOIN, WHERE, GROUP BY, ORDER BY",
      },
    ],
    concept: "Multi-clause Query",
    difficulty: "advanced",
  },
];
