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
  {
    id: "st-go-06",
    themeId: "stranger-things",
    languageId: "go",
    order: 6,
    title: "String Formatting",
    themedTitle: "Eleven's Transmission",
    narrative:
      "Eleven has pushed through the static and sent a message from the Void. Hopper needs to format the transmission clearly — the sender's name, the channel, and the message itself, all assembled into one readable broadcast before the signal fades.",
    prompt:
      "Use `fmt.Sprintf` to create a formatted string. Given `name := \"Eleven\"` and `channel := 11`, produce `\"Eleven is broadcasting on channel 11\"` and print it.",
    hint: "Use `msg := fmt.Sprintf(\"%s is broadcasting on channel %d\", name, channel)` then `fmt.Println(msg)`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Eleven"\n\tchannel := 11\n\tmsg := fmt.Sprintf("%s is broadcasting on channel %d", name, channel)\n\tfmt.Println(msg)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Eleven"\n\tchannel := 11\n\t// Use fmt.Sprintf to build the message\n\tmsg := fmt.Sprintf(___, name, channel)\n\tfmt.Println(msg)\n}`,
    testCases: [
      { input: "", expected: "Eleven is broadcasting on channel 11", description: "Formatted transmission message" },
    ],
    concept: "String Formatting",
    difficulty: "intermediate",
  },
  {
    id: "st-go-07",
    themeId: "stranger-things",
    languageId: "go",
    order: 7,
    title: "Maps",
    themedTitle: "The Hawkins Monster Codex",
    narrative:
      "Dr. Owens needs a lookup table of every creature spotted near the Upside Down gate. Each monster name maps to its threat level. Hopper can query it instantly instead of flipping through binders at 2am.",
    prompt:
      "Create a map `threatMap` of type `map[string]int`. Add `\"Demogorgon\"` with value `10` and `\"Mind Flayer\"` with value `9`. Print the value for `\"Demogorgon\"`.",
    hint: "Declare with `threatMap := map[string]int{}`, then assign with `threatMap[\"Demogorgon\"] = 10`. Access with `threatMap[\"Demogorgon\"]`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tthreatMap := map[string]int{}\n\tthreatMap["Demogorgon"] = 10\n\tthreatMap["Mind Flayer"] = 9\n\tfmt.Println(threatMap["Demogorgon"])\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create the map\n\tthreatMap := map[string]int{}\n\t// Add Demogorgon and Mind Flayer\n\tthreatMap[___] = 10\n\tthreatMap[___] = 9\n\t// Print Demogorgon's threat level\n\tfmt.Println(threatMap[___])\n}`,
    testCases: [
      { input: "", expected: "10", description: "Demogorgon has threat level 10" },
    ],
    concept: "Maps",
    difficulty: "intermediate",
  },
  {
    id: "st-go-08",
    themeId: "stranger-things",
    languageId: "go",
    order: 8,
    title: "Structs",
    themedTitle: "Party Member Profile",
    narrative:
      "The Party needs a proper data structure. Dustin insists that informal notes on napkins are insufficient — each member's profile must include their name and their power level, stored in a Go struct so it can be accessed programmatically.",
    prompt:
      "Define a struct `Member` with fields `Name string` and `Power int`. Create an instance with `Name: \"Eleven\"` and `Power: 100`. Print both fields with `fmt.Println`.",
    hint: "Define the struct above `main`: `type Member struct { Name string; Power int }`. Create with `m := Member{Name: \"Eleven\", Power: 100}`.",
    solution: `package main\n\nimport "fmt"\n\ntype Member struct {\n\tName  string\n\tPower int\n}\n\nfunc main() {\n\tm := Member{Name: "Eleven", Power: 100}\n\tfmt.Println(m.Name)\n\tfmt.Println(m.Power)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\ntype Member struct {\n\tName  string\n\tPower int\n}\n\nfunc main() {\n\t// Create a Member with Name "Eleven" and Power 100\n\tm := Member{___}\n\tfmt.Println(m.Name)\n\tfmt.Println(m.Power)\n}`,
    testCases: [
      { input: "", expected: "Eleven\n100", description: "Member name and power level" },
    ],
    concept: "Structs",
    difficulty: "intermediate",
  },
  {
    id: "st-go-09",
    themeId: "stranger-things",
    languageId: "go",
    order: 9,
    title: "Multiple Return Values",
    themedTitle: "Gate Coordinates",
    narrative:
      "The gate to the Upside Down can only be opened at exact coordinates. Dr. Owens has built a function that returns both the coordinates and an error — because if the depth reading is zero, the data is corrupted and no one should go near it.",
    prompt:
      "Write a function `gateCoords(depth int) (int, error)` that returns `depth * 3, nil` if `depth > 0`, or `0, errors.New(\"invalid depth\")` if `depth` is 0 or less. In `main`, call it with `5`, print both return values.",
    hint: "Import `\"errors\"`. Use `if depth <= 0 { return 0, errors.New(\"invalid depth\") }`. Then `return depth * 3, nil`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc gateCoords(depth int) (int, error) {\n\tif depth <= 0 {\n\t\treturn 0, errors.New("invalid depth")\n\t}\n\treturn depth * 3, nil\n}\n\nfunc main() {\n\tcoords, err := gateCoords(5)\n\tfmt.Println(coords)\n\tfmt.Println(err)\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc gateCoords(depth int) (int, error) {\n\tif depth <= 0 {\n\t\treturn 0, errors.New("invalid depth")\n\t}\n\t// Return depth * 3 and nil\n\treturn ___\n}\n\nfunc main() {\n\tcoords, err := gateCoords(5)\n\tfmt.Println(coords)\n\tfmt.Println(err)\n}`,
    testCases: [
      { input: "", expected: "15\n<nil>", description: "Valid depth returns coordinates and nil error" },
    ],
    concept: "Multiple Return Values",
    difficulty: "advanced",
  },
  {
    id: "st-go-10",
    themeId: "stranger-things",
    languageId: "go",
    order: 10,
    title: "Error Handling",
    themedTitle: "Entering the Upside Down",
    narrative:
      "Entering the Upside Down requires a confirmed gate reading. If the reading fails — if the depth is invalid — Hopper must be warned before anyone crosses. Go's error handling pattern keeps the team safe: always check the error before proceeding.",
    prompt:
      "Call `gateCoords(0)` (which returns an error when depth is 0). Check if `err != nil` — if so, print `\"Error:\"` followed by the error. Otherwise print the coordinates.",
    hint: "Use `coords, err := gateCoords(0)`. Then `if err != nil { fmt.Println(\"Error:\", err) } else { fmt.Println(coords) }`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc gateCoords(depth int) (int, error) {\n\tif depth <= 0 {\n\t\treturn 0, errors.New("invalid depth")\n\t}\n\treturn depth * 3, nil\n}\n\nfunc main() {\n\tcoords, err := gateCoords(0)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(coords)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc gateCoords(depth int) (int, error) {\n\tif depth <= 0 {\n\t\treturn 0, errors.New("invalid depth")\n\t}\n\treturn depth * 3, nil\n}\n\nfunc main() {\n\tcoords, err := gateCoords(0)\n\t// Check if err != nil and print "Error:" + err, else print coords\n\tif ___ {\n\t\tfmt.Println("Error:", err)\n\t} else {\n\t\tfmt.Println(coords)\n\t}\n}`,
    testCases: [
      { input: "", expected: "Error: invalid depth", description: "Depth 0 triggers the error path" },
    ],
    concept: "Error Handling",
    difficulty: "advanced",
  },
];
