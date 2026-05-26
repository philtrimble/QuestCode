import type { Challenge } from "@/types";

export const severancePythonChallenges: Challenge[] = [
  {
    id: "sv-py-01",
    themeId: "severance",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "Your Lumon Employee Record",
    narrative:
      "Welcome to Lumon Industries. You have been severed. Your innie — the version of you that exists only inside this building — needs to be logged in the employee database. Ms. Cobel requires accurate records for all Macrodata Refinement staff.",
    prompt:
      "Create three variables: `employee_name` (a string, set it to `\"Mark S.\"`), `department` (a string, set it to `\"Macrodata Refinement\"`), and `is_severed` (a boolean — set it to `True`). Then print all three.",
    hint: "In Python, strings use quotes, integers are just numbers, and booleans are `True` or `False` (capital first letter!).",
    solution: `employee_name = "Mark S."\ndepartment = "Macrodata Refinement"\nis_severed = True\nprint(employee_name)\nprint(department)\nprint(is_severed)`,
    starterCode: `# Your Lumon Employee Record\n# Create the three variables below, then print them\n\nemployee_name = ___\ndepartment = ___\nis_severed = ___\n\nprint(employee_name)\nprint(department)\nprint(is_severed)`,
    testCases: [
      { input: "", expected: "Mark S.\nMacrodata Refinement\nTrue", description: "Prints employee name, department, and severed status" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "sv-py-02",
    themeId: "severance",
    languageId: "python",
    order: 2,
    title: "Lists",
    themedTitle: "The Refinement Bins",
    narrative:
      "In Macrodata Refinement, numbers must be sorted into bins — scary, cheerful, melancholy, and frolicsome. Mark and his team stare at a sea of numbers, waiting for feeling to wash over them. Dylan just added a new number to the scary bin.",
    prompt:
      "Create a list called `scary_bin` with the values `[4, 9, 1, 7]`. Then append the number `3` to the list. Finally, print the first element and the length of the list.",
    hint: "Use `list.append(value)` to add an item to the end. Access elements with `list[index]` — remember, indexing starts at 0!",
    solution: `scary_bin = [4, 9, 1, 7]\nscary_bin.append(3)\nprint(scary_bin[0])\nprint(len(scary_bin))`,
    starterCode: `# The Refinement Bins\n# Create the list, add a number, then print the first element and length\n\nscary_bin = ___\nscary_bin.___(___)\n\nprint(scary_bin[___])\nprint(___(scary_bin))`,
    testCases: [
      { input: "", expected: "4\n5", description: "Prints the first element (4) and the new length (5)" },
    ],
    concept: "Lists",
    difficulty: "beginner",
  },
  {
    id: "sv-py-03",
    themeId: "severance",
    languageId: "python",
    order: 3,
    title: "Dictionaries",
    themedTitle: "Wellness Session Notes",
    narrative:
      "Ms. Casey runs the wellness sessions for Lumon innies. She keeps meticulous notes on each employee's progress. Today she needs a quick way to look up how many wellness sessions each MDR team member has completed.",
    prompt:
      "Create a dictionary called `wellness_sessions` with three entries: `\"Mark S.\": 14`, `\"Helly R.\": 3`, and `\"Irving B.\": 22`. Then print the value for `\"Helly R.\"` and the value for `\"Irving B.\"`.",
    hint: "Access a dictionary value with `dict[\"key\"]`. Make sure your key string matches exactly — including the space and period!",
    solution: `wellness_sessions = {\n    "Mark S.": 14,\n    "Helly R.": 3,\n    "Irving B.": 22\n}\n\nprint(wellness_sessions["Helly R."])\nprint(wellness_sessions["Irving B."])`,
    starterCode: `# Wellness Session Notes\n# Create the dictionary, then print two values\n\nwellness_sessions = {\n    "Mark S.": ___,\n    "Helly R.": ___,\n    "Irving B.": ___\n}\n\nprint(wellness_sessions[___])\nprint(wellness_sessions[___])`,
    testCases: [
      { input: "", expected: "3\n22", description: "Prints Helly's session count (3) and Irving's (22)" },
    ],
    concept: "Dictionaries",
    difficulty: "beginner",
  },
  {
    id: "sv-py-04",
    themeId: "severance",
    languageId: "python",
    order: 4,
    title: "Functions",
    themedTitle: "The Quota Checker",
    narrative:
      "Lumon tracks each MDR employee's quota completion each quarter. Dylan is obsessed with earning waffle parties. Ms. Cobel needs a function that evaluates an employee's completion percentage and returns the appropriate reward level.",
    prompt:
      "Write a function called `quota_reward(percent)` that takes a completion percentage (0–100) and returns:\n- `\"Finger Trap\"` if percent is below 50\n- `\"Caricature\"` if percent is 50–79\n- `\"Waffle Party\"` if percent is 80 or above",
    hint: "Use `if`, `elif`, and `else` to handle the three cases. Make sure to `return` the string result, not `print` it.",
    solution: `def quota_reward(percent):\n    if percent < 50:\n        return "Finger Trap"\n    elif percent < 80:\n        return "Caricature"\n    else:\n        return "Waffle Party"\n\nprint(quota_reward(35))   # Finger Trap\nprint(quota_reward(65))   # Caricature\nprint(quota_reward(92))   # Waffle Party`,
    starterCode: `def quota_reward(percent):\n    # Return "Finger Trap" if below 50\n    # Return "Caricature" if 50-79\n    # Return "Waffle Party" if 80+\n    pass\n\nprint(quota_reward(35))   # Finger Trap\nprint(quota_reward(65))   # Caricature\nprint(quota_reward(92))   # Waffle Party`,
    testCases: [
      { input: "35", expected: "Finger Trap", description: "Low completion earns a Finger Trap" },
      { input: "65", expected: "Caricature", description: "Mid completion earns a Caricature" },
      { input: "92", expected: "Waffle Party", description: "High completion earns a Waffle Party" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "sv-py-05",
    themeId: "severance",
    languageId: "python",
    order: 5,
    title: "Loops",
    themedTitle: "Sorting the Macrodata",
    narrative:
      "The Macrodata Refinement team faces a grid of numbers each day. Each number must be evaluated, and those that feel scary must be counted. Mark has a list of today's numbers and needs to know how many triggered the scary feeling.",
    prompt:
      "Write a function called `count_scary(numbers)` that takes a list of integers. Use a `for` loop to iterate through the list and count how many numbers are greater than 7. Return the total count.",
    hint: "Start with a counter variable set to `0` before the loop. Inside the loop, use an `if` statement to check the condition and increment the counter with `count += 1`.",
    solution: `def count_scary(numbers):\n    count = 0\n    for num in numbers:\n        if num > 7:\n            count += 1\n    return count\n\nprint(count_scary([3, 8, 2, 9, 5, 10, 1]))   # 3\nprint(count_scary([1, 2, 3, 4]))              # 0`,
    starterCode: `def count_scary(numbers):\n    count = ___\n    for ___ in numbers:\n        if ___ > 7:\n            count += ___\n    return count\n\nprint(count_scary([3, 8, 2, 9, 5, 10, 1]))   # Should print 3\nprint(count_scary([1, 2, 3, 4]))              # Should print 0`,
    testCases: [
      { input: "[3, 8, 2, 9, 5, 10, 1]", expected: "3", description: "Three numbers greater than 7 in the list" },
      { input: "[1, 2, 3, 4]", expected: "0", description: "No numbers greater than 7" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
];
