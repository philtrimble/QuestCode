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
  {
    id: "to-go-06",
    themeId: "the-office",
    languageId: "go",
    order: 6,
    title: "String Formatting",
    themedTitle: "Michael's Award Announcement",
    narrative:
      "It is once again Dundie season. Michael Scott has taken it upon himself to personally format every award announcement — because the IT department's templates lack personality. Each announcement combines the winner's name and their award title.",
    prompt:
      "Use `fmt.Sprintf` to format an announcement. Given `winner := \"Dwight\"` and `award := \"Volunteer Sheriff\"`, produce `\"And the Dundie goes to Dwight for Volunteer Sheriff\"` and print it.",
    hint: "Use `msg := fmt.Sprintf(\"And the Dundie goes to %s for %s\", winner, award)` then `fmt.Println(msg)`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\twinner := "Dwight"\n\taward := "Volunteer Sheriff"\n\tmsg := fmt.Sprintf("And the Dundie goes to %s for %s", winner, award)\n\tfmt.Println(msg)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\twinner := "Dwight"\n\taward := "Volunteer Sheriff"\n\t// Use fmt.Sprintf to build the announcement\n\tmsg := fmt.Sprintf(___, winner, award)\n\tfmt.Println(msg)\n}`,
    testCases: [
      { input: "", expected: "And the Dundie goes to Dwight for Volunteer Sheriff", description: "Formatted Dundie announcement" },
    ],
    concept: "String Formatting",
    difficulty: "intermediate",
  },
  {
    id: "to-go-07",
    themeId: "the-office",
    languageId: "go",
    order: 7,
    title: "Maps",
    themedTitle: "The Scranton Branch Sales Map",
    narrative:
      "Dwight tracks every salesperson's monthly units in a map so he can compare his numbers to Jim's at a glance. The map must be accurate — Dwight will not tolerate data that has been tampered with by a certain someone.",
    prompt:
      "Create a map `sales` of type `map[string]int`. Add `\"Dwight\"` with value `52` and `\"Jim\"` with value `44`. Print the value for `\"Dwight\"`.",
    hint: "Use `sales := map[string]int{}`, then assign and access entries by name.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tsales := map[string]int{}\n\tsales["Dwight"] = 52\n\tsales["Jim"] = 44\n\tfmt.Println(sales["Dwight"])\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create the map\n\tsales := map[string]int{}\n\t// Add Dwight and Jim\n\tsales[___] = 52\n\tsales[___] = 44\n\t// Print Dwight's sales\n\tfmt.Println(sales[___])\n}`,
    testCases: [
      { input: "", expected: "52", description: "Dwight sold 52 units" },
    ],
    concept: "Maps",
    difficulty: "intermediate",
  },
  {
    id: "to-go-08",
    themeId: "the-office",
    languageId: "go",
    order: 8,
    title: "Structs",
    themedTitle: "Employee of the Month",
    narrative:
      "The HR system needs a structured record for Employee of the Month. Toby insisted on a proper data format after the last incident where Michael wrote the winner's name in gold glitter. The struct will hold the name and the number of years at Dunder Mifflin.",
    prompt:
      "Define a struct `Employee` with fields `Name string` and `Years int`. Create an instance with `Name: \"Pam\"` and `Years: 9`. Print both fields.",
    hint: "Define `type Employee struct { Name string; Years int }` above `main`. Create with `e := Employee{Name: \"Pam\", Years: 9}`.",
    solution: `package main\n\nimport "fmt"\n\ntype Employee struct {\n\tName  string\n\tYears int\n}\n\nfunc main() {\n\te := Employee{Name: "Pam", Years: 9}\n\tfmt.Println(e.Name)\n\tfmt.Println(e.Years)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\ntype Employee struct {\n\tName  string\n\tYears int\n}\n\nfunc main() {\n\t// Create an Employee with Name "Pam" and Years 9\n\te := Employee{___}\n\tfmt.Println(e.Name)\n\tfmt.Println(e.Years)\n}`,
    testCases: [
      { input: "", expected: "Pam\n9", description: "Employee name and years of service" },
    ],
    concept: "Structs",
    difficulty: "intermediate",
  },
  {
    id: "to-go-09",
    themeId: "the-office",
    languageId: "go",
    order: 9,
    title: "Multiple Return Values",
    themedTitle: "The Commission Calculator",
    narrative:
      "Jim needs a reliable commission calculator that returns both the payout and an error — because Michael once approved a negative commission and the accounting department is still recovering. The function catches impossible values before they hit the payroll system.",
    prompt:
      "Write `commission(sales int) (int, error)` that returns `sales / 10, nil` if `sales > 0`, or `0, errors.New(\"no sales\")` otherwise. In `main`, call it with `300`, print both values.",
    hint: "Import `\"errors\"`. Check `if sales <= 0 { return 0, errors.New(\"no sales\") }`. Otherwise `return sales / 10, nil`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc commission(sales int) (int, error) {\n\tif sales <= 0 {\n\t\treturn 0, errors.New("no sales")\n\t}\n\treturn sales / 10, nil\n}\n\nfunc main() {\n\tpayout, err := commission(300)\n\tfmt.Println(payout)\n\tfmt.Println(err)\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc commission(sales int) (int, error) {\n\tif sales <= 0 {\n\t\treturn 0, errors.New("no sales")\n\t}\n\t// Return sales / 10 and nil\n\treturn ___\n}\n\nfunc main() {\n\tpayout, err := commission(300)\n\tfmt.Println(payout)\n\tfmt.Println(err)\n}`,
    testCases: [
      { input: "", expected: "30\n<nil>", description: "300 in sales yields a 30 commission" },
    ],
    concept: "Multiple Return Values",
    difficulty: "advanced",
  },
  {
    id: "to-go-10",
    themeId: "the-office",
    languageId: "go",
    order: 10,
    title: "Error Handling",
    themedTitle: "The Zero-Sales Incident",
    narrative:
      "Ryan submitted a zero-sales report for the third time. The commission function returns an error, and this time Toby has configured the system to log every error properly. Michael wants to fire Ryan again, but the error handling procedure runs first.",
    prompt:
      "Call `commission(0)`. If `err != nil`, print `\"Error:\"` followed by the error. Otherwise print the payout.",
    hint: "Use `payout, err := commission(0)`. Then `if err != nil { fmt.Println(\"Error:\", err) } else { fmt.Println(payout) }`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc commission(sales int) (int, error) {\n\tif sales <= 0 {\n\t\treturn 0, errors.New("no sales")\n\t}\n\treturn sales / 10, nil\n}\n\nfunc main() {\n\tpayout, err := commission(0)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(payout)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc commission(sales int) (int, error) {\n\tif sales <= 0 {\n\t\treturn 0, errors.New("no sales")\n\t}\n\treturn sales / 10, nil\n}\n\nfunc main() {\n\tpayout, err := commission(0)\n\t// Check for error and print accordingly\n\tif ___ {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(payout)\n\t}\n}`,
    testCases: [
      { input: "", expected: "Error: no sales", description: "Zero sales triggers the error path" },
    ],
    concept: "Error Handling",
    difficulty: "advanced",
  },
];
