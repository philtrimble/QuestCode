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
];
