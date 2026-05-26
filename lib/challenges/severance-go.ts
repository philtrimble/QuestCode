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
];
