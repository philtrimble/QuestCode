import type { Challenge } from "@/types";

export const arrestedDevelopmentGoChallenges: Challenge[] = [
  {
    id: "ad-go-01",
    themeId: "arrested-development",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Banana Stand Inventory",
    narrative:
      "George Bluth Sr. always insisted there was money in the banana stand. In Go, Michael will finally track it properly — so when Buster burns it down, there's at least a paper trail.",
    prompt:
      "In a Go `main` function, use `:=` to declare `business := \"banana stand\"`, `cash := 250000`, and `intact := true`. Print all three.",
    hint: "Use `:=` for short variable declaration. `fmt.Println()` prints a value.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    business := "banana stand"\n    cash := 250000\n    intact := true\n    fmt.Println(business)\n    fmt.Println(cash)\n    fmt.Println(intact)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    business := ___\n    cash := ___\n    intact := ___\n    fmt.Println(business)\n    fmt.Println(cash)\n    fmt.Println(intact)\n}`,
    testCases: [
      { input: "", expected: "banana stand\n250000\ntrue", description: "Banana stand stats" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "ad-go-02",
    themeId: "arrested-development",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "The Never-Nude Check",
    narrative:
      "Tobias's never-nudity is well documented. The Bluth Company therapist needs a quick Go program to check the denim count — because Tobias in fewer than 6 cut-off jorts is a liability.",
    prompt:
      "Write a Go `main` that declares `jorts := 6`. If `jorts >= 6`, print `\"Tobias is legally covered.\"`. Otherwise print `\"Emergency cutoffs needed.\"`.",
    hint: "Go conditionals don't need parentheses: `if jorts >= 6 { ... }`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    jorts := 6\n    if jorts >= 6 {\n        fmt.Println("Tobias is legally covered.")\n    } else {\n        fmt.Println("Emergency cutoffs needed.")\n    }\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    jorts := 6\n    if ___ {\n        fmt.Println("Tobias is legally covered.")\n    } else {\n        fmt.Println("Emergency cutoffs needed.")\n    }\n}`,
    testCases: [
      { input: "", expected: "Tobias is legally covered.", description: "6 jorts is sufficient" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "ad-go-03",
    themeId: "arrested-development",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "The Gene Parmesan Fee",
    narrative:
      "Gene Parmesan — the world's best private investigator, according to Lucille — charges $200 per surveillance hour. Michael needs a Go function to calculate the invoice before Lucille is surprised by the bill.",
    prompt:
      "Write a Go function `investigatorFee(hours int) int` that returns `hours * 200`. In `main`, print `investigatorFee(12)`.",
    hint: "Go function syntax: `func name(param type) returnType { return ... }`.",
    solution: `package main\n\nimport "fmt"\n\nfunc investigatorFee(hours int) int {\n    return hours * 200\n}\n\nfunc main() {\n    fmt.Println(investigatorFee(12))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc investigatorFee(hours int) int {\n    return ___\n}\n\nfunc main() {\n    fmt.Println(investigatorFee(12))  // Should print: 2400\n}`,
    testCases: [
      { input: "12", expected: "2400", description: "12 hours at $200 = $2400" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "ad-go-04",
    themeId: "arrested-development",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "Stair Car Destinations",
    narrative:
      "The stair car has visited a suspicious number of locations this month. Michael needs a Go slice to track every stop — starting with the known ones, then appending the latest discovery.",
    prompt:
      "Create a `[]string` slice `stops` with `\"airport\"`, `\"storage unit\"`, and `\"Mexico border\"`. Append `\"Lucille 2's penthouse\"`. Print the length of the slice.",
    hint: "Use `append(slice, newItem)` and reassign: `stops = append(stops, ...)`. Then `len(stops)`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    stops := []string{"airport", "storage unit", "Mexico border"}\n    stops = append(stops, "Lucille 2's penthouse")\n    fmt.Println(len(stops))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    stops := []string{"airport", "storage unit", "Mexico border"}\n    stops = append(stops, ___)\n    fmt.Println(len(stops))  // Should print: 4\n}`,
    testCases: [
      { input: "", expected: "4", description: "Four stair car stops" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "ad-go-05",
    themeId: "arrested-development",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Lucille's Therapy Sessions",
    narrative:
      "Dr. Fishman has sent an invoice for Buster's therapy sessions. Michael needs to loop through all the sessions and calculate the total cost so he can argue with the bill.",
    prompt:
      "Create a `[]int` slice `fees` with values `150, 200, 150, 250, 200`. Use a `for _, v := range fees` loop to sum all values. Print the total.",
    hint: "Use `total := 0` before the loop, then `total += v` inside. Print `total` after.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    fees := []int{150, 200, 150, 250, 200}\n    total := 0\n    for _, v := range fees {\n        total += v\n    }\n    fmt.Println(total)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    fees := []int{150, 200, 150, 250, 200}\n    total := 0\n    for _, v := range fees {\n        total += v\n    }\n    fmt.Println(total)  // Should print: 950\n}`,
    testCases: [
      { input: "", expected: "950", description: "Total therapy bill: $950" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "ad-go-06",
    themeId: "arrested-development",
    languageId: "go",
    order: 6,
    title: "String Formatting",
    themedTitle: "Tobias's Audition Notice",
    narrative:
      "Tobias has been submitting audition notices to every theater in Newport Beach. Each notice must be formatted with his name, role applied for, and the phrase 'never-nude' somewhere in there. The casting directors have started recognizing the name.",
    prompt:
      "Import `fmt` and `strings`. Declare `name := \"tobias funke\"` and `role := \"lead\"`. Use `fmt.Sprintf` to build `notice` = `\"%s applying for %s role\"` with `strings.ToUpper(name)` and `role`. Print `notice`. Print `strings.Contains(notice, \"TOBIAS\")`.",
    hint: "Use `fmt.Sprintf(\"%s applying for %s role\", strings.ToUpper(name), role)`. `strings.Contains` checks for a substring.",
    solution: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\nfunc main() {\n\tname := "tobias funke"\n\trole := "lead"\n\tnotice := fmt.Sprintf("%s applying for %s role", strings.ToUpper(name), role)\n\tfmt.Println(notice)\n\tfmt.Println(strings.Contains(notice, "TOBIAS"))\n}`,
    starterCode: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\nfunc main() {\n\tname := "tobias funke"\n\trole := "lead"\n\tnotice := fmt.Sprintf(___, strings.ToUpper(name), role)\n\tfmt.Println(notice)\n\tfmt.Println(strings.Contains(notice, ___))\n}`,
    testCases: [
      { input: "", expected: "TOBIAS FUNKE applying for lead role", description: "Formatted audition notice" },
      { input: "", expected: "true", description: "Notice contains TOBIAS" },
    ],
    concept: "String Formatting",
    difficulty: "intermediate",
  },
  {
    id: "ad-go-07",
    themeId: "arrested-development",
    languageId: "go",
    order: 7,
    title: "Maps",
    themedTitle: "Bluth Company Asset Values",
    narrative:
      "The Bluth Company's assets are in chaos. Michael needs a Go map of remaining assets and their estimated values. Lucille has already hidden half of them offshore, so the map is smaller than it should be.",
    prompt:
      "Create `assets := map[string]int{\"banana stand\": 250000, \"model home\": 500000, \"yacht\": 180000}`. Use `for k, v := range assets` to print each as `\"Asset: <k>, Value: <v>\"` using `fmt.Sprintf`. Print `len(assets)`.",
    hint: "Use `fmt.Sprintf(\"Asset: %s, Value: %d\", k, v)` inside the loop. `len(assets)` gives the map size.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tassets := map[string]int{\n\t\t"banana stand": 250000,\n\t\t"model home":   500000,\n\t\t"yacht":        180000,\n\t}\n\tfor k, v := range assets {\n\t\tfmt.Println(fmt.Sprintf("Asset: %s, Value: %d", k, v))\n\t}\n\tfmt.Println(len(assets))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tassets := map[string]int{\n\t\t"banana stand": 250000,\n\t\t"model home":   500000,\n\t\t"yacht":        180000,\n\t}\n\tfor k, v := range assets {\n\t\tfmt.Println(fmt.Sprintf(___, k, v))\n\t}\n\tfmt.Println(len(assets))\n}`,
    testCases: [
      { input: "", expected: "3", description: "Three assets in the map" },
    ],
    concept: "Maps",
    difficulty: "intermediate",
  },
  {
    id: "ad-go-08",
    themeId: "arrested-development",
    languageId: "go",
    order: 8,
    title: "Structs",
    themedTitle: "The Bluth Family Member Record",
    narrative:
      "Michael is building a proper family database — one that accurately reflects each member's situation. Go structs let him define a type that captures name, role in the company, and whether they are currently creating a problem.",
    prompt:
      "Define a struct `FamilyMember` with fields `Name string`, `Role string`, and `IsProblematic bool`. Create `member := FamilyMember{Name: \"Gob\", Role: \"VP of Illusions\", IsProblematic: true}`. Print each field on a separate line.",
    hint: "Declare `type FamilyMember struct { Name string; Role string; IsProblematic bool }` outside `main`. Access with `member.Name`, etc.",
    solution: `package main\n\nimport "fmt"\n\ntype FamilyMember struct {\n\tName          string\n\tRole          string\n\tIsProblematic bool\n}\n\nfunc main() {\n\tmember := FamilyMember{Name: "Gob", Role: "VP of Illusions", IsProblematic: true}\n\tfmt.Println(member.Name)\n\tfmt.Println(member.Role)\n\tfmt.Println(member.IsProblematic)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\ntype FamilyMember struct {\n\tName          string\n\tRole          string\n\tIsProblematic bool\n}\n\nfunc main() {\n\tmember := FamilyMember{Name: ___, Role: ___, IsProblematic: ___}\n\tfmt.Println(member.Name)\n\tfmt.Println(member.Role)\n\tfmt.Println(member.IsProblematic)\n}`,
    testCases: [
      { input: "", expected: "Gob", description: "Member name is Gob" },
      { input: "", expected: "VP of Illusions", description: "Gob's role" },
      { input: "", expected: "true", description: "Gob is problematic" },
    ],
    concept: "Structs",
    difficulty: "intermediate",
  },
  {
    id: "ad-go-09",
    themeId: "arrested-development",
    languageId: "go",
    order: 9,
    title: "Multiple Return Values",
    themedTitle: "The Banana Stand Revenue Split",
    narrative:
      "Michael needs a function that splits the banana stand revenue between Bluth Company and the contingency fund — but returns an error if total revenue is zero. George Sr. told him there's always money in the banana stand. Go functions can tell you exactly how much, and whether it's valid.",
    prompt:
      "Import `fmt` and `errors`. Write `splitRevenue(total int) (int, int, error)` returning `(0, 0, errors.New(\"no revenue\"))` if total is 0, else `(total * 3 / 4, total / 4, nil)`. In `main`, call with `40000` and `0`. Print both shares or the error.",
    hint: "Return three values. Check `if total == 0`. Access the first two return values and the error separately.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc splitRevenue(total int) (int, int, error) {\n\tif total == 0 {\n\t\treturn 0, 0, errors.New("no revenue")\n\t}\n\treturn total * 3 / 4, total / 4, nil\n}\n\nfunc main() {\n\tcompany, fund, err := splitRevenue(40000)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(company)\n\t\tfmt.Println(fund)\n\t}\n\t_, _, err2 := splitRevenue(0)\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc splitRevenue(total int) (int, int, error) {\n\tif total == 0 {\n\t\treturn 0, 0, errors.New(___)\n\t}\n\treturn total * 3 / 4, total / 4, nil\n}\n\nfunc main() {\n\tcompany, fund, err := splitRevenue(40000)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(company)\n\t\tfmt.Println(fund)\n\t}\n\t_, _, err2 := splitRevenue(0)\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t}\n}`,
    testCases: [
      { input: "40000", expected: "30000", description: "75% of 40000 goes to company" },
      { input: "40000", expected: "10000", description: "25% of 40000 goes to fund" },
      { input: "0", expected: "Error: no revenue", description: "Zero revenue returns an error" },
    ],
    concept: "Multiple Return Values",
    difficulty: "advanced",
  },
  {
    id: "ad-go-10",
    themeId: "arrested-development",
    languageId: "go",
    order: 10,
    title: "Error Handling",
    themedTitle: "The Illusion Validator",
    narrative:
      "Gob's illusions are classified by the Alliance of Magicians. A validator checks whether a given illusion name is on the approved list. If not, it returns an error — because the Alliance does not acknowledge tricks, and it definitely does not acknowledge Gob's last three submissions.",
    prompt:
      "Import `fmt` and `errors`. Write `validateIllusion(name string) (string, error)` that returns `(name + \" approved\", nil)` if name equals `\"Fire\"` or `\"Levitation\"`, else `(name, errors.New(\"not an illusion\"))`. In `main`, call with `\"Fire\"` and `\"Magic\"`. Print results.",
    hint: "Use `if name == \"Fire\" || name == \"Levitation\"`. Return two values each time. Check `err != nil` after each call.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc validateIllusion(name string) (string, error) {\n\tif name == "Fire" || name == "Levitation" {\n\t\treturn name + " approved", nil\n\t}\n\treturn name, errors.New("not an illusion")\n}\n\nfunc main() {\n\tresult, err := validateIllusion("Fire")\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n\tresult2, err2 := validateIllusion("Magic")\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(result2)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc validateIllusion(name string) (string, error) {\n\tif name == "Fire" || name == "Levitation" {\n\t\treturn name + " approved", nil\n\t}\n\treturn name, errors.New(___)\n}\n\nfunc main() {\n\tresult, err := validateIllusion("Fire")\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n\tresult2, err2 := validateIllusion("Magic")\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(result2)\n\t}\n}`,
    testCases: [
      { input: "Fire", expected: "Fire approved", description: "Fire is an approved illusion" },
      { input: "Magic", expected: "Error: not an illusion", description: "Magic is not a recognized illusion" },
    ],
    concept: "Error Handling",
    difficulty: "advanced",
  },
];
