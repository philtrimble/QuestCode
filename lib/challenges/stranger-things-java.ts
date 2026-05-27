import type { Challenge } from "@/types";

export const strangerThingsJavaChallenges: Challenge[] = [
  {
    id: "st-java-01",
    themeId: "stranger-things",
    languageId: "java",
    order: 1,
    title: "Variables & Types",
    themedTitle: "Eleven's Lab File",
    narrative:
      "Chief Hopper needs to create an official file on Eleven. The file must record her name, her experiment number, and whether she has been located. Dr. Brenner's records are strict — every field must be the right type.",
    prompt:
      "Inside `main`, declare a `String` variable `name` set to `\"Eleven\"`, an `int` variable `experimentNumber` set to `11`, and a `boolean` variable `located` set to `true`. Print each variable on its own line using `System.out.println()`.",
    hint: "Java strings use double quotes. Declare each variable on its own line: `String name = \"Eleven\";`",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String name = "Eleven";\n        int experimentNumber = 11;\n        boolean located = true;\n        System.out.println(name);\n        System.out.println(experimentNumber);\n        System.out.println(located);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Declare name, experimentNumber, and located\n        String name = ___;\n        int experimentNumber = ___;\n        boolean located = ___;\n        System.out.println(name);\n        System.out.println(experimentNumber);\n        System.out.println(located);\n    }\n}`,
    testCases: [
      { input: "", expected: "Eleven", description: "Prints the name Eleven" },
      { input: "", expected: "11", description: "Prints the experiment number 11" },
      { input: "", expected: "true", description: "Prints the located status as true" },
    ],
    concept: "Variables & Data Types",
    difficulty: "beginner",
  },
  {
    id: "st-java-02",
    themeId: "stranger-things",
    languageId: "java",
    order: 2,
    title: "Conditionals",
    themedTitle: "Walkie-Talkie Signal Check",
    narrative:
      "Dustin and the gang rely on their walkie-talkies to warn each other about Demogorgon sightings. The radios have a signal strength from 0 to 100. Write a method to report whether the signal is strong, weak, or dead — lives depend on it.",
    prompt:
      "Write a static method `signalStatus(int strength)` that returns `\"Strong\"` if strength is 70 or above, `\"Weak\"` if it is between 30 and 69 (inclusive), and `\"Dead\"` if it is below 30. Call it from `main` with three different values and print the results.",
    hint: "Use `if`, `else if`, and `else` to cover the three ranges. Remember `>=` and `<` for boundary comparisons.",
    solution: `public class Main {\n    public static String signalStatus(int strength) {\n        if (strength >= 70) {\n            return "Strong";\n        } else if (strength >= 30) {\n            return "Weak";\n        } else {\n            return "Dead";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(signalStatus(85));  // Strong\n        System.out.println(signalStatus(50));  // Weak\n        System.out.println(signalStatus(10));  // Dead\n    }\n}`,
    starterCode: `public class Main {\n    public static String signalStatus(int strength) {\n        // Return "Strong" if >= 70, "Weak" if >= 30, "Dead" otherwise\n        if (strength >= 70) {\n            return ___;\n        } else if (strength >= 30) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(signalStatus(85));  // Strong\n        System.out.println(signalStatus(50));  // Weak\n        System.out.println(signalStatus(10));  // Dead\n    }\n}`,
    testCases: [
      { input: "85", expected: "Strong", description: "85 is a strong signal" },
      { input: "50", expected: "Weak", description: "50 is a weak signal" },
      { input: "10", expected: "Dead", description: "10 is a dead signal" },
    ],
    concept: "Conditionals",
    difficulty: "beginner",
  },
  {
    id: "st-java-03",
    themeId: "stranger-things",
    languageId: "java",
    order: 3,
    title: "Methods",
    themedTitle: "Upside Down Distance Calculator",
    narrative:
      "Eleven has opened a gate to the Upside Down. The party needs to know how far away a location is from Hawkins Lab. Given an x-coordinate and a y-coordinate, calculate the total distance as the sum of their absolute values — the Upside Down doesn't do diagonals.",
    prompt:
      "Write a static method `distance(int x, int y)` that returns the sum of the absolute values of `x` and `y`. Use `Math.abs()` for the absolute value. Call it from `main` and print the result.",
    hint: "Java's `Math.abs(n)` returns the absolute value of `n`. The method return type should be `int`.",
    solution: `public class Main {\n    public static int distance(int x, int y) {\n        return Math.abs(x) + Math.abs(y);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(distance(3, -4));  // 7\n        System.out.println(distance(-5, 5)); // 10\n    }\n}`,
    starterCode: `public class Main {\n    public static int distance(int x, int y) {\n        // Return the sum of absolute values of x and y\n        return ___;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(distance(3, -4));  // 7\n        System.out.println(distance(-5, 5)); // 10\n    }\n}`,
    testCases: [
      { input: "3, -4", expected: "7", description: "3 + 4 = 7" },
      { input: "-5, 5", expected: "10", description: "5 + 5 = 10" },
    ],
    concept: "Methods & Math",
    difficulty: "beginner",
  },
  {
    id: "st-java-04",
    themeId: "stranger-things",
    languageId: "java",
    order: 4,
    title: "Arrays",
    themedTitle: "The Party's Roster",
    narrative:
      "Mike has assembled the party to fight the Mind Flayer. He needs a roster of all members stored in an array. Lucas just joined, so Mike needs to swap Lucas into position 2 of the roster (index 1), replacing the placeholder.",
    prompt:
      "Declare a `String[]` array called `party` with the values `\"Mike\"`, `\"TBD\"`, `\"Dustin\"`, `\"Will\"`. Replace the element at index 1 with `\"Lucas\"`. Then print the element at index 0 and the element at index 1 on separate lines.",
    hint: "Declare the array as `String[] party = {\"Mike\", \"TBD\", \"Dustin\", \"Will\"};` then assign `party[1] = \"Lucas\";`",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String[] party = {"Mike", "TBD", "Dustin", "Will"};\n        party[1] = "Lucas";\n        System.out.println(party[0]);\n        System.out.println(party[1]);\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] party = {"Mike", "TBD", "Dustin", "Will"};\n        // Replace index 1 with "Lucas"\n        party[1] = ___;\n        System.out.println(party[0]);\n        System.out.println(party[1]);\n    }\n}`,
    testCases: [
      { input: "", expected: "Mike", description: "First element is Mike" },
      { input: "", expected: "Lucas", description: "Second element is now Lucas" },
    ],
    concept: "Arrays",
    difficulty: "beginner",
  },
  {
    id: "st-java-05",
    themeId: "stranger-things",
    languageId: "java",
    order: 5,
    title: "Loops",
    themedTitle: "Counting Demogorgon Sightings",
    narrative:
      "Chief Hopper has collected a list of threat-level readings from across Hawkins. Any reading above 50 indicates a Demogorgon sighting. Hopper needs a total count of dangerous readings so he knows how many deputies to call in.",
    prompt:
      "Write a static method `countSightings(int[] readings)` that uses a `for` loop to count and return how many values in `readings` are greater than 50. Call it from `main` with `{10, 75, 30, 88, 55, 20, 61}` and print the result.",
    hint: "Declare an `int count = 0;` before the loop. Inside the loop, use an `if` statement to check each element and increment `count` if it qualifies.",
    solution: `public class Main {\n    public static int countSightings(int[] readings) {\n        int count = 0;\n        for (int i = 0; i < readings.length; i++) {\n            if (readings[i] > 50) {\n                count++;\n            }\n        }\n        return count;\n    }\n\n    public static void main(String[] args) {\n        int[] readings = {10, 75, 30, 88, 55, 20, 61};\n        System.out.println(countSightings(readings));  // 4\n    }\n}`,
    starterCode: `public class Main {\n    public static int countSightings(int[] readings) {\n        int count = 0;\n        for (int i = 0; i < readings.length; i++) {\n            // Increment count if readings[i] > 50\n        }\n        return count;\n    }\n\n    public static void main(String[] args) {\n        int[] readings = {10, 75, 30, 88, 55, 20, 61};\n        System.out.println(countSightings(readings));  // 4\n    }\n}`,
    testCases: [
      { input: "{10, 75, 30, 88, 55, 20, 61}", expected: "4", description: "Four readings exceed 50" },
    ],
    concept: "Loops & Counting",
    difficulty: "intermediate",
  },
  {
    id: "st-java-06",
    themeId: "stranger-things",
    languageId: "java",
    order: 6,
    title: "String Methods",
    themedTitle: "Eleven's Telepathic Message",
    narrative:
      "Eleven sends a telepathic message to the party, but it arrives garbled — all lowercase and hard to read. Mike needs to clean it up: convert it to uppercase, check if it mentions 'hawkins', and find the length so they can verify nothing was cut off.",
    prompt:
      "Inside `main`, declare a `String` variable `message` set to `\"the gate is open in hawkins lab\"`. Print the message in all uppercase using `toUpperCase()`. Print whether it contains `\"hawkins\"` using `contains()`. Print the length of the message using `length()`.",
    hint: "Call string methods directly on the variable: `message.toUpperCase()`, `message.contains(\"hawkins\")`, `message.length()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        String message = "the gate is open in hawkins lab";\n        System.out.println(message.toUpperCase());\n        System.out.println(message.contains("hawkins"));\n        System.out.println(message.length());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String message = "the gate is open in hawkins lab";\n        // Print message in uppercase\n        System.out.println(message.___);\n        // Print whether it contains "hawkins"\n        System.out.println(message.___);\n        // Print the length\n        System.out.println(message.___);\n    }\n}`,
    testCases: [
      { input: "", expected: "THE GATE IS OPEN IN HAWKINS LAB", description: "Message converted to uppercase" },
      { input: "", expected: "true", description: "Message contains 'hawkins'" },
      { input: "", expected: "31", description: "Message length is 31 characters" },
    ],
    concept: "String Methods",
    difficulty: "intermediate",
  },
  {
    id: "st-java-07",
    themeId: "stranger-things",
    languageId: "java",
    order: 7,
    title: "ArrayList",
    themedTitle: "The Party's Dynamic Roster",
    narrative:
      "The party keeps changing as people join the fight against the Mind Flayer. Mike needs a dynamic list — not a fixed array — so he can add new members and remove ones who've been compromised. Will rejoins but Max unfortunately can't make it.",
    prompt:
      "Import `java.util.ArrayList`. Create an `ArrayList<String>` called `party`. Add `\"Mike\"`, `\"Dustin\"`, `\"Lucas\"`, and `\"Max\"` to it. Then remove `\"Max\"`. Add `\"Will\"`. Print the size of the list, then print the element at index 2.",
    hint: "Use `list.add(\"name\")` to add, `list.remove(\"name\")` to remove by value, `list.size()` for the count, and `list.get(index)` to retrieve.",
    solution: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> party = new ArrayList<>();\n        party.add("Mike");\n        party.add("Dustin");\n        party.add("Lucas");\n        party.add("Max");\n        party.remove("Max");\n        party.add("Will");\n        System.out.println(party.size());\n        System.out.println(party.get(2));\n    }\n}`,
    starterCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> party = new ArrayList<>();\n        party.add("Mike");\n        party.add("Dustin");\n        party.add("Lucas");\n        party.add("Max");\n        // Remove "Max"\n        party.remove(___);\n        // Add "Will"\n        party.add(___);\n        System.out.println(party.size());\n        System.out.println(party.get(2));\n    }\n}`,
    testCases: [
      { input: "", expected: "4", description: "Party has 4 members after remove and add" },
      { input: "", expected: "Lucas", description: "Element at index 2 is Lucas" },
    ],
    concept: "ArrayList",
    difficulty: "intermediate",
  },
  {
    id: "st-java-08",
    themeId: "stranger-things",
    languageId: "java",
    order: 8,
    title: "HashMap",
    themedTitle: "Hawkins Lab Threat Registry",
    narrative:
      "Chief Hopper is building a threat registry for Hawkins. Each creature gets a name as the key and a danger level as the value. The registry must be queried quickly when a sighting comes in. Hopper needs to know if the Demogorgon is already logged.",
    prompt:
      "Import `java.util.HashMap`. Create a `HashMap<String, Integer>` called `registry`. Add entries: `\"Demogorgon\"` → `95`, `\"Mind Flayer\"` → `100`, `\"Demodog\"` → `70`. Print the danger level for `\"Mind Flayer\"`. Print whether `\"Demogorgon\"` is a key using `containsKey()`.",
    hint: "Use `map.put(key, value)` to add entries, `map.get(key)` to retrieve, and `map.containsKey(key)` to check existence.",
    solution: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> registry = new HashMap<>();\n        registry.put("Demogorgon", 95);\n        registry.put("Mind Flayer", 100);\n        registry.put("Demodog", 70);\n        System.out.println(registry.get("Mind Flayer"));\n        System.out.println(registry.containsKey("Demogorgon"));\n    }\n}`,
    starterCode: `import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> registry = new HashMap<>();\n        registry.put("Demogorgon", 95);\n        registry.put("Mind Flayer", 100);\n        registry.put("Demodog", 70);\n        // Print the danger level for "Mind Flayer"\n        System.out.println(registry.get(___));\n        // Print whether "Demogorgon" is a key\n        System.out.println(registry.containsKey(___));\n    }\n}`,
    testCases: [
      { input: "", expected: "100", description: "Mind Flayer has danger level 100" },
      { input: "", expected: "true", description: "Demogorgon is in the registry" },
    ],
    concept: "HashMap",
    difficulty: "intermediate",
  },
  {
    id: "st-java-09",
    themeId: "stranger-things",
    languageId: "java",
    order: 9,
    title: "Multiple Methods",
    themedTitle: "Eleven's Power Level System",
    narrative:
      "Dr. Brenner tracked every subject's power with a two-step evaluation: first rate the raw telekinetic force, then classify it as a tier. Eleven's readings are off the charts. The system needs two methods that work together to produce the final classification.",
    prompt:
      "Write two static methods: `ratePower(int force)` that returns `force * 2`, and `classifyPower(int force)` that calls `ratePower(force)` and returns `\"Omega\"` if the result is 180 or above, `\"Alpha\"` if 100 or above, and `\"Beta\"` otherwise. Call `classifyPower` from `main` with `95` and `50` and print the results.",
    hint: "Call `ratePower(force)` inside `classifyPower` and store the result in a variable. Then use if/else to classify.",
    solution: `public class Main {\n    public static int ratePower(int force) {\n        return force * 2;\n    }\n\n    public static String classifyPower(int force) {\n        int rating = ratePower(force);\n        if (rating >= 180) {\n            return "Omega";\n        } else if (rating >= 100) {\n            return "Alpha";\n        } else {\n            return "Beta";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(classifyPower(95));  // Omega\n        System.out.println(classifyPower(50));  // Alpha\n    }\n}`,
    starterCode: `public class Main {\n    public static int ratePower(int force) {\n        // Return force * 2\n        return ___;\n    }\n\n    public static String classifyPower(int force) {\n        int rating = ratePower(force);\n        // Return "Omega" if rating >= 180, "Alpha" if >= 100, "Beta" otherwise\n        if (rating >= 180) {\n            return ___;\n        } else if (rating >= 100) {\n            return ___;\n        } else {\n            return ___;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(classifyPower(95));  // Omega\n        System.out.println(classifyPower(50));  // Alpha\n    }\n}`,
    testCases: [
      { input: "95", expected: "Omega", description: "Force 95 rates to 190 — Omega tier" },
      { input: "50", expected: "Alpha", description: "Force 50 rates to 100 — Alpha tier" },
    ],
    concept: "Multiple Methods",
    difficulty: "advanced",
  },
  {
    id: "st-java-10",
    themeId: "stranger-things",
    languageId: "java",
    order: 10,
    title: "StringBuilder",
    themedTitle: "Building the Upside Down Map",
    narrative:
      "Dustin is charting every known location in the Upside Down. He needs to build a detailed map string piece by piece — starting with the header, then appending each location on a new segment. A StringBuilder will handle the construction efficiently.",
    prompt:
      "Use a `StringBuilder` to build a location report. Start by appending `\"UPSIDE DOWN MAP: \"`. Then append `\"Hawkins Lab\"`. Then append `\", \"`. Then append `\"The Gate\"`. Then append `\", \"`. Then append `\"Byers House\"`. Print the final string using `toString()`.",
    hint: "Create with `StringBuilder sb = new StringBuilder();` then call `sb.append(\"text\")` for each piece. Finally call `sb.toString()` inside `System.out.println()`.",
    solution: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("UPSIDE DOWN MAP: ");\n        sb.append("Hawkins Lab");\n        sb.append(", ");\n        sb.append("The Gate");\n        sb.append(", ");\n        sb.append("Byers House");\n        System.out.println(sb.toString());\n    }\n}`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("UPSIDE DOWN MAP: ");\n        sb.append("Hawkins Lab");\n        sb.append(", ");\n        sb.append(___);\n        sb.append(", ");\n        sb.append(___);\n        System.out.println(sb.toString());\n    }\n}`,
    testCases: [
      { input: "", expected: "UPSIDE DOWN MAP: Hawkins Lab, The Gate, Byers House", description: "Full map string assembled correctly" },
    ],
    concept: "StringBuilder",
    difficulty: "advanced",
  },
];
