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
  {
    id: "rm-go-06",
    themeId: "rick-and-morty",
    languageId: "go",
    order: 6,
    title: "String Formatting",
    themedTitle: "Rick's Dimension Label",
    narrative:
      "Rick needs a label generator for his interdimensional travel logs. Each entry must include the traveler's name and the dimension number — because after 137 dimensions, even Rick admits things start blurring together. Morty gets no say in the format.",
    prompt:
      "Use `fmt.Sprintf` to build a label. Given `traveler := \"Rick\"` and `dimension := 137`, produce `\"Rick entered dimension C-137\"` and print it.",
    hint: "Use `label := fmt.Sprintf(\"%s entered dimension C-%d\", traveler, dimension)` then `fmt.Println(label)`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\ttraveler := "Rick"\n\tdimension := 137\n\tlabel := fmt.Sprintf("%s entered dimension C-%d", traveler, dimension)\n\tfmt.Println(label)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\ttraveler := "Rick"\n\tdimension := 137\n\t// Use fmt.Sprintf to build the label\n\tlabel := fmt.Sprintf(___, traveler, dimension)\n\tfmt.Println(label)\n}`,
    testCases: [
      { input: "", expected: "Rick entered dimension C-137", description: "Formatted dimension travel label" },
    ],
    concept: "String Formatting",
    difficulty: "intermediate",
  },
  {
    id: "rm-go-07",
    themeId: "rick-and-morty",
    languageId: "go",
    order: 7,
    title: "Maps",
    themedTitle: "The Citadel Registry",
    narrative:
      "The Citadel of Ricks keeps a registry of each Rick's IQ score — because status at the Citadel is based entirely on intelligence and nothing else. Rick C-137 disputes the rankings, but the map does not care about his feelings.",
    prompt:
      "Create a map `registry` of type `map[string]int`. Add `\"C-137\"` with value `300` and `\"D-99\"` with value `275`. Print the value for `\"C-137\"`.",
    hint: "Use `registry := map[string]int{}`, assign both entries, then print `registry[\"C-137\"]`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tregistry := map[string]int{}\n\tregistry["C-137"] = 300\n\tregistry["D-99"] = 275\n\tfmt.Println(registry["C-137"])\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create the map\n\tregistry := map[string]int{}\n\t// Add C-137 and D-99\n\tregistry[___] = 300\n\tregistry[___] = 275\n\t// Print C-137's IQ\n\tfmt.Println(registry[___])\n}`,
    testCases: [
      { input: "", expected: "300", description: "Rick C-137 has an IQ of 300" },
    ],
    concept: "Maps",
    difficulty: "intermediate",
  },
  {
    id: "rm-go-08",
    themeId: "rick-and-morty",
    languageId: "go",
    order: 8,
    title: "Structs",
    themedTitle: "The Adventure Log Entry",
    narrative:
      "Beth has started keeping a proper log of every adventure so she can hold Rick accountable. Each entry needs a destination and a danger rating. A struct is the only way to keep it organized — Rick would just use a paper napkin.",
    prompt:
      "Define a struct `Adventure` with fields `Destination string` and `Danger int`. Create an instance with `Destination: \"Blips and Chitz\"` and `Danger: 4`. Print both fields.",
    hint: "Define `type Adventure struct { Destination string; Danger int }` above `main`. Create with `a := Adventure{Destination: \"Blips and Chitz\", Danger: 4}`.",
    solution: `package main\n\nimport "fmt"\n\ntype Adventure struct {\n\tDestination string\n\tDanger      int\n}\n\nfunc main() {\n\ta := Adventure{Destination: "Blips and Chitz", Danger: 4}\n\tfmt.Println(a.Destination)\n\tfmt.Println(a.Danger)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\ntype Adventure struct {\n\tDestination string\n\tDanger      int\n}\n\nfunc main() {\n\t// Create an Adventure with Destination "Blips and Chitz" and Danger 4\n\ta := Adventure{___}\n\tfmt.Println(a.Destination)\n\tfmt.Println(a.Danger)\n}`,
    testCases: [
      { input: "", expected: "Blips and Chitz\n4", description: "Adventure destination and danger level" },
    ],
    concept: "Structs",
    difficulty: "intermediate",
  },
  {
    id: "rm-go-09",
    themeId: "rick-and-morty",
    languageId: "go",
    order: 9,
    title: "Multiple Return Values",
    themedTitle: "The Portal Calibrator",
    narrative:
      "Rick's portal gun only works with a positive frequency. If someone sets the frequency to zero — which Morty has done twice — the calibrator must return an error so Rick knows to confiscate the gun again. It returns both the calibrated frequency and any error.",
    prompt:
      "Write `calibrate(freq int) (int, error)` that returns `freq * 10, nil` if `freq > 0`, or `0, errors.New(\"invalid frequency\")` otherwise. In `main`, call it with `7`, print both values.",
    hint: "Import `\"errors\"`. Check `if freq <= 0 { return 0, errors.New(\"invalid frequency\") }`. Otherwise `return freq * 10, nil`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc calibrate(freq int) (int, error) {\n\tif freq <= 0 {\n\t\treturn 0, errors.New("invalid frequency")\n\t}\n\treturn freq * 10, nil\n}\n\nfunc main() {\n\tresult, err := calibrate(7)\n\tfmt.Println(result)\n\tfmt.Println(err)\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc calibrate(freq int) (int, error) {\n\tif freq <= 0 {\n\t\treturn 0, errors.New("invalid frequency")\n\t}\n\t// Return freq * 10 and nil\n\treturn ___\n}\n\nfunc main() {\n\tresult, err := calibrate(7)\n\tfmt.Println(result)\n\tfmt.Println(err)\n}`,
    testCases: [
      { input: "", expected: "70\n<nil>", description: "Frequency 7 calibrates to 70" },
    ],
    concept: "Multiple Return Values",
    difficulty: "advanced",
  },
  {
    id: "rm-go-10",
    themeId: "rick-and-morty",
    languageId: "go",
    order: 10,
    title: "Error Handling",
    themedTitle: "Portal Gun Malfunction",
    narrative:
      "Morty set the frequency to zero again. The portal gun makes a sad noise. The calibrator returns an error and someone needs to check it — because an unchecked error in this family leads to an entire dimension getting destroyed. Handle it properly.",
    prompt:
      "Call `calibrate(0)`. If `err != nil`, print `\"Malfunction:\"` followed by the error. Otherwise print the result.",
    hint: "Use `result, err := calibrate(0)`. Then `if err != nil { fmt.Println(\"Malfunction:\", err) } else { fmt.Println(result) }`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc calibrate(freq int) (int, error) {\n\tif freq <= 0 {\n\t\treturn 0, errors.New("invalid frequency")\n\t}\n\treturn freq * 10, nil\n}\n\nfunc main() {\n\tresult, err := calibrate(0)\n\tif err != nil {\n\t\tfmt.Println("Malfunction:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc calibrate(freq int) (int, error) {\n\tif freq <= 0 {\n\t\treturn 0, errors.New("invalid frequency")\n\t}\n\treturn freq * 10, nil\n}\n\nfunc main() {\n\tresult, err := calibrate(0)\n\t// Check for error and print accordingly\n\tif ___ {\n\t\tfmt.Println("Malfunction:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n}`,
    testCases: [
      { input: "", expected: "Malfunction: invalid frequency", description: "Zero frequency triggers the malfunction" },
    ],
    concept: "Error Handling",
    difficulty: "advanced",
  },
];
