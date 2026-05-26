import type { Challenge } from "@/types";

export const gameOfThronesJavaChallenges: Challenge[] = [
  {
    id: "got-java-01",
    themeId: "game-of-thrones",
    languageId: "java",
    order: 1,
    title: "Variables & Types",
    themedTitle: "The Maester's Scroll",
    narrative:
      "Grand Maester Pycelle keeps detailed records at the Citadel. Each entry on a great lord must include their house name, the size of their army, and whether they have bent the knee to the Iron Throne. The realm's stability depends on accurate bookkeeping.",
    prompt:
      "Inside `main`, declare a `String` variable `house` set to `\"Stark\"`, an `int` variable `armySize` set to `20000`, and a `boolean` variable `bentTheKnee` set to `false`. Print each variable on its own line.",
    hint: "Use `String`, `int`, and `boolean` for the three types. Print each with `System.out.println()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String house = "Stark";\n        int armySize = 20000;\n        boolean bentTheKnee = false;\n        System.out.println(house);\n        System.out.println(armySize);\n        System.out.println(bentTheKnee);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Declare house, armySize, and bentTheKnee\n        String house = ___;\n        int armySize = ___;\n        boolean bentTheKnee = ___;\n        System.out.println(house);\n        System.out.println(armySize);\n        System.out.println(bentTheKnee);\n    }\n}`,
    testCases: [
      { input: "", expected: "Stark", description: "Prints the house name" },
      { input: "", expected: "20000", description: "Prints the army size" },
      { input: "", expected: "false", description: "Prints bentTheKnee as false" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "got-java-02",
    themeId: "game-of-thrones",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "Tyrion's Battle Assessment",
    narrative:
      "Tyrion Lannister, serving as Hand of the Queen, must assess the odds before every battle. He rates the enemy strength and returns a strategic recommendation. A mind is his weapon, and conditional logic is its sharpest edge.",
    prompt:
      "Write a static method `battleAssessment(int enemyStrength)` that returns `\"Charge!\"` if enemyStrength is below 40, `\"Hold position\"` if it is below 70, and `\"Retreat\"` otherwise. Call it from `main` with `25`, `55`, and `80`.",
    hint: "Use `if (enemyStrength < 40)`, `else if (enemyStrength < 70)`, and `else` for the three outcomes.",
    solution: `public class Main {\n    public static String battleAssessment(int enemyStrength) {\n        if (enemyStrength < 40) {\n            return "Charge!";\n        } else if (enemyStrength < 70) {\n            return "Hold position";\n        } else {\n            return "Retreat";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(battleAssessment(25));  // Charge!\n        System.out.println(battleAssessment(55));  // Hold position\n        System.out.println(battleAssessment(80));  // Retreat\n    }\n}`,
    starterCode: `public class Main {\n    public static String battleAssessment(int enemyStrength) {\n        // Return "Charge!" if < 40, "Hold position" if < 70, "Retreat" otherwise\n        if (enemyStrength < 40) {\n            return ___;\n        } else if (enemyStrength < 70) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(battleAssessment(25));  // Charge!\n        System.out.println(battleAssessment(55));  // Hold position\n        System.out.println(battleAssessment(80));  // Retreat\n    }\n}`,
    testCases: [
      { input: "25", expected: "Charge!", description: "Enemy strength 25 means Charge!" },
      { input: "55", expected: "Hold position", description: "Enemy strength 55 means Hold position" },
      { input: "80", expected: "Retreat", description: "Enemy strength 80 means Retreat" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "got-java-03",
    themeId: "game-of-thrones",
    languageId: "java",
    order: 3,
    title: "Methods",
    themedTitle: "Dragon Fire Power",
    narrative:
      "Daenerys and her dragons are Westeros's most feared weapon. A dragon's total fire power is determined by its base heat multiplied by the number of targets it can hit in a single pass. Drogon awaits the calculation.",
    prompt:
      "Write a static method `firePower(int baseHeat, int targets)` that returns the product of the two parameters. Call it from `main` with `baseHeat = 850` and `targets = 4`, and print the result.",
    hint: "Return `baseHeat * targets`. The return type is `int`.",
    solution: `public class Main {\n    public static int firePower(int baseHeat, int targets) {\n        return baseHeat * targets;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(firePower(850, 4));  // 3400\n    }\n}`,
    starterCode: `public class Main {\n    public static int firePower(int baseHeat, int targets) {\n        // Return baseHeat multiplied by targets\n        return ___;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(firePower(850, 4));  // 3400\n    }\n}`,
    testCases: [
      { input: "850, 4", expected: "3400", description: "850 base heat times 4 targets equals 3400" },
    ],
    concept: "Methods & Arithmetic",
    difficulty: "beginner",
  },
  {
    id: "got-java-04",
    themeId: "game-of-thrones",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "The Great Houses Roster",
    narrative:
      "The small council keeps a roster of the great houses of Westeros. A new alliance has been forged, and House Baratheon must replace the disgraced house at position three on the roster. The raven is already en route.",
    prompt:
      "Declare a `String[]` array called `houses` with values `{\"Stark\", \"Lannister\", \"Tully\", \"Tyrell\", \"Martell\"}`. Print the element at index 0. Then replace the element at index 2 with `\"Baratheon\"`. Print the updated element at index 2.",
    hint: "Access with `houses[0]`, assign with `houses[2] = \"Baratheon\";`, then print the new value.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] houses = {"Stark", "Lannister", "Tully", "Tyrell", "Martell"};\n        System.out.println(houses[0]);\n        houses[2] = "Baratheon";\n        System.out.println(houses[2]);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] houses = {"Stark", "Lannister", "Tully", "Tyrell", "Martell"};\n        // Print the element at index 0\n        System.out.println(___);\n        // Replace index 2 with "Baratheon"\n        houses[2] = ___;\n        System.out.println(houses[2]);\n    }\n}`,
    testCases: [
      { input: "", expected: "Stark", description: "First element is Stark" },
      { input: "", expected: "Baratheon", description: "Third element is updated to Baratheon" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "got-java-05",
    themeId: "game-of-thrones",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "Counting Jon Snow's Army",
    narrative:
      "Jon Snow must rally every living soldier north of the Wall. He has received troop counts from each castle. He needs the total number of fighting men before the Long Night begins. The Night King does not wait.",
    prompt:
      "Write a static method `totalTroops(int[] castleCounts)` that uses a `for` loop to sum all elements in the array and return the total. Call it from `main` with `{500, 1200, 300, 750, 900}` and print the result.",
    hint: "Initialize `int total = 0;` before the loop. Add each `castleCounts[i]` to `total` inside the loop. Return `total` after the loop ends.",
    solution: `public class Main {\n    public static int totalTroops(int[] castleCounts) {\n        int total = 0;\n        for (int i = 0; i < castleCounts.length; i++) {\n            total += castleCounts[i];\n        }\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int[] castleCounts = {500, 1200, 300, 750, 900};\n        System.out.println(totalTroops(castleCounts));  // 3650\n    }\n}`,
    starterCode: `public class Main {\n    public static int totalTroops(int[] castleCounts) {\n        int total = 0;\n        for (int i = 0; i < castleCounts.length; i++) {\n            // Add castleCounts[i] to total\n        }\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int[] castleCounts = {500, 1200, 300, 750, 900};\n        System.out.println(totalTroops(castleCounts));  // 3650\n    }\n}`,
    testCases: [
      { input: "{500, 1200, 300, 750, 900}", expected: "3650", description: "All castle troop counts sum to 3650" },
    ],
    concept: "Loops & Summation",
    difficulty: "intermediate",
  },
];
