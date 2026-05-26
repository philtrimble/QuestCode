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
];
