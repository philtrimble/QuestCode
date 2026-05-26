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
];
