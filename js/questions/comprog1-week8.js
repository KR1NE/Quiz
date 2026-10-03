// ComProg1 Week 8: Nested Loops
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (10 Questions) - Items 21-30
// Test 3: True or False (10 Questions) - Items 31-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Week8Test1 = [
    // ---------- Nested loops, patterns and tracing ----------
    // What a nested loop is
    {
        type: "multiple-choice",
        question: "In a nested loop, how often does the inner loop finish all of its iterations?",
        options: [
            "Once for every single pass of the outer loop",
            "Once for the whole program, no matter how many outer passes there are",
            "Once for every two passes of the outer loop",
            "Only during the last pass of the outer loop"
        ],
        answer: "Once for every single pass of the outer loop",
        explanation: "The inner loop restarts and runs to completion each time the outer loop takes one step. Finishing only once for the whole program would describe two loops written one after the other, not one inside the other."
    },
    {
        type: "multiple-choice",
        question: "An outer loop runs 6 times and its inner loop runs 4 times on every pass. How many times does the body of the inner loop execute in total?",
        options: ["24", "10", "6", "4"],
        answer: "24",
        explanation: "The work multiplies, so 6 outer passes times 4 inner passes gives 24 executions. Adding them to get 10 would only be right if the loops sat side by side instead of one inside the other."
    },

    // Pattern 1: the rectangle
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nfor (int row = 1; row <= 3; row++)\n{\n    for (int col = 1; col <= 5; col++)\n    {\n        cout << \"#\";\n    }\n    cout << endl;\n}",
        options: [
            "Three lines, each containing five # characters",
            "Five lines, each containing three # characters",
            "One line containing fifteen # characters",
            "Three lines containing one, then two, then three # characters"
        ],
        answer: "Three lines, each containing five # characters",
        explanation: "The outer loop counts the rows and the inner loop prints five marks before the endl closes the line. Both limits are fixed here, so no row is shorter or longer than any other."
    },

    // Pattern 2: the triangle, printing row instead of col
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nfor (int row = 1; row <= 4; row++)\n{\n    for (int col = 1; col <= row; col++)\n    {\n        cout << row;\n    }\n    cout << endl;\n}",
        options: [
            "1, then 22, then 333, then 4444",
            "1, then 12, then 123, then 1234",
            "1, then 2, then 3, then 4",
            "1111, then 2222, then 3333, then 4444"
        ],
        answer: "1, then 22, then 333, then 4444",
        explanation: "The condition col <= row decides how many characters a row gets, while cout << row decides which character is printed. Printing col instead would have given 1, 12, 123, 1234."
    },

    // Multiplication table
    {
        type: "multiple-choice",
        question: "In the table produced by this code, which value appears in row 3, column 4?\n\nfor (int row = 1; row <= 4; row++)\n{\n    for (int col = 1; col <= 4; col++)\n    {\n        cout << row * col << \"\\t\";\n    }\n    cout << endl;\n}",
        options: ["12", "7", "34", "43"],
        answer: "12",
        explanation: "Each cell holds row * col, so row 3 and column 4 give 12. Answering 7 would come from adding the two counters instead of multiplying them."
    },

    // Nested while loops and the missing reset
    {
        type: "multiple-choice",
        question: "What goes wrong when this code runs?\n\nint row = 1;\nint col = 1;\nwhile (row <= 3)\n{\n    while (col <= 4)\n    {\n        cout << \"*\";\n        col++;\n    }\n    cout << endl;\n    row++;\n}",
        options: [
            "Only the first row prints stars, because col is never reset to 1",
            "All three rows print four stars each, exactly as intended",
            "The program prints stars forever and never stops",
            "The first row is skipped and only the last two rows print stars"
        ],
        answer: "Only the first row prints stars, because col is never reset to 1",
        explanation: "col is left at 5 once the inner loop ends, so the second and third passes fail the test immediately and print only a blank line. Moving int col = 1; inside the outer loop body is what makes all three rows appear."
    },

    // break inside a nested loop
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nfor (int i = 1; i <= 3; i++)\n{\n    for (int j = 1; j <= 4; j++)\n    {\n        if (j == 3)\n            break;\n        cout << i << j << \" \";\n    }\n}",
        options: [
            "11 12 21 22 31 32",
            "11 12",
            "11 12 13 21 22 23 31 32 33",
            "11 12 14 21 22 24 31 32 34"
        ],
        answer: "11 12 21 22 31 32",
        explanation: "break leaves only the loop it sits in, so each pass of i prints two pairs and then the outer loop carries on to the next value. Stopping at 11 12 would require a break that ended both loops at once."
    },

    // Mixing loops with selection
    {
        type: "multiple-choice",
        question: "What are the three lines produced by this code?\n\nfor (int row = 1; row <= 3; row++)\n{\n    for (int col = 1; col <= 4; col++)\n    {\n        if ((row + col) % 2 == 0)\n            cout << \"A\";\n        else\n            cout << \"B\";\n    }\n    cout << endl;\n}",
        options: [
            "ABAB, then BABA, then ABAB",
            "ABAB, then ABAB, then ABAB",
            "AABB, then BBAA, then AABB",
            "BABA, then ABAB, then BABA"
        ],
        answer: "ABAB, then BABA, then ABAB",
        explanation: "row + col is even at row 1 column 1, so that cell is A, and the letters then alternate along the row and flip on the next one. Every line being identical would need a test that ignores row, such as col % 2 == 0."
    },

    // Common error: endl in the wrong block
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nfor (int row = 1; row <= 3; row++)\n{\n    for (int col = 1; col <= 3; col++)\n    {\n        cout << \"*\";\n        cout << endl;\n    }\n}",
        options: [
            "Nine lines, each containing a single *",
            "Three lines, each containing three *",
            "One line containing nine *",
            "Three lines, each containing a single *"
        ],
        answer: "Nine lines, each containing a single *",
        explanation: "The endl is inside the inner loop, so it runs after every star rather than once per row. Moving it out to just after the inner loop is what would give three rows of three."
    },

    // Common errors: wrong condition variable and wrong update variable
    {
        type: "multiple-choice",
        question: "An outer loop already uses i as its counter, and the inner loop should count j from 1 to 5. Which inner-loop header is written correctly?",
        options: [
            "for (int j = 1; j <= 5; j++)",
            "for (int j = 1; i <= 5; j++)",
            "for (int j = 1; j <= 5; i++)",
            "for (int j = 1; i <= 5; i++)"
        ],
        answer: "for (int j = 1; j <= 5; j++)",
        explanation: "All three parts of the header have to talk about the same counter, so j appears in the initialization, the condition and the update. Letting i creep into the condition or the update gives the two classic nested-loop bugs, the second of which leaves j unchanged and loops forever."
    },
    // ---------- Single-loop review before nesting ----------
    {
        type: "multiple-choice",
        question: "In the header for (int i = 1; i <= 5; i++), which part is the condition?",
        options: ["i <= 5", "int i = 1", "i++", "cout << i"],
        answer: "i <= 5",
        explanation: "The condition is the test that decides whether another pass happens, and it sits between the two semicolons. int i = 1 runs once at the start and i++ runs at the end of each pass, so neither of them is the test."
    },
    {
        type: "multiple-choice",
        question: "Of the three loops reviewed at the start of Week 8, which one is the natural choice when the number of repetitions is already known?",
        options: ["for", "while", "do-while", "None of them can count repetitions"],
        answer: "for",
        explanation: "It gathers the initialization, the condition and the update onto one line, which suits a fixed count such as 1 to 5. while and do-while are the better fit when the repetition depends on a condition or an event instead."
    },
    {
        type: "multiple-choice",
        question: "A program must keep asking for input until the user finally types a positive number. Which loop fits this best?",
        options: ["do-while", "for", "A nested for loop", "while"],
        answer: "do-while",
        explanation: "The prompt has to appear at least once before anything can be checked, and do-while runs its body before testing. A plain while would test a number that has not been entered yet."
    },

    // ---------- Tracing the counters ----------
    {
        type: "multiple-choice",
        question: "How many lines does this code print, and what is the fourth line?\n\nfor (int i = 1; i <= 3; i++)\n{\n    for (int j = 1; j <= 2; j++)\n    {\n        cout << \"i=\" << i << \", j=\" << j << endl;\n    }\n}",
        options: [
            "Six lines, and the fourth is i=2, j=2",
            "Six lines, and the fourth is i=2, j=1",
            "Five lines, and the fourth is i=2, j=2",
            "Three lines, so there is no fourth line"
        ],
        answer: "Six lines, and the fourth is i=2, j=2",
        explanation: "The pairs come out in the order 1-1, 1-2, 2-1, 2-2, 3-1, 3-2, so three outer passes times two inner passes give six lines. Counting only the outer passes would wrongly suggest three."
    },
    {
        type: "multiple-choice",
        question: "How many * characters does this code print in total?\n\nfor (int row = 1; row <= 4; row++)\n{\n    for (int col = 1; col <= 6; col++)\n    {\n        cout << \"*\";\n    }\n    cout << endl;\n}",
        options: ["24", "10", "6", "4"],
        answer: "24",
        explanation: "Both limits are fixed, so every one of the 4 rows gets 6 stars and the work multiplies to 24. Adding the limits to get 10 would only be right if the loops sat side by side."
    },

    // ---------- Number patterns ----------
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nfor (int row = 1; row <= 5; row++)\n{\n    for (int col = 1; col <= row; col++)\n    {\n        cout << col << \" \";\n    }\n    cout << endl;\n}",
        options: [
            "1, then 1 2, then 1 2 3, then 1 2 3 4, then 1 2 3 4 5",
            "1, then 2 2, then 3 3 3, then 4 4 4 4, then 5 5 5 5 5",
            "1 2 3 4 5 repeated on five lines",
            "1, then 2, then 3, then 4, then 5"
        ],
        answer: "1, then 1 2, then 1 2 3, then 1 2 3 4, then 1 2 3 4 5",
        explanation: "col <= row decides how many numbers a row gets, and cout << col prints the counter itself, so each row counts up from 1. Printing row instead would have repeated the same digit across the line."
    },
    {
        type: "multiple-choice",
        question: "Which escape sequence is used in the multiplication table so that the columns line up?\n\ncout << row * col << \"\\t\";",
        options: [
            "\\t, which jumps to the next tab stop",
            "\\n, which starts a new line",
            "\\\\, which prints a single backslash",
            "\\0, which marks the end of the text"
        ],
        answer: "\\t, which jumps to the next tab stop",
        explanation: "The tab stop keeps every column starting in the same place even when the numbers have different widths. A plain space would leave the two-digit results out of line."
    },

    // ---------- Nested while, written correctly ----------
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nint row = 1;\nwhile (row <= 3)\n{\n    int col = 1;\n    while (col <= 4)\n    {\n        cout << \"*\";\n        col++;\n    }\n    cout << endl;\n    row++;\n}",
        options: [
            "Three rows of four stars each",
            "Only the first row of four stars, then two blank lines",
            "Four rows of three stars each",
            "Twelve rows of one star each"
        ],
        answer: "Three rows of four stars each",
        explanation: "int col = 1; sits inside the outer loop body, so the inner counter starts over for every row. Declaring it before the outer loop is what would leave col at 5 and give only one row of stars."
    },

    // ---------- break and continue ----------
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nfor (int i = 1; i <= 2; i++)\n{\n    for (int j = 1; j <= 5; j++)\n    {\n        if (j == 4)\n            continue;\n        cout << i << \",\" << j << \" \";\n    }\n    cout << endl;\n}",
        options: [
            "1,1 1,2 1,3 1,5 on the first line and 2,1 2,2 2,3 2,5 on the second",
            "1,1 1,2 1,3 on the first line and 2,1 2,2 2,3 on the second",
            "1,1 1,2 1,3 1,4 1,5 on the first line and the same for 2 on the second",
            "1,1 1,2 1,3 only, because continue ends both loops"
        ],
        answer: "1,1 1,2 1,3 1,5 on the first line and 2,1 2,2 2,3 2,5 on the second",
        explanation: "continue skips only the rest of that one pass, so j = 4 is left out but j = 5 still prints. Writing break there instead would have ended the inner loop and stopped each line at 1,3."
    },

    // ---------- Common errors ----------
    {
        type: "multiple-choice",
        question: "An outer loop uses i as its counter. What goes wrong with this inner loop?\n\nfor (int j = 1; j <= 5; i++)\n{\n    cout << \"*\";\n}",
        options: [
            "The inner loop never ends, because j is never updated",
            "The inner loop runs exactly five times, as intended",
            "The inner loop is skipped, because j starts at 1",
            "The program will not compile, because i is from the outer loop"
        ],
        answer: "The inner loop never ends, because j is never updated",
        explanation: "The update changes i while the condition keeps testing j, so j stays at 1 and the test never fails. This is the wrong-update-variable mistake, the partner of writing i in the condition by accident."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (10 Questions)
// ==========================================
const comprog1Week8Test2 = [
    {
        type: "identification",
        question: "What is the term for a loop written inside the body of another loop?",
        answer: ["nested loop", "nested loops", "nested", "nesting", "a nested loop"],
        explanation: "It is the structure behind every rectangle, triangle and table drawn in Week 8. Two loops written one after the other are not nested, because neither one sits inside the other."
    },
    {
        type: "identification",
        question: "In a nested loop that draws a pattern, which loop is normally in charge of the rows?",
        answer: ["outer loop", "outer", "the outer loop", "OUTER LOOP"],
        explanation: "It counts the major repetitions, taking one step per line of output. Each of its steps hands the real work over to the loop nested inside it."
    },
    {
        type: "identification",
        question: "In a nested loop that draws a pattern, which loop is normally in charge of the columns?",
        answer: ["inner loop", "inner", "the inner loop", "INNER LOOP"],
        explanation: "It does the repeated work within a single step of the outer loop. This is why it runs to completion again and again, once per row."
    },
    {
        type: "identification",
        question: "Which keyword, placed inside the inner loop, ends only that inner loop and leaves the outer loop running?",
        answer: ["break", "BREAK", "Break", "break statement", "break;"],
        explanation: "It exits the nearest enclosing loop and nothing more, which is why an outer loop keeps producing rows after an inner loop has been cut short. Its companion, continue, skips the rest of a pass instead of ending the loop."
    },
    {
        type: "identification",
        question: "Which hyphenated term names the boundary mistake of writing j < 5 when j <= 5 was intended, so the loop runs one pass too few?",
        answer: ["off-by-one", "off by one", "offbyone", "off-by-one error", "off by one error", "off-by-one bug"],
        explanation: "The loop still works, which is what makes the bug so easy to miss, but the pattern comes out one column or one row short. It sits alongside the wrong counter and the missing reset in the list of common nested-loop errors."
    },
    {
        type: "identification",
        question: "In a nested while loop, what must be done to the inner counter inside the outer loop body so that every row is drawn?",
        answer: ["reset", "reset it", "reset the counter", "resetting", "re-initialize", "reinitialize", "reset to 1"],
        explanation: "The inner counter finishes each row holding a value that already fails the test. Leaving it there means only the very first row ever gets any output."
    },
    {
        type: "identification",
        question: "Which inner-loop condition makes row 1 print one character, row 2 print two, and so on down the triangle?",
        answer: ["col <= row", "col<=row", "col <=row", "col<= row", "column <= row"],
        explanation: "Tying the inner limit to the outer counter is what makes the rows grow. A fixed limit such as col <= 5 would give a rectangle instead."
    },
    {
        type: "identification",
        question: "If an outer loop runs M times and its inner loop runs N times per pass, which expression gives the total number of inner executions?",
        answer: ["M * N", "M*N", "M x N", "MxN", "M times N", "m * n"],
        explanation: "Nested work multiplies rather than adds, which is why small limits can still mean a lot of repetitions. Tracing this total before coding is the habit Week 8 asks for."
    },
    {
        type: "identification",
        question: "The row-and-column thinking behind nested loops is the bridge to which two-dimensional data structure?",
        answer: ["two-dimensional array", "2d array", "two dimensional array", "2-d array", "two-dimensional arrays", "2d arrays", "array"],
        explanation: "Rows and columns map directly onto the two indexes such an array uses. The nested loop is simply the tool that visits every one of its positions."
    },
    {
        type: "identification",
        question: "Of the three loops reviewed at the start of Week 8, which one tests its condition only after the body has already run once?",
        answer: ["do-while", "do while", "dowhile", "DO-WHILE", "Do-while", "do-while loop"],
        explanation: "The body comes first and the test comes afterwards, so it always runs at least once. The reviewer uses it to keep asking for a positive number until one is given."
    }
];

// ==========================================
// TEST 3: TRUE OR FALSE (10 Questions)
// ==========================================
const comprog1Week8Test3 = [
    {
        type: "true-false",
        question: "In a nested loop, the outer loop completes all of its passes before the inner loop runs for the first time.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The inner loop runs to completion inside each single pass of the outer loop, so the two take turns. The outer loop finishing first would describe two separate loops written one after the other."
    },
    {
        type: "true-false",
        question: "A break statement inside the inner loop stops the inner loop and the outer loop at the same time.",
        options: ["True", "False"],
        answer: "False",
        explanation: "break exits only the nearest loop, so the outer loop simply moves on to its next pass. That is why the reviewer's example still prints a line for every value of i."
    },
    {
        type: "true-false",
        question: "In the header for (int i = 1; i <= 5; i++), the part written as i++ is the update.",
        options: ["True", "False"],
        answer: "True",
        explanation: "int i = 1 is the initialization, i <= 5 is the condition, and i++ is the update. A for loop just gathers the three of them onto a single line."
    },
    {
        type: "true-false",
        question: "When the inner loop's limit is written as col <= row, each row prints one more character than the row before it.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The inner limit grows with the outer counter, which is what turns a rectangle into a triangle. A fixed limit would give every row the same width."
    },
    {
        type: "true-false",
        question: "In a nested while loop, the inner counter must be reset inside the outer loop body or only the first row is drawn.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The counter ends the first row already past its limit, so later passes fail the test immediately. This is the classic nested while bug listed among the common errors."
    },
    // ---------- Totals, tables and common errors ----------
    {
        type: "true-false",
        question: "If an outer loop runs 3 times and its inner loop runs 2 times on every pass, the body of the inner loop executes 5 times in total.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Nested work multiplies, so the answer is 3 times 2, which is 6. Adding the two counts would only be right for two loops written one after the other."
    },
    {
        type: "true-false",
        question: "In the multiplication table drawn with nested loops, the value shown in each cell is row + col.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Each cell holds row * col, which is why row 5 ends with 25. Adding the counters would make the first row read 2 3 4 5 6 instead of 1 2 3 4 5."
    },
    {
        type: "true-false",
        question: "Moving cout << endl; inside the inner loop still produces one line per row.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Inside the inner loop it runs after every single character, so each mark lands on a line of its own. One line per row needs it just after the inner loop, inside the outer loop body."
    },
    {
        type: "true-false",
        question: "Writing for (int j = 1; i <= 5; j++) inside a loop that already uses i is the wrong-condition-variable error.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The condition watches the outer counter while the update changes the inner one, so the inner loop no longer controls itself. All three parts of a header have to talk about the same counter."
    },
    {
        type: "true-false",
        question: "Nested loops lead naturally into two-dimensional arrays, because both rely on row-and-column thinking.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Rows and columns map straight onto the two indexes such an array uses. The nested loop is simply the tool that visits every one of its positions."
    }
];

// Export for quiz engine
const comprog1Week8Questions = {
    test1: comprog1Week8Test1,
    test2: comprog1Week8Test2,
    test3: comprog1Week8Test3,
    title: "ComProg1 Week 8: Nested Loops",
    test2Label: "Identification",
    test2Info: "10 questions - Type your answers",
    test3Label: "True or False",
    test3Info: "10 questions - Choose True or False"
};
