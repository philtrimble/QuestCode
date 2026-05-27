import type { Challenge } from "@/types";

export const rickAndMortyPythonChallenges: Challenge[] = [
  {
    id: "rm-py-01",
    themeId: "rick-and-morty",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "Szechuan Sauce Inventory",
    narrative:
      "Rick Sanchez has acquired a finite supply of McDonald's Szechuan sauce from 1998. He's obsessed. He needs you to track his inventory before he goes on another interdimensional rant about it.",
    prompt:
      "Create three variables: `sauce_name` (set to `\"Szechuan\"`), `packets_remaining` (set to `97`), and `worth_it` (a boolean set to `True`). Print all three.",
    hint: "Strings use quotes, integers are plain numbers, and booleans are `True` or `False` (capital first letter).",
    solution: `sauce_name = "Szechuan"\npackets_remaining = 97\nworth_it = True\nprint(sauce_name)\nprint(packets_remaining)\nprint(worth_it)`,
    starterCode: `# Szechuan Sauce Inventory\n# Create the three variables and print them\n\nsauce_name = ___\npackets_remaining = ___\nworth_it = ___\n\nprint(sauce_name)\nprint(packets_remaining)\nprint(worth_it)`,
    testCases: [
      { input: "", expected: "Szechuan\n97\nTrue", description: "Prints sauce details" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "rm-py-02",
    themeId: "rick-and-morty",
    languageId: "python",
    order: 2,
    title: "Lists",
    themedTitle: "Interdimensional Cable Channels",
    narrative:
      "Interdimensional cable has infinite channels — but Rick's remote is broken and can only hold a few. He needs you to manage a list of his favorite channels before Jerry accidentally deletes them all.",
    prompt:
      "Create a list called `channels` with `\"Ants in My Eyes Johnson\"`, `\"Ball Fondlers\"`, and `\"How They Do It\"`. Append `\"Two Brothers\"` to the list. Then print the channel at index `1`.",
    hint: "Use `list.append(value)` to add to the end. Access by index with `list[1]`.",
    solution: `channels = ["Ants in My Eyes Johnson", "Ball Fondlers", "How They Do It"]\nchannels.append("Two Brothers")\nprint(channels[1])`,
    starterCode: `# Interdimensional Cable Channels\n# Create the list, add the new channel, then print the channel at index 1\n\nchannels = [___]\nchannels.append(___)\nprint(channels[___])`,
    testCases: [
      { input: "", expected: "Ball Fondlers", description: "Channel at index 1" },
    ],
    concept: "Lists",
    difficulty: "beginner",
  },
  {
    id: "rm-py-03",
    themeId: "rick-and-morty",
    languageId: "python",
    order: 3,
    title: "Functions",
    themedTitle: "Portal Gun Calibration",
    narrative:
      "Rick's portal gun needs recalibrating. The portal color is determined by the frequency of the dimension wave. Write a function to determine the portal color based on frequency — Rick's life depends on it. Well, Morty's does.",
    prompt:
      "Write a function called `portal_color` that takes a `frequency` argument. Return `\"green\"` if frequency is between `1` and `50` (inclusive), `\"blue\"` if between `51` and `100`, or `\"orange\"` if above `100`. Test with frequencies `25`, `75`, and `150`.",
    hint: "Use `if`, `elif`, and `else`. For ranges, use `1 <= frequency <= 50` syntax.",
    solution: `def portal_color(frequency):\n    if 1 <= frequency <= 50:\n        return "green"\n    elif 51 <= frequency <= 100:\n        return "blue"\n    else:\n        return "orange"\n\nprint(portal_color(25))\nprint(portal_color(75))\nprint(portal_color(150))`,
    starterCode: `# Portal Gun Calibration\n# Write a function that returns the portal color based on frequency\n\ndef portal_color(frequency):\n    # 1-50: green, 51-100: blue, above 100: orange\n    pass\n\nprint(portal_color(25))   # Should print: green\nprint(portal_color(75))   # Should print: blue\nprint(portal_color(150))  # Should print: orange`,
    testCases: [
      { input: "25", expected: "green", description: "Low frequency = green" },
      { input: "75", expected: "blue", description: "Mid frequency = blue" },
      { input: "150", expected: "orange", description: "High frequency = orange" },
    ],
    concept: "Functions & Conditionals",
    difficulty: "beginner",
  },
  {
    id: "rm-py-04",
    themeId: "rick-and-morty",
    languageId: "python",
    order: 4,
    title: "Loops",
    themedTitle: "Council of Ricks",
    narrative:
      "The Council of Ricks has summoned representatives from across dimensions. Each Rick has a different IQ score. Rick Prime wants to know how many Ricks have an IQ above the average — because he's the best Rick, obviously.",
    prompt:
      "Write a function called `above_average_ricks` that takes a list of IQ scores and returns the count of scores that are strictly above the average. Test with `above_average_ricks([180, 190, 205, 175, 220, 188])`.",
    hint: "Calculate the average with `sum(scores) / len(scores)`, then loop through and count how many are above it.",
    solution: `def above_average_ricks(scores):\n    avg = sum(scores) / len(scores)\n    count = 0\n    for score in scores:\n        if score > avg:\n            count += 1\n    return count\n\nprint(above_average_ricks([180, 190, 205, 175, 220, 188]))`,
    starterCode: `# Council of Ricks\n# Count how many IQ scores are above the average\n\ndef above_average_ricks(scores):\n    avg = sum(scores) / len(scores)\n    count = 0\n    for score in scores:\n        if score > avg:\n            count += 1\n    return count\n\nprint(above_average_ricks([180, 190, 205, 175, 220, 188]))  # Should print: 3`,
    testCases: [
      { input: "[180, 190, 205, 175, 220, 188]", expected: "3", description: "3 Ricks above average IQ" },
    ],
    concept: "Loops & Averages",
    difficulty: "intermediate",
  },
  {
    id: "rm-py-05",
    themeId: "rick-and-morty",
    languageId: "python",
    order: 5,
    title: "Dictionaries",
    themedTitle: "Morty's Adventure Log",
    narrative:
      "Morty has been keeping a log of every adventure he's been dragged into. He needs to find which adventure caused him the most trauma points. Summer says this whole thing is stupid, but she's secretly impressed.",
    prompt:
      "Write a function called `most_traumatic` that takes a dictionary where keys are adventure names and values are trauma points, and returns the name of the adventure with the highest trauma points. Test with `most_traumatic({\"Cronenbergs\": 95, \"Purge Planet\": 88, \"Blips and Chitz\": 42, \"Froopyland\": 71})`.",
    hint: "Use `max(dictionary, key=dictionary.get)` to find the key with the highest value.",
    solution: `def most_traumatic(log):\n    return max(log, key=log.get)\n\nprint(most_traumatic({"Cronenbergs": 95, "Purge Planet": 88, "Blips and Chitz": 42, "Froopyland": 71}))`,
    starterCode: `# Morty's Adventure Log\n# Return the adventure name with the highest trauma points\n\ndef most_traumatic(log):\n    return max(log, key=log.get)\n\nprint(most_traumatic({"Cronenbergs": 95, "Purge Planet": 88, "Blips and Chitz": 42, "Froopyland": 71}))\n# Should print: Cronenbergs`,
    testCases: [
      { input: "Cronenbergs: 95", expected: "Cronenbergs", description: "Highest trauma adventure" },
    ],
    concept: "Dictionaries",
    difficulty: "intermediate",
  },
  {
    id: "rm-py-06",
    themeId: "rick-and-morty",
    languageId: "python",
    order: 6,
    title: "String Methods",
    themedTitle: "Rick's Burp-Translator",
    narrative:
      "Rick's speech is full of burps, stutters, and random capitalization. Morty has built a burp-translator to clean up Rick's transmissions before Beth hears them. It strips the noise, lowers everything to readable case, and replaces 'Morty' with his full name.",
    prompt:
      "Write a function called `clean_rick(text)` that:\n1. Strips whitespace with `.strip()`\n2. Converts to lowercase with `.lower()`\n3. Replaces `\"morty\"` with `\"Morty Smith\"` using `.replace()`\nReturn the result. Test with `clean_rick(\"  MORTY get in the ship MORTY  \")`.",
    hint: "Chain `.strip().lower().replace(\"morty\", \"Morty Smith\")` on the input string.",
    solution: `def clean_rick(text):\n    return text.strip().lower().replace("morty", "Morty Smith")\n\nprint(clean_rick("  MORTY get in the ship MORTY  "))`,
    starterCode: `# Rick's Burp-Translator\n\ndef clean_rick(text):\n    return text.strip().lower().replace(___, ___)\n\nprint(clean_rick("  MORTY get in the ship MORTY  "))  # morty smith get in the ship morty smith`,
    testCases: [
      { input: "  MORTY get in the ship MORTY  ", expected: "morty smith get in the ship morty smith", description: "Stripped, lowercased, Morty replaced with full name" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "rm-py-07",
    themeId: "rick-and-morty",
    languageId: "python",
    order: 7,
    title: "List Comprehension",
    themedTitle: "Citadel of Ricks IQ Filter",
    narrative:
      "The Citadel of Ricks only admits Ricks with an IQ over 200. Rick Prime is reviewing the interdimensional applications. Any Rick below the threshold gets rejected — probably to become a Jerry.",
    prompt:
      "Use a list comprehension to create `qualified_ricks` from `iq_scores = [180, 210, 195, 225, 205, 175, 230, 190]` that contains only values greater than `200`. Print the result.",
    hint: "List comprehension: `[x for x in iq_scores if x > 200]`.",
    solution: `iq_scores = [180, 210, 195, 225, 205, 175, 230, 190]\nqualified_ricks = [x for x in iq_scores if x > 200]\nprint(qualified_ricks)`,
    starterCode: `# Citadel of Ricks IQ Filter\n\niq_scores = [180, 210, 195, 225, 205, 175, 230, 190]\nqualified_ricks = [___ for ___ in iq_scores if ___ > 200]\nprint(qualified_ricks)`,
    testCases: [
      { input: "", expected: "[210, 225, 205, 230]", description: "IQ scores above 200" },
    ],
    concept: "List Comprehension",
    difficulty: "intermediate",
  },
  {
    id: "rm-py-08",
    themeId: "rick-and-morty",
    languageId: "python",
    order: 8,
    title: "Nested Data Structures",
    themedTitle: "The Interdimensional Passport Log",
    narrative:
      "Rick keeps a log of every dimension he's visited — each entry is a dictionary with the dimension ID, a description, and whether it was destroyed. Summer is trying to find out which dimension has the best slushy.",
    prompt:
      "Given:\n`dimensions = [{\"id\": \"C-137\", \"desc\": \"Prime dimension\", \"destroyed\": False}, {\"id\": \"J-19\", \"desc\": \"Cronenberg world\", \"destroyed\": True}, {\"id\": \"K-83\", \"desc\": \"Slushy dimension\", \"destroyed\": False}]`\nWrite a function `get_desc(dimensions, dim_id)` that returns the `desc` for the matching dimension. Test with `get_desc(dimensions, \"K-83\")`.",
    hint: "Loop through the list and check `d[\"id\"] == dim_id`, then return `d[\"desc\"]`.",
    solution: `dimensions = [\n    {"id": "C-137", "desc": "Prime dimension", "destroyed": False},\n    {"id": "J-19", "desc": "Cronenberg world", "destroyed": True},\n    {"id": "K-83", "desc": "Slushy dimension", "destroyed": False}\n]\n\ndef get_desc(dimensions, dim_id):\n    for d in dimensions:\n        if d["id"] == dim_id:\n            return d["desc"]\n\nprint(get_desc(dimensions, "K-83"))`,
    starterCode: `# The Interdimensional Passport Log\n\ndimensions = [\n    {"id": "C-137", "desc": "Prime dimension", "destroyed": False},\n    {"id": "J-19", "desc": "Cronenberg world", "destroyed": True},\n    {"id": "K-83", "desc": "Slushy dimension", "destroyed": False}\n]\n\ndef get_desc(dimensions, dim_id):\n    for d in dimensions:\n        if d[___] == dim_id:\n            return d[___]\n\nprint(get_desc(dimensions, "K-83"))  # Should print: Slushy dimension`,
    testCases: [
      { input: "K-83", expected: "Slushy dimension", description: "Returns the description for dimension K-83" },
    ],
    concept: "Nested Data Structures",
    difficulty: "intermediate",
  },
  {
    id: "rm-py-09",
    themeId: "rick-and-morty",
    languageId: "python",
    order: 9,
    title: "Sorting",
    themedTitle: "Ranking the Ricks",
    narrative:
      "The Citadel of Ricks holds annual rankings. Every Rick is scored on their smartness quotient. Rick C-137 insists on seeing the full ranked list — not because he cares, but because he already knows he's first.",
    prompt:
      "Sort `ricks = [{\"id\": \"C-137\", \"iq\": 230}, {\"id\": \"D-716\", \"iq\": 205}, {\"id\": \"J-22\", \"iq\": 195}, {\"id\": \"K-99\", \"iq\": 218}]` by `\"iq\"` in descending order. Print each Rick's id and IQ.",
    hint: "Use `sorted(ricks, key=lambda x: x[\"iq\"], reverse=True)`.",
    solution: `ricks = [\n    {"id": "C-137", "iq": 230},\n    {"id": "D-716", "iq": 205},\n    {"id": "J-22", "iq": 195},\n    {"id": "K-99", "iq": 218}\n]\n\nranked = sorted(ricks, key=lambda x: x["iq"], reverse=True)\nfor r in ranked:\n    print(f"{r['id']}: {r['iq']}")`,
    starterCode: `# Ranking the Ricks\n\nricks = [\n    {"id": "C-137", "iq": 230},\n    {"id": "D-716", "iq": 205},\n    {"id": "J-22", "iq": 195},\n    {"id": "K-99", "iq": 218}\n]\n\nranked = sorted(ricks, key=lambda x: x[___], reverse=True)\nfor r in ranked:\n    print(f"{r['id']}: {r['iq']}")`,
    testCases: [
      { input: "", expected: "C-137: 230\nK-99: 218\nD-716: 205\nJ-22: 195", description: "Ricks sorted by IQ descending" },
    ],
    concept: "Sorting",
    difficulty: "advanced",
  },
  {
    id: "rm-py-10",
    themeId: "rick-and-morty",
    languageId: "python",
    order: 10,
    title: "Exception Handling",
    themedTitle: "The Portal Gun Misfire",
    narrative:
      "Rick's portal gun occasionally receives invalid dimension codes — especially when Jerry accidentally grabs the remote. When an invalid code is entered, the gun must report the error without exploding. Morty is very insistent on this point.",
    prompt:
      "Write a function `dial_dimension(code)` that tries to split `code` by `\"-\"` and checks that it has exactly 2 parts. If valid, return `f\"Dialing dimension {code}\"`. If `code` is not a string or the format is wrong, return `\"Invalid dimension code — try again, Morty\"`.\nTest with `dial_dimension(\"C-137\")` and `dial_dimension(\"badcode\")`.",
    hint: "Use `try/except`. In the `try` block, use `code.split(\"-\")` and check `len(parts) == 2`. In `except`, return the error string.",
    solution: `def dial_dimension(code):\n    try:\n        parts = code.split("-")\n        if len(parts) != 2:\n            raise ValueError\n        return f"Dialing dimension {code}"\n    except (ValueError, AttributeError):\n        return "Invalid dimension code — try again, Morty"\n\nprint(dial_dimension("C-137"))\nprint(dial_dimension("badcode"))`,
    starterCode: `# The Portal Gun Misfire\n\ndef dial_dimension(code):\n    try:\n        parts = code.split("-")\n        if len(parts) != 2:\n            raise ValueError\n        return f"Dialing dimension {code}"\n    except (ValueError, AttributeError):\n        return "Invalid dimension code — try again, Morty"\n\nprint(dial_dimension("C-137"))    # Dialing dimension C-137\nprint(dial_dimension("badcode"))  # Invalid dimension code — try again, Morty`,
    testCases: [
      { input: "C-137", expected: "Dialing dimension C-137", description: "Valid dimension code dials successfully" },
      { input: "badcode", expected: "Invalid dimension code — try again, Morty", description: "Invalid format is caught gracefully" },
    ],
    concept: "Exception Handling",
    difficulty: "advanced",
  },
];
