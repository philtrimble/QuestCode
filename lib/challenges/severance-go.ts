import type { Challenge } from "@/types";

export const severanceGoChallenges: Challenge[] = [
  {
    id: "sv-go-01",
    themeId: "severance",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Macrodata Refinement Intake",
    narrative:
      "Welcome to Lumon Industries. Your innie has just arrived on the Severed Floor. Before you can begin Macrodata Refinement, your employee file must be initialized. Name, employee number, and refinement status are mandatory fields.",
    prompt:
      "Declare three variables using `:=`: `name` set to `\"Mark S\"`, `employeeNumber` set to `4573`, and `severed` set to `true`. Print all three with `fmt.Println`.",
    hint: "Use `:=` for each variable. String values go in double quotes; integers and booleans are written as-is.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Mark S"\n\temployeeNumber := 4573\n\tsevered := true\n\tfmt.Println(name)\n\tfmt.Println(employeeNumber)\n\tfmt.Println(severed)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Declare name, employeeNumber, and severed using :=\n\tname := ___\n\temployeeNumber := ___\n\tsevered := ___\n\tfmt.Println(name)\n\tfmt.Println(employeeNumber)\n\tfmt.Println(severed)\n}`,
    testCases: [
      { input: "", expected: "Mark S\n4573\ntrue", description: "Prints the employee file fields" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "sv-go-02",
    themeId: "severance",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "The Quota Assessment",
    narrative:
      "Cobel is watching the refinement metrics. Each bin must reach a quota of 100 to be marked complete. If a bin exceeds 120 units, it earns a waffle party — the highest honor Lumon can bestow. Anything below 100 is a deficiency.",
    prompt:
      "Given `units := 115`, print `\"Waffle party\"` if `units > 120`, `\"Quota met\"` if `units >= 100`, or `\"Deficiency\"` otherwise.",
    hint: "Chain your conditions: check `> 120` first, then `>= 100`, then the else clause.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tunits := 115\n\tif units > 120 {\n\t\tfmt.Println("Waffle party")\n\t} else if units >= 100 {\n\t\tfmt.Println("Quota met")\n\t} else {\n\t\tfmt.Println("Deficiency")\n\t}\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tunits := 115\n\t// Print "Waffle party" if units > 120,\n\t// "Quota met" if units >= 100,\n\t// "Deficiency" otherwise\n\tif ___ {\n\t\tfmt.Println("Waffle party")\n\t} else if ___ {\n\t\tfmt.Println("Quota met")\n\t} else {\n\t\tfmt.Println("Deficiency")\n\t}\n}`,
    testCases: [
      { input: "", expected: "Quota met", description: "115 units meets the quota" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "sv-go-03",
    themeId: "severance",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "The Refinement Calculator",
    narrative:
      "The Macrodata Refinement process requires precise calculations. Each file processed earns the department a score multiplied by Lumon's proprietary efficiency factor of 8. Milchick needs the score before he can file the progress report.",
    prompt:
      "Write a function `refineScore` that takes `filesProcessed int` and returns `int`. It should return `filesProcessed * 8`. In `main`, call `refineScore(12)` and print the result.",
    hint: "Define the function above `main`: `func refineScore(filesProcessed int) int { return filesProcessed * 8 }`",
    solution: `package main\n\nimport "fmt"\n\nfunc refineScore(filesProcessed int) int {\n\treturn filesProcessed * 8\n}\n\nfunc main() {\n\tfmt.Println(refineScore(12))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc refineScore(filesProcessed int) int {\n\t// Return filesProcessed multiplied by 8\n\treturn ___\n}\n\nfunc main() {\n\tfmt.Println(refineScore(12)) // Should print: 96\n}`,
    testCases: [
      { input: "", expected: "96", description: "12 files at efficiency factor 8 equals 96" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "sv-go-04",
    themeId: "severance",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "The Severed Floor Roster",
    narrative:
      "Helly R has just been approved for severance and needs to be added to the MDR department roster. The team is already short-staffed, and Dylan has been keeping track. How many refined souls are working the floor now?",
    prompt:
      "Create a slice `employees` containing `\"Mark\"`, `\"Dylan\"`, and `\"Irving\"`. Use `append` to add `\"Helly\"`. Print the length of the slice.",
    hint: "Initialize with `employees := []string{\"Mark\", \"Dylan\", \"Irving\"}`, then `employees = append(employees, \"Helly\")`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\temployees := []string{"Mark", "Dylan", "Irving"}\n\temployees = append(employees, "Helly")\n\tfmt.Println(len(employees))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create a slice with Mark, Dylan, and Irving\n\temployees := []string{___}\n\t// Append Helly to the slice\n\temployees = append(employees, ___)\n\t// Print the length\n\tfmt.Println(len(employees))\n}`,
    testCases: [
      { input: "", expected: "4", description: "4 employees on the Severed Floor" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "sv-go-05",
    themeId: "severance",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Counting Refined Numbers",
    narrative:
      "The numbers glow and pulse on screen. Some feel scary — those are the ones that must be sorted into the scary bin. Helly cannot explain why she knows which numbers are scary; she just does. Loop through the bins and count the sorted ones.",
    prompt:
      "Given `bins := []int{12, 87, 34, 56, 99, 21}`, use a `for range` loop to sum all the values together. Print the total.",
    hint: "Declare `total := 0` before the loop. Use `for _, v := range bins { total += v }` then print `total`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tbins := []int{12, 87, 34, 56, 99, 21}\n\ttotal := 0\n\tfor _, v := range bins {\n\t\ttotal += v\n\t}\n\tfmt.Println(total)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tbins := []int{12, 87, 34, 56, 99, 21}\n\ttotal := 0\n\t// Loop through bins and add each value to total\n\tfor _, v := range bins {\n\t\ttotal += ___\n\t}\n\tfmt.Println(total)\n}`,
    testCases: [
      { input: "", expected: "309", description: "The sum of all refined number bins" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
  {
    id: "sv-go-06",
    themeId: "severance",
    languageId: "go",
    order: 6,
    title: "String Formatting",
    themedTitle: "The Lumon Employee Report",
    narrative:
      "Milchick must generate a personalized performance report for each severed employee. The report combines the employee's name and their refinement score into a single formatted line — something Cobel can review before the waffle party decision.",
    prompt:
      "Use `fmt.Sprintf` to format a report. Given `name := \"Mark S\"` and `score := 96`, produce `\"Mark S achieved a refinement score of 96\"` and print it.",
    hint: "Use `report := fmt.Sprintf(\"%s achieved a refinement score of %d\", name, score)` then `fmt.Println(report)`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Mark S"\n\tscore := 96\n\treport := fmt.Sprintf("%s achieved a refinement score of %d", name, score)\n\tfmt.Println(report)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Mark S"\n\tscore := 96\n\t// Use fmt.Sprintf to build the report\n\treport := fmt.Sprintf(___, name, score)\n\tfmt.Println(report)\n}`,
    testCases: [
      { input: "", expected: "Mark S achieved a refinement score of 96", description: "Formatted employee report" },
    ],
    concept: "String Formatting",
    difficulty: "intermediate",
  },
  {
    id: "sv-go-07",
    themeId: "severance",
    languageId: "go",
    order: 7,
    title: "Maps",
    themedTitle: "Department Quota Tracker",
    narrative:
      "Cobel tracks the quota progress of each Lumon department in real time. A map gives her instant access to any department's current units — and she never misses an anomaly in the refinement metrics.",
    prompt:
      "Create a map `quotas` of type `map[string]int`. Add `\"MDR\"` with value `87` and `\"O&E\"` with value `72`. Print the value for `\"MDR\"`.",
    hint: "Use `quotas := map[string]int{}`, assign values, then access with `quotas[\"MDR\"]`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tquotas := map[string]int{}\n\tquotas["MDR"] = 87\n\tquotas["O&E"] = 72\n\tfmt.Println(quotas["MDR"])\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create the map\n\tquotas := map[string]int{}\n\t// Add MDR and O&E quotas\n\tquotas[___] = 87\n\tquotas[___] = 72\n\t// Print MDR's quota\n\tfmt.Println(quotas[___])\n}`,
    testCases: [
      { input: "", expected: "87", description: "MDR department quota is 87" },
    ],
    concept: "Maps",
    difficulty: "intermediate",
  },
  {
    id: "sv-go-08",
    themeId: "severance",
    languageId: "go",
    order: 8,
    title: "Structs",
    themedTitle: "The Severed Employee Record",
    narrative:
      "Lumon's HR system needs a structured record for each severed employee — their name and their floor number. A Go struct provides the perfect data shape, and Cobel will personally audit every one of them.",
    prompt:
      "Define a struct `Employee` with fields `Name string` and `Floor int`. Create an instance with `Name: \"Helly R\"` and `Floor: 1`. Print both fields.",
    hint: "Define `type Employee struct { Name string; Floor int }` above `main`. Create with `e := Employee{Name: \"Helly R\", Floor: 1}`.",
    solution: `package main\n\nimport "fmt"\n\ntype Employee struct {\n\tName  string\n\tFloor int\n}\n\nfunc main() {\n\te := Employee{Name: "Helly R", Floor: 1}\n\tfmt.Println(e.Name)\n\tfmt.Println(e.Floor)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\ntype Employee struct {\n\tName  string\n\tFloor int\n}\n\nfunc main() {\n\t// Create an Employee with Name "Helly R" and Floor 1\n\te := Employee{___}\n\tfmt.Println(e.Name)\n\tfmt.Println(e.Floor)\n}`,
    testCases: [
      { input: "", expected: "Helly R\n1", description: "Employee name and floor number" },
    ],
    concept: "Structs",
    difficulty: "intermediate",
  },
  {
    id: "sv-go-09",
    themeId: "severance",
    languageId: "go",
    order: 9,
    title: "Multiple Return Values",
    themedTitle: "The Refinement Score Validator",
    narrative:
      "Before a score can be logged in Lumon's system, it must be validated. If the score is negative, the data is corrupted — possibly by a rogue innie. The validator returns both the verified score and an error, so Milchick can act accordingly.",
    prompt:
      "Write `validateScore(score int) (int, error)` that returns `score, nil` if `score >= 0`, or `0, errors.New(\"invalid score\")` otherwise. In `main`, call it with `85`, print both return values.",
    hint: "Import `\"errors\"`. Check `if score < 0 { return 0, errors.New(\"invalid score\") }`. Otherwise `return score, nil`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc validateScore(score int) (int, error) {\n\tif score < 0 {\n\t\treturn 0, errors.New("invalid score")\n\t}\n\treturn score, nil\n}\n\nfunc main() {\n\tresult, err := validateScore(85)\n\tfmt.Println(result)\n\tfmt.Println(err)\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc validateScore(score int) (int, error) {\n\tif score < 0 {\n\t\treturn 0, errors.New("invalid score")\n\t}\n\t// Return score and nil\n\treturn ___\n}\n\nfunc main() {\n\tresult, err := validateScore(85)\n\tfmt.Println(result)\n\tfmt.Println(err)\n}`,
    testCases: [
      { input: "", expected: "85\n<nil>", description: "Valid score returns the score and nil error" },
    ],
    concept: "Multiple Return Values",
    difficulty: "advanced",
  },
  {
    id: "sv-go-10",
    themeId: "severance",
    languageId: "go",
    order: 10,
    title: "Error Handling",
    themedTitle: "The Deficiency Alert",
    narrative:
      "When a refinement score is invalid, Cobel must be notified immediately. The alert system checks the error from the validator — if something is wrong, it prints a warning. This is how Lumon maintains its standards: no error goes unexamined.",
    prompt:
      "Call `validateScore(-5)`. If `err != nil`, print `\"Error:\"` followed by the error. Otherwise print the result.",
    hint: "Use `result, err := validateScore(-5)`. Then `if err != nil { fmt.Println(\"Error:\", err) } else { fmt.Println(result) }`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc validateScore(score int) (int, error) {\n\tif score < 0 {\n\t\treturn 0, errors.New("invalid score")\n\t}\n\treturn score, nil\n}\n\nfunc main() {\n\tresult, err := validateScore(-5)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc validateScore(score int) (int, error) {\n\tif score < 0 {\n\t\treturn 0, errors.New("invalid score")\n\t}\n\treturn score, nil\n}\n\nfunc main() {\n\tresult, err := validateScore(-5)\n\t// Check for error and print accordingly\n\tif ___ {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n}`,
    testCases: [
      { input: "", expected: "Error: invalid score", description: "Negative score triggers the deficiency alert" },
    ],
    concept: "Error Handling",
    difficulty: "advanced",
  },
];
