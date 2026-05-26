import type { Challenge } from "@/types";

export const theOfficePythonChallenges: Challenge[] = [
  {
    id: "to-py-01",
    themeId: "the-office",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "Dwight's Beet Farm Inventory",
    narrative:
      "Dwight Schrute has asked you to help track inventory at Schrute Farms. 'Beets are the cornerstone of any great civilization,' he insists. 'And I need data. Accurate data.'",
    prompt:
      "Create three variables: `crop` (set to the string `\"beet\"`), `harvest_count` (an integer, set to `5765`), and `is_profitable` (a boolean, set to `True`). Then print all three.",
    hint: "In Python, strings use quotes, integers are plain numbers, and booleans are `True` or `False` with a capital first letter.",
    solution: `crop = "beet"\nharvest_count = 5765\nis_profitable = True\nprint(crop)\nprint(harvest_count)\nprint(is_profitable)`,
    starterCode: `# Dwight's Beet Farm Inventory\n# Create the three variables, then print them\n\ncrop = ___\nharvest_count = ___\nis_profitable = ___\n\nprint(crop)\nprint(harvest_count)\nprint(is_profitable)`,
    testCases: [
      { input: "", expected: "beet\n5765\nTrue", description: "Prints crop, harvest count, and profitability" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "to-py-02",
    themeId: "the-office",
    languageId: "python",
    order: 2,
    title: "Lists",
    themedTitle: "Michael's Birthday Party List",
    narrative:
      "Michael Scott is throwing yet another birthday party — even though it's nobody's birthday. He needs a list of everyone in the office, but then realizes Ryan wasn't invited. 'Ryan started the fire,' Michael says gravely.",
    prompt:
      "Create a list called `guests` containing `\"Michael\"`, `\"Dwight\"`, `\"Jim\"`, `\"Pam\"`, and `\"Ryan\"`. Then remove `\"Ryan\"` from the list and print the final list.",
    hint: "Use `list.remove(value)` to remove an item by value, then `print(guests)` to show the result.",
    solution: `guests = ["Michael", "Dwight", "Jim", "Pam", "Ryan"]\nguests.remove("Ryan")\nprint(guests)`,
    starterCode: `# Michael's Birthday Party List\n# Create the list, remove Ryan, then print it\n\nguests = [___]\nguests.remove(___)\nprint(guests)`,
    testCases: [
      { input: "", expected: "['Michael', 'Dwight', 'Jim', 'Pam']", description: "Ryan removed from guest list" },
    ],
    concept: "Lists",
    difficulty: "beginner",
  },
  {
    id: "to-py-03",
    themeId: "the-office",
    languageId: "python",
    order: 3,
    title: "Dictionaries",
    themedTitle: "The Employee Database",
    narrative:
      "Toby from HR needs a proper employee record system. Michael hates Toby, but even he admits the paperwork is overdue. Help create a dictionary to store employee information.",
    prompt:
      "Create a dictionary called `employee` with three keys: `\"name\"` (set to `\"Jim Halpert\"`), `\"role\"` (set to `\"Salesman\"`), and `\"sales\"` (set to `14200`). Then print the value of the `\"name\"` key.",
    hint: "Dictionaries use curly braces `{}` and key-value pairs like `{\"key\": value}`. Access a value with `dict[\"key\"]`.",
    solution: `employee = {"name": "Jim Halpert", "role": "Salesman", "sales": 14200}\nprint(employee["name"])`,
    starterCode: `# The Employee Database\n# Create the dictionary, then print the employee's name\n\nemployee = {___}\nprint(employee[___])`,
    testCases: [
      { input: "", expected: "Jim Halpert", description: "Prints the employee's name" },
    ],
    concept: "Dictionaries",
    difficulty: "beginner",
  },
  {
    id: "to-py-04",
    themeId: "the-office",
    languageId: "python",
    order: 4,
    title: "Functions",
    themedTitle: "Threat Level Midnight",
    narrative:
      "Michael Scott has been working on his movie 'Threat Level Midnight' for 11 years. The hero, Michael Scarn, needs a function to calculate his threat level based on the number of enemies defeated.",
    prompt:
      "Write a function called `threat_level` that takes one argument `enemies_defeated`. If `enemies_defeated` is greater than or equal to `10`, return `\"Midnight\"`. If it's between `5` and `9` (inclusive), return `\"High\"`. Otherwise return `\"Low\"`. Test it with `threat_level(12)`, `threat_level(7)`, and `threat_level(2)`.",
    hint: "Use `if`, `elif`, and `else` to handle each case. Remember `>=` means greater than or equal to.",
    solution: `def threat_level(enemies_defeated):\n    if enemies_defeated >= 10:\n        return "Midnight"\n    elif enemies_defeated >= 5:\n        return "High"\n    else:\n        return "Low"\n\nprint(threat_level(12))\nprint(threat_level(7))\nprint(threat_level(2))`,
    starterCode: `# Threat Level Midnight\n# Write a function that returns the threat level\n\ndef threat_level(enemies_defeated):\n    # Your code here\n    pass\n\nprint(threat_level(12))  # Should print: Midnight\nprint(threat_level(7))   # Should print: High\nprint(threat_level(2))   # Should print: Low`,
    testCases: [
      { input: "12", expected: "Midnight", description: "12 enemies = Midnight" },
      { input: "7", expected: "High", description: "7 enemies = High" },
      { input: "2", expected: "Low", description: "2 enemies = Low" },
    ],
    concept: "Functions & Conditionals",
    difficulty: "beginner",
  },
  {
    id: "to-py-05",
    themeId: "the-office",
    languageId: "python",
    order: 5,
    title: "Loops",
    themedTitle: "Counting Paper Sales",
    narrative:
      "It's the end of the quarter and Stanley is already thinking about his crossword puzzles. But first, Dwight needs a sales report. Help total up the sales numbers from the Scranton branch.",
    prompt:
      "Write a function called `total_sales` that takes a list of sale amounts and returns their sum using a `for` loop (don't use the built-in `sum()` function). Test it with `total_sales([1200, 850, 2100, 400, 975])`.",
    hint: "Start with a variable `total = 0`, then loop through each amount and add it: `total += amount`. Return `total` at the end.",
    solution: `def total_sales(sales):\n    total = 0\n    for amount in sales:\n        total += amount\n    return total\n\nprint(total_sales([1200, 850, 2100, 400, 975]))`,
    starterCode: `# Counting Paper Sales\n# Write a function that totals a list of sales using a for loop\n\ndef total_sales(sales):\n    total = 0\n    for amount in sales:\n        # Add amount to total\n        pass\n    return total\n\nprint(total_sales([1200, 850, 2100, 400, 975]))  # Should print: 5525`,
    testCases: [
      { input: "[1200, 850, 2100, 400, 975]", expected: "5525", description: "Sum of all sales" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
];
