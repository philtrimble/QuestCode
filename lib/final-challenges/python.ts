import type { FinalChallenge } from "@/types";

export const pythonFinalChallenges: Record<string, FinalChallenge> = {
  // ── Stranger Things ──────────────────────────────────────────────────────────
  "stranger-things-python": {
    id: "st-py-final",
    themeId: "stranger-things",
    languageId: "python",
    themedTitle: "The Upside Down Exam",
    introNarrative:
      "Eleven has opened the gate and the Upside Down is leaking into Hawkins. Before the party can seal it, each member must prove they have mastered the skills to survive. Dr. Owens has devised five tests — pass them all and the gate closes forever.",
    questions: [
      {
        id: "st-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "Hopper needs to log Eleven's official profile before the mission. Every field must be the right type or the lab system rejects it.",
        prompt:
          "Create three variables: `subject` (a string set to `\"Eleven\"`), `power_level` (an integer set to `11`), and `is_active` (a boolean set to `True`). Print all three on separate lines.",
        hint: "Python booleans are `True` and `False` with a capital letter. Use `print()` three times.",
        solution: `subject = "Eleven"\npower_level = 11\nis_active = True\nprint(subject)\nprint(power_level)\nprint(is_active)`,
        starterCode: `# Log Eleven's official profile\nsubject = ___\npower_level = ___\nis_active = ___\nprint(subject)\nprint(power_level)\nprint(is_active)`,
        testCases: [
          { input: "", expected: "Eleven\n11\nTrue", description: "Prints subject, power level, and active status" },
        ],
        conceptKeywords: ["=", "True", "print"],
      },
      {
        id: "st-py-final-2",
        concept: "Functions & Conditionals",
        narrative:
          "The Hawkins Lab alarm system needs a function that evaluates Demogorgon threat readings and returns the correct response level. Lives depend on it.",
        prompt:
          "Write a function `assess_threat(level)` that returns `\"Evacuate\"` if `level >= 80`, `\"Alert\"` if `level >= 40`, and `\"Monitor\"` otherwise. Print `assess_threat(90)`, `assess_threat(55)`, and `assess_threat(15)`.",
        hint: "Use `if`, `elif`, and `else`. Remember to `return` (not print) from inside the function.",
        solution: `def assess_threat(level):\n    if level >= 80:\n        return "Evacuate"\n    elif level >= 40:\n        return "Alert"\n    else:\n        return "Monitor"\n\nprint(assess_threat(90))\nprint(assess_threat(55))\nprint(assess_threat(15))`,
        starterCode: `def assess_threat(level):\n    # Return "Evacuate" if level >= 80,\n    # "Alert" if level >= 40, "Monitor" otherwise\n    pass\n\nprint(assess_threat(90))  # Evacuate\nprint(assess_threat(55))  # Alert\nprint(assess_threat(15))  # Monitor`,
        testCases: [
          { input: "90", expected: "Evacuate", description: "Level 90 triggers evacuation" },
          { input: "55", expected: "Alert", description: "Level 55 triggers alert" },
          { input: "15", expected: "Monitor", description: "Level 15 is monitoring only" },
        ],
        conceptKeywords: ["def", "if", "elif", "else", "return"],
      },
      {
        id: "st-py-final-3",
        concept: "Lists & Loops",
        narrative:
          "Dustin has catalogued every creature spotted in Hawkins. He needs to loop through the list and print a numbered roll call of every monster, so the party knows what they are up against.",
        prompt:
          "Given `creatures = [\"Demogorgon\", \"Mind Flayer\", \"Demodog\", \"Demobat\", \"Vecna\"]`, use a loop with `enumerate(creatures, start=1)` to print each creature numbered, like `1. Demogorgon`.",
        hint: "Use `for i, creature in enumerate(creatures, start=1):` then print with an f-string.",
        solution: `creatures = ["Demogorgon", "Mind Flayer", "Demodog", "Demobat", "Vecna"]\nfor i, creature in enumerate(creatures, start=1):\n    print(f"{i}. {creature}")`,
        starterCode: `creatures = ["Demogorgon", "Mind Flayer", "Demodog", "Demobat", "Vecna"]\nfor ___, ___ in enumerate(creatures, start=1):\n    print(f"{___}. {___}")`,
        testCases: [
          { input: "", expected: "1. Demogorgon\n2. Mind Flayer\n3. Demodog\n4. Demobat\n5. Vecna", description: "Numbered creature roster" },
        ],
        conceptKeywords: ["for", "enumerate", "print", "f\""],
      },
      {
        id: "st-py-final-4",
        concept: "Dictionaries",
        narrative:
          "Joyce is keeping a sightings log that maps each creature name to the number of confirmed encounters. She needs to find the most dangerous creature before calling Hopper.",
        prompt:
          "Create a dictionary `encounters = {\"Demogorgon\": 8, \"Demodog\": 15, \"Mind Flayer\": 3, \"Vecna\": 1}`. Write a function `most_dangerous(encounters)` that returns the key with the highest value. Print the result.",
        hint: "Use `max(encounters, key=encounters.get)` to find the key with the highest value.",
        solution: `encounters = {"Demogorgon": 8, "Demodog": 15, "Mind Flayer": 3, "Vecna": 1}\n\ndef most_dangerous(encounters):\n    return max(encounters, key=encounters.get)\n\nprint(most_dangerous(encounters))`,
        starterCode: `encounters = {"Demogorgon": 8, "Demodog": 15, "Mind Flayer": 3, "Vecna": 1}\n\ndef most_dangerous(encounters):\n    # Return the key with the highest value\n    return max(encounters, key=___)\n\nprint(most_dangerous(encounters))  # Demodog`,
        testCases: [
          { input: "", expected: "Demodog", description: "Demodog has the most encounters (15)" },
        ],
        conceptKeywords: ["def", "max", "encounters.get", "return"],
      },
      {
        id: "st-py-final-5",
        concept: "List Comprehension & String Methods",
        narrative:
          "Eleven intercepts a list of distress messages from the Upside Down. Each message needs to be cleaned — stripped of whitespace and uppercased — and only the short urgent ones (under 20 characters after cleaning) should be kept.",
        prompt:
          "Given `messages = [\"  gate open  \", \"send help immediately now\", \"  eleven  \", \"run now\"]`, use a list comprehension to build `urgent` containing each message after `.strip().upper()`, but only if the cleaned message is fewer than 20 characters long. Print `urgent`.",
        hint: "Apply `.strip().upper()` inside the comprehension condition: `[m.strip().upper() for m in messages if len(m.strip().upper()) < 20]`.",
        solution: `messages = ["  gate open  ", "send help immediately now", "  eleven  ", "run now"]\nurgent = [m.strip().upper() for m in messages if len(m.strip().upper()) < 20]\nprint(urgent)`,
        starterCode: `messages = ["  gate open  ", "send help immediately now", "  eleven  ", "run now"]\n# Build urgent: strip+uppercase each message, keep only those < 20 chars\nurgent = [___ for m in messages if ___]\nprint(urgent)`,
        testCases: [
          { input: "", expected: "['GATE OPEN', 'ELEVEN', 'RUN NOW']", description: "Short cleaned messages only" },
        ],
        conceptKeywords: ["for", "in", "if", "strip", "upper", "len"],
      },
    ],
  },

  // ── Severance ────────────────────────────────────────────────────────────────
  "severance-python": {
    id: "sv-py-final",
    themeId: "severance",
    languageId: "python",
    themedTitle: "The Lumon Final Evaluation",
    introNarrative:
      "The Macrodata Refinement department has been audited by Cobel. All severed employees must pass the Lumon Wellness Evaluation to prove they retain their refined skills. Mr. Milchick is watching. Do not disappoint the Board.",
    questions: [
      {
        id: "sv-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "Helly needs to create her employee profile in the Lumon system before refinement can begin. Every field must be precisely typed.",
        prompt:
          "Create variables: `employee` (string `\"Helly R\"`), `department` (string `\"MDR\"`), `quota` (integer `100`), and `compliant` (boolean `False`). Print all four.",
        hint: "Python booleans start with capital letters: `True` and `False`.",
        solution: `employee = "Helly R"\ndepartment = "MDR"\nquota = 100\ncompliant = False\nprint(employee)\nprint(department)\nprint(quota)\nprint(compliant)`,
        starterCode: `employee = ___\ndepartment = ___\nquota = ___\ncompliant = ___\nprint(employee)\nprint(department)\nprint(quota)\nprint(compliant)`,
        testCases: [
          { input: "", expected: "Helly R\nMDR\n100\nFalse", description: "Prints all four profile fields" },
        ],
        conceptKeywords: ["=", "False", "print"],
      },
      {
        id: "sv-py-final-2",
        concept: "Functions",
        narrative:
          "Mark needs a function to calculate how many more numbers need to be sorted to hit the refinement quota for the day.",
        prompt:
          "Write a function `remaining(total, completed)` that returns `total - completed`. Then call it with `total=100` and `completed=37` and print the result.",
        hint: "Define the function with `def`, use subtraction, and `return` the result.",
        solution: `def remaining(total, completed):\n    return total - completed\n\nprint(remaining(100, 37))`,
        starterCode: `def remaining(total, completed):\n    # Return how many are left\n    return ___\n\nprint(remaining(100, 37))  # 63`,
        testCases: [
          { input: "", expected: "63", description: "100 minus 37 is 63 remaining" },
        ],
        conceptKeywords: ["def", "return", "-", "print"],
      },
      {
        id: "sv-py-final-3",
        concept: "Lists & Loops",
        narrative:
          "Dylan has collected all the scary numbers from today's refinement bin. He needs to loop through and print each one prefixed with its bin position.",
        prompt:
          "Given `numbers = [8472, 3091, 6654, 1122, 9003]`, loop with `enumerate(numbers, start=1)` and print each like `Bin 1: 8472`.",
        hint: "Use an f-string inside the loop: `print(f\"Bin {i}: {num}\")`.",
        solution: `numbers = [8472, 3091, 6654, 1122, 9003]\nfor i, num in enumerate(numbers, start=1):\n    print(f"Bin {i}: {num}")`,
        starterCode: `numbers = [8472, 3091, 6654, 1122, 9003]\nfor i, num in enumerate(numbers, start=1):\n    print(f"___")`,
        testCases: [
          { input: "", expected: "Bin 1: 8472\nBin 2: 3091\nBin 3: 6654\nBin 4: 1122\nBin 5: 9003", description: "All numbers with bin labels" },
        ],
        conceptKeywords: ["for", "enumerate", "f\"", "print"],
      },
      {
        id: "sv-py-final-4",
        concept: "Dictionaries",
        narrative:
          "Cobel keeps a dictionary mapping each MDR employee to their current refinement score. She needs to check if Irving has been logged and retrieve his score.",
        prompt:
          "Create `scores = {\"Mark\": 72, \"Helly\": 61, \"Dylan\": 88, \"Irving\": 79}`. Print whether `\"Irving\"` is in `scores` (using the `in` operator). Then print Irving's score.",
        hint: "Use `\"Irving\" in scores` to check membership, and `scores[\"Irving\"]` to get the value.",
        solution: `scores = {"Mark": 72, "Helly": 61, "Dylan": 88, "Irving": 79}\nprint("Irving" in scores)\nprint(scores["Irving"])`,
        starterCode: `scores = {"Mark": 72, "Helly": 61, "Dylan": 88, "Irving": 79}\nprint(___ in scores)\nprint(scores[___])`,
        testCases: [
          { input: "", expected: "True\n79", description: "Irving is in scores and has score 79" },
        ],
        conceptKeywords: ["in", "scores", "print", "[\"Irving\"]"],
      },
      {
        id: "sv-py-final-5",
        concept: "Exception Handling & String Methods",
        narrative:
          "The refinement terminal accepts quota inputs but sometimes employees type gibberish. The system must handle invalid entries gracefully so the whole floor doesn't crash.",
        prompt:
          "Write a function `parse_quota(raw)` that strips `raw`, tries to convert it to an integer with `int()`, and returns `f\"Quota set: {value}\"`. If a `ValueError` occurs, return `\"Invalid quota — please re-enter\"`.",
        hint: "Use a `try/except ValueError` block. Strip whitespace before converting.",
        solution: `def parse_quota(raw):\n    try:\n        value = int(raw.strip())\n        return f"Quota set: {value}"\n    except ValueError:\n        return "Invalid quota — please re-enter"\n\nprint(parse_quota("  85  "))\nprint(parse_quota("abc"))`,
        starterCode: `def parse_quota(raw):\n    try:\n        value = int(raw.strip())\n        return f"Quota set: {value}"\n    except ___:\n        return "Invalid quota — please re-enter"\n\nprint(parse_quota("  85  "))  # Quota set: 85\nprint(parse_quota("abc"))     # Invalid quota — please re-enter`,
        testCases: [
          { input: "  85  ", expected: "Quota set: 85", description: "Valid quota is parsed and returned" },
          { input: "abc", expected: "Invalid quota — please re-enter", description: "Invalid input is handled gracefully" },
        ],
        conceptKeywords: ["def", "try", "except", "ValueError", "strip", "int", "return"],
      },
    ],
  },

  // ── Breaking Bad ─────────────────────────────────────────────────────────────
  "breaking-bad-python": {
    id: "bb-py-final",
    themeId: "breaking-bad",
    languageId: "python",
    themedTitle: "The Heisenberg Test",
    introNarrative:
      "Walter White has set up a final evaluation in the superlab. Every chemist who wants to cook must prove their abilities before being handed a respirator. Jesse is nervous. Saul says you'll be fine. Now prove it.",
    questions: [
      {
        id: "bb-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "Walt needs to log the latest batch details before Gus gets suspicious. Every field must be exact.",
        prompt:
          "Create variables: `product` (string `\"Blue Sky\"`), `purity` (float `99.1`), `batch_size` (integer `50`), and `ready` (boolean `True`). Print all four.",
        hint: "Floats are decimal numbers like `99.1`. Use four separate `print()` calls.",
        solution: `product = "Blue Sky"\npurity = 99.1\nbatch_size = 50\nready = True\nprint(product)\nprint(purity)\nprint(batch_size)\nprint(ready)`,
        starterCode: `product = ___\npurity = ___\nbatch_size = ___\nready = ___\nprint(product)\nprint(purity)\nprint(batch_size)\nprint(ready)`,
        testCases: [
          { input: "", expected: "Blue Sky\n99.1\n50\nTrue", description: "Prints all batch details" },
        ],
        conceptKeywords: ["=", "True", "print"],
      },
      {
        id: "bb-py-final-2",
        concept: "Functions & Conditionals",
        narrative:
          "Hank needs a function to classify meth purity levels based on DEA thresholds so he knows what he's dealing with.",
        prompt:
          "Write a function `classify_purity(purity)` that returns `\"Heisenberg Grade\"` if `purity >= 99`, `\"Street Quality\"` if `purity >= 70`, and `\"Junk\"` otherwise. Print results for `99.1`, `82.0`, and `45.0`.",
        hint: "Use `if`, `elif`, `else`, and `return`. Do not print inside the function.",
        solution: `def classify_purity(purity):\n    if purity >= 99:\n        return "Heisenberg Grade"\n    elif purity >= 70:\n        return "Street Quality"\n    else:\n        return "Junk"\n\nprint(classify_purity(99.1))\nprint(classify_purity(82.0))\nprint(classify_purity(45.0))`,
        starterCode: `def classify_purity(purity):\n    if purity >= 99:\n        return ___\n    elif purity >= 70:\n        return ___\n    else:\n        return ___\n\nprint(classify_purity(99.1))\nprint(classify_purity(82.0))\nprint(classify_purity(45.0))`,
        testCases: [
          { input: "99.1", expected: "Heisenberg Grade", description: "99.1 is Heisenberg Grade" },
          { input: "82.0", expected: "Street Quality", description: "82.0 is Street Quality" },
          { input: "45.0", expected: "Junk", description: "45.0 is Junk" },
        ],
        conceptKeywords: ["def", "if", "elif", "else", "return"],
      },
      {
        id: "bb-py-final-3",
        concept: "Lists & Loops",
        narrative:
          "Saul has a list of clients with their debt amounts. Jesse needs to print every client who owes more than $5,000 so Walt knows who to send Mike after.",
        prompt:
          "Given `clients = [(\"Badger\", 2000), (\"Skinny Pete\", 7500), (\"Combo\", 12000), (\"Huell\", 500), (\"Kuby\", 6000)]`, loop through and print the name of every client whose debt is greater than 5000.",
        hint: "Unpack each tuple in the loop: `for name, debt in clients:` then check `if debt > 5000`.",
        solution: `clients = [("Badger", 2000), ("Skinny Pete", 7500), ("Combo", 12000), ("Huell", 500), ("Kuby", 6000)]\nfor name, debt in clients:\n    if debt > 5000:\n        print(name)`,
        starterCode: `clients = [("Badger", 2000), ("Skinny Pete", 7500), ("Combo", 12000), ("Huell", 500), ("Kuby", 6000)]\nfor name, debt in clients:\n    if ___:\n        print(name)`,
        testCases: [
          { input: "", expected: "Skinny Pete\nCombo\nKuby", description: "Clients owing more than $5000" },
        ],
        conceptKeywords: ["for", "in", "if", "print"],
      },
      {
        id: "bb-py-final-4",
        concept: "Dictionaries",
        narrative:
          "Gus maintains a ledger mapping each distributor to their territory. Walt needs to add a new distributor and check the total number of territories.",
        prompt:
          "Start with `territories = {\"Albuquerque\": \"Gus\", \"Phoenix\": \"Mike\", \"Santa Fe\": \"Lydia\"}`. Add a new entry `\"El Paso\": \"Todd\"`. Print the length of `territories` and then print `territories[\"El Paso\"]`.",
        hint: "Add a key with `territories[\"El Paso\"] = \"Todd\"`. Use `len()` for the count.",
        solution: `territories = {"Albuquerque": "Gus", "Phoenix": "Mike", "Santa Fe": "Lydia"}\nterritories["El Paso"] = "Todd"\nprint(len(territories))\nprint(territories["El Paso"])`,
        starterCode: `territories = {"Albuquerque": "Gus", "Phoenix": "Mike", "Santa Fe": "Lydia"}\nterritories[___] = ___\nprint(len(territories))\nprint(territories["El Paso"])`,
        testCases: [
          { input: "", expected: "4\nTodd", description: "4 territories, El Paso is Todd's" },
        ],
        conceptKeywords: ["territories", "=", "len", "print"],
      },
      {
        id: "bb-py-final-5",
        concept: "List Comprehension & Sorting",
        narrative:
          "Walt has a list of batch purities from the last month. He wants only the top-grade batches (purity above 95) sorted from highest to lowest to show Gus what he's capable of.",
        prompt:
          "Given `batches = [87.2, 99.1, 94.5, 98.6, 72.0, 99.9, 95.3]`, use a list comprehension to create `top_grade` containing only values above 95, then sort `top_grade` in descending order and print it.",
        hint: "List comprehension: `[b for b in batches if b > 95]`. Sort descending: `top_grade.sort(reverse=True)`.",
        solution: `batches = [87.2, 99.1, 94.5, 98.6, 72.0, 99.9, 95.3]\ntop_grade = [b for b in batches if b > 95]\ntop_grade.sort(reverse=True)\nprint(top_grade)`,
        starterCode: `batches = [87.2, 99.1, 94.5, 98.6, 72.0, 99.9, 95.3]\ntop_grade = [___ for b in batches if ___]\ntop_grade.sort(reverse=___)\nprint(top_grade)`,
        testCases: [
          { input: "", expected: "[99.9, 99.1, 98.6, 95.3]", description: "Top-grade batches sorted descending" },
        ],
        conceptKeywords: ["for", "in", "if", "sort", "reverse=True"],
      },
    ],
  },

  // ── The Office ───────────────────────────────────────────────────────────────
  "the-office-python": {
    id: "to-py-final",
    themeId: "the-office",
    languageId: "python",
    themedTitle: "The Dunder Mifflin Performance Review",
    introNarrative:
      "Michael Scott has announced a surprise performance review for all Scranton employees. HR has sent over five Python challenges that must be completed before the end of the day. Dwight is already done. Do not let Dwight win.",
    questions: [
      {
        id: "to-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "Pam is setting up the new employee database system and needs to enter Michael's profile correctly.",
        prompt:
          "Create variables: `name` (string `\"Michael Scott\"`), `branch` (string `\"Scranton\"`), `sales` (integer `0`), and `world_best_boss` (boolean `True`). Print all four.",
        hint: "Use four `print()` statements, one for each variable.",
        solution: `name = "Michael Scott"\nbranch = "Scranton"\nsales = 0\nworld_best_boss = True\nprint(name)\nprint(branch)\nprint(sales)\nprint(world_best_boss)`,
        starterCode: `name = ___\nbranch = ___\nsales = ___\nworld_best_boss = ___\nprint(name)\nprint(branch)\nprint(sales)\nprint(world_best_boss)`,
        testCases: [
          { input: "", expected: "Michael Scott\nScranton\n0\nTrue", description: "Prints Michael's complete profile" },
        ],
        conceptKeywords: ["=", "True", "print"],
      },
      {
        id: "to-py-final-2",
        concept: "Functions & Conditionals",
        narrative:
          "Dwight is assessing the sales performance of each employee. Anything above quota gets a gold star, below quota gets a stern look.",
        prompt:
          "Write a function `review(sales, quota)` that returns `\"Gold Star\"` if `sales > quota`, `\"Meets Expectations\"` if `sales == quota`, and `\"Needs Improvement\"` otherwise. Print reviews for `(120, 100)`, `(100, 100)`, and `(60, 100)`.",
        hint: "Use `if/elif/else` inside the function, and `return` the result each time.",
        solution: `def review(sales, quota):\n    if sales > quota:\n        return "Gold Star"\n    elif sales == quota:\n        return "Meets Expectations"\n    else:\n        return "Needs Improvement"\n\nprint(review(120, 100))\nprint(review(100, 100))\nprint(review(60, 100))`,
        starterCode: `def review(sales, quota):\n    if sales > quota:\n        return ___\n    elif sales == quota:\n        return ___\n    else:\n        return ___\n\nprint(review(120, 100))\nprint(review(100, 100))\nprint(review(60, 100))`,
        testCases: [
          { input: "120, 100", expected: "Gold Star", description: "Above quota earns a Gold Star" },
          { input: "100, 100", expected: "Meets Expectations", description: "Equal to quota meets expectations" },
          { input: "60, 100", expected: "Needs Improvement", description: "Below quota needs improvement" },
        ],
        conceptKeywords: ["def", "if", "elif", "else", "return", "=="],
      },
      {
        id: "to-py-final-3",
        concept: "Lists & Loops",
        narrative:
          "Jim is keeping a list of pranks he has pulled on Dwight. He needs to print each prank with its number so he can show Pam.",
        prompt:
          "Given `pranks = [\"Jello mold\", \"Stapler in jello\", \"Fake fire drill\", \"Asian Jim\", \"Dwight's desk moved\"]`, loop with `enumerate(pranks, start=1)` and print each like `1. Jello mold`.",
        hint: "Use `for i, prank in enumerate(pranks, start=1):` and an f-string.",
        solution: `pranks = ["Jello mold", "Stapler in jello", "Fake fire drill", "Asian Jim", "Dwight's desk moved"]\nfor i, prank in enumerate(pranks, start=1):\n    print(f"{i}. {prank}")`,
        starterCode: `pranks = ["Jello mold", "Stapler in jello", "Fake fire drill", "Asian Jim", "Dwight's desk moved"]\nfor i, prank in enumerate(pranks, start=1):\n    print(f"___")`,
        testCases: [
          { input: "", expected: "1. Jello mold\n2. Stapler in jello\n3. Fake fire drill\n4. Asian Jim\n5. Dwight's desk moved", description: "All pranks numbered" },
        ],
        conceptKeywords: ["for", "enumerate", "f\"", "print"],
      },
      {
        id: "to-py-final-4",
        concept: "String Methods",
        narrative:
          "Kevin typed the sales report in all lowercase and with typos in spacing. Oscar needs it cleaned up before it goes to corporate.",
        prompt:
          "Given `report = \"  total sales: dunder mifflin scranton  \"`, apply `.strip()`, then `.title()`, then `.replace(\"Dunder Mifflin\", \"DM\")`. Print the result.",
        hint: "Chain the methods: `report.strip().title().replace(...)`.",
        solution: `report = "  total sales: dunder mifflin scranton  "\nprint(report.strip().title().replace("Dunder Mifflin", "DM"))`,
        starterCode: `report = "  total sales: dunder mifflin scranton  "\nprint(report.strip().title().replace(___, ___))`,
        testCases: [
          { input: "", expected: "Total Sales: Dm Scranton", description: "Stripped, title-cased, and replaced" },
        ],
        conceptKeywords: ["strip", "title", "replace", "print"],
      },
      {
        id: "to-py-final-5",
        concept: "Nested Data Structures",
        narrative:
          "The HR file is a list of employee dictionaries. Toby needs to find everyone in the Sales department and print their names.",
        prompt:
          "Given `employees = [{\"name\": \"Jim\", \"dept\": \"Sales\"}, {\"name\": \"Dwight\", \"dept\": \"Sales\"}, {\"name\": \"Oscar\", \"dept\": \"Accounting\"}, {\"name\": \"Phyllis\", \"dept\": \"Sales\"}]`, loop through and print the name of every employee whose `dept` is `\"Sales\"`.",
        hint: "Access each employee's department with `emp[\"dept\"]` and their name with `emp[\"name\"]`.",
        solution: `employees = [{"name": "Jim", "dept": "Sales"}, {"name": "Dwight", "dept": "Sales"}, {"name": "Oscar", "dept": "Accounting"}, {"name": "Phyllis", "dept": "Sales"}]\nfor emp in employees:\n    if emp["dept"] == "Sales":\n        print(emp["name"])`,
        starterCode: `employees = [{"name": "Jim", "dept": "Sales"}, {"name": "Dwight", "dept": "Sales"}, {"name": "Oscar", "dept": "Accounting"}, {"name": "Phyllis", "dept": "Sales"}]\nfor emp in employees:\n    if emp[___] == "Sales":\n        print(emp[___])`,
        testCases: [
          { input: "", expected: "Jim\nDwight\nPhyllis", description: "Sales department employees only" },
        ],
        conceptKeywords: ["for", "in", "if", "==", "print", "[\"dept\"]", "[\"name\"]"],
      },
    ],
  },

  // ── Game of Thrones ──────────────────────────────────────────────────────────
  "game-of-thrones-python": {
    id: "got-py-final",
    themeId: "game-of-thrones",
    languageId: "python",
    themedTitle: "The Maester's Trial",
    introNarrative:
      "The Citadel has opened its final trial for all maester candidates. Five scrolls must be completed before the Grand Maester will grant you your chain. Samwell Tarly completed all five in record time. Do the same.",
    questions: [
      {
        id: "got-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "The raven has arrived with details of a new lord. The Citadel's registry must be updated immediately.",
        prompt:
          "Create variables: `lord` (string `\"Eddard Stark\"`), `house` (string `\"Stark\"`), `bannermen` (integer `2000`), and `alive` (boolean `False`). Print all four.",
        hint: "Use four `print()` calls. Remember `False` starts with a capital letter in Python.",
        solution: `lord = "Eddard Stark"\nhouse = "Stark"\nbannermen = 2000\nalive = False\nprint(lord)\nprint(house)\nprint(bannermen)\nprint(alive)`,
        starterCode: `lord = ___\nhouse = ___\nbannermen = ___\nalive = ___\nprint(lord)\nprint(house)\nprint(bannermen)\nprint(alive)`,
        testCases: [
          { input: "", expected: "Eddard Stark\nStark\n2000\nFalse", description: "Prints lord's complete registry entry" },
        ],
        conceptKeywords: ["=", "False", "print"],
      },
      {
        id: "got-py-final-2",
        concept: "Functions & Conditionals",
        narrative:
          "The Night's Watch needs a function to assess whether a wilding threat is minor, serious, or an all-out war. The Wall depends on it.",
        prompt:
          "Write a function `threat_status(wildlings)` that returns `\"Peace\"` if `wildlings < 100`, `\"Alert the Watch\"` if `wildlings < 1000`, and `\"Light the Beacons\"` otherwise. Print results for `50`, `500`, and `5000`.",
        hint: "Use `if`, `elif`, and `else`. Return strings, don't print inside the function.",
        solution: `def threat_status(wildlings):\n    if wildlings < 100:\n        return "Peace"\n    elif wildlings < 1000:\n        return "Alert the Watch"\n    else:\n        return "Light the Beacons"\n\nprint(threat_status(50))\nprint(threat_status(500))\nprint(threat_status(5000))`,
        starterCode: `def threat_status(wildlings):\n    if wildlings < 100:\n        return ___\n    elif wildlings < 1000:\n        return ___\n    else:\n        return ___\n\nprint(threat_status(50))\nprint(threat_status(500))\nprint(threat_status(5000))`,
        testCases: [
          { input: "50", expected: "Peace", description: "50 wildlings is peaceful" },
          { input: "500", expected: "Alert the Watch", description: "500 is alert level" },
          { input: "5000", expected: "Light the Beacons", description: "5000 demands beacons" },
        ],
        conceptKeywords: ["def", "if", "elif", "else", "return"],
      },
      {
        id: "got-py-final-3",
        concept: "Dictionaries",
        narrative:
          "The Hand of the King keeps a dictionary of each great house and its sigil. Tyrion needs to add a new entry for House Mormont.",
        prompt:
          "Create `sigils = {\"Stark\": \"Direwolf\", \"Lannister\": \"Lion\", \"Targaryen\": \"Dragon\"}`. Add `\"Mormont\": \"Bear\"`. Print the length of `sigils` and then print `sigils[\"Mormont\"]`.",
        hint: "Add a key: `sigils[\"Mormont\"] = \"Bear\"`. Use `len()` for the count.",
        solution: `sigils = {"Stark": "Direwolf", "Lannister": "Lion", "Targaryen": "Dragon"}\nsigils["Mormont"] = "Bear"\nprint(len(sigils))\nprint(sigils["Mormont"])`,
        starterCode: `sigils = {"Stark": "Direwolf", "Lannister": "Lion", "Targaryen": "Dragon"}\nsigils[___] = ___\nprint(len(sigils))\nprint(sigils["Mormont"])`,
        testCases: [
          { input: "", expected: "4\nBear", description: "4 houses, Mormont's sigil is Bear" },
        ],
        conceptKeywords: ["sigils", "len", "print", "[\"Mormont\"]"],
      },
      {
        id: "got-py-final-4",
        concept: "Lists & Sorting",
        narrative:
          "The Small Council has ranked the great houses by military strength. Tywin needs them sorted from weakest to strongest to plan the conquest.",
        prompt:
          "Given `houses = [{\"name\": \"Stark\", \"strength\": 2000}, {\"name\": \"Lannister\", \"strength\": 5000}, {\"name\": \"Baratheon\", \"strength\": 3500}, {\"name\": \"Mormont\", \"strength\": 800}]`, use `sorted()` with `key=lambda x: x[\"strength\"]` and print each name and strength in sorted order.",
        hint: "Use `sorted(houses, key=lambda x: x[\"strength\"])` then loop to print each.",
        solution: `houses = [{"name": "Stark", "strength": 2000}, {"name": "Lannister", "strength": 5000}, {"name": "Baratheon", "strength": 3500}, {"name": "Mormont", "strength": 800}]\nranked = sorted(houses, key=lambda x: x["strength"])\nfor h in ranked:\n    print(f"{h['name']}: {h['strength']}")`,
        starterCode: `houses = [{"name": "Stark", "strength": 2000}, {"name": "Lannister", "strength": 5000}, {"name": "Baratheon", "strength": 3500}, {"name": "Mormont", "strength": 800}]\nranked = sorted(houses, key=lambda x: x[___])\nfor h in ranked:\n    print(f"{h['name']}: {h['strength']}")`,
        testCases: [
          { input: "", expected: "Mormont: 800\nStark: 2000\nBaratheon: 3500\nLannister: 5000", description: "Houses sorted by strength ascending" },
        ],
        conceptKeywords: ["sorted", "lambda", "key", "for", "print"],
      },
      {
        id: "got-py-final-5",
        concept: "List Comprehension & String Methods",
        narrative:
          "The raven scrolls have arrived in mixed case and with padding. Only the ones mentioning 'dragons' are relevant to Daenerys. She needs them cleaned and filtered fast.",
        prompt:
          "Given `scrolls = [\"  dragons sighted  \", \"Stannis marches\", \"  three dragons  \", \"Robb attacks\", \"  DRAGONS return  \"]`, use a list comprehension to build `dragon_scrolls` that strips and lowercases each scroll and keeps only those containing `\"dragons\"`. Print the result.",
        hint: "Use `.strip().lower()` to clean, then check `\"dragons\" in cleaned` in the condition.",
        solution: `scrolls = ["  dragons sighted  ", "Stannis marches", "  three dragons  ", "Robb attacks", "  DRAGONS return  "]\ndragon_scrolls = [s.strip().lower() for s in scrolls if "dragons" in s.strip().lower()]\nprint(dragon_scrolls)`,
        starterCode: `scrolls = ["  dragons sighted  ", "Stannis marches", "  three dragons  ", "Robb attacks", "  DRAGONS return  "]\ndragon_scrolls = [s.strip().lower() for s in scrolls if ___ in s.strip().lower()]\nprint(dragon_scrolls)`,
        testCases: [
          { input: "", expected: "['dragons sighted', 'three dragons', 'dragons return']", description: "Dragon scrolls stripped and lowercased" },
        ],
        conceptKeywords: ["for", "in", "if", "strip", "lower"],
      },
    ],
  },

  // ── The Matrix ───────────────────────────────────────────────────────────────
  "the-matrix-python": {
    id: "mx-py-final",
    themeId: "the-matrix",
    languageId: "python",
    themedTitle: "The Oracle's Final Test",
    introNarrative:
      "The Oracle has laid out five challenges that stand between you and the truth about the Matrix. Neo passed these tests before he believed. Now it is your turn to prove you are the One — or at least a decent Python programmer.",
    questions: [
      {
        id: "mx-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "Morpheus needs to log the system profile of every potential candidate before offering them the red pill.",
        prompt:
          "Create variables: `candidate` (string `\"Neo\"`), `real_name` (string `\"Thomas Anderson\"`), `awakened` (boolean `False`), and `power_level` (integer `0`). Print all four.",
        hint: "Use four `print()` calls.",
        solution: `candidate = "Neo"\nreal_name = "Thomas Anderson"\nawakened = False\npower_level = 0\nprint(candidate)\nprint(real_name)\nprint(awakened)\nprint(power_level)`,
        starterCode: `candidate = ___\nreal_name = ___\nawakened = ___\npower_level = ___\nprint(candidate)\nprint(real_name)\nprint(awakened)\nprint(power_level)`,
        testCases: [
          { input: "", expected: "Neo\nThomas Anderson\nFalse\n0", description: "Candidate profile printed correctly" },
        ],
        conceptKeywords: ["=", "False", "print"],
      },
      {
        id: "mx-py-final-2",
        concept: "Functions & Conditionals",
        narrative:
          "The Architect has devised a system to classify agents by threat level. Morpheus needs to know what resistance level to deploy.",
        prompt:
          "Write a function `agent_threat(agents)` that returns `\"Stand down\"` if `agents == 0`, `\"Engage\"` if `agents <= 3`, and `\"Flee\"` otherwise. Print results for `0`, `2`, and `7`.",
        hint: "Use `if/elif/else` and `return` the string. Check for zero first.",
        solution: `def agent_threat(agents):\n    if agents == 0:\n        return "Stand down"\n    elif agents <= 3:\n        return "Engage"\n    else:\n        return "Flee"\n\nprint(agent_threat(0))\nprint(agent_threat(2))\nprint(agent_threat(7))`,
        starterCode: `def agent_threat(agents):\n    if agents == 0:\n        return ___\n    elif agents <= 3:\n        return ___\n    else:\n        return ___\n\nprint(agent_threat(0))\nprint(agent_threat(2))\nprint(agent_threat(7))`,
        testCases: [
          { input: "0", expected: "Stand down", description: "No agents: stand down" },
          { input: "2", expected: "Engage", description: "2 agents: engage" },
          { input: "7", expected: "Flee", description: "7 agents: flee" },
        ],
        conceptKeywords: ["def", "if", "elif", "else", "==", "return"],
      },
      {
        id: "mx-py-final-3",
        concept: "Lists & Loops",
        narrative:
          "Tank has a list of all crew members aboard the Nebuchadnezzar. He needs to print only the ones who are jacked into the Matrix right now.",
        prompt:
          "Given `crew = [(\"Neo\", True), (\"Trinity\", True), (\"Morpheus\", False), (\"Tank\", False), (\"Apoc\", True)]`, loop through and print the name of every crew member whose second value (jacked_in) is `True`.",
        hint: "Unpack each tuple: `for name, jacked_in in crew:` then check `if jacked_in:`.",
        solution: `crew = [("Neo", True), ("Trinity", True), ("Morpheus", False), ("Tank", False), ("Apoc", True)]\nfor name, jacked_in in crew:\n    if jacked_in:\n        print(name)`,
        starterCode: `crew = [("Neo", True), ("Trinity", True), ("Morpheus", False), ("Tank", False), ("Apoc", True)]\nfor name, jacked_in in crew:\n    if ___:\n        print(name)`,
        testCases: [
          { input: "", expected: "Neo\nTrinity\nApoc", description: "Only jacked-in crew members" },
        ],
        conceptKeywords: ["for", "in", "if", "print"],
      },
      {
        id: "mx-py-final-4",
        concept: "Dictionaries",
        narrative:
          "The Oracle keeps a registry of programs and their purposes. Neo needs to find out what the Keymaker does.",
        prompt:
          "Create `programs = {\"Oracle\": \"guidance\", \"Keymaker\": \"access\", \"Merovingian\": \"smuggling\", \"Architect\": \"design\"}`. Print the value for `\"Keymaker\"` and print the total number of programs.",
        hint: "Use `programs[\"Keymaker\"]` to get the value and `len(programs)` for the count.",
        solution: `programs = {"Oracle": "guidance", "Keymaker": "access", "Merovingian": "smuggling", "Architect": "design"}\nprint(programs["Keymaker"])\nprint(len(programs))`,
        starterCode: `programs = {"Oracle": "guidance", "Keymaker": "access", "Merovingian": "smuggling", "Architect": "design"}\nprint(programs[___])\nprint(len(programs))`,
        testCases: [
          { input: "", expected: "access\n4", description: "Keymaker's purpose and total program count" },
        ],
        conceptKeywords: ["programs", "len", "print", "[\"Keymaker\"]"],
      },
      {
        id: "mx-py-final-5",
        concept: "Exception Handling",
        narrative:
          "The extraction port sometimes receives corrupted coordinates. The resistance needs to handle bad data gracefully so the whole system does not crash.",
        prompt:
          "Write a function `extract(coordinate)` that tries to convert `coordinate` to an integer. If successful, returns `f\"Extracting from sector {coordinate}\"`. If a `ValueError` is raised, returns `\"Corrupted coordinate — abort\"`.",
        hint: "Use `try/except ValueError`. Inside try, convert with `int(coordinate)`.",
        solution: `def extract(coordinate):\n    try:\n        int(coordinate)\n        return f"Extracting from sector {coordinate}"\n    except ValueError:\n        return "Corrupted coordinate — abort"\n\nprint(extract("42"))\nprint(extract("matrix"))`,
        starterCode: `def extract(coordinate):\n    try:\n        int(coordinate)\n        return f"Extracting from sector {coordinate}"\n    except ___:\n        return "Corrupted coordinate — abort"\n\nprint(extract("42"))\nprint(extract("matrix"))`,
        testCases: [
          { input: "42", expected: "Extracting from sector 42", description: "Valid coordinate triggers extraction" },
          { input: "matrix", expected: "Corrupted coordinate — abort", description: "Invalid coordinate is caught" },
        ],
        conceptKeywords: ["def", "try", "except", "ValueError", "int", "return"],
      },
    ],
  },

  // ── Rick and Morty ───────────────────────────────────────────────────────────
  "rick-and-morty-python": {
    id: "rm-py-final",
    themeId: "rick-and-morty",
    languageId: "python",
    themedTitle: "The Citadel Certification Exam",
    introNarrative:
      "The Council of Ricks has mandated a certification exam for all interdimensional coders. Rick himself wrote the questions — and he says they are easy. Morty is worried you won't pass. Prove him wrong.",
    questions: [
      {
        id: "rm-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "Rick needs to initialize the portal gun's tracking variables before the next adventure. Every field counts.",
        prompt:
          "Create variables: `dimension` (string `\"C-137\"`), `portal_charge` (integer `100`), `jerry_included` (boolean `False`). Print all three.",
        hint: "Use `print()` three times.",
        solution: `dimension = "C-137"\nportal_charge = 100\njerry_included = False\nprint(dimension)\nprint(portal_charge)\nprint(jerry_included)`,
        starterCode: `dimension = ___\nportal_charge = ___\njerry_included = ___\nprint(dimension)\nprint(portal_charge)\nprint(jerry_included)`,
        testCases: [
          { input: "", expected: "C-137\n100\nFalse", description: "Prints dimension, charge, and Jerry status" },
        ],
        conceptKeywords: ["=", "False", "print"],
      },
      {
        id: "rm-py-final-2",
        concept: "Functions & Conditionals",
        narrative:
          "Morty needs to know whether a planet is safe to land on based on its danger index. Rick refuses to explain — just write the function.",
        prompt:
          "Write a function `landing_status(danger)` that returns `\"Clear for landing\"` if `danger < 30`, `\"Proceed with caution\"` if `danger < 70`, and `\"Abort — too dangerous\"` otherwise. Print results for `10`, `50`, and `90`.",
        hint: "Use `if`, `elif`, `else`, and `return`.",
        solution: `def landing_status(danger):\n    if danger < 30:\n        return "Clear for landing"\n    elif danger < 70:\n        return "Proceed with caution"\n    else:\n        return "Abort — too dangerous"\n\nprint(landing_status(10))\nprint(landing_status(50))\nprint(landing_status(90))`,
        starterCode: `def landing_status(danger):\n    if danger < 30:\n        return ___\n    elif danger < 70:\n        return ___\n    else:\n        return ___\n\nprint(landing_status(10))\nprint(landing_status(50))\nprint(landing_status(90))`,
        testCases: [
          { input: "10", expected: "Clear for landing", description: "Danger 10 is safe" },
          { input: "50", expected: "Proceed with caution", description: "Danger 50 is cautious" },
          { input: "90", expected: "Abort — too dangerous", description: "Danger 90 is abort" },
        ],
        conceptKeywords: ["def", "if", "elif", "else", "return"],
      },
      {
        id: "rm-py-final-3",
        concept: "Dictionaries",
        narrative:
          "Rick's dimension catalogue maps dimension IDs to their notable inhabitants. He needs to check if C-137 is listed and retrieve its entry.",
        prompt:
          "Create `dimensions = {\"C-137\": \"Rick & Morty\", \"J19-Zeta7\": \"Birdperson\", \"Cronenberg\": \"Cronenbergs\"}`. Print whether `\"C-137\"` is in `dimensions`. Then print `dimensions[\"C-137\"]`.",
        hint: "Use `\"C-137\" in dimensions` to check, then access with square brackets.",
        solution: `dimensions = {"C-137": "Rick & Morty", "J19-Zeta7": "Birdperson", "Cronenberg": "Cronenbergs"}\nprint("C-137" in dimensions)\nprint(dimensions["C-137"])`,
        starterCode: `dimensions = {"C-137": "Rick & Morty", "J19-Zeta7": "Birdperson", "Cronenberg": "Cronenbergs"}\nprint(___ in dimensions)\nprint(dimensions[___])`,
        testCases: [
          { input: "", expected: "True\nRick & Morty", description: "C-137 is in dimensions, occupied by Rick & Morty" },
        ],
        conceptKeywords: ["in", "dimensions", "print", "[\"C-137\"]"],
      },
      {
        id: "rm-py-final-4",
        concept: "Lists & Sorting",
        narrative:
          "The Citadel has a list of Rick variants ranked by IQ. Summer wants to see the top three smartest Ricks.",
        prompt:
          "Given `ricks = [{\"variant\": \"C-137\", \"iq\": 300}, {\"variant\": \"Evil Morty\", \"iq\": 320}, {\"variant\": \"Doofus Rick\", \"iq\": 90}, {\"variant\": \"Cop Rick\", \"iq\": 210}]`, sort by `\"iq\"` descending and print the top 3 variants with their IQs.",
        hint: "Use `sorted(..., key=lambda x: x[\"iq\"], reverse=True)` then slice `[:3]` and loop.",
        solution: `ricks = [{"variant": "C-137", "iq": 300}, {"variant": "Evil Morty", "iq": 320}, {"variant": "Doofus Rick", "iq": 90}, {"variant": "Cop Rick", "iq": 210}]\ntop = sorted(ricks, key=lambda x: x["iq"], reverse=True)[:3]\nfor r in top:\n    print(f"{r['variant']}: {r['iq']}")`,
        starterCode: `ricks = [{"variant": "C-137", "iq": 300}, {"variant": "Evil Morty", "iq": 320}, {"variant": "Doofus Rick", "iq": 90}, {"variant": "Cop Rick", "iq": 210}]\ntop = sorted(ricks, key=lambda x: x[___], reverse=True)[:3]\nfor r in top:\n    print(f"{r['variant']}: {r['iq']}")`,
        testCases: [
          { input: "", expected: "Evil Morty: 320\nC-137: 300\nCop Rick: 210", description: "Top 3 Ricks by IQ descending" },
        ],
        conceptKeywords: ["sorted", "lambda", "reverse=True", "for", "print"],
      },
      {
        id: "rm-py-final-5",
        concept: "List Comprehension",
        narrative:
          "Rick needs only the portal destinations with enough energy for a round trip. Anything below 50 energy units strands you there forever.",
        prompt:
          "Given `destinations = [(\"Earth\", 80), (\"Gazorpazorp\", 30), (\"Blips and Chitz\", 65), (\"Shleemypants\", 20), (\"Froopyland\", 90)]`, use a list comprehension to build `viable` containing only the destination names where energy is 50 or above. Print `viable`.",
        hint: "Unpack tuples in the comprehension: `[name for name, energy in destinations if energy >= 50]`.",
        solution: `destinations = [("Earth", 80), ("Gazorpazorp", 30), ("Blips and Chitz", 65), ("Shleemypants", 20), ("Froopyland", 90)]\nviable = [name for name, energy in destinations if energy >= 50]\nprint(viable)`,
        starterCode: `destinations = [("Earth", 80), ("Gazorpazorp", 30), ("Blips and Chitz", 65), ("Shleemypants", 20), ("Froopyland", 90)]\nviable = [___ for name, energy in destinations if ___]\nprint(viable)`,
        testCases: [
          { input: "", expected: "['Earth', 'Blips and Chitz', 'Froopyland']", description: "Destinations with enough energy" },
        ],
        conceptKeywords: ["for", "in", "if", ">="],
      },
    ],
  },

  // ── Squid Game ───────────────────────────────────────────────────────────────
  "squid-game-python": {
    id: "sg-py-final",
    themeId: "squid-game",
    languageId: "python",
    themedTitle: "The Final Game",
    introNarrative:
      "Player 456 has made it to the final round. The Front Man has devised five coding challenges to replace the traditional games this year. Solve all five and you walk out with the prize money. Fail and — well, you know.",
    questions: [
      {
        id: "sg-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "The game master needs to register each player's number, name, and survival status in the system before the round begins.",
        prompt:
          "Create variables: `player_number` (integer `456`), `player_name` (string `\"Gi-hun\"`), `eliminated` (boolean `False`). Print all three.",
        hint: "Use three separate `print()` calls.",
        solution: `player_number = 456\nplayer_name = "Gi-hun"\neliminated = False\nprint(player_number)\nprint(player_name)\nprint(eliminated)`,
        starterCode: `player_number = ___\nplayer_name = ___\neliminated = ___\nprint(player_number)\nprint(player_name)\nprint(eliminated)`,
        testCases: [
          { input: "", expected: "456\nGi-hun\nFalse", description: "Player registration printed correctly" },
        ],
        conceptKeywords: ["=", "False", "print"],
      },
      {
        id: "sg-py-final-2",
        concept: "Functions & Conditionals",
        narrative:
          "The guards need a function to classify players based on how many games they have survived so far.",
        prompt:
          "Write a function `classify_player(games_survived)` that returns `\"Eliminated\"` if `games_survived == 0`, `\"Survivor\"` if `games_survived <= 3`, and `\"Finalist\"` otherwise. Print results for `0`, `2`, and `5`.",
        hint: "Check for zero first with `==`, then use `<=` for the middle case.",
        solution: `def classify_player(games_survived):\n    if games_survived == 0:\n        return "Eliminated"\n    elif games_survived <= 3:\n        return "Survivor"\n    else:\n        return "Finalist"\n\nprint(classify_player(0))\nprint(classify_player(2))\nprint(classify_player(5))`,
        starterCode: `def classify_player(games_survived):\n    if games_survived == 0:\n        return ___\n    elif games_survived <= 3:\n        return ___\n    else:\n        return ___\n\nprint(classify_player(0))\nprint(classify_player(2))\nprint(classify_player(5))`,
        testCases: [
          { input: "0", expected: "Eliminated", description: "0 games survived is eliminated" },
          { input: "2", expected: "Survivor", description: "2 games survived is a survivor" },
          { input: "5", expected: "Finalist", description: "5 games survived is a finalist" },
        ],
        conceptKeywords: ["def", "if", "elif", "else", "==", "return"],
      },
      {
        id: "sg-py-final-3",
        concept: "Lists & Loops",
        narrative:
          "The VIPs want a numbered list of all remaining players for their betting ledgers.",
        prompt:
          "Given `players = [\"Player 1\", \"Player 67\", \"Player 101\", \"Player 212\", \"Player 456\"]`, use `enumerate(players, start=1)` to print each like `Slot 1: Player 1`.",
        hint: "Use `for i, p in enumerate(players, start=1):` and an f-string.",
        solution: `players = ["Player 1", "Player 67", "Player 101", "Player 212", "Player 456"]\nfor i, p in enumerate(players, start=1):\n    print(f"Slot {i}: {p}")`,
        starterCode: `players = ["Player 1", "Player 67", "Player 101", "Player 212", "Player 456"]\nfor i, p in enumerate(players, start=1):\n    print(f"___")`,
        testCases: [
          { input: "", expected: "Slot 1: Player 1\nSlot 2: Player 67\nSlot 3: Player 101\nSlot 4: Player 212\nSlot 5: Player 456", description: "All players in numbered slots" },
        ],
        conceptKeywords: ["for", "enumerate", "f\"", "print"],
      },
      {
        id: "sg-py-final-4",
        concept: "Dictionaries",
        narrative:
          "The marble game requires tracking each player's marble count in a dictionary. Sang-woo just won 10 marbles from Ali — update the records.",
        prompt:
          "Create `marbles = {\"Gi-hun\": 20, \"Sang-woo\": 15, \"Ali\": 10, \"Sae-byeok\": 18}`. Update `\"Sang-woo\"` to `25` and `\"Ali\"` to `0`. Print the updated values for both.",
        hint: "Reassign using `marbles[\"Sang-woo\"] = 25`.",
        solution: `marbles = {"Gi-hun": 20, "Sang-woo": 15, "Ali": 10, "Sae-byeok": 18}\nmarbles["Sang-woo"] = 25\nmarbles["Ali"] = 0\nprint(marbles["Sang-woo"])\nprint(marbles["Ali"])`,
        starterCode: `marbles = {"Gi-hun": 20, "Sang-woo": 15, "Ali": 10, "Sae-byeok": 18}\nmarbles[___] = 25\nmarbles[___] = 0\nprint(marbles["Sang-woo"])\nprint(marbles["Ali"])`,
        testCases: [
          { input: "", expected: "25\n0", description: "Sang-woo has 25, Ali has 0" },
        ],
        conceptKeywords: ["marbles", "=", "25", "print"],
      },
      {
        id: "sg-py-final-5",
        concept: "Sorting & List Comprehension",
        narrative:
          "The Front Man wants a list of players with more than 15 marbles, sorted from most to least, for the final showdown seeding.",
        prompt:
          "Given `scores = [(\"Gi-hun\", 20), (\"Sang-woo\", 25), (\"Sae-byeok\", 18), (\"Ali\", 8), (\"Deok-su\", 12)]`, use a list comprehension to keep only players with more than 15 marbles, then sort by marbles descending. Print each as `Name: marbles`.",
        hint: "Filter first: `[p for p in scores if p[1] > 15]`. Then `sorted(..., key=lambda x: x[1], reverse=True)`.",
        solution: `scores = [("Gi-hun", 20), ("Sang-woo", 25), ("Sae-byeok", 18), ("Ali", 8), ("Deok-su", 12)]\ntop = sorted([p for p in scores if p[1] > 15], key=lambda x: x[1], reverse=True)\nfor name, m in top:\n    print(f"{name}: {m}")`,
        starterCode: `scores = [("Gi-hun", 20), ("Sang-woo", 25), ("Sae-byeok", 18), ("Ali", 8), ("Deok-su", 12)]\ntop = sorted([p for p in scores if ___], key=lambda x: x[1], reverse=True)\nfor name, m in top:\n    print(f"{name}: {m}")`,
        testCases: [
          { input: "", expected: "Sang-woo: 25\nGi-hun: 20\nSae-byeok: 18", description: "Top players sorted by marbles descending" },
        ],
        conceptKeywords: ["for", "in", "if", "sorted", "lambda", "reverse=True"],
      },
    ],
  },

  // ── Arrested Development ─────────────────────────────────────────────────────
  "arrested-development-python": {
    id: "ad-py-final",
    themeId: "arrested-development",
    languageId: "python",
    themedTitle: "The Bluth Company Audit",
    introNarrative:
      "The SEC has launched an audit of the Bluth Company. Michael has exactly five Python tasks to complete before the investigators arrive or the whole family goes to prison. Again. There is always money in the banana stand.",
    questions: [
      {
        id: "ad-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "Buster needs to create his employee profile in the Bluth Company HR system before Lucille notices he has not done it.",
        prompt:
          "Create variables: `employee` (string `\"Buster Bluth\"`), `department` (string `\"Army\"`), `hand_present` (boolean `False`), `years_employed` (integer `0`). Print all four.",
        hint: "Use four `print()` calls.",
        solution: `employee = "Buster Bluth"\ndepartment = "Army"\nhand_present = False\nyears_employed = 0\nprint(employee)\nprint(department)\nprint(hand_present)\nprint(years_employed)`,
        starterCode: `employee = ___\ndepartment = ___\nhand_present = ___\nyears_employed = ___\nprint(employee)\nprint(department)\nprint(hand_present)\nprint(years_employed)`,
        testCases: [
          { input: "", expected: "Buster Bluth\nArmy\nFalse\n0", description: "Prints Buster's profile" },
        ],
        conceptKeywords: ["=", "False", "print"],
      },
      {
        id: "ad-py-final-2",
        concept: "Functions & Conditionals",
        narrative:
          "Tobias needs a function to evaluate if his acting career is viable based on audition scores. He has never been in anything. Yet.",
        prompt:
          "Write a function `career_status(score)` that returns `\"Blue Man Group\"` if `score < 30`, `\"Understudy\"` if `score < 70`, and `\"Leading Role\"` otherwise. Print results for `20`, `55`, and `85`.",
        hint: "Use `if`, `elif`, `else`, and `return`.",
        solution: `def career_status(score):\n    if score < 30:\n        return "Blue Man Group"\n    elif score < 70:\n        return "Understudy"\n    else:\n        return "Leading Role"\n\nprint(career_status(20))\nprint(career_status(55))\nprint(career_status(85))`,
        starterCode: `def career_status(score):\n    if score < 30:\n        return ___\n    elif score < 70:\n        return ___\n    else:\n        return ___\n\nprint(career_status(20))\nprint(career_status(55))\nprint(career_status(85))`,
        testCases: [
          { input: "20", expected: "Blue Man Group", description: "Low score lands Blue Man Group" },
          { input: "55", expected: "Understudy", description: "Mid score gets understudy" },
          { input: "85", expected: "Leading Role", description: "High score gets leading role" },
        ],
        conceptKeywords: ["def", "if", "elif", "else", "return"],
      },
      {
        id: "ad-py-final-3",
        concept: "Lists & Loops",
        narrative:
          "Gob needs a numbered list of all his illusion props before the next show. He calls them tricks. Michael says they are illusions.",
        prompt:
          "Given `illusions = [\"Fire trick\", \"Franklin puppet\", \"Forget-me-now\", \"Alliance box\", \"Sword swallow\"]`, use `enumerate(illusions, start=1)` and print each like `1. Fire trick`.",
        hint: "Use `for i, illusion in enumerate(illusions, start=1):` and an f-string.",
        solution: `illusions = ["Fire trick", "Franklin puppet", "Forget-me-now", "Alliance box", "Sword swallow"]\nfor i, illusion in enumerate(illusions, start=1):\n    print(f"{i}. {illusion}")`,
        starterCode: `illusions = ["Fire trick", "Franklin puppet", "Forget-me-now", "Alliance box", "Sword swallow"]\nfor i, illusion in enumerate(illusions, start=1):\n    print(f"___")`,
        testCases: [
          { input: "", expected: "1. Fire trick\n2. Franklin puppet\n3. Forget-me-now\n4. Alliance box\n5. Sword swallow", description: "Numbered illusion list" },
        ],
        conceptKeywords: ["for", "enumerate", "f\"", "print"],
      },
      {
        id: "ad-py-final-4",
        concept: "Dictionaries",
        narrative:
          "The banana stand revenue tracker maps each day of the week to earnings. Michael needs to know which day made the most money.",
        prompt:
          "Create `revenue = {\"Mon\": 340, \"Tue\": 210, \"Wed\": 480, \"Thu\": 390, \"Fri\": 520}`. Write a function `best_day(revenue)` that returns the key with the maximum value. Print the result.",
        hint: "Use `max(revenue, key=revenue.get)` to find the best-performing day.",
        solution: `revenue = {"Mon": 340, "Tue": 210, "Wed": 480, "Thu": 390, "Fri": 520}\n\ndef best_day(revenue):\n    return max(revenue, key=revenue.get)\n\nprint(best_day(revenue))`,
        starterCode: `revenue = {"Mon": 340, "Tue": 210, "Wed": 480, "Thu": 390, "Fri": 520}\n\ndef best_day(revenue):\n    return max(revenue, key=___)\n\nprint(best_day(revenue))  # Fri`,
        testCases: [
          { input: "", expected: "Fri", description: "Friday had the highest revenue (520)" },
        ],
        conceptKeywords: ["def", "max", "revenue.get", "return"],
      },
      {
        id: "ad-py-final-5",
        concept: "List Comprehension & String Methods",
        narrative:
          "Lucille has a list of social invitations but needs only those addressed to 'Bluth' family members, cleaned and uppercased for the guest list.",
        prompt:
          "Given `invites = [\"  michael bluth  \", \"Tobias Funke\", \"  george bluth  \", \"Lindsay Bluth\", \"  buster bluth  \"]`, build `bluth_list` using a list comprehension that strips and uppercases each invite, keeping only those containing `\"BLUTH\"`. Print `bluth_list`.",
        hint: "Clean with `.strip().upper()`, then check `\"BLUTH\" in cleaned`.",
        solution: `invites = ["  michael bluth  ", "Tobias Funke", "  george bluth  ", "Lindsay Bluth", "  buster bluth  "]\nbluth_list = [i.strip().upper() for i in invites if "BLUTH" in i.strip().upper()]\nprint(bluth_list)`,
        starterCode: `invites = ["  michael bluth  ", "Tobias Funke", "  george bluth  ", "Lindsay Bluth", "  buster bluth  "]\nbluth_list = [i.strip().upper() for i in invites if ___ in i.strip().upper()]\nprint(bluth_list)`,
        testCases: [
          { input: "", expected: "['MICHAEL BLUTH', 'GEORGE BLUTH', 'LINDSAY BLUTH', 'BUSTER BLUTH']", description: "Only Bluth family members, cleaned" },
        ],
        conceptKeywords: ["for", "in", "if", "strip", "upper"],
      },
    ],
  },

  // ── Barbie ───────────────────────────────────────────────────────────────────
  "barbie-python": {
    id: "ba-py-final",
    themeId: "barbie",
    languageId: "python",
    themedTitle: "The Barbieland Competency Test",
    introNarrative:
      "The Matriarch Council of Barbieland has issued a competency evaluation for all Barbies and Kens who wish to retain their roles. Ken has already submitted his. It was mostly about horses. Do better.",
    questions: [
      {
        id: "ba-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "Stereotypical Barbie needs to log her profile in the Barbieland registry to retain her Dream House.",
        prompt:
          "Create variables: `name` (string `\"Barbie\"`), `job` (string `\"Everything\"`), `dream_house` (boolean `True`), `outfits` (integer `100`). Print all four.",
        hint: "Use four `print()` calls.",
        solution: `name = "Barbie"\njob = "Everything"\ndream_house = True\noutfits = 100\nprint(name)\nprint(job)\nprint(dream_house)\nprint(outfits)`,
        starterCode: `name = ___\njob = ___\ndream_house = ___\noutfits = ___\nprint(name)\nprint(job)\nprint(dream_house)\nprint(outfits)`,
        testCases: [
          { input: "", expected: "Barbie\nEverything\nTrue\n100", description: "Barbie's profile printed correctly" },
        ],
        conceptKeywords: ["=", "True", "print"],
      },
      {
        id: "ba-py-final-2",
        concept: "Functions & Conditionals",
        narrative:
          "Gloria needs a function to categorize each Barbie's patriarchy exposure level for the de-brainwashing sessions.",
        prompt:
          "Write a function `exposure_level(score)` that returns `\"Safe\"` if `score < 25`, `\"Influenced\"` if `score < 75`, and `\"Fully Kenified\"` otherwise. Print results for `10`, `50`, and `90`.",
        hint: "Use `if`, `elif`, `else`, and `return`.",
        solution: `def exposure_level(score):\n    if score < 25:\n        return "Safe"\n    elif score < 75:\n        return "Influenced"\n    else:\n        return "Fully Kenified"\n\nprint(exposure_level(10))\nprint(exposure_level(50))\nprint(exposure_level(90))`,
        starterCode: `def exposure_level(score):\n    if score < 25:\n        return ___\n    elif score < 75:\n        return ___\n    else:\n        return ___\n\nprint(exposure_level(10))\nprint(exposure_level(50))\nprint(exposure_level(90))`,
        testCases: [
          { input: "10", expected: "Safe", description: "Score 10 is safe" },
          { input: "50", expected: "Influenced", description: "Score 50 is influenced" },
          { input: "90", expected: "Fully Kenified", description: "Score 90 is fully Kenified" },
        ],
        conceptKeywords: ["def", "if", "elif", "else", "return"],
      },
      {
        id: "ba-py-final-3",
        concept: "Lists & Loops",
        narrative:
          "All the Barbies are gathering in the town square. Ken needs a numbered roll call so he can make his dramatic speech about horses.",
        prompt:
          "Given `barbies = [\"Stereotypical Barbie\", \"Lawyer Barbie\", \"Doctor Barbie\", \"President Barbie\", \"Writer Barbie\"]`, use `enumerate(barbies, start=1)` and print each like `1. Stereotypical Barbie`.",
        hint: "Use `for i, b in enumerate(barbies, start=1):` and print with an f-string.",
        solution: `barbies = ["Stereotypical Barbie", "Lawyer Barbie", "Doctor Barbie", "President Barbie", "Writer Barbie"]\nfor i, b in enumerate(barbies, start=1):\n    print(f"{i}. {b}")`,
        starterCode: `barbies = ["Stereotypical Barbie", "Lawyer Barbie", "Doctor Barbie", "President Barbie", "Writer Barbie"]\nfor i, b in enumerate(barbies, start=1):\n    print(f"___")`,
        testCases: [
          { input: "", expected: "1. Stereotypical Barbie\n2. Lawyer Barbie\n3. Doctor Barbie\n4. President Barbie\n5. Writer Barbie", description: "Numbered Barbie roll call" },
        ],
        conceptKeywords: ["for", "enumerate", "f\"", "print"],
      },
      {
        id: "ba-py-final-4",
        concept: "Dictionaries",
        narrative:
          "The Barbieland job registry maps each Barbie to her role. Ruth wants to add Writer Barbie and check if Doctor Barbie is registered.",
        prompt:
          "Create `jobs = {\"Stereotypical Barbie\": \"Everything\", \"Lawyer Barbie\": \"Law\", \"Doctor Barbie\": \"Medicine\"}`. Add `\"Writer Barbie\": \"Writing\"`. Print the total number of entries and whether `\"Doctor Barbie\"` is in `jobs`.",
        hint: "Add a new key-value pair with assignment. Use `len()` and the `in` operator.",
        solution: `jobs = {"Stereotypical Barbie": "Everything", "Lawyer Barbie": "Law", "Doctor Barbie": "Medicine"}\njobs["Writer Barbie"] = "Writing"\nprint(len(jobs))\nprint("Doctor Barbie" in jobs)`,
        starterCode: `jobs = {"Stereotypical Barbie": "Everything", "Lawyer Barbie": "Law", "Doctor Barbie": "Medicine"}\njobs[___] = ___\nprint(len(jobs))\nprint(___ in jobs)`,
        testCases: [
          { input: "", expected: "4\nTrue", description: "4 jobs total, Doctor Barbie is registered" },
        ],
        conceptKeywords: ["jobs", "len", "in", "print"],
      },
      {
        id: "ba-py-final-5",
        concept: "List Comprehension",
        narrative:
          "Weird Barbie needs a list of every Real World human who is wearing pink today and whose name she can use for the return ritual.",
        prompt:
          "Given `humans = [(\"Gloria\", \"pink\"), (\"Sasha\", \"blue\"), (\"Ruth\", \"pink\"), (\"Allan\", \"green\"), (\"Barbie\", \"pink\")]`, use a list comprehension to build `pink_humans` containing only the names of people wearing `\"pink\"`. Print `pink_humans`.",
        hint: "Unpack tuples: `[name for name, color in humans if color == \"pink\"]`.",
        solution: `humans = [("Gloria", "pink"), ("Sasha", "blue"), ("Ruth", "pink"), ("Allan", "green"), ("Barbie", "pink")]\npink_humans = [name for name, color in humans if color == "pink"]\nprint(pink_humans)`,
        starterCode: `humans = [("Gloria", "pink"), ("Sasha", "blue"), ("Ruth", "pink"), ("Allan", "green"), ("Barbie", "pink")]\npink_humans = [name for name, color in humans if ___]\nprint(pink_humans)`,
        testCases: [
          { input: "", expected: "['Gloria', 'Ruth', 'Barbie']", description: "Only humans wearing pink" },
        ],
        conceptKeywords: ["for", "in", "if", "==", "print"],
      },
    ],
  },

  // ── Sex and the City ─────────────────────────────────────────────────────────
  "sex-and-the-city-python": {
    id: "sc-py-final",
    themeId: "sex-and-the-city",
    languageId: "python",
    themedTitle: "The Manhattan Final Column",
    introNarrative:
      "Carrie Bradshaw is writing her most important column yet — a deep dive into Python programming and love. Five questions stand between her deadline and a night at Magnolia Bakery with the girls. She could not help but wonder: could she code her way to the truth?",
    questions: [
      {
        id: "sc-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "Carrie needs to set up her column draft with the right metadata before she starts typing.",
        prompt:
          "Create variables: `author` (string `\"Carrie Bradshaw\"`), `word_count` (integer `0`), `published` (boolean `False`), `column_title` (string `\"The Code Within\"`). Print all four.",
        hint: "Use four `print()` calls.",
        solution: `author = "Carrie Bradshaw"\nword_count = 0\npublished = False\ncolumn_title = "The Code Within"\nprint(author)\nprint(word_count)\nprint(published)\nprint(column_title)`,
        starterCode: `author = ___\nword_count = ___\npublished = ___\ncolumn_title = ___\nprint(author)\nprint(word_count)\nprint(published)\nprint(column_title)`,
        testCases: [
          { input: "", expected: "Carrie Bradshaw\n0\nFalse\nThe Code Within", description: "Column metadata printed correctly" },
        ],
        conceptKeywords: ["=", "False", "print"],
      },
      {
        id: "sc-py-final-2",
        concept: "Functions & Conditionals",
        narrative:
          "Miranda needs a function to evaluate potential dates based on their compatibility score. She has very high standards.",
        prompt:
          "Write a function `date_verdict(score)` that returns `\"Run\"` if `score < 30`, `\"Maybe\"` if `score < 70`, and `\"Keeper\"` otherwise. Print results for `15`, `55`, and `88`.",
        hint: "Use `if`, `elif`, `else`, and `return`.",
        solution: `def date_verdict(score):\n    if score < 30:\n        return "Run"\n    elif score < 70:\n        return "Maybe"\n    else:\n        return "Keeper"\n\nprint(date_verdict(15))\nprint(date_verdict(55))\nprint(date_verdict(88))`,
        starterCode: `def date_verdict(score):\n    if score < 30:\n        return ___\n    elif score < 70:\n        return ___\n    else:\n        return ___\n\nprint(date_verdict(15))\nprint(date_verdict(55))\nprint(date_verdict(88))`,
        testCases: [
          { input: "15", expected: "Run", description: "Low score means run" },
          { input: "55", expected: "Maybe", description: "Mid score is a maybe" },
          { input: "88", expected: "Keeper", description: "High score is a keeper" },
        ],
        conceptKeywords: ["def", "if", "elif", "else", "return"],
      },
      {
        id: "sc-py-final-3",
        concept: "Lists & Loops",
        narrative:
          "Samantha has a client list and needs to print each one with a priority number for her PR campaign.",
        prompt:
          "Given `clients = [\"Vogue\", \"Harper's Bazaar\", \"New York Magazine\", \"Cosmo\", \"Elle\"]`, use `enumerate(clients, start=1)` and print each like `Priority 1: Vogue`.",
        hint: "Use `for i, client in enumerate(clients, start=1):` and an f-string.",
        solution: `clients = ["Vogue", "Harper's Bazaar", "New York Magazine", "Cosmo", "Elle"]\nfor i, client in enumerate(clients, start=1):\n    print(f"Priority {i}: {client}")`,
        starterCode: `clients = ["Vogue", "Harper's Bazaar", "New York Magazine", "Cosmo", "Elle"]\nfor i, client in enumerate(clients, start=1):\n    print(f"___")`,
        testCases: [
          { input: "", expected: "Priority 1: Vogue\nPriority 2: Harper's Bazaar\nPriority 3: New York Magazine\nPriority 4: Cosmo\nPriority 5: Elle", description: "PR clients with priority numbers" },
        ],
        conceptKeywords: ["for", "enumerate", "f\"", "print"],
      },
      {
        id: "sc-py-final-4",
        concept: "String Methods",
        narrative:
          "Charlotte received a dinner party invitation that arrived in all lowercase with messy spacing. She needs it cleaned up before framing it.",
        prompt:
          "Given `invite = \"  dinner at the plaza hotel, saturday  \"`, apply `.strip()`, then `.title()`. Print the result.",
        hint: "Chain: `invite.strip().title()`.",
        solution: `invite = "  dinner at the plaza hotel, saturday  "\nprint(invite.strip().title())`,
        starterCode: `invite = "  dinner at the plaza hotel, saturday  "\nprint(invite.strip().___())`,
        testCases: [
          { input: "", expected: "Dinner At The Plaza Hotel, Saturday", description: "Stripped and title-cased invitation" },
        ],
        conceptKeywords: ["strip", "title", "print"],
      },
      {
        id: "sc-py-final-5",
        concept: "Sorting & List Comprehension",
        narrative:
          "Big has sent Carrie a list of restaurants with their ratings. She wants only the top-rated ones above 4.0, sorted best first, for the big date.",
        prompt:
          "Given `restaurants = [(\"Le Bernardin\", 4.8), (\"Joe's Pizza\", 3.9), (\"Nobu\", 4.5), (\"Corner Bistro\", 3.7), (\"Per Se\", 4.9)]`, build `top_restaurants` using a list comprehension for those with rating above `4.0`, then sort descending by rating. Print each as `Name: rating`.",
        hint: "Filter with `[r for r in restaurants if r[1] > 4.0]`, then `sorted(..., key=lambda x: x[1], reverse=True)`.",
        solution: `restaurants = [("Le Bernardin", 4.8), ("Joe's Pizza", 3.9), ("Nobu", 4.5), ("Corner Bistro", 3.7), ("Per Se", 4.9)]\ntop_restaurants = sorted([r for r in restaurants if r[1] > 4.0], key=lambda x: x[1], reverse=True)\nfor name, rating in top_restaurants:\n    print(f"{name}: {rating}")`,
        starterCode: `restaurants = [("Le Bernardin", 4.8), ("Joe's Pizza", 3.9), ("Nobu", 4.5), ("Corner Bistro", 3.7), ("Per Se", 4.9)]\ntop_restaurants = sorted([r for r in restaurants if ___], key=lambda x: x[1], reverse=True)\nfor name, rating in top_restaurants:\n    print(f"{name}: {rating}")`,
        testCases: [
          { input: "", expected: "Per Se: 4.9\nLe Bernardin: 4.8\nNobu: 4.5", description: "Top restaurants sorted best first" },
        ],
        conceptKeywords: ["for", "in", "if", "sorted", "lambda", "reverse=True"],
      },
    ],
  },

  // ── Sopranos ─────────────────────────────────────────────────────────────────
  "sopranos-python": {
    id: "sp-py-final",
    themeId: "sopranos",
    languageId: "python",
    themedTitle: "The Family Business Exam",
    introNarrative:
      "Tony Soprano has called a sit-down. Before anyone gets made, they have to prove themselves with five coding challenges. Paulie says coding is for nerds. Tony disagrees. Show Tony what you've got.",
    questions: [
      {
        id: "sp-py-final-1",
        concept: "Variables & Data Types",
        narrative:
          "Christopher needs to enter his associate profile into the family records before the next meeting at the Bada Bing.",
        prompt:
          "Create variables: `associate` (string `\"Christopher\"`), `crew` (string `\"Soprano\"`), `made` (boolean `False`), `jobs_completed` (integer `7`). Print all four.",
        hint: "Use four separate `print()` calls.",
        solution: `associate = "Christopher"\ncrew = "Soprano"\nmade = False\njobs_completed = 7\nprint(associate)\nprint(crew)\nprint(made)\nprint(jobs_completed)`,
        starterCode: `associate = ___\ncrew = ___\nmade = ___\njobs_completed = ___\nprint(associate)\nprint(crew)\nprint(made)\nprint(jobs_completed)`,
        testCases: [
          { input: "", expected: "Christopher\nSopranos\nFalse\n7", description: "Christopher's profile printed" },
        ],
        conceptKeywords: ["=", "False", "print"],
      },
      {
        id: "sp-py-final-2",
        concept: "Functions & Conditionals",
        narrative:
          "Dr. Melfi needs a function to assess Tony's therapy progress level based on his openness score.",
        prompt:
          "Write a function `therapy_progress(score)` that returns `\"In Denial\"` if `score < 30`, `\"Making Progress\"` if `score < 70`, and `\"Breakthrough\"` otherwise. Print results for `20`, `55`, and `80`.",
        hint: "Use `if`, `elif`, `else`, and `return`.",
        solution: `def therapy_progress(score):\n    if score < 30:\n        return "In Denial"\n    elif score < 70:\n        return "Making Progress"\n    else:\n        return "Breakthrough"\n\nprint(therapy_progress(20))\nprint(therapy_progress(55))\nprint(therapy_progress(80))`,
        starterCode: `def therapy_progress(score):\n    if score < 30:\n        return ___\n    elif score < 70:\n        return ___\n    else:\n        return ___\n\nprint(therapy_progress(20))\nprint(therapy_progress(55))\nprint(therapy_progress(80))`,
        testCases: [
          { input: "20", expected: "In Denial", description: "Score 20 is in denial" },
          { input: "55", expected: "Making Progress", description: "Score 55 is making progress" },
          { input: "80", expected: "Breakthrough", description: "Score 80 is a breakthrough" },
        ],
        conceptKeywords: ["def", "if", "elif", "else", "return"],
      },
      {
        id: "sp-py-final-3",
        concept: "Dictionaries",
        narrative:
          "Silvio manages the family's territory map. Tony wants to add Trenton and check the total number of territories.",
        prompt:
          "Create `territories = {\"Newark\": \"Tony\", \"Jersey City\": \"Richie\", \"Montclair\": \"Paulie\"}`. Add `\"Trenton\": \"Christopher\"`. Print the length and the value for `\"Trenton\"`.",
        hint: "Add with `territories[\"Trenton\"] = \"Christopher\"`. Use `len()` for count.",
        solution: `territories = {"Newark": "Tony", "Jersey City": "Richie", "Montclair": "Paulie"}\nterritories["Trenton"] = "Christopher"\nprint(len(territories))\nprint(territories["Trenton"])`,
        starterCode: `territories = {"Newark": "Tony", "Jersey City": "Richie", "Montclair": "Paulie"}\nterritories[___] = ___\nprint(len(territories))\nprint(territories["Trenton"])`,
        testCases: [
          { input: "", expected: "4\nChristopher", description: "4 territories, Trenton belongs to Christopher" },
        ],
        conceptKeywords: ["territories", "len", "print", "[\"Trenton\"]"],
      },
      {
        id: "sp-py-final-4",
        concept: "Lists & Loops",
        narrative:
          "Paulie needs a numbered list of the crew members for the sit-down agenda. He insists on being first.",
        prompt:
          "Given `crew = [\"Paulie\", \"Silvio\", \"Christopher\", \"Bobby\", \"Furio\"]`, use `enumerate(crew, start=1)` and print each like `1. Paulie`.",
        hint: "Use `for i, member in enumerate(crew, start=1):` and an f-string.",
        solution: `crew = ["Paulie", "Silvio", "Christopher", "Bobby", "Furio"]\nfor i, member in enumerate(crew, start=1):\n    print(f"{i}. {member}")`,
        starterCode: `crew = ["Paulie", "Silvio", "Christopher", "Bobby", "Furio"]\nfor i, member in enumerate(crew, start=1):\n    print(f"___")`,
        testCases: [
          { input: "", expected: "1. Paulie\n2. Silvio\n3. Christopher\n4. Bobby\n5. Furio", description: "Numbered crew list" },
        ],
        conceptKeywords: ["for", "enumerate", "f\"", "print"],
      },
      {
        id: "sp-py-final-5",
        concept: "List Comprehension & Sorting",
        narrative:
          "Tony wants to identify the high earners in the family — associates who bring in over $10,000 a week — sorted from top earner down.",
        prompt:
          "Given `earners = [(\"Paulie\", 15000), (\"Christopher\", 8000), (\"Silvio\", 18000), (\"Bobby\", 5000), (\"Furio\", 12000)]`, build `top_earners` using a list comprehension for those earning above `10000`, then sort descending. Print each as `Name: amount`.",
        hint: "Filter: `[e for e in earners if e[1] > 10000]`. Sort: `sorted(..., key=lambda x: x[1], reverse=True)`.",
        solution: `earners = [("Paulie", 15000), ("Christopher", 8000), ("Silvio", 18000), ("Bobby", 5000), ("Furio", 12000)]\ntop_earners = sorted([e for e in earners if e[1] > 10000], key=lambda x: x[1], reverse=True)\nfor name, amount in top_earners:\n    print(f"{name}: {amount}")`,
        starterCode: `earners = [("Paulie", 15000), ("Christopher", 8000), ("Silvio", 18000), ("Bobby", 5000), ("Furio", 12000)]\ntop_earners = sorted([e for e in earners if ___], key=lambda x: x[1], reverse=True)\nfor name, amount in top_earners:\n    print(f"{name}: {amount}")`,
        testCases: [
          { input: "", expected: "Silvio: 18000\nPaulie: 15000\nFurio: 12000", description: "High earners sorted by income descending" },
        ],
        conceptKeywords: ["for", "in", "if", "sorted", "lambda", "reverse=True"],
      },
    ],
  },
};
