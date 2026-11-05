// ComProg1 Week 13: One-Dimensional Arrays
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (10 Questions) - Items 21-30
// Test 3: True or False (10 Questions) - Items 31-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================

const comprog1Week13Test1 = [
    // ---------- Why arrays, and what an array is ----------
    {
        type: "multiple-choice",
        question: "A program stores five grades as grade1, grade2, grade3, grade4 and grade5. Why does this approach break down for 100 grades?",
        options: [
            "Each value needs its own separate variable name, and no loop can walk through them",
            "A program is not allowed to declare more than ten variables of the same type",
            "Individual variables cannot hold whole numbers once there are many of them",
            "The values would be stored in the wrong order"
        ],
        answer: "Each value needs its own separate variable name, and no loop can walk through them",
        explanation: "The five-variable version already needs five names; with 100 it needs 100, and there is no way to loop over separately named variables. An array gives one name for the whole collection so a single loop can process every value."
    },
    {
        type: "multiple-choice",
        question: "Which statement best describes a one-dimensional array?",
        options: [
            "A collection of elements of the same data type, stored consecutively and reached by index",
            "A collection of values of any mix of data types, stored wherever there is free memory",
            "A single variable that can change its data type while the program runs",
            "A function that returns several values at once"
        ],
        answer: "A collection of elements of the same data type, stored consecutively and reached by index",
        explanation: "Those are exactly the key properties of an array: one shared type, consecutive storage, and index-based access. A mix of different types is not what a built-in array provides."
    },

    // ---------- Zero-based indexing ----------
    {
        type: "multiple-choice",
        question: "For an array declared with size n, what are the first and last valid indices?",
        options: [
            "0 and n - 1",
            "1 and n",
            "0 and n",
            "1 and n - 1"
        ],
        answer: "0 and n - 1",
        explanation: "Indexing starts at zero, so the n elements occupy indices 0 through n - 1. Treating n itself as the last index is the single most common array mistake."
    },
    {
        type: "multiple-choice",
        question: "Given int grades[5] = {85, 90, 78, 92, 88};  what does grades[3] contain?",
        options: ["92", "78", "88", "90"],
        answer: "92",
        explanation: "Counting from zero, index 3 is the fourth element, which is 92. Reading 78 would mean counting from one instead of zero."
    },

    // ---------- Declaring an array ----------
    {
        type: "multiple-choice",
        question: "Which declaration creates an array that can hold seven daily temperatures with fractional parts?",
        options: [
            "double temperatures[7];",
            "int temperatures[7];",
            "double temperatures[7.0];",
            "double temperatures();"
        ],
        answer: "double temperatures[7];",
        explanation: "Temperatures need a fractional part, so the element type must be double, and the size goes in square brackets. An int array would drop the decimals."
    },
    {
        type: "multiple-choice",
        question: "For a standard fixed-size built-in array, when must the size be known?",
        options: [
            "At compile time",
            "Only once the first element is assigned",
            "At the moment the program closes",
            "It never has to be known"
        ],
        answer: "At compile time",
        explanation: "The declared size of a built-in array is fixed and has to be known when the program is compiled. That is why the size is written as a constant rather than read from the user."
    },

    // ---------- Four ways to initialize ----------
    {
        type: "multiple-choice",
        question: "What does array b contain after this declaration?\n\nint b[5] = {10, 20};",
        options: [
            "10, 20, 0, 0, 0",
            "10 and 20 only, because the array shrinks to two elements",
            "10, 20 and three unpredictable values",
            "Nothing, because the code does not compile with too few values"
        ],
        answer: "10, 20, 0, 0, 0",
        explanation: "This is partial initialization: the values given are used in order and every remaining element is set to zero. The array still has all five of its declared elements."
    },
    {
        type: "multiple-choice",
        question: "How many elements does array c have?\n\nint c[] = {10, 20, 30};",
        options: ["3", "0", "1", "None, because the code does not compile without a size"],
        answer: "3",
        explanation: "When the brackets are left empty but an initializer list is supplied, the compiler infers the size from the number of values, which is three here."
    },
    {
        type: "multiple-choice",
        question: "What does array d contain after this declaration?\n\nint d[5] = {};",
        options: [
            "Five zeros",
            "Five unpredictable values",
            "Nothing, because the array has no elements",
            "Five copies of the last value assigned elsewhere in the program"
        ],
        answer: "Five zeros",
        explanation: "An empty initializer list zero-fills the whole array, so all five elements are 0. This is the shortest way to start an array at zero."
    },

    // ---------- Accessing and updating elements ----------
    {
        type: "multiple-choice",
        question: "Consider this code.\n\nint scores[5] = {75, 80, 85, 90, 95};\nscores[2] = 100;\n\nWhat does the array contain afterwards?",
        options: [
            "75, 80, 100, 90, 95",
            "75, 100, 85, 90, 95",
            "100, 100, 100, 100, 100",
            "75, 80, 85, 90, 100"
        ],
        answer: "75, 80, 100, 90, 95",
        explanation: "Assigning to scores[2] replaces only the element at index 2, so 85 becomes 100 and every other element is untouched."
    },
    {
        type: "multiple-choice",
        question: "What happens when a program reads or writes a built-in array using an index that is out of range?",
        options: [
            "It is undefined behavior, because built-in arrays perform no automatic bounds checking",
            "The program always stops immediately with a clear error message",
            "The index silently wraps around to the start of the array",
            "The compiler always refuses to build the program"
        ],
        answer: "It is undefined behavior, because built-in arrays perform no automatic bounds checking",
        explanation: "Nothing in the language checks the index for a built-in array, so the program may appear to work, print nonsense, or crash. That unpredictability is what makes the mistake dangerous."
    },

    // ---------- Traversal with loops ----------
    {
        type: "multiple-choice",
        question: "What is the output of this code?\n\nint numbers[5] = {10, 20, 30, 40, 50};\nfor (int i = 0; i < 5; i++) {\n    cout << numbers[i] << \" \";\n}",
        options: [
            "10 20 30 40 50",
            "20 30 40 50",
            "10 20 30 40",
            "0 1 2 3 4"
        ],
        answer: "10 20 30 40 50",
        explanation: "The loop runs with i from 0 to 4 and prints numbers[i] each time, so every element appears in order. Printing 0 1 2 3 4 would mean printing i instead of numbers[i]."
    },
    {
        type: "multiple-choice",
        question: "Which loop correctly reads five values from the keyboard into int numbers[5];?",
        options: [
            "for (int i = 0; i < 5; i++) { cin >> numbers[i]; }",
            "for (int i = 1; i <= 5; i++) { cin >> numbers[i]; }",
            "for (int i = 0; i <= 5; i++) { cin >> numbers[i]; }",
            "cin >> numbers;"
        ],
        answer: "for (int i = 0; i < 5; i++) { cin >> numbers[i]; }",
        explanation: "The loop has to visit indices 0 through 4, which is exactly what i < 5 starting from 0 does. Both i <= 5 and starting at 1 reach index 5, which is outside the array."
    },
    {
        type: "multiple-choice",
        question: "What is the output of this while loop?\n\nint numbers[5] = {2, 4, 6, 8, 10};\nint i = 0;\nwhile (i < 5) {\n    cout << numbers[i] << \" \";\n    i++;\n}",
        options: [
            "2 4 6 8 10",
            "0 1 2 3 4",
            "2 2 2 2 2",
            "Nothing, because a while loop cannot traverse an array"
        ],
        answer: "2 4 6 8 10",
        explanation: "A while loop traverses an array just as well as a for loop, as long as the counter is initialized before the loop and incremented inside it. Forgetting the i++ would loop forever."
    },
    {
        type: "multiple-choice",
        question: "What does the array contain after this loop?\n\nint numbers[5] = {3, 6, 9, 12, 15};\nfor (int i = 0; i < 5; i++) {\n    numbers[i] = numbers[i] + i;\n}",
        options: [
            "3, 7, 11, 15, 19",
            "3, 6, 9, 12, 15",
            "0, 1, 2, 3, 4",
            "4, 8, 12, 16, 20"
        ],
        answer: "3, 7, 11, 15, 19",
        explanation: "Each element has its own index added to it: 3+0, 6+1, 9+2, 12+3 and 15+4. The first element looks unchanged only because its index happens to be 0."
    },

    // ---------- Sum, extremes, counting and searching ----------
    {
        type: "multiple-choice",
        question: "What are the values of sum and average after this code?\n\nint numbers[5] = {10, 20, 30, 40, 50};\nint sum = 0;\nfor (int i = 0; i < 5; i++) {\n    sum += numbers[i];\n}\ndouble average = static_cast<double>(sum) / 5;",
        options: [
            "sum = 150 and average = 30",
            "sum = 150 and average = 150",
            "sum = 50 and average = 10",
            "sum = 0 and average = 0"
        ],
        answer: "sum = 150 and average = 30",
        explanation: "The loop accumulates every element into sum, giving 150, and dividing by the element count gives 30. The cast matters whenever the division would not come out whole."
    },
    {
        type: "multiple-choice",
        question: "Why does this maximum search start its loop at i = 1 rather than i = 0?\n\nint numbers[5] = {12, 45, 23, 67, 34};\nint maximum = numbers[0];\nfor (int i = 1; i < 5; i++) {\n    if (numbers[i] > maximum) maximum = numbers[i];\n}",
        options: [
            "Element 0 is already the starting value of maximum, so comparing it with itself would add nothing",
            "Index 0 of an array can never be read inside a loop",
            "Starting at 0 would make the loop skip the last element",
            "Starting at 1 is required for the comparison operator to work"
        ],
        answer: "Element 0 is already the starting value of maximum, so comparing it with itself would add nothing",
        explanation: "Seeding maximum with numbers[0] means that element has effectively been checked, so the loop begins at the next one. Starting at 0 would still give the right answer, just with one redundant comparison."
    },
    {
        type: "multiple-choice",
        question: "What is the value of count after this code?\n\nint numbers[6] = {2, 7, 8, 11, 14, 19};\nint count = 0;\nfor (int i = 0; i < 6; i++) {\n    if (numbers[i] % 2 == 0) {\n        count++;\n    }\n}",
        options: ["3", "6", "2", "19"],
        answer: "3",
        explanation: "The test numbers[i] % 2 == 0 is true for 2, 8 and 14, so count ends at 3. The odd values 7, 11 and 19 leave a remainder of 1 and are skipped."
    },
    {
        type: "multiple-choice",
        question: "What is the value of position after this linear search?\n\nint numbers[5] = {10, 20, 30, 40, 50};\nint target = 30, position = -1;\nfor (int i = 0; i < 5; i++) {\n    if (numbers[i] == target) {\n        position = i;\n        break;\n    }\n}",
        options: ["2", "3", "30", "-1"],
        answer: "2",
        explanation: "The value 30 sits at index 2, so position is set to 2 and break stops the search early. position would have stayed at -1 only if the target were absent."
    },

    // ---------- Common errors and debugging ----------
    {
        type: "multiple-choice",
        question: "This program has two index problems. What are they?\n\nint nums[5];\nfor (int i = 0; i <= 5; i++) {\n    cin >> nums[i];\n}\ncout << nums[5];",
        options: [
            "The condition should be i < 5, and nums[5] is out of bounds because the last index is 4",
            "The loop should start at 1, and cin cannot read into an array element",
            "The array should be declared as nums[6], and cout cannot print an array element",
            "The loop variable should be a double, and nums[5] needs parentheses instead of brackets"
        ],
        answer: "The condition should be i < 5, and nums[5] is out of bounds because the last index is 4",
        explanation: "i <= 5 lets the loop write to nums[5], and the final cout reads that same invalid position. Both faults come from treating the size as though it were the last index."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (10 Questions)
// ==========================================

const comprog1Week13Test2 = [
    {
        type: "identification",
        question: "What is the term for the number inside the square brackets that identifies one element of an array?",
        answer: ["index", "subscript", "the index", "array index"],
        explanation: "The index, sometimes called the subscript, selects which element is being read or written. In C++ it always begins at zero."
    },
    {
        type: "identification",
        question: "What is the first valid index of any array in C++?",
        answer: ["0", "zero"],
        explanation: "C++ arrays are zero-based, so the very first element always sits at index 0. That is why the last index is one less than the size."
    },
    {
        type: "identification",
        question: "For an array of size n, write the expression for the last valid index.",
        answer: ["n - 1", "n-1", "n -1", "n- 1", "size - 1", "size-1"],
        explanation: "The n elements occupy indices 0 through n - 1, so the last one is n - 1. Using n itself reaches one position past the end of the array."
    },
    {
        type: "identification",
        question: "In the declaration int b[5] = {10, 20};  what value do the three remaining elements hold?",
        answer: ["0", "zero"],
        explanation: "Partial initialization fills the listed values in order and sets every remaining element to zero. The array still has all five of its declared elements."
    },
    {
        type: "identification",
        question: "What value is conventionally used to mean that a linear search did not find its target?",
        answer: ["-1", "minus 1", "negative 1", "negative one"],
        explanation: "-1 works as the not-found marker because no real index can ever be negative. The search variable is set to it before the loop and only changes on a match."
    },
    {
        type: "identification",
        question: "What is the name of the search technique that checks array elements one at a time from the beginning until the target is found?",
        answer: ["linear search", "sequential search", "linear", "sequential"],
        explanation: "A linear or sequential search simply walks the array in order. Adding break lets it stop as soon as the target turns up."
    },
    {
        type: "identification",
        question: "What is the term for reading or writing an array using an index outside its valid range?",
        answer: ["out of bounds", "out-of-bounds", "out of bounds access", "out-of-bounds access", "out of range"],
        explanation: "An out-of-bounds access is undefined behavior, because a built-in array does no automatic bounds checking. The program may print nonsense or crash."
    },
    {
        type: "identification",
        question: "Which operator is used in the test numbers[i] % 2 == 0 to decide whether a value is even?",
        answer: ["%", "modulus", "modulo", "remainder", "modulus operator"],
        explanation: "The % operator gives the remainder of a division, and a remainder of 0 after dividing by 2 means the value is even. An odd value leaves a remainder of 1."
    },
    {
        type: "identification",
        question: "In double average = static_cast<double>(sum) / 5;  name the cast that stops the division from discarding the fraction.",
        answer: ["static_cast<double>", "static_cast", "static cast", "double cast", "cast to double"],
        explanation: "Turning one operand into a double makes the division a floating-point one, so the fractional part survives. Dividing two ints would truncate the result."
    },
    {
        type: "identification",
        question: "What is the term for the number of elements an array is declared to hold?",
        answer: ["size", "length", "array size", "the size"],
        explanation: "The size is fixed for a built-in array and must be known at compile time. Loop bounds are written from it, usually as i < size."
    }
];

// ==========================================
// TEST 3: TRUE OR FALSE (10 Questions)
// ==========================================

const comprog1Week13Test3 = [
    {
        type: "true-false",
        question: "Built-in C++ arrays automatically check that an index is within range before using it.",
        options: ["True", "False"],
        answer: "False",
        explanation: "No such check happens, which is why an out-of-bounds access is undefined behavior. The program may seem to work, print garbage, or crash."
    },
    {
        type: "true-false",
        question: "For an array declared with size 5, the last valid index is 5.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The five elements sit at indices 0 through 4, so the last valid index is 4. Treating the size as the last index is the classic off-by-one array bug."
    },
    {
        type: "true-false",
        question: "All elements of a one-dimensional array must have the same data type.",
        options: ["True", "False"],
        answer: "True",
        explanation: "A single shared element type is one of the defining properties of an array. The declared type applies to every element."
    },
    {
        type: "true-false",
        question: "In int b[5] = {10, 20};  the elements that were not given a value are set to zero.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Partial initialization zero-fills whatever is left over, so the array holds 10, 20, 0, 0, 0. The array still has its full declared size of five."
    },
    {
        type: "true-false",
        question: "The declaration int c[] = {10, 20, 30}; is valid, and the compiler works out that the array has three elements.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Leaving the brackets empty is allowed as long as an initializer list is supplied, and the size is inferred from the number of values. Here that gives a size of three."
    },
    {
        type: "true-false",
        question: "One whole built-in array can be copied into another of the same size with a single assignment such as a = b;.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Built-in arrays do not support assignment as a whole; expecting them to is listed among the common errors. Copying has to be done element by element in a loop."
    },
    {
        type: "true-false",
        question: "The elements of an array are stored consecutively in memory.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Consecutive storage is one of the key properties of an array, and it is what makes index-based access fast. The index is effectively an offset from the start."
    },
    {
        type: "true-false",
        question: "Writing for (int i = 0; i <= SIZE; i++) is the correct way to loop over every element of an array of size SIZE.",
        options: ["True", "False"],
        answer: "False",
        explanation: "That condition runs one iteration too many and touches index SIZE, which is past the end. The correct bound is i < SIZE."
    },
    {
        type: "true-false",
        question: "A while loop can be used to traverse an array instead of a for loop.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Either loop works, as long as the counter is initialized before the loop and incremented inside it. A for loop simply keeps those three pieces together on one line."
    },
    {
        type: "true-false",
        question: "A search for the largest value may start by setting the maximum to element 0 and then begin its loop at index 1.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Seeding from the first element means it has already been accounted for, so the loop can start at the next index. Starting at 0 instead would just repeat one harmless comparison."
    }
];

// Export for quiz engine
const comprog1Week13Questions = {
    test1: comprog1Week13Test1,
    test2: comprog1Week13Test2,
    test3: comprog1Week13Test3,
    title: "ComProg1 Week 13: One-Dimensional Arrays",
    test2Label: "Identification",
    test2Info: "10 questions - Type your answers",
    test3Label: "True or False",
    test3Info: "10 questions - Choose True or False"
};
