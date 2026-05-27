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
  {
    id: "sv-py-06",
    themeId: "severance",
    languageId: "python",
    order: 6,
    title: "String Methods",
    themedTitle: "Kier Eagan's Proclamations",
    narrative:
      "The walls of Lumon are covered in Kier Eagan's sayings — printed in all caps, perfectly trimmed, with the Lumon wordmark at the end. Irving has been assigned to format the quarterly proclamation for the break room bulletin board.",
    prompt:
      "Write a function called `format_proclamation(text)` that:\n1. Strips whitespace with `.strip()`\n2. Converts to uppercase with `.upper()`\n3. Replaces `\"WORKER\"` with `\"LUMENITE\"` using `.replace()`\nReturn the result. Test with `format_proclamation(\"  a worker serves with joy  \")`.",
    hint: "Chain `.strip().upper().replace(\"WORKER\", \"LUMENITE\")` on the input string.",
    solution: `def format_proclamation(text):\n    return text.strip().upper().replace("WORKER", "LUMENITE")\n\nprint(format_proclamation("  a worker serves with joy  "))`,
    starterCode: `# Kier Eagan's Proclamations\n\ndef format_proclamation(text):\n    return text.strip().upper().replace(___, ___)\n\nprint(format_proclamation("  a worker serves with joy  "))  # A LUMENITE SERVES WITH JOY`,
    testCases: [
      { input: "  a worker serves with joy  ", expected: "A LUMENITE SERVES WITH JOY", description: "Stripped, uppercased, and rebranded" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sv-py-07",
    themeId: "severance",
    languageId: "python",
    order: 7,
    title: "List Comprehension",
    themedTitle: "The Scary Numbers",
    narrative:
      "The MDR team sorts numbers by feeling. Today Mark needs a quick way to extract only the numbers that feel scary — those greater than 7. Helly hates this, but the quota doesn't fill itself.",
    prompt:
      "Use a list comprehension to create `scary_numbers` from `data = [2, 8, 1, 9, 5, 10, 3, 7, 6, 11]` that contains only numbers greater than `7`. Print the result.",
    hint: "List comprehension: `[x for x in data if x > 7]`.",
    solution: `data = [2, 8, 1, 9, 5, 10, 3, 7, 6, 11]\nscary_numbers = [x for x in data if x > 7]\nprint(scary_numbers)`,
    starterCode: `# The Scary Numbers\n\ndata = [2, 8, 1, 9, 5, 10, 3, 7, 6, 11]\nscary_numbers = [___ for ___ in data if ___ > 7]\nprint(scary_numbers)`,
    testCases: [
      { input: "", expected: "[8, 9, 10, 11]", description: "Numbers greater than 7" },
    ],
    concept: "List Comprehension",
    difficulty: "intermediate",
  },
  {
    id: "sv-py-08",
    themeId: "severance",
    languageId: "python",
    order: 8,
    title: "Nested Data Structures",
    themedTitle: "The MDR Employee Files",
    narrative:
      "Ms. Cobel maintains detailed records on each MDR employee — their outie name, wellness session count, and current quota. The files are stored as a list of dictionaries. She needs a function to pull up a specific employee's quota by name.",
    prompt:
      "Given:\n`employees = [{\"innie\": \"Mark S.\", \"quota\": 72}, {\"innie\": \"Helly R.\", \"quota\": 41}, {\"innie\": \"Irving B.\", \"quota\": 88}, {\"innie\": \"Dylan G.\", \"quota\": 95}]`\nWrite a function `get_quota(employees, name)` that returns the `quota` for the matching `innie` name. Test with `get_quota(employees, \"Irving B.\")`.",
    hint: "Loop through the list. For each dictionary, check if `employee[\"innie\"] == name` and return `employee[\"quota\"]`.",
    solution: `employees = [\n    {"innie": "Mark S.", "quota": 72},\n    {"innie": "Helly R.", "quota": 41},\n    {"innie": "Irving B.", "quota": 88},\n    {"innie": "Dylan G.", "quota": 95}\n]\n\ndef get_quota(employees, name):\n    for employee in employees:\n        if employee["innie"] == name:\n            return employee["quota"]\n\nprint(get_quota(employees, "Irving B."))`,
    starterCode: `# The MDR Employee Files\n\nemployees = [\n    {"innie": "Mark S.", "quota": 72},\n    {"innie": "Helly R.", "quota": 41},\n    {"innie": "Irving B.", "quota": 88},\n    {"innie": "Dylan G.", "quota": 95}\n]\n\ndef get_quota(employees, name):\n    for employee in employees:\n        if employee[___] == name:\n            return employee[___]\n\nprint(get_quota(employees, "Irving B."))  # Should print: 88`,
    testCases: [
      { input: "Irving B.", expected: "88", description: "Irving's quota is 88" },
    ],
    concept: "Nested Data Structures",
    difficulty: "intermediate",
  },
  {
    id: "sv-py-09",
    themeId: "severance",
    languageId: "python",
    order: 9,
    title: "Sorting",
    themedTitle: "The Quota Leaderboard",
    narrative:
      "Dylan G. has been tracking the MDR quota standings obsessively — because whoever finishes first earns the coveted Waffle Party. He needs the team sorted from highest quota to lowest so he can see exactly where he stands.",
    prompt:
      "Sort `employees = [{\"name\": \"Mark S.\", \"quota\": 72}, {\"name\": \"Helly R.\", \"quota\": 41}, {\"name\": \"Irving B.\", \"quota\": 88}, {\"name\": \"Dylan G.\", \"quota\": 95}]` by `\"quota\"` in descending order using `sorted()` with a `key=` parameter and `reverse=True`. Print each name and quota.",
    hint: "Use `sorted(employees, key=lambda x: x[\"quota\"], reverse=True)` to sort highest first.",
    solution: `employees = [\n    {"name": "Mark S.", "quota": 72},\n    {"name": "Helly R.", "quota": 41},\n    {"name": "Irving B.", "quota": 88},\n    {"name": "Dylan G.", "quota": 95}\n]\n\nranked = sorted(employees, key=lambda x: x["quota"], reverse=True)\nfor emp in ranked:\n    print(f"{emp['name']}: {emp['quota']}")`,
    starterCode: `# The Quota Leaderboard\n\nemployees = [\n    {"name": "Mark S.", "quota": 72},\n    {"name": "Helly R.", "quota": 41},\n    {"name": "Irving B.", "quota": 88},\n    {"name": "Dylan G.", "quota": 95}\n]\n\nranked = sorted(employees, key=lambda x: x[___], reverse=True)\nfor emp in ranked:\n    print(f"{emp['name']}: {emp['quota']}")`,
    testCases: [
      { input: "", expected: "Dylan G.: 95\nIrving B.: 88\nMark S.: 72\nHelly R.: 41", description: "Employees sorted by quota descending" },
    ],
    concept: "Sorting",
    difficulty: "advanced",
  },
  {
    id: "sv-py-10",
    themeId: "severance",
    languageId: "python",
    order: 10,
    title: "Exception Handling",
    themedTitle: "The Severed Floor Access Error",
    narrative:
      "The elevator at Lumon has a strict access protocol. If an innie tries to access a floor they're not cleared for, the system must raise an exception rather than crash. Burt from Optics and Design learned this the hard way.",
    prompt:
      "Write a function `access_floor(floor_number)` that tries to convert `floor_number` to an integer. If the floor is valid (between 1 and 5 inclusive), return `f\"Access granted to floor {floor_number}\"`.\nIf the floor is out of range, return `\"Floor restricted — clearance denied\"`.\nIf a `ValueError` occurs (non-numeric input), return `\"Invalid floor code\"`.\nTest with `access_floor(\"3\")`, `access_floor(\"9\")`, and `access_floor(\"basement\")`.",
    hint: "Use `try/except ValueError` for the conversion, then use an `if` statement to check the range `1 <= num <= 5`.",
    solution: `def access_floor(floor_number):\n    try:\n        num = int(floor_number)\n        if 1 <= num <= 5:\n            return f"Access granted to floor {floor_number}"\n        else:\n            return "Floor restricted — clearance denied"\n    except ValueError:\n        return "Invalid floor code"\n\nprint(access_floor("3"))\nprint(access_floor("9"))\nprint(access_floor("basement"))`,
    starterCode: `# The Severed Floor Access Error\n\ndef access_floor(floor_number):\n    try:\n        num = int(floor_number)\n        if 1 <= num <= 5:\n            return f"Access granted to floor {floor_number}"\n        else:\n            return "Floor restricted — clearance denied"\n    except ___:\n        return "Invalid floor code"\n\nprint(access_floor("3"))        # Access granted to floor 3\nprint(access_floor("9"))        # Floor restricted — clearance denied\nprint(access_floor("basement")) # Invalid floor code`,
    testCases: [
      { input: "3", expected: "Access granted to floor 3", description: "Valid floor grants access" },
      { input: "9", expected: "Floor restricted — clearance denied", description: "Out-of-range floor is denied" },
      { input: "basement", expected: "Invalid floor code", description: "Non-numeric input is caught" },
    ],
    concept: "Exception Handling",
    difficulty: "advanced",
  },
];
