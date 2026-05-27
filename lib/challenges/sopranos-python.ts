import type { Challenge } from "@/types";

export const sopranosPythonChallenges: Challenge[] = [
  {
    id: "sp-py-01",
    themeId: "sopranos",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "Tony's Business Profile",
    narrative:
      "Tony Soprano is, officially, in waste management. He's also the boss of the DiMeo crime family, but that part doesn't go in the tax returns. Help Tony set up his legitimate-facing business profile.",
    prompt:
      "Create three variables: `business` (set to `\"Soprano Waste Management\"`), `employees` (an integer set to `23`), and `is_legitimate` (a boolean set to `False`). Print all three.",
    hint: "Strings need quotes, integers are plain numbers, booleans are `True` or `False`.",
    solution: `business = "Soprano Waste Management"\nemployees = 23\nis_legitimate = False\nprint(business)\nprint(employees)\nprint(is_legitimate)`,
    starterCode: `# Tony's Business Profile\n\nbusiness = ___\nemployees = ___\nis_legitimate = ___\n\nprint(business)\nprint(employees)\nprint(is_legitimate)`,
    testCases: [
      { input: "", expected: "Soprano Waste Management\n23\nFalse", description: "Tony's business reality" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "sp-py-02",
    themeId: "sopranos",
    languageId: "python",
    order: 2,
    title: "Lists",
    themedTitle: "The DiMeo Crew",
    narrative:
      "Tony needs a current roster of his crew — for 'management purposes.' Big Pussy has recently gone missing (don't ask), and the list needs updating before the next sit-down.",
    prompt:
      "Create a list `crew` with `\"Tony\"`, `\"Paulie\"`, `\"Christopher\"`, `\"Big Pussy\"`, and `\"Bobby\"`. Remove `\"Big Pussy\"` and print the result.",
    hint: "Use `list.remove(value)` to remove by value.",
    solution: `crew = ["Tony", "Paulie", "Christopher", "Big Pussy", "Bobby"]\ncrew.remove("Big Pussy")\nprint(crew)`,
    starterCode: `# The DiMeo Crew\n\ncrew = ["Tony", "Paulie", "Christopher", "Big Pussy", "Bobby"]\ncrew.remove(___)\nprint(crew)`,
    testCases: [
      { input: "", expected: "['Tony', 'Paulie', 'Christopher', 'Bobby']", description: "The crew after Big Pussy's departure" },
    ],
    concept: "Lists",
    difficulty: "beginner",
  },
  {
    id: "sp-py-03",
    themeId: "sopranos",
    languageId: "python",
    order: 3,
    title: "Dictionaries",
    themedTitle: "Tony's FBI File",
    narrative:
      "Agent Harris has been building a file on Tony for years. The surveillance data needs to be structured properly so it can be presented to the task force without embarrassing anyone.",
    prompt:
      "Create a dictionary `file` with: `\"subject\"` → `\"Anthony Soprano\"`, `\"known_alias\"` → `\"Tony S.\"`, and `\"indictments\"` → `3`. Print the `\"known_alias\"` value.",
    hint: "Access dictionary values with `dict[\"key\"]`.",
    solution: `file = {"subject": "Anthony Soprano", "known_alias": "Tony S.", "indictments": 3}\nprint(file["known_alias"])`,
    starterCode: `# Tony's FBI File\n\nfile = {___}\nprint(file[___])`,
    testCases: [
      { input: "", expected: "Tony S.", description: "Tony's known alias" },
    ],
    concept: "Dictionaries",
    difficulty: "beginner",
  },
  {
    id: "sp-py-04",
    themeId: "sopranos",
    languageId: "python",
    order: 4,
    title: "Functions & Conditionals",
    themedTitle: "The Protection Rate",
    narrative:
      "Every business in the neighborhood pays protection. The rate depends on monthly revenue: big earners pay 20%, medium earners pay 15%, and small shops pay 10%. Tony needs a function for his accountant.",
    prompt:
      "Write `protection_fee(revenue)`: return `revenue * 0.20` if `revenue >= 50000`, `revenue * 0.15` if `revenue >= 20000`, else `revenue * 0.10`.\nTest with `protection_fee(60000)`, `protection_fee(30000)`, and `protection_fee(10000)`.",
    hint: "Use `if/elif/else` with `>=` comparisons. Python handles floats automatically.",
    solution: `def protection_fee(revenue):\n    if revenue >= 50000:\n        return revenue * 0.20\n    elif revenue >= 20000:\n        return revenue * 0.15\n    else:\n        return revenue * 0.10\n\nprint(protection_fee(60000))\nprint(protection_fee(30000))\nprint(protection_fee(10000))`,
    starterCode: `# The Protection Rate\n\ndef protection_fee(revenue):\n    if revenue >= 50000:\n        return revenue * 0.20\n    elif revenue >= 20000:\n        return revenue * 0.15\n    else:\n        return revenue * 0.10\n\nprint(protection_fee(60000))   # Should print: 12000.0\nprint(protection_fee(30000))   # Should print: 4500.0\nprint(protection_fee(10000))   # Should print: 1000.0`,
    testCases: [
      { input: "60000", expected: "12000.0", description: "20% on high earners" },
      { input: "30000", expected: "4500.0", description: "15% on medium earners" },
      { input: "10000", expected: "1000.0", description: "10% on small shops" },
    ],
    concept: "Functions & Conditionals",
    difficulty: "beginner",
  },
  {
    id: "sp-py-05",
    themeId: "sopranos",
    languageId: "python",
    order: 5,
    title: "Loops",
    themedTitle: "Dr. Melfi's Session Log",
    narrative:
      "Dr. Melfi charges $300 per therapy session. Tony has been attending (mostly) weekly for years. She needs a function that totals the session fees from a list of monthly bills.",
    prompt:
      "Write `total_fees(sessions)` that takes a list of session fees and returns the sum using a `for` loop. Test with `total_fees([300, 300, 600, 300, 300])`.",
    hint: "Start `total = 0`, then `total += fee`. Return `total`.",
    solution: `def total_fees(sessions):\n    total = 0\n    for fee in sessions:\n        total += fee\n    return total\n\nprint(total_fees([300, 300, 600, 300, 300]))`,
    starterCode: `# Dr. Melfi's Session Log\n\ndef total_fees(sessions):\n    total = 0\n    for fee in sessions:\n        total += fee\n    return total\n\nprint(total_fees([300, 300, 600, 300, 300]))  # Should print: 1800`,
    testCases: [
      { input: "[300, 300, 600, 300, 300]", expected: "1800", description: "Total therapy fees" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "sp-py-06",
    themeId: "sopranos",
    languageId: "python",
    order: 6,
    title: "String Methods",
    themedTitle: "The Wire Transcript",
    narrative:
      "The FBI has a new wiretap transcript and it's a mess — all caps, trailing whitespace, and the word 'meeting' used as a placeholder for something that absolutely wasn't a meeting. Agent Harris needs it cleaned up for evidence.",
    prompt:
      "Write a function `clean_transcript(line)` that strips whitespace, converts to lowercase with `.lower()`, and replaces `\"meeting\"` with `\"sit-down\"`. Return the result.\nTest with `clean_transcript(\"  ANOTHER MEETING AT THE BADA BING  \")`.",
    hint: "Chain: `line.strip().lower().replace(...)`.",
    solution: `def clean_transcript(line):\n    return line.strip().lower().replace("meeting", "sit-down")\n\nprint(clean_transcript("  ANOTHER MEETING AT THE BADA BING  "))`,
    starterCode: `# The Wire Transcript\n\ndef clean_transcript(line):\n    return line.strip().lower().replace(___, ___)\n\nprint(clean_transcript("  ANOTHER MEETING AT THE BADA BING  "))`,
    testCases: [
      { input: '"  ANOTHER MEETING AT THE BADA BING  "', expected: "another sit-down at the bada bing", description: "Stripped, lowercased, and decoded" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sp-py-07",
    themeId: "sopranos",
    languageId: "python",
    order: 7,
    title: "List Comprehension",
    themedTitle: "Paulie's Earner Filter",
    narrative:
      "Paulie Walnuts keeps a tight eye on who's pulling their weight. He needs a list of only the high earners from the crew — anyone bringing in over $10,000 a week. The rest get a very uncomfortable conversation.",
    prompt:
      "Write a function `high_earners(crew)` using a list comprehension to return names of crew members with `weekly > 10000`.\nTest with `high_earners([{\"name\": \"Paulie\", \"weekly\": 15000}, {\"name\": \"Christopher\", \"weekly\": 8000}, {\"name\": \"Bobby\", \"weekly\": 12000}])`.",
    hint: "List comprehension: `[m[\"name\"] for m in crew if m[\"weekly\"] > 10000]`.",
    solution: `def high_earners(crew):\n    return [m["name"] for m in crew if m["weekly"] > 10000]\n\nprint(high_earners([{"name": "Paulie", "weekly": 15000}, {"name": "Christopher", "weekly": 8000}, {"name": "Bobby", "weekly": 12000}]))`,
    starterCode: `# Paulie's Earner Filter\n\ndef high_earners(crew):\n    return [m[___] for m in crew if m[___] > 10000]\n\nprint(high_earners([{"name": "Paulie", "weekly": 15000}, {"name": "Christopher", "weekly": 8000}, {"name": "Bobby", "weekly": 12000}]))`,
    testCases: [
      { input: '[{"name": "Paulie", "weekly": 15000}, {"name": "Christopher", "weekly": 8000}, {"name": "Bobby", "weekly": 12000}]', expected: "['Paulie', 'Bobby']", description: "High earners above $10k/week" },
    ],
    concept: "List Comprehension",
    difficulty: "intermediate",
  },
  {
    id: "sp-py-08",
    themeId: "sopranos",
    languageId: "python",
    order: 8,
    title: "Nested Data Structures",
    themedTitle: "The Sit-Down Agenda",
    narrative:
      "Every sit-down has an agenda with action items. Tony's consigliere needs to loop through the meeting records and surface the first issue on each agenda before the capos start arguing about who gets what territory.",
    prompt:
      "Given `meetings = [{\"location\": \"Bada Bing\", \"issues\": [\"territory dispute\", \"missing payments\", \"FBI tail\"]}, {\"location\": \"Satriale's\", \"issues\": [\"gabagool order\", \"Christopher's sobriety\", \"Meadow's tuition\"]}]`, loop and print in the format: `\"Bada Bing — first issue: territory dispute\"`.",
    hint: "Access: `m[\"location\"]` and `m[\"issues\"][0]`.",
    solution: `meetings = [{"location": "Bada Bing", "issues": ["territory dispute", "missing payments", "FBI tail"]}, {"location": "Satriale's", "issues": ["gabagool order", "Christopher's sobriety", "Meadow's tuition"]}]\nfor m in meetings:\n    print(f"{m['location']} — first issue: {m['issues'][0]}")`,
    starterCode: `# The Sit-Down Agenda\n\nmeetings = [\n    {"location": "Bada Bing", "issues": ["territory dispute", "missing payments", "FBI tail"]},\n    {"location": "Satriale's", "issues": ["gabagool order", "Christopher's sobriety", "Meadow's tuition"]}\n]\nfor m in meetings:\n    print(f"{m[___]} — first issue: {m[___][0]}")`,
    testCases: [
      { input: "", expected: "Bada Bing — first issue: territory dispute\nSatriale's — first issue: gabagool order", description: "Each meeting's first agenda item" },
    ],
    concept: "Nested Data Structures",
    difficulty: "intermediate",
  },
  {
    id: "sp-py-09",
    themeId: "sopranos",
    languageId: "python",
    order: 9,
    title: "Sorting",
    themedTitle: "The Earner Rankings",
    narrative:
      "Tony gets a cut of everything. At the end of each quarter, the books get balanced and the crew is ranked by total earnings. The top earner gets respect; the bottom earner gets a very pointed look from Paulie.",
    prompt:
      "Write a function `rank_earners(crew)` that returns the list sorted by `\"earnings\"` descending.\nTest with `rank_earners([{\"name\": \"Silvio\", \"earnings\": 280000}, {\"name\": \"Paulie\", \"earnings\": 410000}, {\"name\": \"Christopher\", \"earnings\": 195000}])`.",
    hint: "Use `sorted(crew, key=lambda x: x[\"earnings\"], reverse=True)`.",
    solution: `def rank_earners(crew):\n    return sorted(crew, key=lambda x: x["earnings"], reverse=True)\n\nresult = rank_earners([{"name": "Silvio", "earnings": 280000}, {"name": "Paulie", "earnings": 410000}, {"name": "Christopher", "earnings": 195000}])\nfor c in result:\n    print(f"{c['name']}: {c['earnings']}")`,
    starterCode: `# The Earner Rankings\n\ndef rank_earners(crew):\n    return sorted(crew, key=lambda x: x[___], reverse=True)\n\nresult = rank_earners([{"name": "Silvio", "earnings": 280000}, {"name": "Paulie", "earnings": 410000}, {"name": "Christopher", "earnings": 195000}])\nfor c in result:\n    print(f"{c['name']}: {c['earnings']}")`,
    testCases: [
      { input: '[{"name": "Silvio", "earnings": 280000}, {"name": "Paulie", "earnings": 410000}, {"name": "Christopher", "earnings": 195000}]', expected: "Paulie: 410000\nSilvio: 280000\nChristopher: 195000", description: "Crew ranked by earnings descending" },
    ],
    concept: "Sorting",
    difficulty: "advanced",
  },
  {
    id: "sp-py-10",
    themeId: "sopranos",
    languageId: "python",
    order: 10,
    title: "Exception Handling",
    themedTitle: "The Missing Envelope",
    narrative:
      "Every Friday, envelopes come in from the various operations. If someone's envelope is missing, it's either a mistake or a message. Bobby needs a safe lookup that doesn't blow up the whole accounting system when a name turns up empty.",
    prompt:
      "Write `get_envelope(envelopes, name)` that tries to return `envelopes[name]`. If the key doesn't exist, catch the `KeyError` and return `\"No envelope. Someone's gonna hear about this.\"`\nTest with `envelopes = {\"Paulie\": 8500, \"Silvio\": 11000}` using `\"Silvio\"` and `\"Christopher\"`.",
    hint: "Use `try/except KeyError`.",
    solution: `def get_envelope(envelopes, name):\n    try:\n        return envelopes[name]\n    except KeyError:\n        return "No envelope. Someone's gonna hear about this."\n\nenvelopes = {"Paulie": 8500, "Silvio": 11000}\nprint(get_envelope(envelopes, "Silvio"))\nprint(get_envelope(envelopes, "Christopher"))`,
    starterCode: `# The Missing Envelope\n\ndef get_envelope(envelopes, name):\n    try:\n        return envelopes[___]\n    except KeyError:\n        return ___\n\nenvelopes = {"Paulie": 8500, "Silvio": 11000}\nprint(get_envelope(envelopes, "Silvio"))       # 11000\nprint(get_envelope(envelopes, "Christopher"))  # No envelope. Someone's gonna hear about this.`,
    testCases: [
      { input: '"Silvio"', expected: "11000", description: "Envelope found — Silvio delivered" },
      { input: '"Christopher"', expected: "No envelope. Someone's gonna hear about this.", description: "Missing envelope — trouble brewing" },
    ],
    concept: "Exception Handling",
    difficulty: "advanced",
  },
];
