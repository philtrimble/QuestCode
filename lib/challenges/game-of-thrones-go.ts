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
  {
    id: "got-go-06",
    themeId: "game-of-thrones",
    languageId: "go",
    order: 6,
    title: "String Formatting",
    themedTitle: "The Raven's Message",
    narrative:
      "Ravens carry messages across the Seven Kingdoms, but the format must be standardized. The maester at the Citadel formats every letter the same way — the sender's house and the message body combined into a single sealed dispatch.",
    prompt:
      "Use `fmt.Sprintf` to format a raven message. Given `house := \"Stark\"` and `words := 6`, produce `\"House Stark sends 6 ravens\"` and print it.",
    hint: "Use `msg := fmt.Sprintf(\"House %s sends %d ravens\", house, words)` then `fmt.Println(msg)`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\thouse := "Stark"\n\twords := 6\n\tmsg := fmt.Sprintf("House %s sends %d ravens", house, words)\n\tfmt.Println(msg)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\thouse := "Stark"\n\twords := 6\n\t// Use fmt.Sprintf to build the message\n\tmsg := fmt.Sprintf(___, house, words)\n\tfmt.Println(msg)\n}`,
    testCases: [
      { input: "", expected: "House Stark sends 6 ravens", description: "Formatted raven dispatch" },
    ],
    concept: "String Formatting",
    difficulty: "intermediate",
  },
  {
    id: "got-go-07",
    themeId: "game-of-thrones",
    languageId: "go",
    order: 7,
    title: "Maps",
    themedTitle: "The Bannermen Count",
    narrative:
      "The Master of Whisperers tracks the number of bannermen pledged to each house. A map gives him instant access to any house's fighting strength — useful when Daenerys asks how many soldiers will march at dawn.",
    prompt:
      "Create a map `bannermen` of type `map[string]int`. Add `\"Stark\"` with value `5000` and `\"Lannister\"` with value `8000`. Print the value for `\"Stark\"`.",
    hint: "Use `bannermen := map[string]int{}`, add both entries, then access `bannermen[\"Stark\"]`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tbannermen := map[string]int{}\n\tbannermen["Stark"] = 5000\n\tbannermen["Lannister"] = 8000\n\tfmt.Println(bannermen["Stark"])\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create the map\n\tbannermen := map[string]int{}\n\t// Add Stark and Lannister\n\tbannermen[___] = 5000\n\tbannermen[___] = 8000\n\t// Print Stark's bannermen count\n\tfmt.Println(bannermen[___])\n}`,
    testCases: [
      { input: "", expected: "5000", description: "House Stark has 5000 bannermen" },
    ],
    concept: "Maps",
    difficulty: "intermediate",
  },
  {
    id: "got-go-08",
    themeId: "game-of-thrones",
    languageId: "go",
    order: 8,
    title: "Structs",
    themedTitle: "Lord's Record",
    narrative:
      "The Citadel requires a standardized record for every lord in Westeros. Each record holds the lord's name and the number of castles their house controls. Maester Luwin insists the data format never changes — unlike alliances.",
    prompt:
      "Define a struct `Lord` with fields `Name string` and `Castles int`. Create an instance with `Name: \"Tyrion\"` and `Castles: 3`. Print both fields.",
    hint: "Define `type Lord struct { Name string; Castles int }` above `main`. Create with `l := Lord{Name: \"Tyrion\", Castles: 3}`.",
    solution: `package main\n\nimport "fmt"\n\ntype Lord struct {\n\tName    string\n\tCastles int\n}\n\nfunc main() {\n\tl := Lord{Name: "Tyrion", Castles: 3}\n\tfmt.Println(l.Name)\n\tfmt.Println(l.Castles)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\ntype Lord struct {\n\tName    string\n\tCastles int\n}\n\nfunc main() {\n\t// Create a Lord with Name "Tyrion" and Castles 3\n\tl := Lord{___}\n\tfmt.Println(l.Name)\n\tfmt.Println(l.Castles)\n}`,
    testCases: [
      { input: "", expected: "Tyrion\n3", description: "Lord name and castle count" },
    ],
    concept: "Structs",
    difficulty: "intermediate",
  },
  {
    id: "got-go-09",
    themeId: "game-of-thrones",
    languageId: "go",
    order: 9,
    title: "Multiple Return Values",
    themedTitle: "The Dragon Count",
    narrative:
      "Daenerys's dragon keeper must report the current count — and if any dragon is unaccounted for, an error must accompany the report. Jon Snow wants the truth, not a reassuring lie, so the function returns both the count and any error.",
    prompt:
      "Write `dragonCount(count int) (int, error)` that returns `count, nil` if `count > 0`, or `0, errors.New(\"no dragons\")` otherwise. In `main`, call it with `3`, print both values.",
    hint: "Import `\"errors\"`. Check `if count <= 0 { return 0, errors.New(\"no dragons\") }`. Otherwise `return count, nil`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc dragonCount(count int) (int, error) {\n\tif count <= 0 {\n\t\treturn 0, errors.New("no dragons")\n\t}\n\treturn count, nil\n}\n\nfunc main() {\n\tresult, err := dragonCount(3)\n\tfmt.Println(result)\n\tfmt.Println(err)\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc dragonCount(count int) (int, error) {\n\tif count <= 0 {\n\t\treturn 0, errors.New("no dragons")\n\t}\n\t// Return count and nil\n\treturn ___\n}\n\nfunc main() {\n\tresult, err := dragonCount(3)\n\tfmt.Println(result)\n\tfmt.Println(err)\n}`,
    testCases: [
      { input: "", expected: "3\n<nil>", description: "Three dragons accounted for" },
    ],
    concept: "Multiple Return Values",
    difficulty: "advanced",
  },
  {
    id: "got-go-10",
    themeId: "game-of-thrones",
    languageId: "go",
    order: 10,
    title: "Error Handling",
    themedTitle: "The Missing Dragons",
    narrative:
      "A raven arrives from Essos: zero dragons have been sighted. Daenerys's hand must check the error from the dragon count function before delivering the news. Handle the error properly — an unhandled error in Westeros leads to war.",
    prompt:
      "Call `dragonCount(0)`. If `err != nil`, print `\"Alert:\"` followed by the error. Otherwise print the count.",
    hint: "Use `result, err := dragonCount(0)`. Then `if err != nil { fmt.Println(\"Alert:\", err) } else { fmt.Println(result) }`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc dragonCount(count int) (int, error) {\n\tif count <= 0 {\n\t\treturn 0, errors.New("no dragons")\n\t}\n\treturn count, nil\n}\n\nfunc main() {\n\tresult, err := dragonCount(0)\n\tif err != nil {\n\t\tfmt.Println("Alert:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc dragonCount(count int) (int, error) {\n\tif count <= 0 {\n\t\treturn 0, errors.New("no dragons")\n\t}\n\treturn count, nil\n}\n\nfunc main() {\n\tresult, err := dragonCount(0)\n\t// Check for error and print accordingly\n\tif ___ {\n\t\tfmt.Println("Alert:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n}`,
    testCases: [
      { input: "", expected: "Alert: no dragons", description: "Zero dragons triggers the alert" },
    ],
    concept: "Error Handling",
    difficulty: "advanced",
  },
];
