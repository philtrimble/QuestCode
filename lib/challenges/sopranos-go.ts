import type { Challenge } from "@/types";

export const sopranosGoChallenges: Challenge[] = [
  {
    id: "sp-go-01",
    themeId: "sopranos",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Waste Management Stats",
    narrative:
      "Soprano Waste Management has legitimate books and less-legitimate books. This program covers the legitimate ones — for when the feds stop by. Go's type system keeps everything clean.",
    prompt:
      "In a Go `main`, declare `company := \"Soprano Waste\"`, `trucks := 12`, and `licensed := true`. Print all three.",
    hint: "Use `:=` for short declaration and `fmt.Println()`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    company := "Soprano Waste"\n    trucks := 12\n    licensed := true\n    fmt.Println(company)\n    fmt.Println(trucks)\n    fmt.Println(licensed)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    company := ___\n    trucks := ___\n    licensed := ___\n    fmt.Println(company)\n    fmt.Println(trucks)\n    fmt.Println(licensed)\n}`,
    testCases: [
      { input: "", expected: "Soprano Waste\n12\ntrue", description: "The legitimate side of things" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "sp-go-02",
    themeId: "sopranos",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "Loyalty Check",
    narrative:
      "In the family, loyalty is everything. Tony needs a quick Go check: if a crew member is loyal, they stay. If not, Silvio handles the conversation.",
    prompt:
      "Declare `loyal := true`. If `loyal`, print `\"You're with us.\"`. Otherwise print `\"We'll talk.\"`.",
    hint: "Go if/else: `if loyal { } else { }` — booleans don't need `== true`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    loyal := true\n    if loyal {\n        fmt.Println("You're with us.")\n    } else {\n        fmt.Println("We'll talk.")\n    }\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    loyal := true\n    if ___ {\n        fmt.Println("You're with us.")\n    } else {\n        fmt.Println("We'll talk.")\n    }\n}`,
    testCases: [
      { input: "", expected: "You're with us.", description: "Loyal = stays in the family" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "sp-go-03",
    themeId: "sopranos",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "The Cut Calculator",
    narrative:
      "Every earner kicks up a percentage to Tony. The accountant uses a Go function to calculate the cut automatically — so there's no arguing about the math later.",
    prompt:
      "Write Go function `cut(earnings int, pct int) int` that returns `earnings * pct / 100`. In `main`, print `cut(80000, 20)`.",
    hint: "`func name(a type, b type) returnType { return expr }`",
    solution: `package main\n\nimport "fmt"\n\nfunc cut(earnings int, pct int) int {\n    return earnings * pct / 100\n}\n\nfunc main() {\n    fmt.Println(cut(80000, 20))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc cut(earnings int, pct int) int {\n    return ___\n}\n\nfunc main() {\n    fmt.Println(cut(80000, 20))  // Should print: 16000\n}`,
    testCases: [
      { input: "80000, 20", expected: "16000", description: "20% of $80,000 = $16,000" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "sp-go-04",
    themeId: "sopranos",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "Family Territories",
    narrative:
      "The DiMeo family controls specific territories in New Jersey. After the sit-down with New York, a new territory was added to the agreement. Update the slice and confirm the count.",
    prompt:
      "Create `territories := []string{\"North Jersey\", \"Newark\", \"Essex County\"}`. Append `\"Hoboken\"`. Print the length.",
    hint: "Use `territories = append(territories, \"Hoboken\")` then `len(territories)`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    territories := []string{"North Jersey", "Newark", "Essex County"}\n    territories = append(territories, "Hoboken")\n    fmt.Println(len(territories))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    territories := []string{"North Jersey", "Newark", "Essex County"}\n    territories = append(territories, ___)\n    fmt.Println(len(territories))  // Should print: 4\n}`,
    testCases: [
      { input: "", expected: "4", description: "Four territories" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "sp-go-05",
    themeId: "sopranos",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Weekly Earnings Tally",
    narrative:
      "Bobby collects the weekly earnings from each crew member and brings them to Tony. The amounts need to be totalled before the sit-down so Tony knows what he's working with.",
    prompt:
      "Create `earnings := []int{4500, 8200, 3100, 6700, 5500}`. Loop with `range` and sum all values. Print the total.",
    hint: "Use `total := 0` and `total += v` in `for _, v := range earnings`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    earnings := []int{4500, 8200, 3100, 6700, 5500}\n    total := 0\n    for _, v := range earnings {\n        total += v\n    }\n    fmt.Println(total)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    earnings := []int{4500, 8200, 3100, 6700, 5500}\n    total := 0\n    for _, v := range earnings {\n        total += v\n    }\n    fmt.Println(total)  // Should print: 28000\n}`,
    testCases: [
      { input: "", expected: "28000", description: "Total weekly earnings: $28,000" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "sp-go-06",
    themeId: "sopranos",
    languageId: "go",
    order: 6,
    title: "String Formatting",
    themedTitle: "The Bada Bing Marquee",
    narrative:
      "Silvio handles the Bada Bing's promotional signage. Every event announcement is formatted with the featured name in caps, the door charge, and a tagline. The sign guy just runs the Go program now. Silvio approves every output personally.",
    prompt:
      "Import `fmt` and `strings`. Declare `act := \"paulie walnuts\"` and `cover := 20`. Use `fmt.Sprintf` to create `marquee` = `\"%s LIVE - Cover: $%d\"` with `strings.ToUpper(act)` and `cover`. Print `marquee`. Print `strings.Contains(marquee, \"PAULIE\")`.",
    hint: "Use `fmt.Sprintf(\"%s LIVE - Cover: $%d\", strings.ToUpper(act), cover)`. `%d` for int, `%s` for string.",
    solution: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\nfunc main() {\n\tact := "paulie walnuts"\n\tcover := 20\n\tmarquee := fmt.Sprintf("%s LIVE - Cover: $%d", strings.ToUpper(act), cover)\n\tfmt.Println(marquee)\n\tfmt.Println(strings.Contains(marquee, "PAULIE"))\n}`,
    starterCode: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\nfunc main() {\n\tact := "paulie walnuts"\n\tcover := 20\n\tmarquee := fmt.Sprintf(___, strings.ToUpper(act), cover)\n\tfmt.Println(marquee)\n\tfmt.Println(strings.Contains(marquee, ___))\n}`,
    testCases: [
      { input: "", expected: "PAULIE WALNUTS LIVE - Cover: $20", description: "Formatted Bada Bing marquee" },
      { input: "", expected: "true", description: "Marquee contains PAULIE" },
    ],
    concept: "String Formatting",
    difficulty: "intermediate",
  },
  {
    id: "sp-go-07",
    themeId: "sopranos",
    languageId: "go",
    order: 7,
    title: "Maps",
    themedTitle: "The Crew's Weekly Numbers",
    narrative:
      "Bobby compiles the weekly earnings for each crew member into a Go map before the sit-down. Tony reviews the map and nobody argues with the numbers — not even Paulie, who always thinks his number should be higher.",
    prompt:
      "Create `earnings := map[string]int{\"Tony\": 45000, \"Paulie\": 18000, \"Christopher\": 14500, \"Silvio\": 22000}`. Use `for k, v := range earnings` to print each as `\"Member: <k>, Earned: <v>\"` using `fmt.Sprintf`. Print `len(earnings)`.",
    hint: "Use `fmt.Sprintf(\"Member: %s, Earned: %d\", k, v)` in the loop. `len(earnings)` counts entries.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tearnings := map[string]int{\n\t\t"Tony":        45000,\n\t\t"Paulie":      18000,\n\t\t"Christopher": 14500,\n\t\t"Silvio":      22000,\n\t}\n\tfor k, v := range earnings {\n\t\tfmt.Println(fmt.Sprintf("Member: %s, Earned: %d", k, v))\n\t}\n\tfmt.Println(len(earnings))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tearnings := map[string]int{\n\t\t"Tony":        45000,\n\t\t"Paulie":      18000,\n\t\t"Christopher": 14500,\n\t\t"Silvio":      22000,\n\t}\n\tfor k, v := range earnings {\n\t\tfmt.Println(fmt.Sprintf(___, k, v))\n\t}\n\tfmt.Println(len(earnings))\n}`,
    testCases: [
      { input: "", expected: "4", description: "Four crew members in the earnings map" },
    ],
    concept: "Maps",
    difficulty: "intermediate",
  },
  {
    id: "sp-go-08",
    themeId: "sopranos",
    languageId: "go",
    order: 8,
    title: "Structs",
    themedTitle: "The Crew Member File",
    narrative:
      "The FBI maintains a file on every known crew member. Name, rank, and whether they're currently under surveillance. The Go struct makes it easy to spin up new files — which the FBI does regularly, and which Tony somehow always finds out about.",
    prompt:
      "Define a struct `CrewMember` with fields `Name string`, `Rank string`, and `UnderSurveillance bool`. Create `cm := CrewMember{Name: \"Tony Soprano\", Rank: \"Boss\", UnderSurveillance: true}`. Print each field on a separate line.",
    hint: "Define `type CrewMember struct { ... }` outside `main`. Access fields with dot notation.",
    solution: `package main\n\nimport "fmt"\n\ntype CrewMember struct {\n\tName              string\n\tRank              string\n\tUnderSurveillance bool\n}\n\nfunc main() {\n\tcm := CrewMember{Name: "Tony Soprano", Rank: "Boss", UnderSurveillance: true}\n\tfmt.Println(cm.Name)\n\tfmt.Println(cm.Rank)\n\tfmt.Println(cm.UnderSurveillance)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\ntype CrewMember struct {\n\tName              string\n\tRank              string\n\tUnderSurveillance bool\n}\n\nfunc main() {\n\tcm := CrewMember{Name: ___, Rank: ___, UnderSurveillance: ___}\n\tfmt.Println(cm.Name)\n\tfmt.Println(cm.Rank)\n\tfmt.Println(cm.UnderSurveillance)\n}`,
    testCases: [
      { input: "", expected: "Tony Soprano", description: "Crew member name" },
      { input: "", expected: "Boss", description: "Tony's rank is Boss" },
      { input: "", expected: "true", description: "Tony is under surveillance" },
    ],
    concept: "Structs",
    difficulty: "intermediate",
  },
  {
    id: "sp-go-09",
    themeId: "sopranos",
    languageId: "go",
    order: 9,
    title: "Multiple Return Values",
    themedTitle: "The Tribute Calculator",
    narrative:
      "Bobby wrote a Go function to calculate Tony's cut from any earnings amount. If the earnings are zero, it returns an error — because nobody shows up to a sit-down with nothing. Tony's rule, not Bobby's.",
    prompt:
      "Import `fmt` and `errors`. Write `tonysCut(earnings int, pct int) (int, error)` returning `(0, errors.New(\"no earnings\"))` if `earnings == 0`, else `(earnings * pct / 100, nil)`. In `main`, call with `(80000, 20)` and `(0, 20)`.",
    hint: "Check `if earnings == 0` first. Return `(int, error)` in both branches.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc tonysCut(earnings int, pct int) (int, error) {\n\tif earnings == 0 {\n\t\treturn 0, errors.New("no earnings")\n\t}\n\treturn earnings * pct / 100, nil\n}\n\nfunc main() {\n\tcut, err := tonysCut(80000, 20)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(cut)\n\t}\n\tcut2, err2 := tonysCut(0, 20)\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(cut2)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc tonysCut(earnings int, pct int) (int, error) {\n\tif earnings == 0 {\n\t\treturn 0, errors.New(___)\n\t}\n\treturn earnings * pct / 100, nil\n}\n\nfunc main() {\n\tcut, err := tonysCut(80000, 20)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(cut)\n\t}\n\tcut2, err2 := tonysCut(0, 20)\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(cut2)\n\t}\n}`,
    testCases: [
      { input: "80000, 20", expected: "16000", description: "20% of $80,000 = $16,000" },
      { input: "0, 20", expected: "Error: no earnings", description: "Zero earnings returns error" },
    ],
    concept: "Multiple Return Values",
    difficulty: "advanced",
  },
  {
    id: "sp-go-10",
    themeId: "sopranos",
    languageId: "go",
    order: 10,
    title: "Error Handling",
    themedTitle: "The Loyalty Verification System",
    narrative:
      "Tony asked Silvio to build a loyalty verification tool. It takes a crew member's name and returns whether they are confirmed loyal or returns an error for anyone on the known-risk list. Christopher was specifically mentioned.",
    prompt:
      "Import `fmt` and `errors`. Write `verifyLoyalty(name string) (string, error)` returning `(\"\", errors.New(name + \" is a risk\"))` if name equals `\"Christopher\"`, else `(name + \" is loyal\", nil)`. In `main`, call with `\"Paulie\"` and `\"Christopher\"`.",
    hint: "Check `if name == \"Christopher\"`. Use string concatenation in both the error and the success return.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc verifyLoyalty(name string) (string, error) {\n\tif name == "Christopher" {\n\t\treturn "", errors.New(name + " is a risk")\n\t}\n\treturn name + " is loyal", nil\n}\n\nfunc main() {\n\tresult, err := verifyLoyalty("Paulie")\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n\tresult2, err2 := verifyLoyalty("Christopher")\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(result2)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc verifyLoyalty(name string) (string, error) {\n\tif name == "Christopher" {\n\t\treturn "", errors.New(___)\n\t}\n\treturn name + " is loyal", nil\n}\n\nfunc main() {\n\tresult, err := verifyLoyalty("Paulie")\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n\tresult2, err2 := verifyLoyalty("Christopher")\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(result2)\n\t}\n}`,
    testCases: [
      { input: "Paulie", expected: "Paulie is loyal", description: "Paulie is verified loyal" },
      { input: "Christopher", expected: "Error: Christopher is a risk", description: "Christopher returns a risk error" },
    ],
    concept: "Error Handling",
    difficulty: "advanced",
  },
];
