import type { Lesson } from "@/types";

export const javascriptLessons: Record<string, Lesson> = {

  // ─── Stranger Things ──────────────────────────────────────────────────────

  "st-js-01": {
    intro: "Mike Wheeler is hunched over his radio in the basement, piecing together Eleven's broken transmissions into a coherent message. Every variable is a fragment of signal; every template literal stitches them into something readable.",
    concept: "Variables store values you want to use later. In JavaScript you declare them with `const` (when the value won't change) or `let` (when it might). Template literals let you embed variables directly inside a string using backticks and `${}`.",
    example: `const hero = "Eleven";
const place = "the Void";
const signal = \`\${hero} is transmitting from \${place}.\`;
console.log(signal);`,
    exampleOutput: "Eleven is transmitting from the Void.",
    notes: "The backtick string is a template literal. `${hero}` is replaced with the value of the variable `hero` at runtime — no concatenation needed.",
    keyPoints: [
      "Use `const` for values that never change, `let` for values that do.",
      "Template literals use backticks (`) not single or double quotes.",
      "`${}` inside a template literal evaluates the expression inside the braces.",
      "`console.log()` prints any value to the terminal.",
    ],
  },

  "st-js-02": {
    intro: "Dustin is tracking everyone on the Party's frequency list. When a new member joins, they're pushed onto the list — and he always needs to know exactly how many channels are active.",
    concept: "An array is an ordered list of values stored in a single variable. You can add items to the end of an array with `.push()` and check how many items it contains with `.length`.",
    example: `const party = ["Mike", "Dustin", "Lucas"];
party.push("Max");
console.log(party.length);`,
    exampleOutput: "4",
    notes: "`.push()` mutates the array in place — it changes the original array rather than returning a new one. After pushing Max, the array has 4 items.",
    keyPoints: [
      "Arrays are created with square brackets: `[item1, item2, ...]`.",
      "`.push(value)` adds a value to the end of an array.",
      "`.length` returns the number of items currently in the array.",
      "Array indexes start at 0 — the first item is `array[0]`.",
    ],
  },

  "st-js-03": {
    intro: "Chief Hopper needs a reusable formula for calculating Demogorgon threat levels based on sighting count. A function lets him call the same calculation logic over and over with different inputs.",
    concept: "A function is a reusable block of code that takes input (parameters) and produces output (a return value). You define it once and call it with different arguments whenever you need the result.",
    example: `function dangerRating(sightings) {
  return sightings * 5;
}

console.log(dangerRating(3));
console.log(dangerRating(6));`,
    exampleOutput: "15\n30",
    notes: "`dangerRating` is defined once but called twice with different arguments. The `return` statement sends the computed value back to the caller.",
    keyPoints: [
      "Define a function with `function name(param) { ... }`.",
      "Parameters are the variable names listed in the definition; arguments are the values you pass when calling.",
      "`return` exits the function and sends a value back to wherever it was called.",
      "A function without `return` returns `undefined` by default.",
    ],
  },

  "st-js-04": {
    intro: "Hawkins National Laboratory keeps a classified file on every test subject — a single object that bundles together all the key data about that person into one organized record.",
    concept: "An object groups related data as key-value pairs inside curly braces. You access or update properties with dot notation (`object.property`), and you can add new properties at any time by assigning to them.",
    example: `const subject = {
  codename: "Eight",
  powerLevel: 7,
  origin: "Pittsburgh"
};
subject.contained = true;
console.log(subject.codename);
console.log(subject.contained);`,
    exampleOutput: "Eight\ntrue",
    notes: "`subject.contained = true` adds a new property to an existing object. Dot notation works for both reading and writing properties.",
    keyPoints: [
      "Objects are defined with curly braces: `{ key: value, ... }`.",
      "Access a property with `object.propertyName`.",
      "Assign a new property with `object.newProp = value` — you don't need to declare it first.",
      "Property values can be any type: string, number, boolean, array, or even another object.",
    ],
  },

  "st-js-05": {
    intro: "The Mind Flayer's influence is spreading. Hopper needs to isolate only the confirmed-safe residents from a full list before it's too late — one sweep, one clean result.",
    concept: "Array's `.filter()` method creates a new array containing only the elements that pass a test you define. You pass a callback function — it runs once per element, and the element is kept if the callback returns `true`.",
    example: `const people = [
  { name: "Joyce", status: "safe" },
  { name: "Billy", status: "flayed" },
  { name: "Nancy", status: "safe" },
];

const evacuate = people.filter(p => p.status === "safe");
console.log(evacuate.length);`,
    exampleOutput: "2",
    notes: "The arrow function `p => p.status === \"safe\"` is called for each person. It returns `true` for Joyce and Nancy, so only they end up in `evacuate`.",
    keyPoints: [
      "`.filter()` returns a brand-new array; the original is not changed.",
      "The callback receives each element one at a time — name it whatever makes sense.",
      "Elements are kept when the callback returns `true`, dropped when it returns `false`.",
      "`===` is strict equality — it checks both value and type.",
    ],
  },

  // ─── Severance ────────────────────────────────────────────────────────────

  "sv-js-01": {
    intro: "On the Severed Floor every employee has a Lumon-formatted name — first name, space, last initial, period. Your innie doesn't know your outie's full name, but the badge system needs something to call you.",
    concept: "Variables store pieces of data. Strings are text values, written inside quotes. You can combine strings using the `+` operator or, more cleanly, with template literals — backtick strings that let you embed variables directly with `${}`.",
    example: `const firstName = "Helly";
const lastInitial = "R";
const badge = \`\${firstName} \${lastInitial}.\`;
console.log(badge);`,
    exampleOutput: "Helly R.",
    notes: "The template literal automatically inserts the values of `firstName` and `lastInitial` into the string. The period after the initial is written as a literal character outside the `${}`.",
    keyPoints: [
      "Strings can be single-quoted `'text'`, double-quoted `\"text\"`, or backtick `` `text` ``.",
      "Template literals (backticks) support embedded expressions via `${expression}`.",
      "The `+` operator also concatenates strings: `firstName + \" \" + lastInitial + \".\"` gives the same result.",
      "`const` declares a variable whose binding can't be reassigned.",
    ],
  },

  "sv-js-02": {
    intro: "The macrodata numbers arrive in batches. Some of them are bad — you can feel it. Your job is to flag the ones that exceed the threshold and hand them to the refinement queue.",
    concept: "`.filter()` creates a new array containing only elements that pass a condition you specify. It's perfect when you want to separate out a subset without changing the original data.",
    example: `const batch = [5, 72, 18, 61, 44, 88];
const flagged = batch.filter(n => n > 50);
console.log(flagged);`,
    exampleOutput: "[ 72, 61, 88 ]",
    notes: "The arrow function `n => n > 50` is the test. Each number in `batch` is tested; only 72, 61, and 88 return `true`, so only they appear in `flagged`.",
    keyPoints: [
      "`.filter()` always returns a new array — it never modifies the original.",
      "The arrow function syntax `n => expression` is shorthand for `function(n) { return expression; }`.",
      "Any comparison operator works: `>`, `<`, `>=`, `<=`, `===`, `!==`.",
      "If no elements pass the test, `.filter()` returns an empty array `[]`.",
    ],
  },

  "sv-js-03": {
    intro: "Harmony Cobel demands complete records on every severed employee — name, department, compliance score, all bundled together. Objects are how JavaScript keeps related data organised under one roof.",
    concept: "An object groups related values under named keys. You define the shape with curly braces and access properties with dot notation. Functions can accept objects as arguments and read any of their properties.",
    example: `const employee = {
  name: "Dylan G.",
  department: "MDR",
  complianceScore: 78
};

function isCompliant(emp) {
  return emp.complianceScore >= 80;
}

console.log(isCompliant(employee));`,
    exampleOutput: "false",
    notes: "`isCompliant` receives the entire `employee` object. It reads `emp.complianceScore` and compares it to 80 — since 78 < 80 the function returns `false`.",
    keyPoints: [
      "Objects are defined with `{ key: value }` pairs separated by commas.",
      "Dot notation reads a property: `object.key`.",
      "You can pass objects to functions just like any other value.",
      "The function's parameter (`emp`) is a reference to the same object — changes inside the function affect the original.",
    ],
  },

  "sv-js-04": {
    intro: "The Wellness Session has a strict scoring system. Miss Cobel needs a clean one-liner to decide who earns a Waffle Party and who gets gently reminded to work harder.",
    concept: "The ternary operator is a compact way to write a simple if/else. It evaluates a condition and returns one of two values: `condition ? valueIfTrue : valueIfFalse`. Functions return these values back to the caller.",
    example: `function evaluate(score, threshold) {
  return score >= threshold ? "Excellent work!" : "Room to improve.";
}

console.log(evaluate(90, 75));
console.log(evaluate(55, 75));`,
    exampleOutput: "Excellent work!\nRoom to improve.",
    notes: "The ternary `score >= threshold ? ... : ...` is evaluated first; the result is immediately returned. Two calls with different arguments produce two different outcomes.",
    keyPoints: [
      "Ternary syntax: `condition ? resultIfTrue : resultIfFalse`.",
      "It's an expression — it produces a value you can use directly in a `return` or assignment.",
      "Keep ternaries to simple one-liners; use if/else for complex branching.",
      "Functions can be called multiple times with different arguments — that's their superpower.",
    ],
  },

  "sv-js-05": {
    intro: "MDR workers sort numbers into bins by feel. Your task is more precise: write a function that loops through a list and accumulates a sum of only the numbers that belong to a given divisor group.",
    concept: "A `for...of` loop iterates over every item in an array. You can pair it with an accumulator variable — a variable that starts at zero and grows as the loop runs — to compute totals.",
    example: `function binSum(numbers, divisor) {
  let total = 0;
  for (const n of numbers) {
    if (n % divisor === 0) {
      total += n;
    }
  }
  return total;
}

console.log(binSum([6, 9, 12, 15, 18], 3));`,
    exampleOutput: "60",
    notes: "`total` starts at 0 and `total += n` adds each qualifying number to it. The modulo operator `%` gives the remainder — `n % 3 === 0` means n is divisible by 3.",
    keyPoints: [
      "`for (const item of array)` loops over every element in order.",
      "Use `let` (not `const`) for the accumulator, because its value changes each iteration.",
      "The modulo operator `%` returns the remainder: `10 % 3` is `1`, `9 % 3` is `0`.",
      "An accumulator pattern: initialise to 0 before the loop, update inside, return after.",
    ],
  },

  // ─── Breaking Bad ─────────────────────────────────────────────────────────

  "bb-js-01": {
    intro: "Walter White doesn't go by Walt anymore. He has a name — a brand — and every batch of product carries that identity. Before you can say his name, you need to know how to store and assemble text in JavaScript.",
    concept: "Variables hold values your program needs to remember. Template literals let you build strings that include those values without messy concatenation — just wrap the string in backticks and drop `${variable}` wherever you want a value inserted.",
    example: `const alias = "Heisenberg";
const territory = "Albuquerque";
const declaration = \`I am \${alias}. I own \${territory}.\`;
console.log(declaration);`,
    exampleOutput: "I am Heisenberg. I own Albuquerque.",
    notes: "The backtick string reads the values of `alias` and `territory` at the moment `console.log` runs — change either variable and the output changes automatically.",
    keyPoints: [
      "`const` declares a variable that can't be reassigned once set.",
      "Template literals use backticks (`` ` ``), not quotes.",
      "`${expression}` inside a template literal is replaced with the expression's value.",
      "`console.log()` prints to the terminal — the primary way to see your output.",
    ],
  },

  "bb-js-02": {
    intro: "Saul Goodman manages the distribution network — every new dealer needs to be logged. The list grows as the operation expands, and Saul needs a headcount at any given moment.",
    concept: "Arrays are ordered lists. `.push()` appends a new item to the end of an existing array. `.length` tells you how many items the array currently holds — useful for counting without manually tracking additions.",
    example: `const network = ["Combo", "Skinny Pete", "Badger"];
network.push("Huell");
console.log(network.length);`,
    exampleOutput: "4",
    notes: "After `.push(\"Huell\")` the array holds four names. `.length` reflects the updated count immediately — there's no need to recount manually.",
    keyPoints: [
      "Square brackets create an array: `[\"a\", \"b\", \"c\"]`.",
      "`.push(value)` adds to the end of the array and returns the new length.",
      "`.length` is a property, not a function — no parentheses needed.",
      "Arrays are zero-indexed: the first item lives at `array[0]`.",
    ],
  },

  "bb-js-03": {
    intro: "Walt's signature product is defined by its purity. Every batch must be measured against the formula — and that formula needs to work the same way every single time, no matter the input.",
    concept: "Functions let you name and reuse a block of logic. You define the steps once with a parameter, and whenever you call the function with a real value, it runs those steps and hands the result back via `return`.",
    example: `function purityScore(base, additive) {
  return base + additive * 0.1;
}

console.log(purityScore(95, 30));`,
    exampleOutput: "98",
    notes: "`base` and `additive` are parameters — placeholders filled in when the function is called. `return` sends the computed number back to `console.log`, which then prints it.",
    keyPoints: [
      "Parameters are the names inside the parentheses: `function name(param1, param2)`.",
      "`return` immediately ends the function and sends a value back to the caller.",
      "You can call the same function with different arguments to get different results.",
      "A function that doesn't `return` anything gives back `undefined`.",
    ],
  },

  "bb-js-04": {
    intro: "Every batch of product has a profile — its name, purity rating, and batch size. Walt needs this data bundled into a single record so it can be logged, passed around, and inspected in one clean package.",
    concept: "Objects bundle multiple related values under one name using key-value pairs. Once created, you read properties with dot notation and can add new ones at any time just by assigning to them.",
    example: `const batch = {
  name: "Blue Sky",
  purity: 99,
  batchSize: 200
};
batch.approved = true;
console.log(batch.name);
console.log(batch.approved);`,
    exampleOutput: "Blue Sky\ntrue",
    notes: "`batch.approved = true` adds a new `approved` key to the object after it was created — JavaScript objects are flexible and can gain new properties at runtime.",
    keyPoints: [
      "Object literals use curly braces: `{ key: value, key2: value2 }`.",
      "Read a property with `object.key` or `object[\"key\"]`.",
      "Assign new properties any time: `object.newKey = value`.",
      "Property values can be any type — string, number, boolean, array, or another object.",
    ],
  },

  "bb-js-05": {
    intro: "Gus Fring wants only the safest distribution points flagged for an expansion run. The full territory list is too long to scan manually — a filter sweep cuts it down to just the qualifying locations.",
    concept: "`.filter()` sweeps an array and returns a new array of only the items that satisfy your condition. It's non-destructive: the original array is untouched, and the result is a clean subset.",
    example: `const locations = [
  { city: "Albuquerque", safe: true },
  { city: "Phoenix", safe: false },
  { city: "Santa Fe", safe: true },
  { city: "El Paso", safe: false },
];

const approved = locations.filter(loc => loc.safe);
console.log(approved.length);`,
    exampleOutput: "2",
    notes: "The arrow function `loc => loc.safe` returns the value of `safe` directly. Since booleans are already `true`/`false`, no comparison operator is needed.",
    keyPoints: [
      "`.filter(callback)` returns a new array; the original is unchanged.",
      "The callback receives one element at a time; return `true` to keep it, `false` to drop it.",
      "Truthy/falsy shorthand: `loc.safe` is equivalent to `loc.safe === true`.",
      "Arrow functions `x => expression` are shorthand for `function(x) { return expression; }`.",
    ],
  },

  // ─── The Office ───────────────────────────────────────────────────────────

  "to-js-01": {
    intro: "Michael Scott has an announcement — and like every Michael announcement, it needs to be dramatic, personalised, and definitely longer than necessary. Before he can deliver it, someone needs to write the template.",
    concept: "Variables label pieces of data so you can reference them by name. Template literals make string composition readable — instead of joining strings with `+`, you embed variables directly in a backtick string using `${}`.",
    example: `const manager = "Michael Scott";
const branch = "Scranton";
const memo = \`Attention, \${branch}: \${manager} has an important announcement.\`;
console.log(memo);`,
    exampleOutput: "Attention, Scranton: Michael Scott has an important announcement.",
    notes: "Both `manager` and `branch` are injected into the template literal. The surrounding text is just regular characters — only the `${}` parts are evaluated.",
    keyPoints: [
      "Use `const` for data that doesn't change after assignment.",
      "Template literals start and end with backticks, not quotes.",
      "`${variable}` is replaced by the variable's value when the string is evaluated.",
      "You can embed any valid expression inside `${}`, not just simple variables.",
    ],
  },

  "to-js-02": {
    intro: "Phyllis and Angela are co-chairing the Party Planning Committee — again. Every new member who joins needs to be added to the roster, and someone needs to keep track of the total headcount.",
    concept: "Arrays hold ordered collections. `.push()` adds an element to the end. `.length` tells you the current count. Together they're all you need to maintain a growing list.",
    example: `const committee = ["Phyllis", "Angela", "Oscar"];
committee.push("Pam");
console.log(committee.length);`,
    exampleOutput: "4",
    notes: "`.push(\"Pam\")` appends Pam to the end of the array. `.length` is then 4 because the array now has four elements.",
    keyPoints: [
      "Array literals use square brackets: `[\"a\", \"b\", \"c\"]`.",
      "`.push(value)` mutates the array — it changes the original.",
      "`.length` returns the number of elements currently in the array.",
      "The last element is always at index `array.length - 1`.",
    ],
  },

  "to-js-03": {
    intro: "Dwight Schrute tracks paper sales with military precision. Every rep's total commission is calculated the same way — a function that takes the units sold and returns the revenue, ready for the quarterly report.",
    concept: "Functions are reusable formulas. Define the calculation once, then call it with any input to get the output. The `return` keyword sends the result back to wherever the function was called.",
    example: `function commission(units) {
  return units * 12.50;
}

console.log(commission(40));`,
    exampleOutput: "500",
    notes: "`commission(40)` calls the function with `units = 40`. JavaScript evaluates `40 * 12.50` and `return` sends `500` back to `console.log`.",
    keyPoints: [
      "Define a function: `function name(parameter) { return result; }`.",
      "Call a function: `name(argument)` — the argument fills the parameter slot.",
      "Functions are reusable — call `commission(80)` to get a different result without rewriting anything.",
      "Without a `return`, the function evaluates to `undefined`.",
    ],
  },

  "to-js-04": {
    intro: "HR keeps a file on every employee — and Toby needs a way to model that file in code. An object lets him package an employee's name, role, and performance score into a single, inspectable unit.",
    concept: "Objects are named collections of key-value pairs. You define them with curly braces, read or write properties with dot notation, and can extend them with new properties after creation.",
    example: `const employee = {
  name: "Dwight Schrute",
  role: "Assistant Regional Manager",
  performanceScore: 97
};
employee.assistantTo = true;
console.log(employee.name);
console.log(employee.assistantTo);`,
    exampleOutput: "Dwight Schrute\ntrue",
    notes: "The initial object has three properties. `employee.assistantTo = true` adds a fourth one on the fly. All properties — old and new — are accessible via dot notation.",
    keyPoints: [
      "Objects group related data: `{ key: value, ... }`.",
      "Read properties with `object.key`.",
      "Assign new properties at any time: `object.newKey = value`.",
      "Property values can be any JavaScript type.",
    ],
  },

  "to-js-05": {
    intro: "Jim needs a shortlist for his next prank on Dwight. The full office roster is too visible — he needs to quietly filter it down to just the people who are 'in on it', leaving no trace of the others.",
    concept: "`.filter()` produces a new array containing only the elements where your callback returns `true`. It leaves the original array untouched and gives you a clean, narrowed-down result.",
    example: `const staff = [
  { name: "Jim", inOnIt: true },
  { name: "Dwight", inOnIt: false },
  { name: "Pam", inOnIt: true },
  { name: "Michael", inOnIt: false },
];

const conspirators = staff.filter(s => s.inOnIt);
console.log(conspirators.length);`,
    exampleOutput: "2",
    notes: "The arrow function `s => s.inOnIt` returns `true` for Jim and Pam (whose `inOnIt` is `true`) and `false` for everyone else. The result has 2 elements.",
    keyPoints: [
      "`.filter()` returns a new array — the original `staff` array is unchanged.",
      "The callback receives each element in turn; `true` keeps it, `false` drops it.",
      "Accessing a boolean property directly (`s.inOnIt`) is the same as `s.inOnIt === true`.",
      "Chaining is possible: `array.filter(...).length` works in a single expression.",
    ],
  },

  // ─── Game of Thrones ──────────────────────────────────────────────────────

  "got-js-01": {
    intro: "A raven has arrived at Castle Black. Jon Snow unrolls the scroll — the message is fragmented, pulled from two variables. A template literal weaves them into the full proclamation.",
    concept: "Variables name pieces of data so you can work with them symbolically. Template literals (backtick strings) let you weave multiple variables into a single sentence without string concatenation gymnastics.",
    example: `const sender = "Daenerys Targaryen";
const destination = "King's Landing";
const message = \`\${sender} rides for \${destination}.\`;
console.log(message);`,
    exampleOutput: "Daenerys Targaryen rides for King's Landing.",
    notes: "The backtick string spans the entire sentence. Each `${}` block pulls in a variable value at the moment the line executes.",
    keyPoints: [
      "`const` declares a variable that can't be reassigned.",
      "Template literals use backticks, not single or double quotes.",
      "`${expression}` is replaced by the expression's evaluated value.",
      "`console.log()` is how you print output.",
    ],
  },

  "got-js-02": {
    intro: "The Night's Watch is undermanned — every new recruit must be logged on the roster immediately. Maester Aemon needs a running count so he can report to the Lord Commander.",
    concept: "Arrays hold a sequence of values. `.push()` appends a new value to the end. `.length` reflects the current count — it updates automatically whenever you add or remove items.",
    example: `const watch = ["Jon Snow", "Sam Tarly", "Grenn"];
watch.push("Pyp");
console.log(watch.length);`,
    exampleOutput: "4",
    notes: "Three names are in the array initially. After `.push(\"Pyp\")` there are four. `.length` always reflects the live count.",
    keyPoints: [
      "Create an array with square brackets: `[\"a\", \"b\"]`.",
      "`.push(value)` adds to the end in place.",
      "`.length` is a property — no parentheses.",
      "Access items by index: `watch[0]` is `\"Jon Snow\"`.",
    ],
  },

  "got-js-03": {
    intro: "The dragonglass weapons forge needs a precise formula. Each weapon's effectiveness rating depends on the size of the shard used — a function that takes the size and returns the rating can be reused for every piece.",
    concept: "A function wraps logic in a reusable package. It accepts input through parameters, does something with those values, and returns a result. Call it once or a thousand times — the logic stays in one place.",
    example: `function weaponRating(shardSize) {
  return shardSize * 4;
}

console.log(weaponRating(10));
console.log(weaponRating(25));`,
    exampleOutput: "40\n100",
    notes: "Two calls, two different arguments, two different results — same function. The formula `shardSize * 4` lives in one place; change it once and all calls update.",
    keyPoints: [
      "Parameters are the input slots defined in `function name(param)`.",
      "Arguments are the actual values you pass when calling: `weaponRating(10)`.",
      "`return` exits the function and delivers the result to the caller.",
      "Functions can be called as many times as needed.",
    ],
  },

  "got-js-04": {
    intro: "The Small Council convenes. Each member's record needs to capture their name, house, and loyalty score — and the Master of Whispers needs to flag those whose loyalty is in question.",
    concept: "Objects model real-world entities by grouping their attributes as key-value pairs. You can read existing properties with dot notation and add new properties at any time by simply assigning to them.",
    example: `const councillor = {
  name: "Varys",
  house: "None",
  loyalty: 65
};
councillor.isSpymaster = true;
console.log(councillor.name);
console.log(councillor.isSpymaster);`,
    exampleOutput: "Varys\ntrue",
    notes: "`councillor.isSpymaster = true` is a new property being added after the object was created — perfectly valid in JavaScript. Dot notation reads and writes.",
    keyPoints: [
      "Object literals: `{ key: value }` inside curly braces.",
      "Read a property: `obj.key`.",
      "Add a new property: `obj.newKey = value`.",
      "Property values can be any type.",
    ],
  },

  "got-js-05": {
    intro: "Arya Stark keeps her list. Not everyone on it is confirmed — some targets are still `\"pending\"`. She needs to filter down to only those marked `\"confirmed\"` before she moves.",
    concept: "`.filter()` scans every element in an array and returns a new array containing only the ones where your test function returned `true`. It never touches the original array.",
    example: `const targets = [
  { name: "Cersei Lannister", status: "confirmed" },
  { name: "The Hound", status: "pending" },
  { name: "Walder Frey", status: "confirmed" },
  { name: "Beric Dondarrion", status: "pending" },
];

const readyToMove = targets.filter(t => t.status === "confirmed");
console.log(readyToMove.length);`,
    exampleOutput: "2",
    notes: "The arrow function checks each target's `status`. Only Cersei and Walder Frey return `true`, so `readyToMove` has 2 elements.",
    keyPoints: [
      "`.filter()` returns a new array — the original is untouched.",
      "The callback is called once per element; `true` keeps it, `false` drops it.",
      "Arrow functions: `item => condition` is shorthand for `function(item) { return condition; }`.",
      "`===` is strict equality — always prefer it over `==` in JavaScript.",
    ],
  },

  // ─── The Matrix ───────────────────────────────────────────────────────────

  "mx-js-01": {
    intro: "Neo is being sent a message from the operators — a two-part signal assembled from a codename and a directive. The Matrix doesn't use fancy GUIs; it talks in plain strings stitched together from variables.",
    concept: "Variables are named containers for values. Template literals let you build dynamic strings by embedding variable values with `${}` inside backtick quotes — no string concatenation required.",
    example: `const operativeCode = "Neo";
const directive = "follow the white rabbit";
const transmission = \`Agent \${operativeCode}: \${directive}.\`;
console.log(transmission);`,
    exampleOutput: "Agent Neo: follow the white rabbit.",
    notes: "Two variables are embedded in one template literal. The result is a single assembled string — the backtick format makes the structure immediately readable.",
    keyPoints: [
      "Use `const` when the value should never change.",
      "Template literals use backticks, not quotes.",
      "`${variable}` injects the variable's value into the string.",
      "`console.log()` outputs the string to the terminal.",
    ],
  },

  "mx-js-02": {
    intro: "Tank is managing the crew manifest for the Nebuchadnezzar. When a new operative is freed from the Matrix and brought aboard, they're added to the list. Tank needs the headcount at all times.",
    concept: "Arrays store ordered collections of values. `.push()` appends a new item to the end. `.length` gives the total count. These two work together for any growing list.",
    example: `const crew = ["Morpheus", "Trinity", "Tank"];
crew.push("Dozer");
console.log(crew.length);`,
    exampleOutput: "4",
    notes: "After pushing `\"Dozer\"`, the array holds four names. `.length` reflects this immediately — it's always up-to-date.",
    keyPoints: [
      "Array literals: `[\"a\", \"b\"]` with square brackets.",
      "`.push(item)` appends to the end and modifies the array in place.",
      "`.length` is a read-only property that updates automatically.",
      "First item: `array[0]`; last item: `array[array.length - 1]`.",
    ],
  },

  "mx-js-03": {
    intro: "Bullet time is a precise dilation of perception — the faster the dodge, the slower the bullets appear. Morpheus needs a clean function to calculate the effective dodge time given a base speed factor.",
    concept: "Functions encapsulate reusable logic. You define the calculation once using parameters, and call the function whenever you need a result. The `return` statement sends the value back to the caller.",
    example: `function dilationFactor(speed) {
  return speed * 0.3;
}

console.log(dilationFactor(10));`,
    exampleOutput: "3",
    notes: "`dilationFactor` takes one parameter and returns the product. Calling it with `10` plugs that value in for `speed` and returns `10 * 0.3 = 3`.",
    keyPoints: [
      "Function declaration: `function name(param) { return expr; }`.",
      "The parameter is a local variable that takes the value of the argument.",
      "`return` exits and delivers the result.",
      "Call the function with `name(argument)` and it runs fresh each time.",
    ],
  },

  "mx-js-04": {
    intro: "The Agents aren't human — they're programs. Each one has a profile: a designation, their threat level, and whether they can be dodged. Smith's record needs to be updated in the field.",
    concept: "Objects store structured data as key-value pairs. Dot notation reads and writes properties — you can add new properties to an existing object simply by assigning to a new key name.",
    example: `const agent = {
  designation: "Smith",
  threatLevel: 10,
  canDuplicate: false
};
agent.canDuplicate = true;
console.log(agent.designation);
console.log(agent.canDuplicate);`,
    exampleOutput: "Smith\ntrue",
    notes: "`agent.canDuplicate = true` updates an existing property — from `false` to `true`. Dot notation works the same way whether you're reading or writing.",
    keyPoints: [
      "Object literals: `{ key: value }` pairs in curly braces.",
      "Read: `agent.designation`; Write: `agent.canDuplicate = true`.",
      "You can update or add properties at any time after creation.",
      "Properties can hold any type: strings, numbers, booleans, arrays, other objects.",
    ],
  },

  "mx-js-05": {
    intro: "Not everyone who's been unplugged can be trusted with a mission. Tank filters the pool of freed minds down to those who are confirmed ready — the others stay in the holding queue.",
    concept: "`.filter()` produces a new array of only the elements that pass your test. The original array is preserved. The result is a clean subset ready for the next operation.",
    example: `const operatives = [
  { name: "Morpheus", ready: true },
  { name: "Switch", ready: false },
  { name: "Apoc", ready: true },
  { name: "Mouse", ready: false },
  { name: "Trinity", ready: true },
];

const deployed = operatives.filter(op => op.ready);
console.log(deployed.length);`,
    exampleOutput: "3",
    notes: "The callback `op => op.ready` returns the boolean value of `ready` for each operative. Morpheus, Apoc, and Trinity pass — `deployed` holds 3 elements.",
    keyPoints: [
      "`.filter()` leaves the original array unchanged.",
      "The callback runs once per element; return `true` to include, `false` to exclude.",
      "A boolean property can be used directly as the test: `op.ready` equals `op.ready === true`.",
      "Chain `.length` right after: `array.filter(...).length` counts the results.",
    ],
  },

  // ─── Rick and Morty ───────────────────────────────────────────────────────

  "rm-js-01": {
    intro: "Morty has to fill out the interdimensional travel log before Rick will let him touch the portal gun. Every entry needs a destination and a timestamp assembled into a single readable string.",
    concept: "Variables label values so you can reference them by name. Template literals let you assemble those variables into a complete string in one readable line using backticks and `${}`.",
    example: `const destination = "Dimension C-137";
const purpose = "retrieval mission";
const entry = \`Logged: \${destination} — \${purpose}.\`;
console.log(entry);`,
    exampleOutput: "Logged: Dimension C-137 — retrieval mission.",
    notes: "Both variables appear exactly where they're needed in the sentence. Template literals handle the spacing and punctuation around them — you just place `${}` where each value goes.",
    keyPoints: [
      "`const` declares a variable that won't be reassigned.",
      "Template literals use backticks, not regular quotes.",
      "`${variable}` injects the variable's current value.",
      "Any JavaScript expression is valid inside `${}`, not just variable names.",
    ],
  },

  "rm-js-02": {
    intro: "The Council of Ricks keeps a running roster. When a new Rick variant joins — or is forcibly recruited — their designation gets pushed onto the list. The council secretary needs a live count.",
    concept: "Arrays are ordered lists of values. `.push()` adds an item to the end. `.length` gives you the current count. These primitives power almost every list-management task in JavaScript.",
    example: `const council = ["Rick C-137", "Doofus Rick", "Evil Rick"];
council.push("Rick D-99");
console.log(council.length);`,
    exampleOutput: "4",
    notes: "After the push the array has four entries. `.length` is always one more than the last valid index.",
    keyPoints: [
      "Array literal syntax: `[\"a\", \"b\", \"c\"]`.",
      "`.push(value)` appends and returns the new length.",
      "`.length` auto-updates — no manual counting needed.",
      "Indexes start at 0: `council[0]` is `\"Rick C-137\"`.",
    ],
  },

  "rm-js-03": {
    intro: "The portal gun's power cells discharge at a fixed rate relative to the number of jumps. Rick needs a function that takes the jump count and spits out the exact charge remaining — he can't be caught in a dead dimension.",
    concept: "Functions encapsulate a calculation behind a name. Define it once with a parameter; call it with different arguments to get different results. The `return` statement delivers the computed value back to the caller.",
    example: `function chargeRemaining(jumps) {
  return 100 - jumps * 8;
}

console.log(chargeRemaining(5));`,
    exampleOutput: "60",
    notes: "`chargeRemaining(5)` substitutes `5` for `jumps`, computes `100 - 40`, and returns `60`. The formula is defined once and works for any number of jumps.",
    keyPoints: [
      "Function syntax: `function name(param) { return expression; }`.",
      "The parameter holds the argument's value inside the function body.",
      "`return` exits the function and delivers the result.",
      "Mathematical operators work in return expressions: `+`, `-`, `*`, `/`.",
    ],
  },

  "rm-js-04": {
    intro: "Every dimension Rick visits gets an entry in the interdimensional passport — a small object holding the dimension ID, stability rating, and whether Rick has been banned. The latest entry needs a `visited` flag added.",
    concept: "Objects bundle multiple properties under a single name. You access and update them with dot notation. New properties can be added to any object at any time — just assign to a new key.",
    example: `const passport = {
  dimensionId: "J-22",
  stabilityRating: 8,
  banned: false
};
passport.visited = true;
console.log(passport.dimensionId);
console.log(passport.visited);`,
    exampleOutput: "J-22\ntrue",
    notes: "`passport.visited = true` creates the `visited` property on the fly. Object properties are dynamic in JavaScript — add or change them whenever needed.",
    keyPoints: [
      "Object literals: `{ key: value }` in curly braces.",
      "Dot notation reads: `passport.dimensionId`.",
      "Dot notation writes and adds: `passport.visited = true`.",
      "Property types are unrestricted — mix strings, numbers, and booleans freely.",
    ],
  },

  "rm-js-05": {
    intro: "Rick won't risk a jump to an unstable dimension. The scanner returns a full list of nearby dimensions, but he only wants the ones marked `safe: true` before he commits to a portal.",
    concept: "`.filter()` sweeps an array and returns only the elements where your callback returns `true`. It's non-destructive — the original list is preserved, and you get back a new, filtered array.",
    example: `const options = [
  { id: "C-137", safe: true },
  { id: "K-22", safe: false },
  { id: "M-99", safe: true },
  { id: "Z-01", safe: false },
];

const safeOptions = options.filter(d => d.safe);
console.log(safeOptions.length);`,
    exampleOutput: "2",
    notes: "`d => d.safe` returns the boolean value of `safe` for each dimension. C-137 and M-99 pass; K-22 and Z-01 are dropped.",
    keyPoints: [
      "`.filter()` never modifies the source array.",
      "The callback runs once per element — return truthy to keep, falsy to drop.",
      "Boolean properties can be used directly as the test expression.",
      "Arrow function shorthand: `d => d.safe` is `function(d) { return d.safe; }`.",
    ],
  },

  // ─── Squid Game ───────────────────────────────────────────────────────────

  "sg-js-01": {
    intro: "The Front Man logs every player who enters the game. Each registration record combines the player's number and their alias into a single formatted string — the system doesn't use names, only designations.",
    concept: "Variables hold values your code will reference later. Template literals let you slot those values into a human-readable string without messy string joining — use backticks and `${variable}` for clean, readable output.",
    example: `const playerNumber = 456;
const alias = "Seong Gi-hun";
const registration = \`Player \${playerNumber}: \${alias} — registered.\`;
console.log(registration);`,
    exampleOutput: "Player 456: Seong Gi-hun — registered.",
    notes: "Even though `playerNumber` is a number, template literals convert it to a string automatically when it's embedded in `${}`.",
    keyPoints: [
      "`const` creates a variable you won't reassign.",
      "Template literals use backticks — they can span multiple lines too.",
      "`${expression}` converts the expression to a string and inserts it.",
      "Numbers inside `${}` are automatically stringified — no manual conversion needed.",
    ],
  },

  "sg-js-02": {
    intro: "The marbles round pairs players together. Each round's roster starts with a few players and grows as more pairs are assigned. The staff need to know the total count at the end of each assignment cycle.",
    concept: "Arrays track sequences of values. `.push()` appends to the end. `.length` counts items. These two operations cover almost all basic list-maintenance patterns in JavaScript.",
    example: `const roundPlayers = ["001", "067", "101"];
roundPlayers.push("218");
console.log(roundPlayers.length);`,
    exampleOutput: "4",
    notes: "The array starts with three player numbers. After pushing `\"218\"`, the count rises to four. `.length` always gives the live element count.",
    keyPoints: [
      "Arrays: `[value, value, ...]` — ordered, zero-indexed.",
      "`.push(value)` mutates the array, adding to the end.",
      "`.length` is a live property — no function call needed.",
      "The last element: `arr[arr.length - 1]`.",
    ],
  },

  "sg-js-03": {
    intro: "Every player who is eliminated adds their entry fee to the prize pool. The front-runner's team needs a clean function to calculate how much the pool has grown based on the number of eliminations so far.",
    concept: "Functions wrap a calculation behind a reusable name. Pass in different numbers each time you call the function to get different results without rewriting the logic.",
    example: `function prizePool(eliminations) {
  return eliminations * 100000000;
}

console.log(prizePool(10));`,
    exampleOutput: "1000000000",
    notes: "`prizePool(10)` fills in `10` for the `eliminations` parameter and returns `10 * 100000000 = 1000000000`. One definition, reusable for any elimination count.",
    keyPoints: [
      "`function name(param) { return expr; }` is the basic declaration form.",
      "The argument replaces the parameter inside the function body.",
      "`return` sends the result back to the call site.",
      "Functions can call other functions or use any JavaScript expression in the return.",
    ],
  },

  "sg-js-04": {
    intro: "Guards are assigned to a shape: triangle, circle, or square. Each guard's record holds their shape designation and current post. The duty roster needs to track whether they're currently on active patrol.",
    concept: "Objects model real-world records by pairing descriptive key names with their values. New properties can be added to any existing object simply by assigning to a key that doesn't yet exist.",
    example: `const guard = {
  shape: "Triangle",
  post: "Game Area B",
  rank: 2
};
guard.onPatrol = true;
console.log(guard.shape);
console.log(guard.onPatrol);`,
    exampleOutput: "Triangle\ntrue",
    notes: "`guard.onPatrol = true` creates the property `onPatrol` on the existing object. JavaScript objects grow dynamically — you don't need to declare all properties up front.",
    keyPoints: [
      "Object literals use curly braces with `key: value` pairs.",
      "Dot notation reads properties: `guard.shape`.",
      "Dot notation writes new properties: `guard.onPatrol = true`.",
      "Existing properties can also be updated: `guard.rank = 3` overwrites the old value.",
    ],
  },

  "sg-js-05": {
    intro: "The glass bridge has claimed most players. The Front Man needs to identify how many made it across — pulling only the survivors from the full player list before announcing the final standings.",
    concept: "`.filter()` generates a new array from an existing one, keeping only the elements where your callback returns a truthy value. The source array is never modified.",
    example: `const players = [
  { number: "067", survived: true },
  { number: "101", survived: false },
  { number: "218", survived: false },
  { number: "456", survived: true },
  { number: "001", survived: true },
];

const survivors = players.filter(p => p.survived);
console.log(survivors.length);`,
    exampleOutput: "3",
    notes: "Players 067, 456, and 001 have `survived: true`, so they pass the filter. The other two are dropped. `survivors.length` is `3`.",
    keyPoints: [
      "`.filter()` returns a new array; the original is unchanged.",
      "The callback receives one element per call; `true` keeps it, `false` drops it.",
      "Boolean property shorthand: `p.survived` is equivalent to `p.survived === true`.",
      "`.filter().length` is a common pattern to count how many items pass a test.",
    ],
  },
};
