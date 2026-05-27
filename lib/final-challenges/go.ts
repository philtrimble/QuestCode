import type { FinalChallenge } from "@/types";

export const goFinalChallenges: Record<string, FinalChallenge> = {
  // ─── Stranger Things ────────────────────────────────────────────────────────
  "stranger-things-go": {
    id: "st-go-final",
    themeId: "stranger-things",
    languageId: "go",
    themedTitle: "The Upside Down Go Expedition",
    introNarrative:
      "The Upside Down runs on Go — fast, concurrent, and a little terrifying. Eleven has decoded a message: five Go challenges stand between Hawkins and total Mind Flayer domination. Variables, conditionals, functions, maps, and structs. You've got the code — use it.",
    questions: [
      {
        id: "st-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Mike needs to store Eleven's power level and her alias. Use Go's short variable declaration to set them up and print them.",
        prompt:
          "Declare two variables using `:=`: `name` set to `\"Eleven\"` and `powerLevel` set to `11`. Print them both using `fmt.Println`.",
        hint: "Use := to declare and initialise in one step. fmt.Println can take multiple arguments.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tname := "Eleven"\n\tpowerLevel := 11\n\tfmt.Println(name, powerLevel)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tname ___ "Eleven"\n\tpowerLevel ___ 11\n\tfmt.Println(name, powerLevel)\n}`,
        testCases: [{ input: "", expected: "Eleven 11", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "name", "powerLevel"],
      },
      {
        id: "st-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "Hopper checks whether the gate to the Upside Down is open. Print the correct warning based on the boolean.",
        prompt:
          "Write a function `gateStatus(open bool) string` that returns `\"DANGER: gate is open\"` if `open` is true, or `\"Safe: gate is closed\"` otherwise.",
        hint: "Use if open { ... } else { ... } inside your function.",
        solution: `package main\nimport "fmt"\nfunc gateStatus(open bool) string {\n\tif open {\n\t\treturn "DANGER: gate is open"\n\t} else {\n\t\treturn "Safe: gate is closed"\n\t}\n}\nfunc main() {\n\tfmt.Println(gateStatus(true))\n\tfmt.Println(gateStatus(false))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc gateStatus(open bool) string {\n\t___ open {\n\t\treturn "DANGER: gate is open"\n\t} ___ {\n\t\treturn "Safe: gate is closed"\n\t}\n}\nfunc main() {\n\tfmt.Println(gateStatus(true))\n}`,
        testCases: [{ input: "true", expected: "DANGER: gate is open", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "bool"],
      },
      {
        id: "st-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "Dustin needs a function that calculates how many walkie-talkie channels the Party can use.",
        prompt:
          "Write a function `totalChannels(base int, extra int) int` that returns the sum of `base` and `extra`. Print the result of calling it with 3 and 4.",
        hint: "func name(param type) returnType { return ... }",
        solution: `package main\nimport "fmt"\nfunc totalChannels(base int, extra int) int {\n\treturn base + extra\n}\nfunc main() {\n\tfmt.Println(totalChannels(3, 4))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc totalChannels(base int, extra int) ___ {\n\treturn base + extra\n}\nfunc main() {\n\tfmt.Println(totalChannels(3, 4))\n}`,
        testCases: [{ input: "3,4", expected: "7", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "+"],
      },
      {
        id: "st-go-final-4",
        concept: "Maps",
        narrative:
          "Joyce keeps a map of each character's location in Hawkins. Create a map and look up a value.",
        prompt:
          "Create a `map[string]string` called `locations` with at least two entries (e.g., `\"Will\": \"Upside Down\"` and `\"Eleven\": \"Lab\"`). Print the value for `\"Will\"`.",
        hint: "Declare with make(map[string]string) or a map literal. Access values with map[key].",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tlocations := map[string]string{\n\t\t"Will":   "Upside Down",\n\t\t"Eleven": "Lab",\n\t}\n\tfmt.Println(locations["Will"])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tlocations := map[string]string{\n\t\t"Will":   ___,\n\t\t"Eleven": "Lab",\n\t}\n\tfmt.Println(locations["Will"])\n}`,
        testCases: [{ input: "", expected: "Upside Down", description: "Map lookup" }],
        conceptKeywords: ["map", "string", "locations", "Println"],
      },
      {
        id: "st-go-final-5",
        concept: "Structs",
        narrative:
          "Dr. Brenner needs a struct to represent each Lab Subject with their name and power level.",
        prompt:
          "Define a struct `Subject` with fields `Name string` and `PowerLevel int`. Create an instance with Name `\"Eleven\"` and PowerLevel `11`, then print both fields.",
        hint: "type Subject struct { ... }. Instantiate with Subject{Name: ..., PowerLevel: ...}.",
        solution: `package main\nimport "fmt"\ntype Subject struct {\n\tName       string\n\tPowerLevel int\n}\nfunc main() {\n\ts := Subject{Name: "Eleven", PowerLevel: 11}\n\tfmt.Println(s.Name, s.PowerLevel)\n}`,
        starterCode: `package main\nimport "fmt"\ntype Subject ___ {\n\tName       string\n\tPowerLevel int\n}\nfunc main() {\n\ts := Subject{Name: "Eleven", PowerLevel: 11}\n\tfmt.Println(s.Name, s.PowerLevel)\n}`,
        testCases: [{ input: "", expected: "Eleven 11", description: "Struct creation and access" }],
        conceptKeywords: ["struct", "type", "Name", "PowerLevel"],
      },
    ],
  },

  // ─── Severance ──────────────────────────────────────────────────────────────
  "severance-go": {
    id: "sv-go-final",
    themeId: "severance",
    languageId: "go",
    themedTitle: "The Lumon Go Procedure",
    introNarrative:
      "Lumon Industries runs its MDR department on Go. The data must be refined — five procedures await your innie. Complete them before your outie suspects anything. Remember: the numbers you process represent something. We are not told what that something is.",
    questions: [
      {
        id: "sv-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Mark S. starts his day by setting his employee ID and department. Declare them with := and print.",
        prompt:
          "Declare `employeeID` as `\"MDR-4\"` and `department` as `\"Macrodata Refinement\"` using `:=`. Print both.",
        hint: "Use := for short declaration. fmt.Println accepts multiple arguments.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\temployeeID := "MDR-4"\n\tdepartment := "Macrodata Refinement"\n\tfmt.Println(employeeID, department)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\temployeeID ___ "MDR-4"\n\tdepartment ___ "Macrodata Refinement"\n\tfmt.Println(employeeID, department)\n}`,
        testCases: [{ input: "", expected: "MDR-4 Macrodata Refinement", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "employeeID", "department"],
      },
      {
        id: "sv-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "The wellness sensor checks if an employee's stress score is above threshold. Return the appropriate alert.",
        prompt:
          "Write a function `wellnessAlert(score int) string` that returns `\"Alert: above threshold\"` if score > 7, else `\"All clear\"`.",
        hint: "if score > 7 { return ... } else { return ... }",
        solution: `package main\nimport "fmt"\nfunc wellnessAlert(score int) string {\n\tif score > 7 {\n\t\treturn "Alert: above threshold"\n\t} else {\n\t\treturn "All clear"\n\t}\n}\nfunc main() {\n\tfmt.Println(wellnessAlert(9))\n\tfmt.Println(wellnessAlert(3))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc wellnessAlert(score int) string {\n\t___ score > 7 {\n\t\treturn "Alert: above threshold"\n\t} ___ {\n\t\treturn "All clear"\n\t}\n}\nfunc main() {\n\tfmt.Println(wellnessAlert(9))\n}`,
        testCases: [{ input: "9", expected: "Alert: above threshold", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "score"],
      },
      {
        id: "sv-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "The MDR quota system calculates a department's refined data count. Write a function for it.",
        prompt:
          "Write a function `quota(target int, completed int) int` that returns `target - completed`. Print the result of `quota(100, 62)`.",
        hint: "func quota(target int, completed int) int { return target - completed }",
        solution: `package main\nimport "fmt"\nfunc quota(target int, completed int) int {\n\treturn target - completed\n}\nfunc main() {\n\tfmt.Println(quota(100, 62))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc quota(target int, completed int) ___ {\n\treturn target - completed\n}\nfunc main() {\n\tfmt.Println(quota(100, 62))\n}`,
        testCases: [{ input: "100,62", expected: "38", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "-"],
      },
      {
        id: "sv-go-final-4",
        concept: "Maps",
        narrative:
          "The employee roster is a map of ID to name. Create the map and look up Mark's name.",
        prompt:
          "Create a `map[string]string` called `roster` with `\"MDR-4\": \"Mark S.\"` and `\"MDR-1\": \"Helly R.\"`. Print the value for `\"MDR-4\"`.",
        hint: "Use a map literal: map[string]string{key: value, ...}",
        solution: `package main\nimport "fmt"\nfunc main() {\n\troster := map[string]string{\n\t\t"MDR-4": "Mark S.",\n\t\t"MDR-1": "Helly R.",\n\t}\n\tfmt.Println(roster["MDR-4"])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\troster := map[string]string{\n\t\t"MDR-4": ___,\n\t\t"MDR-1": "Helly R.",\n\t}\n\tfmt.Println(roster["MDR-4"])\n}`,
        testCases: [{ input: "", expected: "Mark S.", description: "Map lookup" }],
        conceptKeywords: ["map", "string", "roster", "Println"],
      },
      {
        id: "sv-go-final-5",
        concept: "Structs",
        narrative:
          "Each Lumon employee has a struct with their ID and clearance level. Define it and create an instance.",
        prompt:
          "Define a struct `Employee` with `ID string` and `Clearance int`. Create an instance with ID `\"MDR-4\"` and Clearance `2`, then print both fields.",
        hint: "type Employee struct { ID string; Clearance int }",
        solution: `package main\nimport "fmt"\ntype Employee struct {\n\tID        string\n\tClearance int\n}\nfunc main() {\n\te := Employee{ID: "MDR-4", Clearance: 2}\n\tfmt.Println(e.ID, e.Clearance)\n}`,
        starterCode: `package main\nimport "fmt"\ntype Employee ___ {\n\tID        string\n\tClearance int\n}\nfunc main() {\n\te := Employee{ID: "MDR-4", Clearance: 2}\n\tfmt.Println(e.ID, e.Clearance)\n}`,
        testCases: [{ input: "", expected: "MDR-4 2", description: "Struct fields" }],
        conceptKeywords: ["struct", "type", "ID", "Clearance"],
      },
    ],
  },

  // ─── Breaking Bad ────────────────────────────────────────────────────────────
  "breaking-bad-go": {
    id: "bb-go-final",
    themeId: "breaking-bad",
    languageId: "go",
    themedTitle: "Heisenberg's Go Lab",
    introNarrative:
      "You are the one who knocks — and the one who writes Go. Walt's superlab has gone digital: five Go challenges to synthesise the perfect program. Say my name. Now write the function.",
    questions: [
      {
        id: "bb-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Walt needs to track his product purity and alias. Declare them with := and print.",
        prompt:
          "Declare `alias` as `\"Heisenberg\"` and `purity` as `99` using `:=`. Print both with `fmt.Println`.",
        hint: "Use := for short variable declaration.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\talias := "Heisenberg"\n\tpurity := 99\n\tfmt.Println(alias, purity)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\talias ___ "Heisenberg"\n\tpurity ___ 99\n\tfmt.Println(alias, purity)\n}`,
        testCases: [{ input: "", expected: "Heisenberg 99", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "alias", "purity"],
      },
      {
        id: "bb-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "Jesse checks if the product meets Gus's purity standard of 96%. Return the quality verdict.",
        prompt:
          "Write `qualityCheck(purity int) string` — return `\"Product approved\"` if purity >= 96, else `\"Below standard\"`.",
        hint: "if purity >= 96 { return ... } else { return ... }",
        solution: `package main\nimport "fmt"\nfunc qualityCheck(purity int) string {\n\tif purity >= 96 {\n\t\treturn "Product approved"\n\t} else {\n\t\treturn "Below standard"\n\t}\n}\nfunc main() {\n\tfmt.Println(qualityCheck(99))\n\tfmt.Println(qualityCheck(85))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc qualityCheck(purity int) string {\n\t___ purity >= 96 {\n\t\treturn "Product approved"\n\t} ___ {\n\t\treturn "Below standard"\n\t}\n}\nfunc main() {\n\tfmt.Println(qualityCheck(99))\n}`,
        testCases: [{ input: "99", expected: "Product approved", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "purity"],
      },
      {
        id: "bb-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "Saul's billing function calculates the total fee after adding a consulting surcharge.",
        prompt:
          "Write `totalFee(base int, surcharge int) int` that returns `base + surcharge`. Print `totalFee(5000, 1500)`.",
        hint: "func totalFee(base int, surcharge int) int { return base + surcharge }",
        solution: `package main\nimport "fmt"\nfunc totalFee(base int, surcharge int) int {\n\treturn base + surcharge\n}\nfunc main() {\n\tfmt.Println(totalFee(5000, 1500))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc totalFee(base int, surcharge int) ___ {\n\treturn base + surcharge\n}\nfunc main() {\n\tfmt.Println(totalFee(5000, 1500))\n}`,
        testCases: [{ input: "5000,1500", expected: "6500", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "+"],
      },
      {
        id: "bb-go-final-4",
        concept: "Maps",
        narrative:
          "Lydia tracks each territory's distributor. Create a map and look up the ABQ distributor.",
        prompt:
          "Create `map[string]string` called `distributors` with `\"ABQ\": \"Gustavo\"` and `\"Phoenix\": \"Tuco\"`. Print `distributors[\"ABQ\"]`.",
        hint: "Use a map literal and access with map[key].",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tdistributors := map[string]string{\n\t\t"ABQ":     "Gustavo",\n\t\t"Phoenix": "Tuco",\n\t}\n\tfmt.Println(distributors["ABQ"])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tdistributors := map[string]string{\n\t\t"ABQ":     ___,\n\t\t"Phoenix": "Tuco",\n\t}\n\tfmt.Println(distributors["ABQ"])\n}`,
        testCases: [{ input: "", expected: "Gustavo", description: "Map lookup" }],
        conceptKeywords: ["map", "string", "distributors", "Println"],
      },
      {
        id: "bb-go-final-5",
        concept: "Structs",
        narrative:
          "Each cook session needs a struct tracking the chemist's name and the batch purity.",
        prompt:
          "Define struct `Cook` with `Chemist string` and `Purity int`. Create instance with Chemist `\"Walter\"` and Purity `99`. Print both fields.",
        hint: "type Cook struct { Chemist string; Purity int }",
        solution: `package main\nimport "fmt"\ntype Cook struct {\n\tChemist string\n\tPurity  int\n}\nfunc main() {\n\tc := Cook{Chemist: "Walter", Purity: 99}\n\tfmt.Println(c.Chemist, c.Purity)\n}`,
        starterCode: `package main\nimport "fmt"\ntype Cook ___ {\n\tChemist string\n\tPurity  int\n}\nfunc main() {\n\tc := Cook{Chemist: "Walter", Purity: 99}\n\tfmt.Println(c.Chemist, c.Purity)\n}`,
        testCases: [{ input: "", expected: "Walter 99", description: "Struct fields" }],
        conceptKeywords: ["struct", "type", "Chemist", "Purity"],
      },
    ],
  },

  // ─── The Office ──────────────────────────────────────────────────────────────
  "the-office-go": {
    id: "to-go-final",
    themeId: "the-office",
    languageId: "go",
    themedTitle: "The Dunder Mifflin Go Initiative",
    introNarrative:
      "Michael Scott has declared today 'Go Programming Day.' Nobody asked for this, but here we are. Five Go challenges to prove Dunder Mifflin Scranton can survive the digital age. That's what she coded.",
    questions: [
      {
        id: "to-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Michael needs to store his employee count and branch name. Declare them and print.",
        prompt:
          "Declare `branch` as `\"Scranton\"` and `employees` as `12` using `:=`. Print both.",
        hint: "Use := to declare variables. fmt.Println prints multiple values.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tbranch := "Scranton"\n\temployees := 12\n\tfmt.Println(branch, employees)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tbranch ___ "Scranton"\n\temployees ___ 12\n\tfmt.Println(branch, employees)\n}`,
        testCases: [{ input: "", expected: "Scranton 12", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "branch", "employees"],
      },
      {
        id: "to-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "Dwight checks if a salesperson met their monthly quota. Return the performance rating.",
        prompt:
          "Write `performanceRating(sales int) string` — return `\"Meets quota\"` if sales >= 50, else `\"Below quota\"`.",
        hint: "if sales >= 50 { return ... } else { return ... }",
        solution: `package main\nimport "fmt"\nfunc performanceRating(sales int) string {\n\tif sales >= 50 {\n\t\treturn "Meets quota"\n\t} else {\n\t\treturn "Below quota"\n\t}\n}\nfunc main() {\n\tfmt.Println(performanceRating(65))\n\tfmt.Println(performanceRating(30))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc performanceRating(sales int) string {\n\t___ sales >= 50 {\n\t\treturn "Meets quota"\n\t} ___ {\n\t\treturn "Below quota"\n\t}\n}\nfunc main() {\n\tfmt.Println(performanceRating(65))\n}`,
        testCases: [{ input: "65", expected: "Meets quota", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "sales"],
      },
      {
        id: "to-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "Oscar calculates the quarterly bonus as base salary times a multiplier.",
        prompt:
          "Write `bonus(salary int, multiplier int) int` that returns `salary * multiplier`. Print `bonus(3000, 2)`.",
        hint: "func bonus(salary int, multiplier int) int { return salary * multiplier }",
        solution: `package main\nimport "fmt"\nfunc bonus(salary int, multiplier int) int {\n\treturn salary * multiplier\n}\nfunc main() {\n\tfmt.Println(bonus(3000, 2))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc bonus(salary int, multiplier int) ___ {\n\treturn salary * multiplier\n}\nfunc main() {\n\tfmt.Println(bonus(3000, 2))\n}`,
        testCases: [{ input: "3000,2", expected: "6000", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "*"],
      },
      {
        id: "to-go-final-4",
        concept: "Maps",
        narrative:
          "Kevin's map tracks each employee's favourite snack. Create it and look up Jim's snack.",
        prompt:
          "Create `map[string]string` called `snacks` with `\"Jim\": \"chips\"` and `\"Dwight\": \"beets\"`. Print `snacks[\"Jim\"]`.",
        hint: "Use a map literal and map[key] to access values.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tsnacks := map[string]string{\n\t\t"Jim":    "chips",\n\t\t"Dwight": "beets",\n\t}\n\tfmt.Println(snacks["Jim"])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tsnacks := map[string]string{\n\t\t"Jim":    ___,\n\t\t"Dwight": "beets",\n\t}\n\tfmt.Println(snacks["Jim"])\n}`,
        testCases: [{ input: "", expected: "chips", description: "Map lookup" }],
        conceptKeywords: ["map", "string", "snacks", "Println"],
      },
      {
        id: "to-go-final-5",
        concept: "Structs",
        narrative:
          "Ryan needs a struct to represent each employee with their name and title.",
        prompt:
          "Define struct `Employee` with `Name string` and `Title string`. Create instance with Name `\"Jim\"` and Title `\"Salesman\"`. Print both fields.",
        hint: "type Employee struct { Name string; Title string }",
        solution: `package main\nimport "fmt"\ntype Employee struct {\n\tName  string\n\tTitle string\n}\nfunc main() {\n\te := Employee{Name: "Jim", Title: "Salesman"}\n\tfmt.Println(e.Name, e.Title)\n}`,
        starterCode: `package main\nimport "fmt"\ntype Employee ___ {\n\tName  string\n\tTitle string\n}\nfunc main() {\n\te := Employee{Name: "Jim", Title: "Salesman"}\n\tfmt.Println(e.Name, e.Title)\n}`,
        testCases: [{ input: "", expected: "Jim Salesman", description: "Struct fields" }],
        conceptKeywords: ["struct", "type", "Name", "Title"],
      },
    ],
  },

  // ─── Game of Thrones ─────────────────────────────────────────────────────────
  "game-of-thrones-go": {
    id: "got-go-final",
    themeId: "game-of-thrones",
    languageId: "go",
    themedTitle: "The Citadel's Go Scrolls",
    introNarrative:
      "The Citadel's Grand Maester has decreed that all ravens must now carry Go programs. Five challenges await, each harder than the last. Complete them all and you may claim the Iron Throne of senior developer. Valar compilantur.",
    questions: [
      {
        id: "got-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Jon Snow needs his house name and sword name stored and printed.",
        prompt:
          "Declare `house` as `\"Stark\"` and `sword` as `\"Longclaw\"` using `:=`. Print both.",
        hint: "Use := for short variable declaration. fmt.Println prints them.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\thouse := "Stark"\n\tsword := "Longclaw"\n\tfmt.Println(house, sword)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\thouse ___ "Stark"\n\tsword ___ "Longclaw"\n\tfmt.Println(house, sword)\n}`,
        testCases: [{ input: "", expected: "Stark Longclaw", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "house", "sword"],
      },
      {
        id: "got-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "Cersei's raven returns with news. Determine whether the message is a threat based on its urgency level.",
        prompt:
          "Write `ravenAlert(urgency int) string` — return `\"Call the banners\"` if urgency > 5, else `\"Wait and watch\"`.",
        hint: "if urgency > 5 { return ... } else { return ... }",
        solution: `package main\nimport "fmt"\nfunc ravenAlert(urgency int) string {\n\tif urgency > 5 {\n\t\treturn "Call the banners"\n\t} else {\n\t\treturn "Wait and watch"\n\t}\n}\nfunc main() {\n\tfmt.Println(ravenAlert(8))\n\tfmt.Println(ravenAlert(3))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc ravenAlert(urgency int) string {\n\t___ urgency > 5 {\n\t\treturn "Call the banners"\n\t} ___ {\n\t\treturn "Wait and watch"\n\t}\n}\nfunc main() {\n\tfmt.Println(ravenAlert(8))\n}`,
        testCases: [{ input: "8", expected: "Call the banners", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "urgency"],
      },
      {
        id: "got-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "Tyrion calculates how many Gold Dragons are owed after interest.",
        prompt:
          "Write `goldOwed(principal int, interest int) int` returning `principal + interest`. Print `goldOwed(1000, 150)`.",
        hint: "func goldOwed(principal int, interest int) int { return principal + interest }",
        solution: `package main\nimport "fmt"\nfunc goldOwed(principal int, interest int) int {\n\treturn principal + interest\n}\nfunc main() {\n\tfmt.Println(goldOwed(1000, 150))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc goldOwed(principal int, interest int) ___ {\n\treturn principal + interest\n}\nfunc main() {\n\tfmt.Println(goldOwed(1000, 150))\n}`,
        testCases: [{ input: "1000,150", expected: "1150", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "+"],
      },
      {
        id: "got-go-final-4",
        concept: "Maps",
        narrative:
          "The Grand Maester keeps a map of house sigils. Create it and look up House Stark's sigil.",
        prompt:
          "Create `map[string]string` called `sigils` with `\"Stark\": \"Direwolf\"` and `\"Lannister\": \"Lion\"`. Print `sigils[\"Stark\"]`.",
        hint: "Use a map literal: map[string]string{key: value, ...}",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tsigils := map[string]string{\n\t\t"Stark":     "Direwolf",\n\t\t"Lannister": "Lion",\n\t}\n\tfmt.Println(sigils["Stark"])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tsigils := map[string]string{\n\t\t"Stark":     ___,\n\t\t"Lannister": "Lion",\n\t}\n\tfmt.Println(sigils["Stark"])\n}`,
        testCases: [{ input: "", expected: "Direwolf", description: "Map lookup" }],
        conceptKeywords: ["map", "string", "sigils", "Println"],
      },
      {
        id: "got-go-final-5",
        concept: "Structs",
        narrative:
          "Each noble house needs a struct with its name and words (motto).",
        prompt:
          "Define struct `House` with `Name string` and `Words string`. Create instance with Name `\"Stark\"` and Words `\"Winter is Coming\"`. Print both fields.",
        hint: "type House struct { Name string; Words string }",
        solution: `package main\nimport "fmt"\ntype House struct {\n\tName  string\n\tWords string\n}\nfunc main() {\n\th := House{Name: "Stark", Words: "Winter is Coming"}\n\tfmt.Println(h.Name, h.Words)\n}`,
        starterCode: `package main\nimport "fmt"\ntype House ___ {\n\tName  string\n\tWords string\n}\nfunc main() {\n\th := House{Name: "Stark", Words: "Winter is Coming"}\n\tfmt.Println(h.Name, h.Words)\n}`,
        testCases: [{ input: "", expected: "Stark Winter is Coming", description: "Struct fields" }],
        conceptKeywords: ["struct", "type", "Name", "Words"],
      },
    ],
  },

  // ─── The Matrix ──────────────────────────────────────────────────────────────
  "the-matrix-go": {
    id: "mx-go-final",
    themeId: "the-matrix",
    languageId: "go",
    themedTitle: "The Oracle's Go Protocol",
    introNarrative:
      "You took the red pill. Now you see the code — and it's Go. Five programs to free your mind and crash the Matrix. There is no bug. Only incorrectly formed logic. Dodge the compilation errors, Neo.",
    questions: [
      {
        id: "mx-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Neo needs to store his real name and his Matrix alias. Declare and print them.",
        prompt:
          "Declare `realName` as `\"Thomas Anderson\"` and `alias` as `\"Neo\"` using `:=`. Print both.",
        hint: "Use := for short declaration. fmt.Println prints multiple values.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\trealName := "Thomas Anderson"\n\talias := "Neo"\n\tfmt.Println(realName, alias)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\trealName ___ "Thomas Anderson"\n\talias ___ "Neo"\n\tfmt.Println(realName, alias)\n}`,
        testCases: [{ input: "", expected: "Thomas Anderson Neo", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "realName", "alias"],
      },
      {
        id: "mx-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "The Oracle checks if a human's potential score qualifies them to leave the Matrix.",
        prompt:
          "Write `potential(score int) string` — return `\"You are the One\"` if score >= 100, else `\"Not yet\"`.",
        hint: "if score >= 100 { return ... } else { return ... }",
        solution: `package main\nimport "fmt"\nfunc potential(score int) string {\n\tif score >= 100 {\n\t\treturn "You are the One"\n\t} else {\n\t\treturn "Not yet"\n\t}\n}\nfunc main() {\n\tfmt.Println(potential(100))\n\tfmt.Println(potential(75))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc potential(score int) string {\n\t___ score >= 100 {\n\t\treturn "You are the One"\n\t} ___ {\n\t\treturn "Not yet"\n\t}\n}\nfunc main() {\n\tfmt.Println(potential(100))\n}`,
        testCases: [{ input: "100", expected: "You are the One", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "score"],
      },
      {
        id: "mx-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "Morpheus calculates the combined power of two Zion operatives.",
        prompt:
          "Write `combinedPower(a int, b int) int` returning `a + b`. Print `combinedPower(60, 40)`.",
        hint: "func combinedPower(a int, b int) int { return a + b }",
        solution: `package main\nimport "fmt"\nfunc combinedPower(a int, b int) int {\n\treturn a + b\n}\nfunc main() {\n\tfmt.Println(combinedPower(60, 40))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc combinedPower(a int, b int) ___ {\n\treturn a + b\n}\nfunc main() {\n\tfmt.Println(combinedPower(60, 40))\n}`,
        testCases: [{ input: "60,40", expected: "100", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "+"],
      },
      {
        id: "mx-go-final-4",
        concept: "Maps",
        narrative:
          "Tank tracks which ship each operative is assigned to. Create the map and look up Neo's ship.",
        prompt:
          "Create `map[string]string` called `ships` with `\"Neo\": \"Nebuchadnezzar\"` and `\"Tank\": \"Nebuchadnezzar\"`. Print `ships[\"Neo\"]`.",
        hint: "Use a map literal and access with map[key].",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tships := map[string]string{\n\t\t"Neo":  "Nebuchadnezzar",\n\t\t"Tank": "Nebuchadnezzar",\n\t}\n\tfmt.Println(ships["Neo"])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tships := map[string]string{\n\t\t"Neo":  ___,\n\t\t"Tank": "Nebuchadnezzar",\n\t}\n\tfmt.Println(ships["Neo"])\n}`,
        testCases: [{ input: "", expected: "Nebuchadnezzar", description: "Map lookup" }],
        conceptKeywords: ["map", "string", "ships", "Println"],
      },
      {
        id: "mx-go-final-5",
        concept: "Structs",
        narrative:
          "Each operative is represented by a struct with their codename and skill level.",
        prompt:
          "Define struct `Operative` with `Codename string` and `SkillLevel int`. Create instance with Codename `\"Neo\"` and SkillLevel `100`. Print both fields.",
        hint: "type Operative struct { Codename string; SkillLevel int }",
        solution: `package main\nimport "fmt"\ntype Operative struct {\n\tCodename   string\n\tSkillLevel int\n}\nfunc main() {\n\to := Operative{Codename: "Neo", SkillLevel: 100}\n\tfmt.Println(o.Codename, o.SkillLevel)\n}`,
        starterCode: `package main\nimport "fmt"\ntype Operative ___ {\n\tCodename   string\n\tSkillLevel int\n}\nfunc main() {\n\to := Operative{Codename: "Neo", SkillLevel: 100}\n\tfmt.Println(o.Codename, o.SkillLevel)\n}`,
        testCases: [{ input: "", expected: "Neo 100", description: "Struct fields" }],
        conceptKeywords: ["struct", "type", "Codename", "SkillLevel"],
      },
    ],
  },

  // ─── Rick & Morty ────────────────────────────────────────────────────────────
  "rick-and-morty-go": {
    id: "rm-go-final",
    themeId: "rick-and-morty",
    languageId: "go",
    themedTitle: "Rick's Interdimensional Go Compiler",
    introNarrative:
      "Listen Morty, Go is just like interdimensional travel — variables are like portal coordinates, and structs are like interdimensional cable boxes. Five challenges, a hundred dimensions, and zero time for your crying. Let's go, Morty. *burp*",
    questions: [
      {
        id: "rm-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Rick needs to track his portal fluid percentage and his current dimension. Declare and print.",
        prompt:
          "Declare `dimension` as `\"C-137\"` and `fluidLevel` as `42` using `:=`. Print both.",
        hint: "Use := for short declaration.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tdimension := "C-137"\n\tfluidLevel := 42\n\tfmt.Println(dimension, fluidLevel)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tdimension ___ "C-137"\n\tfluidLevel ___ 42\n\tfmt.Println(dimension, fluidLevel)\n}`,
        testCases: [{ input: "", expected: "C-137 42", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "dimension", "fluidLevel"],
      },
      {
        id: "rm-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "Morty checks if they have enough portal fluid for a jump. Print the jump verdict.",
        prompt:
          "Write `canJump(fluid int) string` — return `\"Portal ready\"` if fluid >= 10, else `\"Need more fluid\"`.",
        hint: "if fluid >= 10 { return ... } else { return ... }",
        solution: `package main\nimport "fmt"\nfunc canJump(fluid int) string {\n\tif fluid >= 10 {\n\t\treturn "Portal ready"\n\t} else {\n\t\treturn "Need more fluid"\n\t}\n}\nfunc main() {\n\tfmt.Println(canJump(42))\n\tfmt.Println(canJump(3))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc canJump(fluid int) string {\n\t___ fluid >= 10 {\n\t\treturn "Portal ready"\n\t} ___ {\n\t\treturn "Need more fluid"\n\t}\n}\nfunc main() {\n\tfmt.Println(canJump(42))\n}`,
        testCases: [{ input: "42", expected: "Portal ready", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "fluid"],
      },
      {
        id: "rm-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "Summer calculates how many Meeseeks boxes are left in Rick's garage.",
        prompt:
          "Write `meeseeksLeft(total int, used int) int` returning `total - used`. Print `meeseeksLeft(20, 13)`.",
        hint: "func meeseeksLeft(total int, used int) int { return total - used }",
        solution: `package main\nimport "fmt"\nfunc meeseeksLeft(total int, used int) int {\n\treturn total - used\n}\nfunc main() {\n\tfmt.Println(meeseeksLeft(20, 13))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc meeseeksLeft(total int, used int) ___ {\n\treturn total - used\n}\nfunc main() {\n\tfmt.Println(meeseeksLeft(20, 13))\n}`,
        testCases: [{ input: "20,13", expected: "7", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "-"],
      },
      {
        id: "rm-go-final-4",
        concept: "Maps",
        narrative:
          "Rick's alien contact list maps codenames to species. Create it and look up \"Squanchy\".",
        prompt:
          "Create `map[string]string` called `contacts` with `\"Squanchy\": \"Cat Alien\"` and `\"Birdperson\": \"Birdperson\"`. Print `contacts[\"Squanchy\"]`.",
        hint: "Use a map literal: map[string]string{key: value, ...}",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tcontacts := map[string]string{\n\t\t"Squanchy":   "Cat Alien",\n\t\t"Birdperson": "Birdperson",\n\t}\n\tfmt.Println(contacts["Squanchy"])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tcontacts := map[string]string{\n\t\t"Squanchy":   ___,\n\t\t"Birdperson": "Birdperson",\n\t}\n\tfmt.Println(contacts["Squanchy"])\n}`,
        testCases: [{ input: "", expected: "Cat Alien", description: "Map lookup" }],
        conceptKeywords: ["map", "string", "contacts", "Println"],
      },
      {
        id: "rm-go-final-5",
        concept: "Structs",
        narrative:
          "The Council of Ricks uses a struct to catalogue each Rick by dimension and intelligence score.",
        prompt:
          "Define struct `Rick` with `Dimension string` and `IQ int`. Create instance Dimension `\"C-137\"` IQ `300`. Print both fields.",
        hint: "type Rick struct { Dimension string; IQ int }",
        solution: `package main\nimport "fmt"\ntype Rick struct {\n\tDimension string\n\tIQ        int\n}\nfunc main() {\n\tr := Rick{Dimension: "C-137", IQ: 300}\n\tfmt.Println(r.Dimension, r.IQ)\n}`,
        starterCode: `package main\nimport "fmt"\ntype Rick ___ {\n\tDimension string\n\tIQ        int\n}\nfunc main() {\n\tr := Rick{Dimension: "C-137", IQ: 300}\n\tfmt.Println(r.Dimension, r.IQ)\n}`,
        testCases: [{ input: "", expected: "C-137 300", description: "Struct fields" }],
        conceptKeywords: ["struct", "type", "Dimension", "IQ"],
      },
    ],
  },

  // ─── Squid Game ──────────────────────────────────────────────────────────────
  "squid-game-go": {
    id: "sg-go-final",
    themeId: "squid-game",
    languageId: "go",
    themedTitle: "The Go Games",
    introNarrative:
      "456 players entered. You are one of them — but your weapon is Go. Five rounds, each requiring perfect code. Eliminate your runtime errors before they eliminate you. Red light... green light... compile.",
    questions: [
      {
        id: "sg-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Player 456 stores their number and debt amount before the first game. Declare and print.",
        prompt:
          "Declare `playerNum` as `456` and `debt` as `160000000` using `:=`. Print both.",
        hint: "Use := to declare. fmt.Println prints multiple values.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tplayerNum := 456\n\tdebt := 160000000\n\tfmt.Println(playerNum, debt)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tplayerNum ___ 456\n\tdebt ___ 160000000\n\tfmt.Println(playerNum, debt)\n}`,
        testCases: [{ input: "", expected: "456 160000000", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "playerNum", "debt"],
      },
      {
        id: "sg-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "The doll checks whether a player is still moving in Red Light, Green Light.",
        prompt:
          "Write `motionCheck(moving bool) string` — return `\"Eliminated\"` if moving is true, else `\"Safe\"`.",
        hint: "if moving { return ... } else { return ... }",
        solution: `package main\nimport "fmt"\nfunc motionCheck(moving bool) string {\n\tif moving {\n\t\treturn "Eliminated"\n\t} else {\n\t\treturn "Safe"\n\t}\n}\nfunc main() {\n\tfmt.Println(motionCheck(true))\n\tfmt.Println(motionCheck(false))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc motionCheck(moving bool) string {\n\t___ moving {\n\t\treturn "Eliminated"\n\t} ___ {\n\t\treturn "Safe"\n\t}\n}\nfunc main() {\n\tfmt.Println(motionCheck(true))\n}`,
        testCases: [{ input: "true", expected: "Eliminated", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "moving"],
      },
      {
        id: "sg-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "The prize pool grows with each elimination. Calculate total prize from player count.",
        prompt:
          "Write `prizePool(players int, prizePerPlayer int) int` returning `players * prizePerPlayer`. Print `prizePool(456, 100000000)`.",
        hint: "func prizePool(players int, prizePerPlayer int) int { return players * prizePerPlayer }",
        solution: `package main\nimport "fmt"\nfunc prizePool(players int, prizePerPlayer int) int {\n\treturn players * prizePerPlayer\n}\nfunc main() {\n\tfmt.Println(prizePool(456, 100000000))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc prizePool(players int, prizePerPlayer int) ___ {\n\treturn players * prizePerPlayer\n}\nfunc main() {\n\tfmt.Println(prizePool(456, 100000000))\n}`,
        testCases: [{ input: "456,100000000", expected: "45600000000", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "*"],
      },
      {
        id: "sg-go-final-4",
        concept: "Maps",
        narrative:
          "The guards track which shape each player chose for the honeycomb game. Create the map and check Player 456.",
        prompt:
          "Create `map[int]string` called `shapes` with `456: \"umbrella\"` and `067: \"circle\"`. Print `shapes[456]`.",
        hint: "Use map[int]string for integer keys.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tshapes := map[int]string{\n\t\t456: "umbrella",\n\t\t67:  "circle",\n\t}\n\tfmt.Println(shapes[456])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tshapes := map[int]string{\n\t\t456: ___,\n\t\t67:  "circle",\n\t}\n\tfmt.Println(shapes[456])\n}`,
        testCases: [{ input: "", expected: "umbrella", description: "Map lookup" }],
        conceptKeywords: ["map", "int", "shapes", "Println"],
      },
      {
        id: "sg-go-final-5",
        concept: "Structs",
        narrative:
          "Each player has a struct tracking their number and survival status.",
        prompt:
          "Define struct `Player` with `Number int` and `Alive bool`. Create instance Number `456` Alive `true`. Print both fields.",
        hint: "type Player struct { Number int; Alive bool }",
        solution: `package main\nimport "fmt"\ntype Player struct {\n\tNumber int\n\tAlive  bool\n}\nfunc main() {\n\tp := Player{Number: 456, Alive: true}\n\tfmt.Println(p.Number, p.Alive)\n}`,
        starterCode: `package main\nimport "fmt"\ntype Player ___ {\n\tNumber int\n\tAlive  bool\n}\nfunc main() {\n\tp := Player{Number: 456, Alive: true}\n\tfmt.Println(p.Number, p.Alive)\n}`,
        testCases: [{ input: "", expected: "456 true", description: "Struct fields" }],
        conceptKeywords: ["struct", "type", "Number", "Alive"],
      },
    ],
  },

  // ─── Arrested Development ────────────────────────────────────────────────────
  "arrested-development-go": {
    id: "ad-go-final",
    themeId: "arrested-development",
    languageId: "go",
    themedTitle: "The Bluth Go Awakening",
    introNarrative:
      "The Bluths have made a huge mistake — they thought they could run their business without knowing Go. Now it's up to you to save them. There's always money in the banana stand... and there's always a struct for your data.",
    questions: [
      {
        id: "ad-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Michael needs the banana stand's daily income and product name stored for the audit.",
        prompt:
          "Declare `product` as `\"Frozen Banana\"` and `dailyIncome` as `250` using `:=`. Print both.",
        hint: "Use := for short declaration.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tproduct := "Frozen Banana"\n\tdailyIncome := 250\n\tfmt.Println(product, dailyIncome)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tproduct ___ "Frozen Banana"\n\tdailyIncome ___ 250\n\tfmt.Println(product, dailyIncome)\n}`,
        testCases: [{ input: "", expected: "Frozen Banana 250", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "product", "dailyIncome"],
      },
      {
        id: "ad-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "Lucille checks if the family lawyer can take the case based on his fee being affordable.",
        prompt:
          "Write `canAfford(fee int) string` — return `\"Hire Barry\"` if fee <= 500, else `\"Call Saul\"`.",
        hint: "if fee <= 500 { return ... } else { return ... }",
        solution: `package main\nimport "fmt"\nfunc canAfford(fee int) string {\n\tif fee <= 500 {\n\t\treturn "Hire Barry"\n\t} else {\n\t\treturn "Call Saul"\n\t}\n}\nfunc main() {\n\tfmt.Println(canAfford(200))\n\tfmt.Println(canAfford(1000))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc canAfford(fee int) string {\n\t___ fee <= 500 {\n\t\treturn "Hire Barry"\n\t} ___ {\n\t\treturn "Call Saul"\n\t}\n}\nfunc main() {\n\tfmt.Println(canAfford(200))\n}`,
        testCases: [{ input: "200", expected: "Hire Barry", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "fee"],
      },
      {
        id: "ad-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "Tobias calculates his audition success rate from total tries and successes.",
        prompt:
          "Write `successRate(successes int, total int) int` returning `successes * 100 / total`. Print `successRate(1, 50)`.",
        hint: "Integer division: successes * 100 / total",
        solution: `package main\nimport "fmt"\nfunc successRate(successes int, total int) int {\n\treturn successes * 100 / total\n}\nfunc main() {\n\tfmt.Println(successRate(1, 50))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc successRate(successes int, total int) ___ {\n\treturn successes * 100 / total\n}\nfunc main() {\n\tfmt.Println(successRate(1, 50))\n}`,
        testCases: [{ input: "1,50", expected: "2", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "/"],
      },
      {
        id: "ad-go-final-4",
        concept: "Maps",
        narrative:
          "Buster's therapy map tracks which family member caused each of his fears. Create and look up.",
        prompt:
          "Create `map[string]string` called `fears` with `\"hand\": \"Lucille\"` and `\"sea\": \"seal\"`. Print `fears[\"hand\"]`.",
        hint: "Use a map literal: map[string]string{key: value, ...}",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tfears := map[string]string{\n\t\t"hand": "Lucille",\n\t\t"sea":  "seal",\n\t}\n\tfmt.Println(fears["hand"])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tfears := map[string]string{\n\t\t"hand": ___,\n\t\t"sea":  "seal",\n\t}\n\tfmt.Println(fears["hand"])\n}`,
        testCases: [{ input: "", expected: "Lucille", description: "Map lookup" }],
        conceptKeywords: ["map", "string", "fears", "Println"],
      },
      {
        id: "ad-go-final-5",
        concept: "Structs",
        narrative:
          "The Bluth Company needs a struct for each family member with their name and role.",
        prompt:
          "Define struct `Bluth` with `Name string` and `Role string`. Create instance Name `\"Michael\"` Role `\"President\"`. Print both fields.",
        hint: "type Bluth struct { Name string; Role string }",
        solution: `package main\nimport "fmt"\ntype Bluth struct {\n\tName string\n\tRole string\n}\nfunc main() {\n\tb := Bluth{Name: "Michael", Role: "President"}\n\tfmt.Println(b.Name, b.Role)\n}`,
        starterCode: `package main\nimport "fmt"\ntype Bluth ___ {\n\tName string\n\tRole string\n}\nfunc main() {\n\tb := Bluth{Name: "Michael", Role: "President"}\n\tfmt.Println(b.Name, b.Role)\n}`,
        testCases: [{ input: "", expected: "Michael President", description: "Struct fields" }],
        conceptKeywords: ["struct", "type", "Name", "Role"],
      },
    ],
  },

  // ─── Barbie ──────────────────────────────────────────────────────────────────
  "barbie-go": {
    id: "ba-go-final",
    themeId: "barbie",
    languageId: "go",
    themedTitle: "Barbieland's Go Dreamhouse",
    introNarrative:
      "Hi Barbie! Hi Ken! Barbieland is switching to Go — it's concurrent, statically typed, and absolutely fabulous. Five Go challenges await you in the Dreamhouse. You've got this, because you're Barbie. And Barbie can code.",
    questions: [
      {
        id: "ba-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Barbie needs to store her career and dream house colour for the registration form.",
        prompt:
          "Declare `career` as `\"Astronaut\"` and `houseColor` as `\"Pink\"` using `:=`. Print both.",
        hint: "Use := for short variable declaration.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tcareer := "Astronaut"\n\thouseColor := "Pink"\n\tfmt.Println(career, houseColor)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tcareer ___ "Astronaut"\n\thouseColor ___ "Pink"\n\tfmt.Println(career, houseColor)\n}`,
        testCases: [{ input: "", expected: "Astronaut Pink", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "career", "houseColor"],
      },
      {
        id: "ba-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "Weird Barbie checks if a Barbie has been played with too much. Return the condition.",
        prompt:
          "Write `barbieCondition(playCount int) string` — return `\"Well loved\"` if playCount > 100, else `\"Like new\"`.",
        hint: "if playCount > 100 { return ... } else { return ... }",
        solution: `package main\nimport "fmt"\nfunc barbieCondition(playCount int) string {\n\tif playCount > 100 {\n\t\treturn "Well loved"\n\t} else {\n\t\treturn "Like new"\n\t}\n}\nfunc main() {\n\tfmt.Println(barbieCondition(150))\n\tfmt.Println(barbieCondition(5))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc barbieCondition(playCount int) string {\n\t___ playCount > 100 {\n\t\treturn "Well loved"\n\t} ___ {\n\t\treturn "Like new"\n\t}\n}\nfunc main() {\n\tfmt.Println(barbieCondition(150))\n}`,
        testCases: [{ input: "150", expected: "Well loved", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "playCount"],
      },
      {
        id: "ba-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "Ken calculates the total number of outfits Barbie has after getting new accessories.",
        prompt:
          "Write `totalOutfits(existing int, new int) int` returning `existing + new`. Print `totalOutfits(50, 12)`.",
        hint: "func totalOutfits(existing int, new int) int { return existing + new }",
        solution: `package main\nimport "fmt"\nfunc totalOutfits(existing int, new int) int {\n\treturn existing + new\n}\nfunc main() {\n\tfmt.Println(totalOutfits(50, 12))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc totalOutfits(existing int, new int) ___ {\n\treturn existing + new\n}\nfunc main() {\n\tfmt.Println(totalOutfits(50, 12))\n}`,
        testCases: [{ input: "50,12", expected: "62", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "+"],
      },
      {
        id: "ba-go-final-4",
        concept: "Maps",
        narrative:
          "The Barbie registry maps each Barbie's name to her current career. Create it and look up Barbie.",
        prompt:
          "Create `map[string]string` called `registry` with `\"Barbie\": \"President\"` and `\"Ken\": \"Beach\"`. Print `registry[\"Barbie\"]`.",
        hint: "Use a map literal and access with map[key].",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tregistry := map[string]string{\n\t\t"Barbie": "President",\n\t\t"Ken":    "Beach",\n\t}\n\tfmt.Println(registry["Barbie"])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tregistry := map[string]string{\n\t\t"Barbie": ___,\n\t\t"Ken":    "Beach",\n\t}\n\tfmt.Println(registry["Barbie"])\n}`,
        testCases: [{ input: "", expected: "President", description: "Map lookup" }],
        conceptKeywords: ["map", "string", "registry", "Println"],
      },
      {
        id: "ba-go-final-5",
        concept: "Structs",
        narrative:
          "Each Barbie has a struct with her name and current career in the Barbieland database.",
        prompt:
          "Define struct `Barbie` with `Name string` and `Career string`. Create instance Name `\"Barbie\"` Career `\"President\"`. Print both fields.",
        hint: "type Barbie struct { Name string; Career string }",
        solution: `package main\nimport "fmt"\ntype Barbie struct {\n\tName   string\n\tCareer string\n}\nfunc main() {\n\tb := Barbie{Name: "Barbie", Career: "President"}\n\tfmt.Println(b.Name, b.Career)\n}`,
        starterCode: `package main\nimport "fmt"\ntype Barbie ___ {\n\tName   string\n\tCareer string\n}\nfunc main() {\n\tb := Barbie{Name: "Barbie", Career: "President"}\n\tfmt.Println(b.Name, b.Career)\n}`,
        testCases: [{ input: "", expected: "Barbie President", description: "Struct fields" }],
        conceptKeywords: ["struct", "type", "Name", "Career"],
      },
    ],
  },

  // ─── Sex and the City ────────────────────────────────────────────────────────
  "sex-and-the-city-go": {
    id: "sc-go-final",
    themeId: "sex-and-the-city",
    languageId: "go",
    themedTitle: "Carrie's Go in the City",
    introNarrative:
      "I couldn't help but wonder — when did Go become the language of love? Carrie's laptop crashed and took all her columns with it. She needs five Go programs to reconstruct her data before deadline. Will she choose Aidan or Big? More importantly: will her code compile?",
    questions: [
      {
        id: "sc-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Carrie notes her current column title and city for her next article.",
        prompt:
          "Declare `city` as `\"New York\"` and `columnist` as `\"Carrie Bradshaw\"` using `:=`. Print both.",
        hint: "Use := for short declaration.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tcity := "New York"\n\tcolumnist := "Carrie Bradshaw"\n\tfmt.Println(city, columnist)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tcity ___ "New York"\n\tcolumnist ___ "Carrie Bradshaw"\n\tfmt.Println(city, columnist)\n}`,
        testCases: [{ input: "", expected: "New York Carrie Bradshaw", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "city", "columnist"],
      },
      {
        id: "sc-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "Samantha checks whether the club's guest list has room for VIPs.",
        prompt:
          "Write `clubEntry(capacity int) string` — return `\"VIP welcome\"` if capacity > 0, else `\"At capacity\"`.",
        hint: "if capacity > 0 { return ... } else { return ... }",
        solution: `package main\nimport "fmt"\nfunc clubEntry(capacity int) string {\n\tif capacity > 0 {\n\t\treturn "VIP welcome"\n\t} else {\n\t\treturn "At capacity"\n\t}\n}\nfunc main() {\n\tfmt.Println(clubEntry(5))\n\tfmt.Println(clubEntry(0))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc clubEntry(capacity int) string {\n\t___ capacity > 0 {\n\t\treturn "VIP welcome"\n\t} ___ {\n\t\treturn "At capacity"\n\t}\n}\nfunc main() {\n\tfmt.Println(clubEntry(5))\n}`,
        testCases: [{ input: "5", expected: "VIP welcome", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "capacity"],
      },
      {
        id: "sc-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "Miranda calculates how many billable hours she put in this month.",
        prompt:
          "Write `billableHours(days int, hoursPerDay int) int` returning `days * hoursPerDay`. Print `billableHours(22, 9)`.",
        hint: "func billableHours(days int, hoursPerDay int) int { return days * hoursPerDay }",
        solution: `package main\nimport "fmt"\nfunc billableHours(days int, hoursPerDay int) int {\n\treturn days * hoursPerDay\n}\nfunc main() {\n\tfmt.Println(billableHours(22, 9))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc billableHours(days int, hoursPerDay int) ___ {\n\treturn days * hoursPerDay\n}\nfunc main() {\n\tfmt.Println(billableHours(22, 9))\n}`,
        testCases: [{ input: "22,9", expected: "198", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "*"],
      },
      {
        id: "sc-go-final-4",
        concept: "Maps",
        narrative:
          "Charlotte keeps a map of each friend's relationship status. Create it and look up Carrie's.",
        prompt:
          "Create `map[string]string` called `status` with `\"Carrie\": \"It's complicated\"` and `\"Charlotte\": \"Married\"`. Print `status[\"Carrie\"]`.",
        hint: "Use a map literal: map[string]string{...}",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tstatus := map[string]string{\n\t\t"Carrie":    "It's complicated",\n\t\t"Charlotte": "Married",\n\t}\n\tfmt.Println(status["Carrie"])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tstatus := map[string]string{\n\t\t"Carrie":    ___,\n\t\t"Charlotte": "Married",\n\t}\n\tfmt.Println(status["Carrie"])\n}`,
        testCases: [{ input: "", expected: "It's complicated", description: "Map lookup" }],
        conceptKeywords: ["map", "string", "status", "Println"],
      },
      {
        id: "sc-go-final-5",
        concept: "Structs",
        narrative:
          "Each column entry has a struct with its title and the number of cosmos consumed during writing.",
        prompt:
          "Define struct `Column` with `Title string` and `Cosmos int`. Create instance Title `\"Love in the City\"` Cosmos `3`. Print both fields.",
        hint: "type Column struct { Title string; Cosmos int }",
        solution: `package main\nimport "fmt"\ntype Column struct {\n\tTitle  string\n\tCosmos int\n}\nfunc main() {\n\tc := Column{Title: "Love in the City", Cosmos: 3}\n\tfmt.Println(c.Title, c.Cosmos)\n}`,
        starterCode: `package main\nimport "fmt"\ntype Column ___ {\n\tTitle  string\n\tCosmos int\n}\nfunc main() {\n\tc := Column{Title: "Love in the City", Cosmos: 3}\n\tfmt.Println(c.Title, c.Cosmos)\n}`,
        testCases: [{ input: "", expected: "Love in the City 3", description: "Struct fields" }],
        conceptKeywords: ["struct", "type", "Title", "Cosmos"],
      },
    ],
  },

  // ─── Sopranos ────────────────────────────────────────────────────────────────
  "sopranos-go": {
    id: "sp-go-final",
    themeId: "sopranos",
    languageId: "go",
    themedTitle: "Tony's Go Therapy Session",
    introNarrative:
      "Dr. Melfi has prescribed five Go programming exercises for Tony's anxiety. She believes structured code helps with the ducks. Complete each session — and remember, what happens in the Bada Bing stays in the Bada Bing. Except the runtime errors. Those go in the transcript.",
    questions: [
      {
        id: "sp-go-final-1",
        concept: "Variables with :=",
        narrative:
          "Tony stores his territory name and number of crew members before the sit-down.",
        prompt:
          "Declare `territory` as `\"New Jersey\"` and `crewSize` as `23` using `:=`. Print both.",
        hint: "Use := for short declaration.",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tterritory := "New Jersey"\n\tcrewSize := 23\n\tfmt.Println(territory, crewSize)\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tterritory ___ "New Jersey"\n\tcrewSize ___ 23\n\tfmt.Println(territory, crewSize)\n}`,
        testCases: [{ input: "", expected: "New Jersey 23", description: "Short variable declaration" }],
        conceptKeywords: [":=", "fmt.Println", "territory", "crewSize"],
      },
      {
        id: "sp-go-final-2",
        concept: "if/else Conditionals",
        narrative:
          "Carmela checks if the restaurant reservation is confirmed before Tony shows up.",
        prompt:
          "Write `reservationStatus(confirmed bool) string` — return `\"Table ready\"` if confirmed, else `\"No reservation\"`.",
        hint: "if confirmed { return ... } else { return ... }",
        solution: `package main\nimport "fmt"\nfunc reservationStatus(confirmed bool) string {\n\tif confirmed {\n\t\treturn "Table ready"\n\t} else {\n\t\treturn "No reservation"\n\t}\n}\nfunc main() {\n\tfmt.Println(reservationStatus(true))\n\tfmt.Println(reservationStatus(false))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc reservationStatus(confirmed bool) string {\n\t___ confirmed {\n\t\treturn "Table ready"\n\t} ___ {\n\t\treturn "No reservation"\n\t}\n}\nfunc main() {\n\tfmt.Println(reservationStatus(true))\n}`,
        testCases: [{ input: "true", expected: "Table ready", description: "if/else branch" }],
        conceptKeywords: ["if", "else", "return", "confirmed"],
      },
      {
        id: "sp-go-final-3",
        concept: "Functions with Return Values",
        narrative:
          "Silvio calculates the Bada Bing's weekly revenue from nightly earnings.",
        prompt:
          "Write `weeklyRevenue(nightly int, nights int) int` returning `nightly * nights`. Print `weeklyRevenue(8000, 7)`.",
        hint: "func weeklyRevenue(nightly int, nights int) int { return nightly * nights }",
        solution: `package main\nimport "fmt"\nfunc weeklyRevenue(nightly int, nights int) int {\n\treturn nightly * nights\n}\nfunc main() {\n\tfmt.Println(weeklyRevenue(8000, 7))\n}`,
        starterCode: `package main\nimport "fmt"\nfunc weeklyRevenue(nightly int, nights int) ___ {\n\treturn nightly * nights\n}\nfunc main() {\n\tfmt.Println(weeklyRevenue(8000, 7))\n}`,
        testCases: [{ input: "8000,7", expected: "56000", description: "Function return value" }],
        conceptKeywords: ["func", "return", "int", "*"],
      },
      {
        id: "sp-go-final-4",
        concept: "Maps",
        narrative:
          "Paulie keeps a map of each crew member's current assignment. Create it and look up Tony.",
        prompt:
          "Create `map[string]string` called `assignments` with `\"Tony\": \"boss\"` and `\"Paulie\": \"capo\"`. Print `assignments[\"Tony\"]`.",
        hint: "Use a map literal: map[string]string{key: value, ...}",
        solution: `package main\nimport "fmt"\nfunc main() {\n\tassignments := map[string]string{\n\t\t"Tony":  "boss",\n\t\t"Paulie": "capo",\n\t}\n\tfmt.Println(assignments["Tony"])\n}`,
        starterCode: `package main\nimport "fmt"\nfunc main() {\n\tassignments := map[string]string{\n\t\t"Tony":   ___,\n\t\t"Paulie": "capo",\n\t}\n\tfmt.Println(assignments["Tony"])\n}`,
        testCases: [{ input: "", expected: "boss", description: "Map lookup" }],
        conceptKeywords: ["map", "string", "assignments", "Println"],
      },
      {
        id: "sp-go-final-5",
        concept: "Structs",
        narrative:
          "Each family member has a struct with their name and their rank in the organisation.",
        prompt:
          "Define struct `Member` with `Name string` and `Rank string`. Create instance Name `\"Tony\"` Rank `\"Boss\"`. Print both fields.",
        hint: "type Member struct { Name string; Rank string }",
        solution: `package main\nimport "fmt"\ntype Member struct {\n\tName string\n\tRank string\n}\nfunc main() {\n\tm := Member{Name: "Tony", Rank: "Boss"}\n\tfmt.Println(m.Name, m.Rank)\n}`,
        starterCode: `package main\nimport "fmt"\ntype Member ___ {\n\tName string\n\tRank string\n}\nfunc main() {\n\tm := Member{Name: "Tony", Rank: "Boss"}\n\tfmt.Println(m.Name, m.Rank)\n}`,
        testCases: [{ input: "", expected: "Tony Boss", description: "Struct fields" }],
        conceptKeywords: ["struct", "type", "Name", "Rank"],
      },
    ],
  },
};
