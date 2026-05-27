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

};
