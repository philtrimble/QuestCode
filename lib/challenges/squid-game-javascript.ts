import type { Challenge } from "@/types";

export const squidGameJavaScriptChallenges: Challenge[] = [
  {
    id: "sg-js-01",
    themeId: "squid-game",
    languageId: "javascript",
    order: 1,
    title: "Variables & Template Literals",
    themedTitle: "Player Registration",
    narrative:
      "The Front Man needs a registration message for every new player. Each contestant is assigned a number and a name upon arrival. The message must be formatted precisely — the games demand absolute precision.",
    prompt:
      "Create two variables: `playerNumber` (set to `456`) and `playerName` (set to `\"Seong Gi-hun\"`). Then use a template literal to create a variable `registration` equal to `\"Player 456: Seong Gi-hun has entered the games.\"` and print it with `console.log`.",
    hint: "Template literals use backticks and `${variableName}`: `` `Player ${playerNumber}: ${playerName} has entered the games.` ``",
    solution: `const playerNumber = 456;\nconst playerName = "Seong Gi-hun";\nconst registration = \`Player \${playerNumber}: \${playerName} has entered the games.\`;\nconsole.log(registration);`,
    starterCode: `// Player Registration\n// Create the variables and build the registration message\n\nconst playerNumber = ___;\nconst playerName = ___;\nconst registration = ___;\nconsole.log(registration);`,
    testCases: [
      { input: "", expected: "Player 456: Seong Gi-hun has entered the games.", description: "Prints the player registration message" },
    ],
    concept: "Variables & Template Literals",
    difficulty: "beginner",
  },
  {
    id: "sg-js-02",
    themeId: "squid-game",
    languageId: "javascript",
    order: 2,
    title: "Arrays",
    themedTitle: "The Marbles Round",
    narrative:
      "It is Game 4: Marbles. Each surviving player must register their marble partner before the game begins. A late arrival — Player 001 — has just been added to the pairing list. How many players are now registered?",
    prompt:
      "Create an array called `players` with `\"Player 067\"`, `\"Player 101\"`, `\"Player 212\"`, and `\"Player 240\"`. Add `\"Player 001\"` to the end of the array using `push`. Then print the array length with `console.log`.",
    hint: "Use `array.push(value)` to add to the end. `array.length` gives you the count.",
    solution: `const players = ["Player 067", "Player 101", "Player 212", "Player 240"];\nplayers.push("Player 001");\nconsole.log(players.length);`,
    starterCode: `// The Marbles Round\n// Create the array, add Player 001, then print the length\n\nconst players = [___];\nplayers.push(___);\nconsole.log(players.length);`,
    testCases: [
      { input: "", expected: "5", description: "5 players registered for the marbles round" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "sg-js-03",
    themeId: "squid-game",
    languageId: "javascript",
    order: 3,
    title: "Functions",
    themedTitle: "Prize Pool Calculation",
    narrative:
      "The prize money grows with every elimination. For each player eliminated, 100 million won is added to the vault. The Front Man needs a function to calculate the current prize pool at any point in the games.",
    prompt:
      "Write a function called `prizePool` that takes `eliminated` (a number) as an argument and returns `eliminated * 100000000`. Log `prizePool(255)` to the console.",
    hint: "A function declaration: `function name(param) { return param * 100000000; }`",
    solution: `function prizePool(eliminated) {\n  return eliminated * 100000000;\n}\n\nconsole.log(prizePool(255));`,
    starterCode: `// Prize Pool Calculation\n// Write a function that calculates the prize pool\n\nfunction prizePool(eliminated) {\n  // Return eliminated * 100000000\n}\n\nconsole.log(prizePool(255));  // Should print: 25500000000`,
    testCases: [
      { input: "255", expected: "25500000000", description: "255 eliminations at 100M each = 25.5 billion won" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "sg-js-04",
    themeId: "squid-game",
    languageId: "javascript",
    order: 4,
    title: "Objects",
    themedTitle: "Guard Assignment",
    narrative:
      "The pink guards are organized by shape — circles, triangles, and squares. Each guard is assigned a rank, a zone, and a shape. After the incident in the dorms, a new field must be added to every guard record: whether the guard is currently on duty.",
    prompt:
      "Create an object called `guard` with properties: `rank` (`\"Triangle\"`), `zone` (`3`), and `shape` (`\"triangle\"`). Then add a new property `onDuty` set to `true`. Print the `rank` and `onDuty` properties with `console.log`.",
    hint: "Add a new property with `object.newProperty = value`. Access properties with `object.property`.",
    solution: `const guard = {\n  rank: "Triangle",\n  zone: 3,\n  shape: "triangle"\n};\nguard.onDuty = true;\nconsole.log(guard.rank);\nconsole.log(guard.onDuty);`,
    starterCode: `// Guard Assignment\n// Create the object, add the onDuty property, then print rank and onDuty\n\nconst guard = {\n  rank: ___,\n  zone: ___,\n  shape: ___\n};\nguard.onDuty = ___;\nconsole.log(guard.rank);\nconsole.log(guard.onDuty);`,
    testCases: [
      { input: "", expected: "Triangle\ntrue", description: "Prints guard rank and duty status" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "sg-js-05",
    themeId: "squid-game",
    languageId: "javascript",
    order: 5,
    title: "Array Methods",
    themedTitle: "Survivors of the Glass Bridge",
    narrative:
      "Game 5: Glass Bridge. Players must cross a bridge made of tempered and regular glass panels. The Front Man's system tracks every player who attempted the crossing. How many survived to reach the other side?",
    prompt:
      "Given an array of players, use `filter` to create a new array called `survivors` that only contains players whose `survived` property is `true`. Then `console.log` the `length` of `survivors`.",
    hint: "Use `players.filter(p => p.survived)` to keep only players who survived.",
    solution: `const players = [\n  { number: 067, survived: true },\n  { number: 456, survived: true },\n  { number: 101, survived: false },\n  { number: 212, survived: false },\n  { number: 001, survived: true },\n];\n\nconst survivors = players.filter(p => p.survived);\nconsole.log(survivors.length);`,
    starterCode: `// Survivors of the Glass Bridge\n// Filter for players where survived is true, then log the count\n\nconst players = [\n  { number: 067, survived: true },\n  { number: 456, survived: true },\n  { number: 101, survived: false },\n  { number: 212, survived: false },\n  { number: 001, survived: true },\n];\n\nconst survivors = players.filter(___);\nconsole.log(survivors.length);`,
    testCases: [
      { input: "", expected: "3", description: "3 players survived the glass bridge" },
    ],
    concept: "Array Methods",
    difficulty: "intermediate",
  },
  {
    id: "sg-js-06",
    themeId: "squid-game",
    languageId: "javascript",
    order: 6,
    title: "String Methods",
    themedTitle: "The Front Man's Announcement",
    narrative:
      "The Front Man communicates with the guards through an intercom system. Announcements arrive from field staff in inconsistent formatting — they must be normalized before broadcasting to all players over the facility speakers.",
    prompt:
      "Given `const announcement = \"  red light green light  \"`, use string methods to: (1) `.trim()` whitespace, (2) `.toUpperCase()`, and (3) `.replace(\"GREEN LIGHT\", \"STOP\")`. Log the result.",
    hint: "Chain methods: `announcement.trim().toUpperCase().replace(...)`",
    solution: `const announcement = "  red light green light  ";\nconst broadcast = announcement.trim().toUpperCase().replace("GREEN LIGHT", "STOP");\nconsole.log(broadcast);`,
    starterCode: `// The Front Man's Announcement\n// Trim, uppercase, then replace "GREEN LIGHT" with "STOP"\n\nconst announcement = "  red light green light  ";\nconst broadcast = announcement.trim().___.___;\nconsole.log(broadcast);  // Should print: RED LIGHT STOP`,
    testCases: [
      { input: "", expected: "RED LIGHT STOP", description: "Formatted game announcement" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sg-js-07",
    themeId: "squid-game",
    languageId: "javascript",
    order: 7,
    title: ".map()",
    themedTitle: "Dalgona Difficulty Ratings",
    narrative:
      "Game 3 is the Dalgona cookie challenge. Each shape has a difficulty rating. The Front Man has decided to raise the difficulty by doubling every shape's rating for the next iteration of the games.",
    prompt:
      "Given `const difficulty = [3, 7, 5, 9, 4]` (shape difficulty ratings), use `.map()` to create `harder` where each rating is multiplied by `2`. Log `harder`.",
    hint: "Use `difficulty.map(d => d * 2)` to double each rating.",
    solution: `const difficulty = [3, 7, 5, 9, 4];\nconst harder = difficulty.map(d => d * 2);\nconsole.log(harder);`,
    starterCode: `// Dalgona Difficulty Ratings\n// Use .map() to double each shape's difficulty rating\n\nconst difficulty = [3, 7, 5, 9, 4];\nconst harder = difficulty.map(___);\nconsole.log(harder);  // Should print: [6, 14, 10, 18, 8]`,
    testCases: [
      { input: "", expected: "[6, 14, 10, 18, 8]", description: "All difficulty ratings doubled" },
    ],
    concept: ".map()",
    difficulty: "intermediate",
  },
  {
    id: "sg-js-08",
    themeId: "squid-game",
    languageId: "javascript",
    order: 8,
    title: ".reduce()",
    themedTitle: "Final Prize Pool Tally",
    narrative:
      "The games are over. The Front Man's accountants need to verify the final prize pool by summing every incremental deposit made to the vault throughout the competition. Player 456 needs to know what he won.",
    prompt:
      "Given `const deposits = [4500000000, 3200000000, 5800000000, 2900000000, 3100000000]`, use `.reduce()` to calculate the total prize pool. Log the result.",
    hint: "Use `deposits.reduce((total, d) => total + d, 0)` to sum all deposits.",
    solution: `const deposits = [4500000000, 3200000000, 5800000000, 2900000000, 3100000000];\nconst total = deposits.reduce((acc, d) => acc + d, 0);\nconsole.log(total);`,
    starterCode: `// Final Prize Pool Tally\n// Use .reduce() to sum all vault deposits\n\nconst deposits = [4500000000, 3200000000, 5800000000, 2900000000, 3100000000];\nconst total = deposits.reduce(___);\nconsole.log(total);  // Should print: 19500000000`,
    testCases: [
      { input: "", expected: "19500000000", description: "Total prize pool amount" },
    ],
    concept: ".reduce()",
    difficulty: "intermediate",
  },
  {
    id: "sg-js-09",
    themeId: "squid-game",
    languageId: "javascript",
    order: 9,
    title: "Spread & Destructuring",
    themedTitle: "Forming the Final Alliance",
    narrative:
      "Player 456 and Player 067 have been building alliances throughout the games. Before the final round, they combine their allies into one group and identify who will take the first and second positions in the formation.",
    prompt:
      "Given `const gi_hun = [\"Player 456\", \"Player 001\", \"Player 101\"]` and `const sae_byeok = [\"Player 067\", \"Player 212\", \"Player 240\"]`, spread-combine into `alliance`. Destructure the first two as `pos1` and `pos2`. Log both.",
    hint: "Spread: `[...arr1, ...arr2]`. Destructure: `const [a, b] = array`.",
    solution: `const gi_hun = ["Player 456", "Player 001", "Player 101"];\nconst sae_byeok = ["Player 067", "Player 212", "Player 240"];\nconst alliance = [...gi_hun, ...sae_byeok];\nconst [pos1, pos2] = alliance;\nconsole.log(pos1);\nconsole.log(pos2);`,
    starterCode: `// Forming the Final Alliance\n// Spread-combine the arrays, then destructure the first two positions\n\nconst gi_hun = ["Player 456", "Player 001", "Player 101"];\nconst sae_byeok = ["Player 067", "Player 212", "Player 240"];\nconst alliance = [...];\nconst [pos1, pos2] = alliance;\nconsole.log(pos1);\nconsole.log(pos2);`,
    testCases: [
      { input: "", expected: "Player 456\nPlayer 001", description: "First two positions in the alliance" },
    ],
    concept: "Spread & Destructuring",
    difficulty: "advanced",
  },
  {
    id: "sg-js-10",
    themeId: "squid-game",
    languageId: "javascript",
    order: 10,
    title: "Object.keys() & Iteration",
    themedTitle: "Game Statistics Report",
    narrative:
      "After the games conclude, the Front Man files a statistics report with the VIP investors. The report must list every game and its elimination count in a clean readable format.",
    prompt:
      "Given `const stats = { redLightGreenLight: 255, honeycomb: 14, tug_of_war: 92, marbles: 75, glassBridge: 6 }`, use `Object.keys()` to iterate and log each game and its count in the format `\"redLightGreenLight: 255\"`.",
    hint: "Use `Object.keys(stats).forEach(key => console.log(key + \": \" + stats[key]))`.",
    solution: `const stats = { redLightGreenLight: 255, honeycomb: 14, tug_of_war: 92, marbles: 75, glassBridge: 6 };\nObject.keys(stats).forEach(key => {\n  console.log(key + ": " + stats[key]);\n});`,
    starterCode: `// Game Statistics Report\n// Use Object.keys() to log each game and its elimination count\n\nconst stats = { redLightGreenLight: 255, honeycomb: 14, tug_of_war: 92, marbles: 75, glassBridge: 6 };\nObject.keys(stats).forEach(key => {\n  console.log(___);\n});`,
    testCases: [
      { input: "", expected: "redLightGreenLight: 255\nhoneycomb: 14\ntug_of_war: 92\nmarbles: 75\nglassBridge: 6", description: "Full game statistics report" },
    ],
    concept: "Object.keys() & Iteration",
    difficulty: "advanced",
  },
];
