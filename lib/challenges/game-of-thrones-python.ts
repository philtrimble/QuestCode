import type { Challenge } from "@/types";

export const gameOfThronesPythonChallenges: Challenge[] = [
  {
    id: "got-py-01",
    themeId: "game-of-thrones",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "The Night's Watch Roster",
    narrative:
      "Jon Snow stands atop the Wall, the cold wind biting at his cloak. Lord Commander Mormont needs a record of the Watch's current state — who leads, how many brothers remain, and whether the Wall still holds. The realm depends on accurate data.",
    prompt:
      "Create three variables: `commander` (a string, set it to `\"Jon Snow\"`), `brothers` (an integer, set it to `998`), and `wall_holds` (a boolean — set it to `True`). Then print all three.",
    hint: "In Python, strings use quotes, integers are just numbers, and booleans are `True` or `False` (capital first letter!).",
    solution: `commander = "Jon Snow"\nbrothers = 998\nwall_holds = True\nprint(commander)\nprint(brothers)\nprint(wall_holds)`,
    starterCode: `# The Night's Watch Roster\n# Create the three variables below, then print them\n\ncommander = ___\nbrothers = ___\nwall_holds = ___\n\nprint(commander)\nprint(brothers)\nprint(wall_holds)`,
    testCases: [
      { input: "", expected: "Jon Snow\n998\nTrue", description: "Prints the commander, brother count, and wall status" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "got-py-02",
    themeId: "game-of-thrones",
    languageId: "python",
    order: 2,
    title: "Lists",
    themedTitle: "Daenerys's Dragons",
    narrative:
      "Daenerys Targaryen, Mother of Dragons, keeps careful watch over her children. Drogon, Rhaegal, and Viserion are her greatest weapons — but a new hatchling has emerged from the volcanic plains of Essos. The list must be updated.",
    prompt:
      "Create a list called `dragons` with the values `[\"Drogon\", \"Rhaegal\", \"Viserion\"]`. Then append `\"Balerion\"` to the list. Print the first element and the total length of the list.",
    hint: "Use `list.append(value)` to add an item to the end. Access elements with `list[index]` — remember, indexing starts at 0!",
    solution: `dragons = ["Drogon", "Rhaegal", "Viserion"]\ndragons.append("Balerion")\nprint(dragons[0])\nprint(len(dragons))`,
    starterCode: `# Daenerys's Dragons\n# Create the list, add a dragon, then print the first element and length\n\ndragons = ___\ndragons.___(___)\n\nprint(dragons[___])\nprint(___(dragons))`,
    testCases: [
      { input: "", expected: "Drogon\n4", description: "Prints the first dragon (Drogon) and the new total count (4)" },
    ],
    concept: "Lists",
    difficulty: "beginner",
  },
  {
    id: "got-py-03",
    themeId: "game-of-thrones",
    languageId: "python",
    order: 3,
    title: "Dictionaries",
    themedTitle: "The Great Houses",
    narrative:
      "Tyrion Lannister drinks and knows things — including the words of every Great House in Westeros. As Hand of the Queen, he needs quick access to each house's sigil for diplomatic correspondence. A dictionary is the perfect scroll.",
    prompt:
      "Create a dictionary called `house_sigils` with three entries: `\"Stark\": \"Direwolf\"`, `\"Lannister\": \"Lion\"`, and `\"Targaryen\": \"Dragon\"`. Then print the value for `\"Stark\"` and the value for `\"Targaryen\"`.",
    hint: "Access a dictionary value with `dict[\"key\"]`. Keys are case-sensitive — make sure your strings match exactly.",
    solution: `house_sigils = {\n    "Stark": "Direwolf",\n    "Lannister": "Lion",\n    "Targaryen": "Dragon"\n}\n\nprint(house_sigils["Stark"])\nprint(house_sigils["Targaryen"])`,
    starterCode: `# The Great Houses\n# Create the dictionary, then print two values\n\nhouse_sigils = {\n    "Stark": ___,\n    "Lannister": ___,\n    "Targaryen": ___\n}\n\nprint(house_sigils[___])\nprint(house_sigils[___])`,
    testCases: [
      { input: "", expected: "Direwolf\nDragon", description: "Prints the Stark sigil (Direwolf) and Targaryen sigil (Dragon)" },
    ],
    concept: "Dictionaries",
    difficulty: "beginner",
  },
  {
    id: "got-py-04",
    themeId: "game-of-thrones",
    languageId: "python",
    order: 4,
    title: "Functions",
    themedTitle: "The Battle Outcome",
    narrative:
      "Arya Stark has a list, and she checks it twice. But even the greatest assassin needs help calculating the odds before a battle. Write a function that takes the size of two armies and determines who wins — or if the battle is too close to call.",
    prompt:
      "Write a function called `battle_outcome(our_army, their_army)` that compares two army sizes and returns:\n- `\"Victory\"` if our_army is strictly greater than their_army\n- `\"Defeat\"` if our_army is strictly less than their_army\n- `\"Stalemate\"` if they are equal",
    hint: "Use `if`, `elif`, and `else` to compare the two values. You'll need `>`, `<`, and the `else` branch for equality.",
    solution: `def battle_outcome(our_army, their_army):\n    if our_army > their_army:\n        return "Victory"\n    elif our_army < their_army:\n        return "Defeat"\n    else:\n        return "Stalemate"\n\nprint(battle_outcome(5000, 3000))   # Victory\nprint(battle_outcome(2000, 8000))   # Defeat\nprint(battle_outcome(4000, 4000))   # Stalemate`,
    starterCode: `def battle_outcome(our_army, their_army):\n    # Return "Victory" if our army is larger\n    # Return "Defeat" if their army is larger\n    # Return "Stalemate" if equal\n    pass\n\nprint(battle_outcome(5000, 3000))   # Victory\nprint(battle_outcome(2000, 8000))   # Defeat\nprint(battle_outcome(4000, 4000))   # Stalemate`,
    testCases: [
      { input: "5000, 3000", expected: "Victory", description: "Larger army wins" },
      { input: "2000, 8000", expected: "Defeat", description: "Smaller army loses" },
      { input: "4000, 4000", expected: "Stalemate", description: "Equal armies result in stalemate" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "got-py-05",
    themeId: "game-of-thrones",
    languageId: "python",
    order: 5,
    title: "Loops",
    themedTitle: "Counting Ravens",
    narrative:
      "A raven arrives at Castle Black carrying a message. Then another. Then ten more. Jon Snow needs to know how many ravens carry urgent messages — marked with the number of words over 10. Sam is too busy reading to count. Write the counter.",
    prompt:
      "Write a function called `count_urgent(messages)` that takes a list of integers (word counts per message). Use a `for` loop to count how many messages have more than 10 words. Return the total count.",
    hint: "Start with a counter variable set to `0` before the loop. Inside the loop, use an `if` statement to check if the word count is greater than 10, then increment with `count += 1`.",
    solution: `def count_urgent(messages):\n    count = 0\n    for words in messages:\n        if words > 10:\n            count += 1\n    return count\n\nprint(count_urgent([5, 12, 3, 15, 8, 11]))   # 3\nprint(count_urgent([1, 2, 3, 4, 5]))          # 0`,
    starterCode: `def count_urgent(messages):\n    count = ___\n    for ___ in messages:\n        if ___ > 10:\n            count += ___\n    return count\n\nprint(count_urgent([5, 12, 3, 15, 8, 11]))   # Should print 3\nprint(count_urgent([1, 2, 3, 4, 5]))          # Should print 0`,
    testCases: [
      { input: "[5, 12, 3, 15, 8, 11]", expected: "3", description: "Three messages have more than 10 words" },
      { input: "[1, 2, 3, 4, 5]", expected: "0", description: "No messages are urgent" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
];
