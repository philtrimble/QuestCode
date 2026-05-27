import type { Challenge } from "@/types";

export const strangerThingsPythonChallenges: Challenge[] = [
  {
    id: "st-py-01",
    themeId: "stranger-things",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "Eleven's Powers",
    narrative:
      "Eleven has been living in Hawkins Lab for as long as she can remember. Her powers are incredible — but to track them, Hopper needs your help storing information about her abilities.",
    prompt:
      "Create three variables: `name` (her name, a string), `power_level` (an integer, set it to 11), and `can_fly` (a boolean — for now it's False). Then print all three.",
    hint: "In Python, strings use quotes, integers are just numbers, and booleans are `True` or `False` (capital first letter!).",
    solution: `name = "Eleven"\npower_level = 11\ncan_fly = False\nprint(name)\nprint(power_level)\nprint(can_fly)`,
    starterCode: `# Eleven's Powers\n# Create the three variables below, then print them\n\nname = ___\npower_level = ___\ncan_fly = ___\n\nprint(name)\nprint(power_level)\nprint(can_fly)`,
    testCases: [
      { input: "", expected: "Eleven\n11\nFalse", description: "Prints name, power level, and flying status" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "st-py-02",
    themeId: "stranger-things",
    languageId: "python",
    order: 2,
    title: "Functions",
    themedTitle: "Decoding Will's Messages",
    narrative:
      "Will Byers is sending messages from the Upside Down by flickering lights. Joyce has strung up alphabet lights across the walls. You need to write a function that turns a letter into its position in the alphabet so Joyce can decode his messages.",
    prompt:
      "Write a function called `letter_position` that takes one argument `letter` (a single uppercase letter) and returns its position in the alphabet (A=1, B=2, ... Z=26). For example, `letter_position('A')` should return `1` and `letter_position('W')` should return `23`.",
    hint: "In Python, `ord('A')` gives you the ASCII number 65. So `ord(letter) - ord('A') + 1` gives you the position!",
    solution: `def letter_position(letter):\n    return ord(letter) - ord('A') + 1\n\nprint(letter_position('A'))   # 1\nprint(letter_position('W'))   # 23\nprint(letter_position('Z'))   # 26`,
    starterCode: `# Decode Will's Messages\n# Write a function that returns the position of a letter (A=1, Z=26)\n\ndef letter_position(letter):\n    # Your code here\n    pass\n\n# Test your function\nprint(letter_position('A'))   # Should print 1\nprint(letter_position('W'))   # Should print 23\nprint(letter_position('Z'))   # Should print 26`,
    testCases: [
      { input: "A", expected: "1", description: "A is at position 1" },
      { input: "W", expected: "23", description: "W is at position 23" },
      { input: "Z", expected: "26", description: "Z is at position 26" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "st-py-03",
    themeId: "stranger-things",
    languageId: "python",
    order: 3,
    title: "Lists & Loops",
    themedTitle: "The Party's Members",
    narrative:
      "Dustin wants to keep track of everyone in The Party. He's got a list going, but they need to be announced in order. Help Dustin loop through the list and print each member with their party number.",
    prompt:
      "You have a list `party = [\"Mike\", \"Dustin\", \"Lucas\", \"Will\", \"Eleven\", \"Max\"]`. Write a loop that prints each member with their number, like: `1. Mike`, `2. Dustin`, etc.",
    hint: "Try using `enumerate(party, start=1)` in your for loop — it gives you both the index and the value at the same time!",
    solution: `party = ["Mike", "Dustin", "Lucas", "Will", "Eleven", "Max"]\n\nfor number, member in enumerate(party, start=1):\n    print(f"{number}. {member}")`,
    starterCode: `party = ["Mike", "Dustin", "Lucas", "Will", "Eleven", "Max"]\n\n# Loop through the party list and print each member numbered\n# Expected output:\n# 1. Mike\n# 2. Dustin\n# 3. Lucas\n# 4. Will\n# 5. Eleven\n# 6. Max\n\nfor ___ in ___:\n    print(___)`,
    testCases: [
      { input: "", expected: "1. Mike\n2. Dustin\n3. Lucas\n4. Will\n5. Eleven\n6. Max", description: "Lists all party members numbered" },
    ],
    concept: "Lists & Loops",
    difficulty: "beginner",
  },
  {
    id: "st-py-04",
    themeId: "stranger-things",
    languageId: "python",
    order: 4,
    title: "Conditionals",
    themedTitle: "The Mind Flayer Detector",
    narrative:
      "Hopper has rigged up a sensor that measures demogorgon activity levels. You need to write a program that reads the level and warns the citizens of Hawkins whether it's safe, suspicious, or a full-blown Upside Down emergency.",
    prompt:
      "Write a function called `danger_level(score)` that takes an integer `score` (0-100) and returns:\n- `\"All clear\"` if score is below 30\n- `\"Suspicious activity\"` if score is 30–69\n- `\"UPSIDE DOWN BREACH\"` if score is 70 or above",
    hint: "Use `if`, `elif`, and `else` to handle the three cases. Remember to `return` (not `print`) the result from the function.",
    solution: `def danger_level(score):\n    if score < 30:\n        return "All clear"\n    elif score < 70:\n        return "Suspicious activity"\n    else:\n        return "UPSIDE DOWN BREACH"\n\nprint(danger_level(15))   # All clear\nprint(danger_level(45))   # Suspicious activity\nprint(danger_level(85))   # UPSIDE DOWN BREACH`,
    starterCode: `def danger_level(score):\n    # Return "All clear" if below 30\n    # Return "Suspicious activity" if 30-69\n    # Return "UPSIDE DOWN BREACH" if 70+\n    pass\n\nprint(danger_level(15))   # All clear\nprint(danger_level(45))   # Suspicious activity\nprint(danger_level(85))   # UPSIDE DOWN BREACH`,
    testCases: [
      { input: "15", expected: "All clear", description: "Low scores are safe" },
      { input: "45", expected: "Suspicious activity", description: "Mid scores are suspicious" },
      { input: "85", expected: "UPSIDE DOWN BREACH", description: "High scores trigger an emergency" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "st-py-05",
    themeId: "stranger-things",
    languageId: "python",
    order: 5,
    title: "Dictionaries",
    themedTitle: "Hopper's Case Files",
    narrative:
      "Hopper is building a case file on each suspect and creature. He needs a data structure that maps each creature's name to the number of reported sightings. Dictionaries are perfect for this.",
    prompt:
      "Create a dictionary called `sightings` with at least 3 creatures: `\"Demogorgon\": 7`, `\"Mind Flayer\": 2`, `\"Demodogs\": 12`. Then write a function `most_seen(sightings)` that returns the name of the creature with the most sightings.",
    hint: "Python's built-in `max()` function works with dictionaries when you pass `key=sightings.get` as the second argument.",
    solution: `sightings = {\n    "Demogorgon": 7,\n    "Mind Flayer": 2,\n    "Demodogs": 12\n}\n\ndef most_seen(sightings):\n    return max(sightings, key=sightings.get)\n\nprint(most_seen(sightings))  # Demodogs`,
    starterCode: `sightings = {\n    "Demogorgon": 7,\n    "Mind Flayer": 2,\n    "Demodogs": 12\n}\n\ndef most_seen(sightings):\n    # Return the name of the creature with the most sightings\n    pass\n\nprint(most_seen(sightings))  # Should print: Demodogs`,
    testCases: [
      { input: "", expected: "Demodogs", description: "Demodogs has the highest count (12)" },
    ],
    concept: "Dictionaries",
    difficulty: "beginner",
  },
  {
    id: "st-py-06",
    themeId: "stranger-things",
    languageId: "python",
    order: 6,
    title: "String Methods",
    themedTitle: "Eleven's Walkie-Talkie Transmission",
    narrative:
      "Eleven is trying to communicate through the Upside Down's interference. The message arrives garbled — extra whitespace, wrong capitalization, and scrambled words. Mike needs you to clean the signal before it's too late.",
    prompt:
      "Write a function called `clean_transmission(message)` that:\n1. Strips leading/trailing whitespace with `.strip()`\n2. Converts the message to uppercase with `.upper()`\n3. Replaces the word `\"UNKNOWN\"` with `\"ELEVEN\"` using `.replace()`\nReturn the cleaned string. Test with `clean_transmission(\"  unknown is safe  \")`.",
    hint: "Chain your string methods: first `.strip()`, then `.upper()`, then `.replace()`. You can call them one after another on the same string.",
    solution: `def clean_transmission(message):\n    return message.strip().upper().replace("UNKNOWN", "ELEVEN")\n\nprint(clean_transmission("  unknown is safe  "))`,
    starterCode: `# Eleven's Walkie-Talkie Transmission\n# Clean the incoming signal\n\ndef clean_transmission(message):\n    # Strip whitespace, uppercase, replace "UNKNOWN" with "ELEVEN"\n    return message.strip().upper().replace(___, ___)\n\nprint(clean_transmission("  unknown is safe  "))  # Should print: ELEVEN IS SAFE`,
    testCases: [
      { input: "  unknown is safe  ", expected: "ELEVEN IS SAFE", description: "Strips, uppercases, and replaces the placeholder" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "st-py-07",
    themeId: "stranger-things",
    languageId: "python",
    order: 7,
    title: "List Comprehension",
    themedTitle: "The Upside Down Creatures",
    narrative:
      "Dustin has catalogued every creature from the Upside Down in his notebook. He needs a filtered list showing only the creatures whose names are longer than 8 characters — the big ones are always the most dangerous.",
    prompt:
      "Use a list comprehension to create a new list called `big_creatures` from `creatures = [\"Demogorgon\", \"Dart\", \"Mind Flayer\", \"Demodog\", \"Demobat\", \"Shadow Monster\"]` that contains only creatures with names longer than 8 characters. Print the result.",
    hint: "List comprehension syntax: `[item for item in list if condition]`. Check length with `len(item) > 8`.",
    solution: `creatures = ["Demogorgon", "Dart", "Mind Flayer", "Demodog", "Demobat", "Shadow Monster"]\nbig_creatures = [c for c in creatures if len(c) > 8]\nprint(big_creatures)`,
    starterCode: `# The Upside Down Creatures\n# Filter creatures whose names are longer than 8 characters\n\ncreatures = ["Demogorgon", "Dart", "Mind Flayer", "Demodog", "Demobat", "Shadow Monster"]\nbig_creatures = [___ for ___ in creatures if len(___) > 8]\nprint(big_creatures)`,
    testCases: [
      { input: "", expected: "['Demogorgon', 'Mind Flayer', 'Shadow Monster']", description: "Only creatures with names longer than 8 chars" },
    ],
    concept: "List Comprehension",
    difficulty: "intermediate",
  },
  {
    id: "st-py-08",
    themeId: "stranger-things",
    languageId: "python",
    order: 8,
    title: "Nested Data Structures",
    themedTitle: "Hawkins Lab's Research Files",
    narrative:
      "Dr. Brenner kept detailed files on each of his test subjects. The documents have been recovered from the Hawkins National Laboratory — each subject is a dictionary inside a master list. Joyce needs you to find subject 011.",
    prompt:
      "You have a list of subject dictionaries:\n`subjects = [{\"id\": \"009\", \"name\": \"Unknown\", \"power\": \"none\"}, {\"id\": \"011\", \"name\": \"Eleven\", \"power\": \"telekinesis\"}, {\"id\": \"008\", \"name\": \"Kali\", \"power\": \"illusions\"}]`\nWrite a function `find_subject(subjects, subject_id)` that returns the `name` of the subject whose `id` matches `subject_id`. Test with `find_subject(subjects, \"011\")`.",
    hint: "Loop through the list and check each dictionary's `\"id\"` key with `subject[\"id\"] == subject_id`.",
    solution: `subjects = [\n    {"id": "009", "name": "Unknown", "power": "none"},\n    {"id": "011", "name": "Eleven", "power": "telekinesis"},\n    {"id": "008", "name": "Kali", "power": "illusions"}\n]\n\ndef find_subject(subjects, subject_id):\n    for subject in subjects:\n        if subject["id"] == subject_id:\n            return subject["name"]\n\nprint(find_subject(subjects, "011"))`,
    starterCode: `# Hawkins Lab's Research Files\n\nsubjects = [\n    {"id": "009", "name": "Unknown", "power": "none"},\n    {"id": "011", "name": "Eleven", "power": "telekinesis"},\n    {"id": "008", "name": "Kali", "power": "illusions"}\n]\n\ndef find_subject(subjects, subject_id):\n    for subject in subjects:\n        if subject[___] == subject_id:\n            return subject[___]\n\nprint(find_subject(subjects, "011"))  # Should print: Eleven`,
    testCases: [
      { input: "011", expected: "Eleven", description: "Returns the name of subject 011" },
    ],
    concept: "Nested Data Structures",
    difficulty: "intermediate",
  },
  {
    id: "st-py-09",
    themeId: "stranger-things",
    languageId: "python",
    order: 9,
    title: "Sorting",
    themedTitle: "The Party's Power Rankings",
    narrative:
      "Hopper is ranking the party members by threat level to determine who faces the Demogorgons first. He needs them sorted from lowest to highest threat score so tactical decisions can be made quickly.",
    prompt:
      "You have a list of party members with threat scores:\n`party = [{\"name\": \"Mike\", \"threat\": 3}, {\"name\": \"Eleven\", \"threat\": 10}, {\"name\": \"Dustin\", \"threat\": 4}, {\"name\": \"Lucas\", \"threat\": 6}, {\"name\": \"Will\", \"threat\": 2}]`\nUse `sorted()` with a `key=` parameter to sort by `\"threat\"` score ascending. Print the name and threat score of each member in sorted order.",
    hint: "Use `sorted(party, key=lambda x: x[\"threat\"])` to sort by the threat value. Then loop through to print each member.",
    solution: `party = [\n    {"name": "Mike", "threat": 3},\n    {"name": "Eleven", "threat": 10},\n    {"name": "Dustin", "threat": 4},\n    {"name": "Lucas", "threat": 6},\n    {"name": "Will", "threat": 2}\n]\n\nranked = sorted(party, key=lambda x: x["threat"])\nfor member in ranked:\n    print(f"{member['name']}: {member['threat']}")`,
    starterCode: `# The Party's Power Rankings\n\nparty = [\n    {"name": "Mike", "threat": 3},\n    {"name": "Eleven", "threat": 10},\n    {"name": "Dustin", "threat": 4},\n    {"name": "Lucas", "threat": 6},\n    {"name": "Will", "threat": 2}\n]\n\nranked = sorted(party, key=lambda x: x[___])\nfor member in ranked:\n    print(f"{member['name']}: {member['threat']}")`,
    testCases: [
      { input: "", expected: "Will: 2\nMike: 3\nDustin: 4\nLucas: 6\nEleven: 10", description: "Party members sorted by threat score ascending" },
    ],
    concept: "Sorting",
    difficulty: "advanced",
  },
  {
    id: "st-py-10",
    themeId: "stranger-things",
    languageId: "python",
    order: 10,
    title: "Exception Handling",
    themedTitle: "The Gate Won't Open",
    narrative:
      "Eleven is trying to open a gate to find Will, but the interdimensional coordinates might be invalid. If bad data is passed to the portal system, it crashes. Joyce needs you to wrap the code in exception handling so the gate attempt is graceful even when things go wrong.",
    prompt:
      "Write a function `open_gate(coordinate)` that tries to convert `coordinate` to an integer using `int()`. If it succeeds, return `f\"Gate opened at coordinate {coordinate}\"`.\nIf a `ValueError` is raised, return `\"Invalid coordinate — gate failed to open\"`.\nTest with `open_gate(\"42\")` and `open_gate(\"upside_down\")`.",
    hint: "Use a `try` block to attempt the conversion and an `except ValueError` block to catch the error. Return the appropriate string from each block.",
    solution: `def open_gate(coordinate):\n    try:\n        int(coordinate)\n        return f"Gate opened at coordinate {coordinate}"\n    except ValueError:\n        return "Invalid coordinate — gate failed to open"\n\nprint(open_gate("42"))\nprint(open_gate("upside_down"))`,
    starterCode: `# The Gate Won't Open\n\ndef open_gate(coordinate):\n    try:\n        int(coordinate)\n        return f"Gate opened at coordinate {coordinate}"\n    except ___:\n        return "Invalid coordinate — gate failed to open"\n\nprint(open_gate("42"))           # Gate opened at coordinate 42\nprint(open_gate("upside_down"))  # Invalid coordinate — gate failed to open`,
    testCases: [
      { input: "42", expected: "Gate opened at coordinate 42", description: "Valid coordinate opens the gate" },
      { input: "upside_down", expected: "Invalid coordinate — gate failed to open", description: "Invalid coordinate is handled gracefully" },
    ],
    concept: "Exception Handling",
    difficulty: "advanced",
  },
];
