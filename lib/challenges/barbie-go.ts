import type { Challenge } from "@/types";

export const barbieGoChallenges: Challenge[] = [
  {
    id: "ba-go-01",
    themeId: "barbie",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Barbie's Stats",
    narrative:
      "The Barbieland Registry needs Barbie's official data on file. In Go, everything needs a type — even in a world where every day is perfect.",
    prompt:
      "In a Go `main` function, declare `name := \"Barbie\"`, `careers := 200`, and `isPerfect := true`. Print all three.",
    hint: "Use `:=` for short declaration. `fmt.Println()` prints values.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    name := "Barbie"\n    careers := 200\n    isPerfect := true\n    fmt.Println(name)\n    fmt.Println(careers)\n    fmt.Println(isPerfect)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    name := ___\n    careers := ___\n    isPerfect := ___\n    fmt.Println(name)\n    fmt.Println(careers)\n    fmt.Println(isPerfect)\n}`,
    testCases: [
      { input: "", expected: "Barbie\n200\ntrue", description: "Barbie's official stats" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "ba-go-02",
    themeId: "barbie",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "The Pink Test",
    narrative:
      "Before any item can enter Barbieland, it must pass the Pink Test. The border officers use a Go program to check if the pink content percentage meets the minimum required.",
    prompt:
      "Declare `pinkPercent := 75`. If `pinkPercent >= 60`, print `\"Welcome to Barbieland!\"`. Otherwise print `\"More pink required.\"`.",
    hint: "Go if/else: `if condition { } else { }` — no parentheses needed.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    pinkPercent := 75\n    if pinkPercent >= 60 {\n        fmt.Println("Welcome to Barbieland!")\n    } else {\n        fmt.Println("More pink required.")\n    }\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    pinkPercent := 75\n    if ___ {\n        fmt.Println("Welcome to Barbieland!")\n    } else {\n        fmt.Println("More pink required.")\n    }\n}`,
    testCases: [
      { input: "", expected: "Welcome to Barbieland!", description: "75% pink — entry approved" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "ba-go-03",
    themeId: "barbie",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "Outfit Calculator",
    narrative:
      "The Barbieland Wardrobe Department uses Go to calculate how many accessories are needed per outfit. Each of Barbie's outfits requires exactly 5 accessories.",
    prompt:
      "Write a Go function `accessoriesNeeded(outfits int) int` that returns `outfits * 5`. In `main`, print `accessoriesNeeded(12)`.",
    hint: "`func name(param type) returnType { return ... }`",
    solution: `package main\n\nimport "fmt"\n\nfunc accessoriesNeeded(outfits int) int {\n    return outfits * 5\n}\n\nfunc main() {\n    fmt.Println(accessoriesNeeded(12))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc accessoriesNeeded(outfits int) int {\n    return ___\n}\n\nfunc main() {\n    fmt.Println(accessoriesNeeded(12))  // Should print: 60\n}`,
    testCases: [
      { input: "12", expected: "60", description: "12 outfits × 5 accessories = 60" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "ba-go-04",
    themeId: "barbie",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "The Kens' Hobbies",
    narrative:
      "Ken's interests change rapidly. The Barbieland Hobby Registry uses a Go slice to track current Ken activities, and the latest entry — rollerblading — must be added immediately.",
    prompt:
      "Create `hobbies := []string{\"beach\", \"guitar\", \"horses\"}`. Append `\"rollerblading\"`. Print the length.",
    hint: "Use `hobbies = append(hobbies, \"rollerblading\")` — must reassign.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    hobbies := []string{"beach", "guitar", "horses"}\n    hobbies = append(hobbies, "rollerblading")\n    fmt.Println(len(hobbies))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    hobbies := []string{"beach", "guitar", "horses"}\n    hobbies = append(hobbies, ___)\n    fmt.Println(len(hobbies))  // Should print: 4\n}`,
    testCases: [
      { input: "", expected: "4", description: "Four Ken hobbies" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "ba-go-05",
    themeId: "barbie",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Perfect Day Counter",
    narrative:
      "Barbie wakes up, and every morning for a week is perfect. The Barbieland Meteorological Office logs a perfect-day streak using a Go loop before the existential crisis disrupts everything.",
    prompt:
      "Create `scores := []int{100, 100, 100, 72, 100, 100, 100}`. Loop through and count how many are equal to `100`. Print the count.",
    hint: "Use `for _, v := range scores` and an `if v == 100` check with a counter.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    scores := []int{100, 100, 100, 72, 100, 100, 100}\n    count := 0\n    for _, v := range scores {\n        if v == 100 {\n            count++\n        }\n    }\n    fmt.Println(count)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    scores := []int{100, 100, 100, 72, 100, 100, 100}\n    count := 0\n    for _, v := range scores {\n        if v == 100 {\n            count++\n        }\n    }\n    fmt.Println(count)  // Should print: 6\n}`,
    testCases: [
      { input: "", expected: "6", description: "Six perfect days out of seven" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "ba-go-06",
    themeId: "barbie",
    languageId: "go",
    order: 6,
    title: "String Formatting",
    themedTitle: "The Barbieland Broadcast",
    narrative:
      "Every morning in Barbieland, a formatted announcement goes out to all residents. The broadcast system uses `fmt.Sprintf` to build the message and `strings.ToUpper` to make it feel appropriately official and enthusiastic.",
    prompt:
      "Import `fmt` and `strings`. Declare `name := \"barbie\"` and `careers := 200`. Use `fmt.Sprintf` to build `broadcast` = `\"%s has %d careers!\"` with `strings.ToUpper(name)` and `careers`. Print `broadcast`. Print `strings.Contains(broadcast, \"BARBIE\")`.",
    hint: "Use `fmt.Sprintf(\"%s has %d careers!\", strings.ToUpper(name), careers)`. `%s` for string, `%d` for int.",
    solution: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\nfunc main() {\n\tname := "barbie"\n\tcareers := 200\n\tbroadcast := fmt.Sprintf("%s has %d careers!", strings.ToUpper(name), careers)\n\tfmt.Println(broadcast)\n\tfmt.Println(strings.Contains(broadcast, "BARBIE"))\n}`,
    starterCode: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\nfunc main() {\n\tname := "barbie"\n\tcareers := 200\n\tbroadcast := fmt.Sprintf(___, strings.ToUpper(name), careers)\n\tfmt.Println(broadcast)\n\tfmt.Println(strings.Contains(broadcast, ___))\n}`,
    testCases: [
      { input: "", expected: "BARBIE has 200 careers!", description: "Formatted Barbieland broadcast" },
      { input: "", expected: "true", description: "Broadcast contains BARBIE" },
    ],
    concept: "String Formatting",
    difficulty: "intermediate",
  },
  {
    id: "ba-go-07",
    themeId: "barbie",
    languageId: "go",
    order: 7,
    title: "Maps",
    themedTitle: "Barbieland Career Ratings",
    narrative:
      "The Barbieland Career Placement Office rates the popularity of each Barbie career. The ratings are stored in a Go map. Weird Barbie doesn't have a rating — she transcends the system.",
    prompt:
      "Create `popularity := map[string]int{\"Astronaut\": 92, \"President\": 88, \"Doctor\": 95, \"Architect\": 78}`. Use `for k, v := range popularity` to print each as `\"Career: <k>, Rating: <v>\"` using `fmt.Sprintf`. Print `len(popularity)`.",
    hint: "Use `fmt.Sprintf(\"Career: %s, Rating: %d\", k, v)` in the loop. `len(popularity)` counts the entries.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tpopularity := map[string]int{\n\t\t"Astronaut": 92,\n\t\t"President": 88,\n\t\t"Doctor":    95,\n\t\t"Architect": 78,\n\t}\n\tfor k, v := range popularity {\n\t\tfmt.Println(fmt.Sprintf("Career: %s, Rating: %d", k, v))\n\t}\n\tfmt.Println(len(popularity))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tpopularity := map[string]int{\n\t\t"Astronaut": 92,\n\t\t"President": 88,\n\t\t"Doctor":    95,\n\t\t"Architect": 78,\n\t}\n\tfor k, v := range popularity {\n\t\tfmt.Println(fmt.Sprintf(___, k, v))\n\t}\n\tfmt.Println(len(popularity))\n}`,
    testCases: [
      { input: "", expected: "4", description: "Four careers in the map" },
    ],
    concept: "Maps",
    difficulty: "intermediate",
  },
  {
    id: "ba-go-08",
    themeId: "barbie",
    languageId: "go",
    order: 8,
    title: "Structs",
    themedTitle: "The Barbie Profile",
    narrative:
      "The Barbieland Registry stores a formal profile for every Barbie. Each profile records the name, current career, and whether she is currently in Barbieland. Gloria would say this is important documentation. Ruth designed it.",
    prompt:
      "Define a struct `BarbieProfile` with fields `Name string`, `Career string`, and `InBarbieland bool`. Create `profile := BarbieProfile{Name: \"Stereotypical Barbie\", Career: \"President\", InBarbieland: false}`. Print each field on a separate line.",
    hint: "Declare `type BarbieProfile struct { ... }` outside `main`. Use `profile.Name`, `profile.Career`, `profile.InBarbieland`.",
    solution: `package main\n\nimport "fmt"\n\ntype BarbieProfile struct {\n\tName         string\n\tCareer       string\n\tInBarbieland bool\n}\n\nfunc main() {\n\tprofile := BarbieProfile{Name: "Stereotypical Barbie", Career: "President", InBarbieland: false}\n\tfmt.Println(profile.Name)\n\tfmt.Println(profile.Career)\n\tfmt.Println(profile.InBarbieland)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\ntype BarbieProfile struct {\n\tName         string\n\tCareer       string\n\tInBarbieland bool\n}\n\nfunc main() {\n\tprofile := BarbieProfile{Name: ___, Career: ___, InBarbieland: ___}\n\tfmt.Println(profile.Name)\n\tfmt.Println(profile.Career)\n\tfmt.Println(profile.InBarbieland)\n}`,
    testCases: [
      { input: "", expected: "Stereotypical Barbie", description: "Profile name" },
      { input: "", expected: "President", description: "Career is President" },
      { input: "", expected: "false", description: "Not currently in Barbieland" },
    ],
    concept: "Structs",
    difficulty: "intermediate",
  },
  {
    id: "ba-go-09",
    themeId: "barbie",
    languageId: "go",
    order: 9,
    title: "Multiple Return Values",
    themedTitle: "The Outfit Approval System",
    narrative:
      "Barbieland's fashion committee reviews outfit scores. If the score is below 50, it returns an error. Otherwise it returns the score and a grade. Weird Barbie wrote this function. Nobody questioned it.",
    prompt:
      "Import `fmt` and `errors`. Write `outfitGrade(score int) (string, error)` that returns `(\"\", errors.New(\"below threshold\"))` if `score < 50`, `(\"Fabulous\", nil)` if `score >= 90`, or `(\"Acceptable\", nil)` otherwise. In `main`, call with `95`, `70`, and `30`.",
    hint: "Check conditions in order: `score < 50`, then `score >= 90`, then else. Return two values each time.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc outfitGrade(score int) (string, error) {\n\tif score < 50 {\n\t\treturn "", errors.New("below threshold")\n\t} else if score >= 90 {\n\t\treturn "Fabulous", nil\n\t} else {\n\t\treturn "Acceptable", nil\n\t}\n}\n\nfunc main() {\n\tfor _, s := range []int{95, 70, 30} {\n\t\tgrade, err := outfitGrade(s)\n\t\tif err != nil {\n\t\t\tfmt.Println("Error:", err)\n\t\t} else {\n\t\t\tfmt.Println(grade)\n\t\t}\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc outfitGrade(score int) (string, error) {\n\tif score < 50 {\n\t\treturn "", errors.New(___)\n\t} else if score >= 90 {\n\t\treturn ___, nil\n\t} else {\n\t\treturn ___, nil\n\t}\n}\n\nfunc main() {\n\tfor _, s := range []int{95, 70, 30} {\n\t\tgrade, err := outfitGrade(s)\n\t\tif err != nil {\n\t\t\tfmt.Println("Error:", err)\n\t\t} else {\n\t\t\tfmt.Println(grade)\n\t\t}\n\t}\n}`,
    testCases: [
      { input: "95", expected: "Fabulous", description: "Score 95 is Fabulous" },
      { input: "70", expected: "Acceptable", description: "Score 70 is Acceptable" },
      { input: "30", expected: "Error: below threshold", description: "Score 30 is below threshold" },
    ],
    concept: "Multiple Return Values",
    difficulty: "advanced",
  },
  {
    id: "ba-go-10",
    themeId: "barbie",
    languageId: "go",
    order: 10,
    title: "Error Handling",
    themedTitle: "The Real World Adapter",
    narrative:
      "When Barbies enter the Real World, they must register with the Real World Integration Office. The registration function validates their name — blank names are rejected. Ken tried to register as 'I Am Kenough' and the system had opinions.",
    prompt:
      "Import `fmt` and `errors`. Write `registerBarbie(name string) (string, error)` that returns `(\"\", errors.New(\"name required\"))` if name is `\"\"`, else `(\"Registered: \" + name, nil)`. In `main`, call with `\"Barbie\"` and `\"\"`. Print results.",
    hint: "Check `if name == \"\"`. Return two values each time. Use `err != nil` to decide how to print.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc registerBarbie(name string) (string, error) {\n\tif name == "" {\n\t\treturn "", errors.New("name required")\n\t}\n\treturn "Registered: " + name, nil\n}\n\nfunc main() {\n\tresult, err := registerBarbie("Barbie")\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n\tresult2, err2 := registerBarbie("")\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(result2)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc registerBarbie(name string) (string, error) {\n\tif name == "" {\n\t\treturn "", errors.New(___)\n\t}\n\treturn "Registered: " + name, nil\n}\n\nfunc main() {\n\tresult, err := registerBarbie("Barbie")\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n\tresult2, err2 := registerBarbie("")\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(result2)\n\t}\n}`,
    testCases: [
      { input: "Barbie", expected: "Registered: Barbie", description: "Valid name registers successfully" },
      { input: "", expected: "Error: name required", description: "Empty name returns error" },
    ],
    concept: "Error Handling",
    difficulty: "advanced",
  },
];
