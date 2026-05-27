import type { Challenge } from "@/types";

export const arrestedDevelopmentJavaScriptChallenges: Challenge[] = [
  {
    id: "ad-js-01",
    themeId: "arrested-development",
    languageId: "javascript",
    order: 1,
    title: "Variables & Template Literals",
    themedTitle: "Gob's Announcement",
    narrative:
      "Gob Bluth, president of the Alliance of Magicians, needs a grand announcement for his next illusion. Michael has reluctantly agreed to write the intro — as long as no actual doves are involved.",
    prompt:
      "Create a variable `performer` set to `\"Gob Bluth\"` and a variable `trick` set to `\"the Aztec Tomb\"`. Use a template literal to log: `\"Ladies and gentlemen: Gob Bluth presents the Aztec Tomb.\"`",
    hint: "Template literals use backticks and `${variable}` to embed values.",
    solution: "const performer = \"Gob Bluth\";\nconst trick = \"the Aztec Tomb\";\nconsole.log(`Ladies and gentlemen: ${performer} presents ${trick}.`);",
    starterCode: "// Gob's Announcement\n\nconst performer = ___;\nconst trick = ___;\nconsole.log(___);",
    testCases: [
      { input: "", expected: "Ladies and gentlemen: Gob Bluth presents the Aztec Tomb.", description: "The full announcement" },
    ],
    concept: "Variables & Template Literals",
    difficulty: "beginner",
  },
  {
    id: "ad-js-02",
    themeId: "arrested-development",
    languageId: "javascript",
    order: 2,
    title: "Arrays",
    themedTitle: "The Cornballer Product Line",
    narrative:
      "George Bluth Sr. invented the Cornballer — illegal in the US, but somehow legal in Mexico. The family needs a product catalogue. Add the latest model to the list, then report how many products they're selling.",
    prompt:
      "Create an array `products` with `\"Original Cornballer\"` and `\"Cornballer Deluxe\"`. Push `\"Cornballer XL\"` onto it. Then log the array length.",
    hint: "Use `array.push(value)` to add an item, then `array.length` for the count.",
    solution: "const products = [\"Original Cornballer\", \"Cornballer Deluxe\"];\nproducts.push(\"Cornballer XL\");\nconsole.log(products.length);",
    starterCode: "// The Cornballer Product Line\n\nconst products = [\"Original Cornballer\", \"Cornballer Deluxe\"];\nproducts.push(___);\nconsole.log(products.length);",
    testCases: [
      { input: "", expected: "3", description: "Three products in the line" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "ad-js-03",
    themeId: "arrested-development",
    languageId: "javascript",
    order: 3,
    title: "Functions & Ternary",
    themedTitle: "Ann's Relevance Check",
    narrative:
      "Her? Whenever someone mentions Ann Veal, the Bluth family's collective response is a baffled 'her?' Write a function that captures Lucille's reaction when any name is passed in.",
    prompt:
      "Write a function `reaction` that takes a `name` argument. Use a ternary to return `\"Her?\"` if `name === \"Ann\"`, otherwise return `\"Oh, ${name}. How nice.\"` (use a template literal). Test with `reaction(\"Ann\")` and `reaction(\"Maeby\")`.",
    hint: "Ternary syntax: `condition ? valueIfTrue : valueIfFalse`.",
    solution: "function reaction(name) {\n  return name === \"Ann\" ? \"Her?\" : `Oh, ${name}. How nice.`;\n}\nconsole.log(reaction(\"Ann\"));\nconsole.log(reaction(\"Maeby\"));",
    starterCode: "// Ann's Relevance Check\n\nfunction reaction(name) {\n  return ___;\n}\nconsole.log(reaction(\"Ann\"));    // Should print: Her?\nconsole.log(reaction(\"Maeby\")); // Should print: Oh, Maeby. How nice.",
    testCases: [
      { input: "Ann", expected: "Her?", description: "The Bluth reaction to Ann" },
      { input: "Maeby", expected: "Oh, Maeby. How nice.", description: "The reaction to anyone else" },
    ],
    concept: "Functions & Ternary",
    difficulty: "beginner",
  },
  {
    id: "ad-js-04",
    themeId: "arrested-development",
    languageId: "javascript",
    order: 4,
    title: "Objects",
    themedTitle: "Bluth Company Financials",
    narrative:
      "The SEC is circling. Lucille is buying another yacht. Michael needs a snapshot of the Bluth Company's actual financial state — in data, so it can't be denied later.",
    prompt:
      "Create an object `company` with: `name: \"Bluth Company\"`, `debt: 4200000`, and `banana_stands: 1`. Log the `debt` property.",
    hint: "Object properties are accessed with `object.property` or `object[\"property\"]`.",
    solution: "const company = {\n  name: \"Bluth Company\",\n  debt: 4200000,\n  banana_stands: 1\n};\nconsole.log(company.debt);",
    starterCode: "// Bluth Company Financials\n\nconst company = {\n  name: ___,\n  debt: ___,\n  banana_stands: ___\n};\nconsole.log(company.debt);",
    testCases: [
      { input: "", expected: "4200000", description: "The company's staggering debt" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "ad-js-05",
    themeId: "arrested-development",
    languageId: "javascript",
    order: 5,
    title: "Array Methods",
    themedTitle: "Profitable Bluth Ventures",
    narrative:
      "Against all odds, some Bluth business ventures actually turn a profit. Michael needs to filter the list so the board of directors can point to something — anything — that's working.",
    prompt:
      "Given `ventures = [{name: \"Banana Stand\", profit: 12000}, {name: \"Real Estate Fraud\", profit: -500000}, {name: \"Corn Baller Mexico\", profit: 8500}, {name: \"Yacht Storage\", profit: -25000}]`, use `.filter()` to get only ventures where `profit > 0`. Log the filtered array's length.",
    hint: "`.filter(item => condition)` returns a new array of items where condition is true.",
    solution: "const ventures = [{name: \"Banana Stand\", profit: 12000}, {name: \"Real Estate Fraud\", profit: -500000}, {name: \"Corn Baller Mexico\", profit: 8500}, {name: \"Yacht Storage\", profit: -25000}];\nconst profitable = ventures.filter(v => v.profit > 0);\nconsole.log(profitable.length);",
    starterCode: "const ventures = [\n  {name: \"Banana Stand\", profit: 12000},\n  {name: \"Real Estate Fraud\", profit: -500000},\n  {name: \"Corn Baller Mexico\", profit: 8500},\n  {name: \"Yacht Storage\", profit: -25000}\n];\n\nconst profitable = ventures.filter(___);\nconsole.log(profitable.length);  // Should print: 2",
    testCases: [
      { input: "", expected: "2", description: "Two profitable ventures" },
    ],
    concept: "Array Methods (filter)",
    difficulty: "beginner",
  },
  {
    id: "ad-js-06",
    themeId: "arrested-development",
    languageId: "javascript",
    order: 6,
    title: "String Methods",
    themedTitle: "Tobias's Acting Resume",
    narrative:
      "Tobias Fünke has submitted his acting resume — again. It's full of typos, extra spaces, and his self-bestowed title that no one recognizes. Michael needs a utility to clean it up before it accidentally goes out on Bluth Company letterhead.",
    prompt:
      "Given `const resume = \"  never-nude actor analyst  \"`, use string methods to: (1) `.trim()` whitespace, (2) `.toUpperCase()`, and (3) `.replace(\"NEVER-NUDE\", \"LICENSED\")`. Log the result.",
    hint: "Chain methods: `resume.trim().toUpperCase().replace(...)`",
    solution: `const resume = "  never-nude actor analyst  ";\nconst cleaned = resume.trim().toUpperCase().replace("NEVER-NUDE", "LICENSED");\nconsole.log(cleaned);`,
    starterCode: `// Tobias's Acting Resume\n// Trim, uppercase, then replace "NEVER-NUDE" with "LICENSED"\n\nconst resume = "  never-nude actor analyst  ";\nconst cleaned = resume.trim().___.___;\nconsole.log(cleaned);  // Should print: LICENSED ACTOR ANALYST`,
    testCases: [
      { input: "", expected: "LICENSED ACTOR ANALYST", description: "Cleaned resume title" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "ad-js-07",
    themeId: "arrested-development",
    languageId: "javascript",
    order: 7,
    title: ".map()",
    themedTitle: "Banana Stand Markup",
    narrative:
      "George Michael runs the banana stand. His grandfather has decided that every item needs a 50% price markup — there's always money in the banana stand, after all. George Michael needs the updated price list.",
    prompt:
      "Given `const prices = [2, 3, 4, 5, 2.5]`, use `.map()` to create `marked` where each price is multiplied by `1.5`. Log `marked`.",
    hint: "Use `prices.map(p => p * 1.5)` to apply the markup.",
    solution: `const prices = [2, 3, 4, 5, 2.5];\nconst marked = prices.map(p => p * 1.5);\nconsole.log(marked);`,
    starterCode: `// Banana Stand Markup\n// Use .map() to apply a 50% markup to every price\n\nconst prices = [2, 3, 4, 5, 2.5];\nconst marked = prices.map(___);\nconsole.log(marked);  // Should print: [3, 4.5, 6, 7.5, 3.75]`,
    testCases: [
      { input: "", expected: "[3, 4.5, 6, 7.5, 3.75]", description: "All banana stand prices after 50% markup" },
    ],
    concept: ".map()",
    difficulty: "intermediate",
  },
  {
    id: "ad-js-08",
    themeId: "arrested-development",
    languageId: "javascript",
    order: 8,
    title: ".reduce()",
    themedTitle: "The Banana Stand's Hidden Cash",
    narrative:
      "It turns out there really is always money in the banana stand — literally. George Bluth Sr. hid cash bundles inside the walls. Michael needs to total up the cash from every bundle before the SEC freezes the assets.",
    prompt:
      "Given `const bundles = [5500, 12000, 8750, 6300, 9200]`, use `.reduce()` to calculate the total hidden cash. Log the result.",
    hint: "Use `bundles.reduce((total, b) => total + b, 0)` to sum all bundle amounts.",
    solution: `const bundles = [5500, 12000, 8750, 6300, 9200];\nconst total = bundles.reduce((acc, b) => acc + b, 0);\nconsole.log(total);`,
    starterCode: `// The Banana Stand's Hidden Cash\n// Use .reduce() to total all the hidden cash bundles\n\nconst bundles = [5500, 12000, 8750, 6300, 9200];\nconst total = bundles.reduce(___);\nconsole.log(total);  // Should print: 41750`,
    testCases: [
      { input: "", expected: "41750", description: "Total hidden cash in the banana stand" },
    ],
    concept: ".reduce()",
    difficulty: "intermediate",
  },
  {
    id: "ad-js-09",
    themeId: "arrested-development",
    languageId: "javascript",
    order: 9,
    title: "Spread & Destructuring",
    themedTitle: "The Bluth Family Reunion",
    narrative:
      "Michael has reluctantly organized a Bluth family reunion. The Newport Beach Bluths and the model home Bluths need to be combined into one unfortunate guest list. The first two on the list get to sit at the head table.",
    prompt:
      "Given `const newport = [\"Lucille\", \"Gob\", \"Lindsay\"]` and `const modelHome = [\"Michael\", \"George Michael\", \"Maeby\"]`, spread-combine into `family`. Destructure the first two as `head1` and `head2`. Log both.",
    hint: "Spread: `[...arr1, ...arr2]`. Destructure: `const [a, b] = array`.",
    solution: `const newport = ["Lucille", "Gob", "Lindsay"];\nconst modelHome = ["Michael", "George Michael", "Maeby"];\nconst family = [...newport, ...modelHome];\nconst [head1, head2] = family;\nconsole.log(head1);\nconsole.log(head2);`,
    starterCode: `// The Bluth Family Reunion\n// Spread-combine the arrays, then destructure the first two at the head table\n\nconst newport = ["Lucille", "Gob", "Lindsay"];\nconst modelHome = ["Michael", "George Michael", "Maeby"];\nconst family = [...];\nconst [head1, head2] = family;\nconsole.log(head1);\nconsole.log(head2);`,
    testCases: [
      { input: "", expected: "Lucille\nGob", description: "First two Bluths at the head table" },
    ],
    concept: "Spread & Destructuring",
    difficulty: "advanced",
  },
  {
    id: "ad-js-10",
    themeId: "arrested-development",
    languageId: "javascript",
    order: 10,
    title: "Object.keys() & Iteration",
    themedTitle: "The Bluth Company Asset Audit",
    narrative:
      "The SEC is demanding a full asset audit of the Bluth Company. Michael needs to print every asset and its value from the company's data object before the investigators arrive and start asking questions.",
    prompt:
      "Given `const assets = { bananaStand: 250000, modelHome: 480000, yacht: 320000, penthouse: 890000 }`, use `Object.keys()` to iterate and log each asset and value in the format `\"bananaStand: 250000\"`.",
    hint: "Use `Object.keys(assets).forEach(key => console.log(key + \": \" + assets[key]))`.",
    solution: `const assets = { bananaStand: 250000, modelHome: 480000, yacht: 320000, penthouse: 890000 };\nObject.keys(assets).forEach(key => {\n  console.log(key + ": " + assets[key]);\n});`,
    starterCode: `// The Bluth Company Asset Audit\n// Use Object.keys() to log each asset and its value\n\nconst assets = { bananaStand: 250000, modelHome: 480000, yacht: 320000, penthouse: 890000 };\nObject.keys(assets).forEach(key => {\n  console.log(___);\n});`,
    testCases: [
      { input: "", expected: "bananaStand: 250000\nmodelHome: 480000\nyacht: 320000\npenthouse: 890000", description: "Full Bluth Company asset audit" },
    ],
    concept: "Object.keys() & Iteration",
    difficulty: "advanced",
  },
];
