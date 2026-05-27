import type { Challenge } from "@/types";

export const squidGamePythonChallenges: Challenge[] = [
  {
    id: "sg-py-01",
    themeId: "squid-game",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "Player 456 Registration",
    narrative:
      "Gi-hun stares at the card in his hand — a salesman's number and a strange symbol. Against all reason, he dials. Now he stands on a ferry heading toward an unknown island, registered as Player 456. Every contestant needs a record.",
    prompt:
      "Create three variables: `player_name` (a string, set it to `\"Gi-hun\"`), `player_number` (an integer, set it to `456`), and `still_alive` (a boolean — set it to `True`). Then print all three.",
    hint: "In Python, strings use quotes, integers are just numbers, and booleans are `True` or `False` (capital first letter!).",
    solution: `player_name = "Gi-hun"\nplayer_number = 456\nstill_alive = True\nprint(player_name)\nprint(player_number)\nprint(still_alive)`,
    starterCode: `# Player 456 Registration\n# Create the three variables below, then print them\n\nplayer_name = ___\nplayer_number = ___\nstill_alive = ___\n\nprint(player_name)\nprint(player_number)\nprint(still_alive)`,
    testCases: [
      { input: "", expected: "Gi-hun\n456\nTrue", description: "Prints player name, number, and survival status" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "sg-py-02",
    themeId: "squid-game",
    languageId: "python",
    order: 2,
    title: "Lists",
    themedTitle: "The Surviving Players",
    narrative:
      "After Red Light, Green Light, the Front Man reviews the roster. Only a fraction of the 456 players made it to the next round. The guards are updating the active players list — one name has been added after a last-second ruling.",
    prompt:
      "Create a list called `survivors` with the values `[\"Gi-hun\", \"Sang-woo\", \"Sae-byeok\"]`. Then append `\"Ali\"` to the list. Print the last element and the total length of the list.",
    hint: "Use `list.append(value)` to add an item to the end. To get the last element, use index `-1` — Python lets you count from the back!",
    solution: `survivors = ["Gi-hun", "Sang-woo", "Sae-byeok"]\nsurvivors.append("Ali")\nprint(survivors[-1])\nprint(len(survivors))`,
    starterCode: `# The Surviving Players\n# Create the list, add a player, then print the last element and length\n\nsurvivors = ___\nsurvivors.___(___)\n\nprint(survivors[___])\nprint(___(survivors))`,
    testCases: [
      { input: "", expected: "Ali\n4", description: "Prints the newest survivor (Ali) and total count (4)" },
    ],
    concept: "Lists",
    difficulty: "beginner",
  },
  {
    id: "sg-py-03",
    themeId: "squid-game",
    languageId: "python",
    order: 3,
    title: "Dictionaries",
    themedTitle: "Guard Assignments",
    narrative:
      "The pink guards are organized by their mask shapes — circle, triangle, and square. Each rank has a different number of guards assigned across the island. The Front Man needs a quick lookup to deploy them efficiently.",
    prompt:
      "Create a dictionary called `guard_counts` with three entries: `\"Circle\": 50`, `\"Triangle\": 30`, and `\"Square\": 10`. Then print the value for `\"Circle\"` and the value for `\"Square\"`.",
    hint: "Access a dictionary value with `dict[\"key\"]`. Keys are case-sensitive — capitalize the first letter of each rank name.",
    solution: `guard_counts = {\n    "Circle": 50,\n    "Triangle": 30,\n    "Square": 10\n}\n\nprint(guard_counts["Circle"])\nprint(guard_counts["Square"])`,
    starterCode: `# Guard Assignments\n# Create the dictionary, then print two values\n\nguard_counts = {\n    "Circle": ___,\n    "Triangle": ___,\n    "Square": ___\n}\n\nprint(guard_counts[___])\nprint(guard_counts[___])`,
    testCases: [
      { input: "", expected: "50\n10", description: "Prints the Circle guard count (50) and Square guard count (10)" },
    ],
    concept: "Dictionaries",
    difficulty: "beginner",
  },
  {
    id: "sg-py-04",
    themeId: "squid-game",
    languageId: "python",
    order: 4,
    title: "Functions",
    themedTitle: "The Prize Pool",
    narrative:
      "Each player eliminated adds 100 million won to the prize pool. Oh Il-nam, Player 001, watches from the shadows as the piggy bank fills. Write a function to calculate the total prize and assess whether it's worth playing for.",
    prompt:
      "Write a function called `prize_status(eliminated)` that takes the number of eliminated players and returns:\n- `\"Not worth it\"` if eliminated is below 100\n- `\"Getting interesting\"` if eliminated is 100–299\n- `\"Life-changing money\"` if eliminated is 300 or above",
    hint: "Use `if`, `elif`, and `else` to handle the three cases. Make sure to `return` the string result, not `print` it.",
    solution: `def prize_status(eliminated):\n    if eliminated < 100:\n        return "Not worth it"\n    elif eliminated < 300:\n        return "Getting interesting"\n    else:\n        return "Life-changing money"\n\nprint(prize_status(50))    # Not worth it\nprint(prize_status(200))   # Getting interesting\nprint(prize_status(400))   # Life-changing money`,
    starterCode: `def prize_status(eliminated):\n    # Return "Not worth it" if below 100\n    # Return "Getting interesting" if 100-299\n    # Return "Life-changing money" if 300+\n    pass\n\nprint(prize_status(50))    # Not worth it\nprint(prize_status(200))   # Getting interesting\nprint(prize_status(400))   # Life-changing money`,
    testCases: [
      { input: "50", expected: "Not worth it", description: "Few eliminations mean a small prize" },
      { input: "200", expected: "Getting interesting", description: "Mid eliminations grow the pot" },
      { input: "400", expected: "Life-changing money", description: "High eliminations mean a massive prize" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "sg-py-05",
    themeId: "squid-game",
    languageId: "python",
    order: 5,
    title: "Loops",
    themedTitle: "Counting the Fallen",
    narrative:
      "After each brutal game, the Front Man reviews the elimination data. Sae-byeok watches the tally silently, calculating her odds. The numbers from each round must be summed to know how many players have been eliminated in total.",
    prompt:
      "Write a function called `total_eliminated(rounds)` that takes a list of integers (eliminations per round). Use a `for` loop to add up all the values and return the total.",
    hint: "Start with a `total` variable set to `0` before the loop. Inside the loop, add each round's count to the total with `total += round_count`. Return `total` after the loop ends.",
    solution: `def total_eliminated(rounds):\n    total = 0\n    for round_count in rounds:\n        total += round_count\n    return total\n\nprint(total_eliminated([201, 30, 45, 54]))   # 330\nprint(total_eliminated([100, 50, 25]))        # 175`,
    starterCode: `def total_eliminated(rounds):\n    total = ___\n    for ___ in rounds:\n        total += ___\n    return total\n\nprint(total_eliminated([201, 30, 45, 54]))   # Should print 330\nprint(total_eliminated([100, 50, 25]))        # Should print 175`,
    testCases: [
      { input: "[201, 30, 45, 54]", expected: "330", description: "Sums four rounds of eliminations to 330" },
      { input: "[100, 50, 25]", expected: "175", description: "Sums three rounds of eliminations to 175" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
  {
    id: "sg-py-06",
    themeId: "squid-game",
    languageId: "python",
    order: 6,
    title: "String Methods",
    themedTitle: "The Front Man's Broadcast",
    narrative:
      "Every announcement to the players is broadcast through the facility's intercom. The Front Man reviews each message before it goes out — it must be stripped of errors, presented in all caps, and properly reference the game rather than the players by name.",
    prompt:
      "Write a function called `broadcast(message)` that:\n1. Strips whitespace with `.strip()`\n2. Converts to uppercase with `.upper()`\n3. Replaces `\"PLAYER\"` with `\"CONTESTANT\"` using `.replace()`\nReturn the result. Test with `broadcast(\"  player 456 has been eliminated  \")`.",
    hint: "Chain `.strip().upper().replace(\"PLAYER\", \"CONTESTANT\")` on the input string.",
    solution: `def broadcast(message):\n    return message.strip().upper().replace("PLAYER", "CONTESTANT")\n\nprint(broadcast("  player 456 has been eliminated  "))`,
    starterCode: `# The Front Man's Broadcast\n\ndef broadcast(message):\n    return message.strip().upper().replace(___, ___)\n\nprint(broadcast("  player 456 has been eliminated  "))  # CONTESTANT 456 HAS BEEN ELIMINATED`,
    testCases: [
      { input: "  player 456 has been eliminated  ", expected: "CONTESTANT 456 HAS BEEN ELIMINATED", description: "Stripped, uppercased, player replaced with contestant" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sg-py-07",
    themeId: "squid-game",
    languageId: "python",
    order: 7,
    title: "List Comprehension",
    themedTitle: "Survivors of Red Light, Green Light",
    narrative:
      "After Red Light, Green Light, the Front Man reviews the survival data. Only players who completed the course in under 60 seconds are eligible to advance. Gi-hun is watching the timer obsessively from the finish line.",
    prompt:
      "Use a list comprehension to create `fast_survivors` from `times = [45, 72, 38, 61, 55, 80, 42, 59, 91, 48]` (seconds) that contains only values less than `60`. Print the result.",
    hint: "List comprehension: `[x for x in times if x < 60]`.",
    solution: `times = [45, 72, 38, 61, 55, 80, 42, 59, 91, 48]\nfast_survivors = [x for x in times if x < 60]\nprint(fast_survivors)`,
    starterCode: `# Survivors of Red Light, Green Light\n\ntimes = [45, 72, 38, 61, 55, 80, 42, 59, 91, 48]\nfast_survivors = [___ for ___ in times if ___ < 60]\nprint(fast_survivors)`,
    testCases: [
      { input: "", expected: "[45, 38, 55, 42, 59, 48]", description: "Times under 60 seconds" },
    ],
    concept: "List Comprehension",
    difficulty: "intermediate",
  },
  {
    id: "sg-py-08",
    themeId: "squid-game",
    languageId: "python",
    order: 8,
    title: "Nested Data Structures",
    themedTitle: "The Player Dossiers",
    narrative:
      "The VIPs receive a full dossier on each player before every game. Each player's file is a dictionary with their number, name, and current status. The Front Man needs to look up Player 067's current status.",
    prompt:
      "Given:\n`players = [{\"number\": 456, \"name\": \"Gi-hun\", \"status\": \"alive\"}, {\"number\": 218, \"name\": \"Sang-woo\", \"status\": \"alive\"}, {\"number\": 67, \"name\": \"Sae-byeok\", \"status\": \"alive\"}]`\nWrite a function `get_status(players, number)` that returns the `status` for the player with the matching `number`. Test with `get_status(players, 67)`.",
    hint: "Loop through the list and check `p[\"number\"] == number`, then return `p[\"status\"]`.",
    solution: `players = [\n    {"number": 456, "name": "Gi-hun", "status": "alive"},\n    {"number": 218, "name": "Sang-woo", "status": "alive"},\n    {"number": 67, "name": "Sae-byeok", "status": "alive"}\n]\n\ndef get_status(players, number):\n    for p in players:\n        if p["number"] == number:\n            return p["status"]\n\nprint(get_status(players, 67))`,
    starterCode: `# The Player Dossiers\n\nplayers = [\n    {"number": 456, "name": "Gi-hun", "status": "alive"},\n    {"number": 218, "name": "Sang-woo", "status": "alive"},\n    {"number": 67, "name": "Sae-byeok", "status": "alive"}\n]\n\ndef get_status(players, number):\n    for p in players:\n        if p[___] == number:\n            return p[___]\n\nprint(get_status(players, 67))  # Should print: alive`,
    testCases: [
      { input: "67", expected: "alive", description: "Player 067's status" },
    ],
    concept: "Nested Data Structures",
    difficulty: "intermediate",
  },
  {
    id: "sg-py-09",
    themeId: "squid-game",
    languageId: "python",
    order: 9,
    title: "Sorting",
    themedTitle: "The Dalgona Leaderboard",
    narrative:
      "The honeycomb challenge ranks players by how quickly they completed their dalgona shape. The Front Man reviews the leaderboard from fastest to slowest — the slowest player is eliminated last, which is somehow more terrifying.",
    prompt:
      "Sort `results = [{\"player\": 456, \"time\": 312}, {\"player\": 218, \"time\": 245}, {\"player\": 101, \"time\": 389}, {\"player\": 67, \"time\": 198}]` by `\"time\"` in ascending order. Print each player number and time.",
    hint: "Use `sorted(results, key=lambda x: x[\"time\"])` — ascending is the default (no `reverse=True` needed).",
    solution: `results = [\n    {"player": 456, "time": 312},\n    {"player": 218, "time": 245},\n    {"player": 101, "time": 389},\n    {"player": 67, "time": 198}\n]\n\nranked = sorted(results, key=lambda x: x["time"])\nfor r in ranked:\n    print(f"Player {r['player']}: {r['time']}s")`,
    starterCode: `# The Dalgona Leaderboard\n\nresults = [\n    {"player": 456, "time": 312},\n    {"player": 218, "time": 245},\n    {"player": 101, "time": 389},\n    {"player": 67, "time": 198}\n]\n\nranked = sorted(results, key=lambda x: x[___])\nfor r in ranked:\n    print(f"Player {r['player']}: {r['time']}s")`,
    testCases: [
      { input: "", expected: "Player 67: 198s\nPlayer 218: 245s\nPlayer 456: 312s\nPlayer 101: 389s", description: "Players sorted by completion time ascending" },
    ],
    concept: "Sorting",
    difficulty: "advanced",
  },
  {
    id: "sg-py-10",
    themeId: "squid-game",
    languageId: "python",
    order: 10,
    title: "Exception Handling",
    themedTitle: "The Glass Bridge Error",
    narrative:
      "The glass bridge game requires players to step on the correct panel. The panel system validates codes — but sometimes players input gibberish out of panic. The system must handle bad input without shutting down the entire bridge.",
    prompt:
      "Write a function `choose_panel(panel)` that tries to convert `panel` to an integer. If it's `1` or `2`, return `f\"Panel {panel} chosen — stepping forward\"`. If out of range, return `\"Invalid panel — only 1 or 2 exist\"`. If a `ValueError` occurs, return `\"Panel code unreadable — step carefully\"`.\nTest with `choose_panel(\"1\")`, `choose_panel(\"5\")`, and `choose_panel(\"left\")`.",
    hint: "Use `try/except ValueError`. Inside `try`, convert to int, then check `if num in [1, 2]`.",
    solution: `def choose_panel(panel):\n    try:\n        num = int(panel)\n        if num in [1, 2]:\n            return f"Panel {panel} chosen — stepping forward"\n        else:\n            return "Invalid panel — only 1 or 2 exist"\n    except ValueError:\n        return "Panel code unreadable — step carefully"\n\nprint(choose_panel("1"))\nprint(choose_panel("5"))\nprint(choose_panel("left"))`,
    starterCode: `# The Glass Bridge Error\n\ndef choose_panel(panel):\n    try:\n        num = int(panel)\n        if num in [1, 2]:\n            return f"Panel {panel} chosen — stepping forward"\n        else:\n            return "Invalid panel — only 1 or 2 exist"\n    except ___:\n        return "Panel code unreadable — step carefully"\n\nprint(choose_panel("1"))     # Panel 1 chosen — stepping forward\nprint(choose_panel("5"))     # Invalid panel — only 1 or 2 exist\nprint(choose_panel("left"))  # Panel code unreadable — step carefully`,
    testCases: [
      { input: "1", expected: "Panel 1 chosen — stepping forward", description: "Valid panel choice" },
      { input: "5", expected: "Invalid panel — only 1 or 2 exist", description: "Out-of-range panel is rejected" },
      { input: "left", expected: "Panel code unreadable — step carefully", description: "Non-numeric input is caught" },
    ],
    concept: "Exception Handling",
    difficulty: "advanced",
  },
];
