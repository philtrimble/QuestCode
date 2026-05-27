import type { Challenge } from "@/types";

export const theMatrixPythonChallenges: Challenge[] = [
  {
    id: "mx-py-01",
    themeId: "the-matrix",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "Red Pill or Blue Pill",
    narrative:
      "Morpheus holds out two pills. The red pill shows you the truth. The blue pill keeps you in the simulation. Neo has chosen the red pill — and now you must record his choice in the system.",
    prompt:
      "Create three variables: `chosen_one` (set to `\"Neo\"`), `pill_chosen` (set to `\"red\"`), and `in_matrix` (a boolean, set to `False` — Neo has left the simulation). Print all three.",
    hint: "Remember: booleans in Python are `True` and `False` with capital first letters.",
    solution: `chosen_one = "Neo"\npill_chosen = "red"\nin_matrix = False\nprint(chosen_one)\nprint(pill_chosen)\nprint(in_matrix)`,
    starterCode: `# Red Pill or Blue Pill\n# Create the three variables and print them\n\nchosen_one = ___\npill_chosen = ___\nin_matrix = ___\n\nprint(chosen_one)\nprint(pill_chosen)\nprint(in_matrix)`,
    testCases: [
      { input: "", expected: "Neo\nred\nFalse", description: "Prints Neo's details" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "mx-py-02",
    themeId: "the-matrix",
    languageId: "python",
    order: 2,
    title: "Lists",
    themedTitle: "The Matrix Grid",
    narrative:
      "The Matrix is a simulation built on numbers. Agent Smith has detected anomalies in a row of data — several values in the grid are corrupted. You need to find and replace the corrupted value.",
    prompt:
      "Create a list called `grid` with values `[10, 20, 0, 40, 50]`. The `0` at index `2` is a corrupted value. Replace it with `30`. Then print the corrected list.",
    hint: "Access a list by index with `grid[2]` and assign a new value with `grid[2] = 30`.",
    solution: `grid = [10, 20, 0, 40, 50]\ngrid[2] = 30\nprint(grid)`,
    starterCode: `# The Matrix Grid\n# Fix the corrupted value at index 2, then print the corrected list\n\ngrid = [10, 20, 0, 40, 50]\ngrid[___] = ___\nprint(grid)`,
    testCases: [
      { input: "", expected: "[10, 20, 30, 40, 50]", description: "Corrected grid" },
    ],
    concept: "Lists & Indexing",
    difficulty: "beginner",
  },
  {
    id: "mx-py-03",
    themeId: "the-matrix",
    languageId: "python",
    order: 3,
    title: "Functions",
    themedTitle: "Dodge This",
    narrative:
      "In the Matrix, bullets can be dodged — if you know the code. Agent Smith fires bullets at a given speed. Neo can dodge anything below his reaction threshold. Write the function that determines if Neo can dodge.",
    prompt:
      "Write a function called `can_dodge` that takes `bullet_speed` and `reaction_time` as arguments. If `bullet_speed / reaction_time` is less than `100`, return `True` (Neo can dodge). Otherwise return `False`. Test with `can_dodge(250, 3)` and `can_dodge(500, 2)`.",
    hint: "Divide `bullet_speed` by `reaction_time` and compare the result to `100` using `<`.",
    solution: `def can_dodge(bullet_speed, reaction_time):\n    return bullet_speed / reaction_time < 100\n\nprint(can_dodge(250, 3))\nprint(can_dodge(500, 2))`,
    starterCode: `# Dodge This\n# Write a function that returns True if Neo can dodge the bullet\n\ndef can_dodge(bullet_speed, reaction_time):\n    # Return True if bullet_speed / reaction_time < 100\n    pass\n\nprint(can_dodge(250, 3))   # Should print: True\nprint(can_dodge(500, 2))   # Should print: False`,
    testCases: [
      { input: "250, 3", expected: "True", description: "250/3 ≈ 83 — Neo dodges" },
      { input: "500, 2", expected: "False", description: "500/2 = 250 — Neo can't dodge" },
    ],
    concept: "Functions & Conditionals",
    difficulty: "beginner",
  },
  {
    id: "mx-py-04",
    themeId: "the-matrix",
    languageId: "python",
    order: 4,
    title: "Loops",
    themedTitle: "Scanning the Simulation",
    narrative:
      "The Oracle has given you a sequence of numbers that describe the simulation. Some numbers represent 'glitches' — they appear more than once. Tank needs you to scan the sequence and count how many glitches exist.",
    prompt:
      "Write a function called `count_glitches` that takes a list of numbers and returns the count of numbers that appear more than once. A number is a glitch if it appears in the list at least twice. Test with `count_glitches([1, 2, 2, 3, 4, 4, 4, 5])`.",
    hint: "Use a dictionary to count occurrences, then count how many have a value greater than 1.",
    solution: `def count_glitches(sequence):\n    counts = {}\n    for num in sequence:\n        counts[num] = counts.get(num, 0) + 1\n    return sum(1 for v in counts.values() if v > 1)\n\nprint(count_glitches([1, 2, 2, 3, 4, 4, 4, 5]))`,
    starterCode: `# Scanning the Simulation\n# Count how many unique numbers appear more than once\n\ndef count_glitches(sequence):\n    counts = {}\n    for num in sequence:\n        counts[num] = counts.get(num, 0) + 1\n    # Count how many values in counts are greater than 1\n    pass\n\nprint(count_glitches([1, 2, 2, 3, 4, 4, 4, 5]))  # Should print: 2`,
    testCases: [
      { input: "[1, 2, 2, 3, 4, 4, 4, 5]", expected: "2", description: "2 and 4 are glitches" },
    ],
    concept: "Loops & Dictionaries",
    difficulty: "intermediate",
  },
  {
    id: "mx-py-05",
    themeId: "the-matrix",
    languageId: "python",
    order: 5,
    title: "String Manipulation",
    themedTitle: "Decoding Agent Smith's Message",
    narrative:
      "Agent Smith has sent an encrypted message. The encryption is simple: every letter in the message has been shifted forward by 13 places in the alphabet (ROT13). Decode it before he catches Neo.",
    prompt:
      "Write a function called `decode_rot13` that takes a string `message` and returns the ROT13-decoded version. Python's `codecs` module has `codecs.decode(message, 'rot_13')` — use that. Test with `decode_rot13(\"Uryyb, Arb\")`.",
    hint: "Import codecs at the top with `import codecs`, then use `codecs.decode(message, 'rot_13')` inside your function.",
    solution: `import codecs\n\ndef decode_rot13(message):\n    return codecs.decode(message, 'rot_13')\n\nprint(decode_rot13("Uryyb, Arb"))`,
    starterCode: `# Decoding Agent Smith's Message\n# Use ROT13 to decode the message\n\nimport codecs\n\ndef decode_rot13(message):\n    return codecs.decode(message, ___)\n\nprint(decode_rot13("Uryyb, Arb"))  # Should print: Hello, Neo`,
    testCases: [
      { input: "Uryyb, Arb", expected: "Hello, Neo", description: "ROT13 decoded message" },
    ],
    concept: "String Manipulation & Imports",
    difficulty: "intermediate",
  },
  {
    id: "mx-py-06",
    themeId: "the-matrix",
    languageId: "python",
    order: 6,
    title: "String Methods",
    themedTitle: "Neo's Hacker Alias",
    narrative:
      "Before Thomas Anderson became Neo, he was a hacker who used an alias. The Architect has intercepted his old message logs and needs them cleaned and standardized before presenting them as evidence against the anomaly.",
    prompt:
      "Write a function called `format_alias(text)` that:\n1. Strips whitespace with `.strip()`\n2. Converts to lowercase with `.lower()`\n3. Replaces spaces with underscores using `.replace()`\nReturn the result. Test with `format_alias(\"  Thomas Anderson  \")`.",
    hint: "Chain `.strip().lower().replace(\" \", \"_\")` on the input string.",
    solution: `def format_alias(text):\n    return text.strip().lower().replace(" ", "_")\n\nprint(format_alias("  Thomas Anderson  "))`,
    starterCode: `# Neo's Hacker Alias\n\ndef format_alias(text):\n    return text.strip().lower().replace(___, ___)\n\nprint(format_alias("  Thomas Anderson  "))  # Should print: thomas_anderson`,
    testCases: [
      { input: "  Thomas Anderson  ", expected: "thomas_anderson", description: "Stripped, lowercased, spaces replaced with underscores" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "mx-py-07",
    themeId: "the-matrix",
    languageId: "python",
    order: 7,
    title: "List Comprehension",
    themedTitle: "Filtering the Simulation's Anomalies",
    narrative:
      "The Oracle has identified a stream of code values from the simulation. Only anomalies — values divisible by 3 — represent genuine glitches. Neo needs a filtered list of just the anomalies before Agent Smith erases them.",
    prompt:
      "Use a list comprehension to create `anomalies` from `code_stream = [3, 7, 9, 14, 21, 5, 12, 18, 11, 6]` that contains only values divisible by `3`. Print the result.",
    hint: "List comprehension: `[x for x in code_stream if x % 3 == 0]`. The `%` operator gives the remainder.",
    solution: `code_stream = [3, 7, 9, 14, 21, 5, 12, 18, 11, 6]\nanomalies = [x for x in code_stream if x % 3 == 0]\nprint(anomalies)`,
    starterCode: `# Filtering the Simulation's Anomalies\n\ncode_stream = [3, 7, 9, 14, 21, 5, 12, 18, 11, 6]\nanomalies = [___ for ___ in code_stream if ___ % 3 == 0]\nprint(anomalies)`,
    testCases: [
      { input: "", expected: "[3, 9, 21, 12, 18, 6]", description: "Values divisible by 3" },
    ],
    concept: "List Comprehension",
    difficulty: "intermediate",
  },
  {
    id: "mx-py-08",
    themeId: "the-matrix",
    languageId: "python",
    order: 8,
    title: "Nested Data Structures",
    themedTitle: "The Operator's Agent Manifest",
    narrative:
      "Tank is monitoring all known Agent signatures in the Matrix. Each Agent is logged as a dictionary with a designation, threat level, and current target. Morpheus needs to know which target Agent Smith is currently pursuing.",
    prompt:
      "Given:\n`agents = [{\"name\": \"Smith\", \"threat\": 10, \"target\": \"Neo\"}, {\"name\": \"Brown\", \"threat\": 7, \"target\": \"Morpheus\"}, {\"name\": \"Jones\", \"threat\": 8, \"target\": \"Trinity\"}]`\nWrite a function `get_target(agents, agent_name)` that returns the `target` for the matching agent. Test with `get_target(agents, \"Smith\")`.",
    hint: "Loop through the list. For each dict, check `a[\"name\"] == agent_name` and return `a[\"target\"]`.",
    solution: `agents = [\n    {"name": "Smith", "threat": 10, "target": "Neo"},\n    {"name": "Brown", "threat": 7, "target": "Morpheus"},\n    {"name": "Jones", "threat": 8, "target": "Trinity"}\n]\n\ndef get_target(agents, agent_name):\n    for a in agents:\n        if a["name"] == agent_name:\n            return a["target"]\n\nprint(get_target(agents, "Smith"))`,
    starterCode: `# The Operator's Agent Manifest\n\nagents = [\n    {"name": "Smith", "threat": 10, "target": "Neo"},\n    {"name": "Brown", "threat": 7, "target": "Morpheus"},\n    {"name": "Jones", "threat": 8, "target": "Trinity"}\n]\n\ndef get_target(agents, agent_name):\n    for a in agents:\n        if a[___] == agent_name:\n            return a[___]\n\nprint(get_target(agents, "Smith"))  # Should print: Neo`,
    testCases: [
      { input: "Smith", expected: "Neo", description: "Agent Smith is targeting Neo" },
    ],
    concept: "Nested Data Structures",
    difficulty: "intermediate",
  },
  {
    id: "mx-py-09",
    themeId: "the-matrix",
    languageId: "python",
    order: 9,
    title: "Sorting",
    themedTitle: "Ranking the Freed Minds",
    narrative:
      "Morpheus has assembled a crew of freed minds aboard the Nebuchadnezzar. He needs them ranked by combat readiness score — highest first — so he knows who goes on which mission into the Matrix.",
    prompt:
      "Sort `crew = [{\"name\": \"Neo\", \"readiness\": 98}, {\"name\": \"Trinity\", \"readiness\": 95}, {\"name\": \"Tank\", \"readiness\": 72}, {\"name\": \"Apoc\", \"readiness\": 80}, {\"name\": \"Switch\", \"readiness\": 85}]` by `\"readiness\"` in descending order. Print each crew member's name and score.",
    hint: "Use `sorted(crew, key=lambda x: x[\"readiness\"], reverse=True)`.",
    solution: `crew = [\n    {"name": "Neo", "readiness": 98},\n    {"name": "Trinity", "readiness": 95},\n    {"name": "Tank", "readiness": 72},\n    {"name": "Apoc", "readiness": 80},\n    {"name": "Switch", "readiness": 85}\n]\n\nranked = sorted(crew, key=lambda x: x["readiness"], reverse=True)\nfor member in ranked:\n    print(f"{member['name']}: {member['readiness']}")`,
    starterCode: `# Ranking the Freed Minds\n\ncrew = [\n    {"name": "Neo", "readiness": 98},\n    {"name": "Trinity", "readiness": 95},\n    {"name": "Tank", "readiness": 72},\n    {"name": "Apoc", "readiness": 80},\n    {"name": "Switch", "readiness": 85}\n]\n\nranked = sorted(crew, key=lambda x: x[___], reverse=True)\nfor member in ranked:\n    print(f"{member['name']}: {member['readiness']}")`,
    testCases: [
      { input: "", expected: "Neo: 98\nTrinity: 95\nSwitch: 85\nApoc: 80\nTank: 72", description: "Crew sorted by readiness descending" },
    ],
    concept: "Sorting",
    difficulty: "advanced",
  },
  {
    id: "mx-py-10",
    themeId: "the-matrix",
    languageId: "python",
    order: 10,
    title: "Exception Handling",
    themedTitle: "The Simulation Breach Error",
    narrative:
      "The simulation occasionally processes invalid data — a signal from the real world bleeding through. When the Matrix receives a value it cannot parse, the system must log the error gracefully rather than crashing. This is not a bug; it is an inevitability.",
    prompt:
      "Write a function `parse_signal(value)` that tries to convert `value` to a float using `float()` and returns `f\"Signal strength: {float(value):.2f}\"`.\nIf a `ValueError` is raised, return `\"Signal corrupted — real world bleed detected\"`.\nTest with `parse_signal(\"3.14\")` and `parse_signal(\"redpill\")`.",
    hint: "Use `try/except ValueError`. In the `try` block, convert and format. In the `except` block, return the error message.",
    solution: `def parse_signal(value):\n    try:\n        return f"Signal strength: {float(value):.2f}"\n    except ValueError:\n        return "Signal corrupted — real world bleed detected"\n\nprint(parse_signal("3.14"))\nprint(parse_signal("redpill"))`,
    starterCode: `# The Simulation Breach Error\n\ndef parse_signal(value):\n    try:\n        return f"Signal strength: {float(value):.2f}"\n    except ___:\n        return "Signal corrupted — real world bleed detected"\n\nprint(parse_signal("3.14"))     # Signal strength: 3.14\nprint(parse_signal("redpill"))  # Signal corrupted — real world bleed detected`,
    testCases: [
      { input: "3.14", expected: "Signal strength: 3.14", description: "Valid float parses correctly" },
      { input: "redpill", expected: "Signal corrupted — real world bleed detected", description: "Invalid input is caught gracefully" },
    ],
    concept: "Exception Handling",
    difficulty: "advanced",
  },
];
