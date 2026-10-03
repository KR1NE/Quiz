// ComProg1 Week 9: Arithmetic Conversions & the string Class
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (10 Questions) - Items 21-30
// Test 3: True or False (10 Questions) - Items 31-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Week9Test1 = [
    // ---------- Arithmetic conversions ----------
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
    },
    // ---------- Quick traces ----------
    {
        type: "multiple-choice",
        question: "What does this code display?\n\ncout << 4 + 2.5;",
        options: ["6.5", "6", "7", "42.5"],
        answer: "6.5",
        explanation: "The int 4 is converted to 4.0 so both operands share a type, and the sum keeps its fraction. Nothing here truncates, because the result is a double rather than an int."
    },
    {
        type: "multiple-choice",
        question: "What does this code display?\n\ncout << (int)5.99;",
        options: ["5", "6", "5.99", "0"],
        answer: "5",
        explanation: "Converting to int discards the fractional part, so .99 is simply dropped. The cast truncates and never rounds, which is why the answer is not 6."
    },
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nint a = 1, b = 4;\ndouble x = a / b;\ncout << x;",
        options: ["0", "0.25", "0.2", "4"],
        answer: "0",
        explanation: "Both operands are int, so the division happens first and gives 0 before anything is stored in the double. Writing (double)a / b casts in time and is what produces 0.25."
    },
    {
        type: "multiple-choice",
        question: "int total = 263; holds the sum of three scores. Which line displays their average with its decimal part intact?",
        options: [
            "cout << static_cast<double>(total) / 3;",
            "cout << total / 3;",
            "cout << (int)total / 3;",
            "cout << total % 3;"
        ],
        answer: "cout << static_cast<double>(total) / 3;",
        explanation: "The cast makes one operand a double before the division, so the fraction survives. Leaving the cast out, or casting to int, keeps both operands whole and throws the remainder away."
    },

    // ---------- Promotion and character values ----------
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nchar letter = 'A';\ncout << letter << endl;\ncout << (int)letter << endl;",
        options: [
            "A, then 65",
            "65, then A",
            "A, then A",
            "65, then 65"
        ],
        answer: "A, then 65",
        explanation: "Printed as a char it shows the letter, and the cast asks for the numeric value stored behind it. The same value is in memory both times; only the interpretation changes."
    },

    // ---------- Declaring strings ----------
    {
        type: "multiple-choice",
        question: "Which declaration creates a string made of 20 dashes?",
        options: [
            "string line(20, '-');",
            "string line = 20 * '-';",
            "string line(\"-\", 20);",
            "string line[20] = '-';"
        ],
        answer: "string line(20, '-');",
        explanation: "Giving a count and then a character fills the string with that character repeated, which is handy for a divider. Multiplying a character by a number is not something the string class offers."
    },

    // ---------- Indexing and at() ----------
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nstring word = \"Hello\";\nword[0] = 'Y';\ncout << word.at(1) << word;",
        options: ["eYello", "eHello", "Yelloe", "HYello"],
        answer: "eYello",
        explanation: "The assignment through the brackets turns Hello into Yello, and at(1) then reads the e that sits at index 1. The character is printed before the whole string, so the e comes first."
    },

    // ---------- Comparing strings ----------
    {
        type: "multiple-choice",
        question: "What does this code display, and why?\n\nstring a = \"Apple\";\nstring b = \"Banana\";\ncout << (a < b);",
        options: [
            "1, because A comes before B when the strings are compared character by character",
            "0, because Apple has fewer characters than Banana",
            "1, because Apple has fewer characters than Banana",
            "Nothing, because strings cannot be compared with <"
        ],
        answer: "1, because A comes before B when the strings are compared character by character",
        explanation: "Comparison is lexicographic, so it walks the strings together and decides at the first difference, which here is A against B. Length never enters into it, which is why the shorter-string reasoning is wrong even when it reaches the same answer."
    },

    // ---------- Inserting and erasing ----------
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nstring name = \"Hello World\";\nname.insert(6, \"Beautiful \");\ncout << name;",
        options: [
            "Hello Beautiful World",
            "Hello WorldBeautiful ",
            "Beautiful Hello World",
            "Hello Beautiful"
        ],
        answer: "Hello Beautiful World",
        explanation: "insert puts the new text at the given position and pushes the rest along, so World moves to the right. Nothing is removed, which is what separates insert from replace."
    },
    {
        type: "multiple-choice",
        question: "What does this code display?\n\nstring text = \"Hello Beautiful World\";\ntext.erase(6, 10);\ncout << text;",
        options: [
            "Hello World",
            "Hello Beautiful",
            "Beautiful World",
            "HelloWorld"
        ],
        answer: "Hello World",
        explanation: "Starting at index 6 it removes the 10 characters of Beautiful and the space that follows, closing the gap behind them. Erasing a different count would have left part of that word behind."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (10 Questions)
// ==========================================
const comprog1Week9Test2 = [
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
    },
    {
        type: "identification",
        question: "Which cast keyword, written in the form ...<double>(total), asks C++ to convert a value on purpose?",
        answer: ["static_cast", "static_cast<double>", "static cast", "static_cast<>", "staticcast"],
        explanation: "It makes the conversion visible in the code instead of leaving it to the compiler. Used as static_cast<double>(total) / 3 it is what keeps an average from being truncated."
    }
];

// ==========================================
// TEST 3: TRUE OR FALSE (10 Questions)
// ==========================================
const comprog1Week9Test3 = [
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
    },
    // ---------- string methods and casting ----------
    {
        type: "true-false",
        question: "string::npos is the value find() returns when the text it is looking for is not in the string.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Testing pos != string::npos is how a program checks that the search actually succeeded. Using the returned position without that test is what makes a failed search go unnoticed."
    },
    {
        type: "true-false",
        question: "length() and size() report the same thing for a string.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The two are interchangeable, so either may turn up in a program. Whichever is used, the last valid index is always one less than the count they return."
    },
    {
        type: "true-false",
        question: "Comparing two strings with < compares how many characters each one holds.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The comparison is lexicographic, walking the strings together and deciding at the first character that differs. That is why Apple is less than Banana even though both are compared letter by letter rather than by length."
    },
    {
        type: "true-false",
        question: "erase(position, count) removes count characters starting at position.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The gap closes behind the removed stretch, so Hello Beautiful World becomes Hello World. Its partner insert(position, text) adds text at a position without taking anything away."
    },
    {
        type: "true-false",
        question: "A cast such as (double)a / b changes the value stored in the variable a itself.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The cast produces a converted value for that one expression and leaves a exactly as it was. Changing a would need an assignment, not a cast."
    }
];

// Export for quiz engine
const comprog1Week9Questions = {
    test1: comprog1Week9Test1,
    test2: comprog1Week9Test2,
    test3: comprog1Week9Test3,
    title: "ComProg1 Week 9: Arithmetic Conversions & the string Class",
    test2Label: "Identification",
    test2Info: "10 questions - Type your answers",
    test3Label: "True or False",
    test3Info: "10 questions - Choose True or False"
};
