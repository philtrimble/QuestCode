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
];
