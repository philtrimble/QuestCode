import type { Lesson } from "@/types";

export const pythonLessons: Record<string, Lesson> = {

  // ── Stranger Things ──────────────────────────────────────────────────────────

  "st-py-01": {
    intro: "Eleven has made contact, but her signal carries three fragments — a name, a channel number, and a status flag. Hopper needs to capture all three as Python variables before the connection drops.",
    concept: "In Python, a variable stores data under a name. Write the name, then `=`, then the value. Python infers the type automatically — strings need quotes, numbers and booleans do not.",
    example: `name = "Hopper"
badge_number = 47
on_duty = True
print(name)
print(badge_number)
print(on_duty)`,
    exampleOutput: "Hopper\n47\nTrue",
    notes: "Each `=` stores the right-side value into the variable name on the left. `print()` displays the stored value — strings appear without quotes in the output.",
    keyPoints: [
      "Use `=` to assign a value (not `==`, which tests equality)",
      "Strings need quotes: `\"Hopper\"` — numbers and booleans don't",
      "Booleans are exactly `True` or `False` — capital first letter, no quotes",
      "Variable names can't start with a number or contain spaces",
    ],
  },

  "st-py-02": {
    intro: "Will Byers is sending coded messages through the lights — each letter maps to a position in the alphabet. Joyce needs a Python function that converts any letter to its number instantly.",
    concept: "The built-in `ord()` function returns the integer Unicode value for any character. For capital letters, subtracting 64 gives its alphabet position (A=1, B=2…). Wrapping this in a `def` makes it reusable.",
    example: `def ascii_value(char):
    return ord(char)

print(ascii_value("E"))
print(ascii_value("L"))`,
    exampleOutput: "69\n76",
    notes: "`ord('E')` returns 69, `ord('L')` returns 76. The function wraps the built-in so you can call it by name anywhere.",
    keyPoints: [
      "`ord(char)` takes a single character and returns its integer code",
      "Capital A=65, B=66 … Z=90. Subtract 64 to get A=1, B=2…",
      "Define a function with `def name(param):` — colon and indent required",
      "Call it by name: `ascii_value(\"E\")` returns 69",
    ],
  },

  "st-py-03": {
    intro: "Dustin has the Party's code names, but the team needs each one listed with its index number to coordinate radio channels. Python's `enumerate()` generates both at once.",
    concept: "A `for` loop runs your code once for each item in a list. `enumerate()` wraps any list and yields both the index and the item simultaneously — no manual counter needed.",
    example: `agents = ["Smith", "Jones", "Brown"]
for i, agent in enumerate(agents):
    print(f"Agent {i}: {agent}")`,
    exampleOutput: "Agent 0: Smith\nAgent 1: Jones\nAgent 2: Brown",
    notes: "`enumerate(agents)` yields `(0, 'Smith')`, `(1, 'Jones')`, `(2, 'Brown')`. The loop unpacks each pair into `i` and `agent`, and the f-string assembles the output.",
    keyPoints: [
      "`for i, item in enumerate(my_list):` gives both index and value",
      "Indexing starts at 0 — first item is always index 0",
      "The loop body must be indented 4 spaces",
      "f-strings embed variables with `{}`: `f\"Agent {i}: {agent}\"`",
    ],
  },

  "st-py-04": {
    intro: "The Hawkins lab needs a threat classifier. Above a threshold it's Critical, above a lower threshold it's Dangerous, otherwise Safe. A function with `if/elif/else` handles all three cases in order.",
    concept: "A function can branch using `if/elif/else` to return different results based on its input. Conditions are tested top to bottom — the first one that's True is executed and the rest are skipped.",
    example: `def threat_level(count):
    if count >= 10:
        return "Critical"
    elif count >= 5:
        return "High"
    else:
        return "Low"

print(threat_level(7))
print(threat_level(1))`,
    exampleOutput: "High\nLow",
    notes: "For 7: the first condition (>= 10) is False, the second (>= 5) is True — `\"High\"` is returned. For 1, both conditions fail and `else` returns `\"Low\"`.",
    keyPoints: [
      "Conditions are checked top to bottom — first True match wins",
      "`elif` means 'else if' — chain as many as needed",
      "`else` at the end catches any remaining case",
      "`return` exits the function immediately — no further code runs",
    ],
  },

  "st-py-05": {
    intro: "Joyce has been tracking creature sightings for months. The Party needs to know which entity has been spotted most — scanning by hand would take forever. Python's `max()` with `key=` finds it in one line.",
    concept: "A dictionary maps keys to values using `{}`. The built-in `max()` function finds the largest value in an iterable. When called with `key=my_dict.get`, it returns the key whose value is highest.",
    example: `encounters = {"Demogorgon": 5, "Mind Flayer": 9, "Demo-dog": 3}
most = max(encounters, key=encounters.get)
print(most)`,
    exampleOutput: "Mind Flayer",
    notes: "`max(encounters, key=encounters.get)` compares each key's value and returns the key with the biggest one — Mind Flayer's 9 beats the others.",
    keyPoints: [
      "Create a dict with `d = {\"key\": value}` — keys and values separated by `:`",
      "Access a value with `d[\"key\"]`",
      "`max(dict, key=dict.get)` returns the key with the highest value",
      "Dict keys must be unique — reassigning a key overwrites its value",
    ],
  },

  // ── Severance ────────────────────────────────────────────────────────────────

  "sv-py-01": {
    intro: "Welcome to Lumon Industries. Mr. Milchick needs a Python record for each severed employee — name, department, and refinement score — before the morning briefing.",
    concept: "In Python, a variable stores data under a name. Write the name, then `=`, then the value. Strings need quotes; numbers and booleans do not.",
    example: `name = "Dylan George"
department = "MDR"
score = 923.1
print(name)
print(department)
print(score)`,
    exampleOutput: "Dylan George\nMDR\n923.1",
    notes: "Three variables store a string, an abbreviated string, and a float. `print()` displays each on its own line.",
    keyPoints: [
      "Use `=` to assign (not `==`, which checks equality)",
      "Strings need quotes: `\"Dylan George\"`. Numbers and booleans don't.",
      "Floats (decimals) are written as plain numbers: `923.1`",
      "Use underscores for multi-word names: `my_score`",
    ],
  },

  "sv-py-02": {
    intro: "The Macrodata Refinement bins start with two categories, but a third has been approved. Python lists make it easy to hold, extend, and measure a collection.",
    concept: "A Python list holds items in order inside `[]`. Use `.append()` to add to the end and `len()` to count items. Access any item with its zero-based index.",
    example: `bins = ["red", "blue"]
bins.append("green")
print(len(bins))
print(bins[2])`,
    exampleOutput: "3\ngreen",
    notes: "`.append()` adds `\"green\"` to the end, making the list 3 items long. `bins[2]` accesses index 2 — the newly appended item.",
    keyPoints: [
      "Create a list: `items = [\"a\", \"b\", \"c\"]`",
      "`.append(value)` adds to the end — modifies the list in place",
      "`len(list)` returns the number of items",
      "Index from 0: `list[0]` is first, `list[1]` is second",
    ],
  },

  "sv-py-03": {
    intro: "Ms. Casey records each wellness session — employee name, check-in day, and score. A Python dictionary maps these details to one record for quick lookup.",
    concept: "A dictionary stores related data as key-value pairs inside `{}`. Access any value directly with `my_dict[\"key\"]` — no searching required.",
    example: `session = {"employee": "Mark", "day": "Monday", "score": 88}
print(session["employee"])
print(session["day"])`,
    exampleOutput: "Mark\nMonday",
    notes: "`session[\"employee\"]` and `session[\"day\"]` retrieve their values directly by key — instant lookup, no loops.",
    keyPoints: [
      "Create with `{\"key\": value, \"key2\": value2}`",
      "Access a value with `d[\"key\"]` — must match exactly",
      "Add or update: `d[\"new_key\"] = new_value`",
      "Missing key raises `KeyError` — check with `\"key\" in d`",
    ],
  },

  "sv-py-04": {
    intro: "Harmony Cobel needs a function that checks whether an employee hit their refinement quota. Define it once with `def` and call it for any employee.",
    concept: "A `def` statement creates a named, reusable block of code. Pass inputs in parentheses and use `return` to send back a result. Call the function by name whenever needed.",
    example: `def completion_rate(refined, required):
    return (refined / required) * 100

print(completion_rate(75, 100))
print(completion_rate(50, 80))`,
    exampleOutput: "75.0\n62.5",
    notes: "`75/100*100 = 75.0` and `50/80*100 = 62.5`. Both are floats because `/` always returns a float in Python 3.",
    keyPoints: [
      "Define with `def name(param1, param2):` — colon required",
      "Indent the function body 4 spaces",
      "`return` sends the result back and stops the function",
      "Call with `name(value1, value2)` — the result can be printed directly",
    ],
  },

  "sv-py-05": {
    intro: "Irving needs the total refinement output across all MDR employees this quarter. A `for` loop visits each score and accumulates the grand total.",
    concept: "A `for` loop runs your code once per item in a list. To sum a list of numbers, initialize `total = 0` before the loop and use `total += value` on each iteration.",
    example: `scores = [847, 612, 923, 788, 541]
total = 0
for score in scores:
    total += score
print(total)`,
    exampleOutput: "3711",
    notes: "`total` starts at 0 and grows each iteration: 0→847→1459→2382→3170→3711. Print after the loop to get the final sum.",
    keyPoints: [
      "Initialize the accumulator before the loop: `total = 0`",
      "`total += score` is shorthand for `total = total + score`",
      "The `for` loop gives you each list item one at a time",
      "Print the result after the loop, not inside it",
    ],
  },

  // ── Breaking Bad ─────────────────────────────────────────────────────────────

  "bb-py-01": {
    intro: "A new batch needs to be logged before Gus approves distribution — product name, purity percentage, and availability status. Three Python variables capture everything.",
    concept: "In Python, a variable stores data. Write the name, then `=`, then the value. Python infers the type — strings need quotes, numbers and booleans do not.",
    example: `product = "Yellow"
purity = 96
available = True
print(product)
print(purity)
print(available)`,
    exampleOutput: "Yellow\n96\nTrue",
    notes: "Three different types: string, integer, boolean. `print()` outputs each on its own line.",
    keyPoints: [
      "Use `=` to assign (not `==`, which tests equality)",
      "Strings need quotes: `\"Yellow\"`. Numbers and booleans don't.",
      "Booleans are `True` or `False` — capital first letter",
      "Name variables clearly: `purity_level` beats `p`",
    ],
  },

  "bb-py-02": {
    intro: "The distribution territory has expanded. A new region was just approved — add it to the active list and confirm the updated count before Gus signs off.",
    concept: "A Python list holds items in order inside `[]`. Use `.append()` to add to the end and `len()` to count. Access any item with its zero-based index.",
    example: `batches = [250, 400, 150]
batches.append(500)
print(len(batches))`,
    exampleOutput: "4",
    notes: "`batches` starts with 3 items. `.append(500)` adds a fourth. `len(batches)` returns 4.",
    keyPoints: [
      "Create a list: `items = [1, 2, 3]`",
      "`.append(value)` adds to the end and modifies in place",
      "`len(list)` returns the total item count",
      "Index from 0: `items[-1]` accesses the last item",
    ],
  },

  "bb-py-03": {
    intro: "Walt's car wash and other fronts each have revenue figures Skyler tracks. A Python dictionary maps each business name to its revenue for instant one-line lookup.",
    concept: "A dictionary stores data as key-value pairs inside `{}`. Access any value directly with `my_dict[\"key\"]` — no loops needed.",
    example: `businesses = {"A1 Autoparts": 45000, "Beneke Fabricators": 82000}
print(businesses["Beneke Fabricators"])`,
    exampleOutput: "82000",
    notes: "`businesses[\"Beneke Fabricators\"]` jumps straight to 82000. Dictionary lookups are instant regardless of size.",
    keyPoints: [
      "Create with `{\"key\": value, \"key2\": value2}`",
      "Access with `d[\"key\"]`",
      "Add an entry: `d[\"new_biz\"] = 60000`",
      "Using a missing key raises `KeyError`",
    ],
  },

  "bb-py-04": {
    intro: "Mike needs a fast way to grade every batch — Blue Sky if purity is 99+, Standard if it's passable, Reject otherwise. A function with `if/elif/else` handles all three tiers.",
    concept: "A function can use `if/elif/else` to return different results based on input. Conditions are checked top to bottom — the first True match is executed.",
    example: `def purity_grade(p):
    if p >= 99:
        return "Blue Sky"
    elif p >= 80:
        return "Standard"
    else:
        return "Reject"

print(purity_grade(96))`,
    exampleOutput: "Standard",
    notes: "96 is not >= 99, but it is >= 80 — so `\"Standard\"` is returned. The `else` only runs if both conditions above fail.",
    keyPoints: [
      "Conditions are checked top to bottom — first True wins",
      "`elif` adds another case; `else` catches the rest",
      "`return` exits the function immediately",
      "A function can have multiple `return` statements",
    ],
  },

  "bb-py-05": {
    intro: "Walt needs the total grams produced across all cook sessions this week. Each batch is in a list — a `for` loop accumulates the grand total.",
    concept: "A `for` loop runs once per item in a list. To sum numbers, initialize `total = 0` before the loop and use `total += value` on each iteration.",
    example: `batches = [38, 42, 35, 50]
total = 0
for b in batches:
    total += b
print(total)`,
    exampleOutput: "165",
    notes: "`total` grows each pass: 0→38→80→115→165. After the loop, `print(total)` outputs the final sum.",
    keyPoints: [
      "Initialize outside the loop: `total = 0`",
      "`total += b` is shorthand for `total = total + b`",
      "The loop gives you each list item one at a time",
      "Print after the loop — not inside it",
    ],
  },

  // ── The Office ────────────────────────────────────────────────────────────────

  "to-py-01": {
    intro: "Michael Scott has declared it Employee Data Day. Toby needs each salesperson's name, sales total, and promotion status logged as Python variables for the HR system.",
    concept: "In Python, variables store data. Write the name, then `=`, then the value. Python infers the type automatically.",
    example: `name = "Jim Halpert"
sales = 8750
promoted = False
print(name)
print(sales)
print(promoted)`,
    exampleOutput: "Jim Halpert\n8750\nFalse",
    notes: "`name` is a string, `sales` is an integer, `promoted` is a boolean. `print()` outputs each on its own line.",
    keyPoints: [
      "Use `=` to assign; `==` tests equality — don't confuse them",
      "Strings need quotes: `\"Jim Halpert\"`. Numbers and booleans don't.",
      "Booleans are `True` or `False` — capital, no quotes",
      "Variable names are case-sensitive: `Sales` ≠ `sales`",
    ],
  },

  "to-py-02": {
    intro: "Dwight's client list is growing — two new accounts just signed. He needs to add them and confirm the updated total before his report to Michael.",
    concept: "A Python list holds items in order inside `[]`. Use `.append()` to add to the end and `len()` to count items.",
    example: `clients = ["Vance Refrigeration", "Blue Cross"]
clients.append("Prince Paper")
print(len(clients))`,
    exampleOutput: "3",
    notes: "`clients` starts with 2 entries. After `.append()`, it has 3. `len(clients)` returns 3.",
    keyPoints: [
      "Create a list: `items = [\"a\", \"b\"]`",
      "`.append(value)` adds to the end",
      "`len(list)` gives the count",
      "Index from 0: `clients[0]` is `\"Vance Refrigeration\"`",
    ],
  },

  "to-py-03": {
    intro: "Ryan Howard built a tracker mapping each salesperson to their monthly revenue. A Python dictionary lets Toby pull any number in one line.",
    concept: "A dictionary stores key-value pairs inside `{}`. Access any value directly with `my_dict[\"key\"]` — no loop or search needed.",
    example: `monthly = {"Dwight": 14200, "Jim": 8750, "Ryan": 250}
print(monthly["Jim"])`,
    exampleOutput: "8750",
    notes: "`monthly[\"Jim\"]` returns 8750 directly. Dictionary access is instant regardless of how many entries exist.",
    keyPoints: [
      "Create with `{\"key\": value, \"key2\": value2}`",
      "Access with `d[\"key\"]` — must match exactly",
      "Add entries: `d[\"Phyllis\"] = 6300`",
      "Missing key raises `KeyError` — use `\"key\" in d` to check first",
    ],
  },

  "to-py-04": {
    intro: "Angela needs a commission calculator. Every rep earns a percentage of closed deals — define the function once and call it for any salesperson.",
    concept: "A `def` statement creates a named, reusable block of code. Pass inputs in parentheses and use `return` to send back a result.",
    example: `def commission(sales):
    return sales * 0.05

print(commission(8750))
print(commission(14200))`,
    exampleOutput: "437.5\n710.0",
    notes: "`commission(8750)` returns `8750 * 0.05 = 437.5`. The function can be called with any sales figure — define once, reuse everywhere.",
    keyPoints: [
      "Define with `def name(param):` — colon required",
      "Indent the body 4 spaces",
      "`return` sends the result back and stops the function",
      "Call with `name(value)` — result can be printed directly",
    ],
  },

  "to-py-05": {
    intro: "David Wallace wants to know how many Dunder Mifflin reps closed deals over $5,000 this quarter. Loop through the sales list and count only the qualifying ones.",
    concept: "A `for` loop runs once per item in a list. Add an `if` inside to count only items meeting a condition. Initialize a counter before the loop.",
    example: `sales = [14200, 8750, 6300, 250]
count = 0
for s in sales:
    if s > 5000:
        count += 1
print(count)`,
    exampleOutput: "3",
    notes: "14200, 8750, and 6300 pass the `> 5000` test. 250 doesn't. After four iterations, `count` is 3.",
    keyPoints: [
      "Initialize the counter before the loop: `count = 0`",
      "`for s in sales:` gives each value one at a time",
      "`if s > 5000: count += 1` filters and counts",
      "Print after the loop, not inside it",
    ],
  },

  // ── Game of Thrones ──────────────────────────────────────────────────────────

  "got-py-01": {
    intro: "The Maester needs a record for a new recruit — name, house affiliation, and oath status. Three Python variables capture the essentials for the register.",
    concept: "In Python, a variable stores data. Write the name, then `=`, then the value. Python infers the type automatically.",
    example: `name = "Tyrion Lannister"
house = "Lannister"
alive = True
print(name)
print(house)
print(alive)`,
    exampleOutput: "Tyrion Lannister\nLannister\nTrue",
    notes: "`name` and `house` are strings, `alive` is a boolean. `print()` outputs each on its own line.",
    keyPoints: [
      "Use `=` to assign; `==` tests equality",
      "Strings need quotes. Numbers and booleans don't.",
      "Booleans are exactly `True` or `False` — capital first letter",
      "Variable names are case-sensitive: `House` ≠ `house`",
    ],
  },

  "got-py-02": {
    intro: "Daenerys needs to track her dragons by name. A new hatchling was just confirmed — append it to the list and check the total count for battle planning.",
    concept: "A Python list holds items in order inside `[]`. Use `.append()` to add to the end and `len()` to count items.",
    example: `dragons = ["Drogon", "Rhaegal"]
dragons.append("Viserion")
print(len(dragons))`,
    exampleOutput: "3",
    notes: "`dragons` starts with 2 names. `.append(\"Viserion\")` adds a third. `len(dragons)` returns 3.",
    keyPoints: [
      "Create a list: `items = [\"a\", \"b\"]`",
      "`.append(value)` adds to the end",
      "`len(list)` returns the count",
      "Index from 0: `dragons[0]` is `\"Drogon\"`",
    ],
  },

  "got-py-03": {
    intro: "Cersei wants the standing army size of any great house at a glance. A Python dictionary maps each house name to its troop count — one lookup, instant answer.",
    concept: "A dictionary maps keys to values using `{}`. Access any value directly with `my_dict[\"key\"]` — faster and cleaner than searching a list.",
    example: `armies = {"Lannister": 35000, "Tyrell": 40000, "Stark": 18000}
print(armies["Tyrell"])`,
    exampleOutput: "40000",
    notes: "`armies[\"Tyrell\"]` returns 40000 directly. No loop or search needed.",
    keyPoints: [
      "Create with `{\"key\": value}` pairs",
      "Access with `d[\"key\"]` — case and spelling must match",
      "Update: `d[\"Stark\"] = 20000` overwrites the old value",
      "Missing key raises `KeyError` — check with `\"key\" in d`",
    ],
  },

  "got-py-04": {
    intro: "The Small Council needs a battle outcome predictor — Victory if attack exceeds defense, Defeat if not, Stalemate if equal. Jon Snow needs it before sunrise.",
    concept: "A function can return different results using `if/elif/else`. Python checks conditions top to bottom and stops at the first True match.",
    example: `def battle_result(attack, defense):
    if attack > defense:
        return "Victory"
    elif attack < defense:
        return "Defeat"
    else:
        return "Stalemate"

print(battle_result(15000, 12000))`,
    exampleOutput: "Victory",
    notes: "15000 > 12000 is True, so `\"Victory\"` is returned immediately. The `elif` and `else` branches are never reached.",
    keyPoints: [
      "Conditions are checked top to bottom — first True wins",
      "`elif` adds another case; `else` catches the rest",
      "`return` exits the function immediately",
      "A function can have multiple `return` statements",
    ],
  },

  "got-py-05": {
    intro: "Sam is tallying ravens dispatched across Westeros. Each destination is in a list — loop through and count the total number of messages sent.",
    concept: "A `for` loop runs once per item in a list. To count, initialize a counter before the loop and increment it with `+= 1` on each pass.",
    example: `ravens = ["Winterfell", "Casterly Rock", "Dragonstone", "Pyke", "Sunspear"]
count = 0
for r in ravens:
    count += 1
print(count)`,
    exampleOutput: "5",
    notes: "The loop visits each destination and increments `count` each time, ending at 5. This is equivalent to `len(ravens)` — but loops let you add conditions.",
    keyPoints: [
      "Initialize the counter before the loop: `count = 0`",
      "`for r in ravens:` gives each item one at a time",
      "`count += 1` runs on every iteration",
      "For a simple count, `len(ravens)` is shorter — loops shine when filtering",
    ],
  },

  // ── The Matrix ────────────────────────────────────────────────────────────────

  "mx-py-01": {
    intro: "Morpheus is being loaded into the simulation. The system needs his identity: name, combat strength, and unplugged status — three Python variables before the signal drops.",
    concept: "In Python, a variable stores data under a name. Write the name, then `=`, then the value. Python infers the type automatically.",
    example: `name = "Morpheus"
strength = 95
unplugged = True
print(name)
print(strength)
print(unplugged)`,
    exampleOutput: "Morpheus\n95\nTrue",
    notes: "Three different types: string, integer, boolean. `print()` displays each on its own line.",
    keyPoints: [
      "Use `=` to assign a value (not `==`, which tests equality)",
      "Strings need quotes: `\"Morpheus\"`",
      "Booleans are `True` or `False` — capital, no quotes",
      "Variable names can't have spaces — use underscores: `combat_strength`",
    ],
  },

  "mx-py-02": {
    intro: "The Oracle has been tracking pill choices made at the station. A third candidate just decided — append their choice and check the running total.",
    concept: "A Python list holds items in order inside `[]`. Use `.append()` to add to the end and `len()` to count items.",
    example: `choices = ["blue", "red", "blue"]
choices.append("red")
print(len(choices))`,
    exampleOutput: "4",
    notes: "After append, the list has 4 items. `len(choices)` returns 4.",
    keyPoints: [
      "Create a list: `items = [\"a\", \"b\", \"c\"]`",
      "`.append(value)` adds to the end",
      "`len(list)` counts the items",
      "Index from 0: `choices[0]` is `\"blue\"`, `choices[3]` is `\"red\"`",
    ],
  },

  "mx-py-03": {
    intro: "The resistance keeps a file on each Agent — name mapped to status. Trinity needs to look up any Agent's status in one line to plan the extraction.",
    concept: "A dictionary stores key-value pairs inside `{}`. Access any value directly with `my_dict[\"key\"]` — no searching required.",
    example: `agents = {"Smith": "ACTIVE", "Jones": "ACTIVE", "Brown": "DECOMMISSIONED"}
print(agents["Smith"])`,
    exampleOutput: "ACTIVE",
    notes: "`agents[\"Smith\"]` returns `\"ACTIVE\"` directly by key.",
    keyPoints: [
      "Create with `{\"key\": value}` — keys in quotes, comma-separated",
      "Access with `d[\"key\"]`",
      "Update or add: `d[\"new_agent\"] = \"ACTIVE\"`",
      "Missing key raises `KeyError`",
    ],
  },

  "mx-py-04": {
    intro: "Neo's combat capabilities need to be classified after training. The rating system has three tiers — a function with `if/elif/else` handles the classification.",
    concept: "A function can use `if/elif/else` to return different results based on input. Python checks conditions top to bottom and stops at the first True match.",
    example: `def combat_class(level):
    if level >= 80:
        return "The One"
    elif level >= 50:
        return "Trained"
    else:
        return "Rookie"

print(combat_class(75))`,
    exampleOutput: "Trained",
    notes: "75 is not >= 80, but it is >= 50 — so `\"Trained\"` is returned. The `else` catches anything below 50.",
    keyPoints: [
      "First True condition wins — order matters",
      "`elif` adds more cases; `else` handles the rest",
      "`return` exits the function immediately",
      "You can chain many `elif` blocks",
    ],
  },

  "mx-py-05": {
    intro: "The Architect needs to count active signals (value 1) in a transmission stream. A `for` loop checks each value and counts only the ones that match.",
    concept: "A `for` loop runs once per item in a list. Use an `if` inside to count only matching items. Initialize a counter to zero before the loop.",
    example: `signals = [1, 0, 1, 1, 0, 1]
active = 0
for s in signals:
    if s == 1:
        active += 1
print(active)`,
    exampleOutput: "4",
    notes: "The loop checks 6 values: four are 1, two are 0. Only 1s increment `active`, ending at 4.",
    keyPoints: [
      "Initialize the counter before the loop: `active = 0`",
      "`for s in signals:` gives each item one at a time",
      "`if s == 1: active += 1` filters and counts",
      "Print the result after the loop, not inside",
    ],
  },

  // ── Rick and Morty ───────────────────────────────────────────────────────────

  "rm-py-01": {
    intro: "Summer is cataloguing the Smith family's residency details before Rick portal-guns the notebook away — name, age, and home dimension ID stored as Python variables.",
    concept: "In Python, a variable stores data. Write the name, then `=`, then the value. Python infers type — strings need quotes, numbers don't.",
    example: `name = "Summer Smith"
age = 17
dimension = "C-137"
print(name)
print(age)
print(dimension)`,
    exampleOutput: "Summer Smith\n17\nC-137",
    notes: "Three different types: string, integer, string. Strings can hold anything, including IDs like `\"C-137\"`.",
    keyPoints: [
      "Use `=` to assign (not `==`)",
      "Strings need quotes: `\"Summer Smith\"`",
      "Numbers don't need quotes: `17`",
      "Strings can hold alphanumeric IDs: `\"C-137\"`",
    ],
  },

  "rm-py-02": {
    intro: "Rick's been hopping interdimensional cable channels all night. Morty needs to track which channels they've hit — adding the latest discovery to the list.",
    concept: "A Python list holds items in order inside `[]`. Use `.append()` to add to the end and `len()` to count items.",
    example: `channels = ["INTERDIMENSIONAL CABLE", "Ball Fondlers"]
channels.append("Gazorpazorp TV")
print(len(channels))`,
    exampleOutput: "3",
    notes: "`channels` starts with 2 entries. `.append()` adds the third. `len()` returns 3.",
    keyPoints: [
      "Create a list: `items = [\"a\", \"b\"]`",
      "`.append(value)` adds to the end",
      "`len(list)` gives the count",
      "Index from 0: `channels[0]` is the first channel",
    ],
  },

  "rm-py-03": {
    intro: "Rick's portal gun has three operating modes based on energy level — Overcharged, Stable, or Low Power. A function with `if/elif/else` classifies any energy reading instantly.",
    concept: "A function can branch using `if/elif/else` to return different results. Conditions are checked top to bottom — first True match wins.",
    example: `def portal_status(energy):
    if energy > 90:
        return "Overcharged"
    elif energy > 50:
        return "Stable"
    else:
        return "Low Power"

print(portal_status(75))`,
    exampleOutput: "Stable",
    notes: "75 is not > 90, but it is > 50 — so `\"Stable\"` is returned. If energy were 95, the first condition would match.",
    keyPoints: [
      "Conditions checked top to bottom — first True wins",
      "`elif` means 'else if' — chain as many as needed",
      "`else` catches any remaining case",
      "`return` stops the function immediately",
    ],
  },

  "rm-py-04": {
    intro: "The Council of Ricks is comparing intelligence across dimensions. Given a list of IQ scores, calculate the average — sum them with a loop, then divide by the count.",
    concept: "To average a list, loop through it accumulating a total, then divide by `len()`. Use `/` for a float result. Initialize total at 0 before the loop.",
    example: `iq_scores = [150, 145, 160, 155, 148]
total = 0
for score in iq_scores:
    total += score
print(total / len(iq_scores))`,
    exampleOutput: "151.6",
    notes: "Sum: 150+145+160+155+148 = 758. Count: 5. Average: 758/5 = 151.6. Python's `/` always returns a float.",
    keyPoints: [
      "Initialize total at 0 before the loop: `total = 0`",
      "`total += score` accumulates each value",
      "`len(iq_scores)` gives the count for division",
      "`/` returns a float; `//` returns an integer (floor division)",
    ],
  },

  "rm-py-05": {
    intro: "Morty keeps a log of each adventure — location, duration, and survival status. A Python dictionary stores all fields for a single trip in one object.",
    concept: "A dictionary stores related data as key-value pairs inside `{}`. Access any value directly with `my_dict[\"key\"]`. Values can be any type — strings, integers, booleans.",
    example: `adventure = {"location": "Blips and Chitz", "hours": 3, "survived": True}
print(adventure["location"])
print(adventure["hours"])`,
    exampleOutput: "Blips and Chitz\n3",
    notes: "`adventure[\"location\"]` returns the string, `adventure[\"hours\"]` returns the integer. Different value types in the same dict is totally fine.",
    keyPoints: [
      "Create with `{\"key\": value, \"key2\": value2}`",
      "Access with `d[\"key\"]` — case-sensitive",
      "Values can be any type: string, int, bool, list…",
      "Add entries: `d[\"new_key\"] = value`",
    ],
  },

  // ── Squid Game ────────────────────────────────────────────────────────────────

  "sg-py-01": {
    intro: "Player 067 has stepped onto the island. Before the first game begins, each player's registration must be logged — number, name, and elimination status.",
    concept: "In Python, a variable stores data. Write the name, then `=`, then the value. Python infers the type automatically.",
    example: `player = 67
name = "Kang Sae-byeok"
eliminated = False
print(player)
print(name)
print(eliminated)`,
    exampleOutput: "67\nKang Sae-byeok\nFalse",
    notes: "An integer, a string, and a boolean — three different types. `print()` outputs each on its own line.",
    keyPoints: [
      "Use `=` to assign a value",
      "Strings need quotes: `\"Kang Sae-byeok\"`",
      "Booleans are `True` or `False` — capital, no quotes",
      "Integers are plain numbers: `67`",
    ],
  },

  "sg-py-02": {
    intro: "Red Light, Green Light ended with survivors scattered across the field. A new survivor has just been confirmed — add their number to the active list and check the count.",
    concept: "A Python list holds items in order inside `[]`. Use `.append()` to add to the end and `len()` to count.",
    example: `alive = ["067", "218", "101"]
alive.append("069")
print(len(alive))`,
    exampleOutput: "4",
    notes: "`alive` starts with 3 players. After `.append(\"069\")`, it has 4. `len(alive)` returns 4.",
    keyPoints: [
      "Create a list: `items = [\"a\", \"b\"]`",
      "`.append(value)` adds to the end",
      "`len(list)` returns the count",
      "Index from 0: `alive[0]` is `\"067\"`",
    ],
  },

  "sg-py-03": {
    intro: "The guards have ranks, each marked by a different shape. A Python dictionary maps each rank to its shape symbol so the Front Man can verify any guard's identity instantly.",
    concept: "A dictionary stores key-value pairs inside `{}`. Access any value directly with `my_dict[\"key\"]` — ideal for mapping one thing to another.",
    example: `guards = {"Front Man": "Circle", "Manager": "Triangle", "Soldier": "Square"}
print(guards["Front Man"])`,
    exampleOutput: "Circle",
    notes: "`guards[\"Front Man\"]` returns `\"Circle\"` directly. The dictionary maps ranks to their mask shapes.",
    keyPoints: [
      "Create with `{\"key\": value}` — keys in quotes",
      "Access with `d[\"key\"]`",
      "Add: `d[\"new_rank\"] = \"Pentagon\"`",
      "Missing key raises `KeyError`",
    ],
  },

  "sg-py-04": {
    intro: "Each eliminated player adds to the prize pool. Given the total and the number of remaining players, calculate the equal share — one function, one call.",
    concept: "A `def` statement creates a reusable function. Pass inputs in parentheses and use `return` to send back a result.",
    example: `def prize_share(total, players):
    return total // players

print(prize_share(1000000, 4))`,
    exampleOutput: "250000",
    notes: "`1000000 // 4` uses integer division to return 250000. `//` ensures no decimal — a clean split.",
    keyPoints: [
      "Define with `def name(param1, param2):`",
      "Indent the body 4 spaces",
      "`return` sends back the result",
      "`//` is integer division — no decimals in the result",
    ],
  },

  "sg-py-05": {
    intro: "The Front Man is counting casualties after the latest game. The status list has a mix of 'alive' and 'eliminated' entries — loop through and count only the fallen.",
    concept: "A `for` loop runs once per item in a list. Add an `if` inside to count only items matching a specific value.",
    example: `statuses = ["alive", "eliminated", "alive", "alive", "eliminated"]
fallen = 0
for s in statuses:
    if s == "eliminated":
        fallen += 1
print(fallen)`,
    exampleOutput: "2",
    notes: "The loop scans all 5 entries. Two match `\"eliminated\"`, so `fallen` ends at 2.",
    keyPoints: [
      "Initialize the counter before the loop: `fallen = 0`",
      "`for s in statuses:` gives each value one at a time",
      "`if s == \"eliminated\": fallen += 1` filters and counts",
      "Print after the loop, not inside",
    ],
  },

  // ── Arrested Development ──────────────────────────────────────────────────────

  "ad-py-01": {
    intro: "George Bluth Sr. always said there was money in the banana stand. In Python, Michael tracks that money as three separate variables before Buster does something irreversible.",
    concept: "In Python, a variable stores data under a name. Write the name, then `=`, then the value. Python infers the type — strings need quotes, integers and booleans do not.",
    example: `company = "Bluth Company"\nworth = 250000\nliquid = False\nprint(company)\nprint(worth)\nprint(liquid)`,
    exampleOutput: "Bluth Company\n250000\nFalse",
    notes: "Each `=` stores the right-side value into the variable on the left. `print()` displays the value — strings appear without quotes.",
    keyPoints: [
      "Use `=` to assign (not `==`, which tests equality)",
      "Strings need quotes: `\"Bluth Company\"` — numbers and booleans don't",
      "Booleans are exactly `True` or `False` — capital first letter, no quotes",
      "Variable names can't start with a number or contain spaces",
    ],
  },
  "ad-py-02": {
    intro: "The Bluth family meeting roster is never accurate. Python lists let Michael add and remove family members as the chaos unfolds.",
    concept: "A Python list holds an ordered sequence of items in `[]`. Use `.remove(value)` to delete an item by value and `len(list)` to count items.",
    example: `members = ["Michael", "George Michael", "Tobias", "Buster"]\nmembers.remove("Tobias")\nprint(members)`,
    exampleOutput: "['Michael', 'George Michael', 'Buster']",
    notes: "`.remove()` finds the first matching value and deletes it. The list shifts left automatically.",
    keyPoints: [
      "Lists are created with `[]` and items separated by commas",
      "`.remove(value)` deletes the first occurrence of that value",
      "`.append(value)` adds to the end",
      "`len(list)` returns the item count",
    ],
  },
  "ad-py-03": {
    intro: "Tobias insists his career is 'really taking off.' Python dictionaries let you store structured facts about even the most delusional résumé.",
    concept: "A dictionary maps keys to values using `{}`. Each entry is `\"key\": value`. Access any value with `my_dict[\"key\"]`.",
    example: `actor = {"name": "Tobias", "role": "Blue Man", "working": False}\nprint(actor["role"])`,
    exampleOutput: "Blue Man",
    notes: "The key `\"role\"` maps to the value `\"Blue Man\"`. Dictionary lookups are direct — no looping needed.",
    keyPoints: [
      "Syntax: `{\"key\": value, \"key2\": value2}`",
      "Access values: `my_dict[\"key\"]`",
      "Keys must be unique — duplicates overwrite the earlier value",
      "Values can be any type: string, int, bool, list, another dict",
    ],
  },
  "ad-py-04": {
    intro: "There's always money in the banana stand — unless there isn't. Python functions with conditionals let Michael calculate the damage based on how many walls are still standing.",
    concept: "A function can return different results based on conditions using `if/else`. The `if` test runs first; if it fails, `else` handles the fallback.",
    example: `def check_asset(value):\n    if value > 0:\n        return "Still solvent"\n    else:\n        return "Declare bankruptcy"\n\nprint(check_asset(250000))\nprint(check_asset(0))`,
    exampleOutput: "Still solvent\nDeclare bankruptcy",
    notes: "For 250000 the condition is True → first branch runs. For 0 it is False → `else` runs.",
    keyPoints: [
      "Conditions are tested top to bottom — first True match wins",
      "`return` exits the function immediately",
      "`else` handles any case that didn't match earlier conditions",
      "Functions must be defined before they are called",
    ],
  },
  "ad-py-05": {
    intro: "Gob's illusion fees come in at irregular amounts. A Python `for` loop sums every entry so Michael can claim it as legitimate consulting income.",
    concept: "A `for` loop runs your code once per item in a sequence. To accumulate a total, start a counter at 0 outside the loop and add each item inside.",
    example: `fees = [1000, 2500, 800]\ntotal = 0\nfor fee in fees:\n    total += fee\nprint(total)`,
    exampleOutput: "4300",
    notes: "`total += fee` is shorthand for `total = total + fee`. After the loop, `total` holds the full sum.",
    keyPoints: [
      "`for item in list:` iterates over every element",
      "Initialize the counter to 0 before the loop",
      "`+=` adds to the running total",
      "Print after the loop, not inside, to get the final value",
    ],
  },

  // ── Barbie ───────────────────────────────────────────────────────────────────

  "ba-py-01": {
    intro: "Every day in Barbieland starts with a perfect profile. Python variables capture Barbie's name, job, and existential status before the flat-feet incident.",
    concept: "Variables store data under a name. Assign with `=`. Python infers the type: strings need quotes, integers and booleans do not.",
    example: `name = "Barbie"\njob = "Astronaut"\nperfect = True\nprint(name)\nprint(job)\nprint(perfect)`,
    exampleOutput: "Barbie\nAstronaut\nTrue",
    notes: "`print()` displays each stored value on its own line. Strings appear without quotes in the output.",
    keyPoints: [
      "Use `=` to assign a value",
      "Strings need quotes; booleans are `True` or `False`",
      "Variable names should be lowercase with underscores",
      "Each `print()` call outputs one line",
    ],
  },
  "ba-py-02": {
    intro: "Barbie has held over 200 jobs. Python lists track every career — and `.append()` makes sure the newest one is always on file.",
    concept: "A list holds an ordered sequence of items in `[]`. Use `.append(value)` to add to the end and `len(list)` to count how many items are stored.",
    example: `jobs = ["Teacher", "Pilot"]\njobs.append("President")\nprint(len(jobs))`,
    exampleOutput: "3",
    notes: "`.append()` adds to the end of the list. `len()` returns how many items are now in it.",
    keyPoints: [
      "Lists use `[]` with comma-separated items",
      "`.append(value)` adds one item to the end",
      "`len(list)` returns the count",
      "Index from 0: `jobs[0]` is the first item",
    ],
  },
  "ba-py-03": {
    intro: "Ken's personality is best represented as a Python dictionary: a name, a single interest, and a boolean that tells you whether he's figured himself out yet.",
    concept: "A dictionary maps keys to values with `{}`. Access any value directly with `my_dict[\"key\"]`.",
    example: `profile = {"name": "Ken", "hobby": "beach", "certain": False}\nprint(profile["hobby"])`,
    exampleOutput: "beach",
    notes: "The key `\"hobby\"` maps directly to `\"beach\"`. No loop needed — just the key.",
    keyPoints: [
      "Syntax: `{\"key\": value}`",
      "Access values with `dict[\"key\"]`",
      "Keys are unique — duplicate keys overwrite earlier values",
      "Values can be any type",
    ],
  },
  "ba-py-04": {
    intro: "The Barbieland dress code is strictly enforced. A Python function with a loop and a conditional lets Weird Barbie approve or reject any outfit in one call.",
    concept: "Functions can loop through a list and return early when a condition is met. The first matching `return` exits immediately — any code after it is skipped.",
    example: `def has_glitter(items):\n    for item in items:\n        if "glitter" in item.lower():\n            return "Approved!"\n    return "Missing sparkle."\n\nprint(has_glitter(["glitter boots", "white dress"]))`,
    exampleOutput: "Approved!",
    notes: "The loop checks each item. The first match triggers an immediate `return` — the rest of the list is skipped.",
    keyPoints: [
      "`for item in list:` runs once per element",
      "`return` inside a loop exits the function immediately",
      "If no match is found, the fallback `return` after the loop runs",
      "`.lower()` makes comparisons case-insensitive",
    ],
  },
  "ba-py-05": {
    intro: "Before the existential crisis hits, Barbieland tallies its perfect days. A Python `for` loop counts every `True` in the log.",
    concept: "A `for` loop with an `if` check lets you count how many items match a condition. A counter starts at 0 and increments each time the condition is true.",
    example: `days = [True, True, False, True]\ncount = 0\nfor day in days:\n    if day:\n        count += 1\nprint(count)`,
    exampleOutput: "3",
    notes: "`if day:` is shorthand for `if day == True:`. The counter increments only when the day was perfect.",
    keyPoints: [
      "Initialize the counter to 0 before the loop",
      "`if item:` is True for `True`, non-zero numbers, non-empty strings",
      "`count += 1` increments by one",
      "Print after the loop to get the final tally",
    ],
  },

  // ── Sex and the City ──────────────────────────────────────────────────────────

  "sc-py-01": {
    intro: "Carrie Bradshaw has the financial self-awareness of a golden retriever near a shoe store. Python variables capture the numbers before the credit card statement arrives.",
    concept: "Variables store data under a name using `=`. Python infers the type automatically — strings need quotes, integers and booleans do not.",
    example: `columnist = "Carrie"\nshoes = 100\nregrets = False\nprint(columnist)\nprint(shoes)\nprint(regrets)`,
    exampleOutput: "Carrie\n100\nFalse",
    notes: "Each variable stores one value. `print()` displays it without the quotes that wrap strings in code.",
    keyPoints: [
      "Use `=` to assign; `==` tests equality",
      "Strings need quotes; booleans are `True`/`False`",
      "Variables can hold any type: string, int, float, bool",
      "Names are case-sensitive: `shoe_count` ≠ `Shoe_Count`",
    ],
  },
  "sc-py-02": {
    intro: "The girls always change their brunch order. Python lists store the current orders and let you update a specific item without rebuilding the whole list.",
    concept: "Lists store ordered items in `[]`. You can update an item by finding its index and assigning a new value: `list[index] = new_value`. `.index(value)` finds the position.",
    example: `orders = ["coffee", "eggs", "waffles"]\norders[orders.index("eggs")] = "omelette"\nprint(orders)`,
    exampleOutput: "['coffee', 'omelette', 'waffles']",
    notes: "`.index(value)` returns the integer position. Assigning to that position replaces the item in-place.",
    keyPoints: [
      "`.index(value)` returns the first matching position",
      "Assignment by index: `list[i] = new_value` replaces item at position `i`",
      "Lists are mutable — items can be changed after creation",
      "Indexing starts at 0",
    ],
  },
  "sc-py-03": {
    intro: "Mr. Big is complicated, unreliable, and somehow always charming. A Python dictionary is the only thing that can hold all that data in one place.",
    concept: "A dictionary maps keys to values with `{}`. Access any value directly with `dict[\"key\"]`.",
    example: `man = {"name": "Aidan", "city": "New York", "reliable": True}\nprint(man["name"])`,
    exampleOutput: "Aidan",
    notes: "The key `\"name\"` maps directly to `\"Aidan\"`. Dictionary lookups don't require looping.",
    keyPoints: [
      "Syntax: `{\"key\": value, \"key2\": value2}`",
      "Access values with `dict[\"key\"]`",
      "Keys must be unique",
      "Values can be any type",
    ],
  },
  "sc-py-04": {
    intro: "Carrie's budget is a Manolo-shaped disaster. Python functions with conditionals let Miranda calculate whether Carrie can realistically afford the next apartment.",
    concept: "Functions take inputs and return results. Arithmetic inside an `if` condition lets you make decisions based on calculated values.",
    example: `def can_afford(income, expense):\n    if income - expense > 500:\n        return True\n    return False\n\nprint(can_afford(5000, 3000))`,
    exampleOutput: "True",
    notes: "The function subtracts and compares in one step. If the result exceeds 500, it returns `True`.",
    keyPoints: [
      "Functions are defined with `def name(params):`",
      "Arithmetic can be done directly inside `if` conditions",
      "`return` exits the function with a value",
      "Call a function by name with arguments in parentheses",
    ],
  },
  "sc-py-05": {
    intro: "Carrie's column submissions are always late but always tallied. A Python `for` loop sums each draft's word count so her editor can calculate the total before sending the invoice.",
    concept: "A `for` loop runs once per item in a list. To compute a total, initialize a counter to 0 outside the loop and add each item inside it.",
    example: `counts = [500, 300, 450]\ntotal = 0\nfor c in counts:\n    total += c\nprint(total)`,
    exampleOutput: "1250",
    notes: "`total += c` adds each word count to the running total. After the loop finishes, `total` holds the full sum.",
    keyPoints: [
      "Initialize the accumulator to 0 before the loop",
      "`+=` adds the current item to the running total",
      "The loop variable (`c`) holds the current item each iteration",
      "Print after the loop for the final result",
    ],
  },

  // ── The Sopranos ─────────────────────────────────────────────────────────────

  "sp-py-01": {
    intro: "Tony Soprano is officially in waste management. Python variables store his legitimate-facing business profile — for the accountant's records, not the feds.",
    concept: "Variables store data under a name. Use `=` to assign. Python infers the type: strings need quotes, integers and booleans do not.",
    example: `boss = "Tony"\ncrewSize = 23\nlegitimate = False\nprint(boss)\nprint(crewSize)\nprint(legitimate)`,
    exampleOutput: "Tony\n23\nFalse",
    notes: "Each variable stores one piece of data. `print()` displays the stored value.",
    keyPoints: [
      "Use `=` to assign a value to a variable",
      "Strings need quotes; booleans are `True` or `False`",
      "Variable names are case-sensitive",
      "Print each variable separately for separate lines",
    ],
  },
  "sp-py-02": {
    intro: "The DiMeo family roster changes without notice. Python lists store the current crew, and `.remove()` handles departures quietly.",
    concept: "A Python list holds an ordered sequence of items. `.remove(value)` deletes the first occurrence of that value from the list.",
    example: `crew = ["Tony", "Paulie", "Silvio"]\ncrew.remove("Silvio")\nprint(crew)`,
    exampleOutput: "['Tony', 'Paulie']",
    notes: "`.remove()` searches for the value and removes the first match. The list adjusts automatically.",
    keyPoints: [
      "Lists are created with `[]` and comma-separated items",
      "`.remove(value)` deletes the first match",
      "`.append(value)` adds to the end",
      "If the value isn't in the list, `.remove()` raises an error",
    ],
  },
  "sp-py-03": {
    intro: "Agent Harris has been building a case file on Tony for years. Python dictionaries organize the surveillance data so the task force can find anything fast.",
    concept: "A dictionary maps keys to values using `{}`. Access any value directly with `my_dict[\"key\"]` — faster and cleaner than searching a list.",
    example: `suspect = {"name": "Tony S.", "territory": "NJ", "indictments": 3}\nprint(suspect["territory"])`,
    exampleOutput: "NJ",
    notes: "The key `\"territory\"` maps directly to `\"NJ\"`. No loop needed — just the key name.",
    keyPoints: [
      "Syntax: `{\"key\": value}`",
      "Access values with `dict[\"key\"]`",
      "Keys are unique — duplicates overwrite earlier values",
      "Values can be any Python type",
    ],
  },
  "sp-py-04": {
    intro: "Tony's protection rates are tiered by revenue. Python's `if/elif/else` structure handles all three brackets cleanly — and there's no arguing with the math.",
    concept: "Chain multiple conditions using `if/elif/else`. Python evaluates them top to bottom and stops at the first True match. The `else` handles anything that didn't match.",
    example: `def rate(revenue):\n    if revenue >= 100000:\n        return revenue * 0.25\n    elif revenue >= 50000:\n        return revenue * 0.20\n    else:\n        return revenue * 0.15\n\nprint(rate(75000))`,
    exampleOutput: "15000.0",
    notes: "75000 fails the first check (< 100000) but passes the second (>= 50000), so 20% is applied.",
    keyPoints: [
      "Conditions are checked in order — first True match wins",
      "`elif` is 'else if' — you can chain as many as needed",
      "`else` catches everything that didn't match earlier conditions",
      "`return` exits the function with the computed value",
    ],
  },
  "sp-py-05": {
    intro: "Dr. Melfi charges $300 per session, and Tony always pays — eventually. A Python `for` loop totals the invoices so the billing office knows what's outstanding.",
    concept: "A `for` loop runs once per item in a list. To accumulate a sum, start a counter at 0 outside the loop and add each item with `+=` inside.",
    example: `bills = [300, 300, 600]\ntotal = 0\nfor b in bills:\n    total += b\nprint(total)`,
    exampleOutput: "1200",
    notes: "`total += b` adds each bill to the running total. After the loop ends, `total` holds the final sum.",
    keyPoints: [
      "Initialize the accumulator to 0 before the loop",
      "`for item in list:` iterates over every element",
      "`+=` adds the current value to the running total",
      "Print after the loop for the final result",
    ],
  },


  // ── Lessons 6-10: All Themes ─────────────────────────────────────────────

  // ── Challenge 06: String Methods ─────────────────────────────────────────

  "st-py-06": {
    intro: "The Demogorgon's roar just rearranged every character in Eleven's message. She needs Python's string methods to clean and decode it before it reaches Mike.",
    concept: "Python strings have built-in methods you call with a dot: `.upper()`, `.lower()`, `.replace()`, `.split()`, `.strip()`. They return a new string — the original is unchanged.",
    example: `msg = "  hello, hawkins!  "
clean = msg.strip().title()
parts = msg.strip().split(", ")
print(clean)
print(parts)`,
    exampleOutput: "Hello, Hawkins!\n['hello', 'hawkins!']",
    notes: "`.strip()` removes leading/trailing whitespace, `.title()` capitalises each word, and `.split(\", \")` splits on the comma-space delimiter.",
    keyPoints: [
      "Strings are immutable — methods return a new string, never modify in place",
      "Chain methods left to right: `s.strip().upper()` strips then uppercases",
      "`.split(sep)` returns a list of substrings split on `sep`",
      "`.replace(old, new)` swaps every occurrence of `old` with `new`",
    ],
  },

  "sv-py-06": {
    intro: "Cobel's welcome message arrived in the wrong case — all caps, no punctuation. Mark needs Python string methods to format it into something readable before the morning meeting.",
    concept: "Python strings have built-in methods you call with a dot: `.upper()`, `.lower()`, `.replace()`, `.split()`, `.strip()`. They return a new string — the original is unchanged.",
    example: `msg = "  WELCOME TO LUMON INDUSTRIES  "
clean = msg.strip().lower().title()
words = msg.strip().split()
print(clean)
print(len(words))`,
    exampleOutput: "Welcome To Lumon Industries\n3",
    notes: "`.strip()` removes whitespace, `.lower()` makes it lowercase, `.title()` capitalises each word. `.split()` with no argument splits on any whitespace.",
    keyPoints: [
      "Strings are immutable — methods return a new string",
      "Chain methods left to right: `s.strip().lower().title()`",
      "`.split()` without args splits on any whitespace and removes empty strings",
      "`.replace(old, new)` replaces all occurrences",
    ],
  },

  "bb-py-06": {
    intro: "Saul's marketing copy arrived with inconsistent casing and extra spaces. Walt needs Python string methods to normalise it before it goes on the packaging.",
    concept: "Python strings have built-in methods you call with a dot. `.strip()` removes whitespace, `.title()` capitalises words, `.replace()` swaps substrings, `.split()` produces a list.",
    example: `label = "  blue sky -- premium product  "
formatted = label.strip().title()
parts = label.strip().replace("--", "|").split(" | ")
print(formatted)
print(parts)`,
    exampleOutput: "Blue Sky -- Premium Product\n['blue sky ', ' premium product']",
    notes: "`.strip()` removes edge whitespace first. `.title()` then capitalises. `.replace()` swaps `--` for ` | ` before `.split()` divides on it.",
    keyPoints: [
      "Methods return new strings — originals are unchanged",
      "Chain methods: each call operates on the result of the previous",
      "`.replace(old, new)` replaces every occurrence",
      "`.split(sep)` splits on the given separator",
    ],
  },

  "to-py-06": {
    intro: "Kevin's sales memo arrived as one long, mangled string. Ryan needs Python string methods to make it presentable before Michael sees it.",
    concept: "Python strings have built-in methods you call with a dot: `.strip()`, `.upper()`, `.lower()`, `.title()`, `.replace()`, `.split()`. Each returns a new string.",
    example: `memo = "  dunder mifflin -- paper solutions  "
title = memo.strip().title()
keywords = memo.strip().split(" -- ")
print(title)
print(keywords)`,
    exampleOutput: "Dunder Mifflin -- Paper Solutions\n['dunder mifflin', 'paper solutions']",
    notes: "`.strip().title()` cleans and capitalises. `.split(\" -- \")` divides on the double-dash separator, producing a two-item list.",
    keyPoints: [
      "Strings are immutable — chain methods to build a result",
      "`.title()` capitalises the first letter of each word",
      "`.split(sep)` returns a list of parts",
      "`.strip()` without args removes all leading/trailing whitespace",
    ],
  },

  "got-py-06": {
    intro: "A raven arrived with a garbled message — incorrect casing and extra whitespace. The Maester needs Python string methods to clean it before delivering it to the Small Council.",
    concept: "Python strings have built-in methods you call with a dot. They return a new string — the original is unchanged. Methods can be chained together.",
    example: `msg = "  winter is coming  "
upper = msg.strip().upper()
words = msg.strip().split()
print(upper)
print(words)`,
    exampleOutput: "WINTER IS COMING\n['winter', 'is', 'coming']",
    notes: "`.strip()` removes whitespace first. `.upper()` uppercases all letters. `.split()` without args splits on whitespace into a list of words.",
    keyPoints: [
      "Strings are immutable — methods return new strings",
      "`.upper()` / `.lower()` change case",
      "`.split()` returns a list; `.join(list)` reverses it",
      "`.replace(old, new)` swaps substrings",
    ],
  },

  "mx-py-06": {
    intro: "A transmission from the Oracle came through with corrupted casing. Neo needs Python string methods to decode the message before acting on it.",
    concept: "Python strings have built-in methods you call with a dot: `.strip()`, `.upper()`, `.lower()`, `.replace()`, `.split()`, `.title()`. They return a new string.",
    example: `code = "  there is no spoon  "
shout = code.strip().upper()
words = code.strip().split()
print(shout)
print(len(words))`,
    exampleOutput: "THERE IS NO SPOON\n4",
    notes: "`.strip().upper()` cleans then uppercases. `.split()` splits on whitespace. `len()` counts the resulting words.",
    keyPoints: [
      "Strings are immutable — methods return new strings",
      "Chain methods: each result feeds the next",
      "`.split()` returns a list; count it with `len()`",
      "`.replace(old, new)` swaps all occurrences",
    ],
  },

  "rm-py-06": {
    intro: "Rick's portal coordinates came back garbled — extra spaces, wrong case. Morty needs Python string methods to clean them before punching in the destination.",
    concept: "Python strings have built-in methods you call with a dot. `.strip()` removes whitespace, `.upper()` / `.lower()` change case, `.replace()` swaps substrings, `.split()` divides into a list.",
    example: `coords = "  dimension c-137 -- sector beta  "
clean = coords.strip().title()
parts = coords.strip().split(" -- ")
print(clean)
print(parts)`,
    exampleOutput: "Dimension C-137 -- Sector Beta\n['dimension c-137', 'sector beta']",
    notes: "`.strip().title()` cleans and capitalises. `.split(\" -- \")` divides on the separator, returning a two-element list.",
    keyPoints: [
      "Strings are immutable — chain methods for multi-step transforms",
      "`.title()` capitalises first letter of each word",
      "`.split(sep)` returns a list split on `sep`",
      "`.replace(old, new)` replaces all occurrences",
    ],
  },

  "sg-py-06": {
    intro: "The player announcements came in all caps with extra whitespace. The Front Man needs Python string methods to format them before they're read over the PA.",
    concept: "Python strings have built-in methods you call with a dot. They return a new string — the original is unchanged. Common ones: `.strip()`, `.title()`, `.upper()`, `.lower()`, `.replace()`, `.split()`.",
    example: `announcement = "  PLAYER 456 -- PLEASE REPORT  "
clean = announcement.strip().title()
parts = announcement.strip().split(" -- ")
print(clean)
print(parts)`,
    exampleOutput: "Player 456 -- Please Report\n['PLAYER 456', 'PLEASE REPORT']",
    notes: "`.strip().title()` normalises the announcement. `.split(\" -- \")` splits it into its two components.",
    keyPoints: [
      "Strings are immutable — methods return new strings",
      "Chain methods for multi-step transformations",
      "`.split(sep)` returns a list divided by the separator",
      "`.strip()` removes leading and trailing whitespace",
    ],
  },

  "ad-py-06": {
    intro: "Tobias's business card text arrived with the wrong capitalisation and rogue spaces. Michael needs Python string methods to fix it before the networking event.",
    concept: "Python strings have built-in methods you call with a dot: `.strip()`, `.title()`, `.upper()`, `.lower()`, `.replace()`, `.split()`. They return a new string — the original is unchanged.",
    example: `card = "  tobias funke -- analyst and therapist  "
clean = card.strip().title()
parts = card.strip().split(" -- ")
print(clean)
print(parts)`,
    exampleOutput: "Tobias Funke -- Analyst And Therapist\n['tobias funke', 'analyst and therapist']",
    notes: "`.strip().title()` handles cleaning and capitalisation. `.split(\" -- \")` divides on the separator.",
    keyPoints: [
      "Strings are immutable — methods return new strings",
      "`.title()` capitalises the first letter of every word",
      "`.split(sep)` returns a list",
      "`.replace(old, new)` swaps all occurrences",
    ],
  },

  "ba-py-06": {
    intro: "Barbie's job title data came in all lowercase with extra spaces. Weird Barbie needs Python string methods to make it presentable for the career fair banner.",
    concept: "Python strings have built-in methods you call with a dot. `.strip()` removes whitespace, `.title()` capitalises each word, `.split()` divides into a list, `.replace()` swaps substrings.",
    example: `title = "  barbie the astronaut  "
formatted = title.strip().title()
words = title.strip().split()
print(formatted)
print(words)`,
    exampleOutput: "Barbie The Astronaut\n['barbie', 'the', 'astronaut']",
    notes: "`.strip().title()` cleans and capitalises. `.split()` without an argument splits on any whitespace.",
    keyPoints: [
      "Strings are immutable — methods return new strings",
      "`.title()` capitalises the first letter of each word",
      "`.split()` without args splits on any whitespace",
      "Chain methods: `s.strip().title()`",
    ],
  },

  "sc-py-06": {
    intro: "Carrie's editor returned the column title with wrong casing and trailing spaces. Miranda suggested a single line of Python string methods to fix it before resubmission.",
    concept: "Python strings have built-in methods you call with a dot. They return a new string — the original is unchanged. `.strip()`, `.title()`, `.replace()`, `.split()` are the workhorses.",
    example: `title = "  how do you know when you know  "
formatted = title.strip().title()
words = title.strip().split()
print(formatted)
print(len(words))`,
    exampleOutput: "How Do You Know When You Know\n7",
    notes: "`.strip().title()` cleans and capitalises. `.split()` produces a list; `len()` counts the words.",
    keyPoints: [
      "Strings are immutable — methods return new strings",
      "`.title()` capitalises each word's first letter",
      "`.split()` returns a list of words",
      "Chain methods left to right: each call operates on the prior result",
    ],
  },

  "sp-py-06": {
    intro: "Tony's lawyer sent over a contract clause in garbled format — wrong case, stray spaces. Bobby needs Python string methods to clean it up before the sit-down.",
    concept: "Python strings have built-in methods you call with a dot. They return a new string — the original is unchanged. `.strip()`, `.title()`, `.replace()`, `.split()` are essential.",
    example: `clause = "  the sopranos -- waste management contract  "
clean = clause.strip().title()
parts = clause.strip().split(" -- ")
print(clean)
print(parts)`,
    exampleOutput: "The Sopranos -- Waste Management Contract\n['the sopranos', 'waste management contract']",
    notes: "`.strip().title()` normalises the clause. `.split(\" -- \")` divides it on the separator.",
    keyPoints: [
      "Strings are immutable — chain methods for multi-step transforms",
      "`.title()` capitalises each word",
      "`.split(sep)` returns a list split on `sep`",
      "`.strip()` removes edge whitespace",
    ],
  },

  // ── Challenge 07: List Comprehension ─────────────────────────────────────

  "st-py-07": {
    intro: "Dustin needs a list of each Party member's name in uppercase — but writing a loop for it seems excessive. Python's list comprehension builds a new list in a single expression.",
    concept: "A list comprehension creates a new list by applying an expression to each item in an iterable: `[expr for item in iterable]`. Add an optional filter with `if condition` at the end.",
    example: `names = ["mike", "dustin", "lucas", "eleven"]
upper = [n.upper() for n in names]
print(upper)

evens = [x for x in range(10) if x % 2 == 0]
print(evens)`,
    exampleOutput: "['MIKE', 'DUSTIN', 'LUCAS', 'ELEVEN']\n[0, 2, 4, 6, 8]",
    notes: "`[n.upper() for n in names]` builds a new list where each name is uppercased. The second comprehension filters only even numbers from `range(10)`.",
    keyPoints: [
      "Syntax: `[expression for item in iterable]`",
      "Add a filter: `[expr for item in iterable if condition]`",
      "Returns a brand-new list — the original is unchanged",
      "More concise than a for-loop + `.append()` for simple transformations",
    ],
  },

  "sv-py-07": {
    intro: "Irving needs to double every refinement score in the MDR log. List comprehension lets him transform the entire list in one readable line.",
    concept: "A list comprehension creates a new list by applying an expression to each item in an iterable: `[expr for item in iterable]`. An optional `if condition` filters items.",
    example: `scores = [80, 55, 90, 70, 45]
doubled = [s * 2 for s in scores]
high = [s for s in scores if s >= 70]
print(doubled)
print(high)`,
    exampleOutput: "[160, 110, 180, 140, 90]\n[80, 90, 70]",
    notes: "`[s * 2 for s in scores]` builds a new list of doubled values. The filtered comprehension keeps only scores ≥ 70.",
    keyPoints: [
      "Syntax: `[expression for item in iterable]`",
      "Optional filter: `[expr for item in iterable if condition]`",
      "Returns a new list — the original is unchanged",
      "Cleaner than a for-loop + `.append()` for transformations",
    ],
  },

  "bb-py-07": {
    intro: "Walt needs a list of only the batches that passed quality control — purity above 95. List comprehension filters the full list in a single line.",
    concept: "A list comprehension creates a new list by applying an expression to each item: `[expr for item in iterable if condition]`. The `if` part is optional.",
    example: `purities = [88, 96, 99, 91, 97]
passing = [p for p in purities if p > 95]
grades = ["A" if p >= 99 else "B" for p in purities]
print(passing)
print(grades)`,
    exampleOutput: "[96, 99, 97]\n['B', 'B', 'A', 'B', 'B']",
    notes: "`[p for p in purities if p > 95]` filters to only passing purities. The second comprehension uses a conditional expression (`A` if 99+, else `B`).",
    keyPoints: [
      "Syntax: `[expr for item in iterable]`",
      "Filter with: `[expr for item in iterable if condition]`",
      "Inline conditional: `[a if cond else b for item in iterable]`",
      "Returns a new list every time",
    ],
  },

  "to-py-07": {
    intro: "Jim needs a list of only the sales that beat Dwight's numbers — over $10,000. List comprehension filters the full quarterly list in a single expression.",
    concept: "A list comprehension builds a new list from an iterable. Add `if condition` to filter items. The expression can transform each item at the same time.",
    example: `sales = [8000, 12000, 5000, 15000, 9000]
big_sales = [s for s in sales if s > 10000]
formatted = [f"\${s:,}" for s in big_sales]
print(big_sales)
print(formatted)`,
    exampleOutput: "[12000, 15000]\n['$12,000', '$15,000']",
    notes: "The first comprehension filters to values over 10000. The second formats each as a dollar string using an f-string with a comma format specifier.",
    keyPoints: [
      "Syntax: `[expr for item in iterable if condition]`",
      "Expressions can be function calls, f-strings, math, etc.",
      "Returns a new list — the original is unchanged",
      "The filter condition is optional",
    ],
  },

  "got-py-07": {
    intro: "Daenerys needs to know which dragons have a fire rating above 8. List comprehension filters the roster in one concise expression.",
    concept: "A list comprehension creates a new list by applying an expression to each item and optionally filtering: `[expr for item in iterable if condition]`.",
    example: `ratings = [9, 7, 10, 6, 8]
strong = [r for r in ratings if r > 7]
doubled = [r * 2 for r in ratings]
print(strong)
print(doubled)`,
    exampleOutput: "[9, 10, 8]\n[18, 14, 20, 12, 16]",
    notes: "`[r for r in ratings if r > 7]` filters to only ratings above 7. `[r * 2 for r in ratings]` doubles every rating.",
    keyPoints: [
      "Syntax: `[expression for item in iterable]`",
      "Optional filter: add `if condition` after the iterable",
      "Returns a brand-new list",
      "Can combine transformation and filtering in one expression",
    ],
  },

  "mx-py-07": {
    intro: "Neo needs a list of only the anomaly codes that start with the letter 'A'. List comprehension filters the full scan result in one line.",
    concept: "A list comprehension creates a new list by applying an expression to each item and optionally filtering: `[expr for item in iterable if condition]`.",
    example: `codes = ["Alpha", "Beta", "Anomaly", "Array", "Gamma"]
a_codes = [c for c in codes if c.startswith("A")]
upper_codes = [c.upper() for c in codes]
print(a_codes)
print(upper_codes)`,
    exampleOutput: "['Alpha', 'Anomaly', 'Array']\n['ALPHA', 'BETA', 'ANOMALY', 'ARRAY', 'GAMMA']",
    notes: "`c.startswith(\"A\")` is the filter condition. The second comprehension transforms every code to uppercase.",
    keyPoints: [
      "Syntax: `[expr for item in iterable if condition]`",
      "String methods like `.startswith()` work in comprehension conditions",
      "Returns a new list — the original is unchanged",
      "Comprehensions are a Pythonic alternative to for-loops",
    ],
  },

  "rm-py-07": {
    intro: "Rick needs a list of all dimension IDs that have a danger level below 5. List comprehension filters the full catalogue in a single expression.",
    concept: "A list comprehension builds a new list from an iterable, optionally applying a transformation and/or a filter condition: `[expr for item in iterable if condition]`.",
    example: `dimensions = [("C-137", 3), ("J-22", 8), ("K-83", 2), ("M-99", 6)]
safe = [d[0] for d in dimensions if d[1] < 5]
danger_levels = [d[1] for d in dimensions]
print(safe)
print(danger_levels)`,
    exampleOutput: "['C-137', 'K-83']\n[3, 8, 2, 6]",
    notes: "`d[0]` extracts the ID; `d[1] < 5` filters by danger level. The second comprehension extracts just the danger levels.",
    keyPoints: [
      "Syntax: `[expression for item in iterable if condition]`",
      "Access tuple elements with `item[0]`, `item[1]`",
      "Filter condition is optional",
      "Returns a new list every time",
    ],
  },

  "sg-py-07": {
    intro: "The Front Man needs a list of all player numbers for survivors (status 'alive'). List comprehension extracts the numbers in one clean expression.",
    concept: "A list comprehension creates a new list by applying an expression to each item and optionally filtering: `[expr for item in iterable if condition]`.",
    example: `players = [("067", "alive"), ("218", "eliminated"), ("456", "alive"), ("101", "eliminated")]
survivors = [p[0] for p in players if p[1] == "alive"]
all_nums = [p[0] for p in players]
print(survivors)
print(all_nums)`,
    exampleOutput: "['067', '456']\n['067', '218', '456', '101']",
    notes: "`p[0]` is the player number; `p[1] == \"alive\"` filters to survivors. The second comprehension extracts all numbers without filtering.",
    keyPoints: [
      "Syntax: `[expression for item in iterable if condition]`",
      "Access tuple elements by index: `p[0]`, `p[1]`",
      "Returns a new list — the original is unchanged",
      "Filter condition is optional",
    ],
  },

  "ad-py-07": {
    intro: "Lucille needs a list of only the family members whose names are longer than five characters. List comprehension filters the roster in one line.",
    concept: "A list comprehension builds a new list, optionally filtering items with `if condition`. The condition can use any Python expression, including `len()`.",
    example: `family = ["Michael", "George", "Lucille", "Buster", "Gob", "Maeby"]
long_names = [name for name in family if len(name) > 5]
initials = [name[0] for name in family]
print(long_names)
print(initials)`,
    exampleOutput: "['Michael', 'George', 'Lucille', 'Buster']\n['M', 'G', 'L', 'B', 'G', 'M']",
    notes: "`len(name) > 5` filters names longer than 5 characters. `name[0]` extracts the first character of each name.",
    keyPoints: [
      "Syntax: `[expr for item in iterable if condition]`",
      "`len()` works in conditions",
      "String indexing (`name[0]`) works in expressions",
      "Returns a new list — the original is unchanged",
    ],
  },

  "ba-py-07": {
    intro: "Barbie needs a list of all her careers that contain the word 'Doctor'. List comprehension filters the career list in one expression.",
    concept: "A list comprehension builds a new list by applying an expression to each item, with an optional filter: `[expr for item in iterable if condition]`.",
    example: `careers = ["Doctor Barbie", "Astronaut", "Doctor of Law", "Teacher", "Marine Biologist"]
doctor_careers = [c for c in careers if "Doctor" in c]
short_careers = [c for c in careers if len(c) <= 9]
print(doctor_careers)
print(short_careers)`,
    exampleOutput: "['Doctor Barbie', 'Doctor of Law']\n['Astronaut', 'Teacher']",
    notes: "`\"Doctor\" in c` checks if the substring is present. `len(c) <= 9` filters to short career names.",
    keyPoints: [
      "Use `in` to check if a substring is in a string",
      "Syntax: `[expr for item in iterable if condition]`",
      "Returns a new list — the original is unchanged",
      "Multiple conditions: `if cond1 and cond2`",
    ],
  },

  "sc-py-07": {
    intro: "Carrie needs a list of all her column titles that end with a question mark — her signature style. List comprehension filters the archive in one line.",
    concept: "A list comprehension builds a new list from an iterable, optionally filtering with `if condition`: `[expr for item in iterable if condition]`.",
    example: `titles = ["Can Love Last?", "The Art of the Breakup", "Are We Dating?", "Brunch Forever"]
questions = [t for t in titles if t.endswith("?")]
lengths = [len(t) for t in titles]
print(questions)
print(lengths)`,
    exampleOutput: "['Can Love Last?', 'Are We Dating?']\n[14, 20, 14, 14]",
    notes: "`.endswith(\"?\")` is the filter condition. The second comprehension calculates the length of every title.",
    keyPoints: [
      "`.endswith(char)` checks the last character",
      "Syntax: `[expr for item in iterable if condition]`",
      "Returns a new list — the original is unchanged",
      "Expressions can be any valid Python: `len(t)`, `t.upper()`, etc.",
    ],
  },

  "sp-py-07": {
    intro: "Tony needs a list of only the crew members with names longer than four characters for the formal sit-down invitation. List comprehension filters the list cleanly.",
    concept: "A list comprehension builds a new list by applying an expression to each item, with an optional filter: `[expr for item in iterable if condition]`.",
    example: `crew = ["Tony", "Paulie", "Sil", "Bobby", "Janice"]
invited = [name for name in crew if len(name) > 4]
upper_crew = [name.upper() for name in crew]
print(invited)
print(upper_crew)`,
    exampleOutput: "['Paulie', 'Bobby', 'Janice']\n['TONY', 'PAULIE', 'SIL', 'BOBBY', 'JANICE']",
    notes: "`len(name) > 4` filters to names with more than 4 characters. The second comprehension uppercases every name.",
    keyPoints: [
      "Syntax: `[expr for item in iterable if condition]`",
      "`len()` works in conditions",
      "Returns a new list — the original is unchanged",
      "Comprehensions are concise alternatives to for-loops",
    ],
  },

  // ── Challenge 08: Nested Data Structures ─────────────────────────────────

  "st-py-08": {
    intro: "Hopper's investigation file on each creature is a dictionary inside a dictionary. Python's nested data structures let him access any detail with chained key lookups.",
    concept: "Python allows nesting: a dictionary can contain lists, and lists can contain dictionaries. Access nested values by chaining `[]` lookups: `data['key1']['key2']` or `data['key'][index]`.",
    example: `creatures = {
    "Demogorgon": {"threat": 9, "locations": ["Mirkwood", "Lab"]},
    "Mind Flayer": {"threat": 10, "locations": ["Shadow Realm"]},
}
print(creatures["Demogorgon"]["threat"])
print(creatures["Demogorgon"]["locations"][0])`,
    exampleOutput: "9\nMirkwood",
    notes: "`creatures[\"Demogorgon\"][\"threat\"]` chains two key lookups. `creatures[\"Demogorgon\"][\"locations\"][0]` adds an index lookup into the list.",
    keyPoints: [
      "Nest any Python type inside another: dicts in dicts, lists in dicts, etc.",
      "Chain `[]` for nested access: `d['key1']['key2']`",
      "Mix dict key lookups with list index lookups freely",
      "Use a temp variable to avoid repeating long chains: `c = data['creature']`",
    ],
  },

  "sv-py-08": {
    intro: "Lumon's employee database nests each employee's details inside a top-level dictionary. Mark needs to access a specific field deep inside the nested structure.",
    concept: "Python allows nesting: dictionaries can contain lists or other dictionaries. Access nested values by chaining `[]` lookups.",
    example: `employees = {
    "Mark S.": {"dept": "MDR", "scores": [80, 85, 78]},
    "Helly R.": {"dept": "MDR", "scores": [60, 72, 68]},
}
print(employees["Mark S."]["dept"])
print(employees["Helly R."]["scores"][2])`,
    exampleOutput: "MDR\n68",
    notes: "`employees[\"Mark S.\"][\"dept\"]` chains two dict lookups. `employees[\"Helly R.\"][\"scores\"][2]` chains a dict lookup with a list index.",
    keyPoints: [
      "Nest dicts inside dicts: `{\"key\": {\"inner_key\": value}}`",
      "Access with `d['outer']['inner']`",
      "Access list inside a dict with `d['key'][index]`",
      "Use a temp variable when chains get long",
    ],
  },

  "bb-py-08": {
    intro: "Walt's operation log is a list of batch dictionaries. Each dict contains the product name, purity, and a list of territories. Jesse needs to access the nested territory data.",
    concept: "Python allows nesting lists inside dicts, dicts inside lists, etc. Chain `[]` lookups to drill down into any level of a nested structure.",
    example: `batches = [
    {"product": "Blue Sky", "purity": 99, "markets": ["NM", "AZ"]},
    {"product": "Standard", "purity": 88, "markets": ["TX"]},
]
print(batches[0]["product"])
print(batches[0]["markets"][1])`,
    exampleOutput: "Blue Sky\nAZ",
    notes: "`batches[0]` gets the first dict. `batches[0][\"product\"]` gets the product name. `batches[0][\"markets\"][1]` gets the second market.",
    keyPoints: [
      "A list of dicts is a common pattern for records",
      "Access: `list[index]['key']`",
      "A dict can have a list as a value: `{'markets': ['NM', 'AZ']}`",
      "Chain `[]` for any depth of nesting",
    ],
  },

  "to-py-08": {
    intro: "Toby's HR system stores each employee as a dict with a nested list of warnings. He needs to access specific warnings for a performance review.",
    concept: "Python allows nesting: lists inside dicts, dicts inside lists, dicts inside dicts. Chain `[]` lookups to access any level of the structure.",
    example: `records = {
    "Dwight": {"dept": "Sales", "warnings": ["bears", "beets"]},
    "Jim": {"dept": "Sales", "warnings": []},
}
print(records["Dwight"]["warnings"][0])
print(len(records["Jim"]["warnings"]))`,
    exampleOutput: "bears\n0",
    notes: "`records[\"Dwight\"][\"warnings\"][0]` chains two dict lookups and a list index. `len()` counts Jim's (empty) warnings list.",
    keyPoints: [
      "Chain lookups: `d['key1']['key2'][index]`",
      "Empty list `[]` is a valid value in a dict",
      "`len()` works on any list, including nested ones",
      "Use temp variables to avoid repeating long chains",
    ],
  },

  "got-py-08": {
    intro: "The Maester's map stores each region as a dict with a list of house names and an army count. Sam needs to access specific data from the nested structure.",
    concept: "Python allows nesting: lists inside dicts, dicts inside dicts. Chain `[]` lookups to drill down: `data['region']['key'][index]`.",
    example: `regions = {
    "North": {"houses": ["Stark", "Bolton"], "army": 18000},
    "South": {"houses": ["Lannister", "Tyrell"], "army": 75000},
}
print(regions["North"]["houses"][0])
print(regions["South"]["army"])`,
    exampleOutput: "Stark\n75000",
    notes: "`regions[\"North\"][\"houses\"][0]` chains two dict lookups and a list index. `regions[\"South\"][\"army\"]` chains two dict lookups.",
    keyPoints: [
      "Dicts can hold lists as values",
      "Chain lookups: `d['key1']['key2'][index]`",
      "Each `[]` drills one level deeper",
      "Use a temp variable: `north = regions['North']` then `north['army']`",
    ],
  },

  "mx-py-08": {
    intro: "The Oracle's anomaly report is a nested structure: each agent has a dict with threat levels and a list of identified weaknesses. Trinity needs to access specific fields.",
    concept: "Python allows nesting: a dict can contain another dict, or a list, or a list of dicts. Chain `[]` lookups to access any level.",
    example: `agents = {
    "Smith": {"threat": 10, "weaknesses": ["EMP", "logic loop"]},
    "Jones": {"threat": 7, "weaknesses": ["mirror glitch"]},
}
print(agents["Smith"]["threat"])
print(agents["Smith"]["weaknesses"][1])`,
    exampleOutput: "10\nlogic loop",
    notes: "`agents[\"Smith\"][\"threat\"]` chains two dict lookups. `agents[\"Smith\"][\"weaknesses\"][1]` adds a list index.",
    keyPoints: [
      "Dicts can contain lists as values",
      "Access: `d['key1']['key2'][index]`",
      "Mix dict lookups and list indexing freely",
      "Temp variables reduce repetition: `s = agents['Smith']`",
    ],
  },

  "rm-py-08": {
    intro: "Rick's dimension database is a list of dicts, each with a dimension ID, danger level, and list of known creatures. Morty needs to look up specific nested values.",
    concept: "Python allows nesting lists inside dicts, and dicts inside lists. Chain `[]` lookups to access any level of the nested structure.",
    example: `dimensions = [
    {"id": "C-137", "danger": 3, "creatures": ["Cromulon", "Gazorpian"]},
    {"id": "J-22", "danger": 8, "creatures": ["Ricks"]},
]
print(dimensions[0]["id"])
print(dimensions[0]["creatures"][1])`,
    exampleOutput: "C-137\nGazorpian",
    notes: "`dimensions[0]` gets the first dict. `dimensions[0][\"id\"]` gets the ID. `dimensions[0][\"creatures\"][1]` chains list index + dict key + list index.",
    keyPoints: [
      "A list of dicts is a common 'records' pattern",
      "Access: `list[index]['key']` or `list[index]['key'][index]`",
      "Chain as many `[]` as needed",
      "Each `[]` dereferences one level",
    ],
  },

  "sg-py-08": {
    intro: "The game records each round as a dict containing the round name, eliminated count, and a list of surviving player numbers. The Front Man accesses specific nested data for the briefing.",
    concept: "Python allows nesting: dicts can contain lists, and lists can contain dicts. Chain `[]` lookups to access any level.",
    example: `rounds = [
    {"name": "Red Light Green Light", "eliminated": 201, "survivors": ["067", "218", "456"]},
    {"name": "Honeycomb", "eliminated": 52, "survivors": ["067", "456"]},
]
print(rounds[0]["name"])
print(rounds[1]["survivors"][0])`,
    exampleOutput: "Red Light Green Light\n067",
    notes: "`rounds[0][\"name\"]` chains list index and dict key. `rounds[1][\"survivors\"][0]` chains list index, dict key, and list index.",
    keyPoints: [
      "A list of dicts models a sequence of records",
      "Access: `list[i]['key']`",
      "Access nested list: `list[i]['key'][j]`",
      "Chain `[]` for any depth of nesting",
    ],
  },

  "ad-py-08": {
    intro: "The Bluth Company's venture file is a dict of dicts, each containing a status and a list of assets. Michael needs to access the nested asset data.",
    concept: "Python allows nesting dicts inside dicts, and lists inside dicts. Chain `[]` lookups to drill down into any level.",
    example: `ventures = {
    "banana_stand": {"status": "burnt", "assets": ["stand", "cash"]},
    "gobias": {"status": "active", "assets": ["coffee"]},
}
print(ventures["banana_stand"]["status"])
print(ventures["banana_stand"]["assets"][1])`,
    exampleOutput: "burnt\ncash",
    notes: "`ventures[\"banana_stand\"][\"status\"]` chains two dict lookups. Adding `[1]` accesses the second asset in the list.",
    keyPoints: [
      "Chain lookups: `d['outer']['inner']`",
      "Dict values can be lists: access with `d['key'][index]`",
      "Nest as deeply as needed",
      "Temp variables reduce repetition",
    ],
  },

  "ba-py-08": {
    intro: "Barbie's career file is a dict of dicts, each career containing a salary and a list of required skills. She needs to access specific nested fields.",
    concept: "Python allows nesting: dicts inside dicts, lists inside dicts. Chain `[]` lookups to access any level of the nested structure.",
    example: `careers = {
    "Astronaut": {"salary": 120000, "skills": ["STEM", "fitness", "courage"]},
    "Doctor": {"salary": 200000, "skills": ["medicine", "empathy"]},
}
print(careers["Astronaut"]["salary"])
print(careers["Doctor"]["skills"][0])`,
    exampleOutput: "120000\nmedicine",
    notes: "`careers[\"Astronaut\"][\"salary\"]` chains two dict lookups. `careers[\"Doctor\"][\"skills\"][0]` adds a list index.",
    keyPoints: [
      "Dict of dicts: `{'career': {'salary': value}}`",
      "Access: `d['career']['salary']`",
      "Dict with list value: `d['career']['skills'][index]`",
      "Chain `[]` for any depth",
    ],
  },

  "sc-py-08": {
    intro: "Carrie's little black book is a dict of dicts, each man containing a rating and a list of red flags. Miranda looks up the nested data for analysis.",
    concept: "Python allows nesting dicts inside dicts, and lists inside dicts. Chain `[]` lookups to drill down into any level.",
    example: `book = {
    "Big": {"rating": 7, "flags": ["commitment issues", "reappears"]},
    "Aidan": {"rating": 9, "flags": ["too perfect"]},
}
print(book["Big"]["rating"])
print(book["Big"]["flags"][0])`,
    exampleOutput: "7\ncommitment issues",
    notes: "`book[\"Big\"][\"rating\"]` chains two dict lookups. `book[\"Big\"][\"flags\"][0]` adds a list index.",
    keyPoints: [
      "Chain lookups: `d['key1']['key2']`",
      "Access list value: `d['key'][index]`",
      "Temp variables reduce repetition",
      "Dicts can nest to any depth",
    ],
  },

  "sp-py-08": {
    intro: "Tony's family file keeps each member's data as a nested dict with a list of business interests. Bobby needs to access specific nested values for the tribute calculation.",
    concept: "Python allows nesting dicts inside dicts, and lists inside dicts. Chain `[]` lookups to access any level.",
    example: `family = {
    "Tony": {"role": "boss", "businesses": ["waste", "Bada Bing"]},
    "Paulie": {"role": "capo", "businesses": ["collections"]},
}
print(family["Tony"]["role"])
print(family["Tony"]["businesses"][1])`,
    exampleOutput: "boss\nBada Bing",
    notes: "`family[\"Tony\"][\"role\"]` chains two dict lookups. `family[\"Tony\"][\"businesses\"][1]` adds a list index.",
    keyPoints: [
      "Nested dicts: `{'outer': {'inner': value}}`",
      "Access: `d['outer']['inner']`",
      "Dict with list: `d['key'][index]`",
      "Chain `[]` for any depth of nesting",
    ],
  },

  // ── Challenge 09: Sorting ─────────────────────────────────────────────────

  "st-py-09": {
    intro: "The Party needs to rank Demogorgon sightings from most to least dangerous. Python's `.sort()` and `sorted()` handle ordering any list in ascending or descending order.",
    concept: "`.sort()` sorts a list in place (modifies the original). `sorted()` returns a new sorted list. Both accept `reverse=True` for descending order and `key=func` to sort by a custom criterion.",
    example: `sightings = [5, 2, 9, 1, 7]
asc = sorted(sightings)
sightings.sort(reverse=True)
print(asc)
print(sightings)`,
    exampleOutput: "[1, 2, 5, 7, 9]\n[9, 7, 5, 2, 1]",
    notes: "`sorted()` returns a new list, leaving `sightings` unchanged. `.sort(reverse=True)` modifies `sightings` in place to descending order.",
    keyPoints: [
      "`sorted(iterable)` returns a new sorted list — the original is unchanged",
      "`.sort()` modifies the list in place and returns `None`",
      "`reverse=True` sorts in descending order",
      "`key=func` sorts by a custom function, e.g., `key=len` for string length",
    ],
  },

  "sv-py-09": {
    intro: "MDR needs to rank employees by refinement score for the quarterly review. Python's `sorted()` with a key function handles ordering by a specific field.",
    concept: "`.sort()` sorts a list in place. `sorted()` returns a new sorted list. Use `key=lambda x: x['field']` to sort dicts by a specific key. `reverse=True` gives descending order.",
    example: `employees = [
    {"name": "Mark", "score": 85},
    {"name": "Dylan", "score": 92},
    {"name": "Helly", "score": 71},
]
by_score = sorted(employees, key=lambda e: e["score"], reverse=True)
for emp in by_score:
    print(emp["name"], emp["score"])`,
    exampleOutput: "Dylan 92\nMark 85\nHelly 71",
    notes: "`sorted(..., key=lambda e: e[\"score\"], reverse=True)` sorts the list of dicts by each dict's `score` value, highest first.",
    keyPoints: [
      "`sorted()` returns a new list — the original is unchanged",
      "`key=lambda x: x['field']` sorts dicts by a specific key",
      "`reverse=True` gives descending order",
      "`.sort()` modifies the list in place",
    ],
  },

  "bb-py-09": {
    intro: "Walt wants to review all batches sorted by purity, highest first. Python's `sorted()` with `reverse=True` handles the ranking in one call.",
    concept: "`.sort()` sorts in place. `sorted()` returns a new sorted list. `reverse=True` gives descending order. `key=` accepts any function to sort by a custom criterion.",
    example: `batches = [
    {"id": "B1", "purity": 88},
    {"id": "B2", "purity": 99},
    {"id": "B3", "purity": 94},
]
ranked = sorted(batches, key=lambda b: b["purity"], reverse=True)
for b in ranked:
    print(b["id"], b["purity"])`,
    exampleOutput: "B2 99\nB3 94\nB1 88",
    notes: "`sorted(..., key=lambda b: b[\"purity\"], reverse=True)` sorts by the `purity` value of each batch dict, highest first.",
    keyPoints: [
      "`sorted()` returns a new sorted list",
      "`key=lambda b: b['purity']` extracts the sort criterion",
      "`reverse=True` gives descending (highest-first) order",
      "`.sort()` modifies in place; `sorted()` does not",
    ],
  },

  "to-py-09": {
    intro: "Dwight wants the full sales leaderboard sorted from highest to lowest. Python's `sorted()` with a key function handles ranking the list of sales dicts.",
    concept: "`.sort()` sorts in place. `sorted()` returns a new sorted list without changing the original. `key=lambda` extracts the sort value. `reverse=True` gives descending order.",
    example: `reps = [
    {"name": "Dwight", "sales": 14200},
    {"name": "Jim", "sales": 8750},
    {"name": "Phyllis", "sales": 11500},
]
ranked = sorted(reps, key=lambda r: r["sales"], reverse=True)
for r in ranked:
    print(r["name"], r["sales"])`,
    exampleOutput: "Dwight 14200\nPhyllis 11500\nJim 8750",
    notes: "`key=lambda r: r[\"sales\"]` extracts each rep's sales figure for comparison. `reverse=True` gives highest-first.",
    keyPoints: [
      "`sorted()` returns a new sorted list — original unchanged",
      "`key=lambda` extracts the comparison value",
      "`reverse=True` for highest-first",
      "`.sort()` is in-place; `sorted()` is not",
    ],
  },

  "got-py-09": {
    intro: "The Small Council needs the houses ranked by army size for the war briefing. Python's `sorted()` with a key function builds the ranking.",
    concept: "`.sort()` sorts in place. `sorted()` returns a new sorted list. Use `key=lambda` to extract the sort value from dicts. `reverse=True` gives descending order.",
    example: `houses = [
    {"name": "Stark", "army": 18000},
    {"name": "Lannister", "army": 35000},
    {"name": "Tyrell", "army": 40000},
]
ranked = sorted(houses, key=lambda h: h["army"], reverse=True)
for h in ranked:
    print(h["name"], h["army"])`,
    exampleOutput: "Tyrell 40000\nLannister 35000\nStark 18000",
    notes: "`key=lambda h: h[\"army\"]` sorts by army size. `reverse=True` gives descending (largest first).",
    keyPoints: [
      "`sorted()` returns a new sorted list",
      "`key=lambda h: h['army']` extracts the sort criterion",
      "`reverse=True` gives descending order",
      "Original list is unchanged by `sorted()`",
    ],
  },

  "mx-py-09": {
    intro: "Morpheus needs the anomalies ranked by threat level, highest first. Python's `sorted()` with a key function handles the ordering.",
    concept: "`.sort()` sorts in place. `sorted()` returns a new sorted list. `key=lambda` extracts the value to sort by. `reverse=True` gives descending order.",
    example: `anomalies = [
    {"name": "Smith", "threat": 10},
    {"name": "Jones", "threat": 7},
    {"name": "Brown", "threat": 8},
]
ranked = sorted(anomalies, key=lambda a: a["threat"], reverse=True)
for a in ranked:
    print(a["name"], a["threat"])`,
    exampleOutput: "Smith 10\nBrown 8\nJones 7",
    notes: "`key=lambda a: a[\"threat\"]` extracts the threat for comparison. `reverse=True` sorts highest first.",
    keyPoints: [
      "`sorted()` returns a new sorted list — original unchanged",
      "`key=lambda` extracts the comparison value",
      "`reverse=True` gives descending order",
      "Sort dicts by any key using this pattern",
    ],
  },

  "rm-py-09": {
    intro: "Rick needs the dimension catalogue sorted by danger level, safest first. Python's `sorted()` with a key function handles the ranking.",
    concept: "`.sort()` modifies in place. `sorted()` returns a new sorted list. `key=lambda` extracts the sort criterion. Omit `reverse=True` for ascending order.",
    example: `dims = [
    {"id": "C-137", "danger": 3},
    {"id": "J-22", "danger": 8},
    {"id": "K-83", "danger": 1},
]
safest_first = sorted(dims, key=lambda d: d["danger"])
for d in safest_first:
    print(d["id"], d["danger"])`,
    exampleOutput: "K-83 1\nC-137 3\nJ-22 8",
    notes: "`sorted()` without `reverse=True` defaults to ascending (lowest first). `key=lambda d: d[\"danger\"]` extracts danger levels.",
    keyPoints: [
      "`sorted()` default is ascending (lowest first)",
      "`reverse=True` gives descending order",
      "`key=lambda d: d['danger']` extracts the sort value",
      "Original list is unchanged by `sorted()`",
    ],
  },

  "sg-py-09": {
    intro: "The Front Man needs the players ranked by prize amount for the final ceremony. Python's `sorted()` with a key function handles the ranking.",
    concept: "`.sort()` sorts in place. `sorted()` returns a new sorted list. `key=lambda` extracts the sort criterion from each item. `reverse=True` gives descending order.",
    example: `players = [
    {"num": "456", "prize": 0},
    {"num": "067", "prize": 5000000},
    {"num": "218", "prize": 1000000},
]
ranked = sorted(players, key=lambda p: p["prize"], reverse=True)
for p in ranked:
    print(p["num"], p["prize"])`,
    exampleOutput: "067 5000000\n218 1000000\n456 0",
    notes: "`key=lambda p: p[\"prize\"]` sorts by prize amount. `reverse=True` puts the highest first.",
    keyPoints: [
      "`sorted()` returns a new sorted list",
      "`key=lambda p: p['prize']` extracts the sort value",
      "`reverse=True` gives descending order",
      "`.sort()` would modify the original list in place",
    ],
  },

  "ad-py-09": {
    intro: "George Michael needs the Bluth ventures sorted by profit, highest first, for his father's sake. Python's `sorted()` with a key function handles the ranking.",
    concept: "`.sort()` sorts in place. `sorted()` returns a new sorted list. `key=lambda` extracts the sort criterion. `reverse=True` gives descending order.",
    example: `ventures = [
    {"name": "banana stand", "profit": 10000},
    {"name": "housing dev", "profit": -500000},
    {"name": "yacht", "profit": 3000},
]
ranked = sorted(ventures, key=lambda v: v["profit"], reverse=True)
for v in ranked:
    print(v["name"], v["profit"])`,
    exampleOutput: "banana stand 10000\nyacht 3000\nhousing dev -500000",
    notes: "`key=lambda v: v[\"profit\"]` extracts profit for comparison. `reverse=True` puts highest-profit first.",
    keyPoints: [
      "`sorted()` returns a new sorted list — original unchanged",
      "`key=lambda v: v['profit']` extracts the sort value",
      "`reverse=True` gives highest-first",
      "Negative numbers sort correctly — `sorted()` handles them",
    ],
  },

  "ba-py-09": {
    intro: "Barbie needs her careers sorted alphabetically for the career fair programme. Python's `sorted()` handles string sorting with no extra arguments.",
    concept: "`.sort()` sorts in place. `sorted()` returns a new sorted list. For strings, the default sort is alphabetical (ascending). `reverse=True` gives reverse-alphabetical.",
    example: `careers = ["Astronaut", "Doctor", "President", "Teacher", "Pilot"]
alpha = sorted(careers)
reverse_alpha = sorted(careers, reverse=True)
print(alpha)
print(reverse_alpha)`,
    exampleOutput: "['Astronaut', 'Doctor', 'Pilot', 'President', 'Teacher']\n['Teacher', 'President', 'Pilot', 'Doctor', 'Astronaut']",
    notes: "`sorted(careers)` returns a new alphabetically sorted list. `reverse=True` reverses the order. The original `careers` list is unchanged.",
    keyPoints: [
      "`sorted()` returns a new sorted list",
      "Strings sort alphabetically by default",
      "`reverse=True` for Z→A order",
      "`.sort()` modifies in place; `sorted()` does not",
    ],
  },

  "sc-py-09": {
    intro: "Carrie needs her column archive sorted by word count, longest first. Python's `sorted()` with a key function handles the ranking.",
    concept: "`.sort()` sorts in place. `sorted()` returns a new sorted list. `key=lambda` extracts the sort criterion. `reverse=True` gives descending order.",
    example: `columns = [
    {"title": "Love in the City", "words": 900},
    {"title": "The Breakup Plan", "words": 1200},
    {"title": "Brunch Forever", "words": 600},
]
ranked = sorted(columns, key=lambda c: c["words"], reverse=True)
for c in ranked:
    print(c["title"], c["words"])`,
    exampleOutput: "The Breakup Plan 1200\nLove in the City 900\nBrunch Forever 600",
    notes: "`key=lambda c: c[\"words\"]` extracts word counts. `reverse=True` sorts longest first.",
    keyPoints: [
      "`sorted()` returns a new sorted list",
      "`key=lambda c: c['words']` extracts the sort value",
      "`reverse=True` gives descending order",
      "Original list is unchanged by `sorted()`",
    ],
  },

  "sp-py-09": {
    intro: "Tony needs the crew sorted by earnings, highest first, before the tribute meeting. Python's `sorted()` with a key function handles the ranking.",
    concept: "`.sort()` sorts in place. `sorted()` returns a new sorted list. `key=lambda` extracts the sort criterion. `reverse=True` gives descending order.",
    example: `crew = [
    {"name": "Paulie", "earnings": 85000},
    {"name": "Silvio", "earnings": 120000},
    {"name": "Bobby", "earnings": 60000},
]
ranked = sorted(crew, key=lambda c: c["earnings"], reverse=True)
for c in ranked:
    print(c["name"], c["earnings"])`,
    exampleOutput: "Silvio 120000\nPaulie 85000\nBobby 60000",
    notes: "`key=lambda c: c[\"earnings\"]` extracts the earnings for sorting. `reverse=True` gives highest-first.",
    keyPoints: [
      "`sorted()` returns a new sorted list — original unchanged",
      "`key=lambda` extracts the comparison value",
      "`reverse=True` gives descending order",
      "`.sort()` modifies the list in place",
    ],
  },

  // ── Challenge 10: Exception Handling ─────────────────────────────────────

  "st-py-10": {
    intro: "The Hawkins lab computer crashes whenever it encounters an unknown creature. Eleven needs exception handling so the program can recover gracefully instead of shutting down completely.",
    concept: "Python's `try/except` block catches errors at runtime. Code in `try` runs normally; if an exception is raised, execution jumps to the matching `except` block. `finally` runs regardless of outcome.",
    example: `def lookup(creatures, name):
    try:
        return creatures[name]
    except KeyError:
        return "Unknown entity"

db = {"Demogorgon": 9, "Mind Flayer": 10}
print(lookup(db, "Demogorgon"))
print(lookup(db, "Demo-dog"))`,
    exampleOutput: "9\nUnknown entity",
    notes: "`creatures[name]` raises `KeyError` when the name isn't in the dict. The `except KeyError` block catches it and returns a safe default instead of crashing.",
    keyPoints: [
      "`try:` wraps code that might raise an exception",
      "`except ExceptionType:` catches that specific exception",
      "Use bare `except:` to catch everything (not recommended — too broad)",
      "`finally:` runs whether or not an exception occurred — good for cleanup",
    ],
  },

  "sv-py-10": {
    intro: "Mark's refinement score lookup crashes when a code doesn't exist. Exception handling lets the program catch the error and return a safe fallback value.",
    concept: "Python's `try/except` block catches runtime errors. Put risky code in `try`; handle the error in `except`. Specific exception types like `KeyError` or `ValueError` should be caught by name.",
    example: `scores = {"Mark": 85, "Dylan": 92}

def get_score(name):
    try:
        return scores[name]
    except KeyError:
        return 0

print(get_score("Mark"))
print(get_score("Burt"))`,
    exampleOutput: "85\n0",
    notes: "Accessing a missing key raises `KeyError`. The `except KeyError` block catches it and returns 0 instead of crashing.",
    keyPoints: [
      "`try/except` catches runtime errors gracefully",
      "Catch specific exceptions by name: `except KeyError:`",
      "The program continues after the `except` block runs",
      "`finally:` runs always — use for cleanup code",
    ],
  },

  "bb-py-10": {
    intro: "Walt's purity calculator crashes on invalid inputs. Exception handling catches `ValueError` and returns a safe message instead of letting the program blow up.",
    concept: "Python's `try/except` catches runtime errors. `ValueError` is raised when a value has the right type but an invalid value. Catching it lets you return a safe fallback.",
    example: `def purity_grade(value):
    try:
        purity = float(value)
        if purity > 100:
            raise ValueError("Purity exceeds 100%")
        return f"Grade: {purity:.1f}%"
    except ValueError as e:
        return f"Invalid: {e}"

print(purity_grade("99.1"))
print(purity_grade("bad"))
print(purity_grade("101"))`,
    exampleOutput: "Grade: 99.1%\nInvalid: could not convert string to float: 'bad'\nInvalid: Purity exceeds 100%",
    notes: "`float(\"bad\")` raises `ValueError`. The `raise ValueError(...)` explicitly raises one for out-of-range values. Both are caught by the same `except ValueError` block.",
    keyPoints: [
      "`try/except ExceptionType as e:` catches the exception and binds it to `e`",
      "`raise ExceptionType(msg)` manually raises an exception",
      "You can re-raise with `raise` alone inside an `except` block",
      "`finally:` always runs — use for cleanup",
    ],
  },

  "to-py-10": {
    intro: "Ryan's commissions calculator crashes when a salesperson enters a non-number. Exception handling catches `ValueError` from `float()` and returns a helpful message.",
    concept: "Python's `try/except` catches runtime errors. `ValueError` is raised when a conversion fails (e.g., `float('abc')`). Catching it lets you return a safe fallback.",
    example: `def calculate_commission(sales_str):
    try:
        sales = float(sales_str)
        return sales * 0.05
    except ValueError:
        return "Invalid sales figure"

print(calculate_commission("8750"))
print(calculate_commission("eight"))`,
    exampleOutput: "437.5\nInvalid sales figure",
    notes: "`float(\"eight\")` raises `ValueError`. The `except ValueError` block catches it and returns a safe message instead of crashing.",
    keyPoints: [
      "`try/except` prevents runtime crashes",
      "`ValueError` occurs when a value has wrong format: `float('abc')`",
      "Catch only the exceptions you expect",
      "`finally:` runs always — use for cleanup code",
    ],
  },

  "got-py-10": {
    intro: "The Citadel's army lookup crashes when a house is not in the database. Exception handling catches the `KeyError` and returns a safe default.",
    concept: "Python's `try/except` catches runtime errors. `KeyError` is raised when you access a dict with a missing key. Catching it lets the program continue instead of crashing.",
    example: `armies = {"Stark": 18000, "Lannister": 35000}

def get_army(house):
    try:
        return armies[house]
    except KeyError:
        return 0

print(get_army("Lannister"))
print(get_army("Baratheon"))`,
    exampleOutput: "35000\n0",
    notes: "`armies[\"Baratheon\"]` raises `KeyError` because the key doesn't exist. The `except KeyError` block catches it and returns 0.",
    keyPoints: [
      "`try/except` catches exceptions before they crash the program",
      "`KeyError` occurs when a dict key is not found",
      "Catch specific exceptions, not bare `except:`",
      "`finally:` always runs — useful for cleanup",
    ],
  },

  "mx-py-10": {
    intro: "Neo's threat level calculator crashes when the input is not a number. Exception handling catches the error and keeps the program running.",
    concept: "Python's `try/except` catches runtime errors. `ValueError` is raised when a conversion fails. Catching it returns a safe fallback instead of crashing.",
    example: `def threat_score(input_str):
    try:
        level = int(input_str)
        return level * 5
    except ValueError:
        return "Input must be a number"

print(threat_score("7"))
print(threat_score("unknown"))`,
    exampleOutput: "35\nInput must be a number",
    notes: "`int(\"unknown\")` raises `ValueError`. The `except ValueError` block catches it and returns a helpful message.",
    keyPoints: [
      "`try/except` prevents crashes from bad inputs",
      "`ValueError` occurs when conversion fails: `int('abc')`",
      "Catch the most specific exception type possible",
      "`finally:` always runs",
    ],
  },

  "rm-py-10": {
    intro: "Rick's portal coordinate parser crashes on invalid dimension IDs. Exception handling lets Morty catch the error and display a safe message instead of a full system crash.",
    concept: "Python's `try/except` catches runtime errors. Put risky code in `try`; handle errors in `except`. Use specific exception types for precise control.",
    example: `def parse_coords(coord_str):
    try:
        parts = coord_str.split("-")
        if len(parts) != 2:
            raise ValueError("Expected format: LETTER-NUMBER")
        return {"prefix": parts[0], "num": int(parts[1])}
    except ValueError as e:
        return f"Invalid coords: {e}"

print(parse_coords("C-137"))
print(parse_coords("badformat"))`,
    exampleOutput: "{'prefix': 'C', 'num': 137}\nInvalid coords: Expected format: LETTER-NUMBER",
    notes: "`raise ValueError(...)` manually raises the error for bad formats. `as e` binds the exception so the message can be included in the return string.",
    keyPoints: [
      "`raise ExceptionType(msg)` manually raises an exception",
      "`except ValueError as e:` catches and names the exception",
      "Use `str(e)` or f-strings to include the error message",
      "`finally:` runs in all cases — for cleanup",
    ],
  },

  "sg-py-10": {
    intro: "The Front Man's prize calculator crashes when an invalid player number is entered. Exception handling catches the error and keeps the registration system running.",
    concept: "Python's `try/except` catches runtime errors. `ValueError` occurs when conversions fail. Catching it prevents the program from crashing.",
    example: `prize_pool = 45600000000

def calculate_share(player_str, total_players_str):
    try:
        player = int(player_str)
        total = int(total_players_str)
        return prize_pool // total
    except ValueError:
        return "Invalid player count"
    except ZeroDivisionError:
        return "No players remaining"

print(calculate_share("456", "3"))
print(calculate_share("abc", "3"))`,
    exampleOutput: "15200000000\nInvalid player count",
    notes: "Two separate `except` blocks catch two different exception types. `ValueError` covers bad conversions; `ZeroDivisionError` covers division by zero.",
    keyPoints: [
      "Chain multiple `except` blocks for different exception types",
      "`ValueError` for bad conversions; `ZeroDivisionError` for divide-by-zero",
      "Only one `except` block runs per exception",
      "`finally:` always runs",
    ],
  },

  "ad-py-10": {
    intro: "The Bluth Company's asset calculator crashes when someone enters a non-number. Michael needs exception handling to keep the system running despite Buster's inputs.",
    concept: "Python's `try/except` catches runtime errors. `ValueError` is raised when a conversion fails. Catching it returns a safe fallback instead of crashing.",
    example: `def asset_value(amount_str):
    try:
        amount = float(amount_str)
        return f"Asset value: \${amount:,.2f}"
    except ValueError:
        return "Please enter a valid number"

print(asset_value("250000"))
print(asset_value("the banana stand"))`,
    exampleOutput: "Asset value: $250,000.00\nPlease enter a valid number",
    notes: "`float(\"the banana stand\")` raises `ValueError`. The `except` block catches it and returns a user-friendly message.",
    keyPoints: [
      "`try/except` prevents crashes from invalid input",
      "`ValueError` occurs when `float()` or `int()` conversion fails",
      "Return a safe default or message from the `except` block",
      "`finally:` always runs — useful for logging or cleanup",
    ],
  },

  "ba-py-10": {
    intro: "Barbie's wardrobe budget calculator crashes when someone enters a non-number. Exception handling catches the error and keeps the Dream House running smoothly.",
    concept: "Python's `try/except` catches runtime errors. `ValueError` occurs when a conversion fails. Catching it lets you return a safe message instead of crashing.",
    example: `def budget_check(amount_str):
    try:
        amount = float(amount_str)
        return f"Budget approved: \${amount:,.2f}"
    except ValueError:
        return "Invalid budget amount"

print(budget_check("5000"))
print(budget_check("lots of money"))`,
    exampleOutput: "Budget approved: $5,000.00\nInvalid budget amount",
    notes: "`float(\"lots of money\")` raises `ValueError`. The `except ValueError` block catches it and returns a safe message.",
    keyPoints: [
      "`try/except` prevents crashes from bad inputs",
      "`ValueError` occurs when conversion fails",
      "Return a meaningful message from the `except` block",
      "`finally:` always runs",
    ],
  },

  "sc-py-10": {
    intro: "Carrie's column word-count tool crashes when a non-number is entered. Exception handling keeps the editorial system running despite chaotic inputs.",
    concept: "Python's `try/except` catches runtime errors. `ValueError` is raised when a conversion fails. The `except` block handles the error gracefully.",
    example: `def word_count_check(count_str):
    try:
        count = int(count_str)
        if count < 500:
            return "Too short for publication"
        return f"Approved: {count} words"
    except ValueError:
        return "Word count must be a number"

print(word_count_check("850"))
print(word_count_check("many"))`,
    exampleOutput: "Approved: 850 words\nWord count must be a number",
    notes: "`int(\"many\")` raises `ValueError`. The `except ValueError` block catches it and returns a helpful message.",
    keyPoints: [
      "`try/except` catches runtime errors gracefully",
      "`ValueError` occurs when `int()` conversion fails",
      "Catch specific exceptions, not bare `except:`",
      "`finally:` always runs",
    ],
  },

  "sp-py-10": {
    intro: "Satriale's cash-flow calculator crashes when someone enters a non-number. Tony needs exception handling to keep the books running even when Paulie's entering the data.",
    concept: "Python's `try/except` catches runtime errors. `ValueError` occurs when conversions fail. Catching it returns a safe fallback instead of crashing.",
    example: `def tribute_calc(earnings_str, rate):
    try:
        earnings = float(earnings_str)
        return earnings * rate
    except ValueError:
        return "Invalid earnings amount"

print(tribute_calc("80000", 0.20))
print(tribute_calc("alotta money", 0.20))`,
    exampleOutput: "16000.0\nInvalid earnings amount",
    notes: "`float(\"alotta money\")` raises `ValueError`. The `except ValueError` block catches it and returns a safe message.",
    keyPoints: [
      "`try/except` prevents crashes from bad inputs",
      "`ValueError` occurs when conversion fails",
      "Return a safe default from the `except` block",
      "`finally:` always runs",
    ],
  },

};
