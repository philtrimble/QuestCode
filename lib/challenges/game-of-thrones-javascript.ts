import type { Challenge } from "@/types";

export const gameOfThronesJavaScriptChallenges: Challenge[] = [
  {
    id: "got-js-01",
    themeId: "game-of-thrones",
    languageId: "javascript",
    order: 1,
    title: "Variables & Template Literals",
    themedTitle: "A Raven Has Arrived",
    narrative:
      "A raven has arrived at Castle Black. Jon Snow needs to send a message to Daenerys. But ravens carry scrolls, not emails — so the message must be constructed carefully from separate pieces of information.",
    prompt:
      "Create two variables: `sender` (set to `\"Jon Snow\"`) and `house` (set to `\"Stark\"`). Then use a template literal to create a variable `message` equal to `\"Jon Snow of House Stark sends word.\"` and print it with `console.log`.",
    hint: "Template literals use backticks (`) and `${variableName}` to embed variables: `` `${sender} of House ${house} sends word.` ``",
    solution: `const sender = "Jon Snow";\nconst house = "Stark";\nconst message = \`\${sender} of House \${house} sends word.\`;\nconsole.log(message);`,
    starterCode: `// A Raven Has Arrived\n// Create the variables and build the message with a template literal\n\nconst sender = ___;\nconst house = ___;\nconst message = ___;\nconsole.log(message);`,
    testCases: [
      { input: "", expected: "Jon Snow of House Stark sends word.", description: "Prints the assembled message" },
    ],
    concept: "Variables & Template Literals",
    difficulty: "beginner",
  },
  {
    id: "got-js-02",
    themeId: "game-of-thrones",
    languageId: "javascript",
    order: 2,
    title: "Arrays",
    themedTitle: "The Night's Watch Roster",
    narrative:
      "Lord Commander Jon Snow needs to manage the Night's Watch roster. Men are dying, deserting, and some are just plain unreliable. He needs to add a new recruit and find out how many brothers remain.",
    prompt:
      "Create an array called `watch` with `\"Samwell\"`, `\"Edd\"`, `\"Grenn\"`, and `\"Pyp\"`. Add `\"Ghost\"` to the end of the array using `push`. Then print the array length with `console.log`.",
    hint: "Use `array.push(value)` to add to the end. `array.length` gives you the count.",
    solution: `const watch = ["Samwell", "Edd", "Grenn", "Pyp"];\nwatch.push("Ghost");\nconsole.log(watch.length);`,
    starterCode: `// The Night's Watch Roster\n// Create the array, add Ghost, then print the length\n\nconst watch = [___];\nwatch.push(___);\nconsole.log(watch.length);`,
    testCases: [
      { input: "", expected: "5", description: "5 brothers in the Watch" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "got-js-03",
    themeId: "game-of-thrones",
    languageId: "javascript",
    order: 3,
    title: "Functions",
    themedTitle: "Dragonglass Weapon Forger",
    narrative:
      "The army of the dead is marching south. Samwell Tarly has discovered that dragonglass can kill White Walkers. He needs a function to calculate how many weapons can be forged from a given amount of dragonglass.",
    prompt:
      "Write a function called `forgeWeapons` that takes `dragonglass` (a number) as an argument. Each weapon requires `3` units of dragonglass. Return how many weapons can be forged (use `Math.floor` to round down). Log `forgeWeapons(100)` to the console.",
    hint: "Use `Math.floor(dragonglass / 3)` to get whole weapons only — you can't forge half a weapon.",
    solution: `function forgeWeapons(dragonglass) {\n  return Math.floor(dragonglass / 3);\n}\n\nconsole.log(forgeWeapons(100));`,
    starterCode: `// Dragonglass Weapon Forger\n// Write a function that calculates how many weapons can be forged\n\nfunction forgeWeapons(dragonglass) {\n  // Each weapon needs 3 units\n  // Return the number of complete weapons\n}\n\nconsole.log(forgeWeapons(100));  // Should print: 33`,
    testCases: [
      { input: "100", expected: "33", description: "100 dragonglass makes 33 weapons" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "got-js-04",
    themeId: "game-of-thrones",
    languageId: "javascript",
    order: 4,
    title: "Objects",
    themedTitle: "The Small Council Record",
    narrative:
      "Tyrion Lannister, serving as Hand of the Queen, needs to keep records on each Small Council member. 'I drink and I know things' — and right now he knows they need a better filing system.",
    prompt:
      "Create an object called `councilMember` with properties: `name` (`\"Tyrion Lannister\"`), `title` (`\"Hand of the Queen\"`), and `loyalty` (`\"Targaryen\"`). Then add a new property `alive` set to `true`. Print the `name` and `alive` properties with `console.log`.",
    hint: "Add a new property with `object.newProperty = value`. Access properties with `object.property`.",
    solution: `const councilMember = {\n  name: "Tyrion Lannister",\n  title: "Hand of the Queen",\n  loyalty: "Targaryen"\n};\ncouncilMember.alive = true;\nconsole.log(councilMember.name);\nconsole.log(councilMember.alive);`,
    starterCode: `// The Small Council Record\n// Create the object, add the alive property, then print name and alive\n\nconst councilMember = {\n  name: ___,\n  title: ___,\n  loyalty: ___\n};\ncouncilMember.alive = ___;\nconsole.log(councilMember.name);\nconsole.log(councilMember.alive);`,
    testCases: [
      { input: "", expected: "Tyrion Lannister\ntrue", description: "Prints name and alive status" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "got-js-05",
    themeId: "game-of-thrones",
    languageId: "javascript",
    order: 5,
    title: "Array Methods",
    themedTitle: "Arya's Kill List",
    narrative:
      "Arya Stark has a list. She recites it every night before bed. Now she needs your help filtering it — she only wants to see the enemies she hasn't crossed off yet, and then count how many remain.",
    prompt:
      "Given an array of enemies, use `filter` to create a new array called `remaining` that only contains enemies whose `crossed` property is `false`. Then `console.log` the `length` of `remaining`.",
    hint: "Use `enemies.filter(enemy => !enemy.crossed)` to keep only uncrossed enemies.",
    solution: `const enemies = [\n  { name: "Cersei Lannister", crossed: false },\n  { name: "Walder Frey", crossed: true },\n  { name: "The Mountain", crossed: false },\n  { name: "Meryn Trant", crossed: true },\n  { name: "Ilyn Payne", crossed: false },\n];\n\nconst remaining = enemies.filter(enemy => !enemy.crossed);\nconsole.log(remaining.length);`,
    starterCode: `// Arya's Kill List\n// Filter for enemies that haven't been crossed off, then log the count\n\nconst enemies = [\n  { name: "Cersei Lannister", crossed: false },\n  { name: "Walder Frey", crossed: true },\n  { name: "The Mountain", crossed: false },\n  { name: "Meryn Trant", crossed: true },\n  { name: "Ilyn Payne", crossed: false },\n];\n\nconst remaining = enemies.filter(___);\nconsole.log(remaining.length);`,
    testCases: [
      { input: "", expected: "3", description: "3 enemies still on the list" },
    ],
    concept: "Array Methods",
    difficulty: "intermediate",
  },
  {
    id: "got-js-06",
    themeId: "game-of-thrones",
    languageId: "javascript",
    order: 6,
    title: "String Methods",
    themedTitle: "Formatting the Raven Scroll",
    narrative:
      "The ravens carry scrolls, and scrolls must be legible. The maester's apprentice keeps sending messages in inconsistent formatting — lowercase, padded with spaces. Before the scroll is sent to Castle Black, it must be properly formatted.",
    prompt:
      "Given `const scroll = \"  winter is coming  \"`, use string methods to: (1) `.trim()` whitespace, (2) `.toUpperCase()`, and (3) `.replace(\"WINTER\", \"THE DEAD\")`. Log the result.",
    hint: "Chain methods: `scroll.trim().toUpperCase().replace(...)`",
    solution: `const scroll = "  winter is coming  ";\nconst formatted = scroll.trim().toUpperCase().replace("WINTER", "THE DEAD");\nconsole.log(formatted);`,
    starterCode: `// Formatting the Raven Scroll\n// Trim, uppercase, then replace "WINTER" with "THE DEAD"\n\nconst scroll = "  winter is coming  ";\nconst formatted = scroll.trim().___.___;\nconsole.log(formatted);  // Should print: THE DEAD IS COMING`,
    testCases: [
      { input: "", expected: "THE DEAD IS COMING", description: "Formatted raven scroll" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "got-js-07",
    themeId: "game-of-thrones",
    languageId: "javascript",
    order: 7,
    title: ".map()",
    themedTitle: "Daenerys's Dragon Fire Power",
    narrative:
      "Daenerys's three dragons have been growing. Each dragon's fire power rating doubles as they mature through a new growth cycle. Missandei needs the updated ratings before the war council meeting.",
    prompt:
      "Given `const firePower = [40, 65, 55]` (Drogon, Rhaegal, Viserion), use `.map()` to create `matured` where each power is multiplied by `2`. Log `matured`.",
    hint: "Use `firePower.map(f => f * 2)` to double each dragon's power.",
    solution: `const firePower = [40, 65, 55];\nconst matured = firePower.map(f => f * 2);\nconsole.log(matured);`,
    starterCode: `// Daenerys's Dragon Fire Power\n// Use .map() to double each dragon's fire power\n\nconst firePower = [40, 65, 55];\nconst matured = firePower.map(___);\nconsole.log(matured);  // Should print: [80, 130, 110]`,
    testCases: [
      { input: "", expected: "[80, 130, 110]", description: "All dragon fire powers doubled" },
    ],
    concept: ".map()",
    difficulty: "intermediate",
  },
  {
    id: "got-js-08",
    themeId: "game-of-thrones",
    languageId: "javascript",
    order: 8,
    title: ".reduce()",
    themedTitle: "Counting the Fallen at the Battle of Winterfell",
    narrative:
      "The Battle of Winterfell was devastating. The Night's Watch, the wildlings, the Dothraki, the Unsullied — each force suffered losses. Jon Snow needs the total death count before the ravens can be sent.",
    prompt:
      "Given `const losses = [312, 580, 240, 415, 178]`, use `.reduce()` to calculate the total fallen. Log the result.",
    hint: "Use `losses.reduce((total, l) => total + l, 0)` to sum all casualties.",
    solution: `const losses = [312, 580, 240, 415, 178];\nconst total = losses.reduce((acc, l) => acc + l, 0);\nconsole.log(total);`,
    starterCode: `// Counting the Fallen at the Battle of Winterfell\n// Use .reduce() to total all casualty counts\n\nconst losses = [312, 580, 240, 415, 178];\nconst total = losses.reduce(___);\nconsole.log(total);  // Should print: 1725`,
    testCases: [
      { input: "", expected: "1725", description: "Total fallen at the Battle of Winterfell" },
    ],
    concept: ".reduce()",
    difficulty: "intermediate",
  },
  {
    id: "got-js-09",
    themeId: "game-of-thrones",
    languageId: "javascript",
    order: 9,
    title: "Spread & Destructuring",
    themedTitle: "Uniting the Great Houses",
    narrative:
      "Daenerys and Jon are forging an alliance. Their respective house rosters must be combined into a unified council, and the first two names will be seated at the head of the war table.",
    prompt:
      "Given `const targaryens = [\"Daenerys\", \"Viserys\", \"Rhaegar\"]` and `const starks = [\"Jon\", \"Sansa\", \"Arya\"]`, spread-combine into `council`. Destructure the first two as `seat1` and `seat2`. Log both.",
    hint: "Spread: `[...arr1, ...arr2]`. Destructure: `const [a, b] = array`.",
    solution: `const targaryens = ["Daenerys", "Viserys", "Rhaegar"];\nconst starks = ["Jon", "Sansa", "Arya"];\nconst council = [...targaryens, ...starks];\nconst [seat1, seat2] = council;\nconsole.log(seat1);\nconsole.log(seat2);`,
    starterCode: `// Uniting the Great Houses\n// Spread-combine the arrays, then destructure the first two council members\n\nconst targaryens = ["Daenerys", "Viserys", "Rhaegar"];\nconst starks = ["Jon", "Sansa", "Arya"];\nconst council = [...];\nconst [seat1, seat2] = council;\nconsole.log(seat1);\nconsole.log(seat2);`,
    testCases: [
      { input: "", expected: "Daenerys\nViserys", description: "First two seats at the war council" },
    ],
    concept: "Spread & Destructuring",
    difficulty: "advanced",
  },
  {
    id: "got-js-10",
    themeId: "game-of-thrones",
    languageId: "javascript",
    order: 10,
    title: "Object.keys() & Iteration",
    themedTitle: "The Small Council Agenda",
    narrative:
      "Tyrion has prepared an agenda for the Small Council meeting. Each agenda item has a priority level. He needs to print every item alongside its priority so the council can see what they're walking into.",
    prompt:
      "Given `const agenda = { succession: 1, dragons: 2, treasury: 3, borders: 4 }`, use `Object.keys()` to iterate and log each item and priority in the format `\"succession: 1\"`.",
    hint: "Use `Object.keys(agenda).forEach(key => console.log(key + \": \" + agenda[key]))`.",
    solution: `const agenda = { succession: 1, dragons: 2, treasury: 3, borders: 4 };\nObject.keys(agenda).forEach(key => {\n  console.log(key + ": " + agenda[key]);\n});`,
    starterCode: `// The Small Council Agenda\n// Use Object.keys() to log each agenda item and its priority\n\nconst agenda = { succession: 1, dragons: 2, treasury: 3, borders: 4 };\nObject.keys(agenda).forEach(key => {\n  console.log(___);\n});`,
    testCases: [
      { input: "", expected: "succession: 1\ndragons: 2\ntreasury: 3\nborders: 4", description: "Full Small Council agenda" },
    ],
    concept: "Object.keys() & Iteration",
    difficulty: "advanced",
  },
];
