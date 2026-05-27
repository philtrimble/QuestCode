import type { Challenge } from "@/types";

export const sexAndTheCityPythonChallenges: Challenge[] = [
  {
    id: "sc-py-01",
    themeId: "sex-and-the-city",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "Carrie's Shoe Collection",
    narrative:
      "Carrie Bradshaw just realized she's spent $40,000 on shoes and has no money for a down payment. Before the inevitable panic, help her audit the numbers: shoe count, total spent, and whether she's in love this week.",
    prompt:
      "Create three variables: `shoe_count` (integer, set to `100`), `amount_spent` (integer, set to `40000`), and `in_love` (boolean, set to `True`). Print all three.",
    hint: "Integers are plain numbers, booleans are `True` or `False` with a capital first letter.",
    solution: `shoe_count = 100\namount_spent = 40000\nin_love = True\nprint(shoe_count)\nprint(amount_spent)\nprint(in_love)`,
    starterCode: `# Carrie's Shoe Collection\n\nshoe_count = ___\namount_spent = ___\nin_love = ___\n\nprint(shoe_count)\nprint(amount_spent)\nprint(in_love)`,
    testCases: [
      { input: "", expected: "100\n40000\nTrue", description: "Carrie's financial reality" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "sc-py-02",
    themeId: "sex-and-the-city",
    languageId: "python",
    order: 2,
    title: "Lists",
    themedTitle: "Saturday Brunch Orders",
    narrative:
      "The girls always meet at their favorite spot. This week, Samantha has changed her order — again. Miranda is already rolling her eyes. Carrie needs to update the brunch list and confirm everyone's in.",
    prompt:
      "Create a list `orders` with `\"Carrie: eggs\"`, `\"Miranda: coffee\"`, `\"Charlotte: waffles\"`, `\"Samantha: vodka soda\"`. Replace `\"Samantha: vodka soda\"` with `\"Samantha: egg white omelette\"`. Print the updated list.",
    hint: "Find the index with `orders.index(value)`, then assign a new value: `orders[i] = new_value`.",
    solution: `orders = ["Carrie: eggs", "Miranda: coffee", "Charlotte: waffles", "Samantha: vodka soda"]\norders[orders.index("Samantha: vodka soda")] = "Samantha: egg white omelette"\nprint(orders)`,
    starterCode: `# Saturday Brunch Orders\n\norders = ["Carrie: eggs", "Miranda: coffee", "Charlotte: waffles", "Samantha: vodka soda"]\norders[orders.index("Samantha: vodka soda")] = ___\nprint(orders)`,
    testCases: [
      { input: "", expected: "['Carrie: eggs', 'Miranda: coffee', 'Charlotte: waffles', 'Samantha: egg white omelette']", description: "Updated brunch orders" },
    ],
    concept: "Lists",
    difficulty: "beginner",
  },
  {
    id: "sc-py-03",
    themeId: "sex-and-the-city",
    languageId: "python",
    order: 3,
    title: "Dictionaries",
    themedTitle: "Mr. Big's Dossier",
    narrative:
      "Mr. Big is mysterious, unavailable, and somehow always charming. Carrie has kept a running file on him across 6 years and 2 cities. She finally puts it all in a dictionary.",
    prompt:
      "Create a dictionary `big` with: `\"real_name\"` → `\"John James Preston\"`, `\"city\"` → `\"New York\"`, and `\"reliable\"` → `False`. Print the value of `\"real_name\"`.",
    hint: "Access values with `dict[\"key\"]`.",
    solution: `big = {"real_name": "John James Preston", "city": "New York", "reliable": False}\nprint(big["real_name"])`,
    starterCode: `# Mr. Big's Dossier\n\nbig = {___}\nprint(big[___])`,
    testCases: [
      { input: "", expected: "John James Preston", description: "Mr. Big's actual name" },
    ],
    concept: "Dictionaries",
    difficulty: "beginner",
  },
  {
    id: "sc-py-04",
    themeId: "sex-and-the-city",
    languageId: "python",
    order: 4,
    title: "Functions & Conditionals",
    themedTitle: "The Apartment Budget",
    narrative:
      "Manhattan rents are absurd. Carrie needs a function that calculates whether she can afford a new apartment after accounting for her monthly Manolo Blahnik budget.",
    prompt:
      "Write a function `can_afford(income, rent, shoe_budget)` that returns `True` if `income - rent - shoe_budget > 0`, otherwise returns `False`.\nTest with `can_afford(4500, 2800, 800)` and `can_afford(4500, 2800, 2000)`.",
    hint: "Use a simple `if` statement with arithmetic comparison.",
    solution: `def can_afford(income, rent, shoe_budget):\n    if income - rent - shoe_budget > 0:\n        return True\n    return False\n\nprint(can_afford(4500, 2800, 800))\nprint(can_afford(4500, 2800, 2000))`,
    starterCode: `# The Apartment Budget\n\ndef can_afford(income, rent, shoe_budget):\n    if income - rent - shoe_budget > 0:\n        return ___\n    return ___\n\nprint(can_afford(4500, 2800, 800))   # Should print: True\nprint(can_afford(4500, 2800, 2000))  # Should print: False`,
    testCases: [
      { input: "4500, 2800, 800", expected: "True", description: "She can afford it (barely)" },
      { input: "4500, 2800, 2000", expected: "False", description: "Too many shoes" },
    ],
    concept: "Functions & Conditionals",
    difficulty: "beginner",
  },
  {
    id: "sc-py-05",
    themeId: "sex-and-the-city",
    languageId: "python",
    order: 5,
    title: "Loops",
    themedTitle: "Carrie's Column Word Count",
    narrative:
      "Carrie writes a weekly column called 'Sex and the City.' Her editor needs a function to calculate the total word count across all of this week's drafts — submitted late, as usual.",
    prompt:
      "Write a function `total_words(drafts)` that takes a list of word counts and returns the sum using a `for` loop (no `sum()`). Test with `total_words([420, 380, 510, 295, 445])`.",
    hint: "Start with `total = 0`, then `total += count` in the loop. Return `total`.",
    solution: `def total_words(drafts):\n    total = 0\n    for count in drafts:\n        total += count\n    return total\n\nprint(total_words([420, 380, 510, 295, 445]))`,
    starterCode: `# Carrie's Column Word Count\n\ndef total_words(drafts):\n    total = 0\n    for count in drafts:\n        total += count\n    return total\n\nprint(total_words([420, 380, 510, 295, 445]))  # Should print: 2050`,
    testCases: [
      { input: "[420, 380, 510, 295, 445]", expected: "2050", description: "Total column word count" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "sc-py-06",
    themeId: "sex-and-the-city",
    languageId: "python",
    order: 6,
    title: "String Methods",
    themedTitle: "The Column Headline",
    narrative:
      "Carrie's editor at Vogue needs every column headline cleaned up before it goes to print. They come in lowercase and full of extra spaces — typical Carrie — and need to be stripped, title-cased, and sanitized.",
    prompt:
      "Write a function `format_headline(headline)` that strips whitespace, converts to title case with `.title()`, and replaces `\"Men\"` with `\"Humans\"`. Return the result.\nTest with `format_headline(\"  why do men run from love  \")`.",
    hint: "Chain: `headline.strip().title().replace(...)`.",
    solution: `def format_headline(headline):\n    return headline.strip().title().replace("Men", "Humans")\n\nprint(format_headline("  why do men run from love  "))`,
    starterCode: `# The Column Headline\n\ndef format_headline(headline):\n    return headline.strip().title().replace(___, ___)\n\nprint(format_headline("  why do men run from love  "))`,
    testCases: [
      { input: '"  why do men run from love  "', expected: "Why Do Humans Run From Love", description: "Stripped, title-cased, and updated" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sc-py-07",
    themeId: "sex-and-the-city",
    languageId: "python",
    order: 7,
    title: "List Comprehension",
    themedTitle: "Samantha's VIP Guest List",
    narrative:
      "Samantha Jones PR is hosting Manhattan's hottest event of the season. Only guests with names longer than 6 characters make the VIP list — shorter names belong to the B-list crowd and they know it.",
    prompt:
      "Write a function `vip_list(guests)` using a list comprehension to return only names with `len(name) > 6`.\nTest with `vip_list([\"Carrie\", \"Miranda\", \"Charlotte\", \"Big\", \"Aidan\"])`.",
    hint: "List comprehension: `[g for g in guests if len(g) > 6]`.",
    solution: `def vip_list(guests):\n    return [g for g in guests if len(g) > 6]\n\nprint(vip_list(["Carrie", "Miranda", "Charlotte", "Big", "Aidan"]))`,
    starterCode: `# Samantha's VIP Guest List\n\ndef vip_list(guests):\n    return [g for g in guests if ___]\n\nprint(vip_list(["Carrie", "Miranda", "Charlotte", "Big", "Aidan"]))`,
    testCases: [
      { input: '["Carrie", "Miranda", "Charlotte", "Big", "Aidan"]', expected: "['Miranda', 'Charlotte']", description: "Names longer than 6 characters make the VIP list" },
    ],
    concept: "List Comprehension",
    difficulty: "intermediate",
  },
  {
    id: "sc-py-08",
    themeId: "sex-and-the-city",
    languageId: "python",
    order: 8,
    title: "Nested Data Structures",
    themedTitle: "The Girls' Wardrobe Files",
    narrative:
      "Before every outing, each of the four women has a signature look. Carrie keeps meticulous notes on what everyone wore — for the column, obviously, not because she's obsessed.",
    prompt:
      "Given `wardrobes = [{\"name\": \"Carrie\", \"items\": [\"Manolo Blahniks\", \"tutu skirt\", \"corsage\"]}, {\"name\": \"Samantha\", \"items\": [\"red dress\", \"stilettos\", \"confidence\"]}]`, loop and print in the format: `\"Carrie leads with: Manolo Blahniks\"`.",
    hint: "Access: `w[\"name\"]` and `w[\"items\"][0]`.",
    solution: `wardrobes = [{"name": "Carrie", "items": ["Manolo Blahniks", "tutu skirt", "corsage"]}, {"name": "Samantha", "items": ["red dress", "stilettos", "confidence"]}]\nfor w in wardrobes:\n    print(f"{w['name']} leads with: {w['items'][0]}")`,
    starterCode: `# The Girls' Wardrobe Files\n\nwardrobes = [\n    {"name": "Carrie", "items": ["Manolo Blahniks", "tutu skirt", "corsage"]},\n    {"name": "Samantha", "items": ["red dress", "stilettos", "confidence"]}\n]\nfor w in wardrobes:\n    print(f"{w[___]} leads with: {w[___][0]}")`,
    testCases: [
      { input: "", expected: "Carrie leads with: Manolo Blahniks\nSamantha leads with: red dress", description: "Each woman's signature first item" },
    ],
    concept: "Nested Data Structures",
    difficulty: "intermediate",
  },
  {
    id: "sc-py-09",
    themeId: "sex-and-the-city",
    languageId: "python",
    order: 9,
    title: "Sorting",
    themedTitle: "Manhattan's Most Eligible",
    narrative:
      "New York Magazine is publishing its annual Most Eligible Bachelors list. Charlotte is on the panel and insists the rankings be sorted by net worth — descending, naturally. Miranda disagrees but was outvoted.",
    prompt:
      "Write a function `rank_bachelors(men)` that returns the list sorted by `\"net_worth\"` descending.\nTest with `rank_bachelors([{\"name\": \"Aidan\", \"net_worth\": 400000}, {\"name\": \"Mr. Big\", \"net_worth\": 12000000}, {\"name\": \"Berger\", \"net_worth\": 85000}])`.",
    hint: "Use `sorted(men, key=lambda x: x[\"net_worth\"], reverse=True)`.",
    solution: `def rank_bachelors(men):\n    return sorted(men, key=lambda x: x["net_worth"], reverse=True)\n\nresult = rank_bachelors([{"name": "Aidan", "net_worth": 400000}, {"name": "Mr. Big", "net_worth": 12000000}, {"name": "Berger", "net_worth": 85000}])\nfor m in result:\n    print(f"{m['name']}: {m['net_worth']}")`,
    starterCode: `# Manhattan's Most Eligible\n\ndef rank_bachelors(men):\n    return sorted(men, key=lambda x: x[___], reverse=True)\n\nresult = rank_bachelors([{"name": "Aidan", "net_worth": 400000}, {"name": "Mr. Big", "net_worth": 12000000}, {"name": "Berger", "net_worth": 85000}])\nfor m in result:\n    print(f"{m['name']}: {m['net_worth']}")`,
    testCases: [
      { input: '[{"name": "Aidan", "net_worth": 400000}, {"name": "Mr. Big", "net_worth": 12000000}, {"name": "Berger", "net_worth": 85000}]', expected: "Mr. Big: 12000000\nAidan: 400000\nBerger: 85000", description: "Bachelors sorted by net worth descending" },
    ],
    concept: "Sorting",
    difficulty: "advanced",
  },
  {
    id: "sc-py-10",
    themeId: "sex-and-the-city",
    languageId: "python",
    order: 10,
    title: "Exception Handling",
    themedTitle: "The Missing Reservation",
    narrative:
      "Carrie made a reservation at the hottest restaurant in the Meatpacking District — but Big may or may not have called it in. Miranda needs a safe lookup function for the reservation book that doesn't cause a scene in the lobby.",
    prompt:
      "Write `find_reservation(book, name)` that tries to return `book[name]`. If the key doesn't exist, catch the `KeyError` and return `\"No reservation found. Classic.\"`\nTest with `book = {\"Carrie\": \"Table 4, 8pm\"}` using `\"Carrie\"` and `\"Big\"`.",
    hint: "Use `try/except KeyError`.",
    solution: `def find_reservation(book, name):\n    try:\n        return book[name]\n    except KeyError:\n        return "No reservation found. Classic."\n\nbook = {"Carrie": "Table 4, 8pm"}\nprint(find_reservation(book, "Carrie"))\nprint(find_reservation(book, "Big"))`,
    starterCode: `# The Missing Reservation\n\ndef find_reservation(book, name):\n    try:\n        return book[___]\n    except KeyError:\n        return ___\n\nbook = {"Carrie": "Table 4, 8pm"}\nprint(find_reservation(book, "Carrie"))  # Table 4, 8pm\nprint(find_reservation(book, "Big"))     # No reservation found. Classic.`,
    testCases: [
      { input: '"Carrie"', expected: "Table 4, 8pm", description: "Reservation found" },
      { input: '"Big"', expected: "No reservation found. Classic.", description: "No reservation — very on brand" },
    ],
    concept: "Exception Handling",
    difficulty: "advanced",
  },
];
