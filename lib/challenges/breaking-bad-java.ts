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
];
