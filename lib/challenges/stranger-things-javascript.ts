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
];
