import type { Challenge } from "@/types";

export const theOfficeJavaScriptChallenges: Challenge[] = [
  {
    id: "to-js-01",
    themeId: "the-office",
    languageId: "javascript",
    order: 1,
    title: "Variables & Template Literals",
    themedTitle: "Michael's Announcement",
    narrative:
      "Michael Scott has called an all-hands meeting — again. He needs to make an important announcement, but he's lost the memo. All he has is a name and a department. He wants it read aloud with maximum drama.",
    prompt:
      "Create two variables: `employee` (set to `\"Dwight Schrute\"`) and `department` (set to `\"Sales\"`). Then use a template literal to create a variable `announcement` equal to `\"Dwight Schrute from Sales has been named Employee of the Month!\"` and print it with `console.log`.",
    hint: "Template literals use backticks and `${variableName}`: `` `${employee} from ${department} has been named Employee of the Month!` ``",
    solution: `const employee = "Dwight Schrute";\nconst department = "Sales";\nconst announcement = \`\${employee} from \${department} has been named Employee of the Month!\`;\nconsole.log(announcement);`,
    starterCode: `// Michael's Announcement\n// Create the variables and build the announcement with a template literal\n\nconst employee = ___;\nconst department = ___;\nconst announcement = ___;\nconsole.log(announcement);`,
    testCases: [
      { input: "", expected: "Dwight Schrute from Sales has been named Employee of the Month!", description: "Prints the full announcement" },
    ],
    concept: "Variables & Template Literals",
    difficulty: "beginner",
  },
  {
    id: "to-js-02",
    themeId: "the-office",
    languageId: "javascript",
    order: 2,
    title: "Arrays",
    themedTitle: "The Party Planning Committee",
    narrative:
      "Angela is running the Party Planning Committee with an iron fist. She has a list of approved attendees for the birthday party. Ryan the temp just got added to the guest list — reluctantly. How many people are coming now?",
    prompt:
      "Create an array called `attendees` with `\"Angela\"`, `\"Phyllis\"`, `\"Oscar\"`, and `\"Kevin\"`. Add `\"Ryan\"` to the end of the array using `push`. Then print the array length with `console.log`.",
    hint: "Use `array.push(value)` to add to the end. `array.length` gives you the count.",
    solution: `const attendees = ["Angela", "Phyllis", "Oscar", "Kevin"];\nattendees.push("Ryan");\nconsole.log(attendees.length);`,
    starterCode: `// The Party Planning Committee\n// Create the array, add Ryan, then print the length\n\nconst attendees = [___];\nattendees.push(___);\nconsole.log(attendees.length);`,
    testCases: [
      { input: "", expected: "5", description: "5 attendees on the approved list" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "to-js-03",
    themeId: "the-office",
    languageId: "javascript",
    order: 3,
    title: "Functions",
    themedTitle: "Dwight's Paper Sales Report",
    narrative:
      "Dwight Schrute, Assistant to the Regional Manager, needs to calculate his quarterly commission. For every ream of paper sold, Dwight earns $2.50. He needs a function to calculate how much he has earned.",
    prompt:
      "Write a function called `commission` that takes `reams` (a number) as an argument and returns `reams * 2.5`. Log `commission(120)` to the console.",
    hint: "A function declaration: `function name(param) { return param * 2.5; }`",
    solution: `function commission(reams) {\n  return reams * 2.5;\n}\n\nconsole.log(commission(120));`,
    starterCode: `// Dwight's Paper Sales Report\n// Write a function that calculates commission from ream sales\n\nfunction commission(reams) {\n  // Return reams * 2.5\n}\n\nconsole.log(commission(120));  // Should print: 300`,
    testCases: [
      { input: "120", expected: "300", description: "120 reams at $2.50 each = $300 commission" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "to-js-04",
    themeId: "the-office",
    languageId: "javascript",
    order: 4,
    title: "Objects",
    themedTitle: "The Employee File",
    narrative:
      "Toby from HR needs to update the employee records system. Every employee has a name, job title, and years of service. Toby also needs to flag whether the employee has completed mandatory sensitivity training.",
    prompt:
      "Create an object called `employee` with properties: `name` (`\"Jim Halpert\"`), `title` (`\"Sales Representative\"`), and `years` (`5`). Then add a new property `trainingComplete` set to `true`. Print the `name` and `trainingComplete` properties with `console.log`.",
    hint: "Add a new property with `object.newProperty = value`. Access properties with `object.property`.",
    solution: `const employee = {\n  name: "Jim Halpert",\n  title: "Sales Representative",\n  years: 5\n};\nemployee.trainingComplete = true;\nconsole.log(employee.name);\nconsole.log(employee.trainingComplete);`,
    starterCode: `// The Employee File\n// Create the object, add the trainingComplete property, then print name and trainingComplete\n\nconst employee = {\n  name: ___,\n  title: ___,\n  years: ___\n};\nemployee.trainingComplete = ___;\nconsole.log(employee.name);\nconsole.log(employee.trainingComplete);`,
    testCases: [
      { input: "", expected: "Jim Halpert\ntrue", description: "Prints employee name and training status" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "to-js-05",
    themeId: "the-office",
    languageId: "javascript",
    order: 5,
    title: "Array Methods",
    themedTitle: "Jim's Prank Shortlist",
    narrative:
      "Jim Halpert has been cataloguing his pranks against Dwight for years. Now he wants to filter the list down to only the pranks that have been successfully executed — the ones marked as complete — and see how many total pranks are in his arsenal.",
    prompt:
      "Given an array of pranks, use `filter` to create a new array called `executed` that only contains pranks whose `done` property is `true`. Then `console.log` the `length` of `executed`.",
    hint: "Use `pranks.filter(p => p.done)` to keep only completed pranks.",
    solution: `const pranks = [\n  { name: "Desk in Jello", done: true },\n  { name: "Gaydar Machine", done: true },\n  { name: "Asian Jim", done: true },\n  { name: "Identity Theft", done: false },\n  { name: "Nickels in Phone", done: false },\n];\n\nconst executed = pranks.filter(p => p.done);\nconsole.log(executed.length);`,
    starterCode: `// Jim's Prank Shortlist\n// Filter for pranks where done is true, then log the count\n\nconst pranks = [\n  { name: "Desk in Jello", done: true },\n  { name: "Gaydar Machine", done: true },\n  { name: "Asian Jim", done: true },\n  { name: "Identity Theft", done: false },\n  { name: "Nickels in Phone", done: false },\n];\n\nconst executed = pranks.filter(___);\nconsole.log(executed.length);`,
    testCases: [
      { input: "", expected: "3", description: "3 pranks have been successfully executed" },
    ],
    concept: "Array Methods",
    difficulty: "intermediate",
  },
];
