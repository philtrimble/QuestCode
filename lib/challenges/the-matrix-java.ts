import type { Challenge } from "@/types";

export const theMatrixJavaChallenges: Challenge[] = [
  {
    id: "mx-java-01",
    themeId: "the-matrix",
    languageId: "java",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Neo's Identity File",
    narrative:
      "The Oracle knows everything. She has a file on every potential candidate for The One. Before Neo can be trained, the resistance needs his profile initialized in their system — his alias, his simulation room number, and whether he has taken the red pill.",
    prompt:
      "Inside `main`, declare a `String` variable `alias` set to `\"Neo\"`, an `int` variable `roomNumber` set to `101`, and a `boolean` variable `redPill` set to `true`. Print each variable on its own line.",
    hint: "Declare each variable with its type, then print each one with `System.out.println()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String alias = "Neo";\n        int roomNumber = 101;\n        boolean redPill = true;\n        System.out.println(alias);\n        System.out.println(roomNumber);\n        System.out.println(redPill);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Declare alias, roomNumber, and redPill\n        String alias = ___;\n        int roomNumber = ___;\n        boolean redPill = ___;\n        System.out.println(alias);\n        System.out.println(roomNumber);\n        System.out.println(redPill);\n    }\n}`,
    testCases: [
      { input: "", expected: "Neo", description: "Prints the alias Neo" },
      { input: "", expected: "101", description: "Prints the room number 101" },
      { input: "", expected: "true", description: "Prints redPill as true" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "mx-java-02",
    themeId: "the-matrix",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "Red Pill or Blue Pill",
    narrative:
      "Morpheus sits across from Neo in a crumbling building. In one hand, the red pill — truth. In the other, the blue pill — blissful ignorance. Write the logic that determines what happens when a candidate makes their choice.",
    prompt:
      "Write a static method `pillChoice(String pill)` that returns `\"Welcome to the real world.\"` if `pill` equals `\"red\"`, and `\"The story ends here.\"` if `pill` equals `\"blue\"`, and `\"Choose wisely.\"` for any other value. Call it from `main` with `\"red\"`, `\"blue\"`, and `\"green\"`.",
    hint: "Use `.equals()` to compare strings in Java: `pill.equals(\"red\")`. Chain with `else if` and `else`.",
    solution: `public class Main {\n    public static String pillChoice(String pill) {\n        if (pill.equals("red")) {\n            return "Welcome to the real world.";\n        } else if (pill.equals("blue")) {\n            return "The story ends here.";\n        } else {\n            return "Choose wisely.";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(pillChoice("red"));   // Welcome to the real world.\n        System.out.println(pillChoice("blue"));  // The story ends here.\n        System.out.println(pillChoice("green")); // Choose wisely.\n    }\n}`,
    starterCode: `public class Main {\n    public static String pillChoice(String pill) {\n        // Return the correct message based on pill color\n        if (pill.equals("red")) {\n            return ___;\n        } else if (pill.equals("blue")) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(pillChoice("red"));   // Welcome to the real world.\n        System.out.println(pillChoice("blue"));  // The story ends here.\n        System.out.println(pillChoice("green")); // Choose wisely.\n    }\n}`,
    testCases: [
      { input: "red", expected: "Welcome to the real world.", description: "Red pill reveals the truth" },
      { input: "blue", expected: "The story ends here.", description: "Blue pill ends the journey" },
      { input: "green", expected: "Choose wisely.", description: "Unknown pill gets a warning" },
    ],
    concept: "Conditionals & String Comparison",
    difficulty: "beginner",
  },
  {
    id: "mx-java-03",
    themeId: "the-matrix",
    languageId: "java",
    order: 3,
    title: "Methods",
    themedTitle: "Agent Smith's Clone Counter",
    narrative:
      "Agent Smith has discovered how to replicate himself infinitely inside the simulation. His clone count doubles with each replication cycle. Tank needs to track how many Smiths exist after a given number of cycles to plan the counterstrike.",
    prompt:
      "Write a static method `cloneCount(int startCount, int cycles)` that returns `startCount` multiplied by `2` raised to the power of `cycles`. Use `(int) Math.pow(2, cycles)` for the power. Call it from `main` with `startCount = 1` and `cycles = 5`, and print the result.",
    hint: "`Math.pow(base, exponent)` returns a `double`, so cast it: `(int) Math.pow(2, cycles)`. Then multiply by `startCount`.",
    solution: `public class Main {\n    public static int cloneCount(int startCount, int cycles) {\n        return startCount * (int) Math.pow(2, cycles);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(cloneCount(1, 5));  // 32\n    }\n}`,
    starterCode: `public class Main {\n    public static int cloneCount(int startCount, int cycles) {\n        // Return startCount * 2^cycles\n        return ___;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(cloneCount(1, 5));  // 32\n    }\n}`,
    testCases: [
      { input: "1, 5", expected: "32", description: "1 Smith doubles 5 times equals 32" },
    ],
    concept: "Methods & Math",
    difficulty: "beginner",
  },
  {
    id: "mx-java-04",
    themeId: "the-matrix",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "The Construct's Code Lines",
    narrative:
      "Morpheus loads the Construct — a blank white loading program. He initializes it with a sequence of code lines. One line contains a corrupted value that must be patched before the training simulation can begin.",
    prompt:
      "Declare an `int[]` array called `code` with values `{7, 3, 9, 1, 5}`. Print the element at index 3. Then replace the element at index 1 with `42`. Print the updated element at index 1.",
    hint: "Access with `code[3]`, assign with `code[1] = 42;`, then print the updated element with `System.out.println(code[1])`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        int[] code = {7, 3, 9, 1, 5};\n        System.out.println(code[3]);\n        code[1] = 42;\n        System.out.println(code[1]);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] code = {7, 3, 9, 1, 5};\n        // Print the element at index 3\n        System.out.println(___);\n        // Replace index 1 with 42\n        code[1] = ___;\n        System.out.println(code[1]);\n    }\n}`,
    testCases: [
      { input: "", expected: "1", description: "Element at index 3 is 1" },
      { input: "", expected: "42", description: "Element at index 1 is updated to 42" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "mx-java-05",
    themeId: "the-matrix",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "Finding the Glitch in the Simulation",
    narrative:
      "Trinity has detected a glitch — a value in the simulation's data stream that exceeds the normal operating threshold. She needs to scan the stream and find the largest anomaly value so she can report it to Morpheus.",
    prompt:
      "Write a static method `largestGlitch(int[] stream)` that uses a `for` loop to find and return the maximum value in the array. Call it from `main` with `{14, 67, 23, 99, 45, 80}` and print the result.",
    hint: "Initialize `int max = stream[0];`. Start the loop at index 1. Inside the loop, if `stream[i] > max`, set `max = stream[i]`. Return `max`.",
    solution: `public class Main {\n    public static int largestGlitch(int[] stream) {\n        int max = stream[0];\n        for (int i = 1; i < stream.length; i++) {\n            if (stream[i] > max) {\n                max = stream[i];\n            }\n        }\n        return max;\n    }\n\n    public static void main(String[] args) {\n        int[] stream = {14, 67, 23, 99, 45, 80};\n        System.out.println(largestGlitch(stream));  // 99\n    }\n}`,
    starterCode: `public class Main {\n    public static int largestGlitch(int[] stream) {\n        int max = stream[0];\n        for (int i = 1; i < stream.length; i++) {\n            // Update max if stream[i] is greater\n        }\n        return max;\n    }\n\n    public static void main(String[] args) {\n        int[] stream = {14, 67, 23, 99, 45, 80};\n        System.out.println(largestGlitch(stream));  // 99\n    }\n}`,
    testCases: [
      { input: "{14, 67, 23, 99, 45, 80}", expected: "99", description: "The largest glitch value is 99" },
    ],
    concept: "Loops & Finding Maximum",
    difficulty: "intermediate",
  },
];
