import type { Challenge } from "@/types";

export const severanceJavaScriptChallenges: Challenge[] = [
  {
    id: "sv-js-01",
    themeId: "severance",
    languageId: "javascript",
    order: 1,
    title: "Variables & Strings",
    themedTitle: "Your Innie's ID Badge",
    narrative:
      "You've just started your first day on the Severed Floor. Ms. Cobel needs you to create an employee record. Every Lumon employee's name is formatted as FirstName LastInitial — like 'Mark S.' or 'Helly R.'",
    prompt:
      "Declare two variables: `firstName` and `lastInitial`. Combine them into a third variable `employeeId` formatted as `'FirstName L.'` (with a period after the initial). Then log the result.",
    hint: "You can combine strings with the `+` operator or template literals: `` `${firstName} ${lastInitial}.` ``",
    solution: `const firstName = "Mark";\nconst lastInitial = "S";\nconst employeeId = \`\${firstName} \${lastInitial}.\`;\nconsole.log(employeeId); // Mark S.`,
    starterCode: `// Your Innie's ID Badge\n// Declare firstName and lastInitial, then build employeeId\n\nconst firstName = ___;\nconst lastInitial = ___;\nconst employeeId = ___;\n\nconsole.log(employeeId); // Should print: Mark S.`,
    testCases: [
      { input: "", expected: "Mark S.", description: "Formats name correctly with initial and period" },
    ],
    concept: "Variables & Strings",
    difficulty: "beginner",
  },
  {
    id: "sv-js-02",
    themeId: "severance",
    languageId: "javascript",
    order: 2,
    title: "Arrays & Methods",
    themedTitle: "Macrodata Refinement Numbers",
    narrative:
      "The numbers are scary. They vibrate with dread. Your job at MDR is to look at a list of numbers and flag the ones that are 'bad' — that is, numbers greater than 50. Dylan says if you focus, you can feel which ones to reject.",
    prompt:
      "You have an array `macrodata = [12, 87, 34, 56, 91, 7, 44, 63]`. Use the `filter()` method to create a new array called `flagged` that only contains numbers greater than 50. Then log the flagged array.",
    hint: "Array `filter()` takes a callback function. Try: `macrodata.filter(n => n > 50)`",
    solution: `const macrodata = [12, 87, 34, 56, 91, 7, 44, 63];\nconst flagged = macrodata.filter(n => n > 50);\nconsole.log(flagged); // [87, 56, 91, 63]`,
    starterCode: `const macrodata = [12, 87, 34, 56, 91, 7, 44, 63];\n\n// Filter out numbers greater than 50\nconst flagged = macrodata.filter(___);\n\nconsole.log(flagged); // Should print: [87, 56, 91, 63]`,
    testCases: [
      { input: "", expected: "[87, 56, 91, 63]", description: "Keeps only numbers over 50" },
    ],
    concept: "Arrays & filter()",
    difficulty: "beginner",
  },
  {
    id: "sv-js-03",
    themeId: "severance",
    languageId: "javascript",
    order: 3,
    title: "Objects",
    themedTitle: "Lumon Employee Record",
    narrative:
      "Harmony Cobel keeps meticulous records on every severed employee. She needs you to model an employee as an object — with their name, department, and compliance score.",
    prompt:
      "Create an object called `employee` with the properties: `name` (string), `department` (string, set it to `'MDR'`), and `complianceScore` (number, 0–100). Then write a function `isCompliant(employee)` that returns `true` if the compliance score is 80 or above.",
    hint: "Access object properties with dot notation: `employee.complianceScore`",
    solution: `const employee = {\n  name: "Irving B.",\n  department: "MDR",\n  complianceScore: 92\n};\n\nfunction isCompliant(employee) {\n  return employee.complianceScore >= 80;\n}\n\nconsole.log(isCompliant(employee)); // true`,
    starterCode: `const employee = {\n  name: ___,\n  department: ___,\n  complianceScore: ___\n};\n\nfunction isCompliant(employee) {\n  // Return true if complianceScore is 80 or above\n}\n\nconsole.log(isCompliant(employee)); // true or false`,
    testCases: [
      { input: "92", expected: "true", description: "Score of 92 is compliant" },
      { input: "70", expected: "false", description: "Score of 70 is not compliant" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "sv-js-04",
    themeId: "severance",
    languageId: "javascript",
    order: 4,
    title: "Functions & Conditionals",
    themedTitle: "The Wellness Session",
    narrative:
      "Burt from Optics & Design is having a wellness check. The wellness program awards a Waffle Party if an employee's performance score exceeds a threshold. Your program must determine who gets a Waffle Party.",
    prompt:
      "Write a function `waffleParty(score, threshold)` that returns the string `'Waffle Party! 🧇'` if `score` is greater than `threshold`, and `'Keep trying!'` otherwise. Test it with a few values.",
    hint: "Use a ternary operator for a clean one-liner: `return score > threshold ? 'Waffle Party! 🧇' : 'Keep trying!';`",
    solution: `function waffleParty(score, threshold) {\n  return score > threshold ? "Waffle Party! 🧇" : "Keep trying!";\n}\n\nconsole.log(waffleParty(85, 75));  // Waffle Party! 🧇\nconsole.log(waffleParty(60, 75));  // Keep trying!`,
    starterCode: `function waffleParty(score, threshold) {\n  // Return 'Waffle Party! 🧇' if score > threshold\n  // Otherwise return 'Keep trying!'\n}\n\nconsole.log(waffleParty(85, 75));  // Waffle Party! 🧇\nconsole.log(waffleParty(60, 75));  // Keep trying!`,
    testCases: [
      { input: "85, 75", expected: "Waffle Party! 🧇", description: "High score earns a waffle party" },
      { input: "60, 75", expected: "Keep trying!", description: "Low score misses the waffle party" },
    ],
    concept: "Functions & Ternary Operator",
    difficulty: "beginner",
  },
  {
    id: "sv-js-05",
    themeId: "severance",
    languageId: "javascript",
    order: 5,
    title: "Loops & Accumulation",
    themedTitle: "Binning the Numbers",
    narrative:
      "MDR employees must sort numbers into bins. A number belongs to a bin if it 'feels right' — which, in our case, means it's divisible by a given divisor. Help the team calculate the sum of all numbers in the macrodata that are divisible by a given number.",
    prompt:
      "Write a function `binSum(numbers, divisor)` that takes an array of numbers and returns the sum of all numbers in the array that are divisible by `divisor` (no remainder). Test it with `[10, 15, 20, 25, 30]` and divisor `5`.",
    hint: "Use the modulo operator `%` to check divisibility: `n % divisor === 0` means there's no remainder.",
    solution: `function binSum(numbers, divisor) {\n  let sum = 0;\n  for (const n of numbers) {\n    if (n % divisor === 0) {\n      sum += n;\n    }\n  }\n  return sum;\n}\n\nconsole.log(binSum([10, 15, 20, 25, 30], 5)); // 100\nconsole.log(binSum([10, 15, 20, 25, 30], 10)); // 30`,
    starterCode: `function binSum(numbers, divisor) {\n  let sum = 0;\n  for (const n of numbers) {\n    // Add n to sum if it's divisible by divisor\n  }\n  return sum;\n}\n\nconsole.log(binSum([10, 15, 20, 25, 30], 5));   // 100\nconsole.log(binSum([10, 15, 20, 25, 30], 10));  // 30`,
    testCases: [
      { input: "[10,15,20,25,30], 5", expected: "100", description: "All numbers divisible by 5 sum to 100" },
      { input: "[10,15,20,25,30], 10", expected: "30", description: "Only 10, 20, 30 are divisible by 10" },
    ],
    concept: "Loops & Accumulation",
    difficulty: "beginner",
  },
  {
    id: "sv-js-06",
    themeId: "severance",
    languageId: "javascript",
    order: 6,
    title: "String Methods",
    themedTitle: "Formatting the Severed Floor Memo",
    narrative:
      "Lumon's internal memos arrive in inconsistent formatting — mixed case, extra spaces, and outdated department names that must be corrected before distribution. Mark S. has been tasked with sanitizing each memo before it reaches Cobel.",
    prompt:
      "Given `const memo = \"  welcome to lumon industries  \"`, use string methods to: (1) `.trim()` whitespace, (2) `.toUpperCase()`, and (3) `.replace(\"LUMON INDUSTRIES\", \"MACRODATA REFINEMENT\")`. Log the result.",
    hint: "Chain methods: `memo.trim().toUpperCase().replace(...)`",
    solution: `const memo = "  welcome to lumon industries  ";\nconst formatted = memo.trim().toUpperCase().replace("LUMON INDUSTRIES", "MACRODATA REFINEMENT");\nconsole.log(formatted);`,
    starterCode: `// Formatting the Severed Floor Memo\n// Trim, uppercase, then replace the department name\n\nconst memo = "  welcome to lumon industries  ";\nconst formatted = memo.trim().___.___;\nconsole.log(formatted);  // Should print: WELCOME TO MACRODATA REFINEMENT`,
    testCases: [
      { input: "", expected: "WELCOME TO MACRODATA REFINEMENT", description: "Properly formatted Lumon memo" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sv-js-07",
    themeId: "severance",
    languageId: "javascript",
    order: 7,
    title: ".map()",
    themedTitle: "Assigning Wellness Scores",
    narrative:
      "The wellness program at Lumon awards bonus points on top of each employee's base score. Every employee gets a flat 10-point boost this quarter — a rare act of generosity from Ms. Cobel. Dylan needs the updated score list.",
    prompt:
      "Given `const scores = [72, 85, 61, 90, 78]`, use `.map()` to create `boosted` where each score has `10` added. Log `boosted`.",
    hint: "Use `scores.map(s => s + 10)` to add 10 to every score.",
    solution: `const scores = [72, 85, 61, 90, 78];\nconst boosted = scores.map(s => s + 10);\nconsole.log(boosted);`,
    starterCode: `// Assigning Wellness Scores\n// Use .map() to add 10 to every score\n\nconst scores = [72, 85, 61, 90, 78];\nconst boosted = scores.map(___);\nconsole.log(boosted);  // Should print: [82, 95, 71, 100, 88]`,
    testCases: [
      { input: "", expected: "[82, 95, 71, 100, 88]", description: "All wellness scores boosted by 10" },
    ],
    concept: ".map()",
    difficulty: "intermediate",
  },
  {
    id: "sv-js-08",
    themeId: "severance",
    languageId: "javascript",
    order: 8,
    title: ".reduce()",
    themedTitle: "Total Macrodata Numbers Refined",
    narrative:
      "At the end of each quarter, Lumon tallies the total number of macrodata values refined by the MDR team. Helly needs the grand total for the quarterly report — Cobel is watching.",
    prompt:
      "Given `const refined = [340, 512, 298, 401, 275]`, use `.reduce()` to calculate the total numbers refined. Log the result.",
    hint: "Use `refined.reduce((total, n) => total + n, 0)` to sum the array.",
    solution: `const refined = [340, 512, 298, 401, 275];\nconst total = refined.reduce((acc, n) => acc + n, 0);\nconsole.log(total);`,
    starterCode: `// Total Macrodata Numbers Refined\n// Use .reduce() to sum all refined counts\n\nconst refined = [340, 512, 298, 401, 275];\nconst total = refined.reduce(___);\nconsole.log(total);  // Should print: 1826`,
    testCases: [
      { input: "", expected: "1826", description: "Total macrodata values refined this quarter" },
    ],
    concept: ".reduce()",
    difficulty: "intermediate",
  },
  {
    id: "sv-js-09",
    themeId: "severance",
    languageId: "javascript",
    order: 9,
    title: "Spread & Destructuring",
    themedTitle: "Merging the Department Rosters",
    narrative:
      "The O&D and MDR departments are combining for a mandatory kumbaya retreat. Irving needs to merge the two rosters into one and identify the first two employees — they'll lead the awkward team-building exercises.",
    prompt:
      "Given `const mdr = [\"Mark\", \"Helly\", \"Irving\"]` and `const od = [\"Burt\", \"Felicia\", \"Devon\"]`, spread-combine into `allStaff`. Destructure the first two as `first` and `second`. Log both.",
    hint: "Spread: `[...mdr, ...od]`. Destructure: `const [a, b] = array`.",
    solution: `const mdr = ["Mark", "Helly", "Irving"];\nconst od = ["Burt", "Felicia", "Devon"];\nconst allStaff = [...mdr, ...od];\nconst [first, second] = allStaff;\nconsole.log(first);\nconsole.log(second);`,
    starterCode: `// Merging the Department Rosters\n// Spread-combine the two arrays, then destructure the first two\n\nconst mdr = ["Mark", "Helly", "Irving"];\nconst od = ["Burt", "Felicia", "Devon"];\nconst allStaff = [...];\nconst [first, second] = allStaff;\nconsole.log(first);\nconsole.log(second);`,
    testCases: [
      { input: "", expected: "Mark\nHelly", description: "First two employees of the merged roster" },
    ],
    concept: "Spread & Destructuring",
    difficulty: "advanced",
  },
  {
    id: "sv-js-10",
    themeId: "severance",
    languageId: "javascript",
    order: 10,
    title: "Object.keys() & Iteration",
    themedTitle: "Lumon Department Directory",
    narrative:
      "Lumon's HR system stores department head counts as an object. Dylan has been asked to print a full directory — every department name followed by its employee count — for the quarterly compliance review.",
    prompt:
      "Given `const departments = { MDR: 4, OD: 6, PE: 3, Wellness: 2 }`, use `Object.keys()` to iterate and log each department and its count in the format `\"MDR: 4\"`.",
    hint: "Use `Object.keys(departments).forEach(key => console.log(key + \": \" + departments[key]))`.",
    solution: `const departments = { MDR: 4, OD: 6, PE: 3, Wellness: 2 };\nObject.keys(departments).forEach(key => {\n  console.log(key + ": " + departments[key]);\n});`,
    starterCode: `// Lumon Department Directory\n// Use Object.keys() to log each department and count\n\nconst departments = { MDR: 4, OD: 6, PE: 3, Wellness: 2 };\nObject.keys(departments).forEach(key => {\n  console.log(___);\n});`,
    testCases: [
      { input: "", expected: "MDR: 4\nOD: 6\nPE: 3\nWellness: 2", description: "All departments and their headcounts" },
    ],
    concept: "Object.keys() & Iteration",
    difficulty: "advanced",
  },
];
