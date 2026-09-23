// ComProg1 Week 8 & 9: Nested Loops, Conversions & the string Class
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (20 Questions) - Items 21-40
// Test 3: True or False (10 Questions) - Items 41-50

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Week8And9Test1 = [
    // ---------- Week 8: Nested Loops ----------

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

    // ---------- Week 9: Arithmetic Conversions ----------

    // Why conversion happens
    {
        type: "multiple-choice",
        question: "What does this code display, and why?\n\nint x = 4;\ndouble y = 1.5;\ncout << x + y;",
        options: [
            "5.5, because the int 4 becomes 4.0 so both operands share one type",
            "5, because the double 1.5 becomes the int 1 before the addition",
            "5.5, because C++ turns the double into an int and then back again",
            "4.5, because only the fractional part of y is added on"
        ],
        answer: "5.5, because the int 4 becomes 4.0 so both operands share one type",
        explanation: "C++ needs a common type before it can add, and it widens the int rather than throwing away the fraction. Converting 1.5 down to 1 would lose information, which is not what an arithmetic conversion does."
    },

    // Integer division
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nint a = 9;\nint b = 4;\ncout << a / b;",
        options: ["2", "2.25", "2.3", "3"],
        answer: "2",
        explanation: "Both operands are int, so C++ performs integer division and the remainder is simply dropped. The .25 never exists in the first place, so there is nothing to round up to 3."
    },
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nint a = 9;\ndouble b = 4.0;\ncout << a / b;",
        options: ["2.25", "2", "2.3", "9.4"],
        answer: "2.25",
        explanation: "One operand is a double, so a is converted to 9.0 and the division keeps its fraction. Writing 4 instead of 4.0 would have made both operands int and produced 2."
    },

    // Assignment conversion and data loss
    {
        type: "multiple-choice",
        question: "What does this code display?\n\ndouble weight = 72.89;\nint rounded = weight;\ncout << rounded;",
        options: ["72", "73", "72.89", "0"],
        answer: "72",
        explanation: "Storing a double in an int discards the fractional part outright, so .89 is thrown away rather than rounded. The variable name is wishful thinking here, since this conversion never rounds."
    },

    // Explicit casting
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nint a = 3, b = 8;\ncout << (double)a / b;",
        options: ["0.375", "0", "0.4", "3"],
        answer: "0.375",
        explanation: "The cast makes a a double before the division, so the whole expression is done in floating point. Without the cast it would be plain integer division and would print 0."
    },

    // Promotion of char
    {
        type: "multiple-choice",
        question: "Knowing that the character 'A' has the value 65, what does this code display?\n\nchar grade = 'B';\ncout << grade << \" \" << (int)grade;",
        options: ["B 66", "B B", "66 66", "B 65"],
        answer: "B 66",
        explanation: "Printed as a char it shows the letter, but the cast asks for its numeric value, and 'B' follows 'A' at 66. Only the cast changes how the same stored value is interpreted."
    },

    // ---------- Week 9: the string class ----------

    // cin >> stops at whitespace
    {
        type: "multiple-choice",
        question: "A program runs cin >> name; and the user types this line before pressing Enter:\n\nMaria Clara Santos\n\nWhat does name hold?",
        options: [
            "Maria",
            "Maria Clara Santos",
            "Maria Clara",
            "Nothing, because the input has spaces in it"
        ],
        answer: "Maria",
        explanation: "The extraction operator stops at the first whitespace, so only the first word is taken. Capturing the whole line including the spaces is exactly what getline(cin, name) is for."
    },

    // Declaration, length and at()
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nstring line(4, '*');\nstring word = \"Hello\";\ncout << line << word.length() << word.at(1);",
        options: ["****5e", "****5H", "4*5e", "****4e"],
        answer: "****5e",
        explanation: "string line(4, '*') builds a string of four stars, length() counts all five letters of Hello, and at(1) is the second character because indices start at 0. Reading at(1) as H would mean counting from one instead of zero."
    },

    // Concatenation
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nstring a = \"Com\";\nstring b = \"Prog\";\na += b;\ncout << a + \"1\";",
        options: ["ComProg1", "Com1", "ComProgCom1", "ComProg 1"],
        answer: "ComProg1",
        explanation: "+= appends b onto a so a becomes ComProg, and + then joins the 1 on the end without altering a. Neither operator inserts a space of its own, so one would have to be added on purpose."
    },

    // find and replace
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nstring text = \"I study Java\";\nint pos = text.find(\"Java\");\ntext.replace(pos, 4, \"C++\");\ncout << text;",
        options: ["I study C++", "I study C++a", "I study Java", "C++ study Java"],
        answer: "I study C++",
        explanation: "find reports the position where Java begins, and replacing all 4 of its characters swaps in the new text cleanly. Passing a length of 3 instead would leave the final a behind and print I study C++a."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (20 Questions)
