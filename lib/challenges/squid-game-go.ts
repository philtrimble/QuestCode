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
];
