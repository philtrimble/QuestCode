import type { Challenge } from "@/types";

export const strangerThingsGoChallenges: Challenge[] = [
  {
    id: "st-go-01",
    themeId: "stranger-things",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Eleven's Signal",
    narrative:
      "Eleven has broken through the static. Her message arrives in fragments — a name, a channel number, a single boolean confirming she is alive. Hopper needs to capture every piece before the signal fades back into the Void.",
    prompt:
      "Declare three variables using `:=`: `name` set to `\"Eleven\"`, `channel` set to `11`, and `alive` set to `true`. Print all three with `fmt.Println`.",
    hint: "Use the short variable declaration: `name := \"Eleven\"`. Declare each variable on its own line, then print each one with `fmt.Println`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Eleven"\n\tchannel := 11\n\talive := true\n\tfmt.Println(name)\n\tfmt.Println(channel)\n\tfmt.Println(alive)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Declare name, channel, and alive using :=\n\tname := ___\n\tchannel := ___\n\talive := ___\n\tfmt.Println(name)\n\tfmt.Println(channel)\n\tfmt.Println(alive)\n}`,
    testCases: [
      { input: "", expected: "Eleven\n11\ntrue", description: "Prints Eleven's name, channel, and status" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "st-go-02",
    themeId: "stranger-things",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "Upside Down Threat Level",
    narrative:
      "The lights are flickering again in Hawkins. Chief Hopper must assess the threat: if there are more than 5 gate breaches, the situation is critical; if there are 3 to 5, it is dangerous; otherwise the town is still safe — for now.",
    prompt:
      "Write an `if/else if/else` block. Given `breaches := 4`, print `\"Critical\"` if `breaches > 5`, `\"Dangerous\"` if `breaches >= 3`, or `\"Safe\"` otherwise.",
    hint: "Go if/else uses no parentheses: `if breaches > 5 { ... } else if breaches >= 3 { ... } else { ... }`",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tbreaches := 4\n\tif breaches > 5 {\n\t\tfmt.Println("Critical")\n\t} else if breaches >= 3 {\n\t\tfmt.Println("Dangerous")\n\t} else {\n\t\tfmt.Println("Safe")\n\t}\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tbreaches := 4\n\t// Print "Critical" if breaches > 5,\n\t// "Dangerous" if breaches >= 3,\n\t// "Safe" otherwise\n\tif ___ {\n\t\tfmt.Println("Critical")\n\t} else if ___ {\n\t\tfmt.Println("Dangerous")\n\t} else {\n\t\tfmt.Println("Safe")\n\t}\n}`,
    testCases: [
      { input: "", expected: "Dangerous", description: "4 breaches falls in the Dangerous range" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "st-go-03",
    themeId: "stranger-things",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "Demogorgon Threat Calculator",
    narrative:
      "Dr. Owens needs a systematic way to calculate the danger posed by Demogorgon sightings. Each confirmed sighting multiplies the base danger factor of 7 — the more sightings, the more forces Hopper must deploy to contain the threat.",
    prompt:
      "Write a function called `threatLevel` that takes `sightings int` and returns an `int`. It should return `sightings * 7`. In `main`, call `threatLevel(4)` and print the result.",
    hint: "A Go function looks like: `func threatLevel(sightings int) int { return sightings * 7 }`",
    solution: `package main\n\nimport "fmt"\n\nfunc threatLevel(sightings int) int {\n\treturn sightings * 7\n}\n\nfunc main() {\n\tfmt.Println(threatLevel(4))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc threatLevel(sightings int) int {\n\t// Return sightings multiplied by 7\n\treturn ___\n}\n\nfunc main() {\n\tfmt.Println(threatLevel(4)) // Should print: 28\n}`,
    testCases: [
      { input: "", expected: "28", description: "4 sightings at danger factor 7 equals 28" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "st-go-04",
    themeId: "stranger-things",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "The Party's Walkie-Talkie Roster",
    narrative:
      "Dustin has the Party's walkie-talkie roster almost ready, but Will just returned from the Upside Down and needs to be added immediately. Once Will is on the list, Dustin needs to confirm how many members are now active.",
    prompt:
      "Create a slice `members` containing `\"Mike\"`, `\"Dustin\"`, and `\"Lucas\"`. Use `append` to add `\"Will\"`. Print the length of `members` with `fmt.Println`.",
    hint: "Create a slice with `members := []string{\"Mike\", \"Dustin\", \"Lucas\"}`. Use `members = append(members, \"Will\")` then `fmt.Println(len(members))`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tmembers := []string{"Mike", "Dustin", "Lucas"}\n\tmembers = append(members, "Will")\n\tfmt.Println(len(members))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create a slice with Mike, Dustin, and Lucas\n\tmembers := []string{___}\n\t// Append Will to the slice\n\tmembers = append(members, ___)\n\t// Print the length\n\tfmt.Println(len(members))\n}`,
    testCases: [
      { input: "", expected: "4", description: "4 members on the walkie-talkie roster" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "st-go-05",
    themeId: "stranger-things",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Scanning for Survivors",
    narrative:
      "The Mind Flayer has attacked Hawkins. Hopper needs a count of every confirmed survivor. He has a list of residents and their statuses — loop through them all and count only those marked safe before the tunnels spread further.",
    prompt:
      "Given `statuses := []string{\"safe\", \"flayed\", \"safe\", \"flayed\", \"safe\"}`, use a `for range` loop to count how many entries equal `\"safe\"`. Print the count.",
    hint: "Use `for _, s := range statuses { if s == \"safe\" { count++ } }`. Declare `count := 0` before the loop.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tstatuses := []string{"safe", "flayed", "safe", "flayed", "safe"}\n\tcount := 0\n\tfor _, s := range statuses {\n\t\tif s == "safe" {\n\t\t\tcount++\n\t\t}\n\t}\n\tfmt.Println(count)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tstatuses := []string{"safe", "flayed", "safe", "flayed", "safe"}\n\tcount := 0\n\t// Loop through statuses and count the "safe" entries\n\tfor _, s := range statuses {\n\t\tif ___ {\n\t\t\tcount++\n\t\t}\n\t}\n\tfmt.Println(count)\n}`,
    testCases: [
      { input: "", expected: "3", description: "3 residents confirmed safe" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
];