// ==========================================
const comprog1Week8And9Test2 = [
    // ---------- Week 8: Nested Loops ----------
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
        question: "Which escape sequence separates the values in the multiplication table so the columns line up?",
        answer: ["\\t", "tab", "horizontal tab", "\\t (tab)", "the tab escape sequence"],
        explanation: "Written as cout << row * col << \"\\t\"; it jumps to the next tab stop. Using a plain space instead would leave the wider numbers out of line."
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
    },

    // ---------- Week 9: Conversions and the string class ----------
    {
        type: "identification",
        question: "Which header file must be included before you can declare a string object?",
        answer: ["<string>", "string", "#include <string>", "the string header"],
        explanation: "Written at the top as #include <string>, it brings in the standard class. Without it the compiler has no idea what the type name string refers to."
    },
    {
        type: "identification",
        question: "Which function reads an entire line of input, spaces included, into a string variable?",
        answer: ["getline", "getline()", "getline(cin, name)", "std::getline", "getline(cin, str)"],
        explanation: "It keeps reading until the end of the line rather than stopping at a space. That makes it the right choice for a full name or an address."
    },
    {
        type: "identification",
        question: "Besides length(), which string member function also reports how many characters a string holds?",
        answer: ["size", "size()", "s.size()", "the size function"],
        explanation: "The two are interchangeable, so either may appear in a program. Whichever you use, the last valid index is always one less than the count."
    },
    {
        type: "identification",
        question: "Which special value does find() return when the text it is looking for is not in the string?",
        answer: ["string::npos", "npos", "string npos", "std::string::npos"],
        explanation: "Comparing the result against it is how a program tells a miss from a hit. Only once the result is known not to be npos is it safe to use as a position."
    },
    {
        type: "identification",
        question: "Which string member function adds new text at a given position without deleting anything?",
        answer: ["insert", "insert()", "s.insert()", "the insert function"],
        explanation: "Called as insert(position, text), it pushes the existing characters along to make room. Its counterpart takes characters away instead of adding them."
    },
    {
        type: "identification",
        question: "Which string member function removes a given number of characters starting at a position?",
        answer: ["erase", "erase()", "s.erase()", "the erase function"],
        explanation: "Called as erase(position, count), it deletes that many characters and closes the gap. Swapping the arguments would erase from the wrong place entirely."
    },
    {
        type: "identification",
        question: "Which string member function swaps a stretch of characters for new text, given a position and a length?",
        answer: ["replace", "replace()", "s.replace()", "the replace function"],
        explanation: "Called as replace(position, length, text), it is usually paired with find to locate the spot first. Giving the wrong length leaves part of the old text behind."
    },
    {
        type: "identification",
        question: "Which word describes the character-by-character, dictionary-style way C++ compares two strings?",
        answer: ["lexicographic", "lexicographical", "lexicographically", "lexicographic order", "dictionary order", "alphabetical"],
        explanation: "It is why \"Apple\" < \"Banana\" is true, since the comparison settles on the first characters that differ. The relational operators work on strings for exactly this reason."
    },
    {
        type: "identification",
        question: "Which arithmetic type in the Week 9 list is the widest of the floating-point types?",
        answer: ["long double", "long double type"],
        explanation: "The list runs char, short, int, long, float, double and then long double. The first four hold whole numbers, while the last three carry fractions."
    }
];

// ==========================================
// TEST 3: TRUE OR FALSE (10 Questions)
// ==========================================
const comprog1Week8And9Test3 = [
    // ---------- Week 8: Nested Loops ----------
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

    // ---------- Week 9: Conversions and the string class ----------
    {
        type: "true-false",
        question: "Assigning a double value to an int variable rounds it to the nearest whole number.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The fractional part is discarded, so 99.95 is stored as 99 rather than 100. This conversion truncates and never rounds."
    },
    {
        type: "true-false",
        question: "cin >> name stops reading at the first space, so it captures only one word.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The extraction operator treats whitespace as the end of the input. Reading a full line with its spaces intact is what getline is for."
    },
    {
        type: "true-false",
        question: "For a string holding 5 characters, the last valid index is 5.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Indices begin at 0, so the last one is length() - 1, which is 4 here. Index 5 is already past the end of the string."
    },
    {
        type: "true-false",
        question: "In the expression 7 / 2.0 one operand is a double, so the result is 3.5.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The 7 is converted to 7.0 so the division keeps its fraction. Writing 7 / 2 instead would make both operands int and give 3."
    },
    {
        type: "true-false",
        question: "Square brackets can only read a character out of a string; they cannot change one.",
        options: ["True", "False"],
        answer: "False",
        explanation: "word[0] = 'Y'; turns Hello into Yello, so the brackets work on both sides of an assignment. at() can be used the same way."
    }
];

// Export for quiz engine
const comprog1Week8And9Questions = {
    test1: comprog1Week8And9Test1,
    test2: comprog1Week8And9Test2,
    test3: comprog1Week8And9Test3,
    title: "ComProg1 Week 8 & 9: Nested Loops, Conversions & the string Class",
    test2Label: "Identification",
    test2Info: "20 questions - Type your answers",
    test3Label: "True or False",
    test3Info: "10 questions - Choose True or False"
};
