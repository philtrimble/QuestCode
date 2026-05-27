import type { Challenge } from "@/types";

export const theMatrixJavaScriptChallenges: Challenge[] = [
  {
    id: "mx-js-01",
    themeId: "the-matrix",
    languageId: "javascript",
    order: 1,
    title: "Variables & Template Literals",
    themedTitle: "The Red Pill Message",
    narrative:
      "Morpheus has found Neo. The message must be delivered through the Matrix itself — a string assembled from two fragments, just like reality assembled from code. Follow the white rabbit.",
    prompt:
      "Create two variables: `name` (set to `\"Neo\"`) and `role` (set to `\"the One\"`). Then use a template literal to create a variable `message` equal to `\"Neo, you are the One.\"` and print it with `console.log`.",
    hint: "Template literals use backticks and `${variableName}`: `` `${name}, you are ${role}.` ``",
    solution: `const name = "Neo";\nconst role = "the One";\nconst message = \`\${name}, you are \${role}.\`;\nconsole.log(message);`,
    starterCode: `// The Red Pill Message\n// Create the variables and build the message with a template literal\n\nconst name = ___;\nconst role = ___;\nconst message = ___;\nconsole.log(message);`,
    testCases: [
      { input: "", expected: "Neo, you are the One.", description: "Prints Morpheus's assembled message" },
    ],
    concept: "Variables & Template Literals",
    difficulty: "beginner",
  },
  {
    id: "mx-js-02",
    themeId: "the-matrix",
    languageId: "javascript",
    order: 2,
    title: "Arrays",
    themedTitle: "The Operator's Crew List",
    narrative:
      "Tank is monitoring the Nebuchadnezzar's crew manifest. Another operator has just been patched in from the free city of Zion. Tank needs to update the list and confirm the crew count before the next dive into the Matrix.",
    prompt:
      "Create an array called `crew` with `\"Neo\"`, `\"Morpheus\"`, `\"Trinity\"`, and `\"Tank\"`. Add `\"Dozer\"` to the end of the array using `push`. Then print the array length with `console.log`.",
    hint: "Use `array.push(value)` to add to the end. `array.length` gives you the count.",
    solution: `const crew = ["Neo", "Morpheus", "Trinity", "Tank"];\ncrew.push("Dozer");\nconsole.log(crew.length);`,
    starterCode: `// The Operator's Crew List\n// Create the array, add Dozer, then print the length\n\nconst crew = [___];\ncrew.push(___);\nconsole.log(crew.length);`,
    testCases: [
      { input: "", expected: "5", description: "5 crew members aboard the Nebuchadnezzar" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "mx-js-03",
    themeId: "the-matrix",
    languageId: "javascript",
    order: 3,
    title: "Functions",
    themedTitle: "Bullet Time Calculator",
    narrative:
      "In the Matrix, Neo can bend time. When he enters bullet time, every second in the simulation is compressed — one real second becomes many perceived seconds. Agent Smith needs to calculate exactly how much perceived time Neo experiences.",
    prompt:
      "Write a function called `bulletTime` that takes `seconds` (a number) as an argument and returns `seconds * 40` (Neo perceives 40x normal time). Log `bulletTime(3)` to the console.",
    hint: "A function declaration: `function name(param) { return param * 40; }`",
    solution: `function bulletTime(seconds) {\n  return seconds * 40;\n}\n\nconsole.log(bulletTime(3));`,
    starterCode: `// Bullet Time Calculator\n// Write a function that calculates perceived time in bullet time\n\nfunction bulletTime(seconds) {\n  // Return seconds * 40\n}\n\nconsole.log(bulletTime(3));  // Should print: 120`,
    testCases: [
      { input: "3", expected: "120", description: "3 real seconds = 120 perceived seconds in bullet time" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "mx-js-04",
    themeId: "the-matrix",
    languageId: "javascript",
    order: 4,
    title: "Objects",
    themedTitle: "Agent Profile",
    narrative:
      "The Agents are programs — sentinels of the system. Each has a designation, a threat level, and a primary target. After a recent anomaly, the Oracle needs a new field added to every agent profile: whether they have been defeated.",
    prompt:
      "Create an object called `agent` with properties: `designation` (`\"Agent Smith\"`), `threatLevel` (`9`), and `target` (`\"Neo\"`). Then add a new property `defeated` set to `false`. Print the `designation` and `defeated` properties with `console.log`.",
    hint: "Add a new property with `object.newProperty = value`. Access properties with `object.property`.",
    solution: `const agent = {\n  designation: "Agent Smith",\n  threatLevel: 9,\n  target: "Neo"\n};\nagent.defeated = false;\nconsole.log(agent.designation);\nconsole.log(agent.defeated);`,
    starterCode: `// Agent Profile\n// Create the object, add the defeated property, then print designation and defeated\n\nconst agent = {\n  designation: ___,\n  threatLevel: ___,\n  target: ___\n};\nagent.defeated = ___;\nconsole.log(agent.designation);\nconsole.log(agent.defeated);`,
    testCases: [
      { input: "", expected: "Agent Smith\nfalse", description: "Prints agent designation and defeat status" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "mx-js-05",
    themeId: "the-matrix",
    languageId: "javascript",
    order: 5,
    title: "Array Methods",
    themedTitle: "Unplugging the Freed Minds",
    narrative:
      "Morpheus maintains records on every human they've unplugged from the Matrix. Not every candidate makes it through the process — some minds are too conditioned by the simulation to be freed. He needs a count of those who successfully made it.",
    prompt:
      "Given an array of candidates, use `filter` to create a new array called `freed` that only contains candidates whose `unplugged` property is `true`. Then `console.log` the `length` of `freed`.",
    hint: "Use `candidates.filter(c => c.unplugged)` to keep only successfully unplugged candidates.",
    solution: `const candidates = [\n  { name: "Neo", unplugged: true },\n  { name: "Switch", unplugged: true },\n  { name: "Apoc", unplugged: true },\n  { name: "Cypher", unplugged: false },\n  { name: "Mouse", unplugged: false },\n];\n\nconst freed = candidates.filter(c => c.unplugged);\nconsole.log(freed.length);`,
    starterCode: `// Unplugging the Freed Minds\n// Filter for candidates where unplugged is true, then log the count\n\nconst candidates = [\n  { name: "Neo", unplugged: true },\n  { name: "Switch", unplugged: true },\n  { name: "Apoc", unplugged: true },\n  { name: "Cypher", unplugged: false },\n  { name: "Mouse", unplugged: false },\n];\n\nconst freed = candidates.filter(___);\nconsole.log(freed.length);`,
    testCases: [
      { input: "", expected: "3", description: "3 minds successfully freed from the Matrix" },
    ],
    concept: "Array Methods",
    difficulty: "intermediate",
  },
  {
    id: "mx-js-06",
    themeId: "the-matrix",
    languageId: "javascript",
    order: 6,
    title: "String Methods",
    themedTitle: "Parsing the Code Stream",
    narrative:
      "The green code streaming down the screens in the Matrix is raw and unfiltered. Tank needs a parser that cleans up intercepted code fragments — stripping noise, forcing uppercase, and substituting known patterns before analysis.",
    prompt:
      "Given `const code = \"  follow the white rabbit  \"`, use string methods to: (1) `.trim()` whitespace, (2) `.toUpperCase()`, and (3) `.replace(\"WHITE RABBIT\", \"RED PILL\")`. Log the result.",
    hint: "Chain methods: `code.trim().toUpperCase().replace(...)`",
    solution: `const code = "  follow the white rabbit  ";\nconst parsed = code.trim().toUpperCase().replace("WHITE RABBIT", "RED PILL");\nconsole.log(parsed);`,
    starterCode: `// Parsing the Code Stream\n// Trim, uppercase, then replace "WHITE RABBIT" with "RED PILL"\n\nconst code = "  follow the white rabbit  ";\nconst parsed = code.trim().___.___;\nconsole.log(parsed);  // Should print: FOLLOW THE RED PILL`,
    testCases: [
      { input: "", expected: "FOLLOW THE RED PILL", description: "Parsed and substituted code fragment" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "mx-js-07",
    themeId: "the-matrix",
    languageId: "javascript",
    order: 7,
    title: ".map()",
    themedTitle: "Agent Speed Multiplier",
    narrative:
      "Agents can upgrade themselves within the Matrix, multiplying their reaction speed. Neo's training program models this upgrade by tripling each Agent's base speed rating.",
    prompt:
      "Given `const speeds = [7, 9, 6, 8, 10]` (Agent speed ratings), use `.map()` to create `upgraded` where each speed is multiplied by `3`. Log `upgraded`.",
    hint: "Use `speeds.map(s => s * 3)` to triple each rating.",
    solution: `const speeds = [7, 9, 6, 8, 10];\nconst upgraded = speeds.map(s => s * 3);\nconsole.log(upgraded);`,
    starterCode: `// Agent Speed Multiplier\n// Use .map() to triple each Agent's speed rating\n\nconst speeds = [7, 9, 6, 8, 10];\nconst upgraded = speeds.map(___);\nconsole.log(upgraded);  // Should print: [21, 27, 18, 24, 30]`,
    testCases: [
      { input: "", expected: "[21, 27, 18, 24, 30]", description: "All Agent speeds tripled after upgrade" },
    ],
    concept: ".map()",
    difficulty: "intermediate",
  },
  {
    id: "mx-js-08",
    themeId: "the-matrix",
    languageId: "javascript",
    order: 8,
    title: ".reduce()",
    themedTitle: "Calculating Total Simulation Load",
    narrative:
      "The Oracle is monitoring the Matrix's simulation load. Each sector reports a load value. She needs the total load across all sectors to predict when the system will require a reboot.",
    prompt:
      "Given `const loads = [420, 315, 580, 270, 495]`, use `.reduce()` to calculate the total simulation load. Log the result.",
    hint: "Use `loads.reduce((total, l) => total + l, 0)` to sum all sector loads.",
    solution: `const loads = [420, 315, 580, 270, 495];\nconst total = loads.reduce((acc, l) => acc + l, 0);\nconsole.log(total);`,
    starterCode: `// Calculating Total Simulation Load\n// Use .reduce() to sum all sector simulation loads\n\nconst loads = [420, 315, 580, 270, 495];\nconst total = loads.reduce(___);\nconsole.log(total);  // Should print: 2080`,
    testCases: [
      { input: "", expected: "2080", description: "Total simulation load across all sectors" },
    ],
    concept: ".reduce()",
    difficulty: "intermediate",
  },
  {
    id: "mx-js-09",
    themeId: "the-matrix",
    languageId: "javascript",
    order: 9,
    title: "Spread & Destructuring",
    themedTitle: "Combining Zion's Resistance Cells",
    narrative:
      "Morpheus and Commander Lock are merging their resistance cells for the final assault on the Machine City. Neo needs the combined roster and needs to know which two operatives will lead the breach team.",
    prompt:
      "Given `const morpheusCrew = [\"Neo\", \"Trinity\", \"Tank\"]` and `const lockCrew = [\"Niobe\", \"Ghost\", \"Zee\"]`, spread-combine into `resistance`. Destructure the first two as `breacher1` and `breacher2`. Log both.",
    hint: "Spread: `[...arr1, ...arr2]`. Destructure: `const [a, b] = array`.",
    solution: `const morpheusCrew = ["Neo", "Trinity", "Tank"];\nconst lockCrew = ["Niobe", "Ghost", "Zee"];\nconst resistance = [...morpheusCrew, ...lockCrew];\nconst [breacher1, breacher2] = resistance;\nconsole.log(breacher1);\nconsole.log(breacher2);`,
    starterCode: `// Combining Zion's Resistance Cells\n// Spread-combine the arrays, then destructure the first two breachers\n\nconst morpheusCrew = ["Neo", "Trinity", "Tank"];\nconst lockCrew = ["Niobe", "Ghost", "Zee"];\nconst resistance = [...];\nconst [breacher1, breacher2] = resistance;\nconsole.log(breacher1);\nconsole.log(breacher2);`,
    testCases: [
      { input: "", expected: "Neo\nTrinity", description: "First two operatives leading the breach" },
    ],
    concept: "Spread & Destructuring",
    difficulty: "advanced",
  },
  {
    id: "mx-js-10",
    themeId: "the-matrix",
    languageId: "javascript",
    order: 10,
    title: "Object.keys() & Iteration",
    themedTitle: "System Diagnostics Report",
    narrative:
      "The Architect runs regular diagnostics on the Matrix subsystems. Each subsystem has an anomaly count. The report must list every subsystem and its anomaly reading before the next scheduled purge.",
    prompt:
      "Given `const diagnostics = { neural: 3, sensory: 7, temporal: 1, spatial: 5 }`, use `Object.keys()` to iterate and log each subsystem and its anomaly count in the format `\"neural: 3\"`.",
    hint: "Use `Object.keys(diagnostics).forEach(key => console.log(key + \": \" + diagnostics[key]))`.",
    solution: `const diagnostics = { neural: 3, sensory: 7, temporal: 1, spatial: 5 };\nObject.keys(diagnostics).forEach(key => {\n  console.log(key + ": " + diagnostics[key]);\n});`,
    starterCode: `// System Diagnostics Report\n// Use Object.keys() to log each subsystem and its anomaly count\n\nconst diagnostics = { neural: 3, sensory: 7, temporal: 1, spatial: 5 };\nObject.keys(diagnostics).forEach(key => {\n  console.log(___);\n});`,
    testCases: [
      { input: "", expected: "neural: 3\nsensory: 7\ntemporal: 1\nspatial: 5", description: "Full diagnostics report" },
    ],
    concept: "Object.keys() & Iteration",
    difficulty: "advanced",
  },
];
