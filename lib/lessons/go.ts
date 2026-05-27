import type { Lesson } from "@/types";

export const goLessons: Record<string, Lesson> = {

  // ─── Stranger Things ──────────────────────────────────────────────────────

  "st-go-01": {
    intro: "Eleven's signal fragments arrive in separate variables. Go uses a short-hand declaration operator `:=` to infer types automatically — you don't have to spell out `string` or `int` every time.",
    concept: "In Go, `:=` declares a new variable and infers its type from the value on the right. No `var` keyword needed. `fmt.Println()` prints a value followed by a newline. Every Go file belongs to a package.",
    example: `package main

import "fmt"

func main() {
    codename := "Eleven"
    powerLevel := 10
    active := true
    fmt.Println(codename)
    fmt.Println(powerLevel)
    fmt.Println(active)
}`,
    exampleOutput: "Eleven\n10\ntrue",
    notes: "`:=` infers `string`, `int`, and `bool` from the right-hand values. `fmt.Println` prints each value on its own line.",
    keyPoints: [
      "`:=` declares and assigns in one step — Go infers the type.",
      "Use `var name type = value` when you need an explicit type declaration.",
      "`fmt.Println(value)` prints to stdout with a trailing newline.",
      "Every executable Go file must have `package main` and a `main()` function.",
    ],
  },

  "st-go-02": {
    intro: "Hopper's threat assessment needs to branch based on the number of Demogorgon sightings. Go's `if/else` blocks look familiar from other languages but have one key rule: no parentheses around the condition.",
    concept: "Go's `if` statement does not require parentheses around the condition — just the condition followed by the block in curly braces `{}`. `else if` and `else` work the same way as in most languages.",
    example: `package main

import "fmt"

func main() {
    signal := 65

    if signal >= 80 {
        fmt.Println("Strong signal")
    } else if signal >= 40 {
        fmt.Println("Weak signal")
    } else {
        fmt.Println("No signal")
    }
}`,
    exampleOutput: "Weak signal",
    notes: "65 is not ≥ 80 but is ≥ 40, so the second branch runs. Curly braces are mandatory in Go — even for single-line bodies.",
    keyPoints: [
      "No parentheses around the condition: `if x > 5 {` not `if (x > 5) {`",
      "Curly braces `{}` are always required — no optional braces.",
      "`else if` and `else` must be on the same line as the closing `}`.",
      "Go supports an init statement: `if x := compute(); x > 0 {`",
    ],
  },

  "st-go-03": {
    intro: "Hopper's threat formula needs to be encapsulated so any part of the program can call it. Go functions are declared with `func`, typed parameters, and a typed return value.",
    concept: "Go functions are declared with `func name(param type) returnType { ... }`. You must declare the types of parameters and return values explicitly. Functions without a return value use no return type (or `void` equivalent).",
    example: `package main

import "fmt"

func dangerScore(sightings int) int {
    return sightings * 5
}

func main() {
    fmt.Println(dangerScore(4))
    fmt.Println(dangerScore(9))
}`,
    exampleOutput: "20\n45",
    notes: "`func dangerScore(sightings int) int` declares a function taking one `int` and returning one `int`. Two calls with different arguments produce different results.",
    keyPoints: [
      "Function syntax: `func name(param type) returnType { return ... }`",
      "Parameter type goes after the name: `sightings int`, not `int sightings`.",
      "The return type appears after the parameter list.",
      "Go functions can return multiple values: `func f() (int, error)`",
    ],
  },

  "st-go-04": {
    intro: "The Party's walkie-talkie roster needs to grow dynamically. Go's slice is a flexible, growable list — append new members with the `append` function.",
    concept: "A Go slice is a dynamically-sized list. Declare it with `[]Type{...}`. Use `append(slice, value)` to add an element — `append` returns a new slice, so you must assign the result back. `len(slice)` gives the current count.",
    example: `package main

import "fmt"

func main() {
    party := []string{"Mike", "Dustin", "Lucas"}
    party = append(party, "Max")
    fmt.Println(len(party))
    fmt.Println(party[0])
}`,
    exampleOutput: "4\nMike",
    notes: "`append` returns a new slice with the added element — you must reassign it to `party`. `len` counts the current elements. `party[0]` accesses the first element.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\", \"c\"}`",
      "`append(slice, value)` returns a new slice — always reassign: `s = append(s, v)`",
      "`len(slice)` returns the number of elements.",
      "Slices are zero-indexed: `party[0]` is the first element.",
    ],
  },

  "st-go-05": {
    intro: "The final scan of Hawkins survivors uses a `for range` loop. Go's range-based loop is the idiomatic way to iterate over slices without managing an index manually.",
    concept: "The `for _, item := range slice` loop visits every element in a slice. The first variable receives the index (use `_` to ignore it); the second receives the value. It's Go's equivalent of a for-each loop.",
    example: `package main

import "fmt"

func main() {
    threats := []int{3, 7, 2, 8, 1}
    total := 0
    for _, t := range threats {
        total += t
    }
    fmt.Println(total)
}`,
    exampleOutput: "21",
    notes: "`_` discards the index. `t` receives each element in turn. `total` accumulates the sum across all five iterations.",
    keyPoints: [
      "`for _, v := range slice` iterates every element; `_` ignores the index.",
      "Use `for i, v := range slice` when you need both index and value.",
      "Declare the accumulator outside the loop so it persists after.",
      "Go has only one loop keyword: `for`. It covers for, while, and for-each patterns.",
    ],
  },

  // ─── Severance ────────────────────────────────────────────────────────────

  "sv-go-01": {
    intro: "Every innie on the severed floor has an employee record — a name, an ID number, and a flag for whether their access is active. Go's `:=` operator creates all three variables with one clean syntax.",
    concept: "Go's short variable declaration `:=` infers the type from the assigned value. It's the most common way to declare variables inside functions. Outside functions you need `var`.",
    example: `package main

import "fmt"

func main() {
    name := "Helly R."
    employeeId := 1024
    severed := true
    fmt.Println(name)
    fmt.Println(employeeId)
    fmt.Println(severed)
}`,
    exampleOutput: "Helly R.\n1024\ntrue",
    notes: "Go infers `string`, `int`, and `bool` from the right-hand values. No type annotations required with `:=`.",
    keyPoints: [
      "`:=` declares and infers type simultaneously.",
      "Only usable inside functions — use `var` at package level.",
      "`fmt.Println` prints the value and a newline.",
      "Go is statically typed — the inferred type is fixed.",
    ],
  },

  "sv-go-02": {
    intro: "MDR workers classify numbers into bins. Go's `if/else if/else` chain implements the binning logic — clean, braces-required, no parentheses on the condition.",
    concept: "Go conditionals follow the same logic as other languages but require curly braces and forbid parentheses around conditions. The `else if` and `else` keywords must be on the same line as the previous closing brace.",
    example: `package main

import "fmt"

func main() {
    score := 72

    if score >= 90 {
        fmt.Println("High bin")
    } else if score >= 60 {
        fmt.Println("Medium bin")
    } else {
        fmt.Println("Low bin")
    }
}`,
    exampleOutput: "Medium bin",
    notes: "72 fails `>= 90` but passes `>= 60`. The second branch runs. Go's compiler will reject `} else {` on separate lines.",
    keyPoints: [
      "No parentheses on the condition: `if score >= 90 {`",
      "Curly braces are mandatory, even for one-line bodies.",
      "`else` must follow `}` on the same line: `} else {`",
      "Go supports short init statements: `if n := getValue(); n > 0 {`",
    ],
  },

  "sv-go-03": {
    intro: "The quarterly refinement calculation is always the same formula. Wrapping it in a Go function means it can be called with any score and return a consistent, testable result.",
    concept: "Go functions declare parameter types after the parameter name and list the return type after the parentheses. The function body ends with a `return` statement.",
    example: `package main

import "fmt"

func refinementScore(base int, bonus int) int {
    return base + bonus*2
}

func main() {
    fmt.Println(refinementScore(70, 10))
    fmt.Println(refinementScore(50, 15))
}`,
    exampleOutput: "90\n80",
    notes: "`refinementScore(70, 10)` returns `70 + 20 = 90`. Two parameters of the same type can be shortened: `base, bonus int`.",
    keyPoints: [
      "Function syntax: `func name(param type) returnType { return expr }`",
      "Type follows the parameter name: `base int`, not `int base`.",
      "Same-type parameters can be grouped: `func f(a, b int) int`",
      "Go requires all declared variables to be used — unused imports/variables are compile errors.",
    ],
  },

  "sv-go-04": {
    intro: "The MDR department roster is a slice of employee names. New hires are appended; the length is checked at any time. Go slices are the flexible, growable equivalent of arrays.",
    concept: "A Go slice is a dynamic list. Create one with `[]Type{...}` or `make([]Type, len)`. `append(slice, elem)` adds an element and returns the new slice. Always reassign the result.",
    example: `package main

import "fmt"

func main() {
    roster := []string{"Mark S.", "Helly R.", "Irving B."}
    roster = append(roster, "Dylan G.")
    fmt.Println(len(roster))
}`,
    exampleOutput: "4",
    notes: "`append` grows the slice by one and returns the updated version. The reassignment `roster = append(roster, ...)` is required — `append` doesn't mutate in place.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}` — note the `[]` prefix.",
      "`append(s, v)` returns a new slice — always reassign.",
      "`len(s)` returns the current length.",
      "Access elements with `s[i]` — zero-indexed.",
    ],
  },

  "sv-go-05": {
    intro: "The refinement count for the quarter is the sum of all daily totals logged by the MDR team. A `for range` loop walks through each entry and accumulates the grand total.",
    concept: "Go's `for range` loop iterates over a slice, providing the index and value on each iteration. Use `_` to discard what you don't need. An accumulator pattern sums values across iterations.",
    example: `package main

import "fmt"

func main() {
    daily := []int{12, 8, 15, 10, 9}
    sum := 0
    for _, count := range daily {
        sum += count
    }
    fmt.Println(sum)
}`,
    exampleOutput: "54",
    notes: "`sum` starts at 0. Each iteration assigns the next slice element to `count` and adds it to `sum`. After the loop, `sum` is `12+8+15+10+9 = 54`.",
    keyPoints: [
      "`for _, v := range slice` iterates every element.",
      "Declare the accumulator before the loop.",
      "`sum += count` is shorthand for `sum = sum + count`.",
      "Go has only the `for` keyword — it handles all loop types.",
    ],
  },

  // ─── Breaking Bad ─────────────────────────────────────────────────────────

  "bb-go-01": {
    intro: "Walt's cook log tracks each batch's product name, purity percentage, and batch size. Go's `:=` lets him declare all three in clear, type-inferred lines without boilerplate.",
    concept: "Go uses type inference heavily. `:=` determines the type from the value: a quoted string becomes `string`, a whole number becomes `int`, a decimal becomes `float64`.",
    example: `package main

import "fmt"

func main() {
    product := "Blue Sky"
    purity := 99.1
    batchSize := 500
    fmt.Println(product)
    fmt.Println(purity)
    fmt.Println(batchSize)
}`,
    exampleOutput: "Blue Sky\n99.1\n500",
    notes: "Go infers `string` for `product`, `float64` for `purity`, and `int` for `batchSize`. Decimal literals default to `float64` in Go.",
    keyPoints: [
      "Decimal literals infer as `float64`, not `float32`.",
      "Integer literals infer as `int`.",
      "String literals infer as `string`.",
      "`fmt.Println` handles all types.",
    ],
  },

  "bb-go-02": {
    intro: "Every batch gets a grade: premium (≥99%), standard (≥90%), or reject. Go's if/else chain maps a purity value to its grade label — clean, no-parentheses style.",
    concept: "Go's `if/else if/else` evaluates conditions top-to-bottom. The first `true` condition runs its block and all others are skipped. Curly braces are mandatory; parentheses around conditions are forbidden.",
    example: `package main

import "fmt"

func main() {
    purity := 94.5

    if purity >= 99 {
        fmt.Println("Premium")
    } else if purity >= 90 {
        fmt.Println("Standard")
    } else {
        fmt.Println("Reject")
    }
}`,
    exampleOutput: "Standard",
    notes: "94.5 fails `>= 99` but passes `>= 90`. The second branch runs. Once a condition matches, the rest of the chain is skipped entirely.",
    keyPoints: [
      "No parentheses: `if purity >= 99 {` — the `{` must be on the same line.",
      "Conditions are checked top-to-bottom; the first match wins.",
      "`else if` and `else` must share the line with the preceding `}`.",
      "All bodies require curly braces, even single statements.",
    ],
  },

  "bb-go-03": {
    intro: "Jesse needs to calculate the payout for any batch size and rate. A Go function encapsulates the formula — same result every time for the same input, reusable for any cook.",
    concept: "Go functions declare parameter types after each parameter name and the return type after the closing parenthesis. The `return` statement sends the result back to the caller.",
    example: `package main

import "fmt"

func batchPayout(grams int, ratePerGram float64) float64 {
    return float64(grams) * ratePerGram
}

func main() {
    fmt.Println(batchPayout(500, 12.50))
}`,
    exampleOutput: "6250",
    notes: "`float64(grams)` converts the `int` to `float64` before multiplying — Go requires explicit type conversions; it won't coerce automatically.",
    keyPoints: [
      "Parameter type goes after the name: `grams int`.",
      "Return type follows the parentheses: `func f(x int) float64`.",
      "Go requires explicit type conversions — `float64(intVar)` not just `intVar`.",
      "All function parameters must be used, or the compiler rejects the code.",
    ],
  },

  "bb-go-04": {
    intro: "The distribution network roster is a slice of territory names. New territories are appended as the operation expands. Go's `append` keeps the slice growing dynamically.",
    concept: "Go slices are dynamically-sized. `append(slice, value)` returns a new slice containing the original elements plus the new one. You must reassign the result — `append` never mutates in place.",
    example: `package main

import "fmt"

func main() {
    territories := []string{"Albuquerque", "Santa Fe", "El Paso"}
    territories = append(territories, "Phoenix")
    fmt.Println(len(territories))
    fmt.Println(territories[3])
}`,
    exampleOutput: "4\nPhoenix",
    notes: "After the append, `territories` has 4 elements. `territories[3]` is the newly added `\"Phoenix\"` at index 3.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}`",
      "`append` returns the extended slice — always reassign.",
      "`len(s)` counts elements.",
      "Index 0 is first; index `len(s)-1` is last.",
    ],
  },

  "bb-go-05": {
    intro: "Walt wants the maximum purity across all batches in a cook run. A `for range` loop walks every purity value and tracks the highest one — a classic maximum-finding pattern in Go.",
    concept: "The maximum-finding pattern: initialise `max` to the first element, then loop and update `max` whenever a larger value is found. Use `for _, v := range slice` to iterate.",
    example: `package main

import "fmt"

func main() {
    purities := []float64{91.2, 97.8, 88.5, 99.1, 93.4}
    max := purities[0]
    for _, p := range purities {
        if p > max {
            max = p
        }
    }
    fmt.Println(max)
}`,
    exampleOutput: "99.1",
    notes: "`max` starts at `purities[0]`. Each element is compared — if larger than `max`, it becomes the new `max`. After the loop, `max` holds the peak purity.",
    keyPoints: [
      "Initialise `max` to the first element, not to zero.",
      "`for _, p := range purities` visits every element.",
      "Update `max` only when `p > max`.",
      "The same logic finds the minimum — just flip the comparison to `<`.",
    ],
  },

  // ─── The Office ───────────────────────────────────────────────────────────

  "to-go-01": {
    intro: "Dunder Mifflin's employee system needs clean, typed records. Go's `:=` short declaration creates variables with minimal syntax — the compiler figures out the type.",
    concept: "`:=` is Go's most-used variable declaration. It declares a new variable, assigns a value, and infers the type — all in one line. Use it inside functions for clean, readable code.",
    example: `package main

import "fmt"

func main() {
    name := "Dwight Schrute"
    salesRank := 1
    employed := true
    fmt.Println(name)
    fmt.Println(salesRank)
    fmt.Println(employed)
}`,
    exampleOutput: "Dwight Schrute\n1\ntrue",
    notes: "Three variables, three types inferred automatically. `:=` works only inside function bodies.",
    keyPoints: [
      "`:=` inside a function — `var` at package level.",
      "Go infers `string`, `int`, `bool`, and `float64` from literal values.",
      "Variables declared with `:=` must be used — unused variables are compile errors.",
      "`fmt.Println` handles any type.",
    ],
  },

  "to-go-02": {
    intro: "The performance review system categorises employees. Go's if/else chain decides the category based on the sales score — braces required, parentheses forbidden.",
    concept: "Go's conditional syntax omits parentheses around conditions. Curly braces are always required. The `else` clause must follow the closing brace of the `if` body on the same line.",
    example: `package main

import "fmt"

func main() {
    salesScore := 78

    if salesScore >= 90 {
        fmt.Println("Regional Manager")
    } else if salesScore >= 65 {
        fmt.Println("Assistant to the Manager")
    } else {
        fmt.Println("General Staff")
    }
}`,
    exampleOutput: "Assistant to the Manager",
    notes: "78 falls in the 65–89 range so the second branch runs. Go's `else` must share a line with the `}` that closes the previous block.",
    keyPoints: [
      "Condition without parentheses: `if salesScore >= 90 {`",
      "Opening `{` must be on the same line as `if`/`else`.",
      "`} else if` and `} else` on the same line as `}`.",
      "All blocks require `{}` even for one-liners.",
    ],
  },

  "to-go-03": {
    intro: "The sales commission calculator is the same formula for every rep. Dwight encapsulates it in a Go function so HR can call it for any units-sold number and get a consistent result.",
    concept: "Go functions are declared with explicit parameter types and a return type. The compiler enforces that the returned value matches the declared type.",
    example: `package main

import "fmt"

func commission(units int) float64 {
    return float64(units) * 4.50
}

func main() {
    fmt.Println(commission(100))
    fmt.Println(commission(250))
}`,
    exampleOutput: "450\n1125",
    notes: "`float64(units)` explicitly converts `int` to `float64` — Go doesn't do this automatically. The return type `float64` must match the expression returned.",
    keyPoints: [
      "Parameters: `func name(param type) returnType`.",
      "Go doesn't implicitly convert numeric types — be explicit.",
      "Return type is after the parameter list.",
      "Multiple return types are possible: `func f() (int, error)`.",
    ],
  },

  "to-go-04": {
    intro: "The Party Planning Committee grows as volunteers sign up. A Go slice starts with the founding members and grows with `append` as new names are added.",
    concept: "Go slices are reference types that grow dynamically. `append` adds elements and returns the updated slice. The result must be assigned back to the original variable.",
    example: `package main

import "fmt"

func main() {
    committee := []string{"Phyllis", "Angela", "Oscar"}
    committee = append(committee, "Pam")
    committee = append(committee, "Meredith")
    fmt.Println(len(committee))
}`,
    exampleOutput: "5",
    notes: "Two consecutive `append` calls add two members. After both, `len(committee)` is 5.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}`.",
      "Chain appends by reassigning: `s = append(s, v)`.",
      "`len(s)` reflects the current length after each append.",
      "Slices can grow without manually managing capacity.",
    ],
  },

  "to-go-05": {
    intro: "Michael wants to know the total number of sales calls made this quarter. A `for range` loop sums up each week's call count from a slice of weekly totals.",
    concept: "The accumulator loop is a fundamental Go pattern: initialise a sum to zero, range over the slice, and add each element to the sum. The result is available after the loop ends.",
    example: `package main

import "fmt"

func main() {
    weeklyCalls := []int{14, 22, 18, 29, 11}
    total := 0
    for _, calls := range weeklyCalls {
        total += calls
    }
    fmt.Println(total)
}`,
    exampleOutput: "94",
    notes: "`total` accumulates across 5 iterations: `14+22+18+29+11 = 94`. The `_` discards the index since we only need the value.",
    keyPoints: [
      "`for _, v := range slice` iterates every element, discarding the index.",
      "Declare the accumulator before the loop.",
      "`+=` updates the running total on each pass.",
      "Print after the loop to get the final result.",
    ],
  },

  // ─── Game of Thrones ──────────────────────────────────────────────────────

  "got-go-01": {
    intro: "A raven arrives at Castle Black with details of an army's strength. Jon Snow's records system needs variables for the house name, army size, and whether they've pledged allegiance — Go's `:=` handles all three.",
    concept: "`:=` in Go creates a new variable and infers its type. Quoted text becomes `string`. A whole number becomes `int`. `true`/`false` becomes `bool`. All inside a function body.",
    example: `package main

import "fmt"

func main() {
    house := "Stark"
    armySize := 8000
    pledged := true
    fmt.Println(house)
    fmt.Println(armySize)
    fmt.Println(pledged)
}`,
    exampleOutput: "Stark\n8000\ntrue",
    notes: "Go infers the types from the right-hand-side values. The program compiles correctly and prints three lines.",
    keyPoints: [
      "`:=` is the idiomatic way to declare variables in Go functions.",
      "Go is strongly typed — you can't assign a string to an int variable later.",
      "`fmt.Println` prints any value.",
      "All declared variables must be used — the Go compiler enforces this.",
    ],
  },

  "got-go-02": {
    intro: "Houses are classified by their army size: massive, capable, or minor. Go's if/else chain maps the size to the correct tier label — no parentheses, braces required.",
    concept: "Go's `if/else if/else` chain is the standard multi-way branch. Curly braces are always required. Parentheses around conditions are a syntax error.",
    example: `package main

import "fmt"

func main() {
    armySize := 6000

    if armySize >= 10000 {
        fmt.Println("Massive army")
    } else if armySize >= 4000 {
        fmt.Println("Capable army")
    } else {
        fmt.Println("Minor force")
    }
}`,
    exampleOutput: "Capable army",
    notes: "6000 is not ≥ 10000 but is ≥ 4000. The second branch executes. All other branches are skipped.",
    keyPoints: [
      "Condition syntax: `if armySize >= 10000 {` — no `()`.",
      "Only the first matching branch runs.",
      "`else if` and `else` must be on the same line as `}`.",
      "Go's compiler rejects unchecked variable declarations.",
    ],
  },

  "got-go-03": {
    intro: "The dragonglass weapon forger uses a fixed formula to rate each weapon. A Go function encapsulates the formula so it can be called for any shard weight.",
    concept: "Go functions explicitly declare the types of parameters and return values. The type follows the parameter name. Call the function with an argument of the correct type.",
    example: `package main

import "fmt"

func weaponRating(weight int) int {
    return weight * 6
}

func main() {
    fmt.Println(weaponRating(12))
    fmt.Println(weaponRating(20))
}`,
    exampleOutput: "72\n120",
    notes: "`weaponRating` takes an `int` and returns an `int`. Two calls demonstrate the formula with different inputs.",
    keyPoints: [
      "Function signature: `func name(param type) returnType`.",
      "Return type is declared after the parameter list.",
      "`return expr` must produce the declared return type.",
      "Functions can be called from `main` or from other functions.",
    ],
  },

  "got-go-04": {
    intro: "The Night's Watch recruits are added to a slice as they swear their oath. A Go slice of names grows with each new brother — `append` is the tool for joining the Watch.",
    concept: "A Go slice is a dynamically-sized list. Use a slice literal to initialise, then `append` to extend. The result of `append` must always be reassigned to the slice variable.",
    example: `package main

import "fmt"

func main() {
    brothers := []string{"Jon", "Sam", "Grenn"}
    brothers = append(brothers, "Pyp")
    fmt.Println(len(brothers))
    fmt.Println(brothers[0])
}`,
    exampleOutput: "4\nJon",
    notes: "After appending `\"Pyp\"`, the slice has 4 elements. `brothers[0]` is still `\"Jon\"` — existing elements aren't affected by append.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}`.",
      "`s = append(s, v)` adds an element and returns the new slice.",
      "`len(s)` gives the current count.",
      "Slices are zero-indexed: `s[0]` is the first element.",
    ],
  },

  "got-go-05": {
    intro: "The Lord Commander needs the total White Walker sighting count across all watch posts. A `for range` loop sums up each post's count from the patrol slice.",
    concept: "`for _, v := range slice` iterates every element. Use an accumulator variable declared before the loop to compute a running total. Read the result after the loop completes.",
    example: `package main

import "fmt"

func main() {
    sightings := []int{3, 7, 2, 9, 4}
    total := 0
    for _, s := range sightings {
        total += s
    }
    fmt.Println(total)
}`,
    exampleOutput: "25",
    notes: "`3+7+2+9+4 = 25`. The `for range` loop visits every element and `total` grows on each pass.",
    keyPoints: [
      "`for _, v := range s` — `_` ignores the index.",
      "Accumulator declared before the loop persists after it.",
      "`total += s` is shorthand for `total = total + s`.",
      "Use `for i, v := range s` when you need the index too.",
    ],
  },

  // ─── The Matrix ───────────────────────────────────────────────────────────

  "mx-go-01": {
    intro: "Tank is logging anomaly details into Go variables: a codename string, a threat score, and an active flag. Go's `:=` creates all three in one clean syntax.",
    concept: "`:=` infers the type from the assigned value. It's idiomatic Go for variable declaration inside functions. The compiler enforces that declared variables are used.",
    example: `package main

import "fmt"

func main() {
    codename := "Smith"
    threatScore := 10
    active := true
    fmt.Println(codename)
    fmt.Println(threatScore)
    fmt.Println(active)
}`,
    exampleOutput: "Smith\n10\ntrue",
    notes: "Go infers `string`, `int`, and `bool`. Any of these variables left unused would be a compile error in Go.",
    keyPoints: [
      "`:=` = declare + assign + infer type.",
      "Only valid inside function bodies.",
      "Unused variables are compile errors — a Go safety feature.",
      "`fmt.Println` handles printing of any basic type.",
    ],
  },

  "mx-go-02": {
    intro: "Connection quality inside the Matrix needs classification: optimal, degraded, or lost. Go's if/else chain routes the connection speed value to the correct status label.",
    concept: "Go's conditional blocks have no optional syntax — curly braces are always required, conditions never use parentheses. `else` and `else if` must appear on the closing `}` line.",
    example: `package main

import "fmt"

func main() {
    connectionSpeed := 55

    if connectionSpeed >= 80 {
        fmt.Println("Optimal")
    } else if connectionSpeed >= 40 {
        fmt.Println("Degraded")
    } else {
        fmt.Println("Lost")
    }
}`,
    exampleOutput: "Degraded",
    notes: "55 passes `>= 40` but not `>= 80`. The second branch prints `\"Degraded\"`.",
    keyPoints: [
      "No `()` around conditions.",
      "Opening `{` must be on the `if` line.",
      "Closing `}` must share a line with `else`.",
      "All branches require `{}`.",
    ],
  },

  "mx-go-03": {
    intro: "Neo's dodge training rating is a precise formula based on his speed multiplier. A Go function encapsulates the calculation so Morpheus can call it for any training level.",
    concept: "Go function parameters and return types must be declared explicitly. Call the function with a matching argument type. The return value can be used directly in `fmt.Println`.",
    example: `package main

import "fmt"

func dodgeRating(speed int) int {
    return speed * 9
}

func main() {
    fmt.Println(dodgeRating(7))
    fmt.Println(dodgeRating(11))
}`,
    exampleOutput: "63\n99",
    notes: "`dodgeRating(7)` returns `63`; `dodgeRating(11)` returns `99`. The function is called twice — Go doesn't restrict how many times a function is called.",
    keyPoints: [
      "Parameter type goes after the name: `speed int`.",
      "Return type follows the `()`: `func f(x int) int`.",
      "`return` ends the function and delivers the result.",
      "Calling a function inside `fmt.Println(...)` is valid.",
    ],
  },

  "mx-go-04": {
    intro: "Tank is building the crew manifest for the next run into the Matrix. A Go slice of operative names grows as more are cleared for deployment — `append` extends the list.",
    concept: "Go slices grow with `append`. The function returns a new slice with the element added. Always assign the result back. `len` gives the current size.",
    example: `package main

import "fmt"

func main() {
    operatives := []string{"Morpheus", "Trinity", "Tank"}
    operatives = append(operatives, "Neo")
    fmt.Println(len(operatives))
    fmt.Println(operatives[3])
}`,
    exampleOutput: "4\nNeo",
    notes: "`Neo` is appended at index 3 (the fourth position). `len` updates to 4. Accessing `operatives[3]` retrieves the newly added element.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}`.",
      "`s = append(s, v)` adds to the end.",
      "`len(s)` counts elements.",
      "Index starts at 0 — new element is at `len-1`.",
    ],
  },

  "mx-go-05": {
    intro: "The anomaly scanner returns threat readings from every node. Neo needs the total threat load across all nodes — a `for range` loop accumulates the sum.",
    concept: "`for _, v := range slice` visits every element without manual index management. Paired with an accumulator, it sums, counts, or analyses any slice.",
    example: `package main

import "fmt"

func main() {
    readings := []int{12, 25, 8, 31, 19}
    total := 0
    for _, r := range readings {
        total += r
    }
    fmt.Println(total)
}`,
    exampleOutput: "95",
    notes: "`12+25+8+31+19 = 95`. Each pass adds the current reading to `total`.",
    keyPoints: [
      "`_` discards the loop index.",
      "Loop variable `r` is a copy — modifying it doesn't change the slice.",
      "Declare accumulator before the loop, read it after.",
      "`for i, v := range s` gives both index and value.",
    ],
  },

  // ─── Rick and Morty ───────────────────────────────────────────────────────

  "rm-go-01": {
    intro: "Morty needs to log dimension details before Rick lets him operate the portal gun. Go's `:=` creates the dimension ID, danger rating, and visited flag in clean, minimal syntax.",
    concept: "Go's `:=` short declaration is the primary way to create variables inside functions. It infers type from the value, so you don't need to write `string`, `int`, or `bool` explicitly.",
    example: `package main

import "fmt"

func main() {
    dimensionId := "C-137"
    dangerLevel := 3
    visited := true
    fmt.Println(dimensionId)
    fmt.Println(dangerLevel)
    fmt.Println(visited)
}`,
    exampleOutput: "C-137\n3\ntrue",
    notes: "`\"C-137\"` → `string`, `3` → `int`, `true` → `bool`. All three types are inferred automatically.",
    keyPoints: [
      "`:=` inside a function body — no `var` needed.",
      "Go infers types from right-hand-side values.",
      "All declared variables must be used.",
      "`fmt.Println` prints value + newline.",
    ],
  },

  "rm-go-02": {
    intro: "Rick classifies each dimension before jumping in. Safe, risky, and lethal are the three tiers — a Go if/else chain maps the danger level to the right label.",
    concept: "Go conditionals require curly braces and forbid parentheses around the condition. `else` must be on the same line as the closing `}` of the previous block.",
    example: `package main

import "fmt"

func main() {
    dangerLevel := 6

    if dangerLevel >= 9 {
        fmt.Println("Lethal — abort")
    } else if dangerLevel >= 5 {
        fmt.Println("Risky — proceed with care")
    } else {
        fmt.Println("Safe to enter")
    }
}`,
    exampleOutput: "Risky — proceed with care",
    notes: "6 is in the 5–8 range, so the second branch runs. Go's compiler will reject `} else {` if `else` is on its own line.",
    keyPoints: [
      "Condition without `()`: `if dangerLevel >= 9 {`",
      "`else` on the same line as `}`: `} else if ...`",
      "Every block needs `{}`.",
      "Conditions are evaluated top-to-bottom; first match wins.",
    ],
  },

  "rm-go-03": {
    intro: "Portal gun charge depletes by a set amount per jump. Rick's formula needs a function — call it with any jump count and get the remaining charge instantly.",
    concept: "Go functions use explicit types for parameters and return values. Type follows the parameter name. The return type follows the parentheses. `return` delivers the result.",
    example: `package main

import "fmt"

func chargeLeft(jumps int) int {
    return 100 - jumps*8
}

func main() {
    fmt.Println(chargeLeft(5))
    fmt.Println(chargeLeft(10))
}`,
    exampleOutput: "60\n20",
    notes: "`chargeLeft(5)` returns `100 - 40 = 60`. `chargeLeft(10)` returns `100 - 80 = 20`. One function, two calls.",
    keyPoints: [
      "Signature: `func name(param type) returnType { return expr }`",
      "Go multiplication has higher precedence than subtraction.",
      "Return type must match what you actually return.",
      "Call from `main` or any other function.",
    ],
  },

  "rm-go-04": {
    intro: "Rick's dimensional travel log is a slice of visited dimension IDs. New dimensions are added with `append` as the adventure continues.",
    concept: "Slices in Go are reference types that grow dynamically with `append`. Always reassign the result of `append` to the original slice variable.",
    example: `package main

import "fmt"

func main() {
    visited := []string{"C-137", "J-22", "K-83"}
    visited = append(visited, "M-99")
    fmt.Println(len(visited))
    fmt.Println(visited[3])
}`,
    exampleOutput: "4\nM-99",
    notes: "`M-99` is added at index 3. `len` updates to 4. The previously existing elements remain at their original indexes.",
    keyPoints: [
      "Slice literal: `[]string{...}`.",
      "`append` returns the new slice — must be reassigned.",
      "`len(s)` = number of elements.",
      "New element is always at index `len(s)-1` after append.",
    ],
  },

  "rm-go-05": {
    intro: "Rick wants to know the total interdimensional distance travelled across all portal jumps. A `for range` loop accumulates all the jump distances from a slice.",
    concept: "The accumulator loop is fundamental Go: start at zero, range over the slice, and add each element. The final sum lives in the accumulator after the loop.",
    example: `package main

import "fmt"

func main() {
    jumpDistances := []int{42, 17, 83, 29, 55}
    total := 0
    for _, d := range jumpDistances {
        total += d
    }
    fmt.Println(total)
}`,
    exampleOutput: "226",
    notes: "`42+17+83+29+55 = 226`. Go's `for range` handles the iteration; `total += d` builds the sum.",
    keyPoints: [
      "`for _, v := range s` — `_` ignores the index.",
      "Accumulator initialised to 0 before the loop.",
      "`total += d` is shorthand for `total = total + d`.",
      "Result read after the loop ends.",
    ],
  },

  // ─── Squid Game ───────────────────────────────────────────────────────────

  "sg-go-01": {
    intro: "Player registration captures a number, a name, and their debt amount. Go's `:=` creates all three cleanly, with the compiler handling type inference.",
    concept: "`:=` is the shorthand declaration syntax in Go. It declares the variable, assigns the initial value, and infers the type from what's on the right side — all in one line.",
    example: `package main

import "fmt"

func main() {
    playerNumber := 456
    playerName := "Seong Gi-hun"
    debt := 160000000
    fmt.Println(playerNumber)
    fmt.Println(playerName)
    fmt.Println(debt)
}`,
    exampleOutput: "456\nSeong Gi-hun\n160000000",
    notes: "Three variables, three inferred types: `int`, `string`, `int`. All are required to be used in Go — unused variables are compile errors.",
    keyPoints: [
      "`:=` declares, assigns, and infers type in one step.",
      "Only inside functions — `var` for package-level declarations.",
      "Unused variables cause compile errors.",
      "`fmt.Println` handles any printable type.",
    ],
  },

  "sg-go-02": {
    intro: "The game phase is determined by how many players remain. A Go if/else chain maps the player count to the game phase label — no parentheses, mandatory braces.",
    concept: "Go's `if/else if/else` evaluates top-to-bottom, executes the first matching block, and skips the rest. Braces are mandatory; parentheses are forbidden.",
    example: `package main

import "fmt"

func main() {
    players := 82

    if players > 200 {
        fmt.Println("Opening phase")
    } else if players > 50 {
        fmt.Println("Mid-game phase")
    } else {
        fmt.Println("Final phase")
    }
}`,
    exampleOutput: "Mid-game phase",
    notes: "82 passes `> 50` but not `> 200`. The second branch prints `\"Mid-game phase\"`.",
    keyPoints: [
      "No `()` around the condition.",
      "Opening `{` on the same line as `if`.",
      "`} else if` on the same line as the preceding `}`.",
      "All block bodies require `{}`.",
    ],
  },

  "sg-go-03": {
    intro: "The prize pool calculation is consistent: multiply eliminations by the prize per player. A Go function encapsulates this formula for reuse across all game phases.",
    concept: "Go functions explicitly type their parameters and return values. This makes function contracts clear at a glance — the caller knows exactly what type to pass and what type they'll get back.",
    example: `package main

import "fmt"

func prizePool(eliminations int) int {
    return eliminations * 100000000
}

func main() {
    fmt.Println(prizePool(10))
    fmt.Println(prizePool(455))
}`,
    exampleOutput: "1000000000\n45500000000",
    notes: "`prizePool(10)` returns `10 * 100000000 = 1000000000`. Note: Go's `int` is 64-bit on modern systems, so large values are fine.",
    keyPoints: [
      "Parameter: `eliminations int` (name then type).",
      "Return type after `()`: `func f(x int) int`.",
      "`return` exits with the value.",
      "Go `int` is 64-bit on 64-bit systems — handles large numbers.",
    ],
  },

  "sg-go-04": {
    intro: "Guard assignments fill up as more shapes are assigned to posts. A Go slice of guard IDs grows with `append` as new guards are posted.",
    concept: "Go slices are flexible lists. Initialise with a literal, grow with `append`. The `append` function returns a new slice — assign it back. Use `len` to count elements.",
    example: `package main

import "fmt"

func main() {
    guards := []string{"Triangle-01", "Circle-07", "Square-12"}
    guards = append(guards, "Triangle-22")
    fmt.Println(len(guards))
    fmt.Println(guards[3])
}`,
    exampleOutput: "4\nTriangle-22",
    notes: "After appending, there are 4 guards. `guards[3]` retrieves the newly added element.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}`.",
      "`guards = append(guards, v)` extends the slice.",
      "`len(guards)` reflects the current count.",
      "New element is at index `len(guards)-1`.",
    ],
  },

  "sg-go-05": {
    intro: "The glass bridge eliminated players round by round. A `for range` loop sums all the per-round elimination counts to give the total number of players who didn't make it.",
    concept: "Summing a slice with `for range` is a cornerstone Go pattern. Range gives you the element on each pass. The accumulator collects the running total outside the loop.",
    example: `package main

import "fmt"

func main() {
    eliminations := []int{4, 7, 3, 9, 2}
    total := 0
    for _, e := range eliminations {
        total += e
    }
    fmt.Println(total)
}`,
    exampleOutput: "25",
    notes: "`4+7+3+9+2 = 25`. Go's for-range handles iteration cleanly with no index management required.",
    keyPoints: [
      "`for _, v := range slice` iterates every element.",
      "Declare accumulator (`total := 0`) before the loop.",
      "`total += e` builds the sum on each pass.",
      "Print after the loop — not inside — for the final result.",
    ],
  },

  // ─── Arrested Development ─────────────────────────────────────────────────

  "ad-go-01": {
    intro: "The Bluth Company has legitimate books — at least on paper. Michael needs a Go program to document the company name, the truck count, and whether operations are currently licensed.",
    concept: "Go's `:=` short declaration infers the type from the value. You don't need to write `var name string = \"...\"`; Go figures it out. Types are enforced at compile time.",
    example: `package main

import "fmt"

func main() {
    company := "Bluth Company"
    offices := 3
    licensed := true
    fmt.Println(company)
    fmt.Println(offices)
    fmt.Println(licensed)
}`,
    exampleOutput: "Bluth Company\n3\ntrue",
    notes: "`:=` declares and initialises in one step. The types are inferred as `string`, `int`, and `bool`. `fmt.Println` prints each value followed by a newline.",
    keyPoints: [
      "`:=` declares and assigns; type is inferred from the right-hand side.",
      "Use `var` instead when you need the variable to outlive the initial assignment.",
      "`fmt.Println(val)` prints the value and a newline.",
      "Go enforces types — you can't assign a string to an int variable.",
    ],
  },

  "ad-go-02": {
    intro: "Tobias has a strict 'never-nude' policy — he will not remove his jorts under any circumstances. Go's if/else checks whether the jorts are on and prints the appropriate response.",
    concept: "Go's `if/else` is similar to other languages but doesn't require parentheses around the condition. The braces `{}` are mandatory even for single-line bodies.",
    example: `package main

import "fmt"

func main() {
    jortsOn := true
    if jortsOn {
        fmt.Println("Comfortable and confident.")
    } else {
        fmt.Println("There are dozens of us!")
    }
}`,
    exampleOutput: "Comfortable and confident.",
    notes: "`jortsOn` is `true` so the first branch runs. Boolean variables are used directly without `== true`.",
    keyPoints: [
      "Go `if`: no parentheses around the condition.",
      "Braces `{}` are required — even for a single statement.",
      "Boolean variable: `if jortsOn { }` — don't write `if jortsOn == true`.",
      "`else` must start on the same line as the closing `}` of `if`.",
    ],
  },

  "ad-go-03": {
    intro: "The banana stand sells frozen bananas at a fixed price. There's always money in the banana stand — especially when the function correctly multiplies units sold by price per unit.",
    concept: "Go functions are declared with `func name(params) returnType { ... }`. Parameters list name then type. The `return` statement sends the value back to the caller.",
    example: `package main

import "fmt"

func bananaRevenue(units int, price int) int {
    return units * price
}

func main() {
    fmt.Println(bananaRevenue(150, 2))
}`,
    exampleOutput: "300",
    notes: "`150 * 2 = 300`. The function multiplies its two `int` parameters and returns the result.",
    keyPoints: [
      "`func name(a type, b type) returnType { ... }` — Go function syntax.",
      "Parameters are `name type` not `type name`.",
      "`return expr` exits the function and sends `expr` to the caller.",
      "Call the function by name with arguments: `bananaRevenue(150, 2)`.",
    ],
  },

  "ad-go-04": {
    intro: "The Bluth Company has tried many ventures. After the latest board meeting, a new one was added to the ledger. Track the list and confirm the updated count.",
    concept: "Go slices are dynamic sequences. `append(slice, val)` returns a new slice with the value added — you must assign the result back. `len(slice)` returns the current count.",
    example: `package main

import "fmt"

func main() {
    ventures := []string{"banana stand", "housing development", "Gobias Industries"}
    ventures = append(ventures, "The Gothic Castle")
    fmt.Println(len(ventures))
}`,
    exampleOutput: "4",
    notes: "`append` returns a new slice; you must re-assign it to `ventures`. After appending, `len` returns `4`.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}` — note the `[]` prefix.",
      "`append(slice, val)` — must assign the return value back: `slice = append(slice, val)`.",
      "`len(slice)` returns the number of elements.",
      "Go slices grow automatically; arrays are fixed-size.",
    ],
  },

  "ad-go-05": {
    intro: "Gob is performing his 'illusions' for the investors — five total. After each one goes predictably wrong, he needs to log the number. A range loop handles the count.",
    concept: "A `for range` loop over a slice visits every element. When you only need the element (not the index), use `_` to discard the index.",
    example: `package main

import "fmt"

func main() {
    illusions := []string{"coin", "bird", "dove", "fire", "disappear"}
    count := 0
    for _, trick := range illusions {
        _ = trick
        count++
    }
    fmt.Println(count)
}`,
    exampleOutput: "5",
    notes: "`_` discards the loop index. `count++` increments for each element. After the loop, `count` equals the slice length.",
    keyPoints: [
      "`for _, v := range slice` — `_` discards the index; `v` receives the element.",
      "`count++` increments by 1 each iteration.",
      "Declare `count := 0` before the loop; print after.",
      "Alternatively, just use `fmt.Println(len(illusions))`.",
    ],
  },

  // ─── Barbie ───────────────────────────────────────────────────────────────

  "ba-go-01": {
    intro: "Every Barbie has a name, a career, and a happiness rating. This Go program documents the key facts about Barbie before the morning parade.",
    concept: "Go's `:=` short variable declaration infers the type. `string`, `int`, and `bool` are the most common basic types. `fmt.Println` prints each value on its own line.",
    example: `package main

import "fmt"

func main() {
    name := "Barbie"
    career := "Astronaut"
    happy := true
    fmt.Println(name)
    fmt.Println(career)
    fmt.Println(happy)
}`,
    exampleOutput: "Barbie\nAstronaut\ntrue",
    notes: "Three variables declared with `:=`. Go infers `string`, `string`, and `bool` from the values. `fmt.Println` prints each on a separate line.",
    keyPoints: [
      "`:=` declares and initialises; type is inferred.",
      "String values use double quotes.",
      "`bool` values are `true` or `false` (lowercase in Go).",
      "`fmt.Println(val)` prints the value with a trailing newline.",
    ],
  },

  "ba-go-02": {
    intro: "Barbieland has a strict pink ratio requirement. If a wardrobe is at least 80% pink, it passes the certification check. Otherwise, it needs a redesign.",
    concept: "Go `if/else` evaluates a condition without parentheses. Use `>=` to check greater-than-or-equal. Boolean comparisons are direct — no extra wrapper needed.",
    example: `package main

import "fmt"

func main() {
    pinkPercent := 85
    if pinkPercent >= 80 {
        fmt.Println("Certified!")
    } else {
        fmt.Println("Add more pink.")
    }
}`,
    exampleOutput: "Certified!",
    notes: "`pinkPercent` is 85 which is ≥ 80, so the first branch runs. Braces are mandatory in Go even for single-statement bodies.",
    keyPoints: [
      "No parentheses around the Go `if` condition.",
      "Mandatory braces `{}` — even for one-liners.",
      "`>=` is greater-than-or-equal.",
      "`else` must appear on the same line as the closing `}` of `if`.",
    ],
  },

  "ba-go-03": {
    intro: "Barbie's stylist charges per outfit plus a flat accessory fee. The total cost calculation is the same every time — package it in a Go function.",
    concept: "Go functions use `func name(params) returnType { return value }`. Parameters are `name type`; the return type follows the parameter list.",
    example: `package main

import "fmt"

func totalCost(outfit int, accessories int) int {
    return outfit + accessories
}

func main() {
    fmt.Println(totalCost(200, 75))
}`,
    exampleOutput: "275",
    notes: "`200 + 75 = 275`. The function adds both parameters and returns the result. `main` prints it.",
    keyPoints: [
      "Function syntax: `func name(a type, b type) returnType { ... }`.",
      "Parameters: name then type (unlike many languages).",
      "`return expr` sends the value back.",
      "Call by name: `totalCost(200, 75)` passes arguments positionally.",
    ],
  },

  "ba-go-04": {
    intro: "Barbie has too many hobbies to remember. She keeps a Go slice of her current interests and adds a new one after the workshop she attended in the Real World.",
    concept: "Go slices are growable sequences. `append(slice, val)` returns a new slice; assign it back. `len(slice)` returns the element count.",
    example: `package main

import "fmt"

func main() {
    hobbies := []string{"surfing", "medicine", "fashion"}
    hobbies = append(hobbies, "philosophy")
    fmt.Println(len(hobbies))
}`,
    exampleOutput: "4",
    notes: "`append` returns a new slice — the result must be assigned back to `hobbies`. After appending, `len` returns `4`.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}` — square brackets before the type.",
      "`hobbies = append(hobbies, \"philosophy\")` — must reassign.",
      "`len(hobbies)` returns the current element count.",
      "Slices grow dynamically; Go arrays are fixed-size.",
    ],
  },

  "ba-go-05": {
    intro: "Every day in Barbieland is a perfect day. Barbie counts how many activities went perfectly — using a range loop over the day's activity list.",
    concept: "Go's `for _, v := range slice` visits every element. An accumulator variable updated inside the loop totals a count or sum.",
    example: `package main

import "fmt"

func main() {
    days := []string{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"}
    perfect := 0
    for _, d := range days {
        _ = d
        perfect++
    }
    fmt.Println(perfect)
}`,
    exampleOutput: "5",
    notes: "Every day is perfect, so `perfect` increments for each element. `_ = d` silences the unused variable warning.",
    keyPoints: [
      "`for _, v := range slice` iterates all elements.",
      "`_` discards values you don't need (index here).",
      "Accumulator pattern: declare before loop, update inside, print after.",
      "Go requires all declared variables to be used — `_ = d` satisfies this.",
    ],
  },

  // ─── Sex and the City ─────────────────────────────────────────────────────

  "sc-go-01": {
    intro: "Carrie Bradshaw tracks her column statistics: her pen name, the word count for this week's piece, and whether she's met the deadline.",
    concept: "Go's `:=` infers types from values: `string`, `int`, `bool`. Use `fmt.Println` to print each variable on its own line.",
    example: `package main

import "fmt"

func main() {
    author := "Carrie Bradshaw"
    wordCount := 850
    deadlineMet := true
    fmt.Println(author)
    fmt.Println(wordCount)
    fmt.Println(deadlineMet)
}`,
    exampleOutput: "Carrie Bradshaw\n850\ntrue",
    notes: "Three short declarations, three `fmt.Println` calls. Go infers `string`, `int`, and `bool` from the assigned values.",
    keyPoints: [
      "`:=` — short declaration with type inference.",
      "String literals use double quotes.",
      "`bool` is `true` or `false` (lowercase in Go).",
      "`fmt.Println` adds a newline after each value.",
    ],
  },

  "sc-go-02": {
    intro: "Carrie pays $2,700 a month for her Upper East Side apartment — on a columnist's salary. A Go conditional checks whether her income can realistically cover it.",
    concept: "Go `if/else` evaluates a condition without parentheses. Comparison operators like `>` and `>=` work on numeric types.",
    example: `package main

import "fmt"

func main() {
    monthlyIncome := 3500
    rent := 2700
    if monthlyIncome > rent {
        fmt.Println("Covers rent. Barely.")
    } else {
        fmt.Println("Time to ask Aidan for a loan.")
    }
}`,
    exampleOutput: "Covers rent. Barely.",
    notes: "3500 > 2700 is true, so the first branch runs. The `else` is skipped.",
    keyPoints: [
      "Go `if` needs no parentheses: `if condition { }`.",
      "Braces are mandatory even for one-line bodies.",
      "`>` checks strictly greater than.",
      "`else` must be on the same line as the closing `}` of the `if` block.",
    ],
  },

  "sc-go-03": {
    intro: "Samantha mixes Cosmos obsessively. The recipe is exact: each round uses a fixed amount of vodka. A Go function calculates total vodka needed for any number of rounds.",
    concept: "Go functions: `func name(params) returnType { return expr }`. Parameters use `name type` order. The `return` statement sends the computed value back.",
    example: `package main

import "fmt"

func cosmoVodka(rounds int) int {
    return rounds * 2
}

func main() {
    fmt.Println(cosmoVodka(4))
}`,
    exampleOutput: "8",
    notes: "`4 * 2 = 8` ounces of vodka for 4 rounds. The function multiplies and returns; `main` prints the result.",
    keyPoints: [
      "Function: `func name(a type) returnType { return ... }`.",
      "Parameter order: name then type.",
      "`return` exits and sends the value to the caller.",
      "Call: `cosmoVodka(4)` — pass arguments by position.",
    ],
  },

  "sc-go-04": {
    intro: "Carrie is writing her memoir chapter on the significant men. She keeps a Go slice of their names, adds the most recent one, and confirms the updated count.",
    concept: "Go slices hold a dynamic sequence. `append(slice, val)` adds an element (must be reassigned). `len(slice)` returns the count.",
    example: `package main

import "fmt"

func main() {
    exes := []string{"Big", "Aidan", "Petrovsky"}
    exes = append(exes, "Berger")
    fmt.Println(len(exes))
}`,
    exampleOutput: "4",
    notes: "After appending `'Berger'`, the slice has four elements. `len` confirms the count.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}` — type preceded by `[]`.",
      "`exes = append(exes, \"Berger\")` — reassign the return value.",
      "`len(exes)` returns current length.",
      "Slices are references; `append` may create a new backing array internally.",
    ],
  },

  "sc-go-05": {
    intro: "Carrie counts the total words across all her published columns. A loop over the word-count slice accumulates the grand total.",
    concept: "`for _, v := range slice` visits every element. An accumulator updated inside the loop produces a running total.",
    example: `package main

import "fmt"

func main() {
    columns := []int{900, 850, 1100, 750, 980}
    total := 0
    for _, words := range columns {
        total += words
    }
    fmt.Println(total)
}`,
    exampleOutput: "4580",
    notes: "`900+850+1100+750+980 = 4580`. The loop adds each element to `total`. Print after the loop for the final sum.",
    keyPoints: [
      "`for _, v := range slice` — `_` discards the index.",
      "Accumulator: `total := 0` before the loop.",
      "`total += words` adds each element to the running sum.",
      "Print the result after the loop exits.",
    ],
  },

  // ─── Sopranos ─────────────────────────────────────────────────────────────

  "sp-go-01": {
    intro: "Soprano Waste Management has legitimate books and less-legitimate books. This program covers the legitimate ones — for when the feds stop by. Go's type system keeps everything clean.",
    concept: "Go's `:=` short declaration infers variable types from values. `string`, `int`, and `bool` are the fundamental types. `fmt.Println` prints each on its own line.",
    example: `package main

import "fmt"

func main() {
    company := "Soprano Waste"
    trucks := 12
    licensed := true
    fmt.Println(company)
    fmt.Println(trucks)
    fmt.Println(licensed)
}`,
    exampleOutput: "Soprano Waste\n12\ntrue",
    notes: "Three variables inferred as `string`, `int`, and `bool`. `fmt.Println` prints each with a trailing newline.",
    keyPoints: [
      "`:=` declares and initialises; type is inferred from the value.",
      "Go enforces types at compile time.",
      "`fmt.Println(val)` prints `val` and advances to a new line.",
      "Go requires the `fmt` package to be imported before use.",
    ],
  },

  "sp-go-02": {
    intro: "In the family, loyalty is everything. Tony needs a quick Go check: if a crew member is loyal, they stay. If not, Silvio handles the conversation.",
    concept: "Go `if/else` evaluates a boolean condition without parentheses. Boolean variables are used directly — no `== true` needed.",
    example: `package main

import "fmt"

func main() {
    loyal := true
    if loyal {
        fmt.Println("You're with us.")
    } else {
        fmt.Println("We'll talk.")
    }
}`,
    exampleOutput: "You're with us.",
    notes: "`loyal` is `true`, so the first branch prints. The `else` is skipped.",
    keyPoints: [
      "Go `if` — no parentheses around the condition.",
      "Boolean variable used directly: `if loyal` not `if loyal == true`.",
      "Mandatory braces `{}`.",
      "`else` on the same line as the closing `}` of `if`.",
    ],
  },

  "sp-go-03": {
    intro: "Every earner kicks up a percentage to Tony. The accountant uses a Go function to calculate the cut automatically — so there's no arguing about the math later.",
    concept: "Go functions: `func name(a type, b type) returnType { return expr }`. Parameters list name then type. `return` sends the result back.",
    example: `package main

import "fmt"

func cut(earnings int, pct int) int {
    return earnings * pct / 100
}

func main() {
    fmt.Println(cut(80000, 20))
}`,
    exampleOutput: "16000",
    notes: "`80000 * 20 / 100 = 16000`. Integer arithmetic truncates fractional results. The function returns the computed cut.",
    keyPoints: [
      "Function syntax: `func name(a type, b type) returnType { ... }`.",
      "Integer division in Go truncates toward zero.",
      "`return` exits the function and returns the value.",
      "Call by name from `main`: `cut(80000, 20)`.",
    ],
  },

  "sp-go-04": {
    intro: "The DiMeo family controls specific territories in New Jersey. After the sit-down with New York, a new territory was added to the agreement. Update the slice and confirm the count.",
    concept: "Go slices are dynamic sequences. `append(slice, val)` returns a new slice — must be reassigned. `len(slice)` returns the current count.",
    example: `package main

import "fmt"

func main() {
    territories := []string{"North Jersey", "Newark", "Essex County"}
    territories = append(territories, "Hoboken")
    fmt.Println(len(territories))
}`,
    exampleOutput: "4",
    notes: "`append` returns a new slice; re-assigning keeps the update. After adding Hoboken, `len` returns `4`.",
    keyPoints: [
      "Slice literal: `[]string{\"a\", \"b\"}` — square brackets before the type.",
      "`territories = append(territories, \"Hoboken\")` — must reassign.",
      "`len(territories)` returns the element count.",
      "Go slices grow dynamically as you append.",
    ],
  },

  "sp-go-05": {
    intro: "Bobby collects the weekly earnings from each crew member and brings them to Tony. The amounts need to be totalled before the sit-down so Tony knows what he's working with.",
    concept: "`for _, v := range slice` iterates a slice. An accumulator variable updated on each iteration produces the total.",
    example: `package main

import "fmt"

func main() {
    earnings := []int{4500, 8200, 3100, 6700, 5500}
    total := 0
    for _, v := range earnings {
        total += v
    }
    fmt.Println(total)
}`,
    exampleOutput: "28000",
    notes: "`4500+8200+3100+6700+5500 = 28000`. The range loop visits each element; `total += v` accumulates the sum.",
    keyPoints: [
      "`for _, v := range earnings` — `_` discards index; `v` holds each value.",
      "Accumulator: `total := 0` before the loop.",
      "`total += v` adds each earning to the running sum.",
      "Print after the loop for the final result.",
    ],
  },

  // ─── Lesson 06 — fmt.Sprintf / String Formatting ─────────────────────────

  "st-go-06": {
    intro: "Eleven's radio message comes through as fragments. Dustin uses `fmt.Sprintf` to format them into a complete, clean string before logging the transmission.",
    concept: "`fmt.Sprintf` formats a string using a format pattern and returns it as a value (unlike `fmt.Println` which prints directly). Use `%s` for strings, `%d` for integers, `%v` for any value.",
    example: `package main
import "fmt"
func main() {
    name := "Eleven"
    level := 11
    msg := fmt.Sprintf("Agent: %s, Level: %d", name, level)
    fmt.Println(msg)
}`,
    exampleOutput: "Agent: Eleven, Level: 11",
    notes: "`fmt.Sprintf` substitutes `%s` with `name` and `%d` with `level`, returning the formatted string stored in `msg`.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns a formatted string.",
      "`%s` — string; `%d` — integer; `%f` — float; `%v` — any type.",
      "Does NOT print — use `fmt.Println(result)` to display it.",
      "Useful for building strings that will be stored or returned from a function.",
    ],
  },

  "sv-go-06": {
    intro: "The MDR reporting system builds formatted employee status lines. Mark uses `fmt.Sprintf` to combine the ID and clearance level into a single display string.",
    concept: "`fmt.Sprintf` formats a string using a pattern and returns it as a value. Use `%s` for strings and `%d` for integers.",
    example: `package main
import "fmt"
func main() {
    id := "MDR-4"
    clearance := 2
    label := fmt.Sprintf("Employee %s — Clearance %d", id, clearance)
    fmt.Println(label)
}`,
    exampleOutput: "Employee MDR-4 — Clearance 2",
    notes: "`fmt.Sprintf` substitutes `%s` with `id` and `%d` with `clearance`, returning the formatted string.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns a formatted string.",
      "`%s` for strings, `%d` for integers.",
      "Store the result in a variable or return it from a function.",
      "Use `fmt.Printf` to format and print in one step.",
    ],
  },

  "bb-go-06": {
    intro: "Walt labels each batch with a formatted string combining the batch ID and purity percentage. He uses `fmt.Sprintf` to build the label.",
    concept: "`fmt.Sprintf` formats a string using a pattern and returns it. Use `%s` for strings, `%d` for integers.",
    example: `package main
import "fmt"
func main() {
    batchID := "BB-42"
    purity := 99
    label := fmt.Sprintf("Batch %s — Purity: %d%%", batchID, purity)
    fmt.Println(label)
}`,
    exampleOutput: "Batch BB-42 — Purity: 99%",
    notes: "`%%` is an escaped percent sign in Go's format string. `%s` and `%d` are substituted with the variables.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns a formatted string.",
      "`%%` prints a literal `%` sign.",
      "`%s` — string; `%d` — integer.",
      "Store the result and use it wherever a string is needed.",
    ],
  },

  "to-go-06": {
    intro: "Pam formats the employee directory entries using `fmt.Sprintf` to combine each name and branch into a display string for the bulletin board.",
    concept: "`fmt.Sprintf` formats a string using a pattern and returns it as a value. Use `%s` for strings, `%d` for integers, `%v` for any type.",
    example: `package main
import "fmt"
func main() {
    name := "Jim Halpert"
    branch := "Scranton"
    entry := fmt.Sprintf("%s — Branch: %s", name, branch)
    fmt.Println(entry)
}`,
    exampleOutput: "Jim Halpert — Branch: Scranton",
    notes: "`fmt.Sprintf` substitutes both `%s` placeholders with `name` and `branch`, returning the combined string.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns the formatted string.",
      "`%s` for strings — can be used multiple times.",
      "Arguments are matched left-to-right to each `%` verb.",
      "Use `fmt.Printf` to format-and-print in one step.",
    ],
  },

  "got-go-06": {
    intro: "The Grand Maester formats raven messages as structured labels using `fmt.Sprintf` to combine the source house and message text.",
    concept: "`fmt.Sprintf` formats a string using a pattern and returns it. Use `%s` for strings, `%d` for integers.",
    example: `package main
import "fmt"
func main() {
    house := "Stark"
    message := "Winter is Coming"
    raven := fmt.Sprintf("From %s: %s", house, message)
    fmt.Println(raven)
}`,
    exampleOutput: "From Stark: Winter is Coming",
    notes: "`fmt.Sprintf` substitutes the two `%s` placeholders with `house` and `message`, returning the formatted raven label.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns the formatted string.",
      "`%s` matches each string argument left-to-right.",
      "Use `%d` for integers, `%f` for floats.",
      "Store the result or return it from a function.",
    ],
  },

  "mx-go-06": {
    intro: "The Matrix assigns every agent a formatted code string. Tank uses `fmt.Sprintf` to build the agent label from the codename and sector number.",
    concept: "`fmt.Sprintf` formats a string using a pattern and returns it as a value. Use `%s` for strings, `%d` for integers.",
    example: `package main
import "fmt"
func main() {
    codename := "Smith"
    sector := 7
    label := fmt.Sprintf("Agent %s — Sector %d", codename, sector)
    fmt.Println(label)
}`,
    exampleOutput: "Agent Smith — Sector 7",
    notes: "`fmt.Sprintf` substitutes `%s` with `codename` and `%d` with `sector`, returning the label string.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns the formatted string.",
      "`%s` for strings, `%d` for integers.",
      "Arguments match the `%` verbs left-to-right.",
      "Use `fmt.Printf` to format and print without a variable.",
    ],
  },

  "rm-go-06": {
    intro: "Rick builds a portal gun status label for each dimension using `fmt.Sprintf`. The label combines the dimension ID and portal fluid level.",
    concept: "`fmt.Sprintf` formats a string using a pattern and returns it as a value. Use `%s` for strings, `%d` for integers.",
    example: `package main
import "fmt"
func main() {
    dimension := "C-137"
    fluid := 42
    status := fmt.Sprintf("Dimension: %s | Fluid: %d%%", dimension, fluid)
    fmt.Println(status)
}`,
    exampleOutput: "Dimension: C-137 | Fluid: 42%",
    notes: "`%%` produces a literal `%`. `%s` and `%d` are substituted with `dimension` and `fluid`.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns the formatted string.",
      "`%%` prints a literal `%` sign.",
      "`%s` — string; `%d` — integer.",
      "Store the result in a variable for later use.",
    ],
  },

  "sg-go-06": {
    intro: "The game's display board formats each player's code as a label combining their number and status. The organisers use `fmt.Sprintf` to build it.",
    concept: "`fmt.Sprintf` formats a string using a pattern and returns it as a value. Use `%d` for integers, `%s` for strings.",
    example: `package main
import "fmt"
func main() {
    playerNum := 456
    status := "Active"
    label := fmt.Sprintf("Player %d — Status: %s", playerNum, status)
    fmt.Println(label)
}`,
    exampleOutput: "Player 456 — Status: Active",
    notes: "`%d` substitutes `playerNum` and `%s` substitutes `status`. The result is returned as a new string.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns the formatted string.",
      "`%d` for integers, `%s` for strings.",
      "Arguments match `%` verbs left-to-right.",
      "Use `fmt.Printf` to format and print in one step.",
    ],
  },

  "ad-go-06": {
    intro: "Michael formats each Bluth asset as a labelled entry for the SEC audit using `fmt.Sprintf` to combine name and value.",
    concept: "`fmt.Sprintf` formats a string using a pattern and returns it as a value. Use `%s` for strings, `%d` for integers.",
    example: `package main
import "fmt"
func main() {
    asset := "Banana Stand"
    value := 250000
    entry := fmt.Sprintf("Asset: %s — Value: $%d", asset, value)
    fmt.Println(entry)
}`,
    exampleOutput: "Asset: Banana Stand — Value: $250000",
    notes: "`%s` substitutes `asset` and `%d` substitutes `value`. The formatted string is stored in `entry`.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns the formatted string.",
      "`%s` — string; `%d` — integer.",
      "Arguments matched left-to-right to `%` verbs.",
      "Use for building display strings or log messages.",
    ],
  },

  "ba-go-06": {
    intro: "Barbie formats her résumé headline using `fmt.Sprintf` to combine her name and current career into a single display string.",
    concept: "`fmt.Sprintf` formats a string using a pattern and returns it as a value. Use `%s` for strings.",
    example: `package main
import "fmt"
func main() {
    name := "Barbie"
    career := "President"
    headline := fmt.Sprintf("Hi, I'm %s and I'm a %s!", name, career)
    fmt.Println(headline)
}`,
    exampleOutput: "Hi, I'm Barbie and I'm a President!",
    notes: "Both `%s` placeholders are substituted with `name` and `career`. The result is stored in `headline`.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns the formatted string.",
      "`%s` for strings — used multiple times in one format.",
      "Arguments matched left-to-right.",
      "Use `fmt.Printf` to print directly without storing.",
    ],
  },

  "sc-go-06": {
    intro: "Carrie formats her column bylines using `fmt.Sprintf` to combine the author name and column title into a publication-ready header.",
    concept: "`fmt.Sprintf` formats a string using a pattern and returns it. Use `%s` for strings, `%d` for integers.",
    example: `package main
import "fmt"
func main() {
    author := "Carrie Bradshaw"
    title := "Love in New York"
    byline := fmt.Sprintf("By %s: \"%s\"", author, title)
    fmt.Println(byline)
}`,
    exampleOutput: `By Carrie Bradshaw: "Love in New York"`,
    notes: "Both `%s` placeholders are substituted. Escaped `\"` in the format string produce literal quote marks in the output.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns the formatted string.",
      "`%s` matches string arguments left-to-right.",
      "Use `\\\"` inside a format string to include literal quotes.",
      "Store the result or return it from a function.",
    ],
  },

  "sp-go-06": {
    intro: "Carmela formats each crew member's record using `fmt.Sprintf` to combine name and rank into a display label for the family ledger.",
    concept: "`fmt.Sprintf` formats a string using a pattern and returns it. Use `%s` for strings, `%d` for integers.",
    example: `package main
import "fmt"
func main() {
    name := "Tony"
    rank := "Boss"
    record := fmt.Sprintf("Name: %s | Rank: %s", name, rank)
    fmt.Println(record)
}`,
    exampleOutput: "Name: Tony | Rank: Boss",
    notes: "Both `%s` placeholders are substituted with `name` and `rank`. The formatted string is returned and stored in `record`.",
    keyPoints: [
      "`fmt.Sprintf(format, args...)` returns the formatted string.",
      "`%s` for strings — can be used multiple times.",
      "Arguments matched left-to-right.",
      "Use `fmt.Printf` to format and print in one step.",
    ],
  },

  // ─── Lesson 07 — Maps ─────────────────────────────────────────────────────

  "st-go-07": {
    intro: "Joyce maps each character's name to their current location using a Go `map`. She can instantly look up Will's location without looping through a list.",
    concept: "A Go `map` stores key-value pairs. Declare with `map[KeyType]ValueType{}`. Use `map[key]` to get a value and `map[key] = value` to set one.",
    example: `package main
import "fmt"
func main() {
    locations := map[string]string{
        "Will":   "Upside Down",
        "Eleven": "Lab",
    }
    fmt.Println(locations["Will"])
    locations["Mike"] = "Basement"
    fmt.Println(len(locations))
}`,
    exampleOutput: "Upside Down\n3",
    notes: "`locations[\"Will\"]` returns `'Upside Down'`. Adding a new entry with `locations[\"Mike\"] = ...` grows the map. `len()` returns the new count.",
    keyPoints: [
      "Declare: `map[KeyType]ValueType{key: val, ...}`.",
      "Access: `m[key]` — returns the zero value if key is absent.",
      "Set: `m[key] = value`.",
      "Count: `len(m)` returns the number of entries.",
    ],
  },

  "sv-go-07": {
    intro: "The MDR roster is stored as a map of employee IDs to names. Mark looks up his name and adds a new team member dynamically.",
    concept: "A Go `map` stores key-value pairs. Declare, access, and update entries using the key. `len()` gives the entry count.",
    example: `package main
import "fmt"
func main() {
    roster := map[string]string{
        "MDR-4": "Mark S.",
        "MDR-1": "Helly R.",
    }
    fmt.Println(roster["MDR-4"])
    roster["MDR-2"] = "Irving"
    fmt.Println(len(roster))
}`,
    exampleOutput: "Mark S.\n3",
    notes: "`roster[\"MDR-4\"]` retrieves `'Mark S.'`. Adding `'MDR-2'` grows the map to 3 entries.",
    keyPoints: [
      "Declare: `map[KeyType]ValueType{...}`.",
      "Access: `m[key]`.",
      "Set: `m[key] = value`.",
      "`len(m)` returns the number of key-value pairs.",
    ],
  },

  "bb-go-07": {
    intro: "Lydia tracks each territory's contact using a Go map. Walt looks up the ABQ contact and adds a new Phoenix entry.",
    concept: "A Go `map` stores key-value pairs. Declare, access with `m[key]`, and add with `m[key] = value`.",
    example: `package main
import "fmt"
func main() {
    contacts := map[string]string{
        "ABQ": "Gustavo",
    }
    fmt.Println(contacts["ABQ"])
    contacts["Phoenix"] = "Tuco"
    fmt.Println(len(contacts))
}`,
    exampleOutput: "Gustavo\n2",
    notes: "`contacts[\"ABQ\"]` retrieves `'Gustavo'`. Adding `'Phoenix'` grows the map to 2 entries.",
    keyPoints: [
      "Declare: `map[KeyType]ValueType{...}`.",
      "Access: `m[key]`.",
      "Set: `m[key] = value` — adds or updates.",
      "`len(m)` counts entries.",
    ],
  },

  "to-go-07": {
    intro: "Dwight maps each employee to their desk assignment. He looks up Jim's desk and adds a new entry for Ryan.",
    concept: "A Go `map` stores key-value pairs. Access values with `m[key]`, add with `m[key] = value`, count with `len(m)`.",
    example: `package main
import "fmt"
func main() {
    desks := map[string]string{
        "Dwight": "D-1",
        "Jim":    "D-3",
    }
    fmt.Println(desks["Jim"])
    desks["Ryan"] = "D-5"
    fmt.Println(len(desks))
}`,
    exampleOutput: "D-3\n3",
    notes: "`desks[\"Jim\"]` retrieves `'D-3'`. Adding Ryan's desk grows the map to 3 entries.",
    keyPoints: [
      "Declare: `map[KeyType]ValueType{...}`.",
      "Access: `m[key]`.",
      "Set: `m[key] = value` — adds a new entry.",
      "`len(m)` returns the map size.",
    ],
  },

  "got-go-07": {
    intro: "The Grand Maester maps each house to its sigil. He retrieves the Stark sigil and adds the Targaryen entry.",
    concept: "A Go `map` stores key-value pairs. Access with `m[key]`, add with `m[key] = value`, count with `len(m)`.",
    example: `package main
import "fmt"
func main() {
    sigils := map[string]string{
        "Stark": "Direwolf",
    }
    fmt.Println(sigils["Stark"])
    sigils["Targaryen"] = "Dragon"
    fmt.Println(len(sigils))
}`,
    exampleOutput: "Direwolf\n2",
    notes: "`sigils[\"Stark\"]` retrieves `'Direwolf'`. Adding Targaryen grows the map to 2 entries.",
    keyPoints: [
      "Declare: `map[KeyType]ValueType{...}`.",
      "Access: `m[key]`.",
      "Set: `m[key] = value`.",
      "`len(m)` counts entries.",
    ],
  },

  "mx-go-07": {
    intro: "Tank maps each operative to their assigned ship. He looks up Neo's ship and adds a second crew member.",
    concept: "A Go `map` stores key-value pairs. Access values with `m[key]`, add with `m[key] = value`, count with `len(m)`.",
    example: `package main
import "fmt"
func main() {
    ships := map[string]string{
        "Neo": "Nebuchadnezzar",
    }
    fmt.Println(ships["Neo"])
    ships["Trinity"] = "Nebuchadnezzar"
    fmt.Println(len(ships))
}`,
    exampleOutput: "Nebuchadnezzar\n2",
    notes: "`ships[\"Neo\"]` retrieves the ship. Adding Trinity grows the map to 2 entries.",
    keyPoints: [
      "Declare: `map[KeyType]ValueType{...}`.",
      "Access: `m[key]`.",
      "Set: `m[key] = value` — adds or updates.",
      "`len(m)` counts entries.",
    ],
  },

  "rm-go-07": {
    intro: "Rick maps alien codenames to their species for the interdimensional rolodex. He retrieves Squanchy's species and adds a new alien entry.",
    concept: "A Go `map` stores key-value pairs. Access, add, and count entries using the map API.",
    example: `package main
import "fmt"
func main() {
    contacts := map[string]string{
        "Squanchy": "Cat Alien",
    }
    fmt.Println(contacts["Squanchy"])
    contacts["Birdperson"] = "Bird Species"
    fmt.Println(len(contacts))
}`,
    exampleOutput: "Cat Alien\n2",
    notes: "`contacts[\"Squanchy\"]` retrieves the species. Adding Birdperson grows the map to 2.",
    keyPoints: [
      "Declare: `map[KeyType]ValueType{...}`.",
      "Access: `m[key]`.",
      "Set: `m[key] = value`.",
      "`len(m)` returns the number of entries.",
    ],
  },

  "sg-go-07": {
    intro: "The guards map player numbers to their chosen shapes for the honeycomb game. They look up player 456's shape and add another player.",
    concept: "A Go `map` stores key-value pairs. For integer keys, use `map[int]string`. Access and add entries with `m[key]`.",
    example: `package main
import "fmt"
func main() {
    shapes := map[int]string{
        456: "Umbrella",
    }
    fmt.Println(shapes[456])
    shapes[67] = "Circle"
    fmt.Println(len(shapes))
}`,
    exampleOutput: "Umbrella\n2",
    notes: "`shapes[456]` retrieves `'Umbrella'`. Adding player 67's shape grows the map to 2 entries.",
    keyPoints: [
      "Maps can use any comparable type as key: `map[int]string`.",
      "Access: `m[key]`.",
      "Set: `m[key] = value`.",
      "`len(m)` counts entries.",
    ],
  },

  "ad-go-07": {
    intro: "Michael maps each Bluth family member to their role using a Go map. He retrieves George Sr.'s role and adds Tobias.",
    concept: "A Go `map` stores key-value pairs. Declare, access, and mutate maps using the built-in map syntax.",
    example: `package main
import "fmt"
func main() {
    roles := map[string]string{
        "George Sr.": "Founder",
        "Michael":    "President",
    }
    fmt.Println(roles["George Sr."])
    roles["Tobias"] = "Never-Nude"
    fmt.Println(len(roles))
}`,
    exampleOutput: "Founder\n3",
    notes: "`roles[\"George Sr.\"]` retrieves `'Founder'`. Adding Tobias grows the map to 3.",
    keyPoints: [
      "Declare: `map[KeyType]ValueType{...}`.",
      "Access: `m[key]`.",
      "Set: `m[key] = value`.",
      "`len(m)` counts entries.",
    ],
  },

  "ba-go-07": {
    intro: "The Barbieland registry maps each Barbie's name to her current career. She retrieves her own entry and adds a new Barbie.",
    concept: "A Go `map` stores key-value pairs. Access with `m[key]`, add with `m[key] = value`, count with `len(m)`.",
    example: `package main
import "fmt"
func main() {
    registry := map[string]string{
        "Barbie": "President",
        "Ken":    "Beach",
    }
    fmt.Println(registry["Barbie"])
    registry["Skipper"] = "Student"
    fmt.Println(len(registry))
}`,
    exampleOutput: "President\n3",
    notes: "`registry[\"Barbie\"]` retrieves `'President'`. Adding Skipper grows the map to 3.",
    keyPoints: [
      "Declare: `map[KeyType]ValueType{...}`.",
      "Access: `m[key]`.",
      "Set: `m[key] = value`.",
      "`len(m)` counts map entries.",
    ],
  },

  "sc-go-07": {
    intro: "Charlotte maps each friend's relationship status. Carrie looks up her own status and Charlotte adds a new entry.",
    concept: "A Go `map` stores key-value pairs. Access with `m[key]`, add with `m[key] = value`, count with `len(m)`.",
    example: `package main
import "fmt"
func main() {
    statuses := map[string]string{
        "Carrie":    "It's complicated",
        "Charlotte": "Married",
    }
    fmt.Println(statuses["Carrie"])
    statuses["Samantha"] = "Thriving"
    fmt.Println(len(statuses))
}`,
    exampleOutput: "It's complicated\n3",
    notes: "`statuses[\"Carrie\"]` retrieves the status. Adding Samantha grows the map to 3.",
    keyPoints: [
      "Declare: `map[KeyType]ValueType{...}`.",
      "Access: `m[key]`.",
      "Set: `m[key] = value`.",
      "`len(m)` returns the map size.",
    ],
  },

  "sp-go-07": {
    intro: "Paulie maps each crew member to their rank. Tony looks up Christopher's rank and adds Silvio.",
    concept: "A Go `map` stores key-value pairs. Access, add, and count entries using the built-in map syntax.",
    example: `package main
import "fmt"
func main() {
    ranks := map[string]string{
        "Tony":        "Boss",
        "Christopher": "Soldier",
    }
    fmt.Println(ranks["Christopher"])
    ranks["Silvio"] = "Consigliere"
    fmt.Println(len(ranks))
}`,
    exampleOutput: "Soldier\n3",
    notes: "`ranks[\"Christopher\"]` retrieves `'Soldier'`. Adding Silvio grows the map to 3.",
    keyPoints: [
      "Declare: `map[KeyType]ValueType{...}`.",
      "Access: `m[key]`.",
      "Set: `m[key] = value` — adds or updates.",
      "`len(m)` counts entries.",
    ],
  },

  // ─── Lesson 08 — Structs ──────────────────────────────────────────────────

  "st-go-08": {
    intro: "Dr. Brenner needs each lab subject represented as a structured record — not just a variable. Dustin defines a `Subject` struct with name and power level fields.",
    concept: "A `struct` groups related fields into a single type. Define with `type Name struct { ... }`. Create instances using `Name{Field: value}`. Access fields with dot notation.",
    example: `package main
import "fmt"
type Subject struct {
    Name       string
    PowerLevel int
}
func main() {
    s := Subject{Name: "Eleven", PowerLevel: 11}
    fmt.Println(s.Name)
    fmt.Println(s.PowerLevel)
}`,
    exampleOutput: "Eleven\n11",
    notes: "`Subject{Name: ..., PowerLevel: ...}` creates an instance. `s.Name` and `s.PowerLevel` access the fields using dot notation.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create: `Name{Field: value, ...}` — use named fields.",
      "Access: `instance.Field`.",
      "Structs group related data — like a record or object.",
    ],
  },

  "sv-go-08": {
    intro: "Each Lumon employee has a name and clearance level. Mark defines an `Employee` struct to hold both, creating a structured record for each staff member.",
    concept: "A `struct` groups related fields into a single type. Define, instantiate, and access fields with dot notation.",
    example: `package main
import "fmt"
type Employee struct {
    Name      string
    Clearance int
}
func main() {
    e := Employee{Name: "Mark S.", Clearance: 2}
    fmt.Println(e.Name)
    fmt.Println(e.Clearance)
}`,
    exampleOutput: "Mark S.\n2",
    notes: "`Employee{Name: ..., Clearance: ...}` creates the struct instance. `e.Name` and `e.Clearance` access each field.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create with named fields: `Name{Field: value}`.",
      "Access fields with dot notation: `instance.Field`.",
      "Structs can hold any types as fields.",
    ],
  },

  "bb-go-08": {
    intro: "Walt defines a `Cook` struct to track each cook session's chemist and purity level — keeping everything structured and auditable.",
    concept: "A `struct` groups related fields into a single custom type. Define, instantiate, and access fields with dot notation.",
    example: `package main
import "fmt"
type Cook struct {
    Chemist string
    Purity  int
}
func main() {
    c := Cook{Chemist: "Walter", Purity: 99}
    fmt.Println(c.Chemist)
    fmt.Println(c.Purity)
}`,
    exampleOutput: "Walter\n99",
    notes: "`Cook{Chemist: ..., Purity: ...}` creates the struct instance. `c.Chemist` and `c.Purity` access each field.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create: `Name{Field: value, ...}`.",
      "Access: `instance.Field`.",
      "Structs group related data into a single named type.",
    ],
  },

  "to-go-08": {
    intro: "Ryan creates an `Employee` struct for the Dunder Mifflin HR system. Each employee record stores a name and a title.",
    concept: "A `struct` groups related fields into a single custom type. Define, instantiate, and access fields with dot notation.",
    example: `package main
import "fmt"
type Employee struct {
    Name  string
    Title string
}
func main() {
    e := Employee{Name: "Jim", Title: "Salesman"}
    fmt.Println(e.Name)
    fmt.Println(e.Title)
}`,
    exampleOutput: "Jim\nSalesman",
    notes: "`Employee{Name: ..., Title: ...}` creates the instance. Dot notation accesses each field.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create with named fields.",
      "Access: `instance.Field`.",
      "Structs replace multiple loose variables with one grouped type.",
    ],
  },

  "got-go-08": {
    intro: "Each noble house is represented by a `House` struct with a name and motto. Jon Snow defines one for House Stark.",
    concept: "A `struct` groups related fields into a single custom type. Define with `type`, instantiate with `Name{Field: value}`, and access with dot notation.",
    example: `package main
import "fmt"
type House struct {
    Name  string
    Words string
}
func main() {
    h := House{Name: "Stark", Words: "Winter is Coming"}
    fmt.Println(h.Name)
    fmt.Println(h.Words)
}`,
    exampleOutput: "Stark\nWinter is Coming",
    notes: "`House{Name: ..., Words: ...}` creates the struct. `h.Name` and `h.Words` access each field.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create: `Name{Field: value, ...}`.",
      "Access: `instance.Field`.",
      "Structs model real-world entities with multiple attributes.",
    ],
  },

  "mx-go-08": {
    intro: "Each operative on the Nebuchadnezzar is represented by an `Operative` struct with a codename and skill level. Neo registers himself.",
    concept: "A `struct` groups related fields into a single custom type. Define, instantiate, and access fields with dot notation.",
    example: `package main
import "fmt"
type Operative struct {
    Codename   string
    SkillLevel int
}
func main() {
    o := Operative{Codename: "Neo", SkillLevel: 100}
    fmt.Println(o.Codename)
    fmt.Println(o.SkillLevel)
}`,
    exampleOutput: "Neo\n100",
    notes: "`Operative{Codename: ..., SkillLevel: ...}` creates the instance. Dot notation accesses each field.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create with named fields.",
      "Access: `instance.Field`.",
      "Structs can be used as function parameters and return types.",
    ],
  },

  "rm-go-08": {
    intro: "The Council of Ricks catalogues each Rick by dimension and IQ score. Rick C-137 defines a `Rick` struct and registers himself.",
    concept: "A `struct` groups related fields into a single custom type. Define, instantiate, and access with dot notation.",
    example: `package main
import "fmt"
type Rick struct {
    Dimension string
    IQ        int
}
func main() {
    r := Rick{Dimension: "C-137", IQ: 300}
    fmt.Println(r.Dimension)
    fmt.Println(r.IQ)
}`,
    exampleOutput: "C-137\n300",
    notes: "`Rick{Dimension: ..., IQ: ...}` creates the instance. `r.Dimension` and `r.IQ` access each field.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create: `Name{Field: value, ...}`.",
      "Access: `instance.Field`.",
      "Use structs to group logically related data.",
    ],
  },

  "sg-go-08": {
    intro: "Each player has a record tracking their number and survival status. The Front Man defines a `Player` struct for the game's database.",
    concept: "A `struct` groups related fields into a single custom type. Define, instantiate, and access fields with dot notation.",
    example: `package main
import "fmt"
type Player struct {
    Number int
    Alive  bool
}
func main() {
    p := Player{Number: 456, Alive: true}
    fmt.Println(p.Number)
    fmt.Println(p.Alive)
}`,
    exampleOutput: "456\ntrue",
    notes: "`Player{Number: ..., Alive: ...}` creates the struct. `p.Number` and `p.Alive` access each field.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create with named fields.",
      "Access: `instance.Field`.",
      "Structs can hold any type — including `bool`, `int`, `string`.",
    ],
  },

  "ad-go-08": {
    intro: "Michael defines a `Bluth` struct to represent each family member with their name and role in the company.",
    concept: "A `struct` groups related fields into a single custom type. Define, instantiate, and access fields with dot notation.",
    example: `package main
import "fmt"
type Bluth struct {
    Name string
    Role string
}
func main() {
    b := Bluth{Name: "Michael", Role: "President"}
    fmt.Println(b.Name)
    fmt.Println(b.Role)
}`,
    exampleOutput: "Michael\nPresident",
    notes: "`Bluth{Name: ..., Role: ...}` creates the struct instance. Dot notation accesses each field.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create: `Name{Field: value, ...}`.",
      "Access: `instance.Field`.",
      "Structs replace multiple loose variables with one organised type.",
    ],
  },

  "ba-go-08": {
    intro: "Each Barbie has a struct with her name and current career. Gloria defines a `Barbie` struct and creates Barbie's record.",
    concept: "A `struct` groups related fields into a single custom type. Define, instantiate, and access fields with dot notation.",
    example: `package main
import "fmt"
type Barbie struct {
    Name   string
    Career string
}
func main() {
    b := Barbie{Name: "Barbie", Career: "President"}
    fmt.Println(b.Name)
    fmt.Println(b.Career)
}`,
    exampleOutput: "Barbie\nPresident",
    notes: "`Barbie{Name: ..., Career: ...}` creates the struct instance. Dot notation accesses both fields.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create with named fields.",
      "Access: `instance.Field`.",
      "Structs model real-world entities in your program.",
    ],
  },

  "sc-go-08": {
    intro: "Each column entry has a struct tracking the title and number of cosmos consumed during writing. Carrie defines a `Column` struct for her archive.",
    concept: "A `struct` groups related fields into a single custom type. Define, instantiate, and access fields with dot notation.",
    example: `package main
import "fmt"
type Column struct {
    Title  string
    Cosmos int
}
func main() {
    c := Column{Title: "Love in the City", Cosmos: 3}
    fmt.Println(c.Title)
    fmt.Println(c.Cosmos)
}`,
    exampleOutput: "Love in the City\n3",
    notes: "`Column{Title: ..., Cosmos: ...}` creates the struct. `c.Title` and `c.Cosmos` access each field.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create: `Name{Field: value, ...}`.",
      "Access: `instance.Field`.",
      "Structs group related data into a single named type.",
    ],
  },

  "sp-go-08": {
    intro: "Each family member has a struct with their name and rank. Carmela defines a `Member` struct for Tony's crew database.",
    concept: "A `struct` groups related fields into a single custom type. Define, instantiate, and access fields with dot notation.",
    example: `package main
import "fmt"
type Member struct {
    Name string
    Rank string
}
func main() {
    m := Member{Name: "Tony", Rank: "Boss"}
    fmt.Println(m.Name)
    fmt.Println(m.Rank)
}`,
    exampleOutput: "Tony\nBoss",
    notes: "`Member{Name: ..., Rank: ...}` creates the struct. `m.Name` and `m.Rank` access each field.",
    keyPoints: [
      "`type Name struct { Field Type }` defines a struct.",
      "Create: `Name{Field: value, ...}`.",
      "Access: `instance.Field`.",
      "Structs replace loose variables with a grouped, named type.",
    ],
  },

  // ─── Lesson 09 — Multiple Return Values ──────────────────────────────────

  "st-go-09": {
    intro: "Eleven's power diagnostic returns two values: a reading and whether it's above the threshold. Go functions can return both at once — no wrapper type needed.",
    concept: "Go functions can return multiple values. List the return types in parentheses: `func name() (Type1, Type2)`. Capture them with multiple assignment: `a, b := fn()`.",
    example: `package main
import "fmt"
func diagnose(level int) (int, bool) {
    return level, level > 10
}
func main() {
    reading, isHigh := diagnose(11)
    fmt.Println(reading)
    fmt.Println(isHigh)
}`,
    exampleOutput: "11\ntrue",
    notes: "`diagnose` returns two values. `reading, isHigh :=` captures both. `11 > 10` is true.",
    keyPoints: [
      "Multiple return types: `func name() (T1, T2)`.",
      "Capture with: `a, b := fn()`.",
      "Use `_` to discard an unwanted return: `_, b := fn()`.",
      "Common pattern: return a value and an error together.",
    ],
  },

  "sv-go-09": {
    intro: "The MDR system checks quota completion and returns both the remaining count and a boolean for whether the target is met. Mark uses multiple return values.",
    concept: "Go functions can return multiple values. Declare return types in parentheses. Capture all return values with multiple assignment.",
    example: `package main
import "fmt"
func checkQuota(done, target int) (int, bool) {
    return target - done, done >= target
}
func main() {
    remaining, met := checkQuota(85, 80)
    fmt.Println(remaining)
    fmt.Println(met)
}`,
    exampleOutput: "-5\ntrue",
    notes: "`target - done` is `80 - 85 = -5` (over target). `done >= target` is true. Both are returned and captured.",
    keyPoints: [
      "Multiple return types: `func name() (T1, T2)`.",
      "Capture: `a, b := fn()`.",
      "Use `_` to discard one return value.",
      "Returns can mix types: `(int, bool)`, `(string, error)`, etc.",
    ],
  },

  "bb-go-09": {
    intro: "Walt's quality check returns both the purity assessment and whether the batch meets Gus's standard. Two return values handle both pieces of information cleanly.",
    concept: "Go functions can return multiple values. Declare the types in parentheses and capture with multiple assignment.",
    example: `package main
import "fmt"
func qualityCheck(purity int) (string, bool) {
    if purity >= 96 {
        return "Premium", true
    }
    return "Reject", false
}
func main() {
    grade, approved := qualityCheck(99)
    fmt.Println(grade)
    fmt.Println(approved)
}`,
    exampleOutput: "Premium\ntrue",
    notes: "`qualityCheck` returns a grade string and an approval boolean. Both are captured in one line.",
    keyPoints: [
      "Multiple return types in parentheses: `(string, bool)`.",
      "Capture with: `a, b := fn()`.",
      "Use `_` to discard: `grade, _ := qualityCheck(99)`.",
      "Common idiom: return a result and an error.",
    ],
  },

  "to-go-09": {
    intro: "Dwight's performance review function returns both a label and the numeric score. Oscar captures both in one assignment.",
    concept: "Go functions can return multiple values. List the return types in parentheses and capture with multi-variable assignment.",
    example: `package main
import "fmt"
func review(sales int) (string, int) {
    if sales >= 80 {
        return "Outstanding", sales
    }
    return "Adequate", sales
}
func main() {
    label, score := review(95)
    fmt.Println(label)
    fmt.Println(score)
}`,
    exampleOutput: "Outstanding\n95",
    notes: "`review` returns a label string and the original score. Both captured by `label, score := review(95)`.",
    keyPoints: [
      "Multiple return types: `(T1, T2)`.",
      "Capture: `a, b := fn()`.",
      "Use `_` to discard a return value.",
      "Go's multiple returns reduce the need for wrapper types.",
    ],
  },

  "got-go-09": {
    intro: "The raven assessment function returns both the urgency level and a boolean for whether to call the banners. Cersei captures both at once.",
    concept: "Go functions can return multiple values. List return types in parentheses and capture all with multi-variable assignment.",
    example: `package main
import "fmt"
func ravenAssess(urgency int) (string, bool) {
    if urgency > 5 {
        return "Call the banners", true
    }
    return "Wait and watch", false
}
func main() {
    action, urgent := ravenAssess(8)
    fmt.Println(action)
    fmt.Println(urgent)
}`,
    exampleOutput: "Call the banners\ntrue",
    notes: "`ravenAssess` returns a string action and a boolean. Both captured in one line.",
    keyPoints: [
      "Multiple return types: `(string, bool)`.",
      "Capture: `a, b := fn()`.",
      "`_` discards unwanted return values.",
      "Common pattern: `(result, error)` returns.",
    ],
  },

  "mx-go-09": {
    intro: "The Oracle's potential assessment returns both a label and whether the candidate is The One. Neo's score is passed in and both results are captured.",
    concept: "Go functions can return multiple values. List the return types in parentheses and capture with multi-variable assignment.",
    example: `package main
import "fmt"
func assess(score int) (string, bool) {
    if score >= 100 {
        return "The One", true
    }
    return "Not yet", false
}
func main() {
    label, isOne := assess(100)
    fmt.Println(label)
    fmt.Println(isOne)
}`,
    exampleOutput: "The One\ntrue",
    notes: "`assess` returns a string and a boolean. Both captured in one line with `label, isOne :=`.",
    keyPoints: [
      "Multiple return types: `(T1, T2)`.",
      "Capture: `a, b := fn()`.",
      "Use `_` to discard: `_, isOne := assess(100)`.",
      "Reduces the need for wrapper structs or out parameters.",
    ],
  },

  "rm-go-09": {
    intro: "Rick's portal check returns both whether the jump is safe and the fluid remaining. Both values are captured at once so Morty knows what they're dealing with.",
    concept: "Go functions can return multiple values. List the return types in parentheses and capture with multiple assignment.",
    example: `package main
import "fmt"
func portalCheck(fluid int) (bool, int) {
    return fluid >= 10, fluid - 10
}
func main() {
    safe, remaining := portalCheck(42)
    fmt.Println(safe)
    fmt.Println(remaining)
}`,
    exampleOutput: "true\n32",
    notes: "`portalCheck` returns a boolean (`fluid >= 10`) and the remaining fluid after a jump (`fluid - 10`). Both captured together.",
    keyPoints: [
      "Multiple return types: `(T1, T2)`.",
      "Capture: `a, b := fn()`.",
      "Use `_` to discard one return.",
      "Go multiple returns avoid wrapper types.",
    ],
  },

  "sg-go-09": {
    intro: "The game's result function returns both the player's status and their prize amount. Player 456's result is captured in one assignment.",
    concept: "Go functions can return multiple values. List return types in parentheses and capture with multi-variable assignment.",
    example: `package main
import "fmt"
func result(survived bool) (string, int) {
    if survived {
        return "Winner", 45600000000
    }
    return "Eliminated", 0
}
func main() {
    status, prize := result(true)
    fmt.Println(status)
    fmt.Println(prize)
}`,
    exampleOutput: "Winner\n45600000000",
    notes: "`result` returns a status string and a prize integer. Both captured by `status, prize := result(true)`.",
    keyPoints: [
      "Multiple return types: `(string, int)`.",
      "Capture: `a, b := fn()`.",
      "Use `_` to ignore a return.",
      "Go's multiple returns are idiomatic for result+status pairs.",
    ],
  },

  "ad-go-09": {
    intro: "The Bluth asset evaluator returns both the net value and whether the company is solvent. Michael captures both in one line.",
    concept: "Go functions can return multiple values. List the return types in parentheses and capture all with multi-variable assignment.",
    example: `package main
import "fmt"
func evaluate(assets, debt int) (int, bool) {
    net := assets - debt
    return net, net > 0
}
func main() {
    netValue, solvent := evaluate(500000, 300000)
    fmt.Println(netValue)
    fmt.Println(solvent)
}`,
    exampleOutput: "200000\ntrue",
    notes: "`evaluate` returns the net value and a solvency boolean. Both captured together.",
    keyPoints: [
      "Multiple return types: `(int, bool)`.",
      "Capture: `a, b := fn()`.",
      "Use `_` to discard one return.",
      "Common pattern: return result and validity/error.",
    ],
  },

  "ba-go-09": {
    intro: "Barbie's career evaluator returns both a label and whether the achievement count meets the Barbieland record. Both values are captured at once.",
    concept: "Go functions can return multiple values. List the return types in parentheses and capture with multi-variable assignment.",
    example: `package main
import "fmt"
func evaluate(careers int) (string, bool) {
    if careers >= 20 {
        return "Record Holder", true
    }
    return "Still Going", false
}
func main() {
    label, record := evaluate(25)
    fmt.Println(label)
    fmt.Println(record)
}`,
    exampleOutput: "Record Holder\ntrue",
    notes: "`evaluate` returns a label and a boolean. Both captured together.",
    keyPoints: [
      "Multiple return types: `(T1, T2)`.",
      "Capture: `a, b := fn()`.",
      "Use `_` to discard one return.",
      "Idiomatic Go: return a value and a status together.",
    ],
  },

  "sc-go-09": {
    intro: "The relationship evaluator returns both a status label and whether it qualifies as 'serious'. Carrie captures both as research for the next column.",
    concept: "Go functions can return multiple values. List the return types in parentheses and capture with multi-variable assignment.",
    example: `package main
import "fmt"
func classify(months int) (string, bool) {
    if months >= 12 {
        return "Serious", true
    }
    return "Casual", false
}
func main() {
    label, serious := classify(18)
    fmt.Println(label)
    fmt.Println(serious)
}`,
    exampleOutput: "Serious\ntrue",
    notes: "`classify` returns a string and a boolean. Both captured in one line.",
    keyPoints: [
      "Multiple return types: `(string, bool)`.",
      "Capture: `a, b := fn()`.",
      "Use `_` to discard one return.",
      "Common pattern: return a label and a boolean flag.",
    ],
  },

  "sp-go-09": {
    intro: "Tony's business evaluator returns both a rating label and the net earnings. Carmela captures both at once for the quarterly summary.",
    concept: "Go functions can return multiple values. List the return types in parentheses and capture with multi-variable assignment.",
    example: `package main
import "fmt"
func evalBusiness(gross, costs int) (string, int) {
    net := gross - costs
    if net >= 20000 {
        return "Gold Mine", net
    }
    return "Steady", net
}
func main() {
    label, net := evalBusiness(80000, 30000)
    fmt.Println(label)
    fmt.Println(net)
}`,
    exampleOutput: "Gold Mine\n50000",
    notes: "`evalBusiness` returns a label and the net earnings. Both captured in one line.",
    keyPoints: [
      "Multiple return types: `(string, int)`.",
      "Capture: `a, b := fn()`.",
      "Use `_` to discard one return.",
      "Idiomatic Go for returning a result + status.",
    ],
  },

  // ─── Lesson 10 — Error Handling ───────────────────────────────────────────

  "st-go-10": {
    intro: "The gate scanner might fail if Eleven's power is too low. Hopper writes a function that returns an error when the scan can't complete — the Go way to signal failure.",
    concept: "In Go, errors are values of type `error`. Functions that can fail typically return `(result, error)`. Check the error with `if err != nil`. Use `errors.New()` to create one.",
    example: `package main
import (
    "errors"
    "fmt"
)
func scan(power int) (string, error) {
    if power < 5 {
        return "", errors.New("power too low")
    }
    return "Gate located", nil
}
func main() {
    result, err := scan(11)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(result)
    }
}`,
    exampleOutput: "Gate located",
    notes: "`scan(11)` succeeds — `power >= 5`, so it returns `\"Gate located\", nil`. `err != nil` is false, so the else branch prints the result.",
    keyPoints: [
      "Errors are values: `func name() (T, error)`.",
      "`errors.New(\"message\")` creates an error.",
      "Return `nil` for no error.",
      "Always check errors: `if err != nil { ... }`.",
    ],
  },

  "sv-go-10": {
    intro: "The MDR clearance check fails for insufficient clearance. Mark writes a function that returns an error in that case — following Go's error-as-value idiom.",
    concept: "In Go, errors are values of type `error`. Return `(result, error)` from functions that can fail. Check with `if err != nil`.",
    example: `package main
import (
    "errors"
    "fmt"
)
func checkAccess(level int) (string, error) {
    if level < 2 {
        return "", errors.New("access denied")
    }
    return "Access granted", nil
}
func main() {
    msg, err := checkAccess(2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(msg)
    }
}`,
    exampleOutput: "Access granted",
    notes: "`checkAccess(2)` succeeds — `level >= 2`. Returns `\"Access granted\", nil`. The else branch prints the message.",
    keyPoints: [
      "Errors are values: `func name() (T, error)`.",
      "`errors.New(\"msg\")` creates an error.",
      "Return `nil` for no error.",
      "Check: `if err != nil { handle error }`.",
    ],
  },

  "bb-go-10": {
    intro: "Walt's purity checker returns an error if the batch falls below Gus's 96% standard. Jesse checks the error before shipping.",
    concept: "In Go, errors are values of type `error`. Return `(result, error)` from functions that can fail, and check with `if err != nil`.",
    example: `package main
import (
    "errors"
    "fmt"
)
func checkPurity(pct int) (string, error) {
    if pct < 96 {
        return "", errors.New("below standard")
    }
    return "Approved", nil
}
func main() {
    result, err := checkPurity(99)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(result)
    }
}`,
    exampleOutput: "Approved",
    notes: "`checkPurity(99)` succeeds. Returns `\"Approved\", nil`. The else branch prints `\"Approved\"`.",
    keyPoints: [
      "Errors are values: return `(T, error)`.",
      "`errors.New(\"msg\")` creates a simple error.",
      "Return `nil` for success.",
      "Check: `if err != nil { ... }`.",
    ],
  },

  "to-go-10": {
    intro: "Dwight's quota check returns an error if sales are below target. Oscar checks the error before sending the branch report to corporate.",
    concept: "In Go, errors are values. Functions that can fail return `(result, error)`. Check the error with `if err != nil`.",
    example: `package main
import (
    "errors"
    "fmt"
)
func checkQuota(sales, target int) (string, error) {
    if sales < target {
        return "", errors.New("below quota")
    }
    return "Quota met", nil
}
func main() {
    msg, err := checkQuota(65, 50)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(msg)
    }
}`,
    exampleOutput: "Quota met",
    notes: "`checkQuota(65, 50)` succeeds — 65 >= 50. Returns `\"Quota met\", nil`. The else branch prints the message.",
    keyPoints: [
      "Errors are values: `func name() (T, error)`.",
      "`errors.New(\"msg\")` creates an error.",
      "Return `nil` for no error.",
      "Check: `if err != nil { handle }`.",
    ],
  },

  "got-go-10": {
    intro: "The raven sender returns an error if the urgency level is invalid. Cersei's code checks the error before acting on the raven's message.",
    concept: "In Go, errors are values. Return `(result, error)` from functions that can fail. Check with `if err != nil`.",
    example: `package main
import (
    "errors"
    "fmt"
)
func sendRaven(urgency int) (string, error) {
    if urgency < 0 || urgency > 10 {
        return "", errors.New("invalid urgency level")
    }
    return "Raven sent", nil
}
func main() {
    msg, err := sendRaven(7)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(msg)
    }
}`,
    exampleOutput: "Raven sent",
    notes: "`sendRaven(7)` succeeds — 7 is in range 0-10. Returns `\"Raven sent\", nil`. The else branch prints it.",
    keyPoints: [
      "Errors are values: return `(T, error)`.",
      "`errors.New(\"msg\")` creates a simple error.",
      "Return `nil` when no error occurred.",
      "Check: `if err != nil { ... }`.",
    ],
  },

  "mx-go-10": {
    intro: "The portal scanner returns an error if the target dimension is unknown. Neo checks the error before making the jump.",
    concept: "In Go, errors are values. Return `(result, error)` and check with `if err != nil`. Use `errors.New()` to create errors.",
    example: `package main
import (
    "errors"
    "fmt"
)
func scanPortal(dimension string) (string, error) {
    if dimension == "" {
        return "", errors.New("unknown dimension")
    }
    return "Portal open: " + dimension, nil
}
func main() {
    msg, err := scanPortal("C-137")
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(msg)
    }
}`,
    exampleOutput: "Portal open: C-137",
    notes: "`scanPortal(\"C-137\")` succeeds — dimension is not empty. Returns the portal message and `nil`.",
    keyPoints: [
      "Errors are values: `(T, error)`.",
      "`errors.New(\"msg\")` creates a simple error.",
      "Return `nil` for no error.",
      "Check: `if err != nil { handle error }`.",
    ],
  },

  "rm-go-10": {
    intro: "Rick's portal jump function returns an error if there isn't enough fluid. Morty checks the error before they leap through dimensions.",
    concept: "In Go, errors are values. Return `(result, error)` from functions that can fail. Use `errors.New()` and check with `if err != nil`.",
    example: `package main
import (
    "errors"
    "fmt"
)
func jump(fluid int) (string, error) {
    if fluid < 10 {
        return "", errors.New("insufficient portal fluid")
    }
    return "Portal jump successful", nil
}
func main() {
    result, err := jump(42)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(result)
    }
}`,
    exampleOutput: "Portal jump successful",
    notes: "`jump(42)` succeeds — 42 >= 10. Returns the success message and `nil`. Else branch prints it.",
    keyPoints: [
      "Errors are values: return `(T, error)`.",
      "`errors.New(\"msg\")` creates an error.",
      "Return `nil` for no error.",
      "Check: `if err != nil { ... }`.",
    ],
  },

  "sg-go-10": {
    intro: "The game result function returns an error if the player number is invalid. Player 456 checks the error before claiming the prize.",
    concept: "In Go, errors are values. Return `(result, error)` and check with `if err != nil`. Use `errors.New()` to create error values.",
    example: `package main
import (
    "errors"
    "fmt"
)
func claimPrize(playerNum int) (string, error) {
    if playerNum != 456 {
        return "", errors.New("not the winner")
    }
    return "Prize claimed", nil
}
func main() {
    msg, err := claimPrize(456)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(msg)
    }
}`,
    exampleOutput: "Prize claimed",
    notes: "`claimPrize(456)` succeeds — player number matches. Returns the success message and `nil`.",
    keyPoints: [
      "Errors are values: return `(T, error)`.",
      "`errors.New(\"msg\")` creates a simple error.",
      "Return `nil` for success.",
      "Check errors immediately: `if err != nil { ... }`.",
    ],
  },

  "ad-go-10": {
    intro: "The Bluth asset validator returns an error if the value is zero or negative — the SEC would never believe it otherwise. Michael checks the error before filing.",
    concept: "In Go, errors are values. Return `(result, error)` from functions that can fail. Check with `if err != nil`.",
    example: `package main
import (
    "errors"
    "fmt"
)
func validateAsset(value int) (string, error) {
    if value <= 0 {
        return "", errors.New("invalid asset value")
    }
    return "Asset valid", nil
}
func main() {
    msg, err := validateAsset(250000)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(msg)
    }
}`,
    exampleOutput: "Asset valid",
    notes: "`validateAsset(250000)` succeeds — value > 0. Returns `\"Asset valid\", nil`. The else branch prints it.",
    keyPoints: [
      "Errors are values: return `(T, error)`.",
      "`errors.New(\"msg\")` creates an error.",
      "Return `nil` for no error.",
      "Check: `if err != nil { handle }`.",
    ],
  },

  "ba-go-10": {
    intro: "Barbieland's career validator returns an error if the career name is empty — a Barbie without a career is impossible. She checks the error before registering.",
    concept: "In Go, errors are values. Return `(result, error)` from functions that can fail. Check with `if err != nil`.",
    example: `package main
import (
    "errors"
    "fmt"
)
func registerCareer(career string) (string, error) {
    if career == "" {
        return "", errors.New("career cannot be empty")
    }
    return "Registered: " + career, nil
}
func main() {
    msg, err := registerCareer("Astronaut")
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(msg)
    }
}`,
    exampleOutput: "Registered: Astronaut",
    notes: "`registerCareer(\"Astronaut\")` succeeds — career is not empty. Returns the confirmation and `nil`.",
    keyPoints: [
      "Errors are values: return `(T, error)`.",
      "`errors.New(\"msg\")` creates a simple error.",
      "Return `nil` for success.",
      "Check: `if err != nil { handle error }`.",
    ],
  },

  "sc-go-10": {
    intro: "Carrie's column publisher returns an error if the title is empty — you can't publish a column without a name. She checks the error before submitting.",
    concept: "In Go, errors are values. Return `(result, error)` from functions that can fail. Check the error with `if err != nil`.",
    example: `package main
import (
    "errors"
    "fmt"
)
func publish(title string) (string, error) {
    if title == "" {
        return "", errors.New("title required")
    }
    return "Published: " + title, nil
}
func main() {
    msg, err := publish("Love in New York")
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(msg)
    }
}`,
    exampleOutput: "Published: Love in New York",
    notes: "`publish(\"Love in New York\")` succeeds. Returns the confirmation string and `nil`. Else branch prints it.",
    keyPoints: [
      "Errors are values: return `(T, error)`.",
      "`errors.New(\"msg\")` creates an error.",
      "Return `nil` for no error.",
      "Check: `if err != nil { ... }`.",
    ],
  },

  "sp-go-10": {
    intro: "Tony's business validator returns an error if the earnings figure is negative — that would raise too many questions. Carmela checks the error before the accountant sees it.",
    concept: "In Go, errors are values. Return `(result, error)` from functions that can fail. Check with `if err != nil`.",
    example: `package main
import (
    "errors"
    "fmt"
)
func validateEarnings(amount int) (string, error) {
    if amount < 0 {
        return "", errors.New("negative earnings flagged")
    }
    return "Earnings approved", nil
}
func main() {
    msg, err := validateEarnings(116000)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(msg)
    }
}`,
    exampleOutput: "Earnings approved",
    notes: "`validateEarnings(116000)` succeeds — amount >= 0. Returns the approval message and `nil`.",
    keyPoints: [
      "Errors are values: return `(T, error)`.",
      "`errors.New(\"msg\")` creates a simple error.",
      "Return `nil` for no error.",
      "Check: `if err != nil { handle error }`.",
    ],
  },
};
