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
  {
    id: "got-java-06",
    themeId: "game-of-thrones",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "The Raven's Message",
    narrative:
      "A raven arrives at Castle Black with a critical message from the south. Jon Snow needs to read it in full uppercase for the entire Night's Watch to hear, confirm it mentions 'winter', and check its length against the raven registry.",
    prompt:
      "Inside `main`, declare a `String` variable `message` set to `\"winter is coming from the north\"`. Print it in all uppercase using `toUpperCase()`. Print whether it contains `\"winter\"` using `contains()`. Print its length using `length()`.",
    hint: "Call `message.toUpperCase()`, `message.contains(\"winter\")`, and `message.length()` — each in its own `System.out.println()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String message = "winter is coming from the north";\n        System.out.println(message.toUpperCase());\n        System.out.println(message.contains("winter"));\n        System.out.println(message.length());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String message = "winter is coming from the north";\n        // Print message in uppercase\n        System.out.println(message.___);\n        // Print whether it contains "winter"\n        System.out.println(message.___);\n        // Print the length\n        System.out.println(message.___);\n    }\n}`,
    testCases: [
      { input: "", expected: "WINTER IS COMING FROM THE NORTH", description: "Message in uppercase" },
      { input: "", expected: "true", description: "Message contains 'winter'" },
      { input: "", expected: "31", description: "Message length is 31 characters" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "got-java-07",
    themeId: "game-of-thrones",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "The Dragon Roster",
    narrative:
      "Daenerys's three dragons are her greatest weapons. When Viserion fell beyond the Wall, the roster had to be updated. Rhaegal was later added to a secondary registry. Tyrion needs the current count and the second dragon's name.",
    prompt:
      "Import `java.util.ArrayList`. Create an `ArrayList<String>` called `dragons`. Add `\"Drogon\"`, `\"Rhaegal\"`, `\"Viserion\"`. Remove `\"Viserion\"`. Add `\"Ghost\"`. Print the size, then print the element at index 1.",
    hint: "Use `list.add()`, `list.remove()`, `list.size()`, and `list.get(index)` for the four operations.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> dragons = new ArrayList<>();\n        dragons.add("Drogon");\n        dragons.add("Rhaegal");\n        dragons.add("Viserion");\n        dragons.remove("Viserion");\n        dragons.add("Ghost");\n        System.out.println(dragons.size());\n        System.out.println(dragons.get(1));\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> dragons = new ArrayList<>();\n        dragons.add("Drogon");\n        dragons.add("Rhaegal");\n        dragons.add("Viserion");\n        // Remove "Viserion"\n        dragons.remove(___);\n        // Add "Ghost"\n        dragons.add(___);\n        System.out.println(dragons.size());\n        System.out.println(dragons.get(1));\n    }\n}`,
    testCases: [
      { input: "", expected: "3", description: "Roster has 3 entries after changes" },
      { input: "", expected: "Rhaegal", description: "Element at index 1 is Rhaegal" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "got-java-08",
    themeId: "game-of-thrones",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "The Great Houses Allegiance Map",
    narrative:
      "The Small Council tracks how many bannermen each house can field. Tyrion needs to look up the Stark count and verify whether the Martells are in the registry before committing to the alliance.",
    prompt:
      "Import `java.util.HashMap`. Create a `HashMap<String, Integer>` called `allegiances`. Add: `\"Stark\"` → `20000`, `\"Lannister\"` → `35000`, `\"Tyrell\"` → `25000`. Print the bannerman count for `\"Stark\"`. Print whether `\"Martell\"` is a key using `containsKey()`.",
    hint: "Use `map.put(key, value)`, `map.get(key)`, and `map.containsKey(key)` for the operations.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> allegiances = new HashMap<>();\n        allegiances.put("Stark", 20000);\n        allegiances.put("Lannister", 35000);\n        allegiances.put("Tyrell", 25000);\n        System.out.println(allegiances.get("Stark"));\n        System.out.println(allegiances.containsKey("Martell"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> allegiances = new HashMap<>();\n        allegiances.put("Stark", 20000);\n        allegiances.put("Lannister", 35000);\n        allegiances.put("Tyrell", 25000);\n        // Print the bannerman count for "Stark"\n        System.out.println(allegiances.get(___));\n        // Print whether "Martell" is a key\n        System.out.println(allegiances.containsKey(___));\n    }\n}`,
    testCases: [
      { input: "", expected: "20000", description: "Stark has 20000 bannermen" },
      { input: "", expected: "false", description: "Martell is not in the allegiance map" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "got-java-09",
    themeId: "game-of-thrones",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "The Battle of the Bastards Calculator",
    narrative:
      "Jon Snow needs a two-step battle outcome system. First, compute a battle score from troops and morale. Then classify the outcome as 'Victory', 'Stalemate', or 'Defeat'. The fate of the North depends on the calculation.",
    prompt:
      "Write two static methods: `battleScore(int troops, int morale)` that returns `troops * morale / 100`, and `battleOutcome(int troops, int morale)` that calls `battleScore` and returns `\"Victory\"` if score is 80 or above, `\"Stalemate\"` if 40 or above, and `\"Defeat\"` otherwise. Call `battleOutcome` from `main` with `(5000, 90)` and `(1000, 30)` and print the results.",
    hint: "In `battleOutcome`, call `battleScore(troops, morale)` and store the result, then classify with if/else.",
    solution: `public class Main {\n    public static int battleScore(int troops, int morale) {\n        return troops * morale / 100;\n    }\n\n    public static String battleOutcome(int troops, int morale) {\n        int score = battleScore(troops, morale);\n        if (score >= 80) {\n            return "Victory";\n        } else if (score >= 40) {\n            return "Stalemate";\n        } else {\n            return "Defeat";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(battleOutcome(5000, 90));  // Victory\n        System.out.println(battleOutcome(1000, 30));  // Defeat\n    }\n}`,
    starterCode: `public class Main {\n    public static int battleScore(int troops, int morale) {\n        // Return troops * morale / 100\n        return ___;\n    }\n\n    public static String battleOutcome(int troops, int morale) {\n        int score = battleScore(troops, morale);\n        // Return "Victory" if >= 80, "Stalemate" if >= 40, "Defeat" otherwise\n        if (score >= 80) {\n            return ___;\n        } else if (score >= 40) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(battleOutcome(5000, 90));  // Victory\n        System.out.println(battleOutcome(1000, 30));  // Defeat\n    }\n}`,
    testCases: [
      { input: "5000, 90", expected: "Victory", description: "Score 4500 — Victory" },
      { input: "1000, 30", expected: "Defeat", description: "Score 300 — Victory" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "got-java-10",
    themeId: "game-of-thrones",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "The Royal Decree",
    narrative:
      "Every royal decree from the Iron Throne must be formally assembled from its component parts before being read aloud in court. Tyrion drafts each segment separately, then uses StringBuilder to compose the final proclamation.",
    prompt:
      "Use a `StringBuilder` to build a decree. Append `\"ROYAL DECREE | \"`, then `\"From: The Iron Throne\"`, then `\" | \"`, then `\"To: All Subjects\"`, then `\" | \"`, then `\"Let it be known: Winter has come\"`. Print the result using `toString()`.",
    hint: "Create `StringBuilder sb = new StringBuilder();` then call `sb.append()` for each part. End with `System.out.println(sb.toString())`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("ROYAL DECREE | ");\n        sb.append("From: The Iron Throne");\n        sb.append(" | ");\n        sb.append("To: All Subjects");\n        sb.append(" | ");\n        sb.append("Let it be known: Winter has come");\n        System.out.println(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("ROYAL DECREE | ");\n        sb.append("From: The Iron Throne");\n        sb.append(" | ");\n        sb.append(___);\n        sb.append(" | ");\n        sb.append(___);\n        System.out.println(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "ROYAL DECREE | From: The Iron Throne | To: All Subjects | Let it be known: Winter has come", description: "Full decree assembled correctly" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
