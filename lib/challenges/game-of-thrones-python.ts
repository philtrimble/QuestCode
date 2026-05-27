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
  {
    id: "got-py-06",
    themeId: "game-of-thrones",
    languageId: "python",
    order: 6,
    title: "String Methods",
    themedTitle: "Cersei's Royal Proclamation",
    narrative:
      "Queen Cersei's proclamations must be presented with absolute authority. Any message received from the Small Council arrives in sloppy form — it must be formatted to befit the Crown before being read aloud in the throne room.",
    prompt:
      "Write a function called `royal_proclamation(text)` that:\n1. Strips whitespace with `.strip()`\n2. Converts to uppercase with `.upper()`\n3. Replaces `\"REQUEST\"` with `\"ROYAL DECREE\"` using `.replace()`\nReturn the result. Test with `royal_proclamation(\"  a request from house stark  \")`.",
    hint: "Chain `.strip().upper().replace(\"REQUEST\", \"ROYAL DECREE\")` on the input string.",
    solution: `def royal_proclamation(text):\n    return text.strip().upper().replace("REQUEST", "ROYAL DECREE")\n\nprint(royal_proclamation("  a request from house stark  "))`,
    starterCode: `# Cersei's Royal Proclamation\n\ndef royal_proclamation(text):\n    return text.strip().upper().replace(___, ___)\n\nprint(royal_proclamation("  a request from house stark  "))  # A ROYAL DECREE FROM HOUSE STARK`,
    testCases: [
      { input: "  a request from house stark  ", expected: "A ROYAL DECREE FROM HOUSE STARK", description: "Stripped, uppercased, and upgraded from request to decree" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "got-py-07",
    themeId: "game-of-thrones",
    languageId: "python",
    order: 7,
    title: "List Comprehension",
    themedTitle: "Daenerys's Worthy Dragons",
    narrative:
      "Daenerys needs to identify which of her dragons are battle-ready. A dragon is considered battle-ready if its fire strength rating is above 70. She's bringing only the strong ones to the Great War against the Night King.",
    prompt:
      "Use a list comprehension to create `battle_ready` from `fire_strength = [85, 40, 92, 65, 78, 30, 88]` that contains only values greater than `70`. Print the result.",
    hint: "List comprehension: `[x for x in fire_strength if x > 70]`.",
    solution: `fire_strength = [85, 40, 92, 65, 78, 30, 88]\nbattle_ready = [x for x in fire_strength if x > 70]\nprint(battle_ready)`,
    starterCode: `# Daenerys's Worthy Dragons\n\nfire_strength = [85, 40, 92, 65, 78, 30, 88]\nbattle_ready = [___ for ___ in fire_strength if ___ > 70]\nprint(battle_ready)`,
    testCases: [
      { input: "", expected: "[85, 92, 78, 88]", description: "Fire strength ratings above 70" },
    ],
    concept: "List Comprehension",
    difficulty: "intermediate",
  },
  {
    id: "got-py-08",
    themeId: "game-of-thrones",
    languageId: "python",
    order: 8,
    title: "Nested Data Structures",
    themedTitle: "The Great Houses Register",
    narrative:
      "The Grand Maester keeps a register of the Great Houses — each one a dictionary listing their words, sigil, and sworn swords. Tyrion needs to look up a house's sigil quickly during a Small Council debate.",
    prompt:
      "Given:\n`houses = [{\"name\": \"Stark\", \"sigil\": \"Direwolf\", \"words\": \"Winter Is Coming\"}, {\"name\": \"Lannister\", \"sigil\": \"Lion\", \"words\": \"Hear Me Roar\"}, {\"name\": \"Targaryen\", \"sigil\": \"Dragon\", \"words\": \"Fire and Blood\"}]`\nWrite a function `get_sigil(houses, house_name)` that returns the `sigil` for the matching house. Test with `get_sigil(houses, \"Targaryen\")`.",
    hint: "Loop through the list. For each dict, check `h[\"name\"] == house_name` and return `h[\"sigil\"]`.",
    solution: `houses = [\n    {"name": "Stark", "sigil": "Direwolf", "words": "Winter Is Coming"},\n    {"name": "Lannister", "sigil": "Lion", "words": "Hear Me Roar"},\n    {"name": "Targaryen", "sigil": "Dragon", "words": "Fire and Blood"}\n]\n\ndef get_sigil(houses, house_name):\n    for h in houses:\n        if h["name"] == house_name:\n            return h["sigil"]\n\nprint(get_sigil(houses, "Targaryen"))`,
    starterCode: `# The Great Houses Register\n\nhouses = [\n    {"name": "Stark", "sigil": "Direwolf", "words": "Winter Is Coming"},\n    {"name": "Lannister", "sigil": "Lion", "words": "Hear Me Roar"},\n    {"name": "Targaryen", "sigil": "Dragon", "words": "Fire and Blood"}\n]\n\ndef get_sigil(houses, house_name):\n    for h in houses:\n        if h[___] == house_name:\n            return h[___]\n\nprint(get_sigil(houses, "Targaryen"))  # Should print: Dragon`,
    testCases: [
      { input: "Targaryen", expected: "Dragon", description: "Returns the Targaryen sigil" },
    ],
    concept: "Nested Data Structures",
    difficulty: "intermediate",
  },
  {
    id: "got-py-09",
    themeId: "game-of-thrones",
    languageId: "python",
    order: 9,
    title: "Sorting",
    themedTitle: "The Battle for the Iron Throne",
    narrative:
      "The small council is ranking the claimants to the Iron Throne by the size of their armies. Tyrion must present the list from most powerful to least — knowing Cersei will have someone beheaded for how the list comes out.",
    prompt:
      "Sort `claimants = [{\"name\": \"Cersei\", \"army\": 20000}, {\"name\": \"Daenerys\", \"army\": 100000}, {\"name\": \"Stannis\", \"army\": 15000}, {\"name\": \"Jon\", \"army\": 30000}]` by `\"army\"` in descending order. Print each claimant's name and army size.",
    hint: "Use `sorted(claimants, key=lambda x: x[\"army\"], reverse=True)`.",
    solution: `claimants = [\n    {"name": "Cersei", "army": 20000},\n    {"name": "Daenerys", "army": 100000},\n    {"name": "Stannis", "army": 15000},\n    {"name": "Jon", "army": 30000}\n]\n\nranked = sorted(claimants, key=lambda x: x["army"], reverse=True)\nfor c in ranked:\n    print(f"{c['name']}: {c['army']}")`,
    starterCode: `# The Battle for the Iron Throne\n\nclaimants = [\n    {"name": "Cersei", "army": 20000},\n    {"name": "Daenerys", "army": 100000},\n    {"name": "Stannis", "army": 15000},\n    {"name": "Jon", "army": 30000}\n]\n\nranked = sorted(claimants, key=lambda x: x[___], reverse=True)\nfor c in ranked:\n    print(f"{c['name']}: {c['army']}")`,
    testCases: [
      { input: "", expected: "Daenerys: 100000\nJon: 30000\nCersei: 20000\nStannis: 15000", description: "Claimants sorted by army size descending" },
    ],
    concept: "Sorting",
    difficulty: "advanced",
  },
  {
    id: "got-py-10",
    themeId: "game-of-thrones",
    languageId: "python",
    order: 10,
    title: "Exception Handling",
    themedTitle: "The Raven Message Decoder",
    narrative:
      "Ravens sometimes arrive with damaged scrolls — the message can't always be decoded. Sam Tarly has been tasked with converting the numeric codes in raven messages to text. When a code is invalid, the system must not crash the Citadel's archive.",
    prompt:
      "Write a function `decode_raven(code)` that tries to convert `code` to an integer and returns `f\"Message decoded: code {code}\"`.\nIf a `ValueError` is raised (non-numeric code), return `\"Corrupted scroll — message lost\"`.\nTest with `decode_raven(\"42\")` and `decode_raven(\"VII\")`.",
    hint: "Use `try/except ValueError`. Return the decoded message in the `try` block and the error message in the `except` block.",
    solution: `def decode_raven(code):\n    try:\n        int(code)\n        return f"Message decoded: code {code}"\n    except ValueError:\n        return "Corrupted scroll — message lost"\n\nprint(decode_raven("42"))\nprint(decode_raven("VII"))`,
    starterCode: `# The Raven Message Decoder\n\ndef decode_raven(code):\n    try:\n        int(code)\n        return f"Message decoded: code {code}"\n    except ___:\n        return "Corrupted scroll — message lost"\n\nprint(decode_raven("42"))   # Message decoded: code 42\nprint(decode_raven("VII"))  # Corrupted scroll — message lost`,
    testCases: [
      { input: "42", expected: "Message decoded: code 42", description: "Valid code decodes successfully" },
      { input: "VII", expected: "Corrupted scroll — message lost", description: "Roman numerals are not valid codes" },
    ],
    concept: "Exception Handling",
    difficulty: "advanced",
  },
];
