import type { Challenge } from "@/types";

export const rickAndMortyGoChallenges: Challenge[] = [
  {
    id: "rm-go-01",
    themeId: "rick-and-morty",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Portal Gun Initialization",
    narrative:
      "Rick Sanchez is preparing a new portal gun for Morty. Before they can rip a hole in the space-time continuum, the device needs its core variables initialized — the owner's name, the dimension counter, and whether the stabilizer is armed.",
    prompt:
      "Declare three variables using `:=`: `owner` set to `\"Rick\"`, `dimensions` set to `137`, and `stabilized` set to `true`. Print all three with `fmt.Println`.",
    hint: "Use `:=` for each: `owner := \"Rick\"`, `dimensions := 137`, `stabilized := true`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\towner := "Rick"\n\tdimensions := 137\n\tstabilized := true\n\tfmt.Println(owner)\n\tfmt.Println(dimensions)\n\tfmt.Println(stabilized)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Declare owner, dimensions, and stabilized using :=\n\towner := ___\n\tdimensions := ___\n\tstabilized := ___\n\tfmt.Println(owner)\n\tfmt.Println(dimensions)\n\tfmt.Println(stabilized)\n}`,
    testCases: [
      { input: "", expected: "Rick\n137\ntrue", description: "Portal gun initialization complete" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "rm-go-02",
    themeId: "rick-and-morty",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "Morty's Danger Meter",
    narrative:
      "Rick has a secret Morty danger meter on his wrist. When the danger score goes above 80, it means Morty is screaming and they need to portal out. Between 50 and 80 is a manageable level of peril. Below 50 means Morty is probably fine — for now.",
    prompt:
      "Given `danger := 72`, print `\"Portal out now\"` if `danger > 80`, `\"Manageable\"` if `danger >= 50`, or `\"Fine\"` otherwise.",
    hint: "Check `> 80` first, then `>= 50`, then the else branch. Go conditions have no parentheses.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tdanger := 72\n\tif danger > 80 {\n\t\tfmt.Println("Portal out now")\n\t} else if danger >= 50 {\n\t\tfmt.Println("Manageable")\n\t} else {\n\t\tfmt.Println("Fine")\n\t}\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tdanger := 72\n\t// Print "Portal out now" if danger > 80,\n\t// "Manageable" if danger >= 50,\n\t// "Fine" otherwise\n\tif ___ {\n\t\tfmt.Println("Portal out now")\n\t} else if ___ {\n\t\tfmt.Println("Manageable")\n\t} else {\n\t\tfmt.Println("Fine")\n\t}\n}`,
    testCases: [
      { input: "", expected: "Manageable", description: "Danger score 72 is manageable" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "rm-go-03",
    themeId: "rick-and-morty",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "Interdimensional Fuel Calculator",
    narrative:
      "Rick's ship runs on mega seeds, and each light year of interdimensional travel burns exactly 4 of them. Before every adventure, Beth asks how many mega seeds they need — mostly so she can worry about it. Rick just needs the math to work.",
    prompt:
      "Write a function `fuelNeeded` that takes `lightYears int` and returns `int`. It should return `lightYears * 4`. In `main`, call `fuelNeeded(7)` and print the result.",
    hint: "`func fuelNeeded(lightYears int) int { return lightYears * 4 }` — define it above `main`.",
    solution: `package main\n\nimport "fmt"\n\nfunc fuelNeeded(lightYears int) int {\n\treturn lightYears * 4\n}\n\nfunc main() {\n\tfmt.Println(fuelNeeded(7))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc fuelNeeded(lightYears int) int {\n\t// Return lightYears multiplied by 4\n\treturn ___\n}\n\nfunc main() {\n\tfmt.Println(fuelNeeded(7)) // Should print: 28\n}`,
    testCases: [
      { input: "", expected: "28", description: "7 light years at 4 mega seeds each equals 28" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "rm-go-04",
    themeId: "rick-and-morty",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "The Council of Ricks",
    narrative:
      "The Council of Ricks has convened and a new Rick from Dimension J-22 has requested membership. The Citadel secretary must update the registry and confirm how many Ricks now sit on the Council — Rick C-137 finds this entire process tedious.",
    prompt:
      "Create a slice `council` containing `\"Rick C-137\"`, `\"Rick D-99\"`, and `\"Rick X-12\"`. Use `append` to add `\"Rick J-22\"`. Print the length of the slice.",
    hint: "Use `council := []string{\"Rick C-137\", \"Rick D-99\", \"Rick X-12\"}`, then `council = append(council, \"Rick J-22\")`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tcouncil := []string{"Rick C-137", "Rick D-99", "Rick X-12"}\n\tcouncil = append(council, "Rick J-22")\n\tfmt.Println(len(council))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create a slice with Rick C-137, Rick D-99, and Rick X-12\n\tcouncil := []string{___}\n\t// Append Rick J-22\n\tcouncil = append(council, ___)\n\t// Print the length\n\tfmt.Println(len(council))\n}`,
    testCases: [
      { input: "", expected: "4", description: "4 Ricks on the Council" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "rm-go-05",
    themeId: "rick-and-morty",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Counting Morty's Screams",
    narrative:
      "Rick keeps a running log of every adventure's scream count. The Morty Trauma Index is calculated by summing all scream events across each adventure. A high total means Rick owes Morty a brief moment of acknowledgment — which Rick will absolutely not deliver.",
    prompt:
      "Given `screams := []int{14, 22, 8, 31, 17}`, use a `for range` loop to sum all values. Print the total.",
    hint: "Declare `total := 0`, then `for _, v := range screams { total += v }`. Print `total`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tscreams := []int{14, 22, 8, 31, 17}\n\ttotal := 0\n\tfor _, v := range screams {\n\t\ttotal += v\n\t}\n\tfmt.Println(total)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tscreams := []int{14, 22, 8, 31, 17}\n\ttotal := 0\n\t// Loop through screams and accumulate the total\n\tfor _, v := range screams {\n\t\ttotal += ___\n\t}\n\tfmt.Println(total)\n}`,
    testCases: [
      { input: "", expected: "92", description: "Total Morty scream events across all adventures" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
];
