import type { Challenge } from "@/types";

export const sopranosJavaScriptChallenges: Challenge[] = [
  {
    id: "sp-js-01",
    themeId: "sopranos",
    languageId: "javascript",
    order: 1,
    title: "Variables & Template Literals",
    themedTitle: "Christopher's Screenplay",
    narrative:
      "Christopher Moltisanti is writing a screenplay — Cleaver. It's about a mob boss who gets killed with a meat cleaver. It is not subtle. Help Christopher format his pitch with a proper title card.",
    prompt:
      "Create `title = \"Cleaver\"` and `writer = \"Christopher Moltisanti\"`. Log: `\"Cleaver — written by Christopher Moltisanti\"`",
    hint: "Template literals use backticks and `${variable}`.",
    solution: "const title = \"Cleaver\";\nconst writer = \"Christopher Moltisanti\";\nconsole.log(`${title} — written by ${writer}`);",
    starterCode: "const title = ___;\nconst writer = ___;\nconsole.log(___);",
    testCases: [
      { input: "", expected: "Cleaver — written by Christopher Moltisanti", description: "The screenplay title card" },
    ],
    concept: "Variables & Template Literals",
    difficulty: "beginner",
  },
  {
    id: "sp-js-02",
    themeId: "sopranos",
    languageId: "javascript",
    order: 2,
    title: "Arrays",
    themedTitle: "The Bada Bing Roster",
    narrative:
      "The Bada Bing has a new Saturday night schedule. Silvio manages the books and needs the full staff list updated with the latest hire before the weekend.",
    prompt:
      "Create array `staff` with `\"Silvio\"`, `\"Georgie\"`, `\"Artie\"`. Push `\"Patsy\"`. Log the length.",
    hint: "Use `array.push(value)` and `array.length`.",
    solution: "const staff = [\"Silvio\", \"Georgie\", \"Artie\"];\nstaff.push(\"Patsy\");\nconsole.log(staff.length);",
    starterCode: "const staff = [\"Silvio\", \"Georgie\", \"Artie\"];\nstaff.push(___);\nconsole.log(staff.length);  // Should print: 4",
    testCases: [
      { input: "", expected: "4", description: "Four staff members" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "sp-js-03",
    themeId: "sopranos",
    languageId: "javascript",
    order: 3,
    title: "Functions & Ternary",
    themedTitle: "Made Man or Associate?",
    narrative:
      "There's a strict hierarchy in the DiMeo family. A made man has been formally inducted; an associate is still earning. Tony needs a quick classification function when reviewing new recruits.",
    prompt:
      "Write `classify(inducted)` that uses a ternary: return `\"Made man\"` if `inducted === true`, otherwise `\"Associate\"`.\nTest with `classify(true)` and `classify(false)`.",
    hint: "Ternary: `condition ? 'a' : 'b'`",
    solution: "function classify(inducted) {\n  return inducted === true ? \"Made man\" : \"Associate\";\n}\nconsole.log(classify(true));\nconsole.log(classify(false));",
    starterCode: "function classify(inducted) {\n  return ___;\n}\nconsole.log(classify(true));   // Made man\nconsole.log(classify(false));  // Associate",
    testCases: [
      { input: "true", expected: "Made man", description: "Inducted = made man" },
      { input: "false", expected: "Associate", description: "Not inducted = associate" },
    ],
    concept: "Functions & Ternary",
    difficulty: "beginner",
  },
  {
    id: "sp-js-04",
    themeId: "sopranos",
    languageId: "javascript",
    order: 4,
    title: "Objects",
    themedTitle: "Tony's Duck File",
    narrative:
      "Tony's therapist says his attachment to the ducks that lived in his pool symbolizes his fear of losing his family. Tony says they were just ducks. Either way, he tracked them obsessively.",
    prompt:
      "Create object `duckLog` with: `location: \"backyard pool\"`, `count: 4`, and `returned: false`. Log the `count` property.",
    hint: "Access with `object.property`.",
    solution: "const duckLog = {\n  location: \"backyard pool\",\n  count: 4,\n  returned: false\n};\nconsole.log(duckLog.count);",
    starterCode: "const duckLog = {\n  location: ___,\n  count: ___,\n  returned: ___\n};\nconsole.log(duckLog.count);  // Should print: 4",
    testCases: [
      { input: "", expected: "4", description: "Four ducks in the pool" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "sp-js-05",
    themeId: "sopranos",
    languageId: "javascript",
    order: 5,
    title: "Array Methods",
    themedTitle: "Profitable Operations",
    narrative:
      "Tony's accountant (the legitimate one) needs to identify which operations cleared a profit last quarter. Some ventures lose money on paper deliberately; others just lose money.",
    prompt:
      "Given `ops = [{name: \"Waste Management\", profit: 85000}, {name: \"Esplanade\", profit: -12000}, {name: \"Bada Bing\", profit: 42000}, {name: \"HUD Scam\", profit: -8000}]`, filter for `profit > 0` and log the count.",
    hint: "`.filter(op => op.profit > 0)`",
    solution: "const ops = [{name: \"Waste Management\", profit: 85000}, {name: \"Esplanade\", profit: -12000}, {name: \"Bada Bing\", profit: 42000}, {name: \"HUD Scam\", profit: -8000}];\nconst profitable = ops.filter(op => op.profit > 0);\nconsole.log(profitable.length);",
    starterCode: "const ops = [\n  {name: \"Waste Management\", profit: 85000},\n  {name: \"Esplanade\", profit: -12000},\n  {name: \"Bada Bing\", profit: 42000},\n  {name: \"HUD Scam\", profit: -8000}\n];\nconst profitable = ops.filter(___);\nconsole.log(profitable.length);  // Should print: 2",
    testCases: [
      { input: "", expected: "2", description: "Two profitable operations" },
    ],
    concept: "Array Methods (filter)",
    difficulty: "beginner",
  },
  {
    id: "sp-js-06",
    themeId: "sopranos",
    languageId: "javascript",
    order: 6,
    title: "String Methods",
    themedTitle: "Christopher's Screenplay Polish",
    narrative:
      "Christopher's screenplay Cleaver has been workshopped, but the title page came back from the printer all lowercase with inconsistencies. Silvio is handling cleanup before the Hollywood pitch meeting.",
    prompt:
      "Write a function `polishTitle(title)` that: converts to uppercase with `.toUpperCase()`, checks if it `.includes('CLEAVER')` — if not, return `\"That's not the script.\"` — and uses `.replace('SCRIPT', 'SCREENPLAY')`. Return the result.\nTest with `polishTitle(\"cleaver — the script\")` and `polishTitle(\"goodfellas — the script\")`.",
    hint: "Call `.toUpperCase()` first, check `.includes()`, then `.replace()`.",
    solution: "function polishTitle(title) {\n  const upper = title.toUpperCase();\n  if (!upper.includes('CLEAVER')) return \"That's not the script.\";\n  return upper.replace('SCRIPT', 'SCREENPLAY');\n}\nconsole.log(polishTitle(\"cleaver — the script\"));\nconsole.log(polishTitle(\"goodfellas — the script\"));",
    starterCode: "function polishTitle(title) {\n  const upper = title.toUpperCase();\n  if (!upper.includes(___)) return \"That's not the script.\";\n  return upper.replace(___, ___);\n}\nconsole.log(polishTitle(\"cleaver — the script\"));\nconsole.log(polishTitle(\"goodfellas — the script\"));",
    testCases: [
      { input: '"cleaver — the script"', expected: "CLEAVER — THE SCREENPLAY", description: "Cleaver title polished" },
      { input: '"goodfellas — the script"', expected: "That's not the script.", description: "Wrong title rejected" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sp-js-07",
    themeId: "sopranos",
    languageId: "javascript",
    order: 7,
    title: ".map()",
    themedTitle: "The Tribute Envelopes",
    narrative:
      "Every crew member owes Tony a weekly tribute. Paulie needs to generate the envelope labels — each one marked with the member's name and the word 'tribute' — so there's no confusion when they come in on Friday.",
    prompt:
      "Given `members = [\"Paulie\", \"Christopher\", \"Bobby\", \"Silvio\"]`, use `.map()` to return an array formatted as `\"Paulie's tribute\"`.\nLog the result.",
    hint: "`.map(m => \\`${m}'s tribute\\`)` creates a new array.",
    solution: "const members = [\"Paulie\", \"Christopher\", \"Bobby\", \"Silvio\"];\nconst envelopes = members.map(m => `${m}'s tribute`);\nconsole.log(envelopes);",
    starterCode: "const members = [\"Paulie\", \"Christopher\", \"Bobby\", \"Silvio\"];\nconst envelopes = members.map(m => ___);\nconsole.log(envelopes);",
    testCases: [
      { input: "", expected: "[ \"Paulie's tribute\", \"Christopher's tribute\", \"Bobby's tribute\", \"Silvio's tribute\" ]", description: "Tribute envelope labels for all members" },
    ],
    concept: ".map()",
    difficulty: "intermediate",
  },
  {
    id: "sp-js-08",
    themeId: "sopranos",
    languageId: "javascript",
    order: 8,
    title: ".reduce()",
    themedTitle: "Tony's Monthly Take",
    narrative:
      "Tony gets a cut of everything the crew brings in. The accountant needs a single total from all the weekly tributes before preparing the books — the legitimate ones, anyway.",
    prompt:
      "Given `tributes = [8500, 11000, 6200, 9800, 14000]`, use `.reduce()` to calculate the total and log it.\nExpected: `49500`.",
    hint: "`.reduce((acc, amount) => acc + amount, 0)` accumulates the sum.",
    solution: "const tributes = [8500, 11000, 6200, 9800, 14000];\nconst total = tributes.reduce((acc, amount) => acc + amount, 0);\nconsole.log(total);",
    starterCode: "const tributes = [8500, 11000, 6200, 9800, 14000];\nconst total = tributes.reduce((acc, amount) => ___, 0);\nconsole.log(total);  // Should print: 49500",
    testCases: [
      { input: "", expected: "49500", description: "Total monthly tribute collected" },
    ],
    concept: ".reduce()",
    difficulty: "intermediate",
  },
  {
    id: "sp-js-09",
    themeId: "sopranos",
    languageId: "javascript",
    order: 9,
    title: "Spread & Destructuring",
    themedTitle: "The DiMeo & Lupertazzi Alliance",
    narrative:
      "A tenuous alliance between the DiMeo and Lupertazzi families requires combining both crews for a joint operation. The consigliere needs the full combined list with the top two names pulled out for first chair.",
    prompt:
      "Given `dimeo = [\"Tony\", \"Paulie\", \"Christopher\"]` and `lupertazzi = [\"Johnny Sack\", \"Phil Leotardo\", \"Carmine\"]`, spread-merge into `alliance`. Then destructure: `const [first, second, ...rest] = alliance`. Log `first`, `second`, and `rest.length`.",
    hint: "Spread merge: `[...dimeo, ...lupertazzi]`. Destructure with rest.",
    solution: "const dimeo = [\"Tony\", \"Paulie\", \"Christopher\"];\nconst lupertazzi = [\"Johnny Sack\", \"Phil Leotardo\", \"Carmine\"];\nconst alliance = [...dimeo, ...lupertazzi];\nconst [first, second, ...rest] = alliance;\nconsole.log(first);\nconsole.log(second);\nconsole.log(rest.length);",
    starterCode: "const dimeo = [\"Tony\", \"Paulie\", \"Christopher\"];\nconst lupertazzi = [\"Johnny Sack\", \"Phil Leotardo\", \"Carmine\"];\nconst alliance = [...___, ...___];\nconst [first, second, ...rest] = alliance;\nconsole.log(first);        // Tony\nconsole.log(second);       // Paulie\nconsole.log(rest.length);  // 4",
    testCases: [
      { input: "", expected: "Tony\nPaulie\n4", description: "First two and rest count from merged alliance" },
    ],
    concept: "Spread & Destructuring",
    difficulty: "advanced",
  },
  {
    id: "sp-js-10",
    themeId: "sopranos",
    languageId: "javascript",
    order: 10,
    title: "Object.keys() & Iteration",
    themedTitle: "Tony's Therapy Homework",
    narrative:
      "Dr. Melfi has assigned Tony a structured self-reflection exercise. He needs to print out each of his emotional triggers with its intensity rating. Tony will do it, but he's not happy about it.",
    prompt:
      "Given `triggers = { ducks: 10, Carmela: 8, AJ: 7, Junior: 9 }`, use `Object.keys(triggers).forEach(key => ...)` to log each key and value in the format: `\"ducks: 10\"`.",
    hint: "`Object.keys(obj).forEach(key => console.log(\\`${key}: ${obj[key]}\\`))`",
    solution: "const triggers = { ducks: 10, Carmela: 8, AJ: 7, Junior: 9 };\nObject.keys(triggers).forEach(key => {\n  console.log(`${key}: ${triggers[key]}`);\n});",
    starterCode: "const triggers = { ducks: 10, Carmela: 8, AJ: 7, Junior: 9 };\nObject.keys(triggers).forEach(key => {\n  console.log(___);\n});",
    testCases: [
      { input: "", expected: "ducks: 10\nCarmela: 8\nAJ: 7\nJunior: 9", description: "Tony's emotional triggers with ratings" },
    ],
    concept: "Object.keys() & Iteration",
    difficulty: "advanced",
  },
];
