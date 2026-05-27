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
  {
    id: "to-py-06",
    themeId: "the-office",
    languageId: "python",
    order: 6,
    title: "String Methods",
    themedTitle: "Dwight's Memo Formatter",
    narrative:
      "Dwight Schrute has been named Assistant Regional Manager — he insists on the full title, not 'Assistant to the Regional Manager.' His memos must be perfectly formatted: all caps, no trailing spaces, and the Dunder Mifflin signature at the end.",
    prompt:
      "Write a function called `format_memo(text)` that:\n1. Strips whitespace with `.strip()`\n2. Converts to uppercase with `.upper()`\n3. Replaces `\"ASSISTANT TO THE\"` with `\"ASSISTANT\"` using `.replace()`\nReturn the result. Test with `format_memo(\"  assistant to the regional manager dwight schrute  \")`.",
    hint: "Chain `.strip().upper().replace(\"ASSISTANT TO THE\", \"ASSISTANT\")` on the input string.",
    solution: `def format_memo(text):\n    return text.strip().upper().replace("ASSISTANT TO THE", "ASSISTANT")\n\nprint(format_memo("  assistant to the regional manager dwight schrute  "))`,
    starterCode: `# Dwight's Memo Formatter\n\ndef format_memo(text):\n    return text.strip().upper().replace(___, ___)\n\nprint(format_memo("  assistant to the regional manager dwight schrute  "))`,
    testCases: [
      { input: "  assistant to the regional manager dwight schrute  ", expected: "ASSISTANT REGIONAL MANAGER DWIGHT SCHRUTE", description: "Stripped, uppercased, and title corrected" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "to-py-07",
    themeId: "the-office",
    languageId: "python",
    order: 7,
    title: "List Comprehension",
    themedTitle: "Jim's Prank Targets",
    narrative:
      "Jim Halpert has a long history of pranks against Dwight. He's reviewing his prank list and wants to keep only the ones that cost under $20 — because Pam controls the household budget now and he has to be reasonable.",
    prompt:
      "Use a list comprehension to create `cheap_pranks` from `prank_costs = [5, 35, 12, 50, 8, 22, 3, 18, 45]` that contains only values less than `20`. Print the result.",
    hint: "List comprehension: `[x for x in prank_costs if x < 20]`.",
    solution: `prank_costs = [5, 35, 12, 50, 8, 22, 3, 18, 45]\ncheap_pranks = [x for x in prank_costs if x < 20]\nprint(cheap_pranks)`,
    starterCode: `# Jim's Prank Targets\n\nprank_costs = [5, 35, 12, 50, 8, 22, 3, 18, 45]\ncheap_pranks = [___ for ___ in prank_costs if ___ < 20]\nprint(cheap_pranks)`,
    testCases: [
      { input: "", expected: "[5, 12, 8, 3, 18]", description: "Pranks under $20" },
    ],
    concept: "List Comprehension",
    difficulty: "intermediate",
  },
  {
    id: "to-py-08",
    themeId: "the-office",
    languageId: "python",
    order: 8,
    title: "Nested Data Structures",
    themedTitle: "The Salesperson Performance Files",
    narrative:
      "Dwight tracks every salesperson's performance obsessively. Each record is a dictionary inside a master list. Michael wants to know how Jim's sales are going — mostly to copy his tactics and present them as his own ideas.",
    prompt:
      "Given:\n`staff = [{\"name\": \"Dwight\", \"sales\": 18500}, {\"name\": \"Jim\", \"sales\": 15200}, {\"name\": \"Phyllis\", \"sales\": 12800}, {\"name\": \"Andy\", \"sales\": 9400}]`\nWrite a function `get_sales(staff, name)` that returns the `sales` value for the matching employee. Test with `get_sales(staff, \"Jim\")`.",
    hint: "Loop through the list. For each dict, check `person[\"name\"] == name` and return `person[\"sales\"]`.",
    solution: `staff = [\n    {"name": "Dwight", "sales": 18500},\n    {"name": "Jim", "sales": 15200},\n    {"name": "Phyllis", "sales": 12800},\n    {"name": "Andy", "sales": 9400}\n]\n\ndef get_sales(staff, name):\n    for person in staff:\n        if person["name"] == name:\n            return person["sales"]\n\nprint(get_sales(staff, "Jim"))`,
    starterCode: `# The Salesperson Performance Files\n\nstaff = [\n    {"name": "Dwight", "sales": 18500},\n    {"name": "Jim", "sales": 15200},\n    {"name": "Phyllis", "sales": 12800},\n    {"name": "Andy", "sales": 9400}\n]\n\ndef get_sales(staff, name):\n    for person in staff:\n        if person[___] == name:\n            return person[___]\n\nprint(get_sales(staff, "Jim"))  # Should print: 15200`,
    testCases: [
      { input: "Jim", expected: "15200", description: "Jim's sales total" },
    ],
    concept: "Nested Data Structures",
    difficulty: "intermediate",
  },
  {
    id: "to-py-09",
    themeId: "the-office",
    languageId: "python",
    order: 9,
    title: "Sorting",
    themedTitle: "The Dundie Award Rankings",
    narrative:
      "It's Dundie time! Michael has tallied the votes and Dwight needs the results sorted from highest to lowest score before the ceremony. The accounting department is betting it's Phyllis again for 'Bushiest Beaver.'",
    prompt:
      "Sort `nominees = [{\"name\": \"Kevin\", \"votes\": 5}, {\"name\": \"Phyllis\", \"votes\": 12}, {\"name\": \"Dwight\", \"votes\": 8}, {\"name\": \"Pam\", \"votes\": 14}, {\"name\": \"Oscar\", \"votes\": 3}]` by `\"votes\"` in descending order. Print each name and vote count.",
    hint: "Use `sorted(nominees, key=lambda x: x[\"votes\"], reverse=True)`.",
    solution: `nominees = [\n    {"name": "Kevin", "votes": 5},\n    {"name": "Phyllis", "votes": 12},\n    {"name": "Dwight", "votes": 8},\n    {"name": "Pam", "votes": 14},\n    {"name": "Oscar", "votes": 3}\n]\n\nranked = sorted(nominees, key=lambda x: x["votes"], reverse=True)\nfor n in ranked:\n    print(f"{n['name']}: {n['votes']}")`,
    starterCode: `# The Dundie Award Rankings\n\nnominees = [\n    {"name": "Kevin", "votes": 5},\n    {"name": "Phyllis", "votes": 12},\n    {"name": "Dwight", "votes": 8},\n    {"name": "Pam", "votes": 14},\n    {"name": "Oscar", "votes": 3}\n]\n\nranked = sorted(nominees, key=lambda x: x[___], reverse=True)\nfor n in ranked:\n    print(f"{n['name']}: {n['votes']}")`,
    testCases: [
      { input: "", expected: "Pam: 14\nPhyllis: 12\nDwight: 8\nKevin: 5\nOscar: 3", description: "Nominees sorted by votes descending" },
    ],
    concept: "Sorting",
    difficulty: "advanced",
  },
  {
    id: "to-py-10",
    themeId: "the-office",
    languageId: "python",
    order: 10,
    title: "Exception Handling",
    themedTitle: "The Pretzel Day Rationing System",
    narrative:
      "Stanley Hudson lives for Pretzel Day. But the pretzel station has a limited supply and can only serve whole numbers of pretzels. If someone tries to order a non-numeric quantity, the system must respond gracefully — no crashes, no tears.",
    prompt:
      "Write a function `order_pretzels(quantity)` that tries to convert `quantity` to an integer. If it succeeds and is greater than `0`, return `f\"Order confirmed: {quantity} pretzel(s)\"`.\nIf the quantity is `0` or less, return `\"Must order at least 1 pretzel\"`.\nIf a `ValueError` occurs, return `\"Invalid quantity — numbers only\"`.\nTest with `order_pretzels(\"3\")`, `order_pretzels(\"0\")`, and `order_pretzels(\"all\")`.",
    hint: "Use `try/except ValueError`. Inside `try`, convert to int, then check if it's greater than 0.",
    solution: `def order_pretzels(quantity):\n    try:\n        num = int(quantity)\n        if num > 0:\n            return f"Order confirmed: {quantity} pretzel(s)"\n        else:\n            return "Must order at least 1 pretzel"\n    except ValueError:\n        return "Invalid quantity — numbers only"\n\nprint(order_pretzels("3"))\nprint(order_pretzels("0"))\nprint(order_pretzels("all"))`,
    starterCode: `# The Pretzel Day Rationing System\n\ndef order_pretzels(quantity):\n    try:\n        num = int(quantity)\n        if num > 0:\n            return f"Order confirmed: {quantity} pretzel(s)"\n        else:\n            return "Must order at least 1 pretzel"\n    except ___:\n        return "Invalid quantity — numbers only"\n\nprint(order_pretzels("3"))    # Order confirmed: 3 pretzel(s)\nprint(order_pretzels("0"))    # Must order at least 1 pretzel\nprint(order_pretzels("all"))  # Invalid quantity — numbers only`,
    testCases: [
      { input: "3", expected: "Order confirmed: 3 pretzel(s)", description: "Valid quantity confirms the order" },
      { input: "0", expected: "Must order at least 1 pretzel", description: "Zero quantity is rejected" },
      { input: "all", expected: "Invalid quantity — numbers only", description: "Non-numeric input is caught" },
    ],
    concept: "Exception Handling",
    difficulty: "advanced",
  },
];
