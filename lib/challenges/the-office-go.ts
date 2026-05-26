import type { Challenge } from "@/types";

export const theOfficeGoChallenges: Challenge[] = [
  {
    id: "to-go-01",
    themeId: "the-office",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Michael's Business Card",
    narrative:
      "Michael Scott has decided to update his business card and needs it initialized in the system. It must include his name, his employee ID, and whether he is the world's best boss — a fact he considers self-evident and non-negotiable.",
    prompt:
      "Declare three variables using `:=`: `name` set to `\"Michael Scott\"`, `employeeId` set to `1`, and `bestBoss` set to `true`. Print all three with `fmt.Println`.",
    hint: "Use `:=` for each declaration: `name := \"Michael Scott\"`, `employeeId := 1`, `bestBoss := true`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Michael Scott"\n\temployeeId := 1\n\tbestBoss := true\n\tfmt.Println(name)\n\tfmt.Println(employeeId)\n\tfmt.Println(bestBoss)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Declare name, employeeId, and bestBoss using :=\n\tname := ___\n\temployeeId := ___\n\tbestBoss := ___\n\tfmt.Println(name)\n\tfmt.Println(employeeId)\n\tfmt.Println(bestBoss)\n}`,
    testCases: [
      { input: "", expected: "Michael Scott\n1\ntrue", description: "Prints Michael's business card info" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "to-go-02",
    themeId: "the-office",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "Dwight's Sales Ranking",
    narrative:
      "Assistant to the Regional Manager Dwight Schrute tracks every sale obsessively. Sales above 50 units earn the title of Top Seller. Between 20 and 50 is acceptable. Anything below 20 gets a visit from the Lackadaisical Sales Committee — which Dwight chairs.",
    prompt:
      "Given `sales := 35`, print `\"Top Seller\"` if `sales > 50`, `\"Acceptable\"` if `sales >= 20`, or `\"Lackadaisical\"` otherwise.",
    hint: "Check the largest threshold first: `if sales > 50`, then `else if sales >= 20`, then `else`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tsales := 35\n\tif sales > 50 {\n\t\tfmt.Println("Top Seller")\n\t} else if sales >= 20 {\n\t\tfmt.Println("Acceptable")\n\t} else {\n\t\tfmt.Println("Lackadaisical")\n\t}\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tsales := 35\n\t// Print "Top Seller" if sales > 50,\n\t// "Acceptable" if sales >= 20,\n\t// "Lackadaisical" otherwise\n\tif ___ {\n\t\tfmt.Println("Top Seller")\n\t} else if ___ {\n\t\tfmt.Println("Acceptable")\n\t} else {\n\t\tfmt.Println("Lackadaisical")\n\t}\n}`,
    testCases: [
      { input: "", expected: "Acceptable", description: "35 sales falls in the Acceptable range" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "to-go-03",
    themeId: "the-office",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "Paper Sales Calculator",
    narrative:
      "Jim has a new pitch for a client in Stamford. Each ream of Dunder Mifflin paper sells for 9 dollars, and the branch needs to calculate revenue quickly before the client walks. A function will save the day — and possibly Jim's commission.",
    prompt:
      "Write a function `paperRevenue` that takes `reams int` and returns `int`. It should return `reams * 9`. In `main`, call `paperRevenue(15)` and print the result.",
    hint: "`func paperRevenue(reams int) int { return reams * 9 }` — define it above `main`.",
    solution: `package main\n\nimport "fmt"\n\nfunc paperRevenue(reams int) int {\n\treturn reams * 9\n}\n\nfunc main() {\n\tfmt.Println(paperRevenue(15))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc paperRevenue(reams int) int {\n\t// Return reams multiplied by 9\n\treturn ___\n}\n\nfunc main() {\n\tfmt.Println(paperRevenue(15)) // Should print: 135\n}`,
    testCases: [
      { input: "", expected: "135", description: "15 reams at 9 dollars each equals 135" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "to-go-04",
    themeId: "the-office",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "The Party Planning Committee",
    narrative:
      "The Party Planning Committee needs a full roster before they can vote on Angela's proposed decorations — which are, as always, cats. Phyllis has just volunteered. How many members does the committee have now?",
    prompt:
      "Create a slice `committee` containing `\"Angela\"`, `\"Pam\"`, and `\"Kevin\"`. Use `append` to add `\"Phyllis\"`. Print the length of the slice.",
    hint: "Use `committee := []string{\"Angela\", \"Pam\", \"Kevin\"}`, then `committee = append(committee, \"Phyllis\")`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tcommittee := []string{"Angela", "Pam", "Kevin"}\n\tcommittee = append(committee, "Phyllis")\n\tfmt.Println(len(committee))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create a slice with Angela, Pam, and Kevin\n\tcommittee := []string{___}\n\t// Append Phyllis\n\tcommittee = append(committee, ___)\n\t// Print the length\n\tfmt.Println(len(committee))\n}`,
    testCases: [
      { input: "", expected: "4", description: "4 members on the Party Planning Committee" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "to-go-05",
    themeId: "the-office",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Beet Farm Harvest",
    narrative:
      "Dwight Schrute's beet farm runs on discipline and data. At the end of harvest season, every field's yield is recorded in pounds. Dwight needs the total harvest to file with the Lackawanna County Agricultural Board — and he never misses a deadline.",
    prompt:
      "Given `harvest := []int{320, 415, 290, 380, 510}`, use a `for range` loop to sum all values. Print the total.",
    hint: "Declare `total := 0`, then loop: `for _, v := range harvest { total += v }`. Print `total`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tharvest := []int{320, 415, 290, 380, 510}\n\ttotal := 0\n\tfor _, v := range harvest {\n\t\ttotal += v\n\t}\n\tfmt.Println(total)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tharvest := []int{320, 415, 290, 380, 510}\n\ttotal := 0\n\t// Loop through harvest and accumulate the total\n\tfor _, v := range harvest {\n\t\ttotal += ___\n\t}\n\tfmt.Println(total)\n}`,
    testCases: [
      { input: "", expected: "1915", description: "Total beet harvest across all fields" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
];
