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
];
