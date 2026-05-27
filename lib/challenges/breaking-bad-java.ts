import type { Challenge } from "@/types";

export const breakingBadJavaChallenges: Challenge[] = [
  {
    id: "bb-java-01",
    themeId: "breaking-bad",
    languageId: "java",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Walter's Lab Notebook",
    narrative:
      "Walter White keeps meticulous records of every cook. Before starting a new batch in the desert lab, he logs the product name, the batch number, and whether the product has passed the purity test. Say my name — and initialize your variables.",
    prompt:
      "Inside `main`, declare a `String` variable `product` set to `\"Blue Sky\"`, an `int` variable `batchNumber` set to `7`, and a `boolean` variable `purityPassed` set to `true`. Print each variable on its own line.",
    hint: "Declare each with its Java type: `String product = \"Blue Sky\";` then use `System.out.println()` to print.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String product = "Blue Sky";\n        int batchNumber = 7;\n        boolean purityPassed = true;\n        System.out.println(product);\n        System.out.println(batchNumber);\n        System.out.println(purityPassed);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Declare product, batchNumber, and purityPassed\n        String product = ___;\n        int batchNumber = ___;\n        boolean purityPassed = ___;\n        System.out.println(product);\n        System.out.println(batchNumber);\n        System.out.println(purityPassed);\n    }\n}`,
    testCases: [
      { input: "", expected: "Blue Sky", description: "Prints the product name" },
      { input: "", expected: "7", description: "Prints the batch number" },
      { input: "", expected: "true", description: "Prints the purity status" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "bb-java-02",
    themeId: "breaking-bad",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "Purity Grade Checker",
    narrative:
      "Walter White's blue meth is legendary for its purity. He grades every batch: 99% or above earns an 'A Grade', 90–98% is 'B Grade', 80–89% is 'C Grade', and anything below 80% gets tossed. Jesse wants to know the grade.",
    prompt:
      "Write a static method `purityGrade(int purity)` that returns `\"A Grade\"` if purity is 99 or above, `\"B Grade\"` if 90 or above, `\"C Grade\"` if 80 or above, and `\"Discard\"` otherwise. Call it from `main` with `99`, `93`, `85`, and `70`.",
    hint: "Check from the highest threshold downward using `if`, `else if`, and `else`. Return a String from each branch.",
    solution: `public class Main {\n    public static String purityGrade(int purity) {\n        if (purity >= 99) {\n            return "A Grade";\n        } else if (purity >= 90) {\n            return "B Grade";\n        } else if (purity >= 80) {\n            return "C Grade";\n        } else {\n            return "Discard";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(purityGrade(99));  // A Grade\n        System.out.println(purityGrade(93));  // B Grade\n        System.out.println(purityGrade(85));  // C Grade\n        System.out.println(purityGrade(70));  // Discard\n    }\n}`,
    starterCode: `public class Main {\n    public static String purityGrade(int purity) {\n        // Return "A Grade" >= 99, "B Grade" >= 90,\n        // "C Grade" >= 80, "Discard" otherwise\n        if (purity >= 99) {\n            return ___;\n        } else if (purity >= 90) {\n            return ___;\n        } else if (purity >= 80) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(purityGrade(99));  // A Grade\n        System.out.println(purityGrade(93));  // B Grade\n        System.out.println(purityGrade(85));  // C Grade\n        System.out.println(purityGrade(70));  // Discard\n    }\n}`,
    testCases: [
      { input: "99", expected: "A Grade", description: "99% purity is A Grade" },
      { input: "93", expected: "B Grade", description: "93% purity is B Grade" },
      { input: "85", expected: "C Grade", description: "85% purity is C Grade" },
      { input: "70", expected: "Discard", description: "70% purity is discarded" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "bb-java-03",
    themeId: "breaking-bad",
    languageId: "java",
    order: 3,
    title: "Methods",
    themedTitle: "Batch Yield Calculator",
    narrative:
      "Walter calculates the final yield of each cook by multiplying the base yield (in grams) by a purity factor. A higher purity factor means more sellable product. Saul wants the numbers — he needs to know what he's moving.",
    prompt:
      "Write a static method `batchYield(int baseGrams, int purityFactor)` that returns the product of the two parameters. Call it from `main` with `baseGrams = 500` and `purityFactor = 2`, and print the result.",
    hint: "The return type is `int`. Multiply the two parameters with `*` and return the result.",
    solution: `public class Main {\n    public static int batchYield(int baseGrams, int purityFactor) {\n        return baseGrams * purityFactor;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(batchYield(500, 2));  // 1000\n    }\n}`,
    starterCode: `public class Main {\n    public static int batchYield(int baseGrams, int purityFactor) {\n        // Return baseGrams multiplied by purityFactor\n        return ___;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(batchYield(500, 2));  // 1000\n    }\n}`,
    testCases: [
      { input: "500, 2", expected: "1000", description: "500 grams times factor 2 yields 1000" },
    ],
    concept: "Methods & Arithmetic",
    difficulty: "beginner",
  },
  {
    id: "bb-java-04",
    themeId: "breaking-bad",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "Albuquerque Distribution Points",
    narrative:
      "Mike Ehrmantraut manages a network of distribution points across Albuquerque. The location codes are stored in an array. One location has been compromised, and Mike needs it replaced with a new safe house code immediately.",
    prompt:
      "Declare an `int[]` array called `locations` with values `{101, 205, 308, 412, 519}`. Print the element at index 0. Then replace the element at index 2 with `350`. Print the updated element at index 2.",
    hint: "Access with `locations[0]`, update with `locations[2] = 350;`, then print the new value.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        int[] locations = {101, 205, 308, 412, 519};\n        System.out.println(locations[0]);\n        locations[2] = 350;\n        System.out.println(locations[2]);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] locations = {101, 205, 308, 412, 519};\n        // Print the element at index 0\n        System.out.println(___);\n        // Replace index 2 with 350\n        locations[2] = ___;\n        System.out.println(locations[2]);\n    }\n}`,
    testCases: [
      { input: "", expected: "101", description: "Element at index 0 is 101" },
      { input: "", expected: "350", description: "Element at index 2 is updated to 350" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "bb-java-05",
    themeId: "breaking-bad",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "Maximum Purity in the Batch",
    narrative:
      "Walter has tested the purity of multiple samples from the cook. He needs to find the highest purity reading to determine whether the batch meets his legendary standard. Jesse says 'yeah science' and hands Walter the printout.",
    prompt:
      "Write a static method `maxPurity(int[] samples)` that uses a `for` loop to find and return the maximum value in the array. Call it from `main` with `{88, 97, 75, 99, 91}` and print the result.",
    hint: "Start with `int max = samples[0];`. In the loop, check if `samples[i] > max` and update `max` if so. Return `max` after the loop.",
    solution: `public class Main {\n    public static int maxPurity(int[] samples) {\n        int max = samples[0];\n        for (int i = 1; i < samples.length; i++) {\n            if (samples[i] > max) {\n                max = samples[i];\n            }\n        }\n        return max;\n    }\n\n    public static void main(String[] args) {\n        int[] samples = {88, 97, 75, 99, 91};\n        System.out.println(maxPurity(samples));  // 99\n    }\n}`,
    starterCode: `public class Main {\n    public static int maxPurity(int[] samples) {\n        int max = samples[0];\n        for (int i = 1; i < samples.length; i++) {\n            // Update max if samples[i] is greater\n        }\n        return max;\n    }\n\n    public static void main(String[] args) {\n        int[] samples = {88, 97, 75, 99, 91};\n        System.out.println(maxPurity(samples));  // 99\n    }\n}`,
    testCases: [
      { input: "{88, 97, 75, 99, 91}", expected: "99", description: "Maximum purity in the array is 99" },
    ],
    concept: "Loops & Finding Maximum",
    difficulty: "intermediate",
  },
  {
    id: "bb-java-06",
    themeId: "breaking-bad",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "Heisenberg's Alias Processor",
    narrative:
      "Walter White has multiple identities. The DEA database must normalize and analyze each alias entry. The name 'heisenberg' needs to be uppercased for official records, checked for the substring 'berg', and its character count verified.",
    prompt:
      "Inside `main`, declare a `String` variable `alias` set to `\"heisenberg\"`. Print it in all uppercase using `toUpperCase()`. Print whether it contains `\"berg\"` using `contains()`. Print its length using `length()`.",
    hint: "Call string methods on the variable: `alias.toUpperCase()`, `alias.contains(\"berg\")`, `alias.length()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String alias = "heisenberg";\n        System.out.println(alias.toUpperCase());\n        System.out.println(alias.contains("berg"));\n        System.out.println(alias.length());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String alias = "heisenberg";\n        // Print alias in uppercase\n        System.out.println(alias.___);\n        // Print whether it contains "berg"\n        System.out.println(alias.___);\n        // Print the length\n        System.out.println(alias.___);\n    }\n}`,
    testCases: [
      { input: "", expected: "HEISENBERG", description: "Alias converted to uppercase" },
      { input: "", expected: "true", description: "Alias contains 'berg'" },
      { input: "", expected: "10", description: "Alias length is 10 characters" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "bb-java-07",
    themeId: "breaking-bad",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "The Distribution Network",
    narrative:
      "Saul Goodman manages a dynamic list of distribution partners. Badger was added, then dropped when he got arrested. Skinny Pete stepped in. Jesse needs the current count and who's second on the list.",
    prompt:
      "Import `java.util.ArrayList`. Create an `ArrayList<String>` called `network`. Add `\"Saul\"`, `\"Badger\"`, `\"Skinny Pete\"`, `\"Combo\"`. Remove `\"Badger\"`. Add `\"Huell\"`. Print the size, then print the element at index 1.",
    hint: "Use `list.add()`, `list.remove()`, `list.size()`, and `list.get(index)` for the four operations.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> network = new ArrayList<>();\n        network.add("Saul");\n        network.add("Badger");\n        network.add("Skinny Pete");\n        network.add("Combo");\n        network.remove("Badger");\n        network.add("Huell");\n        System.out.println(network.size());\n        System.out.println(network.get(1));\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> network = new ArrayList<>();\n        network.add("Saul");\n        network.add("Badger");\n        network.add("Skinny Pete");\n        network.add("Combo");\n        // Remove "Badger"\n        network.remove(___);\n        // Add "Huell"\n        network.add(___);\n        System.out.println(network.size());\n        System.out.println(network.get(1));\n    }\n}`,
    testCases: [
      { input: "", expected: "4", description: "Network has 4 members after changes" },
      { input: "", expected: "Skinny Pete", description: "Element at index 1 is Skinny Pete" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "bb-java-08",
    themeId: "breaking-bad",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "The Blue Sky Price Sheet",
    narrative:
      "Gus Fring keeps meticulous records. Each product grade maps to a price per gram. The cartel contacts need to look up prices quickly. Walter insists the A Grade price is correct and demands it be verified in the system.",
    prompt:
      "Import `java.util.HashMap`. Create a `HashMap<String, Integer>` called `prices`. Add: `\"A Grade\"` → `200`, `\"B Grade\"` → `120`, `\"C Grade\"` → `60`. Print the price for `\"A Grade\"`. Print whether `\"B Grade\"` is a key using `containsKey()`.",
    hint: "Use `map.put(key, value)`, `map.get(key)`, and `map.containsKey(key)` for the operations.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> prices = new HashMap<>();\n        prices.put("A Grade", 200);\n        prices.put("B Grade", 120);\n        prices.put("C Grade", 60);\n        System.out.println(prices.get("A Grade"));\n        System.out.println(prices.containsKey("B Grade"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> prices = new HashMap<>();\n        prices.put("A Grade", 200);\n        prices.put("B Grade", 120);\n        prices.put("C Grade", 60);\n        // Print the price for "A Grade"\n        System.out.println(prices.get(___));\n        // Print whether "B Grade" is a key\n        System.out.println(prices.containsKey(___));\n    }\n}`,
    testCases: [
      { input: "", expected: "200", description: "A Grade costs 200 per gram" },
      { input: "", expected: "true", description: "B Grade is in the price sheet" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "bb-java-09",
    themeId: "breaking-bad",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "The Cook Efficiency System",
    narrative:
      "Walter has devised a two-step efficiency calculation for his cooks. First, compute the raw output from ingredients and hours. Then classify the cook as 'Legendary', 'Efficient', or 'Amateur' based on the output. Jesse runs the numbers while Walter watches the clock.",
    prompt:
      "Write two static methods: `cookOutput(int ingredients, int hours)` that returns `ingredients * hours * 3`, and `cookRating(int ingredients, int hours)` that calls `cookOutput` and returns `\"Legendary\"` if output is 300 or above, `\"Efficient\"` if 150 or above, and `\"Amateur\"` otherwise. Call `cookRating` from `main` with `(10, 12)` and `(5, 8)` and print the results.",
    hint: "In `cookRating`, call `cookOutput(ingredients, hours)` and store in a variable, then classify with if/else.",
    solution: `public class Main {\n    public static int cookOutput(int ingredients, int hours) {\n        return ingredients * hours * 3;\n    }\n\n    public static String cookRating(int ingredients, int hours) {\n        int output = cookOutput(ingredients, hours);\n        if (output >= 300) {\n            return "Legendary";\n        } else if (output >= 150) {\n            return "Efficient";\n        } else {\n            return "Amateur";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(cookRating(10, 12));  // Legendary\n        System.out.println(cookRating(5, 8));    // Amateur\n    }\n}`,
    starterCode: `public class Main {\n    public static int cookOutput(int ingredients, int hours) {\n        // Return ingredients * hours * 3\n        return ___;\n    }\n\n    public static String cookRating(int ingredients, int hours) {\n        int output = cookOutput(ingredients, hours);\n        // Return "Legendary" if >= 300, "Efficient" if >= 150, "Amateur" otherwise\n        if (output >= 300) {\n            return ___;\n        } else if (output >= 150) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(cookRating(10, 12));  // Legendary\n        System.out.println(cookRating(5, 8));    // Amateur\n    }\n}`,
    testCases: [
      { input: "10, 12", expected: "Legendary", description: "Output 360 — Legendary cook" },
      { input: "5, 8", expected: "Amateur", description: "Output 120 — Amateur cook" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "bb-java-10",
    themeId: "breaking-bad",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "Building the Lab Report",
    narrative:
      "Walter White documents every cook with a formal lab report. The report must be built from separate data fields and printed as a single professional string. No shortcuts — Walter's standards demand it be constructed with precision using StringBuilder.",
    prompt:
      "Use a `StringBuilder` to build a lab report. Append `\"LAB REPORT | \"`, then `\"Product: Blue Sky\"`, then `\" | \"`, then `\"Purity: 99%\"`, then `\" | \"`, then `\"Batch: 7\"`. Print the result using `toString()`.",
    hint: "Create `StringBuilder sb = new StringBuilder();` then call `sb.append()` for each segment. End with `System.out.println(sb.toString())`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("LAB REPORT | ");\n        sb.append("Product: Blue Sky");\n        sb.append(" | ");\n        sb.append("Purity: 99%");\n        sb.append(" | ");\n        sb.append("Batch: 7");\n        System.out.println(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("LAB REPORT | ");\n        sb.append("Product: Blue Sky");\n        sb.append(" | ");\n        sb.append(___);\n        sb.append(" | ");\n        sb.append(___);\n        System.out.println(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "LAB REPORT | Product: Blue Sky | Purity: 99% | Batch: 7", description: "Full lab report string assembled correctly" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
