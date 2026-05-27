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
  {
    id: "mx-java-06",
    themeId: "the-matrix",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "Decoding the Matrix",
    narrative:
      "Neo stares at the cascading green code. The string `\"there is no spoon\"` is a simulation construct. The resistance needs it processed: uppercased for broadcast, verified to contain 'spoon', and its byte-length checked.",
    prompt:
      "Inside `main`, declare a `String` variable `code` set to `\"there is no spoon\"`. Print it in all uppercase using `toUpperCase()`. Print whether it contains `\"spoon\"` using `contains()`. Print its length using `length()`.",
    hint: "Call `code.toUpperCase()`, `code.contains(\"spoon\")`, and `code.length()` — each printed on its own line.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String code = "there is no spoon";\n        System.out.println(code.toUpperCase());\n        System.out.println(code.contains("spoon"));\n        System.out.println(code.length());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String code = "there is no spoon";\n        // Print code in uppercase\n        System.out.println(code.___);\n        // Print whether it contains "spoon"\n        System.out.println(code.___);\n        // Print the length\n        System.out.println(code.___);\n    }\n}`,
    testCases: [
      { input: "", expected: "THERE IS NO SPOON", description: "Code in uppercase" },
      { input: "", expected: "true", description: "Code contains 'spoon'" },
      { input: "", expected: "17", description: "Code length is 17 characters" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "mx-java-07",
    themeId: "the-matrix",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "The Resistance Crew",
    narrative:
      "Morpheus assembles the crew of the Nebuchadnezzar. Apoc was lost in the first mission; Switch was brought in as a replacement. Tank needs an updated headcount and the name of the second crew member.",
    prompt:
      "Import `java.util.ArrayList`. Create an `ArrayList<String>` called `crew`. Add `\"Morpheus\"`, `\"Trinity\"`, `\"Apoc\"`, `\"Tank\"`. Remove `\"Apoc\"`. Add `\"Switch\"`. Print the size, then print the element at index 1.",
    hint: "Use `list.add()`, `list.remove()`, `list.size()`, and `list.get(index)` for the four operations.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> crew = new ArrayList<>();\n        crew.add("Morpheus");\n        crew.add("Trinity");\n        crew.add("Apoc");\n        crew.add("Tank");\n        crew.remove("Apoc");\n        crew.add("Switch");\n        System.out.println(crew.size());\n        System.out.println(crew.get(1));\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> crew = new ArrayList<>();\n        crew.add("Morpheus");\n        crew.add("Trinity");\n        crew.add("Apoc");\n        crew.add("Tank");\n        // Remove "Apoc"\n        crew.remove(___);\n        // Add "Switch"\n        crew.add(___);\n        System.out.println(crew.size());\n        System.out.println(crew.get(1));\n    }\n}`,
    testCases: [
      { input: "", expected: "4", description: "Crew has 4 members after changes" },
      { input: "", expected: "Trinity", description: "Element at index 1 is Trinity" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "mx-java-08",
    themeId: "the-matrix",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "The Agent Threat Database",
    narrative:
      "The resistance maintains a threat database mapping Agent names to their danger ratings. Neo needs to query Agent Smith's rating and verify whether Agent Brown is registered before deploying his team.",
    prompt:
      "Import `java.util.HashMap`. Create a `HashMap<String, Integer>` called `agents`. Add: `\"Agent Smith\"` → `99`, `\"Agent Jones\"` → `85`, `\"Agent Brown\"` → `80`. Print the danger rating for `\"Agent Smith\"`. Print whether `\"Agent Brown\"` is a key using `containsKey()`.",
    hint: "Use `map.put(key, value)`, `map.get(key)`, and `map.containsKey(key)` for the operations.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> agents = new HashMap<>();\n        agents.put("Agent Smith", 99);\n        agents.put("Agent Jones", 85);\n        agents.put("Agent Brown", 80);\n        System.out.println(agents.get("Agent Smith"));\n        System.out.println(agents.containsKey("Agent Brown"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> agents = new HashMap<>();\n        agents.put("Agent Smith", 99);\n        agents.put("Agent Jones", 85);\n        agents.put("Agent Brown", 80);\n        // Print the danger rating for "Agent Smith"\n        System.out.println(agents.get(___));\n        // Print whether "Agent Brown" is a key\n        System.out.println(agents.containsKey(___));\n    }\n}`,
    testCases: [
      { input: "", expected: "99", description: "Agent Smith has danger rating 99" },
      { input: "", expected: "true", description: "Agent Brown is in the database" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "mx-java-09",
    themeId: "the-matrix",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "Neo's Combat Power System",
    narrative:
      "Neo's combat power inside the Matrix is calculated in two stages: first compute his raw power from speed and strength, then classify his fighting tier. The Oracle has seen the outcome — but the system still needs to be written.",
    prompt:
      "Write two static methods: `combatPower(int speed, int strength)` that returns `speed * strength`, and `fightingTier(int speed, int strength)` that calls `combatPower` and returns `\"The One\"` if power is 500 or above, `\"Skilled\"` if 200 or above, and `\"Learning\"` otherwise. Call `fightingTier` from `main` with `(25, 25)` and `(10, 15)` and print the results.",
    hint: "In `fightingTier`, call `combatPower(speed, strength)` and store the result, then classify with if/else.",
    solution: `public class Main {\n    public static int combatPower(int speed, int strength) {\n        return speed * strength;\n    }\n\n    public static String fightingTier(int speed, int strength) {\n        int power = combatPower(speed, strength);\n        if (power >= 500) {\n            return "The One";\n        } else if (power >= 200) {\n            return "Skilled";\n        } else {\n            return "Learning";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(fightingTier(25, 25));  // The One\n        System.out.println(fightingTier(10, 15));  // Learning\n    }\n}`,
    starterCode: `public class Main {\n    public static int combatPower(int speed, int strength) {\n        // Return speed * strength\n        return ___;\n    }\n\n    public static String fightingTier(int speed, int strength) {\n        int power = combatPower(speed, strength);\n        // Return "The One" if >= 500, "Skilled" if >= 200, "Learning" otherwise\n        if (power >= 500) {\n            return ___;\n        } else if (power >= 200) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(fightingTier(25, 25));  // The One\n        System.out.println(fightingTier(10, 15));  // Learning\n    }\n}`,
    testCases: [
      { input: "25, 25", expected: "The One", description: "Power 625 — The One tier" },
      { input: "10, 15", expected: "Learning", description: "Power 150 — Learning tier" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "mx-java-10",
    themeId: "the-matrix",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "Composing the Broadcast Signal",
    narrative:
      "The Nebuchadnezzar sends a broadcast signal to free humans still trapped in the Matrix. Tank assembles the signal string segment by segment using StringBuilder — a raw and efficient approach that mirrors the machine language flowing all around them.",
    prompt:
      "Use a `StringBuilder` to build a broadcast. Append `\"SIGNAL | \"`, then `\"Origin: Nebuchadnezzar\"`, then `\" | \"`, then `\"Target: Matrix Construct\"`, then `\" | \"`, then `\"Message: Wake up, Neo\"`. Print the result using `toString()`.",
    hint: "Create `StringBuilder sb = new StringBuilder();` then call `sb.append()` for each segment. End with `System.out.println(sb.toString())`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("SIGNAL | ");\n        sb.append("Origin: Nebuchadnezzar");\n        sb.append(" | ");\n        sb.append("Target: Matrix Construct");\n        sb.append(" | ");\n        sb.append("Message: Wake up, Neo");\n        System.out.println(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("SIGNAL | ");\n        sb.append("Origin: Nebuchadnezzar");\n        sb.append(" | ");\n        sb.append(___);\n        sb.append(" | ");\n        sb.append(___);\n        System.out.println(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "SIGNAL | Origin: Nebuchadnezzar | Target: Matrix Construct | Message: Wake up, Neo", description: "Full broadcast signal assembled" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
