import type { Challenge } from "@/types";

export const arrestedDevelopmentPythonChallenges: Challenge[] = [
  {
    id: "ad-py-01",
    themeId: "arrested-development",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "The Banana Stand Account",
    narrative:
      "George Bluth Sr. always said there was money in the banana stand — $250,000 sewn into the walls, to be exact. Michael needs to track the family's one reliable asset before Buster or George Michael accidentally burns it down.",
    prompt:
      "Create three variables: `business` (set to `\"banana stand\"`), `hidden_cash` (an integer set to `250000`), and `is_liquid` (a boolean set to `False`). Then print all three.",
    hint: "In Python, strings need quotes, integers are plain numbers, and booleans are `True` or `False` with a capital first letter.",
    solution: `business = "banana stand"\nhidden_cash = 250000\nis_liquid = False\nprint(business)\nprint(hidden_cash)\nprint(is_liquid)`,
    starterCode: `# The Banana Stand Account\n# Create the three variables, then print them\n\nbusiness = ___\nhidden_cash = ___\nis_liquid = ___\n\nprint(business)\nprint(hidden_cash)\nprint(is_liquid)`,
    testCases: [
      { input: "", expected: "banana stand\n250000\nFalse", description: "Prints business, hidden cash, and liquidity" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "ad-py-02",
    themeId: "arrested-development",
    languageId: "python",
    order: 2,
    title: "Lists",
    themedTitle: "The Bluth Family Roster",
    narrative:
      "Michael is trying to run a family meeting, but nobody shows up on time and Buster keeps wandering off. Create the official Bluth family attendance list — then remove Buster, who 'forgot' the meeting was happening.",
    prompt:
      "Create a list called `family` with `\"Michael\"`, `\"Gob\"`, `\"Lindsay\"`, `\"Buster\"`, and `\"George Michael\"`. Remove `\"Buster\"` from the list, then print it.",
    hint: "Use `list.remove(value)` to remove an item by value.",
    solution: `family = ["Michael", "Gob", "Lindsay", "Buster", "George Michael"]\nfamily.remove("Buster")\nprint(family)`,
    starterCode: `# The Bluth Family Roster\n# Create the list, remove Buster, then print it\n\nfamily = [___]\nfamily.remove(___)\nprint(family)`,
    testCases: [
      { input: "", expected: "['Michael', 'Gob', 'Lindsay', 'George Michael']", description: "Buster removed from the roster" },
    ],
    concept: "Lists",
    difficulty: "beginner",
  },
  {
    id: "ad-py-03",
    themeId: "arrested-development",
    languageId: "python",
    order: 3,
    title: "Dictionaries",
    themedTitle: "Tobias's Acting Résumé",
    narrative:
      "Tobias Fünke is the world's first analyst-therapist — and a never-nude. He insists his acting career is 'really taking off.' Help him build a dictionary to track his professional highlights for his headshots.",
    prompt:
      "Create a dictionary called `tobias` with three keys: `\"name\"` (set to `\"Tobias Fünke\"`), `\"profession\"` (set to `\"actor\"`), and `\"never_nude\"` (set to `True`). Then print the value of the `\"profession\"` key.",
    hint: "Dictionaries use `{\"key\": value}`. Access a value with `dict[\"key\"]`.",
    solution: `tobias = {"name": "Tobias Fünke", "profession": "actor", "never_nude": True}\nprint(tobias["profession"])`,
    starterCode: `# Tobias's Acting Résumé\n# Create the dictionary, then print his profession\n\ntobias = {___}\nprint(tobias[___])`,
    testCases: [
      { input: "", expected: "actor", description: "Prints Tobias's profession" },
    ],
    concept: "Dictionaries",
    difficulty: "beginner",
  },
  {
    id: "ad-py-04",
    themeId: "arrested-development",
    languageId: "python",
    order: 4,
    title: "Functions & Conditionals",
    themedTitle: "The Banana Stand Calculator",
    narrative:
      "George Bluth Sr. insists there's always money in the banana stand. Michael needs a function that calculates the total hidden value based on how many walls are intact. Each wall holds $62,500.",
    prompt:
      "Write a function called `banana_stand_value` that takes `walls_intact` as an argument and returns the total hidden cash (`walls_intact * 62500`). If `walls_intact` is 0, return `\"It's gone. There was money in those walls.\"`\nTest with `banana_stand_value(4)` and `banana_stand_value(0)`.",
    hint: "Use an `if` statement to check for 0 walls before doing the multiplication.",
    solution: `def banana_stand_value(walls_intact):\n    if walls_intact == 0:\n        return "It's gone. There was money in those walls."\n    return walls_intact * 62500\n\nprint(banana_stand_value(4))\nprint(banana_stand_value(0))`,
    starterCode: `# The Banana Stand Calculator\n\ndef banana_stand_value(walls_intact):\n    # Your code here\n    pass\n\nprint(banana_stand_value(4))   # Should print: 250000\nprint(banana_stand_value(0))   # Should print: It's gone. There was money in those walls.`,
    testCases: [
      { input: "4", expected: "250000", description: "4 walls = $250,000" },
      { input: "0", expected: "It's gone. There was money in those walls.", description: "0 walls = the bad news" },
    ],
    concept: "Functions & Conditionals",
    difficulty: "beginner",
  },
  {
    id: "ad-py-05",
    themeId: "arrested-development",
    languageId: "python",
    order: 5,
    title: "Loops",
    themedTitle: "Gob's Illusion Revenue",
    narrative:
      "Gob Bluth — 'it's not a trick, Michael, it's an illusion' — has finally found a manager. His fee schedule is irregular, but the total for the season needs to be tallied so the Bluth Company can count it as legitimate income.",
    prompt:
      "Write a function called `illusion_revenue` that takes a list of performance fees and returns their total using a `for` loop (no built-in `sum()`). Test with `illusion_revenue([5000, 3200, 8500, 1200, 4750])`.",
    hint: "Start with `total = 0`, then loop and add each fee. Return `total`.",
    solution: `def illusion_revenue(fees):\n    total = 0\n    for fee in fees:\n        total += fee\n    return total\n\nprint(illusion_revenue([5000, 3200, 8500, 1200, 4750]))`,
    starterCode: `# Gob's Illusion Revenue\n\ndef illusion_revenue(fees):\n    total = 0\n    for fee in fees:\n        # Add fee to total\n        pass\n    return total\n\nprint(illusion_revenue([5000, 3200, 8500, 1200, 4750]))  # Should print: 22650`,
    testCases: [
      { input: "[5000, 3200, 8500, 1200, 4750]", expected: "22650", description: "Total illusion revenue" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "ad-py-06",
    themeId: "arrested-development",
    languageId: "python",
    order: 6,
    title: "String Methods",
    themedTitle: "Lucille's Cutting Remarks",
    narrative:
      "Lucille Bluth never met a compliment she couldn't turn into an insult. Her passive-aggressive notes are legendary. Michael needs a function to sanitize, format, and decode Lucille's messages before they go into the family newsletter.",
    prompt:
      "Write a function `clean_remark(remark)` that: strips whitespace with `.strip()`, converts to uppercase with `.upper()`, then replaces `\"MISTAKE\"` with `\"OPPORTUNITY\"`. Return the result.\nTest with `clean_remark(\"  you're a mistake, Michael  \")`.",
    hint: "You can chain string methods: `remark.strip().upper().replace(...)`.",
    solution: `def clean_remark(remark):\n    return remark.strip().upper().replace("MISTAKE", "OPPORTUNITY")\n\nprint(clean_remark("  you're a mistake, Michael  "))`,
    starterCode: `# Lucille's Cutting Remarks\n\ndef clean_remark(remark):\n    return remark.strip().upper().replace(___, ___)\n\nprint(clean_remark("  you're a mistake, Michael  "))`,
    testCases: [
      { input: '"  you\'re a mistake, Michael  "', expected: "YOU'RE A OPPORTUNITY, MICHAEL", description: "Stripped, uppercased, and sanitized" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "ad-py-07",
    themeId: "arrested-development",
    languageId: "python",
    order: 7,
    title: "List Comprehension",
    themedTitle: "The Cornballer Recall List",
    narrative:
      "George Bluth Sr. invented the Cornballer, a device that fries corn but invariably burns whoever uses it. The FDA needs a filtered list of units sold to households that have been burned — so naturally it's the entire list minus the ones already in litigation.",
    prompt:
      "Write a function `get_recalled(units)` that takes a list of unit dictionaries with `\"id\"` and `\"burned\"` keys, and uses a list comprehension to return a list of IDs where `burned` is `True`.\nTest with `get_recalled([{\"id\": 1, \"burned\": True}, {\"id\": 2, \"burned\": False}, {\"id\": 3, \"burned\": True}])`.",
    hint: "List comprehension: `[u[\"id\"] for u in units if u[\"burned\"]]`.",
    solution: `def get_recalled(units):\n    return [u["id"] for u in units if u["burned"]]\n\nprint(get_recalled([{"id": 1, "burned": True}, {"id": 2, "burned": False}, {"id": 3, "burned": True}]))`,
    starterCode: `# The Cornballer Recall List\n\ndef get_recalled(units):\n    return [___ for u in units if ___]\n\nprint(get_recalled([{"id": 1, "burned": True}, {"id": 2, "burned": False}, {"id": 3, "burned": True}]))`,
    testCases: [
      { input: '[{"id": 1, "burned": True}, {"id": 2, "burned": False}, {"id": 3, "burned": True}]', expected: "[1, 3]", description: "IDs of burned Cornballer units" },
    ],
    concept: "List Comprehension",
    difficulty: "intermediate",
  },
  {
    id: "ad-py-08",
    themeId: "arrested-development",
    languageId: "python",
    order: 8,
    title: "Nested Data Structures",
    themedTitle: "The Seawind Manifest",
    narrative:
      "The Bluth family lives on the Seawind, a houseboat that is definitely seaworthy. George Michael has been keeping a log of who is staying in which cabin and what contraband they've stashed there — purely for safety reasons.",
    prompt:
      "Given `cabins = [{\"occupant\": \"Gob\", \"items\": [\"dove\", \"smoke machine\", \"cape\"]}, {\"occupant\": \"Tobias\", \"items\": [\"cutoffs\", \"blue paint\", \"acting reel\"]}]`, loop through and print each occupant with their first item in the format: `\"Gob: dove\"`.",
    hint: "Access nested data with `cabin[\"occupant\"]` and `cabin[\"items\"][0]`.",
    solution: `cabins = [{"occupant": "Gob", "items": ["dove", "smoke machine", "cape"]}, {"occupant": "Tobias", "items": ["cutoffs", "blue paint", "acting reel"]}]\nfor cabin in cabins:\n    print(f"{cabin['occupant']}: {cabin['items'][0]}")`,
    starterCode: `# The Seawind Manifest\n\ncabins = [\n    {"occupant": "Gob", "items": ["dove", "smoke machine", "cape"]},\n    {"occupant": "Tobias", "items": ["cutoffs", "blue paint", "acting reel"]}\n]\nfor cabin in cabins:\n    print(f"{cabin[___]}: {cabin[___][0]}")`,
    testCases: [
      { input: "", expected: "Gob: dove\nTobias: cutoffs", description: "Each occupant and their first item" },
    ],
    concept: "Nested Data Structures",
    difficulty: "intermediate",
  },
  {
    id: "ad-py-09",
    themeId: "arrested-development",
    languageId: "python",
    order: 9,
    title: "Sorting",
    themedTitle: "Ranking the Illusions",
    narrative:
      "Gob's illusions are ranked by audience rating — but nobody ever tells him the truth about the scores. Michael needs a properly sorted leaderboard so the talent agency can see the actual numbers and quietly pass.",
    prompt:
      "Write a function `rank_illusions(illusions)` that takes a list of dicts with `\"name\"` and `\"rating\"` keys, and returns the list sorted by `rating` descending using `sorted()` with `key=lambda`.\nTest with `rank_illusions([{\"name\": \"Saw\", \"rating\": 4}, {\"name\": \"Fire\", \"rating\": 9}, {\"name\": \"Dove\", \"rating\": 6}])`.",
    hint: "Use `sorted(illusions, key=lambda x: x[\"rating\"], reverse=True)`.",
    solution: `def rank_illusions(illusions):\n    return sorted(illusions, key=lambda x: x["rating"], reverse=True)\n\nresult = rank_illusions([{"name": "Saw", "rating": 4}, {"name": "Fire", "rating": 9}, {"name": "Dove", "rating": 6}])\nfor ill in result:\n    print(f"{ill['name']}: {ill['rating']}")`,
    starterCode: `# Ranking the Illusions\n\ndef rank_illusions(illusions):\n    return sorted(illusions, key=lambda x: x[___], reverse=True)\n\nresult = rank_illusions([{"name": "Saw", "rating": 4}, {"name": "Fire", "rating": 9}, {"name": "Dove", "rating": 6}])\nfor ill in result:\n    print(f"{ill['name']}: {ill['rating']}")`,
    testCases: [
      { input: '[{"name": "Saw", "rating": 4}, {"name": "Fire", "rating": 9}, {"name": "Dove", "rating": 6}]', expected: "Fire: 9\nDove: 6\nSaw: 4", description: "Illusions ranked highest to lowest" },
    ],
    concept: "Sorting",
    difficulty: "advanced",
  },
  {
    id: "ad-py-10",
    themeId: "arrested-development",
    languageId: "python",
    order: 10,
    title: "Exception Handling",
    themedTitle: "That's Why You Always Leave a Note",
    narrative:
      "Buster's accident — losing his hand to a loose seal (or was it a loose seal?) — could have been avoided. So could a lot of Bluth family disasters. Michael writes a safe lookup function so the next crash is at least caught gracefully.",
    prompt:
      "Write a function `get_family_note(notes, name)` that tries to return `notes[name]`. If the key doesn't exist, catch the `KeyError` and return `\"That's why you always leave a note.\"`\nTest with a dict `{\"Michael\": \"Meeting at 3pm\"}` using `\"Michael\"` and `\"Buster\"`.",
    hint: "Use `try: return notes[name]` and `except KeyError: return ...`",
    solution: `def get_family_note(notes, name):\n    try:\n        return notes[name]\n    except KeyError:\n        return "That's why you always leave a note."\n\nnotes = {"Michael": "Meeting at 3pm"}\nprint(get_family_note(notes, "Michael"))\nprint(get_family_note(notes, "Buster"))`,
    starterCode: `# That's Why You Always Leave a Note\n\ndef get_family_note(notes, name):\n    try:\n        return notes[___]\n    except KeyError:\n        return ___\n\nnotes = {"Michael": "Meeting at 3pm"}\nprint(get_family_note(notes, "Michael"))  # Meeting at 3pm\nprint(get_family_note(notes, "Buster"))   # That's why you always leave a note.`,
    testCases: [
      { input: '"Michael"', expected: "Meeting at 3pm", description: "Key found — returns note" },
      { input: '"Buster"', expected: "That's why you always leave a note.", description: "Key missing — returns classic Bluth warning" },
    ],
    concept: "Exception Handling",
    difficulty: "advanced",
  },
];
