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
  {
    id: "rm-java-06",
    themeId: "rick-and-morty",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "Meeseeks Identity Verification",
    narrative:
      "Mr. Meeseeks exist for one purpose and one purpose only. Before a Meeseeks can be deployed, the Citadel of Ricks verifies its ID string — checking it's uppercase, confirming it contains the word 'MEESEEKS', and measuring its length. Rick demands precision.",
    prompt:
      "Declare `String id = \"mr. meeseeks\"`. Use `str.toUpperCase()` to convert it and store in `upper`. Use `upper.contains(\"MEESEEKS\")` and print the result. Then print `upper.length()`.",
    hint: "Call `id.toUpperCase()` and assign to a new variable. Then call `.contains()` and `.length()` on that variable.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String id = "mr. meeseeks";\n        String upper = id.toUpperCase();\n        System.out.println(upper);\n        System.out.println(upper.contains("MEESEEKS"));\n        System.out.println(upper.length());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String id = "mr. meeseeks";\n        String upper = id.___();\n        System.out.println(upper);\n        System.out.println(upper.contains(___));\n        System.out.println(upper.___());\n    }\n}`,
    testCases: [
      { input: "", expected: "MR. MEESEEKS", description: "Uppercased ID string" },
      { input: "", expected: "true", description: "Contains MEESEEKS" },
      { input: "", expected: "12", description: "Length of MR. MEESEEKS is 12" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "rm-java-07",
    themeId: "rick-and-morty",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "Interdimensional Council Roster",
    narrative:
      "The Citadel of Ricks maintains a roster of every Rick variant on the council. New Ricks are added when they graduate from the portal gun qualification test. Rick C-137 refuses to attend, but the list must still be accurate.",
    prompt:
      "Import `java.util.ArrayList`. Create `ArrayList<String> council = new ArrayList<>()`. Add `\"Rick C-137\"`, `\"Rick D-99\"`, and `\"Rick J-22\"`. Print the size. Then print the element at index 1.",
    hint: "Use `council.add(\"...\")` to add elements. `council.size()` gives the count. `council.get(1)` gets the second element.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> council = new ArrayList<>();\n        council.add("Rick C-137");\n        council.add("Rick D-99");\n        council.add("Rick J-22");\n        System.out.println(council.size());\n        System.out.println(council.get(1));\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> council = new ArrayList<>();\n        council.add(___);\n        council.add(___);\n        council.add(___);\n        System.out.println(council.size());\n        System.out.println(council.get(1));\n    }\n}`,
    testCases: [
      { input: "", expected: "3", description: "Three Ricks on the council" },
      { input: "", expected: "Rick D-99", description: "Index 1 is Rick D-99" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "rm-java-08",
    themeId: "rick-and-morty",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "Portal Gun Dimension Scores",
    narrative:
      "Rick rates every dimension he visits on a scale of 1 to 100. He keeps the scores in a map so he can quickly check whether a dimension is worth revisiting. Dimension C-137 always gets a 95. He's biased and he doesn't care.",
    prompt:
      "Import `java.util.HashMap`. Create `HashMap<String, Integer> scores = new HashMap<>()`. Put `\"C-137\"` with value `95`, `\"Froopyland\"` with `72`, and `\"Pizza\"` with `88`. Print whether it `containsKey(\"Froopyland\")`. Then print `scores.get(\"C-137\")`.",
    hint: "Use `scores.put(key, value)` to add entries. `scores.containsKey(\"Froopyland\")` returns a boolean. `scores.get(\"C-137\")` retrieves a value.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> scores = new HashMap<>();\n        scores.put("C-137", 95);\n        scores.put("Froopyland", 72);\n        scores.put("Pizza", 88);\n        System.out.println(scores.containsKey("Froopyland"));\n        System.out.println(scores.get("C-137"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> scores = new HashMap<>();\n        scores.put(___, ___);\n        scores.put(___, ___);\n        scores.put(___, ___);\n        System.out.println(scores.containsKey("Froopyland"));\n        System.out.println(scores.get("C-137"));\n    }\n}`,
    testCases: [
      { input: "", expected: "true", description: "Froopyland is in the map" },
      { input: "", expected: "95", description: "C-137 scores a 95" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "rm-java-09",
    themeId: "rick-and-morty",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "Portal Fluid Chain Reaction",
    narrative:
      "Rick's portal fluid synthesis involves a chain of calculations. First you compute the raw energy from a dimension code, then you apply a portal efficiency multiplier. One method calls the other. Morty tried to understand it once. He gave up after the second method.",
    prompt:
      "Write two static methods: `dimensionEnergy(int code)` that returns `code * 42`, and `portalCost(int code)` that calls `dimensionEnergy(code)` and returns the result divided by `7`. In `main`, print `portalCost(14)`.",
    hint: "Inside `portalCost`, call `dimensionEnergy(code)` and divide the result by 7. Methods can call other methods in the same class.",
    solution: `public class Main {\n    public static int dimensionEnergy(int code) {\n        return code * 42;\n    }\n\n    public static int portalCost(int code) {\n        return dimensionEnergy(code) / 7;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(portalCost(14));  // 84\n    }\n}`,
    starterCode: `public class Main {\n    public static int dimensionEnergy(int code) {\n        return code * 42;\n    }\n\n    public static int portalCost(int code) {\n        // Call dimensionEnergy(code) and divide by 7\n        return ___ / 7;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(portalCost(14));  // 84\n    }\n}`,
    testCases: [
      { input: "14", expected: "84", description: "portalCost(14) = dimensionEnergy(14)/7 = 588/7 = 84" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "rm-java-10",
    themeId: "rick-and-morty",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "Wubba Lubba Dub Dub Generator",
    narrative:
      "Rick's catchphrase needs to be assembled dynamically. The Citadel archives require a full list of Rick's signature outbursts, each appended in sequence and then output as a single string. It's science, Morty.",
    prompt:
      "Create a `StringBuilder sb = new StringBuilder()`. In a `for` loop from 1 to 4, append `\"Wubba Lubba Dub Dub #\" + i + \"\\n\"`. After the loop, print `sb.toString()`.",
    hint: "Use `sb.append(\"...\")` inside the loop. Call `sb.toString()` to convert to a String for printing.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 1; i <= 4; i++) {\n            sb.append("Wubba Lubba Dub Dub #" + i + "\\n");\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 1; i <= 4; i++) {\n            sb.append(___);\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "Wubba Lubba Dub Dub #1", description: "First catchphrase in the string" },
      { input: "", expected: "Wubba Lubba Dub Dub #4", description: "Fourth catchphrase in the string" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
