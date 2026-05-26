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
];
