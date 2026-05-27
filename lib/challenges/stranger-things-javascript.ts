import type { Challenge } from "@/types";

export const strangerThingsJavaScriptChallenges: Challenge[] = [
  {
    id: "st-js-01",
    themeId: "stranger-things",
    languageId: "javascript",
    order: 1,
    title: "Variables & Template Literals",
    themedTitle: "Eleven's Transmission",
    narrative:
      "Eleven has made contact through the static. She speaks in fragments — a name, a place. Mike needs to piece together her message using only the scraps she's managed to send through the Void.",
    prompt:
      "Create two variables: `name` (set to `\"Eleven\"`) and `location` (set to `\"the Upside Down\"`). Then use a template literal to create a variable `message` equal to `\"Eleven is calling from the Upside Down.\"` and print it with `console.log`.",
    hint: "Template literals use backticks and `${variableName}` to embed variables: `` `${name} is calling from ${location}.` ``",
    solution: `const name = "Eleven";\nconst location = "the Upside Down";\nconst message = \`\${name} is calling from \${location}.\`;\nconsole.log(message);`,
    starterCode: `// Eleven's Transmission\n// Create the variables and build the message with a template literal\n\nconst name = ___;\nconst location = ___;\nconst message = ___;\nconsole.log(message);`,
    testCases: [
      { input: "", expected: "Eleven is calling from the Upside Down.", description: "Prints the assembled transmission" },
    ],
    concept: "Variables & Template Literals",
    difficulty: "beginner",
  },
  {
    id: "st-js-02",
    themeId: "stranger-things",
    languageId: "javascript",
    order: 2,
    title: "Arrays",
    themedTitle: "The Party's Walkie-Talkie Channel",
    narrative:
      "Dustin has assigned every member of the Party a walkie-talkie channel. He needs to add Will's channel to the list — Will just got back from the Upside Down and needs to stay connected. How many channels are active now?",
    prompt:
      "Create an array called `channels` with `\"Mike\"`, `\"Dustin\"`, `\"Lucas\"`, and `\"Hopper\"`. Add `\"Will\"` to the end of the array using `push`. Then print the array length with `console.log`.",
    hint: "Use `array.push(value)` to add to the end. `array.length` gives you the count.",
    solution: `const channels = ["Mike", "Dustin", "Lucas", "Hopper"];\nchannels.push("Will");\nconsole.log(channels.length);`,
    starterCode: `// The Party's Walkie-Talkie Channel\n// Create the array, add Will, then print the length\n\nconst channels = [___];\nchannels.push(___);\nconsole.log(channels.length);`,
    testCases: [
      { input: "", expected: "5", description: "5 active walkie-talkie channels" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "st-js-03",
    themeId: "stranger-things",
    languageId: "javascript",
    order: 3,
    title: "Functions",
    themedTitle: "Demogorgon Threat Calculator",
    narrative:
      "Chief Hopper needs a threat assessment. Every Demogorgon sighting within the Hawkins perimeter must be logged and rated. The threat level is calculated by multiplying the number of sightings by a danger factor of 7.",
    prompt:
      "Write a function called `threatLevel` that takes `sightings` (a number) as an argument and returns the sightings multiplied by `7`. Log `threatLevel(4)` to the console.",
    hint: "A function declaration looks like: `function name(param) { return param * 7; }`",
    solution: `function threatLevel(sightings) {\n  return sightings * 7;\n}\n\nconsole.log(threatLevel(4));`,
    starterCode: `// Demogorgon Threat Calculator\n// Write a function that calculates the threat level\n\nfunction threatLevel(sightings) {\n  // Multiply sightings by 7 and return\n}\n\nconsole.log(threatLevel(4));  // Should print: 28`,
    testCases: [
      { input: "4", expected: "28", description: "4 sightings at danger factor 7 = 28" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "st-js-04",
    themeId: "stranger-things",
    languageId: "javascript",
    order: 4,
    title: "Objects",
    themedTitle: "Hawkins Lab File",
    narrative:
      "Dr. Brenner keeps classified files on every subject at Hawkins National Laboratory. Each file contains the subject's codename, power level, and origin. A new field needs to be added — whether the subject is currently contained.",
    prompt:
      "Create an object called `subject` with properties: `codename` (`\"Eleven\"`), `powerLevel` (`10`), and `origin` (`\"Hawkins Lab\"`). Then add a new property `contained` set to `false`. Print the `codename` and `contained` properties with `console.log`.",
    hint: "Add a new property with `object.newProperty = value`. Access existing properties with `object.property`.",
    solution: `const subject = {\n  codename: "Eleven",\n  powerLevel: 10,\n  origin: "Hawkins Lab"\n};\nsubject.contained = false;\nconsole.log(subject.codename);\nconsole.log(subject.contained);`,
    starterCode: `// Hawkins Lab File\n// Create the object, add the contained property, then print codename and contained\n\nconst subject = {\n  codename: ___,\n  powerLevel: ___,\n  origin: ___\n};\nsubject.contained = ___;\nconsole.log(subject.codename);\nconsole.log(subject.contained);`,
    testCases: [
      { input: "", expected: "Eleven\nfalse", description: "Prints codename and containment status" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "st-js-05",
    themeId: "stranger-things",
    languageId: "javascript",
    order: 5,
    title: "Array Methods",
    themedTitle: "Scanning for Survivors",
    narrative:
      "The Mind Flayer has attacked Hawkins. Hopper needs to run a scan of all known residents and filter the list down to only those who are confirmed safe. Time is short — the tunnels are spreading.",
    prompt:
      "Given an array of residents, use `filter` to create a new array called `safe` that only contains residents whose `status` property is `\"safe\"`. Then `console.log` the `length` of `safe`.",
    hint: "Use `residents.filter(r => r.status === \"safe\")` to keep only safe residents.",
    solution: `const residents = [\n  { name: "Joyce Byers", status: "safe" },\n  { name: "Will Byers", status: "flayed" },\n  { name: "Jim Hopper", status: "safe" },\n  { name: "Billy Hargrove", status: "flayed" },\n  { name: "Mike Wheeler", status: "safe" },\n];\n\nconst safe = residents.filter(r => r.status === "safe");\nconsole.log(safe.length);`,
    starterCode: `// Scanning for Survivors\n// Filter for residents with status "safe", then log the count\n\nconst residents = [\n  { name: "Joyce Byers", status: "safe" },\n  { name: "Will Byers", status: "flayed" },\n  { name: "Jim Hopper", status: "safe" },\n  { name: "Billy Hargrove", status: "flayed" },\n  { name: "Mike Wheeler", status: "safe" },\n];\n\nconst safe = residents.filter(___);\nconsole.log(safe.length);`,
    testCases: [
      { input: "", expected: "3", description: "3 residents confirmed safe" },
    ],
    concept: "Array Methods",
    difficulty: "intermediate",
  },
  {
    id: "st-js-06",
    themeId: "stranger-things",
    languageId: "javascript",
    order: 6,
    title: "String Methods",
    themedTitle: "Decoding Eleven's Message",
    narrative:
      "Eleven's transmissions from the Void arrive scrambled — full of static and wrong case. Joyce has rigged up a decoder that cleans the signal: strips whitespace, forces uppercase for the important parts, and replaces known interference patterns.",
    prompt:
      "Given `const raw = \"  upside down  \"`, use string methods to: (1) `.trim()` whitespace, (2) `.toUpperCase()` the result, and (3) `.replace(\"UPSIDE DOWN\", \"THE VOID\")`. Log the final string.",
    hint: "You can chain string methods: `raw.trim().toUpperCase().replace(...)`",
    solution: `const raw = "  upside down  ";\nconst decoded = raw.trim().toUpperCase().replace("UPSIDE DOWN", "THE VOID");\nconsole.log(decoded);`,
    starterCode: `// Decoding Eleven's Message\n// Trim, uppercase, then replace "UPSIDE DOWN" with "THE VOID"\n\nconst raw = "  upside down  ";\nconst decoded = raw.trim().___.___;\nconsole.log(decoded);  // Should print: THE VOID`,
    testCases: [
      { input: "", expected: "THE VOID", description: "Cleaned and decoded transmission" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "st-js-07",
    themeId: "stranger-things",
    languageId: "javascript",
    order: 7,
    title: ".map()",
    themedTitle: "Powering Up the Party",
    narrative:
      "Eleven has been training. Each member of the Party has a base power level, but after a season of preparation, every power level gets doubled. Dustin needs the new stats before the final confrontation with Vecna.",
    prompt:
      "Given `const powers = [3, 7, 5, 4, 6]`, use `.map()` to create a new array `boosted` where every value is multiplied by `2`. Log `boosted`.",
    hint: "Use `powers.map(p => p * 2)` to transform every element.",
    solution: `const powers = [3, 7, 5, 4, 6];\nconst boosted = powers.map(p => p * 2);\nconsole.log(boosted);`,
    starterCode: `// Powering Up the Party\n// Use .map() to double every power level\n\nconst powers = [3, 7, 5, 4, 6];\nconst boosted = powers.map(___);\nconsole.log(boosted);  // Should print: [6, 14, 10, 8, 12]`,
    testCases: [
      { input: "", expected: "[6, 14, 10, 8, 12]", description: "All power levels doubled" },
    ],
    concept: ".map()",
    difficulty: "intermediate",
  },
  {
    id: "st-js-08",
    themeId: "stranger-things",
    languageId: "javascript",
    order: 8,
    title: ".reduce()",
    themedTitle: "Calculating the Upside Down's Threat Score",
    narrative:
      "Hopper has compiled threat scores from every Demogorgon encounter across Hawkins. He needs the total threat score to know whether to call in the Department of Energy — or just handle it himself.",
    prompt:
      "Given `const threats = [12, 8, 25, 17, 9]`, use `.reduce()` to calculate the total threat score. Log the result.",
    hint: "Use `threats.reduce((total, t) => total + t, 0)` to sum all values starting from 0.",
    solution: `const threats = [12, 8, 25, 17, 9];\nconst total = threats.reduce((acc, t) => acc + t, 0);\nconsole.log(total);`,
    starterCode: `// Calculating the Upside Down's Threat Score\n// Use .reduce() to sum all threat scores\n\nconst threats = [12, 8, 25, 17, 9];\nconst total = threats.reduce(___);\nconsole.log(total);  // Should print: 71`,
    testCases: [
      { input: "", expected: "71", description: "Total threat score across all encounters" },
    ],
    concept: ".reduce()",
    difficulty: "intermediate",
  },
  {
    id: "st-js-09",
    themeId: "stranger-things",
    languageId: "javascript",
    order: 9,
    title: "Spread & Destructuring",
    themedTitle: "Regrouping the Party",
    narrative:
      "The Party split up during the final battle. Mike has the Hawkins crew; Eleven leads the California group. Now they're regrouping — combining both squads into one and pulling out the first two leaders by name.",
    prompt:
      "Given `const hawkins = [\"Mike\", \"Dustin\", \"Lucas\"]` and `const california = [\"Eleven\", \"Will\", \"Max\"]`, use spread to combine them into `allMembers`. Then destructure the first two elements as `leader1` and `leader2`. Log both leaders.",
    hint: "Spread: `[...arr1, ...arr2]`. Destructure: `const [a, b] = array`.",
    solution: `const hawkins = ["Mike", "Dustin", "Lucas"];\nconst california = ["Eleven", "Will", "Max"];\nconst allMembers = [...hawkins, ...california];\nconst [leader1, leader2] = allMembers;\nconsole.log(leader1);\nconsole.log(leader2);`,
    starterCode: `// Regrouping the Party\n// Combine both arrays with spread, then destructure the first two members\n\nconst hawkins = ["Mike", "Dustin", "Lucas"];\nconst california = ["Eleven", "Will", "Max"];\nconst allMembers = [...];\nconst [leader1, leader2] = allMembers;\nconsole.log(leader1);\nconsole.log(leader2);`,
    testCases: [
      { input: "", expected: "Mike\nDustin", description: "First two members of the combined Party" },
    ],
    concept: "Spread & Destructuring",
    difficulty: "advanced",
  },
  {
    id: "st-js-10",
    themeId: "stranger-things",
    languageId: "javascript",
    order: 10,
    title: "Object.keys() & Iteration",
    themedTitle: "Hawkins Lab Inventory",
    narrative:
      "Hopper is cataloguing everything left behind in Hawkins Lab. The inventory is stored as an object. He needs to print every item name alongside its quantity so Joyce can check what's there.",
    prompt:
      "Given `const inventory = { flamethrowers: 3, hazmatSuits: 5, walkieTalkies: 8, flares: 12 }`, use `Object.keys()` to iterate and log each key and value in the format `\"flamethrowers: 3\"`.",
    hint: "Use `Object.keys(inventory).forEach(key => console.log(key + \": \" + inventory[key]))`.",
    solution: `const inventory = { flamethrowers: 3, hazmatSuits: 5, walkieTalkies: 8, flares: 12 };\nObject.keys(inventory).forEach(key => {\n  console.log(key + ": " + inventory[key]);\n});`,
    starterCode: `// Hawkins Lab Inventory\n// Use Object.keys() to log each item and its quantity\n\nconst inventory = { flamethrowers: 3, hazmatSuits: 5, walkieTalkies: 8, flares: 12 };\nObject.keys(inventory).forEach(key => {\n  console.log(___);\n});`,
    testCases: [
      { input: "", expected: "flamethrowers: 3\nhazmatSuits: 5\nwalkieTalkies: 8\nflares: 12", description: "All inventory items listed with quantities" },
    ],
    concept: "Object.keys() & Iteration",
    difficulty: "advanced",
  },
];
