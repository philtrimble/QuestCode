import type { Challenge } from "@/types";

export const squidGameGoChallenges: Challenge[] = [
  {
    id: "sg-go-01",
    themeId: "squid-game",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Player 456 Registration",
    narrative:
      "You have been handed a card and a number. Seong Gi-hun is Player 456. The facility's system must record his player number, the prize amount in Korean won, and whether he is still alive. The Front Man watches every entry.",
    prompt:
      "Declare three variables using `:=`: `player` set to `\"Gi-hun\"`, `prize` set to `45600000000`, and `alive` set to `true`. Print all three with `fmt.Println`.",
    hint: "Use `:=` for each variable. Large integer values are written without commas in Go.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tplayer := "Gi-hun"\n\tprize := 45600000000\n\talive := true\n\tfmt.Println(player)\n\tfmt.Println(prize)\n\tfmt.Println(alive)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Declare player, prize, and alive using :=\n\tplayer := ___\n\tprize := ___\n\talive := ___\n\tfmt.Println(player)\n\tfmt.Println(prize)\n\tfmt.Println(alive)\n}`,
    testCases: [
      { input: "", expected: "Gi-hun\n45600000000\ntrue", description: "Player 456 registration complete" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "sg-go-02",
    themeId: "squid-game",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "Red Light Green Light",
    narrative:
      "The giant doll is watching. If your steps taken are more than 10 while the light is red, you are eliminated. Between 5 and 10 steps is a risky but survivable freeze. Fewer than 5 and you hold your position. Move wrong — and you will not move again.",
    prompt:
      "Given `steps := 7`, print `\"Eliminated\"` if `steps > 10`, `\"Risky freeze\"` if `steps >= 5`, or `\"Hold position\"` otherwise.",
    hint: "Check the most dangerous condition first: `if steps > 10`, then `else if steps >= 5`, then `else`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tsteps := 7\n\tif steps > 10 {\n\t\tfmt.Println("Eliminated")\n\t} else if steps >= 5 {\n\t\tfmt.Println("Risky freeze")\n\t} else {\n\t\tfmt.Println("Hold position")\n\t}\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tsteps := 7\n\t// Print "Eliminated" if steps > 10,\n\t// "Risky freeze" if steps >= 5,\n\t// "Hold position" otherwise\n\tif ___ {\n\t\tfmt.Println("Eliminated")\n\t} else if ___ {\n\t\tfmt.Println("Risky freeze")\n\t} else {\n\t\tfmt.Println("Hold position")\n\t}\n}`,
    testCases: [
      { input: "", expected: "Risky freeze", description: "7 steps on red is a risky freeze" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "sg-go-03",
    themeId: "squid-game",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "The Prize Pool Calculator",
    narrative:
      "Every player eliminated adds 100 million won to the prize pool. The VIPs want a live calculation before the next game begins. The Front Man needs a function that can calculate the total prize at any point in the competition.",
    prompt:
      "Write a function `prizePool` that takes `eliminated int` and returns `int`. It should return `eliminated * 100000000`. In `main`, call `prizePool(5)` and print the result.",
    hint: "`func prizePool(eliminated int) int { return eliminated * 100000000 }` — large numbers are fine in Go int.",
    solution: `package main\n\nimport "fmt"\n\nfunc prizePool(eliminated int) int {\n\treturn eliminated * 100000000\n}\n\nfunc main() {\n\tfmt.Println(prizePool(5))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc prizePool(eliminated int) int {\n\t// Return eliminated multiplied by 100000000\n\treturn ___\n}\n\nfunc main() {\n\tfmt.Println(prizePool(5)) // Should print: 500000000\n}`,
    testCases: [
      { input: "", expected: "500000000", description: "5 eliminations at 100M won each equals 500M" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "sg-go-04",
    themeId: "squid-game",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "The Survivors List",
    narrative:
      "Only 456 players entered. The Pink Guards are updating the survivor list after the Tug of War. Player 067 Sae-byeok has just been confirmed alive and must be added to the official roster. How many players remain?",
    prompt:
      "Create a slice `survivors` containing `\"Gi-hun\"`, `\"Ali\"`, and `\"Sang-woo\"`. Use `append` to add `\"Sae-byeok\"`. Print the length of the slice.",
    hint: "Use `survivors := []string{\"Gi-hun\", \"Ali\", \"Sang-woo\"}`, then `survivors = append(survivors, \"Sae-byeok\")`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tsurvivors := []string{"Gi-hun", "Ali", "Sang-woo"}\n\tsurvivors = append(survivors, "Sae-byeok")\n\tfmt.Println(len(survivors))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create a slice with Gi-hun, Ali, and Sang-woo\n\tsurvivors := []string{___}\n\t// Append Sae-byeok\n\tsurvivors = append(survivors, ___)\n\t// Print the length\n\tfmt.Println(len(survivors))\n}`,
    testCases: [
      { input: "", expected: "4", description: "4 survivors remain after Tug of War" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "sg-go-05",
    themeId: "squid-game",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Counting the Eliminations",
    narrative:
      "The Front Man reviews the elimination log after each game. He needs the total number of players eliminated across all rounds to confirm the prize pool is accurate. The VIPs demand precision — and the Front Man never disappoints them.",
    prompt:
      "Given `rounds := []int{73, 109, 84, 62, 128}`, use a `for range` loop to sum all values. Print the total.",
    hint: "Declare `total := 0`, then `for _, v := range rounds { total += v }`. Print `total` after the loop.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\trounds := []int{73, 109, 84, 62, 128}\n\ttotal := 0\n\tfor _, v := range rounds {\n\t\ttotal += v\n\t}\n\tfmt.Println(total)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\trounds := []int{73, 109, 84, 62, 128}\n\ttotal := 0\n\t// Loop through rounds and accumulate the total\n\tfor _, v := range rounds {\n\t\ttotal += ___\n\t}\n\tfmt.Println(total)\n}`,
    testCases: [
      { input: "", expected: "456", description: "Total eliminations equal the starting player count" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
  {
    id: "sg-go-06",
    themeId: "squid-game",
    languageId: "go",
    order: 6,
    title: "String Formatting",
    themedTitle: "Player Announcement Board",
    narrative:
      "Before each game, the PA system announces each player's name and number. The Front Man's system uses `fmt.Sprintf` to build the announcement string, and the strings package to normalize names for the official record.",
    prompt:
      "Import `fmt` and `strings`. Declare `name := \"seong gi-hun\"` and `number := 456`. Use `fmt.Sprintf` to create `announcement` = `\"Player %d: %s\"` with number and `strings.ToUpper(name)`. Print `announcement`. Also print `strings.Contains(announcement, \"456\")`.",
    hint: "Use `fmt.Sprintf(\"Player %d: %s\", number, strings.ToUpper(name))`. `%d` for int, `%s` for string.",
    solution: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\nfunc main() {\n\tname := "seong gi-hun"\n\tnumber := 456\n\tannouncement := fmt.Sprintf("Player %d: %s", number, strings.ToUpper(name))\n\tfmt.Println(announcement)\n\tfmt.Println(strings.Contains(announcement, "456"))\n}`,
    starterCode: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\nfunc main() {\n\tname := "seong gi-hun"\n\tnumber := 456\n\tannouncement := fmt.Sprintf(___, number, strings.ToUpper(name))\n\tfmt.Println(announcement)\n\tfmt.Println(strings.Contains(announcement, ___))\n}`,
    testCases: [
      { input: "", expected: "Player 456: SEONG GI-HUN", description: "Formatted player announcement" },
      { input: "", expected: "true", description: "Announcement contains 456" },
    ],
    concept: "String Formatting",
    difficulty: "intermediate",
  },
  {
    id: "sg-go-07",
    themeId: "squid-game",
    languageId: "go",
    order: 7,
    title: "Maps",
    themedTitle: "The Game Difficulty Ratings",
    narrative:
      "The VIPs rate each game by difficulty. The Front Man stores these ratings in a Go map — keyed by game name, valued by difficulty score. He reviews them before each season to ensure sufficient entertainment value.",
    prompt:
      "Create a map `ratings := map[string]int{\"Red Light Green Light\": 3, \"Dalgona\": 7, \"Tug of War\": 8, \"Marbles\": 9, \"Glass Bridge\": 10}`. Use a `for k, v := range ratings` loop to print each entry as `\"Game: <k>, Difficulty: <v>\"` using `fmt.Sprintf`. Print the total count of games.",
    hint: "Use `fmt.Sprintf(\"Game: %s, Difficulty: %d\", k, v)` inside the loop. `len(ratings)` gives the count.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tratings := map[string]int{\n\t\t"Red Light Green Light": 3,\n\t\t"Dalgona":               7,\n\t\t"Tug of War":            8,\n\t\t"Marbles":               9,\n\t\t"Glass Bridge":          10,\n\t}\n\tfor k, v := range ratings {\n\t\tfmt.Println(fmt.Sprintf("Game: %s, Difficulty: %d", k, v))\n\t}\n\tfmt.Println(len(ratings))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tratings := map[string]int{\n\t\t"Red Light Green Light": 3,\n\t\t"Dalgona":               7,\n\t\t"Tug of War":            8,\n\t\t"Marbles":               9,\n\t\t"Glass Bridge":          10,\n\t}\n\tfor k, v := range ratings {\n\t\tfmt.Println(fmt.Sprintf(___, k, v))\n\t}\n\tfmt.Println(len(ratings))\n}`,
    testCases: [
      { input: "", expected: "5", description: "Five games in the map" },
    ],
    concept: "Maps",
    difficulty: "intermediate",
  },
  {
    id: "sg-go-08",
    themeId: "squid-game",
    languageId: "go",
    order: 8,
    title: "Structs",
    themedTitle: "Player Record",
    narrative:
      "The facility registers every player with a full record: name, number, and survival status. Go structs model each player precisely. The Front Man reviews every record before the next game begins.",
    prompt:
      "Define a struct `Player` with fields `Name string`, `Number int`, and `Alive bool`. In `main`, create `p := Player{Name: \"Kang Sae-byeok\", Number: 67, Alive: true}`. Print `p.Name`, `p.Number`, and `p.Alive` on separate lines.",
    hint: "Declare the struct outside `main`: `type Player struct { Name string; Number int; Alive bool }`. Access fields with dot notation.",
    solution: `package main\n\nimport "fmt"\n\ntype Player struct {\n\tName   string\n\tNumber int\n\tAlive  bool\n}\n\nfunc main() {\n\tp := Player{Name: "Kang Sae-byeok", Number: 67, Alive: true}\n\tfmt.Println(p.Name)\n\tfmt.Println(p.Number)\n\tfmt.Println(p.Alive)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\ntype Player struct {\n\tName   string\n\tNumber int\n\tAlive  bool\n}\n\nfunc main() {\n\tp := Player{Name: ___, Number: ___, Alive: ___}\n\tfmt.Println(p.Name)\n\tfmt.Println(p.Number)\n\tfmt.Println(p.Alive)\n}`,
    testCases: [
      { input: "", expected: "Kang Sae-byeok", description: "Player name" },
      { input: "", expected: "67", description: "Player number 67" },
      { input: "", expected: "true", description: "Player is alive" },
    ],
    concept: "Structs",
    difficulty: "intermediate",
  },
  {
    id: "sg-go-09",
    themeId: "squid-game",
    languageId: "go",
    order: 9,
    title: "Multiple Return Values",
    themedTitle: "The Prize Split",
    narrative:
      "The accountant needs a function that divides the prize pool between survivors — but must return an error if there are no survivors to split it. Go's multiple return values handle both outcomes cleanly. The VIPs are watching the arithmetic closely.",
    prompt:
      "Import `fmt` and `errors`. Write `splitPrize(total int, survivors int) (int, error)` that returns `(0, errors.New(\"no survivors\"))` if `survivors == 0`, or `(total / survivors, nil)` otherwise. In `main`, call it with `(45600000, 3)` and `(45600000, 0)`. Print the result or error.",
    hint: "Return two values: the share and an error. Use `result, err := splitPrize(...)`. Check `if err != nil` to handle the error case.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc splitPrize(total int, survivors int) (int, error) {\n\tif survivors == 0 {\n\t\treturn 0, errors.New("no survivors")\n\t}\n\treturn total / survivors, nil\n}\n\nfunc main() {\n\tresult, err := splitPrize(45600000, 3)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n\tresult2, err2 := splitPrize(45600000, 0)\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(result2)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc splitPrize(total int, survivors int) (int, error) {\n\tif survivors == 0 {\n\t\treturn 0, errors.New(___)\n\t}\n\treturn total / survivors, nil\n}\n\nfunc main() {\n\tresult, err := splitPrize(45600000, 3)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n\tresult2, err2 := splitPrize(45600000, 0)\n\tif err2 != nil {\n\t\tfmt.Println("Error:", err2)\n\t} else {\n\t\tfmt.Println(result2)\n\t}\n}`,
    testCases: [
      { input: "45600000, 3", expected: "15200000", description: "45.6M split 3 ways = 15.2M each" },
      { input: "45600000, 0", expected: "Error: no survivors", description: "Zero survivors returns an error" },
    ],
    concept: "Multiple Return Values",
    difficulty: "advanced",
  },
  {
    id: "sg-go-10",
    themeId: "squid-game",
    languageId: "go",
    order: 10,
    title: "Error Handling",
    themedTitle: "The Glass Panel Validator",
    narrative:
      "The glass bridge technician needs a validator: given a panel type, it returns whether it is safe. If the panel type is unrecognized, it returns an error. In the game, a wrong answer is fatal. In Go, an unhandled error is just bad engineering.",
    prompt:
      "Import `fmt` and `errors`. Write `validatePanel(panelType string) (bool, error)` that returns `(true, nil)` for `\"tempered\"`, `(false, nil)` for `\"regular\"`, and `(false, errors.New(\"unknown panel type\"))` otherwise. In `main`, call with `\"tempered\"`, `\"regular\"`, and `\"mystery\"`.",
    hint: "Use `if panelType == \"tempered\"` chained with `else if` and `else`. Return two values each time.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc validatePanel(panelType string) (bool, error) {\n\tif panelType == "tempered" {\n\t\treturn true, nil\n\t} else if panelType == "regular" {\n\t\treturn false, nil\n\t} else {\n\t\treturn false, errors.New("unknown panel type")\n\t}\n}\n\nfunc main() {\n\tfor _, pt := range []string{"tempered", "regular", "mystery"} {\n\t\tsafe, err := validatePanel(pt)\n\t\tif err != nil {\n\t\t\tfmt.Println("Error:", err)\n\t\t} else {\n\t\t\tfmt.Println(safe)\n\t\t}\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc validatePanel(panelType string) (bool, error) {\n\tif panelType == "tempered" {\n\t\treturn true, nil\n\t} else if panelType == "regular" {\n\t\treturn false, nil\n\t} else {\n\t\treturn false, errors.New(___)\n\t}\n}\n\nfunc main() {\n\tfor _, pt := range []string{"tempered", "regular", "mystery"} {\n\t\tsafe, err := validatePanel(pt)\n\t\tif err != nil {\n\t\t\tfmt.Println("Error:", err)\n\t\t} else {\n\t\t\tfmt.Println(safe)\n\t\t}\n\t}\n}`,
    testCases: [
      { input: "tempered", expected: "true", description: "Tempered glass is safe" },
      { input: "regular", expected: "false", description: "Regular glass is not safe" },
      { input: "mystery", expected: "Error: unknown panel type", description: "Unknown panel type returns error" },
    ],
    concept: "Error Handling",
    difficulty: "advanced",
  },
];
