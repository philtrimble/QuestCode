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
];
