import type { Challenge } from "@/types";

export const breakingBadGoChallenges: Challenge[] = [
  {
    id: "bb-go-01",
    themeId: "breaking-bad",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Heisenberg's Inventory",
    narrative:
      "Walter White has transformed from a high school chemistry teacher into Albuquerque's most feared drug lord. Before a cook, every variable must be accounted for — the product name, the batch number, and whether the lab is currently active.",
    prompt:
      "Declare three variables using `:=`: `product` set to `\"Blue Sky\"`, `batch` set to `42`, and `labActive` set to `true`. Print all three with `fmt.Println`.",
    hint: "Short variable declaration uses `:=`. Strings go in double quotes; ints and bools need no quotes.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tproduct := "Blue Sky"\n\tbatch := 42\n\tlabActive := true\n\tfmt.Println(product)\n\tfmt.Println(batch)\n\tfmt.Println(labActive)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Declare product, batch, and labActive using :=\n\tproduct := ___\n\tbatch := ___\n\tlabActive := ___\n\tfmt.Println(product)\n\tfmt.Println(batch)\n\tfmt.Println(labActive)\n}`,
    testCases: [
      { input: "", expected: "Blue Sky\n42\ntrue", description: "Prints the lab inventory variables" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "bb-go-02",
    themeId: "breaking-bad",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "The Purity Test",
    narrative:
      "Walter White's product is legendary for its purity. Gus Fring demands nothing less than 96% from the superlab. Above 99 is Walt's signature blue — pure perfection. Below 96 means the batch gets cut and Jesse gets an earful.",
    prompt:
      "Given `purity := 98`, print `\"Blue perfection\"` if `purity > 99`, `\"Accepted\"` if `purity >= 96`, or `\"Rejected\"` otherwise.",
    hint: "Use `if purity > 99 { ... } else if purity >= 96 { ... } else { ... }` — no parentheses needed around the condition.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tpurity := 98\n\tif purity > 99 {\n\t\tfmt.Println("Blue perfection")\n\t} else if purity >= 96 {\n\t\tfmt.Println("Accepted")\n\t} else {\n\t\tfmt.Println("Rejected")\n\t}\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tpurity := 98\n\t// Print "Blue perfection" if purity > 99,\n\t// "Accepted" if purity >= 96,\n\t// "Rejected" otherwise\n\tif ___ {\n\t\tfmt.Println("Blue perfection")\n\t} else if ___ {\n\t\tfmt.Println("Accepted")\n\t} else {\n\t\tfmt.Println("Rejected")\n\t}\n}`,
    testCases: [
      { input: "", expected: "Accepted", description: "98% purity meets Gus's standard" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "bb-go-03",
    themeId: "breaking-bad",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "Saul's Cut Calculator",
    narrative:
      "Better call Saul — and Saul always takes his cut. Every deal that passes through Goodman's office earns him a flat 15% fee. Walter needs a reliable function so he knows exactly how much the lawyer is skimming before they shake hands.",
    prompt:
      "Write a function `saulsCut` that takes `amount int` and returns `int`. It should return `amount * 15 / 100`. In `main`, call `saulsCut(200)` and print the result.",
    hint: "Go integer division truncates. `func saulsCut(amount int) int { return amount * 15 / 100 }`",
    solution: `package main\n\nimport "fmt"\n\nfunc saulsCut(amount int) int {\n\treturn amount * 15 / 100\n}\n\nfunc main() {\n\tfmt.Println(saulsCut(200))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc saulsCut(amount int) int {\n\t// Return 15% of amount (integer division)\n\treturn ___\n}\n\nfunc main() {\n\tfmt.Println(saulsCut(200)) // Should print: 30\n}`,
    testCases: [
      { input: "", expected: "30", description: "15% of 200 is 30" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "bb-go-04",
    themeId: "breaking-bad",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "The Distribution Network",
    narrative:
      "Gus Fring's distribution network spans the entire Southwest. Skinny Pete has been added as the newest distributor. Walt needs the updated count of distribution points before the next delivery leaves the chicken restaurant.",
    prompt:
      "Create a slice `distributors` containing `\"Combo\"`, `\"Badger\"`, and `\"Huell\"`. Use `append` to add `\"Skinny Pete\"`. Print the length of the slice.",
    hint: "Use `distributors := []string{\"Combo\", \"Badger\", \"Huell\"}`, then `distributors = append(distributors, \"Skinny Pete\")`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tdistributors := []string{"Combo", "Badger", "Huell"}\n\tdistributors = append(distributors, "Skinny Pete")\n\tfmt.Println(len(distributors))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create a slice with Combo, Badger, and Huell\n\tdistributors := []string{___}\n\t// Append Skinny Pete\n\tdistributors = append(distributors, ___)\n\t// Print the length\n\tfmt.Println(len(distributors))\n}`,
    testCases: [
      { input: "", expected: "4", description: "4 distributors in the network" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "bb-go-05",
    themeId: "breaking-bad",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Counting the Cash",
    narrative:
      "The money is piling up faster than Walt and Skyler can launder it. A pile of bills sits in the crawlspace in stacks of varying amounts. Jesse needs to tally the total before Hank gets any closer to sniffing out the operation.",
    prompt:
      "Given `stacks := []int{5000, 12000, 8500, 3200, 21000}`, use a `for range` loop to sum all values. Print the total.",
    hint: "Start with `total := 0`, then `for _, v := range stacks { total += v }`. Print `total` after the loop.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tstacks := []int{5000, 12000, 8500, 3200, 21000}\n\ttotal := 0\n\tfor _, v := range stacks {\n\t\ttotal += v\n\t}\n\tfmt.Println(total)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tstacks := []int{5000, 12000, 8500, 3200, 21000}\n\ttotal := 0\n\t// Loop through stacks and accumulate the total\n\tfor _, v := range stacks {\n\t\ttotal += ___\n\t}\n\tfmt.Println(total)\n}`,
    testCases: [
      { input: "", expected: "49700", description: "Total cash in the crawlspace" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
];
