import type { Challenge } from "@/types";

export const sexAndTheCityJavaScriptChallenges: Challenge[] = [
  {
    id: "sc-js-01",
    themeId: "sex-and-the-city",
    languageId: "javascript",
    order: 1,
    title: "Variables & Template Literals",
    themedTitle: "Carrie's Column Opener",
    narrative:
      "Every Carrie Bradshaw column begins with the same structure: 'I couldn't help but wonder…' followed by her burning question of the week. Help write the template.",
    prompt:
      "Create `columnist = \"Carrie Bradshaw\"` and `question = \"can a woman have it all?\"`. Log: `\"Carrie Bradshaw couldn't help but wonder: can a woman have it all?\"`",
    hint: "Use a template literal with backticks and `${variable}` to embed the values.",
    solution: "const columnist = \"Carrie Bradshaw\";\nconst question = \"can a woman have it all?\";\nconsole.log(`${columnist} couldn't help but wonder: ${question}`);",
    starterCode: "const columnist = ___;\nconst question = ___;\nconsole.log(___);",
    testCases: [
      { input: "", expected: "Carrie Bradshaw couldn't help but wonder: can a woman have it all?", description: "Classic Carrie opener" },
    ],
    concept: "Variables & Template Literals",
    difficulty: "beginner",
  },
  {
    id: "sc-js-02",
    themeId: "sex-and-the-city",
    languageId: "javascript",
    order: 2,
    title: "Arrays",
    themedTitle: "The Girls' Brunch Order",
    narrative:
      "The four friends have been meeting for brunch at the same table for years. Stanford wants to join this week, so his order needs to be added to the list before the reservation is confirmed.",
    prompt:
      "Create array `orders` with `\"Carrie\"`, `\"Miranda\"`, `\"Charlotte\"`, `\"Samantha\"`. Push `\"Stanford\"`. Log the length.",
    hint: "Use `array.push(value)` and `array.length`.",
    solution: "const orders = [\"Carrie\", \"Miranda\", \"Charlotte\", \"Samantha\"];\norders.push(\"Stanford\");\nconsole.log(orders.length);",
    starterCode: "const orders = [\"Carrie\", \"Miranda\", \"Charlotte\", \"Samantha\"];\norders.push(___);\nconsole.log(orders.length);  // Should print: 5",
    testCases: [
      { input: "", expected: "5", description: "Five at brunch" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "sc-js-03",
    themeId: "sex-and-the-city",
    languageId: "javascript",
    order: 3,
    title: "Functions & Ternary",
    themedTitle: "Second Date Worthy?",
    narrative:
      "Miranda has a no-nonsense scoring system for dates. Anything above 6 out of 10 earns a second date. Everything else is a polite 'I'll call you.'",
    prompt:
      "Write `secondDate(score)` using a ternary: return `\"He gets a second date.\"` if score > 6, otherwise `\"Next!\"`.\nTest with `secondDate(8)` and `secondDate(5)`.",
    hint: "Ternary: `condition ? 'a' : 'b'`",
    solution: "function secondDate(score) {\n  return score > 6 ? \"He gets a second date.\" : \"Next!\";\n}\nconsole.log(secondDate(8));\nconsole.log(secondDate(5));",
    starterCode: "function secondDate(score) {\n  return ___;\n}\nconsole.log(secondDate(8));  // He gets a second date.\nconsole.log(secondDate(5));  // Next!",
    testCases: [
      { input: "8", expected: "He gets a second date.", description: "Score > 6 earns a callback" },
      { input: "5", expected: "Next!", description: "Score ≤ 6 does not" },
    ],
    concept: "Functions & Ternary",
    difficulty: "beginner",
  },
  {
    id: "sc-js-04",
    themeId: "sex-and-the-city",
    languageId: "javascript",
    order: 4,
    title: "Objects",
    themedTitle: "The Ex-Boyfriend File",
    narrative:
      "Carrie has kept detailed mental notes on every man she's dated. For the sake of her column — and her therapy — she's finally putting Big's profile into a proper data structure.",
    prompt:
      "Create object `exBoyfriend` with: `name: \"Mr. Big\"`, `status: \"complicated\"`, and `callsBack: false`. Log the `status` property.",
    hint: "Access with dot notation: `object.property`.",
    solution: "const exBoyfriend = {\n  name: \"Mr. Big\",\n  status: \"complicated\",\n  callsBack: false\n};\nconsole.log(exBoyfriend.status);",
    starterCode: "const exBoyfriend = {\n  name: ___,\n  status: ___,\n  callsBack: ___\n};\nconsole.log(exBoyfriend.status);  // Should print: complicated",
    testCases: [
      { input: "", expected: "complicated", description: "It's always complicated with Big" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "sc-js-05",
    themeId: "sex-and-the-city",
    languageId: "javascript",
    order: 5,
    title: "Array Methods",
    themedTitle: "Eligible Bachelors",
    narrative:
      "Samantha has a very strict definition of 'eligible.' She needs to filter the city's bachelors down to only those over 35 — because younger men 'lack stamina and conversation.'",
    prompt:
      "Given `men = [{name: \"Jack\", age: 28}, {name: \"Richard\", age: 42}, {name: \"Tom\", age: 31}, {name: \"Charles\", age: 38}]`, filter for `age > 35` and log the count.",
    hint: "`.filter(m => m.age > 35)` returns only qualifying entries.",
    solution: "const men = [{name: \"Jack\", age: 28}, {name: \"Richard\", age: 42}, {name: \"Tom\", age: 31}, {name: \"Charles\", age: 38}];\nconst eligible = men.filter(m => m.age > 35);\nconsole.log(eligible.length);",
    starterCode: "const men = [\n  {name: \"Jack\", age: 28},\n  {name: \"Richard\", age: 42},\n  {name: \"Tom\", age: 31},\n  {name: \"Charles\", age: 38}\n];\nconst eligible = men.filter(___);\nconsole.log(eligible.length);  // Should print: 2",
    testCases: [
      { input: "", expected: "2", description: "Two eligible bachelors by Samantha's standards" },
    ],
    concept: "Array Methods (filter)",
    difficulty: "beginner",
  },
  {
    id: "sc-js-06",
    themeId: "sex-and-the-city",
    languageId: "javascript",
    order: 6,
    title: "String Methods",
    themedTitle: "The Vogue Headline Edit",
    narrative:
      "Carrie's draft column headline landed at the Vogue copy desk in lowercase with a typo. The editor needs it uppercased, checked for the word 'love', and cleaned up before the morning meeting.",
    prompt:
      "Write a function `editHeadline(headline)` that: converts to uppercase with `.toUpperCase()`, checks if it `.includes('LOVE')` — if not, return `\"Needs more love, Carrie.\"` — and uses `.replace('CITY', 'MANHATTAN')`. Return the result.\nTest with `editHeadline(\"love in the city\")` and `editHeadline(\"brunch in the city\")`.",
    hint: "Call `.toUpperCase()` first, then check `.includes()`, then `.replace()`.",
    solution: "function editHeadline(headline) {\n  const upper = headline.toUpperCase();\n  if (!upper.includes('LOVE')) return \"Needs more love, Carrie.\";\n  return upper.replace('CITY', 'MANHATTAN');\n}\nconsole.log(editHeadline(\"love in the city\"));\nconsole.log(editHeadline(\"brunch in the city\"));",
    starterCode: "function editHeadline(headline) {\n  const upper = headline.toUpperCase();\n  if (!upper.includes(___)) return \"Needs more love, Carrie.\";\n  return upper.replace(___, ___);\n}\nconsole.log(editHeadline(\"love in the city\"));\nconsole.log(editHeadline(\"brunch in the city\"));",
    testCases: [
      { input: '"love in the city"', expected: "LOVE IN THE MANHATTAN", description: "LOVE present — CITY replaced with MANHATTAN" },
      { input: '"brunch in the city"', expected: "Needs more love, Carrie.", description: "No LOVE — rejected by editor" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sc-js-07",
    themeId: "sex-and-the-city",
    languageId: "javascript",
    order: 7,
    title: ".map()",
    themedTitle: "Cosmos for the Table",
    narrative:
      "The girls always order cosmos. The bartender at their favorite spot needs to generate the drink order labels for each guest — formatted for the table cards so Stanford doesn't accidentally get Miranda's.",
    prompt:
      "Given `guests = [\"Carrie\", \"Miranda\", \"Charlotte\", \"Samantha\"]`, use `.map()` to return an array of strings formatted as `\"Carrie's Cosmo\"`.\nLog the result.",
    hint: "`.map(guest => \\`${guest}'s Cosmo\\`)` returns a new array.",
    solution: "const guests = [\"Carrie\", \"Miranda\", \"Charlotte\", \"Samantha\"];\nconst drinks = guests.map(guest => `${guest}'s Cosmo`);\nconsole.log(drinks);",
    starterCode: "const guests = [\"Carrie\", \"Miranda\", \"Charlotte\", \"Samantha\"];\nconst drinks = guests.map(guest => ___);\nconsole.log(drinks);",
    testCases: [
      { input: "", expected: "[ \"Carrie's Cosmo\", \"Miranda's Cosmo\", \"Charlotte's Cosmo\", \"Samantha's Cosmo\" ]", description: "Personalized cosmo labels for all four" },
    ],
    concept: ".map()",
    difficulty: "intermediate",
  },
  {
    id: "sc-js-08",
    themeId: "sex-and-the-city",
    languageId: "javascript",
    order: 8,
    title: ".reduce()",
    themedTitle: "The Shoe Budget Reckoning",
    narrative:
      "Carrie's accountant has finally gotten her to face the numbers. The total spent on shoes this year across all purchases needs to be calculated — and this time there's no hiding behind a column deadline.",
    prompt:
      "Given `purchases = [340, 680, 1200, 890, 450, 720]`, use `.reduce()` to calculate the total and log it.\nExpected: `4280`.",
    hint: "`.reduce((acc, price) => acc + price, 0)` sums all values.",
    solution: "const purchases = [340, 680, 1200, 890, 450, 720];\nconst total = purchases.reduce((acc, price) => acc + price, 0);\nconsole.log(total);",
    starterCode: "const purchases = [340, 680, 1200, 890, 450, 720];\nconst total = purchases.reduce((acc, price) => ___, 0);\nconsole.log(total);  // Should print: 4280",
    testCases: [
      { input: "", expected: "4280", description: "Total shoe expenditure this year" },
    ],
    concept: ".reduce()",
    difficulty: "intermediate",
  },
  {
    id: "sc-js-09",
    themeId: "sex-and-the-city",
    languageId: "javascript",
    order: 9,
    title: "Spread & Destructuring",
    themedTitle: "Carrie Meets Mr. Big",
    narrative:
      "Carrie's therapist asks her to list what she knows about herself versus what she knows about Big. The self-awareness app needs to merge both profiles and extract the most important traits first.",
    prompt:
      "Given `carrieTraits = [\"writer\", \"romantic\", \"shoe-obsessed\"]` and `bigTraits = [\"mysterious\", \"rich\", \"emotionally unavailable\"]`, spread-merge into `allTraits`. Then destructure: `const [first, second, ...rest] = allTraits`. Log `first`, `second`, and `rest.length`.",
    hint: "Spread: `[...carrieTraits, ...bigTraits]`. Destructure with rest parameter.",
    solution: "const carrieTraits = [\"writer\", \"romantic\", \"shoe-obsessed\"];\nconst bigTraits = [\"mysterious\", \"rich\", \"emotionally unavailable\"];\nconst allTraits = [...carrieTraits, ...bigTraits];\nconst [first, second, ...rest] = allTraits;\nconsole.log(first);\nconsole.log(second);\nconsole.log(rest.length);",
    starterCode: "const carrieTraits = [\"writer\", \"romantic\", \"shoe-obsessed\"];\nconst bigTraits = [\"mysterious\", \"rich\", \"emotionally unavailable\"];\nconst allTraits = [...___, ...___];\nconst [first, second, ...rest] = allTraits;\nconsole.log(first);        // writer\nconsole.log(second);       // romantic\nconsole.log(rest.length);  // 4",
    testCases: [
      { input: "", expected: "writer\nromantic\n4", description: "First, second, and rest count from merged traits" },
    ],
    concept: "Spread & Destructuring",
    difficulty: "advanced",
  },
  {
    id: "sc-js-10",
    themeId: "sex-and-the-city",
    languageId: "javascript",
    order: 10,
    title: "Object.keys() & Iteration",
    themedTitle: "The Relationship Scorecard",
    narrative:
      "Miranda has built a scientific relationship scorecard for Carrie's benefit. Each attribute of the ideal partner is assigned a minimum score. She needs to print the full scorecard before the next brunch so everyone can ignore it.",
    prompt:
      "Given `scorecard = { humor: 8, ambition: 9, availability: 7, communication: 10 }`, use `Object.keys(scorecard).forEach(key => ...)` to log each key and value in the format: `\"humor: 8\"`.",
    hint: "`Object.keys(obj).forEach(key => console.log(\\`${key}: ${obj[key]}\\`))`",
    solution: "const scorecard = { humor: 8, ambition: 9, availability: 7, communication: 10 };\nObject.keys(scorecard).forEach(key => {\n  console.log(`${key}: ${scorecard[key]}`);\n});",
    starterCode: "const scorecard = { humor: 8, ambition: 9, availability: 7, communication: 10 };\nObject.keys(scorecard).forEach(key => {\n  console.log(___);\n});",
    testCases: [
      { input: "", expected: "humor: 8\nambition: 9\navailability: 7\ncommunication: 10", description: "Miranda's full relationship scorecard" },
    ],
    concept: "Object.keys() & Iteration",
    difficulty: "advanced",
  },
];
