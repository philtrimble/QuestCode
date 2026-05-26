import type { Challenge } from "@/types";

export const rickAndMortyJavaChallenges: Challenge[] = [
  {
    id: "rm-java-01",
    themeId: "rick-and-morty",
    languageId: "java",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Portal Gun Configuration",
    narrative:
      "Rick's portal gun needs to be calibrated before every interdimensional jump. The configuration file stores the destination dimension name, the portal charge level, and whether the stabilizer is online. Morty, write the code before Rick does it for you.",
    prompt:
      "Inside `main`, declare a `String` variable `dimension` set to `\"C-137\"`, an `int` variable `charge` set to `100`, and a `boolean` variable `stabilizerOnline` set to `true`. Print each variable on its own line.",
    hint: "Use `String`, `int`, and `boolean` for your types. Print each with `System.out.println()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String dimension = "C-137";\n        int charge = 100;\n        boolean stabilizerOnline = true;\n        System.out.println(dimension);\n        System.out.println(charge);\n        System.out.println(stabilizerOnline);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Declare dimension, charge, and stabilizerOnline\n        String dimension = ___;\n        int charge = ___;\n        boolean stabilizerOnline = ___;\n        System.out.println(dimension);\n        System.out.println(charge);\n        System.out.println(stabilizerOnline);\n    }\n}`,
    testCases: [
      { input: "", expected: "C-137", description: "Prints the dimension C-137" },
      { input: "", expected: "100", description: "Prints the charge level 100" },
      { input: "", expected: "true", description: "Prints stabilizer status as true" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "rm-java-02",
    themeId: "rick-and-morty",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "Szechuan Sauce Rarity Rating",
    narrative:
      "Rick is obsessed with Szechuan sauce. He rates every batch he finds across dimensions: legendary, rare, common, or fake. He needs a method that classifies a sauce score so he can prioritize which dimension to raid next.",
    prompt:
      "Write a static method `sauceRating(int score)` that returns `\"Legendary\"` if score is 90 or above, `\"Rare\"` if score is 60 or above, `\"Common\"` if score is 30 or above, and `\"Fake\"` otherwise. Call it from `main` with `95`, `70`, `40`, and `10`.",
    hint: "Check from the highest threshold downward: `>= 90`, `>= 60`, `>= 30`, then `else`.",
    solution: `public class Main {\n    public static String sauceRating(int score) {\n        if (score >= 90) {\n            return "Legendary";\n        } else if (score >= 60) {\n            return "Rare";\n        } else if (score >= 30) {\n            return "Common";\n        } else {\n            return "Fake";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(sauceRating(95));  // Legendary\n        System.out.println(sauceRating(70));  // Rare\n        System.out.println(sauceRating(40));  // Common\n        System.out.println(sauceRating(10));  // Fake\n    }\n}`,
    starterCode: `public class Main {\n    public static String sauceRating(int score) {\n        // Return "Legendary" >= 90, "Rare" >= 60,\n        // "Common" >= 30, "Fake" otherwise\n        if (score >= 90) {\n            return ___;\n        } else if (score >= 60) {\n            return ___;\n        } else if (score >= 30) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(sauceRating(95));  // Legendary\n        System.out.println(sauceRating(70));  // Rare\n        System.out.println(sauceRating(40));  // Common\n        System.out.println(sauceRating(10));  // Fake\n    }\n}`,
    testCases: [
      { input: "95", expected: "Legendary", description: "95 is a Legendary sauce" },
      { input: "70", expected: "Rare", description: "70 is a Rare sauce" },
      { input: "40", expected: "Common", description: "40 is a Common sauce" },
      { input: "10", expected: "Fake", description: "10 is a Fake sauce" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "rm-java-03",
    themeId: "rick-and-morty",
    languageId: "java",
    order: 3,
    title: "Methods",
    themedTitle: "Interdimensional Travel Distance",
    narrative:
      "Rick's portal gun calculates the travel cost based on the distance between dimensions. Distance is measured in megamiles, and each megamile of interdimensional travel costs a fixed amount of portal fluid. Rick needs the total fluid cost.",
    prompt:
      "Write a static method `travelCost(int megamiles, int fluidPerMegamile)` that returns the product of the two parameters. Call it from `main` with `megamiles = 420` and `fluidPerMegamile = 3`, and print the result.",
    hint: "Multiply the two parameters and return the result. The return type is `int`.",
    solution: `public class Main {\n    public static int travelCost(int megamiles, int fluidPerMegamile) {\n        return megamiles * fluidPerMegamile;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(travelCost(420, 3));  // 1260\n    }\n}`,
    starterCode: `public class Main {\n    public static int travelCost(int megamiles, int fluidPerMegamile) {\n        // Return megamiles multiplied by fluidPerMegamile\n        return ___;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(travelCost(420, 3));  // 1260\n    }\n}`,
    testCases: [
      { input: "420, 3", expected: "1260", description: "420 megamiles at 3 fluid each costs 1260" },
    ],
    concept: "Methods & Arithmetic",
    difficulty: "beginner",
  },
  {
    id: "rm-java-04",
    themeId: "rick-and-morty",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "Morty's Dimension Log",
    narrative:
      "Morty keeps a log of every dimension he and Rick have visited. The Citadel has added a new dimension to the list, replacing an old entry that turned out to be a duplicate. Morty needs to update the array before Rick notices.",
    prompt:
      "Declare a `String[]` array called `dimensions` with values `{\"C-137\", \"J-19 Zeta 7\", \"Replacement\", \"Pizza\", \"K-83\"}`. Print the element at index 1. Then replace the element at index 2 with `\"Froopyland\"`. Print the updated element at index 2.",
    hint: "Access with `dimensions[1]`, assign with `dimensions[2] = \"Froopyland\";`, then print the new value.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] dimensions = {"C-137", "J-19 Zeta 7", "Replacement", "Pizza", "K-83"};\n        System.out.println(dimensions[1]);\n        dimensions[2] = "Froopyland";\n        System.out.println(dimensions[2]);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] dimensions = {"C-137", "J-19 Zeta 7", "Replacement", "Pizza", "K-83"};\n        // Print the element at index 1\n        System.out.println(___);\n        // Replace index 2 with "Froopyland"\n        dimensions[2] = ___;\n        System.out.println(dimensions[2]);\n    }\n}`,
    testCases: [
      { input: "", expected: "J-19 Zeta 7", description: "Element at index 1 is J-19 Zeta 7" },
      { input: "", expected: "Froopyland", description: "Element at index 2 is updated to Froopyland" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "rm-java-05",
    themeId: "rick-and-morty",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "Total Portal Gun Energy",
    narrative:
      "Rick has a list of portal gun energy readings from each interdimensional jump on their last adventure. He needs the total energy consumed to know whether he needs to recharge before the next mission. Summer says the math isn't that hard, Rick.",
    prompt:
      "Write a static method `totalEnergy(int[] readings)` that uses a `for` loop to sum all elements and return the total. Call it from `main` with `{50, 120, 75, 200, 30, 95}` and print the result.",
    hint: "Declare `int total = 0;` before the loop. Add `readings[i]` to `total` in each iteration. Return `total`.",
    solution: `public class Main {\n    public static int totalEnergy(int[] readings) {\n        int total = 0;\n        for (int i = 0; i < readings.length; i++) {\n            total += readings[i];\n        }\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int[] readings = {50, 120, 75, 200, 30, 95};\n        System.out.println(totalEnergy(readings));  // 570\n    }\n}`,
    starterCode: `public class Main {\n    public static int totalEnergy(int[] readings) {\n        int total = 0;\n        for (int i = 0; i < readings.length; i++) {\n            // Add readings[i] to total\n        }\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int[] readings = {50, 120, 75, 200, 30, 95};\n        System.out.println(totalEnergy(readings));  // 570\n    }\n}`,
    testCases: [
      { input: "{50, 120, 75, 200, 30, 95}", expected: "570", description: "All energy readings sum to 570" },
    ],
    concept: "Loops & Summation",
    difficulty: "intermediate",
  },
];
