import type { Challenge } from "@/types";

export const theMatrixGoChallenges: Challenge[] = [
  {
    id: "mx-go-01",
    themeId: "the-matrix",
    languageId: "go",
    order: 1,
    title: "Variables & Types",
    themedTitle: "The One's Profile",
    narrative:
      "Morpheus has been searching his whole life for The One. Now Neo sits across the table in the Construct. Before the training can begin, the Oracle's system must log his identity — name, simulation access level, and whether he has taken the red pill.",
    prompt:
      "Declare three variables using `:=`: `name` set to `\"Neo\"`, `accessLevel` set to `99`, and `redPill` set to `true`. Print all three with `fmt.Println`.",
    hint: "Use `:=` for each variable. Strings need double quotes; integers and booleans are written directly.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Neo"\n\taccessLevel := 99\n\tredPill := true\n\tfmt.Println(name)\n\tfmt.Println(accessLevel)\n\tfmt.Println(redPill)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Declare name, accessLevel, and redPill using :=\n\tname := ___\n\taccessLevel := ___\n\tredPill := ___\n\tfmt.Println(name)\n\tfmt.Println(accessLevel)\n\tfmt.Println(redPill)\n}`,
    testCases: [
      { input: "", expected: "Neo\n99\ntrue", description: "Prints Neo's profile data" },
    ],
    concept: "Variables & Types",
    difficulty: "beginner",
  },
  {
    id: "mx-go-02",
    themeId: "the-matrix",
    languageId: "go",
    order: 2,
    title: "Conditionals",
    themedTitle: "Agent Smith's Threat Assessment",
    narrative:
      "Agent Smith has located a target in the simulation. Threat score above 80 requires immediate termination; 50 to 80 warrants pursuit; anything below 50 is a glitch to be ignored. The system must respond instantly — every millisecond matters.",
    prompt:
      "Given `threat := 65`, print `\"Terminate\"` if `threat > 80`, `\"Pursue\"` if `threat >= 50`, or `\"Ignore\"` otherwise.",
    hint: "Use if/else if/else — check the highest threshold first, then work downward.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tthreat := 65\n\tif threat > 80 {\n\t\tfmt.Println("Terminate")\n\t} else if threat >= 50 {\n\t\tfmt.Println("Pursue")\n\t} else {\n\t\tfmt.Println("Ignore")\n\t}\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tthreat := 65\n\t// Print "Terminate" if threat > 80,\n\t// "Pursue" if threat >= 50,\n\t// "Ignore" otherwise\n\tif ___ {\n\t\tfmt.Println("Terminate")\n\t} else if ___ {\n\t\tfmt.Println("Pursue")\n\t} else {\n\t\tfmt.Println("Ignore")\n\t}\n}`,
    testCases: [
      { input: "", expected: "Pursue", description: "Threat score 65 triggers pursuit" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "mx-go-03",
    themeId: "the-matrix",
    languageId: "go",
    order: 3,
    title: "Functions",
    themedTitle: "The Bullet-Time Calculator",
    narrative:
      "In the Matrix, Neo can perceive time at a fraction of its normal speed. His reaction time is divided by a dodge factor of 5 — the greater the focus, the slower the world appears. Tank needs the calculation ready before the next agent attack.",
    prompt:
      "Write a function `dodgeTime` that takes `reactionMs int` and returns `int`. It should return `reactionMs / 5`. In `main`, call `dodgeTime(500)` and print the result.",
    hint: "`func dodgeTime(reactionMs int) int { return reactionMs / 5 }` — Go integer division truncates toward zero.",
    solution: `package main\n\nimport "fmt"\n\nfunc dodgeTime(reactionMs int) int {\n\treturn reactionMs / 5\n}\n\nfunc main() {\n\tfmt.Println(dodgeTime(500))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc dodgeTime(reactionMs int) int {\n\t// Return reactionMs divided by 5\n\treturn ___\n}\n\nfunc main() {\n\tfmt.Println(dodgeTime(500)) // Should print: 100\n}`,
    testCases: [
      { input: "", expected: "100", description: "500 ms divided by dodge factor 5 equals 100" },
    ],
    concept: "Functions",
    difficulty: "beginner",
  },
  {
    id: "mx-go-04",
    themeId: "the-matrix",
    languageId: "go",
    order: 4,
    title: "Slices",
    themedTitle: "The Crew of the Nebuchadnezzar",
    narrative:
      "The Nebuchadnezzar needs a full crew manifest before it can jack into the Matrix. Ghost has just been cleared to join after passing the combat simulation. The operator needs the updated headcount before the ship disconnects from the power grid.",
    prompt:
      "Create a slice `crew` containing `\"Neo\"`, `\"Trinity\"`, and `\"Morpheus\"`. Use `append` to add `\"Ghost\"`. Print the length of the slice.",
    hint: "Use `crew := []string{\"Neo\", \"Trinity\", \"Morpheus\"}`, then `crew = append(crew, \"Ghost\")`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tcrew := []string{"Neo", "Trinity", "Morpheus"}\n\tcrew = append(crew, "Ghost")\n\tfmt.Println(len(crew))\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create a slice with Neo, Trinity, and Morpheus\n\tcrew := []string{___}\n\t// Append Ghost\n\tcrew = append(crew, ___)\n\t// Print the length\n\tfmt.Println(len(crew))\n}`,
    testCases: [
      { input: "", expected: "4", description: "4 crew members on the Nebuchadnezzar" },
    ],
    concept: "Slices",
    difficulty: "beginner",
  },
  {
    id: "mx-go-05",
    themeId: "the-matrix",
    languageId: "go",
    order: 5,
    title: "Loops",
    themedTitle: "Decoding the Signal",
    narrative:
      "The cascade of green code flows down the screen in the operator's chair. Each column holds a signal strength value. Tank needs to sum all the signal readings to determine whether the connection is stable enough for Neo to re-enter the simulation.",
    prompt:
      "Given `signals := []int{340, 210, 480, 195, 375}`, use a `for range` loop to sum all values. Print the total.",
    hint: "Declare `total := 0`, then `for _, v := range signals { total += v }`. Print `total` after the loop.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tsignals := []int{340, 210, 480, 195, 375}\n\ttotal := 0\n\tfor _, v := range signals {\n\t\ttotal += v\n\t}\n\tfmt.Println(total)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tsignals := []int{340, 210, 480, 195, 375}\n\ttotal := 0\n\t// Loop through signals and accumulate the total\n\tfor _, v := range signals {\n\t\ttotal += ___\n\t}\n\tfmt.Println(total)\n}`,
    testCases: [
      { input: "", expected: "1600", description: "Total signal strength across all columns" },
    ],
    concept: "Loops",
    difficulty: "intermediate",
  },
  {
    id: "mx-go-06",
    themeId: "the-matrix",
    languageId: "go",
    order: 6,
    title: "String Formatting",
    themedTitle: "The Oracle's Message",
    narrative:
      "The Oracle never speaks plainly. Her prophecies are formatted — always the subject, always the condition, always the outcome. Neo must learn to read the patterns before he can understand what she is telling him.",
    prompt:
      "Use `fmt.Sprintf` to build a message. Given `name := \"Neo\"` and `level := 99`, produce `\"Neo has reached level 99\"` and print it.",
    hint: "Use `msg := fmt.Sprintf(\"%s has reached level %d\", name, level)` then `fmt.Println(msg)`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Neo"\n\tlevel := 99\n\tmsg := fmt.Sprintf("%s has reached level %d", name, level)\n\tfmt.Println(msg)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Neo"\n\tlevel := 99\n\t// Use fmt.Sprintf to build the message\n\tmsg := fmt.Sprintf(___, name, level)\n\tfmt.Println(msg)\n}`,
    testCases: [
      { input: "", expected: "Neo has reached level 99", description: "Formatted Oracle message" },
    ],
    concept: "String Formatting",
    difficulty: "intermediate",
  },
  {
    id: "mx-go-07",
    themeId: "the-matrix",
    languageId: "go",
    order: 7,
    title: "Maps",
    themedTitle: "The Agent Directory",
    narrative:
      "The Machines maintain a directory of every Agent in the simulation, indexed by codename and mapped to their current threat rating. Morpheus uses a stolen copy to prepare the crew before each jack-in — knowing the Agents is the first step to surviving them.",
    prompt:
      "Create a map `agents` of type `map[string]int`. Add `\"Smith\"` with value `95` and `\"Jones\"` with value `80`. Print the value for `\"Smith\"`.",
    hint: "Use `agents := map[string]int{}`, assign both entries, then print `agents[\"Smith\"]`.",
    solution: `package main\n\nimport "fmt"\n\nfunc main() {\n\tagents := map[string]int{}\n\tagents["Smith"] = 95\n\tagents["Jones"] = 80\n\tfmt.Println(agents["Smith"])\n}`,
    starterCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create the map\n\tagents := map[string]int{}\n\t// Add Smith and Jones\n\tagents[___] = 95\n\tagents[___] = 80\n\t// Print Smith's threat rating\n\tfmt.Println(agents[___])\n}`,
    testCases: [
      { input: "", expected: "95", description: "Agent Smith has a threat rating of 95" },
    ],
    concept: "Maps",
    difficulty: "intermediate",
  },
  {
    id: "mx-go-08",
    themeId: "the-matrix",
    languageId: "go",
    order: 8,
    title: "Structs",
    themedTitle: "The Construct Profile",
    narrative:
      "Inside the Construct, every training program has a profile — a name and the number of combat modules it contains. Tank loads them in sequence and the struct keeps everything in order so Neo never enters an untested simulation.",
    prompt:
      "Define a struct `Program` with fields `Name string` and `Modules int`. Create an instance with `Name: \"Kung Fu\"` and `Modules: 10`. Print both fields.",
    hint: "Define `type Program struct { Name string; Modules int }` above `main`. Create with `p := Program{Name: \"Kung Fu\", Modules: 10}`.",
    solution: `package main\n\nimport "fmt"\n\ntype Program struct {\n\tName    string\n\tModules int\n}\n\nfunc main() {\n\tp := Program{Name: "Kung Fu", Modules: 10}\n\tfmt.Println(p.Name)\n\tfmt.Println(p.Modules)\n}`,
    starterCode: `package main\n\nimport "fmt"\n\ntype Program struct {\n\tName    string\n\tModules int\n}\n\nfunc main() {\n\t// Create a Program with Name "Kung Fu" and Modules 10\n\tp := Program{___}\n\tfmt.Println(p.Name)\n\tfmt.Println(p.Modules)\n}`,
    testCases: [
      { input: "", expected: "Kung Fu\n10", description: "Program name and module count" },
    ],
    concept: "Structs",
    difficulty: "intermediate",
  },
  {
    id: "mx-go-09",
    themeId: "the-matrix",
    languageId: "go",
    order: 9,
    title: "Multiple Return Values",
    themedTitle: "The Signal Decoder",
    narrative:
      "Tank decodes connection signals before Neo can jack in. A valid signal must have a strength above zero — anything else means the Machines have found the line. The decoder returns both the decoded strength and an error for immediate assessment.",
    prompt:
      "Write `decodeSignal(strength int) (int, error)` that returns `strength * 2, nil` if `strength > 0`, or `0, errors.New(\"no signal\")` otherwise. In `main`, call it with `45`, print both values.",
    hint: "Import `\"errors\"`. Check `if strength <= 0 { return 0, errors.New(\"no signal\") }`. Otherwise `return strength * 2, nil`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc decodeSignal(strength int) (int, error) {\n\tif strength <= 0 {\n\t\treturn 0, errors.New("no signal")\n\t}\n\treturn strength * 2, nil\n}\n\nfunc main() {\n\tresult, err := decodeSignal(45)\n\tfmt.Println(result)\n\tfmt.Println(err)\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc decodeSignal(strength int) (int, error) {\n\tif strength <= 0 {\n\t\treturn 0, errors.New("no signal")\n\t}\n\t// Return strength * 2 and nil\n\treturn ___\n}\n\nfunc main() {\n\tresult, err := decodeSignal(45)\n\tfmt.Println(result)\n\tfmt.Println(err)\n}`,
    testCases: [
      { input: "", expected: "90\n<nil>", description: "Signal strength 45 decodes to 90" },
    ],
    concept: "Multiple Return Values",
    difficulty: "advanced",
  },
  {
    id: "mx-go-10",
    themeId: "the-matrix",
    languageId: "go",
    order: 10,
    title: "Error Handling",
    themedTitle: "Dead Signal",
    narrative:
      "The signal is gone. Trinity has been cut off and the line is dead. The decoder returns an error, and the crew must respond immediately. In the Matrix, an unhandled error means an Agent is already on the way — always check your errors.",
    prompt:
      "Call `decodeSignal(0)`. If `err != nil`, print `\"Warning:\"` followed by the error. Otherwise print the result.",
    hint: "Use `result, err := decodeSignal(0)`. Then `if err != nil { fmt.Println(\"Warning:\", err) } else { fmt.Println(result) }`.",
    solution: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc decodeSignal(strength int) (int, error) {\n\tif strength <= 0 {\n\t\treturn 0, errors.New("no signal")\n\t}\n\treturn strength * 2, nil\n}\n\nfunc main() {\n\tresult, err := decodeSignal(0)\n\tif err != nil {\n\t\tfmt.Println("Warning:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n}`,
    starterCode: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc decodeSignal(strength int) (int, error) {\n\tif strength <= 0 {\n\t\treturn 0, errors.New("no signal")\n\t}\n\treturn strength * 2, nil\n}\n\nfunc main() {\n\tresult, err := decodeSignal(0)\n\t// Check for error and print accordingly\n\tif ___ {\n\t\tfmt.Println("Warning:", err)\n\t} else {\n\t\tfmt.Println(result)\n\t}\n}`,
    testCases: [
      { input: "", expected: "Warning: no signal", description: "Zero strength triggers the dead signal warning" },
    ],
    concept: "Error Handling",
    difficulty: "advanced",
  },
];
