import type { Challenge } from "@/types";

export const rickAndMortyJavaScriptChallenges: Challenge[] = [
  {
    id: "rm-js-01",
    themeId: "rick-and-morty",
    languageId: "javascript",
    order: 1,
    title: "Variables & Template Literals",
    themedTitle: "Morty's Portal Log",
    narrative:
      "Rick has dragged Morty through yet another interdimensional portal. Morty needs to log where they've ended up — the dimension designation and current planet. Summer says if he doesn't start writing this stuff down, they'll never find their way home.",
    prompt:
      "Create two variables: `dimension` (set to `\"C-137\"`) and `planet` (set to `\"Earth\"`). Then use a template literal to create a variable `log` equal to `\"Dimension C-137. Currently on Earth.\"` and print it with `console.log`.",
    hint: "Template literals use backticks and `${variableName}`: `` `Dimension ${dimension}. Currently on ${planet}.` ``",
    solution: `const dimension = "C-137";\nconst planet = "Earth";\nconst log = \`Dimension \${dimension}. Currently on \${planet}.\`;\nconsole.log(log);`,
    starterCode: `// Morty's Portal Log\n// Create the variables and build the log with a template literal\n\nconst dimension = ___;\nconst planet = ___;\nconst log = ___;\nconsole.log(log);`,
    testCases: [
      { input: "", expected: "Dimension C-137. Currently on Earth.", description: "Prints the portal log entry" },
    ],
    concept: "Variables & Template Literals",
    difficulty: "beginner",
  },
  {
    id: "rm-js-02",
    themeId: "rick-and-morty",
    languageId: "javascript",
    order: 2,
    title: "Arrays",
    themedTitle: "The Council of Ricks",
    narrative:
      "The Citadel of Ricks is taking attendance. Ricks from across the multiverse keep showing up uninvited. Worker Rick just registered — he needs to be added to the attendance manifest before the Council convenes.",
    prompt:
      "Create an array called `ricks` with `\"Rick C-137\"`, `\"Rick D-99\"`, `\"Rick J-22\"`, and `\"Doofus Rick\"`. Add `\"Worker Rick\"` to the end of the array using `push`. Then print the array length with `console.log`.",
    hint: "Use `array.push(value)` to add to the end. `array.length` gives you the count.",
    solution: `const ricks = ["Rick C-137", "Rick D-99", "Rick J-22", "Doofus Rick"];\nricks.push("Worker Rick");\nconsole.log(ricks.length);`,
    starterCode: `// The Council of Ricks\n// Create the array, add Worker Rick, then print the length\n\nconst ricks = [___];\nricks.push(___);\nconsole.log(ricks.length);`,
    testCases: [
      { input: "", expected: "5", description: "5 Ricks registered at the Citadel" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "rm-js-03",
    themeId: "rick-and-morty",
    languageId: "javascript",
    order: 3,
    title: "Functions",
    themedTitle: "Portal Gun Charge Calculator",
    narrative:
      "Rick's portal gun runs on concentrated dark matter. Each portal jump consumes energy based on the distance between dimensions. Rick needs a function to calculate remaining charges after a journey.",
    prompt:
      "Write a function called `remainingCharges` that takes `charges` (a number) and `jumps` (a number) as arguments and returns `charges - jumps * 3` (each jump costs 3 units). Log `remainingCharges(30, 5)` to the console.",
    hint: "A function with two parameters: `function name(a, b) { return a - b * 3; }`",
    solution: `function remainingCharges(charges, jumps) {\n  return charges - jumps * 3;\n}\n\nconsole.log(remainingCharges(30, 5));`,
    starterCode: `// Portal Gun Charge Calculator\n// Write a function that calculates remaining portal gun charges\n\nfunction remainingCharges(charges, jumps) {\n  // Each jump costs 3 units — return what's left\n}\n\nconsole.log(remainingCharges(30, 5));  // Should print: 15`,
    testCases: [
      { input: "30, 5", expected: "15", description: "30 charges minus 5 jumps at 3 each = 15 remaining" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "rm-js-04",
    themeId: "rick-and-morty",
    languageId: "javascript",
    order: 4,
    title: "Objects",
    themedTitle: "Interdimensional Passport",
    narrative:
      "The Galactic Federation requires all travelers to carry a passport. Rick hates bureaucracy but even he has to admit that some record-keeping is necessary. A new field needs to be added: whether the traveler is currently wanted by the Federation.",
    prompt:
      "Create an object called `passport` with properties: `holder` (`\"Rick Sanchez\"`), `dimension` (`\"C-137\"`), and `clearanceLevel` (`5`). Then add a new property `wanted` set to `true`. Print the `holder` and `wanted` properties with `console.log`.",
    hint: "Add a new property with `object.newProperty = value`. Access properties with `object.property`.",
    solution: `const passport = {\n  holder: "Rick Sanchez",\n  dimension: "C-137",\n  clearanceLevel: 5\n};\npassport.wanted = true;\nconsole.log(passport.holder);\nconsole.log(passport.wanted);`,
    starterCode: `// Interdimensional Passport\n// Create the object, add the wanted property, then print holder and wanted\n\nconst passport = {\n  holder: ___,\n  dimension: ___,\n  clearanceLevel: ___\n};\npassport.wanted = ___;\nconsole.log(passport.holder);\nconsole.log(passport.wanted);`,
    testCases: [
      { input: "", expected: "Rick Sanchez\ntrue", description: "Prints holder name and wanted status" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "rm-js-05",
    themeId: "rick-and-morty",
    languageId: "javascript",
    order: 5,
    title: "Array Methods",
    themedTitle: "Stable Dimension Finder",
    narrative:
      "Rick is scanning his dimension database for safe hideouts. He needs to filter out the unstable ones — only dimensions marked as stable are suitable for lying low from the Galactic Federation. How many safe options does he have?",
    prompt:
      "Given an array of dimensions, use `filter` to create a new array called `stable` that only contains dimensions whose `safe` property is `true`. Then `console.log` the `length` of `stable`.",
    hint: "Use `dimensions.filter(d => d.safe)` to keep only safe dimensions.",
    solution: `const dimensions = [\n  { id: "C-137", safe: true },\n  { id: "D-99", safe: false },\n  { id: "J-22", safe: true },\n  { id: "K-83", safe: false },\n  { id: "M-01", safe: true },\n];\n\nconst stable = dimensions.filter(d => d.safe);\nconsole.log(stable.length);`,
    starterCode: `// Stable Dimension Finder\n// Filter for dimensions where safe is true, then log the count\n\nconst dimensions = [\n  { id: "C-137", safe: true },\n  { id: "D-99", safe: false },\n  { id: "J-22", safe: true },\n  { id: "K-83", safe: false },\n  { id: "M-01", safe: true },\n];\n\nconst stable = dimensions.filter(___);\nconsole.log(stable.length);`,
    testCases: [
      { input: "", expected: "3", description: "3 stable dimensions available as hideouts" },
    ],
    concept: "Array Methods",
    difficulty: "intermediate",
  },
];
