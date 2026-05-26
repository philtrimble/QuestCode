import type { Challenge } from "@/types";

export const breakingBadPythonChallenges: Challenge[] = [
  {
    id: "bb-py-01",
    themeId: "breaking-bad",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "The Cook's Ledger",
    narrative:
      "Walter White stands at the whiteboard in the RV, chalk in hand. Before he cooks a single batch, he needs to track the essential numbers — product name, purity percentage, and whether the batch is ready to distribute. Say my name.",
    prompt:
      "Create three variables: `product` (a string, set it to `\"Blue Sky\"`), `purity` (an integer, set it to `99`), and `ready_to_distribute` (a boolean — set it to `False`). Then print all three.",
    hint: "In Python, strings use quotes, integers are just numbers, and booleans are `True` or `False` (capital first letter!).",
    solution: `product = "Blue Sky"\npurity = 99\nready_to_distribute = False\nprint(product)\nprint(purity)\nprint(ready_to_distribute)`,
    starterCode: `# The Cook's Ledger\n# Create the three variables below, then print them\n\nproduct = ___\npurity = ___\nready_to_distribute = ___\n\nprint(product)\nprint(purity)\nprint(ready_to_distribute)`,
    testCases: [
      { input: "", expected: "Blue Sky\n99\nFalse", description: "Prints product name, purity, and distribution status" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "bb-py-02",
    themeId: "breaking-bad",
    languageId: "python",
    order: 2,
    title: "Lists",
    themedTitle: "Territory Inventory",
    narrative:
      "Mike Ehrmantraut is nothing if not methodical. He keeps a list of Albuquerque territories under distribution — and Saul just negotiated a new one. Mike needs the list updated and wants to know the total number of territories.",
    prompt:
      "Create a list called `territories` with the values `[\"Northeast\", \"Downtown\", \"Westside\"]`. Then append `\"South Valley\"` to the list. Print the last element of the list and the total length.",
    hint: "Use `list.append(value)` to add to the end. To access the last element, use index `-1` — Python lets you count backwards from the end!",
    solution: `territories = ["Northeast", "Downtown", "Westside"]\nterritories.append("South Valley")\nprint(territories[-1])\nprint(len(territories))`,
    starterCode: `# Territory Inventory\n# Create the list, add a territory, then print the last element and length\n\nterritories = ___\nterritories.___(___)\n\nprint(territories[___])\nprint(___(territories))`,
    testCases: [
      { input: "", expected: "South Valley\n4", description: "Prints the new territory and total count of 4" },
    ],
    concept: "Lists",
    difficulty: "beginner",
  },
  {
    id: "bb-py-03",
    themeId: "breaking-bad",
    languageId: "python",
    order: 3,
    title: "Dictionaries",
    themedTitle: "The Car Wash Books",
    narrative:
      "Skyler White is meticulous about the A1A Car Wash finances — at least on paper. Behind the scenes she needs a record of how much cash each front business has processed this month. The numbers have to look legitimate.",
    prompt:
      "Create a dictionary called `monthly_cash` with three entries: `\"Car Wash\": 42000`, `\"Laser Tag\": 18000`, and `\"Nail Salon\": 9500`. Then print the value for `\"Car Wash\"` and the value for `\"Laser Tag\"`.",
    hint: "Access a dictionary value with `dict[\"key\"]`. Keys are case-sensitive — make sure the strings match exactly.",
    solution: `monthly_cash = {\n    "Car Wash": 42000,\n    "Laser Tag": 18000,\n    "Nail Salon": 9500\n}\n\nprint(monthly_cash["Car Wash"])\nprint(monthly_cash["Laser Tag"])`,
    starterCode: `# The Car Wash Books\n# Create the dictionary, then print two values\n\nmonthly_cash = {\n    "Car Wash": ___,\n    "Laser Tag": ___,\n    "Nail Salon": ___\n}\n\nprint(monthly_cash[___])\nprint(monthly_cash[___])`,
    testCases: [
      { input: "", expected: "42000\n18000", description: "Prints the car wash total (42000) and laser tag total (18000)" },
    ],
    concept: "Dictionaries",
    difficulty: "beginner",
  },
  {
    id: "bb-py-04",
    themeId: "breaking-bad",
    languageId: "python",
    order: 4,
    title: "Functions",
    themedTitle: "Grading the Product",
    narrative:
      "Walter White does not cook garbage. Every batch is graded before it leaves the lab — anything below standard gets cut or discarded. Jesse thinks anything above 90 is fine, but Walt has higher standards. Write the grader.",
    prompt:
      "Write a function called `grade_batch(purity)` that takes a purity percentage (0–100) and returns:\n- `\"Reject\"` if purity is below 70\n- `\"Acceptable\"` if purity is 70–94\n- `\"Blue Sky\"` if purity is 95 or above",
    hint: "Use `if`, `elif`, and `else` to handle the three cases. Make sure to `return` the string result, not `print` it.",
    solution: `def grade_batch(purity):\n    if purity < 70:\n        return "Reject"\n    elif purity < 95:\n        return "Acceptable"\n    else:\n        return "Blue Sky"\n\nprint(grade_batch(55))   # Reject\nprint(grade_batch(82))   # Acceptable\nprint(grade_batch(99))   # Blue Sky`,
    starterCode: `def grade_batch(purity):\n    # Return "Reject" if below 70\n    # Return "Acceptable" if 70-94\n    # Return "Blue Sky" if 95+\n    pass\n\nprint(grade_batch(55))   # Reject\nprint(grade_batch(82))   # Acceptable\nprint(grade_batch(99))   # Blue Sky`,
    testCases: [
      { input: "55", expected: "Reject", description: "Low purity is rejected" },
      { input: "82", expected: "Acceptable", description: "Mid purity is acceptable" },
      { input: "99", expected: "Blue Sky", description: "High purity earns the Blue Sky label" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "bb-py-05",
    themeId: "breaking-bad",
    languageId: "python",
    order: 5,
    title: "Loops",
    themedTitle: "Calculating the Yield",
    narrative:
      "Jesse keeps track of each cook's yield in pounds. Walter needs the total production across all batches — the DEA is getting closer, and knowing the exact numbers is critical for staying ahead. Do the math, Jesse.",
    prompt:
      "Write a function called `total_yield(batches)` that takes a list of numbers (pounds per batch). Use a `for` loop to add up all the values and return the total.",
    hint: "Start with a `total` variable set to `0` before the loop. Inside the loop, add each batch to the total with `total += batch`. Return `total` after the loop ends.",
    solution: `def total_yield(batches):\n    total = 0\n    for batch in batches:\n        total += batch\n    return total\n\nprint(total_yield([38, 42, 35, 50]))   # 165\nprint(total_yield([10, 20, 30]))       # 60`,
    starterCode: `def total_yield(batches):\n    total = ___\n    for ___ in batches:\n        total += ___\n    return total\n\nprint(total_yield([38, 42, 35, 50]))   # Should print 165\nprint(total_yield([10, 20, 30]))       # Should print 60`,
    testCases: [
      { input: "[38, 42, 35, 50]", expected: "165", description: "Sums four batch yields to 165" },
      { input: "[10, 20, 30]", expected: "60", description: "Sums three batch yields to 60" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
];
