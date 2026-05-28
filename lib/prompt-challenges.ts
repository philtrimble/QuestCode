/**
 * lib/prompt-challenges.ts
 *
 * Static data for the AI Prompt Practice feature.
 * After completing a coding challenge the user can switch to the "Prompt It"
 * tab and try writing the natural-language prompt they would give an AI to
 * produce the same code. A polished example prompt is revealed on demand.
 *
 * Keys use the format `${languageId}:${concept}` — both values match the
 * `languageId` and `concept` fields on the Challenge type exactly.
 */

export interface PromptExample {
  /** One sentence that reminds the user what they just built. */
  task: string;
  /** A polished example prompt to compare against — revealed on demand. */
  example: string;
}

// Key: `${languageId}:${concept}`
export const PROMPT_EXAMPLES: Record<string, PromptExample> = {

  // ── Python ──────────────────────────────────────────────────────────────────

  "python:Variables & Data Types": {
    task: "You declared three variables of different types — string, integer, boolean — and printed each one.",
    example: `Write a Python program that declares three variables: a string, an integer, and a boolean. Assign specific values to each and print them on separate lines using print().`,
  },
  "python:Lists": {
    task: "You created a list, appended an item to it, then printed the last element and the total length.",
    example: `Write Python code that creates a list of strings, appends one more string to the end, prints the last element using negative indexing, and prints the total number of items using len().`,
  },
  "python:Dictionaries": {
    task: "You created a dictionary with string keys and numeric values, then looked up two specific keys.",
    example: `Write Python code that creates a dictionary with at least three string keys mapped to integer values. Access and print the values for two specific keys using bracket notation.`,
  },
  "python:Functions": {
    task: "You wrote a function that accepts a number and returns a different string label depending on which range it falls into.",
    example: `Write a Python function that takes a single numeric parameter and returns one of three string labels based on value ranges — one for low values, one for mid-range, and one for high values. Use if, elif, and else. Call the function with three test inputs and print each result.`,
  },
  "python:Loops": {
    task: "You wrote a function that uses a for loop to sum all values in a list and return the total.",
    example: `Write a Python function that accepts a list of numbers, initializes a total variable at zero, uses a for loop to add each number to the total, and returns the sum. Test it with two different lists and print the results.`,
  },
  "python:String Methods": {
    task: "You chained .strip(), .title(), and .replace() to clean and transform a string.",
    example: `Write a Python function that takes a messy string and returns a cleaned version. Chain three string methods: strip whitespace, convert to title case, and replace one specific word with another. Test it with a string that has leading/trailing spaces and a word to replace.`,
  },
  "python:List Comprehension": {
    task: "You used a list comprehension to filter a list, keeping only values that meet a condition.",
    example: `Write Python code that uses a single-line list comprehension to filter a list of numbers, keeping only those greater than or equal to a threshold value. Store the result in a new variable and print it.`,
  },
  "python:Nested Data Structures": {
    task: "You searched a list of dictionaries by matching a key and returning a value from the matching entry.",
    example: `Write a Python function that accepts a list of dictionaries and a search string. Loop through the list; when a specific key in a dictionary matches the search string, return the value of a different key from that same dictionary.`,
  },
  "python:Sorting": {
    task: "You sorted a list of dictionaries by a numeric key in descending order, then printed each item.",
    example: `Write Python code that sorts a list of dictionaries in descending order using sorted() with a lambda that keys on a numeric field. Set reverse=True. Then loop through the sorted list and print a formatted string for each entry.`,
  },
  "python:Exception Handling": {
    task: "You used try/except to catch a ZeroDivisionError and return a descriptive message instead of crashing.",
    example: `Write a Python function that takes two numbers and tries to return their integer division result. Use try/except to catch ZeroDivisionError and return a friendly error string instead. Test with both a valid division and a zero divisor.`,
  },

  // ── JavaScript ──────────────────────────────────────────────────────────────

  "javascript:Variables & Template Literals": {
    task: "You declared variables and used a template literal to build a formatted string.",
    example: `Write JavaScript code that declares two or three variables of different types — at least one string and one number. Use a template literal (backtick syntax with \${}) to build a sentence that embeds all of them, then log it with console.log.`,
  },
  "javascript:Arrays": {
    task: "You created an array, pushed an item onto it, then logged its length and last element.",
    example: `Write JavaScript code that creates an array of strings, uses .push() to add one more element, and logs the updated length. Then log the last element using bracket notation or .at(-1).`,
  },
  "javascript:Functions": {
    task: "You wrote a function that accepts a parameter and returns a value based on a condition.",
    example: `Write a JavaScript function that accepts one parameter and uses an if/else block or ternary to return different values depending on the input. Call it with two or three different arguments and log each result.`,
  },
  "javascript:Objects": {
    task: "You created an object with multiple named properties and logged specific values from it.",
    example: `Write JavaScript code that creates an object literal with at least three properties of different types. Log two specific property values to the console using dot or bracket notation.`,
  },
  "javascript:Array Methods": {
    task: "You used .filter() to produce a new array containing only items that satisfy a condition.",
    example: `Write JavaScript code that uses the .filter() array method with an arrow function to create a new array keeping only elements that match a condition. Log the length of the resulting array.`,
  },
  "javascript:String Methods": {
    task: "You used string methods like toUpperCase, toLowerCase, includes, slice, or replace to transform text.",
    example: `Write JavaScript code that takes a string and applies at least two different string methods to it — such as changing case, checking for a substring, slicing out a portion, or replacing a word. Log the transformed result.`,
  },
  "javascript:.map()": {
    task: "You used .map() to transform every element in an array and store the results in a new array.",
    example: `Write JavaScript code that uses .map() on an array with an arrow function to transform each element — for example, extracting a property, performing arithmetic, or formatting a string. Store the result in a new variable and log it.`,
  },
  "javascript:.reduce()": {
    task: "You used .reduce() to accumulate all array elements into a single value.",
    example: `Write JavaScript code that uses .reduce() on an array to compute a single accumulated result — such as a total sum or concatenated string. Provide an initial value as the second argument and log the final result.`,
  },
  "javascript:Spread & Destructuring": {
    task: "You used destructuring to unpack values from an object or array into named variables.",
    example: `Write JavaScript code that uses destructuring assignment to extract two or more values from an object or array into separate variables. Alternatively use the spread operator to merge arrays or copy an object. Log the extracted or combined values.`,
  },
  "javascript:Object.keys() & Iteration": {
    task: "You used Object.keys() or Object.entries() to loop over an object's properties and log each pair.",
    example: `Write JavaScript code that uses Object.keys() or Object.entries() on an object and iterates over the result with forEach or a for...of loop, logging each key and its corresponding value.`,
  },

  // ── Java ────────────────────────────────────────────────────────────────────

  "java:Variables & Data Types": {
    task: "You declared variables of different types inside a main class and printed them.",
    example: `Write a Java program with a public class named Main containing a public static void main(String[] args) method. Declare at least two variables of different types — such as a String, an int, and a boolean. Print each using System.out.println.`,
  },
  "java:Conditionals": {
    task: "You used an if/else block to print different messages based on a condition.",
    example: `Write a Java main class with a main method that declares a variable and uses an if/else statement to print one message when a condition is true and a different message when it is false.`,
  },
  "java:Methods & Arithmetic": {
    task: "You wrote a static method that performs arithmetic and returns a result.",
    example: `Write a Java program that defines a static method in the Main class that accepts numeric parameters, performs arithmetic, and returns a result. Call the method from main and print the return value using System.out.println.`,
  },
  "java:Arrays": {
    task: "You declared an array, accessed elements by index, and iterated with a loop.",
    example: `Write a Java program that declares an array with several values. Access specific elements by index and print them. Use a for loop to iterate over the full array and print each element.`,
  },
  "java:Loops & Finding Maximum": {
    task: "You used a loop to find the maximum value in an array or collection.",
    example: `Write a Java program that declares an array of numbers, uses a for loop to iterate through it, and tracks the maximum value seen so far in a variable. After the loop, print the maximum.`,
  },
  "java:String Methods": {
    task: "You used String methods like toUpperCase, contains, replace, or substring to transform text.",
    example: `Write a Java program that declares a String variable and applies at least two String methods to it — such as toUpperCase(), contains(), replace(), or substring(). Print the transformed values.`,
  },
  "java:ArrayList": {
    task: "You created an ArrayList, added elements with .add(), and iterated over them.",
    example: `Write a Java program that imports java.util.ArrayList, creates an ArrayList of Strings, adds several items using .add(), and uses a for-each loop to print each element.`,
  },
  "java:HashMap": {
    task: "You created a HashMap, added key-value pairs, and retrieved values with .get().",
    example: `Write a Java program that imports java.util.HashMap, creates a HashMap with String keys and Integer values, adds at least three entries using .put(), then retrieves and prints two specific values using .get().`,
  },
  "java:Multiple Methods": {
    task: "You defined two or more static methods and called them both from main.",
    example: `Write a Java program that defines at least two static methods in the Main class, each with parameters and a return type. Call both from the main method and print the results using System.out.println.`,
  },
  "java:StringBuilder": {
    task: "You used StringBuilder to build a string by appending parts, then converted it to a String.",
    example: `Write a Java program that creates a StringBuilder, calls .append() multiple times to add strings or numbers, then calls .toString() to get the final string and prints it.`,
  },

  // ── Go ──────────────────────────────────────────────────────────────────────

  "go:Variables & Types": {
    task: "You declared variables with := and printed them using fmt.Println.",
    example: `Write a Go program with package main and a main() function. Use the := short variable declaration to declare two or three variables of different types. Print each with fmt.Println.`,
  },
  "go:Conditionals": {
    task: "You used an if/else block to print different output depending on a condition.",
    example: `Write a Go program with a main() function that declares a variable and uses an if/else statement to print one message when a condition is true and another when it is false. Use fmt.Println for output.`,
  },
  "go:Functions": {
    task: "You defined a function that takes parameters, performs logic, and returns a value.",
    example: `Write a Go program that defines a named function outside of main. The function should accept one or more parameters and return a value. Call it from main and print the result with fmt.Println.`,
  },
  "go:Slices": {
    task: "You created a slice and used append() to add new elements to it.",
    example: `Write a Go program that creates a slice using a slice literal or var declaration. Use append() to add one or more elements. Print the resulting slice with fmt.Println.`,
  },
  "go:Loops": {
    task: "You used a for loop with range to iterate over a slice and accumulate a result.",
    example: `Write a Go program that declares a slice of numbers and uses a for loop with range to iterate over it. Accumulate a running total in a variable and print the final sum after the loop.`,
  },
  "go:String Formatting": {
    task: "You used fmt.Sprintf to compose a formatted string from variables.",
    example: `Write a Go program that uses fmt.Sprintf to build a formatted string by embedding two or more variables into a template. Store the result in a variable and print it with fmt.Println.`,
  },
  "go:Maps": {
    task: "You created a map, added key-value pairs, and read specific values from it.",
    example: `Write a Go program that creates a map using make or a map literal with string keys and numeric or string values. Add at least three entries and print the values for two specific keys.`,
  },
  "go:Structs": {
    task: "You defined a struct type and created an instance with field values.",
    example: `Write a Go program that defines a struct type with two or three fields of different types. Create an instance, set field values using either a struct literal or dot assignment, and print the fields with fmt.Println.`,
  },
  "go:Multiple Return Values": {
    task: "You wrote a function that returns two values — a result and an error — and handled both cases in main.",
    example: `Write a Go function that returns two values: a computed result and an error. Return a real error using errors.New() in the failure case and nil in the success case. In main, call the function, check the error with if err != nil, and print appropriately.`,
  },
  "go:Error Handling": {
    task: "You checked a function's error return with if err != nil and handled success and failure separately.",
    example: `Write a Go program that calls a function returning a value and an error. Use if err != nil to check the error. Print a descriptive failure message if there is an error; otherwise, print the successful result.`,
  },

  // ── SQL ─────────────────────────────────────────────────────────────────────

  "sql:SELECT Basics": {
    task: "You wrote a SELECT * query to retrieve every row and column from a table.",
    example: `Write a SQL query that selects all columns and all rows from a table. Use SELECT * FROM followed by the table name.`,
  },
  "sql:WHERE Clause": {
    task: "You used a WHERE clause to filter rows where a column meets a condition.",
    example: `Write a SQL query that selects all columns from a table but uses a WHERE clause to return only the rows where a specific column satisfies a condition — for example, where a number is above a threshold or a text column equals a value.`,
  },
  "sql:ORDER BY & LIMIT": {
    task: "You used ORDER BY DESC and LIMIT to retrieve the top N rows sorted by a column.",
    example: `Write a SQL query that retrieves the top 3 rows from a table, sorted by a numeric column from highest to lowest. Use ORDER BY [column] DESC and LIMIT 3.`,
  },
  "sql:Aggregate Functions": {
    task: "You used COUNT, SUM, and AVG in a single SELECT to compute summary statistics over all rows.",
    example: `Write a SQL query that uses three aggregate functions in a single SELECT: COUNT(*) to count all rows, SUM() to total a numeric column, and AVG() to compute its average. No GROUP BY — aggregate across the entire table.`,
  },
  "sql:GROUP BY": {
    task: "You grouped rows by a column and applied an aggregate function to summarize each group.",
    example: `Write a SQL query that uses GROUP BY on a text column to group rows. Apply SUM() or COUNT() to each group and order the results by the aggregate value in descending order.`,
  },
  "sql:INNER JOIN": {
    task: "You joined two tables on a shared key column to combine their related rows.",
    example: `Write a SQL query that uses INNER JOIN (or just JOIN) to combine two tables on a column they share. Select at least one column from each table in the result.`,
  },
  "sql:HAVING": {
    task: "You used GROUP BY with a HAVING clause to filter groups that don't meet an aggregate condition.",
    example: `Write a SQL query that groups rows by a column, applies an aggregate function like COUNT() or SUM(), and uses HAVING to keep only the groups where the aggregate meets a numeric condition.`,
  },
  "sql:Subquery": {
    task: "You embedded a subquery inside a WHERE clause to filter using a computed value.",
    example: `Write a SQL query that includes a subquery — a SELECT inside parentheses — used in a WHERE clause to compare a column against a value that is itself the result of another SELECT, such as a MAX, AVG, or a lookup from another table.`,
  },
  "sql:CASE WHEN": {
    task: "You used a CASE WHEN expression to assign a different label to each row based on a column's value.",
    example: `Write a SQL query that uses a CASE WHEN expression inside SELECT to categorize each row. Include at least two WHEN ... THEN conditions and an ELSE default, closed with END. Give the result an alias.`,
  },
  "sql:Multi-clause Query": {
    task: "You combined JOIN, WHERE, GROUP BY, and ORDER BY in a single query.",
    example: `Write a SQL query that joins two tables on a shared key, filters rows using WHERE, groups the results with GROUP BY, applies an aggregate function, and orders the output with ORDER BY. Combine all four clauses in one statement.`,
  },
};
