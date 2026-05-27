import type { Challenge } from "@/types";

export const barbiePythonChallenges: Challenge[] = [
  {
    id: "ba-py-01",
    themeId: "barbie",
    languageId: "python",
    order: 1,
    title: "Variables & Data Types",
    themedTitle: "Barbie's Official Profile",
    narrative:
      "Every Barbie starts with a name, a job title, and the unshakeable certainty that today — like every day in Barbieland — is going to be perfect. Set up the official Barbie profile before the existential crisis hits.",
    prompt:
      "Create three variables: `name` (set to `\"Barbie\"`), `job` (set to `\"President\"`), and `is_perfect` (a boolean set to `True`). Then print all three.",
    hint: "Strings need quotes, booleans are `True` or `False` with a capital first letter.",
    solution: `name = "Barbie"\njob = "President"\nis_perfect = True\nprint(name)\nprint(job)\nprint(is_perfect)`,
    starterCode: `# Barbie's Official Profile\n\nname = ___\njob = ___\nis_perfect = ___\n\nprint(name)\nprint(job)\nprint(is_perfect)`,
    testCases: [
      { input: "", expected: "Barbie\nPresident\nTrue", description: "Barbie's profile" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "ba-py-02",
    themeId: "barbie",
    languageId: "python",
    order: 2,
    title: "Lists",
    themedTitle: "Barbie's Career List",
    narrative:
      "Barbie has had 200+ careers. Today she adds one more: Existential Crisis Haver. The career office needs to update the official list and record how many jobs she's had.",
    prompt:
      "Create a list `careers` with `\"Astronaut\"`, `\"Doctor\"`, and `\"President\"`. Append `\"Existential Crisis Haver\"`. Then print the length of the list.",
    hint: "Use `list.append(value)` to add an item, and `len(list)` for the count.",
    solution: `careers = ["Astronaut", "Doctor", "President"]\ncareers.append("Existential Crisis Haver")\nprint(len(careers))`,
    starterCode: `# Barbie's Career List\n\ncareers = ["Astronaut", "Doctor", "President"]\ncareers.append(___)\nprint(len(careers))  # Should print: 4`,
    testCases: [
      { input: "", expected: "4", description: "Four careers total" },
    ],
    concept: "Lists",
    difficulty: "beginner",
  },
  {
    id: "ba-py-03",
    themeId: "barbie",
    languageId: "python",
    order: 3,
    title: "Dictionaries",
    themedTitle: "Ken's Interests",
    narrative:
      "Ken's whole personality is Barbie — until he discovers the patriarchy in the Real World and briefly becomes obsessed with horses. Help Barbie track Ken's evolving 'personality' in a dictionary.",
    prompt:
      "Create a dictionary `ken` with: `\"name\"` → `\"Ken\"`, `\"interest\"` → `\"horses\"`, and `\"is_kenough\"` → `False`. Print the value of the `\"interest\"` key.",
    hint: "Dictionaries use `{\"key\": value}`. Access a value with `dict[\"key\"]`.",
    solution: `ken = {"name": "Ken", "interest": "horses", "is_kenough": False}\nprint(ken["interest"])`,
    starterCode: `# Ken's Interests\n\nken = {___}\nprint(ken[___])`,
    testCases: [
      { input: "", expected: "horses", description: "Ken's current interest" },
    ],
    concept: "Dictionaries",
    difficulty: "beginner",
  },
  {
    id: "ba-py-04",
    themeId: "barbie",
    languageId: "python",
    order: 4,
    title: "Functions & Conditionals",
    themedTitle: "The Barbieland Dress Code",
    narrative:
      "Weird Barbie is the fashion authority in Barbieland. She needs a function that checks whether an outfit meets the code: it must contain at least one pink item. Everything else is chaos.",
    prompt:
      "Write a function `dress_check(outfit)` that takes a list of clothing items (strings). If any item contains `\"pink\"` (case-insensitive), return `\"Approved!\"`; otherwise return `\"More pink needed.\"`.\nTest with `[\"pink blazer\", \"white jeans\"]` and `[\"black dress\", \"blue heels\"]`.",
    hint: "Use a `for` loop and check `\"pink\" in item.lower()` to be case-insensitive.",
    solution: `def dress_check(outfit):\n    for item in outfit:\n        if "pink" in item.lower():\n            return "Approved!"\n    return "More pink needed."\n\nprint(dress_check(["pink blazer", "white jeans"]))\nprint(dress_check(["black dress", "blue heels"]))`,
    starterCode: `# The Barbieland Dress Code\n\ndef dress_check(outfit):\n    for item in outfit:\n        if "pink" in item.lower():\n            return ___\n    return ___\n\nprint(dress_check(["pink blazer", "white jeans"]))  # Should print: Approved!\nprint(dress_check(["black dress", "blue heels"]))   # Should print: More pink needed.`,
    testCases: [
      { input: '["pink blazer", "white jeans"]', expected: "Approved!", description: "Pink present — approved" },
      { input: '["black dress", "blue heels"]', expected: "More pink needed.", description: "No pink — rejected" },
    ],
    concept: "Functions & Conditionals",
    difficulty: "beginner",
  },
  {
    id: "ba-py-05",
    themeId: "barbie",
    languageId: "python",
    order: 5,
    title: "Loops",
    themedTitle: "Perfect Days in Barbieland",
    narrative:
      "Every day in Barbieland is perfect — but Gloria needs to count exactly how many perfect days passed before Barbie started having dark thoughts. The president's office needs an official tally.",
    prompt:
      "Write a function `count_perfect_days(days)` that takes a list of booleans (`True` = perfect, `False` = existential crisis) and returns how many were `True`, using a `for` loop. Test with `[True, True, True, False, True, True]`.",
    hint: "Use a counter variable and `if day == True:` (or just `if day:`) inside the loop.",
    solution: `def count_perfect_days(days):\n    count = 0\n    for day in days:\n        if day:\n            count += 1\n    return count\n\nprint(count_perfect_days([True, True, True, False, True, True]))`,
    starterCode: `# Perfect Days in Barbieland\n\ndef count_perfect_days(days):\n    count = 0\n    for day in days:\n        if day:\n            count += ___\n    return count\n\nprint(count_perfect_days([True, True, True, False, True, True]))  # Should print: 5`,
    testCases: [
      { input: "[True, True, True, False, True, True]", expected: "5", description: "Five perfect days out of six" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "ba-py-06",
    themeId: "barbie",
    languageId: "python",
    order: 6,
    title: "String Methods",
    themedTitle: "Barbie's Slogan Workshop",
    narrative:
      "Mattel's marketing team needs Barbie's new tagline polished before the billboard goes up. It came in from the copywriters full of typos, trailing spaces, and accidentally lowercase letters. Gloria will handle it — once she stops crying.",
    prompt:
      "Write a function `polish_slogan(slogan)` that strips whitespace, converts to title case with `.title()`, then replaces `\"Plastic\"` with `\"Limitless\"`. Return the result.\nTest with `polish_slogan(\"  she's a plastic icon  \")`.",
    hint: "Chain methods: `slogan.strip().title().replace(...)`.",
    solution: `def polish_slogan(slogan):\n    return slogan.strip().title().replace("Plastic", "Limitless")\n\nprint(polish_slogan("  she's a plastic icon  "))`,
    starterCode: `# Barbie's Slogan Workshop\n\ndef polish_slogan(slogan):\n    return slogan.strip().title().replace(___, ___)\n\nprint(polish_slogan("  she's a plastic icon  "))`,
    testCases: [
      { input: '"  she\'s a plastic icon  "', expected: "She'S A Limitless Icon", description: "Stripped, title-cased, replaced" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "ba-py-07",
    themeId: "barbie",
    languageId: "python",
    order: 7,
    title: "List Comprehension",
    themedTitle: "Career Day Sign-Ups",
    narrative:
      "Barbieland is hosting Career Day and needs a filtered sign-up list. Only Barbies with careers that are at least 7 characters long get their own float in the parade. Weird Barbie made the rules.",
    prompt:
      "Write a function `parade_floats(careers)` that uses a list comprehension to return only careers with `len(career) >= 7`.\nTest with `parade_floats([\"Doctor\", \"Astronaut\", \"President\", \"CEO\", \"Scientist\"])`.",
    hint: "List comprehension: `[c for c in careers if len(c) >= 7]`.",
    solution: `def parade_floats(careers):\n    return [c for c in careers if len(c) >= 7]\n\nprint(parade_floats(["Doctor", "Astronaut", "President", "CEO", "Scientist"]))`,
    starterCode: `# Career Day Sign-Ups\n\ndef parade_floats(careers):\n    return [c for c in careers if ___]\n\nprint(parade_floats(["Doctor", "Astronaut", "President", "CEO", "Scientist"]))`,
    testCases: [
      { input: '["Doctor", "Astronaut", "President", "CEO", "Scientist"]', expected: "['Astronaut', 'President', 'Scientist']", description: "Careers with 7+ characters get a float" },
    ],
    concept: "List Comprehension",
    difficulty: "intermediate",
  },
  {
    id: "ba-py-08",
    themeId: "barbie",
    languageId: "python",
    order: 8,
    title: "Nested Data Structures",
    themedTitle: "The Barbieland Directory",
    narrative:
      "The Barbieland property registry tracks each Barbie's Dream House address and list of accessories. The welcome committee needs to loop through every resident and announce them with their top accessory.",
    prompt:
      "Given `residents = [{\"name\": \"Barbie\", \"accessories\": [\"sports car\", \"pool\", \"jet\"]}, {\"name\": \"Weird Barbie\", \"accessories\": [\"scissors\", \"permanent marker\", \"bent leg\"]}]`, loop and print each in the format: `\"Barbie's top accessory: sports car\"`.",
    hint: "Access nested data: `r[\"name\"]` and `r[\"accessories\"][0]`.",
    solution: `residents = [{"name": "Barbie", "accessories": ["sports car", "pool", "jet"]}, {"name": "Weird Barbie", "accessories": ["scissors", "permanent marker", "bent leg"]}]\nfor r in residents:\n    print(f"{r['name']}'s top accessory: {r['accessories'][0]}")`,
    starterCode: `# The Barbieland Directory\n\nresidents = [\n    {"name": "Barbie", "accessories": ["sports car", "pool", "jet"]},\n    {"name": "Weird Barbie", "accessories": ["scissors", "permanent marker", "bent leg"]}\n]\nfor r in residents:\n    print(f"{r[___]}'s top accessory: {r[___][0]}")`,
    testCases: [
      { input: "", expected: "Barbie's top accessory: sports car\nWeird Barbie's top accessory: scissors", description: "Each resident's top accessory" },
    ],
    concept: "Nested Data Structures",
    difficulty: "intermediate",
  },
  {
    id: "ba-py-09",
    themeId: "barbie",
    languageId: "python",
    order: 9,
    title: "Sorting",
    themedTitle: "Ken's Popularity Contest",
    narrative:
      "The Kens have been competing for attention since Barbie got back from the Real World. The Barbieland Gazette needs a ranked leaderboard of Ken approval ratings before the big dance-off.",
    prompt:
      "Write a function `rank_kens(kens)` that takes a list of dicts with `\"name\"` and `\"approval\"` keys, and returns the list sorted by `approval` descending.\nTest with `rank_kens([{\"name\": \"Ken\", \"approval\": 72}, {\"name\": \"Ken 2\", \"approval\": 88}, {\"name\": \"Allan\", \"approval\": 95}])`.",
    hint: "Use `sorted(kens, key=lambda k: k[\"approval\"], reverse=True)`.",
    solution: `def rank_kens(kens):\n    return sorted(kens, key=lambda k: k["approval"], reverse=True)\n\nresult = rank_kens([{"name": "Ken", "approval": 72}, {"name": "Ken 2", "approval": 88}, {"name": "Allan", "approval": 95}])\nfor k in result:\n    print(f"{k['name']}: {k['approval']}")`,
    starterCode: `# Ken's Popularity Contest\n\ndef rank_kens(kens):\n    return sorted(kens, key=lambda k: k[___], reverse=True)\n\nresult = rank_kens([{"name": "Ken", "approval": 72}, {"name": "Ken 2", "approval": 88}, {"name": "Allan", "approval": 95}])\nfor k in result:\n    print(f"{k['name']}: {k['approval']}")`,
    testCases: [
      { input: '[{"name": "Ken", "approval": 72}, {"name": "Ken 2", "approval": 88}, {"name": "Allan", "approval": 95}]', expected: "Allan: 95\nKen 2: 88\nKen: 72", description: "Kens ranked highest to lowest approval" },
    ],
    concept: "Sorting",
    difficulty: "advanced",
  },
  {
    id: "ba-py-10",
    themeId: "barbie",
    languageId: "python",
    order: 10,
    title: "Exception Handling",
    themedTitle: "The Real World Reality Check",
    narrative:
      "When Barbie arrives in the Real World, nothing works like Barbieland. Prices don't make sense, people are rude, and the bus driver asks her to pay a fare that doesn't exist in her vocabulary. She needs a safe way to look things up without crashing.",
    prompt:
      "Write a function `real_world_lookup(guide, item)` that tries to return `guide[item]`. If the key doesn't exist, catch the `KeyError` and return `\"That's not how it works in the Real World.\"`\nTest with `guide = {\"bus fare\": \"$2.75\", \"coffee\": \"$7.00\"}` using `\"coffee\"` and `\"compliment\"`.",
    hint: "Use `try/except KeyError`.",
    solution: `def real_world_lookup(guide, item):\n    try:\n        return guide[item]\n    except KeyError:\n        return "That's not how it works in the Real World."\n\nguide = {"bus fare": "$2.75", "coffee": "$7.00"}\nprint(real_world_lookup(guide, "coffee"))\nprint(real_world_lookup(guide, "compliment"))`,
    starterCode: `# The Real World Reality Check\n\ndef real_world_lookup(guide, item):\n    try:\n        return guide[___]\n    except KeyError:\n        return ___\n\nguide = {"bus fare": "$2.75", "coffee": "$7.00"}\nprint(real_world_lookup(guide, "coffee"))      # $7.00\nprint(real_world_lookup(guide, "compliment"))  # That's not how it works in the Real World.`,
    testCases: [
      { input: '"coffee"', expected: "$7.00", description: "Key found — returns price" },
      { input: '"compliment"', expected: "That's not how it works in the Real World.", description: "Key missing — Barbie is confused" },
    ],
    concept: "Exception Handling",
    difficulty: "advanced",
  },
];
