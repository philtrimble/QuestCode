import type { Challenge } from "@/types";

export const sexAndTheCityGoChallenges: Challenge[] = [
  {
    id: "sc-go-01",
    themeId: "sex-and-the-city",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Shoe Inventory",
    narrative:
      "The walk-in closet of Carrie Bradshaw needs to be catalogued before she moves apartments — again. In Go, every variable needs a type, which is more commitment than most of Carrie's relationships.",
    prompt:
      "In a Go `main`, declare `designer := \"Manolo Blahnik\"`, `pairs := 100`, and `insured := false`. Print all three.",
    hint: "Use `:=` short declaration and `fmt.Println()`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    designer := "Manolo Blahnik"\n    pairs := 100\n    insured := false\n    fmt.Println(designer)\n    fmt.Println(pairs)\n    fmt.Println(insured)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    designer := ___\n    pairs := ___\n    insured := ___\n    fmt.Println(designer)\n    fmt.Println(pairs)\n    fmt.Println(insured)\n}`,
    testCases: [
      { input: "", expected: "Manolo Blahnik\n100\nfalse", description: "The shoe closet inventory" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "sc-go-02",
    themeId: "sex-and-the-city",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "Rent Check",
    narrative:
      "Miranda just got an offer on a new apartment. Before she accepts, she needs a quick Go program to verify her monthly surplus after rent — because unlike Carrie, she actually checks her finances.",
    prompt:
      "Declare `income := 8000` and `rent := 3200`. If `income - rent > 3000`, print `\"Affordable.\"`. Otherwise print `\"Stretch.\"`.",
    hint: "Go if/else: `if expr { } else { }` — no parentheses around the condition.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    income := 8000\n    rent := 3200\n    if income - rent > 3000 {\n        fmt.Println("Affordable.")\n    } else {\n        fmt.Println("Stretch.")\n    }\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    income := 8000\n    rent := 3200\n    if ___ {\n        fmt.Println("Affordable.")\n    } else {\n        fmt.Println("Stretch.")\n    }\n}`,
    testCases: [
      { input: "", expected: "Affordable.", description: "$4800 surplus — affordable" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "sc-go-03",
    themeId: "sex-and-the-city",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "The Cosmo Recipe",
    narrative:
      "Samantha knows exactly how many ounces of vodka go into the perfect Cosmopolitan. She needs a Go function to scale the recipe up for the group brunch without doing mental math.",
    prompt:
      "Write `cosmoOunces(drinks int) int` that returns `drinks * 2`. In `main`, print `cosmoOunces(4)`.",
    hint: "`func name(param type) returnType { return ... }`",
    solution: `package main\n\nimport "fmt"\n\nfunc cosmoOunces(drinks int) int {\n    return drinks * 2\n}\n\nfunc main() {\n    fmt.Println(cosmoOunces(4))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc cosmoOunces(drinks int) int {\n    return ___\n}\n\nfunc main() {\n    fmt.Println(cosmoOunces(4))  // Should print: 8\n}`,
    testCases: [
      { input: "4", expected: "8", description: "4 drinks × 2 oz = 8 oz vodka" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "sc-go-04",
    themeId: "sex-and-the-city",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "Ex-Boyfriend List",
    narrative:
      "For a very special column, Carrie is revisiting every significant relationship. The list starts with three names — and as always with Carrie, a fourth one gets added before the deadline.",
    prompt:
      "Create `exes := []string{\"Aidan\", \"Big\", \"Berger\"}`. Append `\"Aleksandr\"`. Print the length.",
    hint: "Use `exes = append(exes, \"Aleksandr\")` and `len(exes)`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    exes := []string{"Aidan", "Big", "Berger"}\n    exes = append(exes, "Aleksandr")\n    fmt.Println(len(exes))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    exes := []string{"Aidan", "Big", "Berger"}\n    exes = append(exes, ___)\n    fmt.Println(len(exes))  // Should print: 4\n}`,
    testCases: [
      { input: "", expected: "4", description: "Four significant exes" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "sc-go-05",
    themeId: "sex-and-the-city",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Column Deadline Tracker",
    narrative:
      "Carrie has five columns due this month and she's behind on all of them. Her editor needs a Go program to print each deadline as a reminder — kindly but firmly.",
    prompt:
      "Create `wordCounts := []int{420, 380, 510, 295, 445}`. Loop with `range` and sum all values. Print the total.",
    hint: "Use `total := 0` and `total += v` in `for _, v := range wordCounts`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n    wordCounts := []int{420, 380, 510, 295, 445}\n    total := 0\n    for _, v := range wordCounts {\n        total += v\n    }\n    fmt.Println(total)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    wordCounts := []int{420, 380, 510, 295, 445}\n    total := 0\n    for _, v := range wordCounts {\n        total += v\n    }\n    fmt.Println(total)  // Should print: 2050\n}`,
    testCases: [
      { input: "", expected: "2050", description: "Total words across five columns" },
    ],
    concept: "Loops",
    difficulty: "beginner",
  },
  {
    id: "sc-go-06",
    themeId: "sex-and-the-city",
    languageId: "go",
    order: 6,
    title: "String Formatting",
    themedTitle: "Carrie's Column Byline",
    narrative:
      "Every column Carrie writes goes out with a formatted byline — her name in caps, the word count, and the publication. Her editor uses a Go program to generate the byline automatically. Carrie just writes the column. Aidan built the formatter. Big takes credit.",
    prompt:
      "Import `fmt` and `strings`. Declare `author := \"carrie bradshaw\"` and `wordCount := 850`. Use `fmt.Sprintf` to create `byline` = `\"By %s | %d words\"` with `strings.ToUpper(author)` and `wordCount`. Print `byline`. Print `strings.Contains(byline, \"CARRIE\")`.",
    hint: "Use `fmt.Sprintf(\"By %s | %d words\", strings.ToUpper(author), wordCount)`. `%s` for string, `%d` for int.",
    solution: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\nfunc main() {\n\tauthor := "carrie bradshaw"\n\twordCount := 850\n\tbyline := fmt.Sprintf("By %s | %d words", strings.ToUpper(author), wordCount)\n\tfmt.Println(byline)\n\tfmt.Println(strings.Contains(byline, "CARRIE"))\n}`,
    starterCode: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\nfunc main() {\n\tauthor := "carrie bradshaw"\n\twordCount := 850\n\tbyline := fmt.Sprintf(___, strings.ToUpper(author), wordCount)\n\tfmt.Println(byline)\n\tfmt.Println(strings.Contains(byline, ___))\n}`,
    testCases: [
      { input: "", expected: "By CARRIE BRADSHAW | 850 words", description: "Formatted byline" },
      { input: "", expected: "true", description: "Byline contains CARRIE" },
    ],
    concept: "String Formatting",
    difficulty: "intermediate",
  },
  {
    id: "sc-go-07",
    themeId: "sex-and-the-city",
    languageId: "go",
    order: 7,
    title: "Maps",
    themedTitle: "Manhattan Restaurant Guide",
    narrative:
      "The girls have rated every brunch spot in Manhattan. Miranda insisted on a Go map so the data could be retrieved programmatically. Charlotte hand-wrote hers on monogrammed cards first. The map was more useful.",
    prompt:
      "Create `brunch := map[string]int{\"Nobu\": 95, \"Pastis\": 87, \"Balthazar\": 91, \"Cipriani\": 82}`. Use `for k, v := range brunch` to print each as `\"Restaurant: <k>, Score: <v>\"` using `fmt.Sprintf`. Print `len(brunch)`.",
    hint: "Use `fmt.Sprintf(\"Restaurant: %s, Score: %d\", k, v)` inside the loop.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tbrunch := map[string]int{\n\t\t"Nobu":      95,\n\t\t"Pastis":    87,\n\t\t"Balthazar": 91,\n\t\t"Cipriani":  82,\n\t}\n\tfor k, v := range brunch {\n\t\tfmt.Println(fmt.Sprintf("Restaurant: %s, Score: %d", k, v))\n\t}\n\tfmt.Println(len(brunch))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tbrunch := map[string]int{\n\t\t"Nobu":      95,\n\t\t"Pastis":    87,\n\t\t"Balthazar": 91,\n\t\t"Cipriani":  82,\n\t}\n\tfor k, v := range brunch {\n\t\tfmt.Println(fmt.Sprintf(___, k, v))\n\t}\n\tfmt.Println(len(brunch))\n}`,
    testCases: [
      { input: "", expected: "4", description: "Four restaurants in the guide" },
    ],
    concept: "Maps",
    difficulty: "intermediate",
  },
  {
    id: "sc-go-08",
    themeId: "sex-and-the-city",
    languageId: "go",
    order: 8,
    title: "Structs",
    themedTitle: "The Woman Profile",
    narrative:
      "Each of the four women has a distinct profile in Carrie's mental Rolodex. Go structs capture the essentials — name, job, and current relationship status. Samantha's status field changes the most. Miranda's field is the most accurate.",
    prompt:
      "Define a struct `Woman` with fields `Name string`, `Job string`, and `InRelationship bool`. Create `w := Woman{Name: \"Miranda Hobbes\", Job: \"Lawyer\", InRelationship: true}`. Print each field on a separate line.",
    hint: "Define `type Woman struct { ... }` outside `main`. Access with `w.Name`, `w.Job`, `w.InRelationship`.",
    solution: `package main\n\nimport "fmt"\n\ntype Woman struct {\n\tName           string\n\tJob            string\n\tInRelationship bool\n}\n\nfunc main() {\n\tw := Woman{Name: "Miranda Hobbes", Job: "Lawyer", InRelationship: true}\n\tfmt.Println(w.Name)\n\tfmt.Println(w.Job)\n\tfmt.Println(w.InRelationship)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\ntype Woman struct {\n\tName           string\n\tJob            string\n\tInRelationship bool\n}\n\nfunc main() {\n\tw := Woman{Name: ___, Job: ___, InRelationship: ___}\n\tfmt.Println(w.Name)\n\tfmt.Println(w.Job)\n\tfmt.Println(w.InRelationship)\n}`,
    testCases: [
      { input: "", expected: "Miranda Hobbes", description: "Woman's name" },
      { input: "", expected: "Lawyer", description: "Miranda is a lawyer" },
      { input: "", expected: "true", description: "Miranda is in a relationship" },
    ],
    concept: "Structs",
    difficulty: "intermediate",
  },
  {
    id: "sc-go-09",
    themeId: "sex-and-the-city",
    languageId: "go",
    order: 9,
    title: "Multiple Return Values",
    themedTitle: "The Shoe Investment Evaluator",
    narrative:
      "Miranda built a shoe investment function for Carrie — not because she approves, but because she needed a real example of Go multiple return values. It returns the cost per wear and an error if the shoes are unworn. Carrie has never actually used it.",
    prompt:
      "Import `fmt` and `errors`. Write `costPerWear(price int, wears int) (float64, error)` returning `(0, errors.New(\"never worn\"))` if `wears == 0`, else `(float64(price) / float64(wears), nil)`. In `main`, call with `(480, 12)` and `(480, 0)`.",
    hint: "Use `float64(price) / float64(wears)` for the division. Return `(float64, error)` always.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc costPerWear(price int, wears int) (float64, error) {\n\tif wears == 0 {\n\t\treturn 0, errors.New("never worn")\n\t}\n\treturn float64(price) / float64(wears), nil\n}\n\nfunc main() {\n\tcost, err := costPerWear(480, 12)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(cost)\n\t}\n\tcost2, err2 := costPerWear(480, 0)\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(cost2)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc costPerWear(price int, wears int) (float64, error) {\n\tif wears == 0 {\n\t\treturn 0, errors.New(___)\n\t}\n\treturn float64(price) / float64(wears), nil\n}\n\nfunc main() {\n\tcost, err := costPerWear(480, 12)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(cost)\n\t}\n\tcost2, err2 := costPerWear(480, 0)\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(cost2)\n\t}\n}`,
    testCases: [
      { input: "480, 12", expected: "40", description: "$480 / 12 wears = $40 per wear" },
      { input: "480, 0", expected: "Error: never worn", description: "Zero wears returns error" },
    ],
    concept: "Multiple Return Values",
    difficulty: "advanced",
  },
  {
    id: "sc-go-10",
    themeId: "sex-and-the-city",
    languageId: "go",
    order: 10,
    title: "Error Handling",
    themedTitle: "The Big Commitment Validator",
    narrative:
      "After years of on-again-off-again, Carrie needed a function to validate whether Big was actually committing. It returns an error for vague answers. Miranda wrote it. It is the most useful thing in this entire codebase.",
    prompt:
      "Import `fmt` and `errors`. Write `validateCommitment(answer string) (string, error)` returning `(\"Committed\", nil)` if answer equals `\"yes\"`, `(\"\", errors.New(\"non-committal: \" + answer))` otherwise. In `main`, call with `\"yes\"` and `\"maybe\"`.",
    hint: "Check `if answer == \"yes\"`. Use string concatenation in the error: `errors.New(\"non-committal: \" + answer)`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc validateCommitment(answer string) (string, error) {\n\tif answer == "yes" {\n\t\treturn "Committed", nil\n\t}\n\treturn "", errors.New("non-committal: " + answer)\n}\n\nfunc main() {\n\tresult, err := validateCommitment("yes")\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n\tresult2, err2 := validateCommitment("maybe")\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(result2)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc validateCommitment(answer string) (string, error) {\n\tif answer == "yes" {\n\t\treturn "Committed", nil\n\t}\n\treturn "", errors.New(___)\n}\n\nfunc main() {\n\tresult, err := validateCommitment("yes")\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n\tresult2, err2 := validateCommitment("maybe")\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(result2)\n\t}\n}`,
    testCases: [
      { input: "yes", expected: "Committed", description: "Yes means committed" },
      { input: "maybe", expected: "Error: non-committal: maybe", description: "Maybe is non-committal" },
    ],
    concept: "Error Handling",
    difficulty: "advanced",
  },
];
