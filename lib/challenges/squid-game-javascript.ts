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
];
