import type { Challenge } from "@/types";

export const breakingBadJavaScriptChallenges: Challenge[] = [
  {
    id: "bb-js-01",
    themeId: "breaking-bad",
    languageId: "javascript",
    order: 1,
    title: "Variables & Template Literals",
    themedTitle: "Say My Name",
    narrative:
      "Walter White has built an empire from scratch. But in this business, your product speaks for itself. Walt needs to introduce himself — not as a chemistry teacher, but as Heisenberg. The message must be precise.",
    prompt:
      "Create two variables: `alias` (set to `\"Heisenberg\"`) and `territory` (set to `\"Albuquerque\"`). Then use a template literal to create a variable `intro` equal to `\"I am Heisenberg. I control Albuquerque.\"` and print it with `console.log`.",
    hint: "Template literals use backticks and `${variableName}` to embed variables: `` `I am ${alias}. I control ${territory}.` ``",
    solution: `const alias = "Heisenberg";\nconst territory = "Albuquerque";\nconst intro = \`I am \${alias}. I control \${territory}.\`;\nconsole.log(intro);`,
    starterCode: `// Say My Name\n// Create the variables and build the intro with a template literal\n\nconst alias = ___;\nconst territory = ___;\nconst intro = ___;\nconsole.log(intro);`,
    testCases: [
      { input: "", expected: "I am Heisenberg. I control Albuquerque.", description: "Prints the full introduction" },
    ],
    concept: "Variables & Template Literals",
    difficulty: "beginner",
  },
  {
    id: "bb-js-02",
    themeId: "breaking-bad",
    languageId: "javascript",
    order: 2,
    title: "Arrays",
    themedTitle: "The Distribution Network",
    narrative:
      "Saul Goodman has been managing Walt's distribution list. The network keeps growing — Skinny Pete just confirmed he's in. Saul needs to add him to the list and report how many distributors are now active.",
    prompt:
      "Create an array called `distributors` with `\"Badger\"`, `\"Combo\"`, `\"Huell\"`, and `\"Saul\"`. Add `\"Skinny Pete\"` to the end of the array using `push`. Then print the array length with `console.log`.",
    hint: "Use `array.push(value)` to add to the end. `array.length` gives you the count.",
    solution: `const distributors = ["Badger", "Combo", "Huell", "Saul"];\ndistributors.push("Skinny Pete");\nconsole.log(distributors.length);`,
    starterCode: `// The Distribution Network\n// Create the array, add Skinny Pete, then print the length\n\nconst distributors = [___];\ndistributors.push(___);\nconsole.log(distributors.length);`,
    testCases: [
      { input: "", expected: "5", description: "5 active distributors in the network" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "bb-js-03",
    themeId: "breaking-bad",
    languageId: "javascript",
    order: 3,
    title: "Functions",
    themedTitle: "The Purity Formula",
    narrative:
      "Walter White's blue meth is 99.1% pure — a number that has made him a legend. But Gus Fring wants consistency. Walt needs a function that calculates the yield from a cook given a starting amount of pseudoephedrine.",
    prompt:
      "Write a function called `calculateYield` that takes `pseudoephedrine` (a number) as an argument and returns `Math.floor(pseudoephedrine * 0.85)` (85% conversion rate, rounded down). Log `calculateYield(200)` to the console.",
    hint: "Use `Math.floor()` to round down: `return Math.floor(pseudoephedrine * 0.85);`",
    solution: `function calculateYield(pseudoephedrine) {\n  return Math.floor(pseudoephedrine * 0.85);\n}\n\nconsole.log(calculateYield(200));`,
    starterCode: `// The Purity Formula\n// Write a function that calculates cook yield\n\nfunction calculateYield(pseudoephedrine) {\n  // Return Math.floor of pseudoephedrine * 0.85\n}\n\nconsole.log(calculateYield(200));  // Should print: 170`,
    testCases: [
      { input: "200", expected: "170", description: "200 grams at 85% yields 170 grams" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "bb-js-04",
    themeId: "breaking-bad",
    languageId: "javascript",
    order: 4,
    title: "Objects",
    themedTitle: "The Product Profile",
    narrative:
      "Gus Fring runs a tight operation. Every batch of product gets a profile: the cook's alias, the purity percentage, and the batch weight. Now Walt needs to mark whether the batch has been delivered to the distribution point.",
    prompt:
      "Create an object called `batch` with properties: `cook` (`\"Heisenberg\"`), `purity` (`99.1`), and `weight` (`50`). Then add a new property `delivered` set to `false`. Print the `cook` and `delivered` properties with `console.log`.",
    hint: "Add a new property with `object.newProperty = value`. Access properties with `object.property`.",
    solution: `const batch = {\n  cook: "Heisenberg",\n  purity: 99.1,\n  weight: 50\n};\nbatch.delivered = false;\nconsole.log(batch.cook);\nconsole.log(batch.delivered);`,
    starterCode: `// The Product Profile\n// Create the object, add the delivered property, then print cook and delivered\n\nconst batch = {\n  cook: ___,\n  purity: ___,\n  weight: ___\n};\nbatch.delivered = ___;\nconsole.log(batch.cook);\nconsole.log(batch.delivered);`,
    testCases: [
      { input: "", expected: "Heisenberg\nfalse", description: "Prints cook name and delivery status" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "bb-js-05",
    themeId: "breaking-bad",
    languageId: "javascript",
    order: 5,
    title: "Array Methods",
    themedTitle: "Flagging the Territory",
    narrative:
      "Mike Ehrmantraut is reviewing Walt's distribution territories. Some are active, some have gone dark. He needs a list of only the active territories to report back to Gus — and a count to make sure the numbers add up.",
    prompt:
      "Given an array of territories, use `filter` to create a new array called `active` that only contains territories whose `status` property is `\"active\"`. Then `console.log` the `length` of `active`.",
    hint: "Use `territories.filter(t => t.status === \"active\")` to keep only active territories.",
    solution: `const territories = [\n  { name: "South Valley", status: "active" },\n  { name: "North Mesa", status: "dark" },\n  { name: "Downtown", status: "active" },\n  { name: "East Side", status: "dark" },\n  { name: "West Burque", status: "active" },\n];\n\nconst active = territories.filter(t => t.status === "active");\nconsole.log(active.length);`,
    starterCode: `// Flagging the Territory\n// Filter for territories with status "active", then log the count\n\nconst territories = [\n  { name: "South Valley", status: "active" },\n  { name: "North Mesa", status: "dark" },\n  { name: "Downtown", status: "active" },\n  { name: "East Side", status: "dark" },\n  { name: "West Burque", status: "active" },\n];\n\nconst active = territories.filter(___);\nconsole.log(active.length);`,
    testCases: [
      { input: "", expected: "3", description: "3 territories are currently active" },
    ],
    concept: "Array Methods",
    difficulty: "intermediate",
  },
  {
    id: "bb-js-06",
    themeId: "breaking-bad",
    languageId: "javascript",
    order: 6,
    title: "String Methods",
    themedTitle: "Sanitizing the Burner Phone Messages",
    narrative:
      "Walt and Jesse communicate on burner phones. The messages arrive in mixed case with extra spaces — a liability if they're intercepted. Mike needs a utility to clean incoming messages before they're logged.",
    prompt:
      "Given `const msg = \"  say my name  \"`, use string methods to: (1) `.trim()` whitespace, (2) `.toUpperCase()`, and (3) `.replace(\"MY NAME\", \"HEISENBERG\")`. Log the result.",
    hint: "Chain methods: `msg.trim().toUpperCase().replace(...)`",
    solution: `const msg = "  say my name  ";\nconst clean = msg.trim().toUpperCase().replace("MY NAME", "HEISENBERG");\nconsole.log(clean);`,
    starterCode: `// Sanitizing the Burner Phone Messages\n// Trim, uppercase, then replace "MY NAME" with "HEISENBERG"\n\nconst msg = "  say my name  ";\nconst clean = msg.trim().___.___;\nconsole.log(clean);  // Should print: SAY HEISENBERG`,
    testCases: [
      { input: "", expected: "SAY HEISENBERG", description: "Message cleaned and identity revealed" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "bb-js-07",
    themeId: "breaking-bad",
    languageId: "javascript",
    order: 7,
    title: ".map()",
    themedTitle: "Calculating the Cut",
    narrative:
      "Each distributor takes a percentage cut of the product price. Walt needs to calculate the actual payout for each distributor based on their agreed percentage, applied to a $10,000 base price.",
    prompt:
      "Given `const cuts = [0.1, 0.15, 0.08, 0.12, 0.2]`, use `.map()` to create `payouts` where each cut is multiplied by `10000`. Log `payouts`.",
    hint: "Use `cuts.map(c => c * 10000)` to calculate each payout.",
    solution: `const cuts = [0.1, 0.15, 0.08, 0.12, 0.2];\nconst payouts = cuts.map(c => c * 10000);\nconsole.log(payouts);`,
    starterCode: `// Calculating the Cut\n// Use .map() to calculate each distributor's payout from a $10,000 base\n\nconst cuts = [0.1, 0.15, 0.08, 0.12, 0.2];\nconst payouts = cuts.map(___);\nconsole.log(payouts);  // Should print: [1000, 1500, 800, 1200, 2000]`,
    testCases: [
      { input: "", expected: "[1000, 1500, 800, 1200, 2000]", description: "Payout amounts for each distributor" },
    ],
    concept: ".map()",
    difficulty: "intermediate",
  },
  {
    id: "bb-js-08",
    themeId: "breaking-bad",
    languageId: "javascript",
    order: 8,
    title: ".reduce()",
    themedTitle: "Counting the Money",
    narrative:
      "The money in the storage unit is piling up faster than Walt can launder it through the car wash. Skyler needs the exact total from all the cash stashes before she can start cooking the books.",
    prompt:
      "Given `const stashes = [237000, 480000, 315000, 92000, 560000]`, use `.reduce()` to calculate the total amount of cash. Log the result.",
    hint: "Use `stashes.reduce((total, s) => total + s, 0)` to sum all stash amounts.",
    solution: `const stashes = [237000, 480000, 315000, 92000, 560000];\nconst total = stashes.reduce((acc, s) => acc + s, 0);\nconsole.log(total);`,
    starterCode: `// Counting the Money\n// Use .reduce() to total all the cash stashes\n\nconst stashes = [237000, 480000, 315000, 92000, 560000];\nconst total = stashes.reduce(___);\nconsole.log(total);  // Should print: 1684000`,
    testCases: [
      { input: "", expected: "1684000", description: "Total cash across all stashes" },
    ],
    concept: ".reduce()",
    difficulty: "intermediate",
  },
  {
    id: "bb-js-09",
    themeId: "breaking-bad",
    languageId: "javascript",
    order: 9,
    title: "Spread & Destructuring",
    themedTitle: "Combining the Distribution Network",
    narrative:
      "Gus Fring's operation and Walt's crew are merging their distribution lists. Mike needs to combine both into one master list and identify the two lead distributors who will manage the combined network.",
    prompt:
      "Given `const gustavo = [\"Gus\", \"Mike\", \"Tyrus\"]` and `const walter = [\"Jesse\", \"Saul\", \"Huell\"]`, spread-combine into `network`. Destructure the first two as `lead1` and `lead2`. Log both.",
    hint: "Spread: `[...arr1, ...arr2]`. Destructure: `const [a, b] = array`.",
    solution: `const gustavo = ["Gus", "Mike", "Tyrus"];\nconst walter = ["Jesse", "Saul", "Huell"];\nconst network = [...gustavo, ...walter];\nconst [lead1, lead2] = network;\nconsole.log(lead1);\nconsole.log(lead2);`,
    starterCode: `// Combining the Distribution Network\n// Spread-combine the arrays, then destructure the first two leads\n\nconst gustavo = ["Gus", "Mike", "Tyrus"];\nconst walter = ["Jesse", "Saul", "Huell"];\nconst network = [...];\nconst [lead1, lead2] = network;\nconsole.log(lead1);\nconsole.log(lead2);`,
    testCases: [
      { input: "", expected: "Gus\nMike", description: "First two leads of the combined network" },
    ],
    concept: "Spread & Destructuring",
    difficulty: "advanced",
  },
  {
    id: "bb-js-10",
    themeId: "breaking-bad",
    languageId: "javascript",
    order: 10,
    title: "Object.keys() & Iteration",
    themedTitle: "Auditing the Car Wash Revenue",
    narrative:
      "The A1A Car Wash is Walt's primary money laundering front. Skyler tracks revenue by service type. She needs to print every service alongside its revenue figure for the phony tax return.",
    prompt:
      "Given `const revenue = { basicWash: 8400, detailing: 15200, waxing: 6700, interior: 9300 }`, use `Object.keys()` to iterate and log each service and its revenue in the format `\"basicWash: 8400\"`.",
    hint: "Use `Object.keys(revenue).forEach(key => console.log(key + \": \" + revenue[key]))`.",
    solution: `const revenue = { basicWash: 8400, detailing: 15200, waxing: 6700, interior: 9300 };\nObject.keys(revenue).forEach(key => {\n  console.log(key + ": " + revenue[key]);\n});`,
    starterCode: `// Auditing the Car Wash Revenue\n// Use Object.keys() to log each service and its revenue\n\nconst revenue = { basicWash: 8400, detailing: 15200, waxing: 6700, interior: 9300 };\nObject.keys(revenue).forEach(key => {\n  console.log(___);\n});`,
    testCases: [
      { input: "", expected: "basicWash: 8400\ndetailing: 15200\nwaxing: 6700\ninterior: 9300", description: "All revenue streams listed" },
    ],
    concept: "Object.keys() & Iteration",
    difficulty: "advanced",
  },
];
