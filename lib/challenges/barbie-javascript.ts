import type { Challenge } from "@/types";

export const barbieJavaScriptChallenges: Challenge[] = [
  {
    id: "ba-js-01",
    themeId: "barbie",
    languageId: "javascript",
    order: 1,
    title: "Variables & Template Literals",
    themedTitle: "Barbie's Daily Greeting",
    narrative:
      "Every morning in Barbieland, Barbie greets her neighbors with a cheerful message. The greeting includes her name and her job of the day. Help write the template for Barbieland's communication department.",
    prompt:
      "Create `name = \"Barbie\"` and `job = \"Astronaut\"`. Use a template literal to log: `\"Hi, I'm Barbie and I'm an Astronaut!\"`",
    hint: "Template literals use backticks `` ` `` and `${variable}` to embed values.",
    solution: "const name = \"Barbie\";\nconst job = \"Astronaut\";\nconsole.log(`Hi, I'm ${name} and I'm an ${job}!`);",
    starterCode: "// Barbie's Daily Greeting\n\nconst name = ___;\nconst job = ___;\nconsole.log(___);",
    testCases: [
      { input: "", expected: "Hi, I'm Barbie and I'm an Astronaut!", description: "The daily greeting" },
    ],
    concept: "Variables & Template Literals",
    difficulty: "beginner",
  },
  {
    id: "ba-js-02",
    themeId: "barbie",
    languageId: "javascript",
    order: 2,
    title: "Arrays",
    themedTitle: "The Kens of Barbieland",
    narrative:
      "There are many Kens in Barbieland, each with a slightly different hobby that still revolves entirely around Barbie. Ken HQ needs an updated roster with the newest Ken's hobby added.",
    prompt:
      "Create array `kens` with `\"Beach Ken\"`, `\"Guitar Ken\"`, and `\"Doctor Ken\"`. Push `\"Horse Ken\"`. Log the length.",
    hint: "Use `array.push(value)` and `array.length`.",
    solution: "const kens = [\"Beach Ken\", \"Guitar Ken\", \"Doctor Ken\"];\nkens.push(\"Horse Ken\");\nconsole.log(kens.length);",
    starterCode: "const kens = [\"Beach Ken\", \"Guitar Ken\", \"Doctor Ken\"];\nkens.push(___);\nconsole.log(kens.length);  // Should print: 4",
    testCases: [
      { input: "", expected: "4", description: "Four Kens" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "ba-js-03",
    themeId: "barbie",
    languageId: "javascript",
    order: 3,
    title: "Functions & Ternary",
    themedTitle: "Is It Kenough?",
    narrative:
      "Ken is on a journey of self-discovery. The question the whole movie asks is: is Ken enough? Write a function that evaluates confidence levels and delivers the verdict.",
    prompt:
      "Write a function `isKenough(confidence)` that takes a number. Use a ternary to return `\"You are Kenough!\"` if confidence >= 80, otherwise `\"Keep working on it, Ken.\"`.\nTest with `isKenough(95)` and `isKenough(60)`.",
    hint: "Ternary: `condition ? 'yes' : 'no'`",
    solution: "function isKenough(confidence) {\n  return confidence >= 80 ? \"You are Kenough!\" : \"Keep working on it, Ken.\";\n}\nconsole.log(isKenough(95));\nconsole.log(isKenough(60));",
    starterCode: "function isKenough(confidence) {\n  return ___;\n}\nconsole.log(isKenough(95));  // You are Kenough!\nconsole.log(isKenough(60));  // Keep working on it, Ken.",
    testCases: [
      { input: "95", expected: "You are Kenough!", description: "High confidence" },
      { input: "60", expected: "Keep working on it, Ken.", description: "Low confidence" },
    ],
    concept: "Functions & Ternary",
    difficulty: "beginner",
  },
  {
    id: "ba-js-04",
    themeId: "barbie",
    languageId: "javascript",
    order: 4,
    title: "Objects",
    themedTitle: "The Dream House Blueprint",
    narrative:
      "The Dream House is the most coveted property in Barbieland. Barbie's architect needs the specs in object form before construction begins on the newest expansion.",
    prompt:
      "Create an object `dreamHouse` with: `owner: \"Barbie\"`, `rooms: 12`, and `color: \"pink\"`. Log the `rooms` property.",
    hint: "Object properties are accessed with dot notation: `object.property`.",
    solution: "const dreamHouse = {\n  owner: \"Barbie\",\n  rooms: 12,\n  color: \"pink\"\n};\nconsole.log(dreamHouse.rooms);",
    starterCode: "const dreamHouse = {\n  owner: ___,\n  rooms: ___,\n  color: ___\n};\nconsole.log(dreamHouse.rooms);  // Should print: 12",
    testCases: [
      { input: "", expected: "12", description: "The Dream House has 12 rooms" },
    ],
    concept: "Objects",
    difficulty: "beginner",
  },
  {
    id: "ba-js-05",
    themeId: "barbie",
    languageId: "javascript",
    order: 5,
    title: "Array Methods",
    themedTitle: "Barbies in Crisis",
    narrative:
      "When one Barbie gets flat feet and starts having dark thoughts, it spreads. Weird Barbie needs to identify which Barbies are in existential crisis so she can send them to the Real World.",
    prompt:
      "Given `barbies = [{name: \"Barbie\", crisis: true}, {name: \"Doctor Barbie\", crisis: false}, {name: \"Lawyer Barbie\", crisis: true}, {name: \"President Barbie\", crisis: false}]`, use `.filter()` to get only the ones in crisis. Log the count.",
    hint: "`.filter(b => b.crisis)` returns only items where `crisis` is truthy.",
    solution: "const barbies = [{name: \"Barbie\", crisis: true}, {name: \"Doctor Barbie\", crisis: false}, {name: \"Lawyer Barbie\", crisis: true}, {name: \"President Barbie\", crisis: false}];\nconst inCrisis = barbies.filter(b => b.crisis);\nconsole.log(inCrisis.length);",
    starterCode: "const barbies = [\n  {name: \"Barbie\", crisis: true},\n  {name: \"Doctor Barbie\", crisis: false},\n  {name: \"Lawyer Barbie\", crisis: true},\n  {name: \"President Barbie\", crisis: false}\n];\nconst inCrisis = barbies.filter(___);\nconsole.log(inCrisis.length);  // Should print: 2",
    testCases: [
      { input: "", expected: "2", description: "Two Barbies in crisis" },
    ],
    concept: "Array Methods (filter)",
    difficulty: "beginner",
  },
  {
    id: "ba-js-06",
    themeId: "barbie",
    languageId: "javascript",
    order: 6,
    title: "String Methods",
    themedTitle: "Ken's Mojo Dojo Manifesto",
    narrative:
      "Ken has written a manifesto for his Mojo Dojo Casa House, but it arrived in all lowercase with typos and the word 'feelings' spelled wrong. Barbie volunteers to fix it before it gets posted on the fridge.",
    prompt:
      "Write a function `fixManifesto(text)` that: converts to uppercase with `.toUpperCase()`, uses `.replace('HOUSE', 'CASA HOUSE')`, and uses `.includes('KEN')` to check if it's a valid Ken document — if not, return `\"Not Ken's manifesto.\"`\nTest with `fixManifesto(\"welcome to ken's mojo dojo house\")` and `fixManifesto(\"welcome to barbie's dream house\")`.",
    hint: "Use `.toUpperCase()` first, then `.includes()` to check, then `.replace()`.",
    solution: "function fixManifesto(text) {\n  const upper = text.toUpperCase();\n  if (!upper.includes('KEN')) return \"Not Ken's manifesto.\";\n  return upper.replace('HOUSE', 'CASA HOUSE');\n}\nconsole.log(fixManifesto(\"welcome to ken's mojo dojo house\"));\nconsole.log(fixManifesto(\"welcome to barbie's dream house\"));",
    starterCode: "function fixManifesto(text) {\n  const upper = text.toUpperCase();\n  if (!upper.includes(___)) return \"Not Ken's manifesto.\";\n  return upper.replace(___, ___);\n}\nconsole.log(fixManifesto(\"welcome to ken's mojo dojo house\"));\nconsole.log(fixManifesto(\"welcome to barbie's dream house\"));",
    testCases: [
      { input: '"welcome to ken\'s mojo dojo house"', expected: "WELCOME TO KEN'S MOJO DOJO CASA HOUSE", description: "Ken's manifesto fixed up" },
      { input: '"welcome to barbie\'s dream house"', expected: "Not Ken's manifesto.", description: "No KEN — rejected" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "ba-js-07",
    themeId: "barbie",
    languageId: "javascript",
    order: 7,
    title: ".map()",
    themedTitle: "Career Announcement Cards",
    narrative:
      "Barbieland's career day needs announcement cards for every Barbie. The cards must say 'Meet [Name], [Career] Barbie!' — and they need to be generated automatically for the whole roster.",
    prompt:
      "Given `careers = [\"Astronaut\", \"Doctor\", \"President\", \"Lawyer\"]`, use `.map()` to return an array of strings formatted as `\"Meet Astronaut Barbie!\"`.\nLog the result.",
    hint: "`.map(career => \\`Meet ${career} Barbie!\\`)` creates a new array.",
    solution: "const careers = [\"Astronaut\", \"Doctor\", \"President\", \"Lawyer\"];\nconst cards = careers.map(career => `Meet ${career} Barbie!`);\nconsole.log(cards);",
    starterCode: "const careers = [\"Astronaut\", \"Doctor\", \"President\", \"Lawyer\"];\nconst cards = careers.map(career => ___);\nconsole.log(cards);",
    testCases: [
      { input: "", expected: "[ 'Meet Astronaut Barbie!', 'Meet Doctor Barbie!', 'Meet President Barbie!', 'Meet Lawyer Barbie!' ]", description: "Career announcement cards for all Barbies" },
    ],
    concept: ".map()",
    difficulty: "intermediate",
  },
  {
    id: "ba-js-08",
    themeId: "barbie",
    languageId: "javascript",
    order: 8,
    title: ".reduce()",
    themedTitle: "The Dream House Construction Budget",
    narrative:
      "Barbie's new Dream House expansion has multiple budget line items. The Barbieland Housing Authority needs the total budget before approving the permit — and everything must be in pink.",
    prompt:
      "Given `costs = [45000, 12000, 8500, 32000, 7800]`, use `.reduce()` to calculate and log the total.\nExpected: `105300`.",
    hint: "`.reduce((acc, cost) => acc + cost, 0)` accumulates the total.",
    solution: "const costs = [45000, 12000, 8500, 32000, 7800];\nconst total = costs.reduce((acc, cost) => acc + cost, 0);\nconsole.log(total);",
    starterCode: "const costs = [45000, 12000, 8500, 32000, 7800];\nconst total = costs.reduce((acc, cost) => ___, 0);\nconsole.log(total);  // Should print: 105300",
    testCases: [
      { input: "", expected: "105300", description: "Total Dream House construction cost" },
    ],
    concept: ".reduce()",
    difficulty: "intermediate",
  },
  {
    id: "ba-js-09",
    themeId: "barbie",
    languageId: "javascript",
    order: 9,
    title: "Spread & Destructuring",
    themedTitle: "Barbie & Ken's Separate Interests",
    narrative:
      "Now that Barbie and Ken have had their big conversation about identity, they each maintain their own interests list. A Barbieland census app needs to merge both lists and pull out the first two items as featured activities.",
    prompt:
      "Given `barbieInterests = [\"empowerment\", \"careers\", \"travel\"]` and `kenInterests = [\"horses\", \"patriarchy\", \"beach\"]`, use spread to merge into `allInterests`. Then destructure: `const [first, second, ...rest] = allInterests`. Log `first`, `second`, and `rest.length`.",
    hint: "Spread merge: `[...barbieInterests, ...kenInterests]`. Then destructure with rest.",
    solution: "const barbieInterests = [\"empowerment\", \"careers\", \"travel\"];\nconst kenInterests = [\"horses\", \"patriarchy\", \"beach\"];\nconst allInterests = [...barbieInterests, ...kenInterests];\nconst [first, second, ...rest] = allInterests;\nconsole.log(first);\nconsole.log(second);\nconsole.log(rest.length);",
    starterCode: "const barbieInterests = [\"empowerment\", \"careers\", \"travel\"];\nconst kenInterests = [\"horses\", \"patriarchy\", \"beach\"];\nconst allInterests = [...___, ...___];\nconst [first, second, ...rest] = allInterests;\nconsole.log(first);        // empowerment\nconsole.log(second);       // careers\nconsole.log(rest.length);  // 4",
    testCases: [
      { input: "", expected: "empowerment\ncareers\n4", description: "First, second, and remaining count from merged list" },
    ],
    concept: "Spread & Destructuring",
    difficulty: "advanced",
  },
  {
    id: "ba-js-10",
    themeId: "barbie",
    languageId: "javascript",
    order: 10,
    title: "Object.keys() & Iteration",
    themedTitle: "The Barbieland Census Report",
    narrative:
      "The Barbieland Department of Statistics is printing a census summary. Every property of the population object needs to be logged with its value — so the President (Barbie, obviously) can review it before the annual gala.",
    prompt:
      "Given `census = { population: 1000, kens: 200, weirdBarbies: 1, dreamHouses: 847 }`, use `Object.keys(census).forEach(key => ...)` to log each key and value in the format: `\"population: 1000\"`.",
    hint: "`Object.keys(obj).forEach(key => console.log(\\`${key}: ${obj[key]}\\`))`",
    solution: "const census = { population: 1000, kens: 200, weirdBarbies: 1, dreamHouses: 847 };\nObject.keys(census).forEach(key => {\n  console.log(`${key}: ${census[key]}`);\n});",
    starterCode: "const census = { population: 1000, kens: 200, weirdBarbies: 1, dreamHouses: 847 };\nObject.keys(census).forEach(key => {\n  console.log(___);\n});",
    testCases: [
      { input: "", expected: "population: 1000\nkens: 200\nweirdBarbies: 1\ndreamHouses: 847", description: "All census properties printed" },
    ],
    concept: "Object.keys() & Iteration",
    difficulty: "advanced",
  },
];
