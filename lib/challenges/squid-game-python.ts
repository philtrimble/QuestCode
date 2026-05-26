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
];
