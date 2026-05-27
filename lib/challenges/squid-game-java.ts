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
  {
    id: "sg-java-06",
    themeId: "squid-game",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "Player Name Processing",
    narrative:
      "The Front Man's system processes every player's name through a series of string operations before logging them in the official record. The name must be uppercased, checked for a specific substring, and measured. No detail is overlooked in the facility.",
    prompt:
      "Declare `String name = \"Seong Gi-hun\"`. Print `name.toUpperCase()`. Print whether `name.toLowerCase().contains(\"gi-hun\")`. Print `name.replace(\"Seong\", \"Player 456\")`. Print `name.length()`.",
    hint: "Chain or separate calls: `.toUpperCase()`, `.toLowerCase().contains(...)`, `.replace(oldVal, newVal)`, `.length()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String name = "Seong Gi-hun";\n        System.out.println(name.toUpperCase());\n        System.out.println(name.toLowerCase().contains("gi-hun"));\n        System.out.println(name.replace("Seong", "Player 456"));\n        System.out.println(name.length());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String name = "Seong Gi-hun";\n        System.out.println(name.___());\n        System.out.println(name.toLowerCase().contains(___));\n        System.out.println(name.replace(___, ___));\n        System.out.println(name.___());\n    }\n}`,
    testCases: [
      { input: "", expected: "SEONG GI-HUN", description: "Uppercased player name" },
      { input: "", expected: "true", description: "Lowercase name contains gi-hun" },
      { input: "", expected: "Player 456 Gi-hun", description: "Seong replaced with Player 456" },
      { input: "", expected: "12", description: "Name length is 12" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "sg-java-07",
    themeId: "squid-game",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "The Surviving Players List",
    narrative:
      "After the Dalgona honeycomb challenge, the facility updates the official survivor list. Players are added as they finish and removed if they fail. Cho Sang-woo is tracking everyone — keeping his own list, apart from the official one.",
    prompt:
      "Import `java.util.ArrayList`. Create `ArrayList<String> survivors = new ArrayList<>()`. Add `\"Gi-hun\"`, `\"Sae-byeok\"`, `\"Sang-woo\"`, and `\"Ali\"`. Print the size. Then remove `\"Ali\"` using `survivors.remove(\"Ali\")`. Print the size again.",
    hint: "Use `survivors.add(...)` to add. `survivors.size()` gives count. `survivors.remove(\"Ali\")` removes by value.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> survivors = new ArrayList<>();\n        survivors.add("Gi-hun");\n        survivors.add("Sae-byeok");\n        survivors.add("Sang-woo");\n        survivors.add("Ali");\n        System.out.println(survivors.size());\n        survivors.remove("Ali");\n        System.out.println(survivors.size());\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> survivors = new ArrayList<>();\n        survivors.add(___);\n        survivors.add(___);\n        survivors.add(___);\n        survivors.add(___);\n        System.out.println(survivors.size());\n        survivors.remove(___);\n        System.out.println(survivors.size());\n    }\n}`,
    testCases: [
      { input: "", expected: "4", description: "Four survivors initially" },
      { input: "", expected: "3", description: "Three survivors after Ali is removed" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "sg-java-08",
    themeId: "squid-game",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "Game Score Ledger",
    narrative:
      "The VIPs track each player's score across the games. The Front Man maintains a map of player names to their current scores. One lookup can mean the difference between being watched and being forgotten.",
    prompt:
      "Import `java.util.HashMap`. Create `HashMap<String, Integer> scores = new HashMap<>()`. Put `\"Gi-hun\"` with `88`, `\"Sae-byeok\"` with `95`, and `\"Sang-woo\"` with `91`. Print whether the map `containsKey(\"Sae-byeok\")`. Print `scores.get(\"Sang-woo\")`.",
    hint: "Use `scores.put(key, value)`. `containsKey(...)` returns boolean. `get(...)` retrieves a stored value.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> scores = new HashMap<>();\n        scores.put("Gi-hun", 88);\n        scores.put("Sae-byeok", 95);\n        scores.put("Sang-woo", 91);\n        System.out.println(scores.containsKey("Sae-byeok"));\n        System.out.println(scores.get("Sang-woo"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> scores = new HashMap<>();\n        scores.put(___, ___);\n        scores.put(___, ___);\n        scores.put(___, ___);\n        System.out.println(scores.containsKey("Sae-byeok"));\n        System.out.println(scores.get("Sang-woo"));\n    }\n}`,
    testCases: [
      { input: "", expected: "true", description: "Sae-byeok is in the score map" },
      { input: "", expected: "91", description: "Sang-woo's score is 91" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "sg-java-09",
    themeId: "squid-game",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "The Glass Bridge Odds",
    narrative:
      "The Glass Bridge requires players to pick between two panels — one tempered, one not. The probability of crossing safely decreases with each step. The Front Man's analysts wrote a two-method system to compute the survival odds for any number of steps.",
    prompt:
      "Write `safeChance(int steps)` that returns `(int) Math.pow(50, steps)` — representing percentage-like odds. Write `survivalMessage(int steps)` that calls `safeChance(steps)` and returns `\"Odds: \" + safeChance(steps)`. In `main`, print `survivalMessage(1)` and `survivalMessage(2)`.",
    hint: "Use `(int) Math.pow(50, steps)` for the power calculation. One method calls the other by name.",
    solution: `public class Main {\n    public static int safeChance(int steps) {\n        return (int) Math.pow(50, steps);\n    }\n\n    public static String survivalMessage(int steps) {\n        return "Odds: " + safeChance(steps);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(survivalMessage(1));\n        System.out.println(survivalMessage(2));\n    }\n}`,
    starterCode: `public class Main {\n    public static int safeChance(int steps) {\n        return (int) Math.pow(50, steps);\n    }\n\n    public static String survivalMessage(int steps) {\n        // Return "Odds: " concatenated with safeChance(steps)\n        return ___;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(survivalMessage(1));\n        System.out.println(survivalMessage(2));\n    }\n}`,
    testCases: [
      { input: "1", expected: "Odds: 50", description: "1 step gives 50 odds" },
      { input: "2", expected: "Odds: 2500", description: "2 steps gives 2500 odds" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "sg-java-10",
    themeId: "squid-game",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "The Elimination Announcement",
    narrative:
      "After each game, the PA system broadcasts the names of eliminated players in sequence. The system builds the announcement string player by player using a StringBuilder — because the Front Man's facility is nothing if not efficient.",
    prompt:
      "Create a `String[] eliminated = {\"Player 001\", \"Player 017\", \"Player 069\", \"Player 111\"}`. Create a `StringBuilder sb`. Loop through the array and append each name followed by `\" eliminated\\n\"`. Print `sb.toString()`.",
    hint: "Use a for-each loop: `for (String p : eliminated)`. Append `p + \" eliminated\\n\"` each iteration.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] eliminated = {"Player 001", "Player 017", "Player 069", "Player 111"};\n        StringBuilder sb = new StringBuilder();\n        for (String p : eliminated) {\n            sb.append(p + " eliminated\\n");\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] eliminated = {"Player 001", "Player 017", "Player 069", "Player 111"};\n        StringBuilder sb = new StringBuilder();\n        for (String p : eliminated) {\n            sb.append(___);\n        }\n        System.out.print(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "Player 001 eliminated", description: "First elimination in the announcement" },
      { input: "", expected: "Player 111 eliminated", description: "Last elimination in the announcement" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
