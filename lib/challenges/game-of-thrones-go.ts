import type { Challenge } from "@/types";

export const gameOfThronesGoChallenges: Challenge[] = [
  {
    id: "got-go-01",
    themeId: "game-of-thrones",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "The Maester's Record",
    narrative:
      "The ravens have been busy at the Citadel. Maester Luwin must initialize a new record before the council meets — the Lord's name, the number of bannermen sworn to the house, and whether the house has bent the knee to the Iron Throne.",
    prompt:
      "Declare three variables using `:=`: `lord` set to `\"Jon Snow\"`, `bannermen` set to `2000`, and `kneeling` set to `false`. Print all three with `fmt.Println`.",
    hint: "Each variable uses `:=`. Strings need double quotes; integers and booleans do not.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tlord := "Jon Snow"\n\tbannermen := 2000\n\tkneeling := false\n\tfmt.Println(lord)\n\tfmt.Println(bannermen)\n\tfmt.Println(kneeling)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Declare lord, bannermen, and kneeling using :=\n\tlord := ___\n\tbannermen := ___\n\tkneeling := ___\n\tfmt.Println(lord)\n\tfmt.Println(bannermen)\n\tfmt.Println(kneeling)\n}`,
    testCases: [
      { input: "", expected: "Jon Snow\n2000\nfalse", description: "Prints the Maester's record" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "got-go-02",
    themeId: "game-of-thrones",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "The Dragon Queen's Judgment",
    narrative:
      "Daenerys Targaryen rules with dragons and fire. Lords who bring more than 500 swords earn her trust; those who bring 200 to 500 are acknowledged; those who bring fewer will hear her dragons roar. She does not forgive weakness.",
    prompt:
      "Given `swords := 350`, print `\"Trusted ally\"` if `swords > 500`, `\"Acknowledged\"` if `swords >= 200`, or `\"Dracarys\"` otherwise.",
    hint: "Test conditions in order from most restrictive to least. No parentheses around Go conditions.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tswords := 350\n\tif swords > 500 {\n\t\tfmt.Println("Trusted ally")\n\t} else if swords >= 200 {\n\t\tfmt.Println("Acknowledged")\n\t} else {\n\t\tfmt.Println("Dracarys")\n\t}\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tswords := 350\n\t// Print "Trusted ally" if swords > 500,\n\t// "Acknowledged" if swords >= 200,\n\t// "Dracarys" otherwise\n\tif ___ {\n\t\tfmt.Println("Trusted ally")\n\t} else if ___ {\n\t\tfmt.Println("Acknowledged")\n\t} else {\n\t\tfmt.Println("Dracarys")\n\t}\n}`,
    testCases: [
      { input: "", expected: "Acknowledged", description: "350 swords earns acknowledgment" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "got-go-03",
    themeId: "game-of-thrones",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "Tyrion's Wine Ledger",
    narrative:
      "Tyrion Lannister drinks and knows things — and he keeps precise records of his wine consumption. Each flagon costs 3 gold dragons. His steward needs a function to calculate the total cost before submitting the Hand's expense report.",
    prompt:
      "Write a function `wineCost` that takes `flagons int` and returns `int`. It should return `flagons * 3`. In `main`, call `wineCost(8)` and print the result.",
    hint: "`func wineCost(flagons int) int { return flagons * 3 }` — define it above `main` and call it from inside `main`.",
    solution: `package main\n\nimport "fmt"\n\nfunc wineCost(flagons int) int {\n\treturn flagons * 3\n}\n\nfunc main() {\n\tfmt.Println(wineCost(8))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc wineCost(flagons int) int {\n\t// Return flagons multiplied by 3\n\treturn ___\n}\n\nfunc main() {\n\tfmt.Println(wineCost(8)) // Should print: 24\n}`,
    testCases: [
      { input: "", expected: "24", description: "8 flagons at 3 gold dragons each equals 24" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "got-go-04",
    themeId: "game-of-thrones",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "The Great Houses",
    narrative:
      "The war for Westeros is spreading. House Martell of Dorne has finally pledged its banners to the cause. The Master of Whisperers needs to update the official ledger of allied houses and confirm the new count for Daenerys.",
    prompt:
      "Create a slice `houses` containing `\"Stark\"`, `\"Lannister\"`, and `\"Targaryen\"`. Use `append` to add `\"Martell\"`. Print the length of the slice.",
    hint: "Use `houses := []string{\"Stark\", \"Lannister\", \"Targaryen\"}`, then `houses = append(houses, \"Martell\")`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\thouses := []string{"Stark", "Lannister", "Targaryen"}\n\thouses = append(houses, "Martell")\n\tfmt.Println(len(houses))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create a slice with Stark, Lannister, and Targaryen\n\thouses := []string{___}\n\t// Append Martell\n\thouses = append(houses, ___)\n\t// Print the length\n\tfmt.Println(len(houses))\n}`,
    testCases: [
      { input: "", expected: "4", description: "4 Great Houses in the alliance" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "got-go-05",
    themeId: "game-of-thrones",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Counting the Dragon's Hoard",
    narrative:
      "Daenerys has taken the treasury of King's Landing. Her dragons guard chests of gold that must be counted before the reconstruction of Westeros can begin. Loop through the chests and tally the total so the new queen knows her wealth.",
    prompt:
      "Given `chests := []int{1500, 3200, 800, 4700, 2100}`, use a `for range` loop to sum all values. Print the total.",
    hint: "Declare `total := 0` before the loop. `for _, v := range chests { total += v }`. Print `total`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tchests := []int{1500, 3200, 800, 4700, 2100}\n\ttotal := 0\n\tfor _, v := range chests {\n\t\ttotal += v\n\t}\n\tfmt.Println(total)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tchests := []int{1500, 3200, 800, 4700, 2100}\n\ttotal := 0\n\t// Loop through chests and accumulate the total\n\tfor _, v := range chests {\n\t\ttotal += ___\n\t}\n\tfmt.Println(total)\n}`,
    testCases: [
      { input: "", expected: "12300", description: "Total gold in the dragon's hoard" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
];
