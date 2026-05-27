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
  {
    id: "to-js-06",
    themeId: "the-office",
    languageId: "javascript",
    order: 6,
    title: "String Methods",
    themedTitle: "Michael's World's Best Boss Mug",
    narrative:
      "Michael Scott bought himself a 'World's Best Boss' mug. He keeps messing up the engraving order — sending it with extra spaces and wrong capitalization. Pam has been tasked with writing a utility to fix his submissions before they go to the printer.",
    prompt:
      "Given `const engraving = \"  world's best boss  \"`, use string methods to: (1) `.trim()` whitespace, (2) `.toUpperCase()`, and (3) use `.includes()` to check if the result contains `\"BOSS\"`. Log the cleaned string, then log the boolean.",
    hint: "Chain `.trim().toUpperCase()` first, store the result, then call `.includes(\"BOSS\")` on it.",
    solution: `const engraving = "  world's best boss  ";\nconst clean = engraving.trim().toUpperCase();\nconsole.log(clean);\nconsole.log(clean.includes("BOSS"));`,
    starterCode: `// Michael's World's Best Boss Mug\n// Trim and uppercase the engraving, then check if it includes "BOSS"\n\nconst engraving = "  world's best boss  ";\nconst clean = engraving.trim().___;\nconsole.log(clean);             // Should print: WORLD'S BEST BOSS\nconsole.log(clean.includes(___)  // Should print: true`,
    testCases: [
      { input: "", expected: "WORLD'S BEST BOSS\ntrue", description: "Cleaned engraving and BOSS confirmation" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "to-js-07",
    themeId: "the-office",
    languageId: "javascript",
    order: 7,
    title: ".map()",
    themedTitle: "Dunder Mifflin Sales Targets",
    narrative:
      "David Wallace has announced a 20% increase in quarterly sales targets across all Dunder Mifflin branches. Dwight needs the updated targets calculated from the current figures before he can update the whiteboard.",
    prompt:
      "Given `const targets = [50000, 75000, 62000, 88000, 41000]`, use `.map()` to create `updated` where every target is multiplied by `1.2`. Log `updated`.",
    hint: "Use `targets.map(t => t * 1.2)` to apply the 20% increase.",
    solution: `const targets = [50000, 75000, 62000, 88000, 41000];\nconst updated = targets.map(t => t * 1.2);\nconsole.log(updated);`,
    starterCode: `// Dunder Mifflin Sales Targets\n// Use .map() to increase every target by 20%\n\nconst targets = [50000, 75000, 62000, 88000, 41000];\nconst updated = targets.map(___);\nconsole.log(updated);  // Should print: [60000, 90000, 74400, 105600, 49200]`,
    testCases: [
      { input: "", expected: "[60000, 90000, 74400, 105600, 49200]", description: "All targets increased by 20%" },
    ],
    concept: ".map()",
    difficulty: "intermediate",
  },
  {
    id: "to-js-08",
    themeId: "the-office",
    languageId: "javascript",
    order: 8,
    title: ".reduce()",
    themedTitle: "Counting Schrute Bucks",
    narrative:
      "Dwight has been issuing Schrute Bucks as performance incentives. He needs the total Schrute Bucks in circulation to calculate the exchange rate versus Stanley Nickels — a complex monetary system only Dwight fully understands.",
    prompt:
      "Given `const issued = [400, 750, 200, 1100, 325]`, use `.reduce()` to calculate the total Schrute Bucks issued. Log the result.",
    hint: "Use `issued.reduce((total, n) => total + n, 0)` to sum all values.",
    solution: `const issued = [400, 750, 200, 1100, 325];\nconst total = issued.reduce((acc, n) => acc + n, 0);\nconsole.log(total);`,
    starterCode: `// Counting Schrute Bucks\n// Use .reduce() to total all issued Schrute Bucks\n\nconst issued = [400, 750, 200, 1100, 325];\nconst total = issued.reduce(___);\nconsole.log(total);  // Should print: 2775`,
    testCases: [
      { input: "", expected: "2775", description: "Total Schrute Bucks in circulation" },
    ],
    concept: ".reduce()",
    difficulty: "intermediate",
  },
  {
    id: "to-js-09",
    themeId: "the-office",
    languageId: "javascript",
    order: 9,
    title: "Spread & Destructuring",
    themedTitle: "Merging the Scranton and Stamford Branches",
    narrative:
      "Corporate is merging the Scranton and Stamford branches. Michael is thrilled. Jim is not. HR needs the combined employee list and the names of the first two people who will share the new open-plan workspace.",
    prompt:
      "Given `const scranton = [\"Michael\", \"Dwight\", \"Pam\"]` and `const stamford = [\"Jim\", \"Andy\", \"Karen\"]`, spread-combine into `merged`. Destructure the first two as `desk1` and `desk2`. Log both.",
    hint: "Spread: `[...arr1, ...arr2]`. Destructure: `const [a, b] = array`.",
    solution: `const scranton = ["Michael", "Dwight", "Pam"];\nconst stamford = ["Jim", "Andy", "Karen"];\nconst merged = [...scranton, ...stamford];\nconst [desk1, desk2] = merged;\nconsole.log(desk1);\nconsole.log(desk2);`,
    starterCode: `// Merging the Scranton and Stamford Branches\n// Spread-combine the arrays, then destructure the first two employees\n\nconst scranton = ["Michael", "Dwight", "Pam"];\nconst stamford = ["Jim", "Andy", "Karen"];\nconst merged = [...];\nconst [desk1, desk2] = merged;\nconsole.log(desk1);\nconsole.log(desk2);`,
    testCases: [
      { input: "", expected: "Michael\nDwight", description: "First two employees at the merged branch" },
    ],
    concept: "Spread & Destructuring",
    difficulty: "advanced",
  },
  {
    id: "to-js-10",
    themeId: "the-office",
    languageId: "javascript",
    order: 10,
    title: "Object.keys() & Iteration",
    themedTitle: "Schrute Farms Amenities Guide",
    narrative:
      "Schrute Farms Bed and Breakfast is getting a Yelp page. Dwight needs to print every amenity and its rating from the official amenities object so guests know what to expect before they book.",
    prompt:
      "Given `const amenities = { beets: 5, barnTour: 4, breakfast: 5, goatPetting: 3 }`, use `Object.keys()` to iterate and log each amenity and rating in the format `\"beets: 5\"`.",
    hint: "Use `Object.keys(amenities).forEach(key => console.log(key + \": \" + amenities[key]))`.",
    solution: `const amenities = { beets: 5, barnTour: 4, breakfast: 5, goatPetting: 3 };\nObject.keys(amenities).forEach(key => {\n  console.log(key + ": " + amenities[key]);\n});`,
    starterCode: `// Schrute Farms Amenities Guide\n// Use Object.keys() to log each amenity and its rating\n\nconst amenities = { beets: 5, barnTour: 4, breakfast: 5, goatPetting: 3 };\nObject.keys(amenities).forEach(key => {\n  console.log(___);\n});`,
    testCases: [
      { input: "", expected: "beets: 5\nbarnTour: 4\nbreakfast: 5\ngoatPetting: 3", description: "All Schrute Farms amenities and ratings" },
    ],
    concept: "Object.keys() & Iteration",
    difficulty: "advanced",
  },
];
