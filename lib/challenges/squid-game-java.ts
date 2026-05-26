import type { Challenge } from "@/types";

export const squidGameJavaChallenges: Challenge[] = [
  {
    id: "sg-java-01",
    themeId: "squid-game",
    languageId: "java",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Player 456's Entry Record",
    narrative:
      "The Front Man requires a complete entry record for every contestant before the games begin. The record holds the player's alias, their player number, and whether they have signed the consent form. There are 456 players. The games are about to start.",
    prompt:
      "Inside `main`, declare a `String` variable `playerName` set to `\"Seong Gi-hun\"`, an `int` variable `playerNumber` set to `456`, and a `boolean` variable `consentSigned` set to `true`. Print each variable on its own line.",
    hint: "Use `String`, `int`, and `boolean` for the three types. Print each with `System.out.println()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String playerName = "Seong Gi-hun";\n        int playerNumber = 456;\n        boolean consentSigned = true;\n        System.out.println(playerName);\n        System.out.println(playerNumber);\n        System.out.println(consentSigned);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Declare playerName, playerNumber, and consentSigned\n        String playerName = ___;\n        int playerNumber = ___;\n        boolean consentSigned = ___;\n        System.out.println(playerName);\n        System.out.println(playerNumber);\n        System.out.println(consentSigned);\n    }\n}`,
    testCases: [
      { input: "", expected: "Seong Gi-hun", description: "Prints the player name" },
      { input: "", expected: "456", description: "Prints the player number" },
      { input: "", expected: "true", description: "Prints consent status as true" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "sg-java-02",
    themeId: "squid-game",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "Red Light, Green Light",
    narrative:
      "The giant doll has eyes that see everything. When the light is green, players run. When it is red, they must freeze. Any movement detected on red means elimination. Write the logic that decides a player's fate based on the current light and their movement.",
    prompt:
      "Write a static method `lightCheck(String light, boolean moved)` that returns `\"Eliminated\"` if `light` equals `\"red\"` and `moved` is `true`, `\"Safe\"` if light is `\"red\"` and `moved` is `false`, and `\"Keep running\"` if light is `\"green\"`. Call it from `main` with three test combinations.",
    hint: "Use nested conditions or combine with `&&`: `if (light.equals(\"red\") && moved)`. Use `.equals()` for String comparison.",
    solution: `public class Main {\n    public static String lightCheck(String light, boolean moved) {\n        if (light.equals("red") && moved) {\n            return "Eliminated";\n        } else if (light.equals("red")) {\n            return "Safe";\n        } else {\n            return "Keep running";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(lightCheck("red", true));   // Eliminated\n        System.out.println(lightCheck("red", false));  // Safe\n        System.out.println(lightCheck("green", true)); // Keep running\n    }\n}`,
    starterCode: `public class Main {\n    public static String lightCheck(String light, boolean moved) {\n        // "Eliminated" if red and moved\n        // "Safe" if red and not moved\n        // "Keep running" if green\n        if (light.equals("red") && moved) {\n            return ___;\n        } else if (light.equals("red")) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(lightCheck("red", true));   // Eliminated\n        System.out.println(lightCheck("red", false));  // Safe\n        System.out.println(lightCheck("green", true)); // Keep running\n    }\n}`,
    testCases: [
      { input: "red, true", expected: "Eliminated", description: "Moving on red means elimination" },
      { input: "red, false", expected: "Safe", description: "Staying still on red is safe" },
      { input: "green, true", expected: "Keep running", description: "Green light means keep running" },
    ],
    concept: "Conditionals & Boolean Logic",
    difficulty: "beginner",
  },
  {
    id: "sg-java-03",
    themeId: "squid-game",
    languageId: "java",
    order: 3,
    title: "Methods",
    themedTitle: "Prize Money per Survivor",
    narrative:
      "The prize pool grows with each elimination. If the remaining survivors were to split the total prize equally, how much would each receive? The VIPs are watching the numbers closely. Write a method to calculate the share.",
    prompt:
      "Write a static method `prizeShare(int totalPrize, int survivors)` that returns the integer result of dividing `totalPrize` by `survivors`. Call it from `main` with `totalPrize = 45600000` and `survivors = 6`, and print the result.",
    hint: "Use integer division `/`. The return type is `int`. Be careful: `int / int` in Java discards the remainder.",
    solution: `public class Main {\n    public static int prizeShare(int totalPrize, int survivors) {\n        return totalPrize / survivors;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(prizeShare(45600000, 6));  // 7600000\n    }\n}`,
    starterCode: `public class Main {\n    public static int prizeShare(int totalPrize, int survivors) {\n        // Return totalPrize divided by survivors\n        return ___;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(prizeShare(45600000, 6));  // 7600000\n    }\n}`,
    testCases: [
      { input: "45600000, 6", expected: "7600000", description: "45600000 divided by 6 equals 7600000" },
    ],
    concept: "Methods & Division",
    difficulty: "beginner",
  },
  {
    id: "sg-java-04",
    themeId: "squid-game",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "The Pink Guards' Post Numbers",
    narrative:
      "The masked pink guards are assigned to numbered posts throughout the facility. The post assignments are stored in an array. One guard has been reassigned, and the array must be updated before the next game begins. The Front Man does not tolerate delays.",
    prompt:
      "Declare an `int[]` array called `posts` with values `{11, 22, 33, 44, 55}`. Print the element at index 4. Then replace the element at index 0 with `99`. Print the updated element at index 0.",
    hint: "Access with `posts[4]`, assign with `posts[0] = 99;`, then print `posts[0]`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        int[] posts = {11, 22, 33, 44, 55};\n        System.out.println(posts[4]);\n        posts[0] = 99;\n        System.out.println(posts[0]);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] posts = {11, 22, 33, 44, 55};\n        // Print the element at index 4\n        System.out.println(___);\n        // Replace index 0 with 99\n        posts[0] = ___;\n        System.out.println(posts[0]);\n    }\n}`,
    testCases: [
      { input: "", expected: "55", description: "Element at index 4 is 55" },
      { input: "", expected: "99", description: "Element at index 0 is updated to 99" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "sg-java-05",
    themeId: "squid-game",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "Counting the Survivors",
    narrative:
      "After each game, the facility logs the number of players still alive per round. The organizers need the total survivor count across all rounds to verify the prize pool additions. Player 456 is keeping his own tally just in case.",
    prompt:
      "Write a static method `totalSurvivors(int[] roundCounts)` that uses a `for` loop to sum all values in the array and return the total. Call it from `main` with `{201, 187, 79, 16, 1}` and print the result.",
    hint: "Declare `int total = 0;` before the loop. Add each `roundCounts[i]` inside the loop. Return `total`.",
    solution: `public class Main {\n    public static int totalSurvivors(int[] roundCounts) {\n        int total = 0;\n        for (int i = 0; i < roundCounts.length; i++) {\n            total += roundCounts[i];\n        }\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int[] roundCounts = {201, 187, 79, 16, 1};\n        System.out.println(totalSurvivors(roundCounts));  // 484\n    }\n}`,
    starterCode: `public class Main {\n    public static int totalSurvivors(int[] roundCounts) {\n        int total = 0;\n        for (int i = 0; i < roundCounts.length; i++) {\n            // Add roundCounts[i] to total\n        }\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int[] roundCounts = {201, 187, 79, 16, 1};\n        System.out.println(totalSurvivors(roundCounts));  // 484\n    }\n}`,
    testCases: [
      { input: "{201, 187, 79, 16, 1}", expected: "484", description: "All survivor counts sum to 484" },
    ],
    concept: "Loops & Summation",
    difficulty: "intermediate",
  },
];
