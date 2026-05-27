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

  // ─── Arrested Development ─────────────────────────────────────────────────

  "ad-js-01": {
    intro: "Tobias Fünke is crafting his new business card. He needs to combine his dual qualifications — analyst and therapist — into one professional-looking string. Template literals make the merge seamless.",
    concept: "Template literals let you embed variable values directly in a string using backticks and `${}`. No manual concatenation, no `+` operators everywhere.",
    example: `const title = "Analrapist";
const name = "Tobias Fünke";
const card = \`\${name} — \${title}\`;
console.log(card);`,
    exampleOutput: "Tobias Fünke — Analrapist",
    notes: "The backtick string interpolates both variables. The result is one clean string without explicit concatenation.",
    keyPoints: [
      "Backtick strings (template literals) are different from single/double-quoted strings.",
      "`${}` evaluates the expression inside and inserts the result.",
      "You can embed any expression, not just variable names: `${1 + 2}` → `'3'`.",
      "`console.log()` prints any value to the terminal.",
    ],
  },

  "ad-js-02": {
    intro: "The Bluth Company has tried — and mostly failed — at dozens of ventures. George Michael is tasked with building an accurate list and logging how many schemes are currently active.",
    concept: "Arrays store ordered lists of values. `.push()` adds a new item to the end of the array. `.length` tells you how many items the array currently holds.",
    example: `const ventures = ["banana stand", "housing development"];
ventures.push("yacht");
console.log(ventures.length);`,
    exampleOutput: "3",
    notes: "`.push()` mutates the original array. After pushing `'yacht'` onto the two-item array, `.length` returns `3`.",
    keyPoints: [
      "Arrays are created with square brackets: `[item1, item2]`.",
      "`.push(value)` appends to the end of the array.",
      "`.length` returns the current number of items.",
      "Array indexes are zero-based: `ventures[0]` is `'banana stand'`.",
    ],
  },

  "ad-js-03": {
    intro: "Michael shows Ann to his father. George Sr. squints, pauses, and delivers a legendary one-word response. A ternary nails the logic: if she's notable, acknowledge her; otherwise — well — 'Her?'",
    concept: "The ternary operator `condition ? valueIfTrue : valueIfFalse` is a compact single-expression alternative to `if/else`. It evaluates to one of two values based on the condition.",
    example: `const notable = false;
const reaction = notable ? "She's lovely!" : "Her?";
console.log(reaction);`,
    exampleOutput: "Her?",
    notes: "`notable` is `false`, so the ternary returns the second value. Ternaries are expressions — they can be assigned to a variable or passed directly to a function.",
    keyPoints: [
      "Syntax: `condition ? trueValue : falseValue`.",
      "The ternary is an expression, not a statement — it returns a value.",
      "Use for simple two-branch logic; prefer `if/else` for complex decisions.",
      "Both branches must be expressions (not blocks).",
    ],
  },

  "ad-js-04": {
    intro: "Lucille keeps a running log of Buster's achievements — one object per entry. Objects let her store all the relevant details about an event in one structured record.",
    concept: "An object is a collection of key-value pairs. You access values with dot notation (`obj.key`) or bracket notation (`obj['key']`). Objects group related data together.",
    example: `const event = {
  person: "Buster",
  achievement: "joined Army",
  year: 2003,
};
console.log(event.person);
console.log(event.achievement);`,
    exampleOutput: "Buster\njoined Army",
    notes: "Each key is a property name; each value can be any type. Dot notation is the most readable way to access a known property.",
    keyPoints: [
      "Objects use curly braces `{}` with `key: value` pairs separated by commas.",
      "Dot notation: `obj.key`. Bracket notation: `obj['key']`.",
      "Values can be strings, numbers, booleans, arrays, or other objects.",
      "Add a new property any time: `obj.newKey = value`.",
    ],
  },

  "ad-js-05": {
    intro: "Michael is auditing the company books. Most of Bluth's ventures are money-losers. He uses `.filter()` to pull only the ones actually turning a profit — so he can tell his father something positive for once.",
    concept: "`.filter()` creates a new array containing only the elements where the callback function returns `true`. The original array is unchanged.",
    example: `const ventures = [
  { name: "banana stand", profitable: true },
  { name: "housing dev",  profitable: false },
  { name: "ice cream",    profitable: true },
];
const winners = ventures.filter(v => v.profitable);
console.log(winners.length);`,
    exampleOutput: "2",
    notes: "Two ventures have `profitable: true`, so `.filter()` returns an array of length `2`. The failing housing development is excluded.",
    keyPoints: [
      "`.filter()` returns a new array; the original is never modified.",
      "The callback runs once per element; returning `true` keeps it.",
      "Arrow function shorthand: `v => v.profitable` returns the boolean property.",
      "`.filter().length` counts how many items pass the test.",
    ],
  },

  // ─── Barbie ───────────────────────────────────────────────────────────────

  "ba-js-01": {
    intro: "Every Barbie has a name and a current career. She introduces herself differently at every event. Template literals let her generate a personalised greeting string on the fly.",
    concept: "Template literals use backtick strings and `${}` to embed variable values directly. They're cleaner than string concatenation for building sentences from parts.",
    example: `const name = "Barbie";
const career = "Astronaut";
const greeting = \`Hi, I'm \${name} the \${career}!\`;
console.log(greeting);`,
    exampleOutput: "Hi, I'm Barbie the Astronaut!",
    notes: "Both variables are injected into the template literal at the `${}` positions. The backtick wraps the whole string.",
    keyPoints: [
      "Use backticks (`) for template literals — not single or double quotes.",
      "`${}` evaluates and inserts the expression at that position.",
      "Readable alternative to: `\"Hi, I'm \" + name + \" the \" + career + \"!\"`.",
      "`console.log()` prints to the terminal.",
    ],
  },

  "ba-js-02": {
    intro: "Barbieland is crowded with Kens. There's Regular Ken, Cowboy Ken, Lawyer Ken… and now they've added a new one. The list needs to stay current — and Barbie always needs the head count.",
    concept: "Arrays store ordered lists. `.push()` adds an element to the end. `.length` returns how many items are currently in the array.",
    example: `const kens = ["Regular Ken", "Cowboy Ken"];
kens.push("Lawyer Ken");
console.log(kens.length);`,
    exampleOutput: "3",
    notes: "`.push()` modifies the original array. After adding `'Lawyer Ken'`, the array has 3 items.",
    keyPoints: [
      "Create an array: `const arr = [a, b, c]`.",
      "`.push(val)` appends `val` to the end.",
      "`.length` counts current items.",
      "Index zero-based: `kens[0]` → `'Regular Ken'`.",
    ],
  },

  "ba-js-03": {
    intro: "Ken is trying very hard to be enough. Barbie uses a ternary to give him an honest assessment — is he truly Kenough, or still a work in progress?",
    concept: "A ternary operator returns one of two values based on a boolean condition: `condition ? trueValue : falseValue`. It's ideal for concise two-branch logic.",
    example: `const beachSkills = 9;
const result = beachSkills >= 8 ? "Kenough!" : "Keep trying, Ken.";
console.log(result);`,
    exampleOutput: "Kenough!",
    notes: "`beachSkills` is 9, which is ≥ 8, so the ternary evaluates to the first branch. The result is stored and printed.",
    keyPoints: [
      "Ternary syntax: `condition ? valueIfTrue : valueIfFalse`.",
      "Returns a value — can be assigned, logged, or passed directly.",
      "Good for short two-option decisions.",
      "Avoid nesting ternaries — use `if/else` for complex logic.",
    ],
  },

  "ba-js-04": {
    intro: "Barbie's Dream House is famous. Ken insists on calling it the Mojo Dojo Casa House. Either way, it's an object — all the key details bundled into one structured record.",
    concept: "Objects store named values (properties) as key-value pairs. Dot notation accesses a property by name. Objects are great for grouping related data about a single thing.",
    example: `const dreamHouse = {
  location: "Barbieland",
  floors: 3,
  hasPool: true,
};
console.log(dreamHouse.location);
console.log(dreamHouse.floors);`,
    exampleOutput: "Barbieland\n3",
    notes: "Each property is accessed with dot notation. `dreamHouse.location` returns `'Barbieland'` and `dreamHouse.floors` returns `3`.",
    keyPoints: [
      "Object literal: `{ key: value, key2: value2 }`.",
      "Access with dot notation: `obj.key`.",
      "Access with bracket notation: `obj['key']` — useful when the key is in a variable.",
      "Properties can hold any type: string, number, boolean, array, or another object.",
    ],
  },

  "ba-js-05": {
    intro: "Some Barbies are going through it — questioning everything, feeling weird, experiencing the existential crisis. Barbie filters the full roster to find who needs a pep talk before the day's activities.",
    concept: "`.filter()` returns a new array with only the elements for which the callback returns `true`. It's the standard way to select a subset of an array without modifying the original.",
    example: `const barbies = [
  { name: "Doctor Barbie",  crisis: false },
  { name: "Weird Barbie",   crisis: true  },
  { name: "President Barbie", crisis: false },
  { name: "Regular Barbie", crisis: true  },
];
const inCrisis = barbies.filter(b => b.crisis);
console.log(inCrisis.length);`,
    exampleOutput: "2",
    notes: "Two Barbies have `crisis: true`. `.filter()` returns a new array with just those two; the original `barbies` array is unchanged.",
    keyPoints: [
      "`.filter(callback)` keeps elements where `callback` returns truthy.",
      "The original array is never modified.",
      "Arrow syntax: `b => b.crisis` — implicitly returns the value of the property.",
      "Combine `.filter()` and `.length` to count matches.",
    ],
  },

  // ─── Sex and the City ─────────────────────────────────────────────────────

  "sc-js-01": {
    intro: "Carrie Bradshaw opens every column the same way: a rhetorical question, the city as backdrop, her voice unmistakable. She builds the opener dynamically so the theme can change each week.",
    concept: "Template literals use backticks and `${}` to build dynamic strings by embedding variable values directly — no messy concatenation required.",
    example: `const city = "New York";
const question = "can you ever really know someone?";
const opener = \`In \${city}, I couldn't help but wonder — \${question}\`;
console.log(opener);`,
    exampleOutput: "In New York, I couldn't help but wonder — can you ever really know someone?",
    notes: "Both `city` and `question` are injected at their `${}` positions. The backtick string composes the full opener in a single readable line.",
    keyPoints: [
      "Backtick strings are template literals — they support `${}` interpolation.",
      "Any expression can go inside `${}`, not just variable names.",
      "Cleaner than `\"In \" + city + \", I couldn't help but wonder — \" + question`.",
      "`console.log()` prints the result to the terminal.",
    ],
  },

  "sc-js-02": {
    intro: "Brunch plans change constantly. Charlotte cancelled, Miranda is running late, and Samantha just confirmed. Carrie keeps the list current and always knows how many are actually coming.",
    concept: "Arrays hold ordered lists of values. `.push()` appends a new item to the end. `.length` returns how many items are currently in the array.",
    example: `const brunch = ["Carrie", "Miranda", "Samantha"];
brunch.push("Charlotte");
console.log(brunch.length);`,
    exampleOutput: "4",
    notes: "After pushing Charlotte, the array has four items. `.push()` mutates the original array in place.",
    keyPoints: [
      "Array literal: `[val1, val2, ...]`.",
      "`.push(val)` adds to the end; `.pop()` removes from the end.",
      "`.length` counts current elements.",
      "Index zero-based: `brunch[0]` → `'Carrie'`.",
    ],
  },

  "sc-js-03": {
    intro: "Carrie goes on a first date. Before she calls Big, she runs a quick mental check: did it go well enough to warrant a second? A ternary makes the decision in one line.",
    concept: "The ternary operator `condition ? valueIfTrue : valueIfFalse` condenses a two-branch decision into a single expression. It evaluates to one value or the other based on the condition.",
    example: `const vibe = "sparks";
const plan = vibe === "sparks" ? "Call him." : "Delete his number.";
console.log(plan);`,
    exampleOutput: "Call him.",
    notes: "`vibe` equals `'sparks'`, so the condition is `true` and the result is `'Call him.'`.",
    keyPoints: [
      "Ternary: `cond ? a : b` returns `a` if `cond` is truthy, else `b`.",
      "Strict equality `===` checks value AND type.",
      "Assign the result to a variable or pass directly to `console.log()`.",
      "Use for simple two-option logic; `if/else` for anything more complex.",
    ],
  },

  "sc-js-04": {
    intro: "Big. John James Preston. Carrie has a complicated mental file on him — status, number of years wasted, most recent heartbreak. She organises it all into a JavaScript object.",
    concept: "Objects group related data as key-value pairs. Dot notation reads a property's value. You can store any type as a property value, including numbers and booleans.",
    example: `const ex = {
  name: "Big",
  yearsWasted: 6,
  married: false,
};
console.log(ex.name);
console.log(ex.yearsWasted);`,
    exampleOutput: "Big\n6",
    notes: "Each property is a named field. `ex.name` returns `'Big'` and `ex.yearsWasted` returns the number `6`.",
    keyPoints: [
      "Object literal: `{ key: value }` — curly braces, key-value pairs, commas between.",
      "Dot notation: `obj.key` reads the property.",
      "Bracket notation: `obj['key']` — useful when the key is stored in a variable.",
      "Objects can mix types: strings, numbers, booleans, arrays, other objects.",
    ],
  },

  "sc-js-05": {
    intro: "Samantha is curating the guest list for her dinner party — eligible bachelors only. She runs the full list through a filter to extract only the men who meet her very specific criteria.",
    concept: "`.filter()` returns a new array containing only elements where the callback returns truthy. The original array is left unchanged.",
    example: `const men = [
  { name: "Richard", eligible: true  },
  { name: "Jerry",   eligible: false },
  { name: "James",   eligible: true  },
];
const shortList = men.filter(m => m.eligible);
console.log(shortList.length);`,
    exampleOutput: "2",
    notes: "Richard and James have `eligible: true`. `.filter()` returns an array of two; Jerry is excluded.",
    keyPoints: [
      "`.filter(fn)` passes each element to `fn`; keeps those where `fn` returns truthy.",
      "The source array is unchanged.",
      "Arrow shorthand: `m => m.eligible` implicitly returns the boolean property.",
      "`shortList.length` counts how many passed the filter.",
    ],
  },

  // ─── Sopranos ─────────────────────────────────────────────────────────────

  "sp-js-01": {
    intro: "Christopher is writing his screenplay. He's got the title, his name as author, and a concept pitch — but he needs to compose it into a single formatted string for the title page.",
    concept: "Template literals use backticks and `${}` to embed variables directly into strings. They're far cleaner than concatenation when building multi-part strings.",
    example: `const title = "Cleaver";
const author = "Christopher Moltisanti";
const logline = \`"\${title}" — written by \${author}\`;
console.log(logline);`,
    exampleOutput: `"Cleaver" — written by Christopher Moltisanti`,
    notes: "Both variables are interpolated at their `${}` positions. The result is a properly formatted screenplay title-page line.",
    keyPoints: [
      "Template literals: backtick strings with `${}` interpolation.",
      "Escape literal backticks inside a template literal with `\\``.",
      "Any expression is valid inside `${}`: variables, math, function calls.",
      "`console.log()` prints to the terminal.",
    ],
  },

  "sp-js-02": {
    intro: "Silvio manages the talent roster at the Bada Bing. There's always turnover. He keeps a JavaScript array current and reports the count to Tony each week.",
    concept: "Arrays store ordered collections. `.push()` appends a new element to the end. `.length` returns the current item count.",
    example: `const performers = ["Tracey", "Marie", "Lorraine"];
performers.push("Deanna");
console.log(performers.length);`,
    exampleOutput: "4",
    notes: "After pushing `'Deanna'`, the array has four items. `.push()` mutates the original array.",
    keyPoints: [
      "Create an array: `const arr = [a, b, c]`.",
      "`.push(val)` appends to the end.",
      "`.length` counts elements.",
      "Zero-indexed: `performers[0]` → `'Tracey'`.",
    ],
  },

  "sp-js-03": {
    intro: "Tony reviews each crew member's earnings report. Anyone bringing in over $10k is a 'earner'; anyone below is 'dead weight'. The ternary makes the classification instant.",
    concept: "A ternary operator returns one of two values based on a condition. It's a compact, expression-level alternative to `if/else`.",
    example: `const weekly = 12000;
const status = weekly >= 10000 ? "earner" : "dead weight";
console.log(status);`,
    exampleOutput: "earner",
    notes: "`weekly` is 12000, which is ≥ 10000, so the result is `'earner'`. The ternary evaluates both branches but only returns one.",
    keyPoints: [
      "Syntax: `condition ? valueIfTrue : valueIfFalse`.",
      "Returns a value — assign it or use it directly.",
      "Both branches must be expressions.",
      "Comparison operators: `>`, `<`, `>=`, `<=`, `===`, `!==`.",
    ],
  },

  "sp-js-04": {
    intro: "After the ducks left his pool, Tony had them documented. He keeps a JavaScript object for each incident — species observed, number of ducks, whether the pool was damaged.",
    concept: "Objects group related data as key-value pairs. Dot notation accesses property values. Objects can hold mixed types across their properties.",
    example: `const duckLog = {
  species: "mallard",
  count: 4,
  poolDamaged: false,
};
console.log(duckLog.species);
console.log(duckLog.count);`,
    exampleOutput: "mallard\n4",
    notes: "Dot notation retrieves each property. `duckLog.species` returns `'mallard'`; `duckLog.count` returns the number `4`.",
    keyPoints: [
      "Object literal: `{ key: value, ... }`.",
      "Dot notation: `obj.key`.",
      "Bracket notation: `obj['key']` — useful for dynamic key names.",
      "Objects can hold any type as a value.",
    ],
  },

  "sp-js-05": {
    intro: "Tony's consigliere Silvio is reviewing the family's operations. Some make money; some are liabilities. He filters the list down to only the profitable ones before the quarterly sit-down.",
    concept: "`.filter()` returns a new array of only the elements where the callback returns truthy. The original array is left untouched.",
    example: `const ops = [
  { name: "waste mgmt",  profitable: true  },
  { name: "sports book", profitable: true  },
  { name: "restaurant",  profitable: false },
];
const moneyMakers = ops.filter(o => o.profitable);
console.log(moneyMakers.length);`,
    exampleOutput: "2",
    notes: "Two operations are profitable. `.filter()` returns those two; the restaurant is excluded.",
    keyPoints: [
      "`.filter(fn)` keeps elements where `fn` returns truthy.",
      "Original array unchanged.",
      "Arrow shorthand: `o => o.profitable` returns the boolean property.",
      "`.filter().length` is a common pattern to count matches.",
    ],
  },

  // ─── Lesson 06 — String Methods ───────────────────────────────────────────

  "st-js-06": {
    intro: "Eleven's signal comes through garbled. Mike uses JavaScript string methods to clean it up — uppercasing the codename, checking whether 'upside' appears, and slicing out just the location.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const signal = "eleven from upside-down";
console.log(signal.toUpperCase());
console.log(signal.includes("upside"));
console.log(signal.slice(0, 6));`,
    exampleOutput: "ELEVEN FROM UPSIDE-DOWN\ntrue\neleven",
    notes: "`.toUpperCase()` changes every character. `.includes()` searches anywhere in the string. `.slice(0, 6)` grabs characters at indices 0 through 5.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` do not mutate; they return a new string.",
      "`.includes(str)` returns a boolean — no index needed.",
      "`.slice(start, end)` — `end` is exclusive; `.slice(0, 6)` gives 6 characters.",
      "Chain methods: `str.trim().toLowerCase()` cleans then lowercases.",
    ],
  },

  "sv-js-06": {
    intro: "The MDR team labels each data file with a mixed-case code. Mark S. needs to standardise them — uppercase for display, a quick check that 'refined' appears, and a short ID slice for the log.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const fileCode = "refined-mdr-batch-04";
console.log(fileCode.toUpperCase());
console.log(fileCode.includes("refined"));
console.log(fileCode.slice(0, 7));`,
    exampleOutput: "REFINED-MDR-BATCH-04\ntrue\nrefined",
    notes: "`.toUpperCase()` capitalises every character. `.includes()` returns `true` because `'refined'` is at the start. `.slice(0, 7)` extracts the first 7 characters.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` return new strings.",
      "`.includes(str)` returns a boolean.",
      "`.slice(start, end)` — `end` is exclusive.",
      "Chain methods: `str.trim().toLowerCase()`.",
    ],
  },

  "bb-js-06": {
    intro: "Walt labels every batch with a chemical shorthand. Jesse formats the label for the distribution network — uppercase for the product name, checking that 'blue' is in the description, and slicing the batch prefix.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const batchLabel = "blue-sky-99pct";
console.log(batchLabel.toUpperCase());
console.log(batchLabel.includes("blue"));
console.log(batchLabel.slice(0, 8));`,
    exampleOutput: "BLUE-SKY-99PCT\ntrue\nblue-sky",
    notes: "`.toUpperCase()` capitalises all characters. `.includes('blue')` returns true. `.slice(0, 8)` gives the first 8 characters.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` return new strings.",
      "`.includes(str)` is case-sensitive.",
      "`.slice(start, end)` — `end` is exclusive.",
      "`.replace(old, new)` swaps a substring once; `.replaceAll()` swaps all.",
    ],
  },

  "to-js-06": {
    intro: "Pam is cleaning up the employee directory. She uppercases names for the company bulletin, checks whether 'Scranton' appears in addresses, and slices each employee code to its department prefix.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const employee = "jim-halpert-scranton";
console.log(employee.toUpperCase());
console.log(employee.includes("scranton"));
console.log(employee.slice(0, 3));`,
    exampleOutput: "JIM-HALPERT-SCRANTON\ntrue\njim",
    notes: "`.toUpperCase()` capitalises everything. `.includes('scranton')` finds the branch. `.slice(0, 3)` returns the first name abbreviation.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` return new strings.",
      "`.includes(str)` returns a boolean.",
      "`.slice(start, end)` — `end` is exclusive.",
      "`.trim()` removes leading and trailing whitespace.",
    ],
  },

  "got-js-06": {
    intro: "The ravens arrive with mixed-case messages from every house. Tyrion standardises the format — uppercasing house names for the registry, checking for the word 'Lannister', and extracting the two-letter region code.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const raven = "lannister-golden-tooth";
console.log(raven.toUpperCase());
console.log(raven.includes("lannister"));
console.log(raven.slice(0, 9));`,
    exampleOutput: "LANNISTER-GOLDEN-TOOTH\ntrue\nlannistr",
    notes: "`.toUpperCase()` capitalises the entire string. `.includes('lannister')` returns true. `.slice(0, 9)` grabs the first 9 characters.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` return new strings.",
      "`.includes(str)` is case-sensitive.",
      "`.slice(start, end)` — `end` is exclusive.",
      "`.split('-')` breaks a hyphenated string into an array of parts.",
    ],
  },

  "mx-js-06": {
    intro: "The Matrix assigns every agent a code identifier. Neo intercepts one and uses string methods to verify it's from Sector 7 — uppercasing for display, checking for 'agent', and slicing the sector code.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const agentCode = "agent-smith-sector-7";
console.log(agentCode.toUpperCase());
console.log(agentCode.includes("agent"));
console.log(agentCode.slice(0, 5));`,
    exampleOutput: "AGENT-SMITH-SECTOR-7\ntrue\nagent",
    notes: "`.toUpperCase()` converts every character. `.includes('agent')` returns true. `.slice(0, 5)` extracts `'agent'`.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` return new strings.",
      "`.includes(str)` returns a boolean.",
      "`.slice(start, end)` — `end` is exclusive.",
      "`.indexOf(str)` returns the position of the first match, or -1 if not found.",
    ],
  },

  "rm-js-06": {
    intro: "Rick labels each portal gun cartridge with a dimension code. Morty needs to clean up the labels — uppercase for the inventory system, checking that 'C-137' is in the name, and slicing the dimension prefix.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const cartridge = "c-137-portal-fluid";
console.log(cartridge.toUpperCase());
console.log(cartridge.includes("c-137"));
console.log(cartridge.slice(0, 5));`,
    exampleOutput: "C-137-PORTAL-FLUID\ntrue\nc-137",
    notes: "`.toUpperCase()` capitalises everything. `.includes('c-137')` returns true. `.slice(0, 5)` extracts the dimension code.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` return new strings.",
      "`.includes(str)` is case-sensitive.",
      "`.slice(start, end)` — `end` is exclusive.",
      "`.replace(old, new)` swaps the first occurrence of a substring.",
    ],
  },

  "sg-js-06": {
    intro: "The game organisers format player codes for the main display. Player 456's code needs to be uppercased, verified to include 'player', and trimmed to just the number.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const playerCode = "player-456-gi-hun";
console.log(playerCode.toUpperCase());
console.log(playerCode.includes("player"));
console.log(playerCode.slice(7, 10));`,
    exampleOutput: "PLAYER-456-GI-HUN\ntrue\n456",
    notes: "`.toUpperCase()` capitalises all characters. `.includes('player')` returns true. `.slice(7, 10)` extracts the three-digit player number.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` return new strings.",
      "`.includes(str)` returns a boolean.",
      "`.slice(start, end)` — `end` is exclusive.",
      "`.trim()` removes leading and trailing whitespace.",
    ],
  },

  "ad-js-06": {
    intro: "The Bluth Company's asset names are inconsistently cased. Michael cleans up the ledger — uppercasing each entry for the SEC audit, checking for 'banana', and slicing the asset type.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const asset = "banana-stand-newport";
console.log(asset.toUpperCase());
console.log(asset.includes("banana"));
console.log(asset.slice(0, 6));`,
    exampleOutput: "BANANA-STAND-NEWPORT\ntrue\nbanana",
    notes: "`.toUpperCase()` converts the entire string. `.includes('banana')` returns true. `.slice(0, 6)` extracts `'banana'`.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` return new strings.",
      "`.includes(str)` is case-sensitive.",
      "`.slice(start, end)` — `end` is exclusive.",
      "`.split('-')` breaks a hyphenated string into an array of parts.",
    ],
  },

  "ba-js-06": {
    intro: "Barbie's career titles need formatting for the Barbieland registry. Her current role gets uppercased for official documents, verified to include 'barbie', and sliced to a short code.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const career = "barbie-astronaut-2024";
console.log(career.toUpperCase());
console.log(career.includes("barbie"));
console.log(career.slice(7, 16));`,
    exampleOutput: "BARBIE-ASTRONAUT-2024\ntrue\nastronaut",
    notes: "`.toUpperCase()` uppercases everything. `.includes('barbie')` returns true. `.slice(7, 16)` extracts the career name.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` return new strings.",
      "`.includes(str)` returns a boolean.",
      "`.slice(start, end)` — `end` is exclusive.",
      "`.trim()` removes leading/trailing whitespace.",
    ],
  },

  "sc-js-06": {
    intro: "Carrie's column titles come back from the editor with inconsistent capitalisation. She cleans them with string methods — uppercasing, checking for 'love', and slicing the teaser headline.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const title = "love in new york city";
console.log(title.toUpperCase());
console.log(title.includes("love"));
console.log(title.slice(0, 4));`,
    exampleOutput: "LOVE IN NEW YORK CITY\ntrue\nlove",
    notes: "`.toUpperCase()` capitalises every letter. `.includes('love')` returns true. `.slice(0, 4)` extracts `'love'`.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` return new strings.",
      "`.includes(str)` is case-sensitive.",
      "`.slice(start, end)` — `end` is exclusive.",
      "`.replace(old, new)` swaps the first match; `.replaceAll()` swaps all.",
    ],
  },

  "sp-js-06": {
    intro: "Tony's accountant formats the family business records. Each entry needs uppercasing for the books, a check that 'bada' appears, and a slice of the venue code.",
    concept: "String methods let you inspect and transform text. `.toUpperCase()` converts all letters to caps. `.includes(sub)` returns `true` if the substring is found. `.slice(start, end)` extracts a portion of the string.",
    example: `const venue = "bada-bing-club-nj";
console.log(venue.toUpperCase());
console.log(venue.includes("bada"));
console.log(venue.slice(0, 4));`,
    exampleOutput: "BADA-BING-CLUB-NJ\ntrue\nbada",
    notes: "`.toUpperCase()` converts the entire string. `.includes('bada')` returns true. `.slice(0, 4)` extracts `'bada'`.",
    keyPoints: [
      "`.toUpperCase()` / `.toLowerCase()` return new strings.",
      "`.includes(str)` returns a boolean.",
      "`.slice(start, end)` — `end` is exclusive.",
      "`.trim()` removes surrounding whitespace.",
    ],
  },

  // ─── Lesson 07 — .map() ───────────────────────────────────────────────────

  "st-js-07": {
    intro: "The Party's walkie-talkie signal strengths are stored as raw numbers. Dustin wants to double each reading to normalise for the new antenna — without touching the originals.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const signals = [3, 7, 2, 9];
const boosted = signals.map(s => s * 2);
console.log(boosted);`,
    exampleOutput: "[6, 14, 4, 18]",
    notes: "`.map(s => s * 2)` runs the arrow function on each element and collects the results into a new array of the same length.",
    keyPoints: [
      "`.map(fn)` returns a new array — the original is unchanged.",
      "The callback receives `(element, index, array)` but you usually only need `element`.",
      "The new array has the same length as the original.",
      "Use `.map()` to transform, not to filter — use `.filter()` for that.",
    ],
  },

  "sv-js-07": {
    intro: "Helly R. needs to convert raw MDR numbers into their 'refined' percentage form. She maps the array of raw counts, dividing each by 100 to get a ratio.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const rawCounts = [850, 920, 710];
const ratios = rawCounts.map(n => n / 100);
console.log(ratios);`,
    exampleOutput: "[8.5, 9.2, 7.1]",
    notes: "`.map(n => n / 100)` divides each element by 100 and collects the results into a new array.",
    keyPoints: [
      "`.map(fn)` returns a new array — the original is unchanged.",
      "The callback receives each element in turn.",
      "The resulting array has the same length as the source.",
      "Chain `.map()` with `.filter()` or `.reduce()` for powerful pipelines.",
    ],
  },

  "bb-js-07": {
    intro: "Jesse wants to add a 10% purity surcharge to each batch price. He maps over the prices array and returns the new totals without losing the original data.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const prices = [1000, 2500, 4000];
const withSurcharge = prices.map(p => p * 1.1);
console.log(withSurcharge);`,
    exampleOutput: "[1100, 2750, 4400]",
    notes: "Multiplying by 1.1 adds 10%. Each result goes into the new array at the same index.",
    keyPoints: [
      "`.map(fn)` returns a new array — the original is unchanged.",
      "The callback receives `(element, index, array)`.",
      "The resulting array has the same length as the source.",
      "Works with objects too: `items.map(item => item.name)`.",
    ],
  },

  "to-js-07": {
    intro: "Kevin is calculating the tax on each sale figure before the quarterly report. He maps over the array of sale amounts and returns the tax portion for each.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const sales = [500, 1200, 800];
const taxes = sales.map(s => s * 0.1);
console.log(taxes);`,
    exampleOutput: "[50, 120, 80]",
    notes: "`.map(s => s * 0.1)` computes 10% of each sale. The result is a new array of tax amounts.",
    keyPoints: [
      "`.map(fn)` returns a new array — original unchanged.",
      "Callback receives each element; return the transformed value.",
      "Resulting array has the same length.",
      "`arr.map(obj => obj.field)` extracts one field from each object.",
    ],
  },

  "got-js-07": {
    intro: "The Grand Maester wants a list of all house names in upper case for the royal proclamation. He maps over the houses array and uppercases each name.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const houses = ["stark", "lannister", "targaryen"];
const shouted = houses.map(h => h.toUpperCase());
console.log(shouted);`,
    exampleOutput: '["STARK", "LANNISTER", "TARGARYEN"]',
    notes: "`.map(h => h.toUpperCase())` applies the string method to each element and collects the results.",
    keyPoints: [
      "`.map(fn)` returns a new array — original unchanged.",
      "Works on strings, numbers, and objects alike.",
      "Resulting array is the same length as the source.",
      "Use `.map()` to project values, `.filter()` to remove them.",
    ],
  },

  "mx-js-07": {
    intro: "Tank is normalising the power readings from each Nebuchadnezzar crew member by squaring them. He maps over the raw scores array.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const power = [4, 7, 9, 6];
const squared = power.map(p => p ** 2);
console.log(squared);`,
    exampleOutput: "[16, 49, 81, 36]",
    notes: "`**` is the exponentiation operator. `.map()` applies it to every element, returning a new array of squared values.",
    keyPoints: [
      "`.map(fn)` returns a new array — original unchanged.",
      "`**` is JavaScript's exponentiation operator.",
      "Resulting array has the same length.",
      "Callbacks can call other functions: `.map(x => Math.sqrt(x))`.",
    ],
  },

  "rm-js-07": {
    intro: "Rick maps each dimension ID to its Cronenberg risk level by multiplying by a danger factor. Morty logs the result before they jump.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const risks = [2, 5, 1, 8];
const scaled = risks.map(r => r * 3);
console.log(scaled);`,
    exampleOutput: "[6, 15, 3, 24]",
    notes: "`.map(r => r * 3)` multiplies each risk score by 3. The new array holds the scaled values.",
    keyPoints: [
      "`.map(fn)` returns a new array — original unchanged.",
      "Callback receives each element in order.",
      "Resulting array has the same length.",
      "Chain maps: `arr.map(fn1).map(fn2)`.",
    ],
  },

  "sg-js-07": {
    intro: "The Front Man extracts player numbers from their full code objects. He maps over the players array and returns just the `number` property from each.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const players = [
  { number: 456, name: "Gi-hun" },
  { number: 67,  name: "Sae-byeok" },
  { number: 1,   name: "Oh Il-nam" },
];
const numbers = players.map(p => p.number);
console.log(numbers);`,
    exampleOutput: "[456, 67, 1]",
    notes: "`.map(p => p.number)` extracts the `number` field from each object, returning an array of numbers.",
    keyPoints: [
      "`.map(fn)` returns a new array — original unchanged.",
      "`obj => obj.field` is a common pattern for extracting a property.",
      "Resulting array has the same length.",
      "Works with any property type — strings, numbers, booleans.",
    ],
  },

  "ad-js-07": {
    intro: "Lucille needs the total value of each Bluth asset after a 15% SEC haircut. She maps over the asset values array and applies the reduction.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const assets = [200000, 500000, 150000];
const postHaircut = assets.map(a => a * 0.85);
console.log(postHaircut);`,
    exampleOutput: "[170000, 425000, 127500]",
    notes: "Multiplying by 0.85 applies a 15% reduction. The new array holds the post-haircut values.",
    keyPoints: [
      "`.map(fn)` returns a new array — original unchanged.",
      "Useful for applying the same formula to every item.",
      "Resulting array has the same length.",
      "`.map()` can return any type — not just the same type as the input.",
    ],
  },

  "ba-js-07": {
    intro: "Gloria needs to add the word 'Barbie' as a prefix to each career title for the Barbieland brochure. She maps over the careers array.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const careers = ["Doctor", "Astronaut", "President"];
const branded = careers.map(c => "Barbie " + c);
console.log(branded);`,
    exampleOutput: '["Barbie Doctor", "Barbie Astronaut", "Barbie President"]',
    notes: "String concatenation inside `.map()` prepends `'Barbie '` to every career title.",
    keyPoints: [
      "`.map(fn)` returns a new array — original unchanged.",
      "You can return any expression — including string concatenation.",
      "Resulting array has the same length.",
      "Template literals also work: `c => \\`Barbie \\${c}\\``.",
    ],
  },

  "sc-js-07": {
    intro: "Carrie needs to format her column titles in title-case initials for social media. She maps the words array, uppercasing just the first letter of each.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const words = ["love", "sex", "city"];
const titled = words.map(w => w[0].toUpperCase() + w.slice(1));
console.log(titled);`,
    exampleOutput: '["Love", "Sex", "City"]',
    notes: "`w[0].toUpperCase()` capitalises the first character; `w.slice(1)` appends the rest unchanged.",
    keyPoints: [
      "`.map(fn)` returns a new array — original unchanged.",
      "`str[0]` accesses the first character.",
      "`.slice(1)` returns everything from index 1 onwards.",
      "Resulting array has the same length.",
    ],
  },

  "sp-js-07": {
    intro: "Carmela wants a receipt total with a 20% tip on each item from the restaurant bill. She maps over the item prices and calculates each tip.",
    concept: "`.map()` creates a brand-new array by applying a callback function to every element of the original. The original array is never changed.",
    example: `const items = [40, 25, 60];
const withTip = items.map(i => i * 1.2);
console.log(withTip);`,
    exampleOutput: "[48, 30, 72]",
    notes: "Multiplying by 1.2 adds 20% to each item price. The result is a new array of totals.",
    keyPoints: [
      "`.map(fn)` returns a new array — original unchanged.",
      "The callback receives each element in turn.",
      "Resulting array has the same length.",
      "Use `.reduce()` on the result to get the grand total.",
    ],
  },

  // ─── Lesson 08 — .reduce() ───────────────────────────────────────────────

  "st-js-08": {
    intro: "Dustin tallies all of Eleven's psychic energy readings from a week of experiments. He uses `.reduce()` to sum the array into one final power total.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const readings = [12, 8, 15, 20, 5];
const total = readings.reduce((acc, r) => acc + r, 0);
console.log(total);`,
    exampleOutput: "60",
    notes: "Starting from `0`, each reading is added to the accumulator. After all 5 elements, `acc` is 60.",
    keyPoints: [
      "Signature: `array.reduce((accumulator, current) => ..., initialValue)`.",
      "The `initialValue` (second argument) is the starting point of `acc`.",
      "`.reduce()` returns a single value — not an array.",
      "Can build totals, max values, objects, even strings.",
    ],
  },

  "sv-js-08": {
    intro: "The MDR board wants a single score representing the total 'refined' data across all batches. Irving uses `.reduce()` to sum the batch scores.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const batches = [320, 490, 210, 580];
const total = batches.reduce((acc, b) => acc + b, 0);
console.log(total);`,
    exampleOutput: "1600",
    notes: "Starting at `0`, each batch score is added to `acc`. The final value is the sum of all four batches.",
    keyPoints: [
      "Signature: `array.reduce((acc, cur) => ..., initialValue)`.",
      "Always provide an `initialValue` to avoid surprises on empty arrays.",
      "`.reduce()` returns a single value — not an array.",
      "Works for sums, products, string builds, and more.",
    ],
  },

  "bb-js-08": {
    intro: "Walt needs the total revenue from all of Gus's distribution batches in a single figure for the quarterly review. He reduces the revenue array to one sum.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const revenues = [45000, 62000, 38000, 55000];
const total = revenues.reduce((acc, r) => acc + r, 0);
console.log(total);`,
    exampleOutput: "200000",
    notes: "Each revenue figure is added to the running `acc`. The final value is the total across all batches.",
    keyPoints: [
      "Signature: `array.reduce((acc, cur) => ..., initialValue)`.",
      "The initialValue is usually `0` for sums.",
      "`.reduce()` returns one value — not an array.",
      "Can also build objects: `reduce((obj, item) => ({...obj, [item.id]: item}), {})`.",
    ],
  },

  "to-js-08": {
    intro: "Oscar needs to compute the total annual paper sales for the Scranton branch. He reduces the monthly sales array into one grand total.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const monthlySales = [1200, 980, 1450, 1100, 870];
const annual = monthlySales.reduce((acc, m) => acc + m, 0);
console.log(annual);`,
    exampleOutput: "5600",
    notes: "`.reduce()` starts at 0 and adds each month's sales. After all five months, `acc` equals 5600.",
    keyPoints: [
      "Signature: `array.reduce((acc, cur) => ..., initialValue)`.",
      "Start with `0` for numeric sums.",
      "`.reduce()` returns one value — not an array.",
      "Use `Math.max(acc, cur)` inside to find the maximum instead.",
    ],
  },

  "got-js-08": {
    intro: "The Small Council needs to know the total number of soldiers across all house armies. Tyrion reduces the troop counts into one number.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const armies = [8000, 12000, 5000, 20000];
const total = armies.reduce((acc, a) => acc + a, 0);
console.log(total);`,
    exampleOutput: "45000",
    notes: "Starting at `0`, each army size is added to the accumulator. After four elements, the total is 45,000.",
    keyPoints: [
      "Signature: `array.reduce((acc, cur) => ..., initialValue)`.",
      "Always supply an `initialValue`.",
      "`.reduce()` collapses an array to a single value.",
      "Can multiply instead: `reduce((acc, n) => acc * n, 1)`.",
    ],
  },

  "mx-js-08": {
    intro: "The Oracle calculates the total anomaly energy across all sectors of the Matrix. She uses `.reduce()` to sum the energy readings into one figure.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const energies = [42, 78, 19, 63, 55];
const total = energies.reduce((acc, e) => acc + e, 0);
console.log(total);`,
    exampleOutput: "257",
    notes: "Each energy reading is added to the running accumulator. The final result is the sum of all readings.",
    keyPoints: [
      "Signature: `array.reduce((acc, cur) => ..., initialValue)`.",
      "The `initialValue` prevents errors on empty arrays.",
      "Returns one value — not an array.",
      "Can build complex results: objects, strings, nested structures.",
    ],
  },

  "rm-js-08": {
    intro: "Rick needs the total Megawatts consumed across all his portal gun charges. He reduces the charge array to a single energy total.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const charges = [15, 30, 22, 8, 45];
const totalMW = charges.reduce((acc, c) => acc + c, 0);
console.log(totalMW);`,
    exampleOutput: "120",
    notes: "Each charge is summed into `acc`, starting from 0. The final result is 120 Megawatts.",
    keyPoints: [
      "Signature: `array.reduce((acc, cur) => ..., initialValue)`.",
      "Start with `0` for numeric sums.",
      "`.reduce()` returns one value.",
      "For averages: `total / array.length` after reducing.",
    ],
  },

  "sg-js-08": {
    intro: "The Front Man tallies the total prize pool value from each eliminated player's contribution. He uses `.reduce()` to sum the contributions into the final prize amount.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const contributions = [100000000, 100000000, 100000000];
const pool = contributions.reduce((acc, c) => acc + c, 0);
console.log(pool);`,
    exampleOutput: "300000000",
    notes: "Three equal contributions of 100M each are summed. The prize pool reaches 300 million won.",
    keyPoints: [
      "Signature: `array.reduce((acc, cur) => ..., initialValue)`.",
      "The `initialValue` is the starting value of `acc`.",
      "Returns a single value.",
      "Works for any data type in the accumulator.",
    ],
  },

  "ad-js-08": {
    intro: "Michael needs the total value of all Bluth Company assets to present to the board. He reduces the values array into one final figure — hoping it's enough to cover Lucille's legal fees.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const assetValues = [50000, 120000, 30000, 200000];
const total = assetValues.reduce((acc, v) => acc + v, 0);
console.log(total);`,
    exampleOutput: "400000",
    notes: "Each asset value is added to the running total. The reduce finishes with the sum of all four values.",
    keyPoints: [
      "Signature: `array.reduce((acc, cur) => ..., initialValue)`.",
      "Use `0` as the initialValue for sums.",
      "Returns one value — not an array.",
      "Chain with `.filter()` to sum only qualifying items.",
    ],
  },

  "ba-js-08": {
    intro: "Ken is tallying the total points earned across all Barbie's career challenges. He uses `.reduce()` to sum the scores array into one number.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const scores = [95, 88, 100, 72, 91];
const total = scores.reduce((acc, s) => acc + s, 0);
console.log(total);`,
    exampleOutput: "446",
    notes: "Starting at 0, each score is added to the accumulator. The final sum is 446.",
    keyPoints: [
      "Signature: `array.reduce((acc, cur) => ..., initialValue)`.",
      "Start with `0` for totals.",
      "Returns one value.",
      "Divide by `.length` to get the average.",
    ],
  },

  "sc-js-08": {
    intro: "Samantha tallies the total cost of all the outfits purchased this season. She reduces the price array into a single number for the credit card statement.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const prices = [340, 220, 890, 150];
const total = prices.reduce((acc, p) => acc + p, 0);
console.log(total);`,
    exampleOutput: "1600",
    notes: "Each price is added to `acc`. After all items, the total spend is 1600.",
    keyPoints: [
      "Signature: `array.reduce((acc, cur) => ..., initialValue)`.",
      "Always supply an `initialValue`.",
      "Returns one value.",
      "Use `Math.max(acc, cur)` inside to find the highest price.",
    ],
  },

  "sp-js-08": {
    intro: "Tony's accountant needs the total monthly earnings from all the family rackets. He reduces the earnings array into a single sum.",
    concept: "`.reduce(callback, initialValue)` accumulates the array into a single result. The callback receives an accumulator and the current element; whatever it returns becomes the next accumulator.",
    example: `const earnings = [25000, 18000, 42000, 31000];
const total = earnings.reduce((acc, e) => acc + e, 0);
console.log(total);`,
    exampleOutput: "116000",
    notes: "Each earning is added to the running total. After four items, the total is 116,000.",
    keyPoints: [
      "Signature: `array.reduce((acc, cur) => ..., initialValue)`.",
      "The `initialValue` prevents empty-array errors.",
      "Returns one value — not an array.",
      "Use `.filter()` first to sum only specific entries.",
    ],
  },

  // ─── Lesson 09 — Spread & Destructuring ──────────────────────────────────

  "st-js-09": {
    intro: "The Party splits into two groups to cover more ground. When they regroup, Dustin uses the spread operator to merge both group arrays into one full roster, and destructuring to grab the first two names quickly.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array into individual elements — useful for combining arrays.",
    example: `const [leader, scout] = ["Mike", "Eleven"];
const group1 = ["Dustin", "Lucas"];
const group2 = ["Max", "Will"];
const full = [...group1, ...group2];
console.log(leader);
console.log(full.length);`,
    exampleOutput: "Mike\n4",
    notes: "Destructuring assigns `'Mike'` to `leader` and `'Eleven'` to `scout`. Spreading both groups merges them into a new 4-element array.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — assigns by position.",
      "Use `_` to skip elements: `const [, second] = array`.",
      "Spread: `[...arr1, ...arr2]` creates a new merged array.",
      "Spread in function calls: `Math.max(...nums)`.",
    ],
  },

  "sv-js-09": {
    intro: "The MDR team's two sub-batches of refined data need to be merged. Mark destructures the first batch to grab the first entry, then spreads both into a combined array.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array — useful for copying or combining arrays.",
    example: `const [first, second] = [320, 490, 210];
const batchA = [320, 490];
const batchB = [210, 580];
const combined = [...batchA, ...batchB];
console.log(first);
console.log(combined.length);`,
    exampleOutput: "320\n4",
    notes: "Destructuring grabs the first two values. Spreading merges both batches into a single 4-element array.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — position-based.",
      "Extra elements are ignored; missing ones become `undefined`.",
      "Spread: `[...a, ...b]` creates a new array.",
      "Spread copies — the originals stay unchanged.",
    ],
  },

  "bb-js-09": {
    intro: "Walt has two separate shipment manifests that need to be merged into one. He destructures the first list to get the lead items, then spreads both lists together.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array — useful for copying or combining arrays.",
    example: `const [primary, secondary] = ["blue-sky", "standard", "cut"];
const batch1 = ["blue-sky", "standard"];
const batch2 = ["cut", "trim"];
const manifest = [...batch1, ...batch2];
console.log(primary);
console.log(manifest.length);`,
    exampleOutput: "blue-sky\n4",
    notes: "Destructuring gives `primary = 'blue-sky'`. Spreading merges both batches into a single 4-item array.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — by position.",
      "Spread: `[...a, ...b]` merges arrays into one new array.",
      "Spread copies shallowly — nested objects are still shared.",
      "Rest element: `const [first, ...rest] = array` collects the tail.",
    ],
  },

  "to-js-09": {
    intro: "Michael wants to merge the Scranton and Stamford client lists and immediately grab the top two accounts by destructuring the result.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array — useful for copying or combining arrays.",
    example: `const [topClient, secondClient] = ["Lackawanna", "Dunder"];
const scranton = ["Lackawanna", "Dunder"];
const stamford = ["Sabre", "Chili's"];
const allClients = [...scranton, ...stamford];
console.log(topClient);
console.log(allClients.length);`,
    exampleOutput: "Lackawanna\n4",
    notes: "Destructuring assigns the first two elements. Spreading merges both branch client lists into one array of four.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — position-based.",
      "Extra elements ignored; missing ones are `undefined`.",
      "Spread: `[...a, ...b]` creates a new combined array.",
      "Rest: `const [first, ...rest] = arr` — `rest` holds the tail.",
    ],
  },

  "got-js-09": {
    intro: "Jon Snow combines the Night's Watch and Wildling force arrays before the Battle of the Bastards. He destructures the combined array to name the commanders.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array — useful for copying or combining arrays.",
    example: `const [commander, lieutenant] = ["Jon Snow", "Tormund"];
const nights = ["Jon Snow", "Dolorous Edd"];
const wildlings = ["Tormund", "Wun Wun"];
const combined = [...nights, ...wildlings];
console.log(commander);
console.log(combined.length);`,
    exampleOutput: "Jon Snow\n4",
    notes: "Destructuring assigns the first two elements. Spread merges both forces into a single 4-element array.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — by position.",
      "Spread: `[...a, ...b]` creates a new merged array.",
      "Originals remain unchanged.",
      "Rest element collects remaining items: `const [first, ...rest] = arr`.",
    ],
  },

  "mx-js-09": {
    intro: "Morpheus combines two squads of freed humans into one crew manifest. He destructures the first to name the leads, then spreads both into the full roster.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array — useful for copying or combining arrays.",
    example: `const [one, two] = ["Neo", "Trinity"];
const squad1 = ["Neo", "Trinity"];
const squad2 = ["Morpheus", "Tank"];
const crew = [...squad1, ...squad2];
console.log(one);
console.log(crew.length);`,
    exampleOutput: "Neo\n4",
    notes: "Destructuring assigns the first two elements. Spreading merges both squads into a 4-person crew array.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — position-based.",
      "Spread: `[...a, ...b]` combines arrays into a new one.",
      "Original arrays are not mutated.",
      "Rest syntax: `const [first, ...rest] = arr`.",
    ],
  },

  "rm-js-09": {
    intro: "Rick and Morty need to combine two groups of interdimensional allies into one roster before the portal jump. Rick destructures to name the first two, then spreads both lists.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array — useful for copying or combining arrays.",
    example: `const [ally1, ally2] = ["Birdperson", "Squanchy"];
const group1 = ["Birdperson", "Squanchy"];
const group2 = ["Mr. Meeseeks", "Gearhead"];
const roster = [...group1, ...group2];
console.log(ally1);
console.log(roster.length);`,
    exampleOutput: "Birdperson\n4",
    notes: "Destructuring names the first two allies. Spreading merges both groups into a 4-item roster.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — position-based.",
      "Spread: `[...a, ...b]` creates a new merged array.",
      "Originals stay unchanged.",
      "Rest: `const [first, ...rest] = arr`.",
    ],
  },

  "sg-js-09": {
    intro: "The game organiser needs to merge two team lists and immediately grab the first two players by position for the final tug-of-war line-up.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array — useful for copying or combining arrays.",
    example: `const [anchor, puller] = ["Gi-hun", "Sae-byeok"];
const team1 = ["Gi-hun", "Sae-byeok"];
const team2 = ["Ali", "Deok-su"];
const merged = [...team1, ...team2];
console.log(anchor);
console.log(merged.length);`,
    exampleOutput: "Gi-hun\n4",
    notes: "Destructuring assigns the first two elements. Spreading merges both team arrays into one.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — position-based.",
      "Spread: `[...a, ...b]` merges arrays without mutating originals.",
      "Rest: `const [first, ...rest] = arr` captures the remainder.",
      "Spread works in function calls: `fn(...arr)`.",
    ],
  },

  "ad-js-09": {
    intro: "Michael merges the legal defence witness list with the character reference list and destructures to name the top two immediately.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array — useful for copying or combining arrays.",
    example: `const [mainWitness, backup] = ["Barry Zuckerkorn", "Bob Loblaw"];
const legal = ["Barry Zuckerkorn", "Bob Loblaw"];
const refs = ["Tobias", "Buster"];
const witnesses = [...legal, ...refs];
console.log(mainWitness);
console.log(witnesses.length);`,
    exampleOutput: "Barry Zuckerkorn\n4",
    notes: "Destructuring assigns the first two elements. Spreading merges both witness lists into four.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — position-based.",
      "Spread: `[...a, ...b]` creates a merged copy.",
      "Originals are not mutated.",
      "Rest: `const [first, ...rest] = arr`.",
    ],
  },

  "ba-js-09": {
    intro: "Barbie merges two guest lists for her Dreamhouse party and destructures the merged list to name the first two arrivals.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array — useful for copying or combining arrays.",
    example: `const [first, second] = ["Barbie", "Ken"];
const list1 = ["Barbie", "Ken"];
const list2 = ["Skipper", "Teresa"];
const guestList = [...list1, ...list2];
console.log(first);
console.log(guestList.length);`,
    exampleOutput: "Barbie\n4",
    notes: "Destructuring names the first two guests. Spreading merges both lists into a combined array of four.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — position-based.",
      "Spread: `[...a, ...b]` creates a new merged array.",
      "Originals are unchanged.",
      "Rest: `const [first, ...rest] = arr`.",
    ],
  },

  "sc-js-09": {
    intro: "Carrie needs to merge the brunch guest list with the dinner list for her annual city roundup, then grab the first two names by destructuring.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array — useful for copying or combining arrays.",
    example: `const [host, cohost] = ["Carrie", "Miranda"];
const brunch = ["Carrie", "Miranda"];
const dinner = ["Samantha", "Charlotte"];
const allGuests = [...brunch, ...dinner];
console.log(host);
console.log(allGuests.length);`,
    exampleOutput: "Carrie\n4",
    notes: "Destructuring names the host and co-host. Spreading merges both lists into a single 4-person array.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — position-based.",
      "Spread: `[...a, ...b]` merges into a new array.",
      "Originals are unchanged.",
      "Rest: `const [first, ...rest] = arr`.",
    ],
  },

  "sp-js-09": {
    intro: "Tony merges the North Jersey and Brooklyn crew lists before the big sit-down. He destructures the merged list to name the top two members for the table.",
    concept: "Array destructuring assigns array elements to named variables by position. The spread operator `...` expands an array — useful for copying or combining arrays.",
    example: `const [boss, underboss] = ["Tony", "Christopher"];
const jersey = ["Tony", "Christopher"];
const brooklyn = ["Carmine", "Johnny Sack"];
const table = [...jersey, ...brooklyn];
console.log(boss);
console.log(table.length);`,
    exampleOutput: "Tony\n4",
    notes: "Destructuring assigns the first two elements to named variables. Spreading merges both crews into four.",
    keyPoints: [
      "Destructuring: `const [a, b] = array` — position-based.",
      "Spread: `[...a, ...b]` creates a new merged array.",
      "Originals unchanged.",
      "Rest: `const [first, ...rest] = arr`.",
    ],
  },

  // ─── Lesson 10 — Object.keys() ───────────────────────────────────────────

  "st-js-10": {
    intro: "Eleven's abilities are stored in a JavaScript object. Mike needs to list every ability name and count how many there are, so he uses `Object.keys()` to get them.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. You can iterate over this array with `.forEach()`, `.map()`, or any array method.",
    example: `const abilities = {
  telekinesis: true,
  mindReading: true,
  flicking: true,
};
const keys = Object.keys(abilities);
console.log(keys.length);
console.log(keys[0]);`,
    exampleOutput: "3\ntelekinesis",
    notes: "`Object.keys()` returns `['telekinesis', 'mindReading', 'flicking']`. `.length` gives the count; `[0]` accesses the first key.",
    keyPoints: [
      "`Object.keys(obj)` returns an array of key names.",
      "Order follows insertion order for string keys.",
      "`Object.values(obj)` returns the values; `Object.entries(obj)` returns `[key, value]` pairs.",
      "Iterate with `.forEach((key) => ...)` to loop over all keys.",
    ],
  },

  "sv-js-10": {
    intro: "The Lumon employee record is a JavaScript object. Helly needs to know how many fields are tracked per employee — she uses `Object.keys()` to count them.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. Combine it with `.length` to count fields, or `.forEach()` to iterate.",
    example: `const employee = {
  id: "MDR-4",
  name: "Mark S.",
  department: "MDR",
  clearance: 2,
};
const fields = Object.keys(employee);
console.log(fields.length);
console.log(fields[0]);`,
    exampleOutput: "4\nid",
    notes: "`Object.keys()` returns `['id', 'name', 'department', 'clearance']`. `.length` is 4; `[0]` is `'id'`.",
    keyPoints: [
      "`Object.keys(obj)` returns an array of property names.",
      "Use `.length` on the result to count fields.",
      "`Object.values(obj)` returns the values.",
      "`Object.entries(obj)` returns `[key, value]` pairs for looping.",
    ],
  },

  "bb-js-10": {
    intro: "Walt's chemistry record for each batch is stored as an object. He uses `Object.keys()` to list every property tracked and ensure nothing is missing from the log.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. Combine with `.length` to count, or iterate with `.forEach()`.",
    example: `const batch = {
  purity: 99,
  yield: "4.2kg",
  location: "superlab",
};
const keys = Object.keys(batch);
console.log(keys.length);
console.log(keys[1]);`,
    exampleOutput: "3\nyield",
    notes: "`Object.keys()` returns `['purity', 'yield', 'location']`. The array has 3 keys; index 1 is `'yield'`.",
    keyPoints: [
      "`Object.keys(obj)` returns an array of property names.",
      "Order follows insertion order.",
      "`Object.values(obj)` gets the values; `Object.entries()` gets pairs.",
      "Use with `.forEach()` to log every property.",
    ],
  },

  "to-js-10": {
    intro: "Michael's performance review form is an object. He uses `Object.keys()` to list all the review categories before submitting — making sure every field is accounted for.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. Combine with `.length` to count, or iterate with `.forEach()`.",
    example: `const review = {
  attitude: "excellent",
  punctuality: "always late",
  sales: "above quota",
  teamwork: "surprisingly ok",
};
const categories = Object.keys(review);
console.log(categories.length);
console.log(categories[2]);`,
    exampleOutput: "4\nsales",
    notes: "`Object.keys()` returns all four category names. `.length` is 4; index 2 is `'sales'`.",
    keyPoints: [
      "`Object.keys(obj)` returns property names as an array.",
      "Use `.length` to count them.",
      "`Object.values(obj)` gets the values.",
      "`Object.entries(obj)` returns `[key, value]` pairs.",
    ],
  },

  "got-js-10": {
    intro: "Tyrion's house allegiance tracker is a JavaScript object. He uses `Object.keys()` to get the list of all houses recorded and count how many are pledged.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. Use `.length` to count fields, or iterate with `.forEach()`.",
    example: `const allegiances = {
  Stark: "Targaryen",
  Lannister: "themselves",
  Baratheon: "Targaryen",
};
const houses = Object.keys(allegiances);
console.log(houses.length);
console.log(houses[0]);`,
    exampleOutput: "3\nStark",
    notes: "`Object.keys()` returns `['Stark', 'Lannister', 'Baratheon']`. `.length` is 3; `[0]` is `'Stark'`.",
    keyPoints: [
      "`Object.keys(obj)` returns an array of key names.",
      "Use `.length` to count properties.",
      "`Object.values(obj)` returns values.",
      "`Object.entries(obj)` returns `[key, value]` pairs.",
    ],
  },

  "mx-js-10": {
    intro: "The Oracle's prophecy about Neo is stored as an object. She uses `Object.keys()` to enumerate every trait being analysed and ensure the prediction is complete.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. Use `.length` to count, or iterate with `.forEach()`.",
    example: `const prophecy = {
  isTheOne: true,
  strength: 100,
  belief: "growing",
};
const traits = Object.keys(prophecy);
console.log(traits.length);
console.log(traits[0]);`,
    exampleOutput: "3\nisTheOne",
    notes: "`Object.keys()` returns `['isTheOne', 'strength', 'belief']`. `.length` is 3; index 0 is `'isTheOne'`.",
    keyPoints: [
      "`Object.keys(obj)` returns an array of property names.",
      "Use `.length` to count properties.",
      "`Object.values(obj)` returns values.",
      "`Object.entries(obj)` returns `[key, value]` pairs.",
    ],
  },

  "rm-js-10": {
    intro: "Rick's interdimensional rolodex is an object mapping alien names to their species. He uses `Object.keys()` to print all the alien names he has on file.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. Use it to get every key, then iterate or count.",
    example: `const rolodex = {
  Squanchy: "cat alien",
  Birdperson: "birdperson",
  Fart: "gaseous entity",
};
const aliens = Object.keys(rolodex);
console.log(aliens.length);
console.log(aliens[1]);`,
    exampleOutput: "3\nBirdperson",
    notes: "`Object.keys()` returns `['Squanchy', 'Birdperson', 'Fart']`. `.length` is 3; index 1 is `'Birdperson'`.",
    keyPoints: [
      "`Object.keys(obj)` returns an array of property names.",
      "Use `.length` to count them.",
      "`Object.values(obj)` returns values.",
      "`Object.entries(obj)` returns `[key, value]` pairs for iteration.",
    ],
  },

  "sg-js-10": {
    intro: "The player manifest is stored as a JavaScript object mapping numbers to names. The Front Man uses `Object.keys()` to get every registered player number.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. Use `.length` to count, or iterate with `.forEach()`.",
    example: `const players = {
  "456": "Gi-hun",
  "067": "Sae-byeok",
  "001": "Oh Il-nam",
};
const numbers = Object.keys(players);
console.log(numbers.length);
console.log(numbers[0]);`,
    exampleOutput: "3\n456",
    notes: "`Object.keys()` returns `['456', '067', '001']`. `.length` is 3; index 0 is `'456'`.",
    keyPoints: [
      "`Object.keys(obj)` returns property names as an array of strings.",
      "Use `.length` to count registrations.",
      "`Object.values(obj)` returns the player names.",
      "`Object.entries(obj)` returns `[number, name]` pairs.",
    ],
  },

  "ad-js-10": {
    intro: "The Bluth Company asset ledger is an object. Michael uses `Object.keys()` to list every registered asset before handing the books to the SEC.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. Use `.length` to count, or iterate with `.forEach()`.",
    example: `const ledger = {
  bananaStand: 250000,
  modelHome: 500000,
  yacht: 120000,
};
const assets = Object.keys(ledger);
console.log(assets.length);
console.log(assets[0]);`,
    exampleOutput: "3\nbananaStand",
    notes: "`Object.keys()` returns `['bananaStand', 'modelHome', 'yacht']`. `.length` is 3; index 0 is `'bananaStand'`.",
    keyPoints: [
      "`Object.keys(obj)` returns an array of property names.",
      "Use `.length` to count fields.",
      "`Object.values(obj)` returns values.",
      "`Object.entries(obj)` returns `[key, value]` pairs.",
    ],
  },

  "ba-js-10": {
    intro: "Barbie's achievement record is a JavaScript object mapping career names to completion status. She uses `Object.keys()` to list every career she has conquered.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. Use `.length` to count, or iterate to display each.",
    example: `const achievements = {
  doctor: true,
  astronaut: true,
  president: true,
  mermaid: false,
};
const careers = Object.keys(achievements);
console.log(careers.length);
console.log(careers[2]);`,
    exampleOutput: "4\npresident",
    notes: "`Object.keys()` returns all four career names. `.length` is 4; index 2 is `'president'`.",
    keyPoints: [
      "`Object.keys(obj)` returns an array of property names.",
      "Use `.length` to count them.",
      "`Object.values(obj)` returns the boolean values.",
      "`Object.entries(obj)` returns `[career, status]` pairs.",
    ],
  },

  "sc-js-10": {
    intro: "Carrie's relationship history is stored as a JavaScript object. She uses `Object.keys()` to count how many relationships she has actually documented — research for the column.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. Use `.length` to count, or iterate with `.forEach()`.",
    example: `const history = {
  Aidan: "almost",
  Big: "complicated",
  Berger: "brief",
};
const names = Object.keys(history);
console.log(names.length);
console.log(names[1]);`,
    exampleOutput: "3\nBig",
    notes: "`Object.keys()` returns `['Aidan', 'Big', 'Berger']`. `.length` is 3; index 1 is `'Big'`.",
    keyPoints: [
      "`Object.keys(obj)` returns property names as an array.",
      "Use `.length` to count them.",
      "`Object.values(obj)` returns the relationship statuses.",
      "`Object.entries(obj)` returns `[name, status]` pairs.",
    ],
  },

  "sp-js-10": {
    intro: "Tony's crew manifest is a JavaScript object mapping crew names to their rank. He uses `Object.keys()` to list every member before the big meeting.",
    concept: "`Object.keys(obj)` returns an array of all the object's own enumerable property names. Use `.length` to count, or iterate with `.forEach()`.",
    example: `const crew = {
  Tony: "boss",
  Paulie: "capo",
  Christopher: "soldier",
  Silvio: "consigliere",
};
const members = Object.keys(crew);
console.log(members.length);
console.log(members[0]);`,
    exampleOutput: "4\nTony",
    notes: "`Object.keys()` returns all four member names. `.length` is 4; index 0 is `'Tony'`.",
    keyPoints: [
      "`Object.keys(obj)` returns an array of property names.",
      "Use `.length` to count members.",
      "`Object.values(obj)` returns the ranks.",
      "`Object.entries(obj)` returns `[name, rank]` pairs for iteration.",
    ],
  },
};
