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
];
