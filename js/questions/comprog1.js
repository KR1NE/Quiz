// ComProg1 Quiz 1: Variables, Data Types, Operators, Functions & Classes
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (20 Questions) - Items 21-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Test1 = [
    // Identifiers (4 questions)
    {
        type: "multiple-choice",
        question: "Which of the following is a VALID identifier in C++?",
        options: ["student_name", "2ndScore", "$sum", "sum-salary"],
        answer: "student_name",
        explanation: "It starts with a letter and uses only letters, digits and underscores. 2ndScore starts with a digit, $ is not allowed, and the hyphen in sum-salary would be read as minus."
    },
    {
        type: "multiple-choice",
        question: "Which of the following is an INVALID identifier in C++?",
        options: ["2names", "_Bool", "student_age", "INT_MIN"],
        answer: "2names",
        explanation: "An identifier can never begin with a digit, because the compiler starts reading it as a number. The other three all begin with a letter or underscore."
    },
    {
        type: "multiple-choice",
        question: "What is the first rule for creating identifiers in C++?",
        options: [
            "First character must be alphabetic or underscore",
            "First character must be a digit",
            "First character must be a special symbol",
            "First character can be anything"
        ],
        answer: "First character must be alphabetic or underscore",
        explanation: "Only the first character is restricted this way — digits are perfectly legal from the second character onward, as in score2."
    },
    {
        type: "multiple-choice",
        question: "C++ identifiers are:",
        options: ["Case-sensitive", "Case-insensitive", "Only uppercase", "Only lowercase"],
        answer: "Case-sensitive",
        explanation: "total, Total and TOTAL are three different variables. This is a common source of undeclared identifier errors."
    },

    // Data Types (4 questions)
    {
        type: "multiple-choice",
        question: "Which data type is used to store true or false values?",
        options: ["bool", "char", "int", "string"],
        answer: "bool",
        explanation: "A bool holds only true or false. C++ will accept an int in its place, treating 0 as false and anything else as true, but bool states the intent clearly."
    },
    {
        type: "multiple-choice",
        question: "Which data type is used to store a single character?",
        options: ["char", "string", "int", "bool"],
        answer: "char",
        explanation: "A char holds one character in single quotes, as in 'A'. A string holds many characters and uses double quotes, as in \"A\"."
    },
    {
        type: "multiple-choice",
        question: "Which data type provides the highest precision for decimal numbers?",
        options: ["double", "float", "int", "long"],
        answer: "double",
        explanation: "A double uses 8 bytes against float's 4, so it carries about 15 significant digits instead of 7. int and long cannot hold decimals at all."
    },
    {
        type: "multiple-choice",
        question: "What is the typical byte size of an 'int' data type?",
        options: ["4 bytes", "2 bytes", "1 byte", "8 bytes"],
        answer: "4 bytes",
        explanation: "4 bytes is 32 bits, giving a range of about -2.1 billion to 2.1 billion. Learn the set: char 1, int 4, float 4, double 8."
    },

    // Variables and Constants (4 questions)
    {
        type: "multiple-choice",
        question: "What is the correct syntax to declare a constant in C++?",
        options: [
            "const double PI = 3.14159;",
            "constant PI = 3.14159;",
            "double const PI;",
            "PI = const 3.14159;"
        ],
        answer: "const double PI = 3.14159;",
        explanation: "The order is const, then the data type, then the name, then the value. The keyword is const, not constant, and a value must be supplied right away."
    },
    {
        type: "multiple-choice",
        question: "What happens if you try to modify a constant after declaration?",
        options: [
            "Compiler error",
            "The value changes normally",
            "Runtime error",
            "Nothing happens"
        ],
        answer: "Compiler error",
        explanation: "The compiler catches it before the program ever runs, which is exactly the point of const — the mistake is stopped at build time, not discovered later."
    },
    {
        type: "multiple-choice",
        question: "What is the difference between declaration and initialization?",
        options: [
            "Declaration reserves memory; initialization gives the first value",
            "They are the same thing",
            "Initialization reserves memory; declaration gives the first value",
            "Declaration is for constants only"
        ],
        answer: "Declaration reserves memory; initialization gives the first value",
        explanation: "int x; declares. int x = 5; declares and initializes in one line. Using a declared but uninitialized variable gives you whatever garbage was in that memory."
    },
    {
        type: "multiple-choice",
        question: "Which statement correctly declares AND initializes an integer variable?",
        options: ["int count = 0;", "int count;", "count = 0;", "integer count = 0;"],
        answer: "int count = 0;",
        explanation: "It has both parts: the type and name declare it, the = 0 initializes it. int count; only declares, count = 0; only assigns, and integer is not a C++ keyword."
    },

    // Arithmetic Operators (4 questions)
    {
        type: "multiple-choice",
        question: "What is the result of 17 % 5 in C++?",
        options: ["2", "3", "3.4", "17"],
        answer: "2",
        explanation: "The % operator gives the remainder, not the quotient. 5 goes into 17 three times with 2 left over, so 17 / 5 is 3 and 17 % 5 is 2."
    },
    {
        type: "multiple-choice",
        question: "What is the result of 17 / 5 when both operands are integers?",
        options: ["3", "3.4", "4", "2"],
        answer: "3",
        explanation: "Integer division truncates toward zero — it does not round, so 3.4 becomes 3 rather than 4. To get 3.4 you must make one operand a double."
    },
    {
        type: "multiple-choice",
        question: "In the expression 'a + b * 2', which operation is performed first?",
        options: ["b * 2", "a + b", "a + 2", "All at once"],
        answer: "b * 2",
        explanation: "Multiplication has higher precedence than addition, so it binds first. If you want the addition first, write (a + b) * 2."
    },
    {
        type: "multiple-choice",
        question: "Which has the highest precedence in C++?",
        options: ["Parentheses ()", "Multiplication *", "Addition +", "Assignment ="],
        answer: "Parentheses ()",
        explanation: "Parentheses beat everything, which is why they are the way to override the default order. The full order is parentheses, then * / %, then + -, then =."
    },

    // Prefix/Postfix and Functions (4 questions)
    {
        type: "multiple-choice",
        question: "If x = 5, what is the value of y after: y = x++;",
        options: ["5", "6", "4", "0"],
        answer: "5",
        explanation: "Postfix means use the old value first, then increment. y gets 5 while x becomes 6 — the increment happens after the assignment."
    },
    {
        type: "multiple-choice",
        question: "If x = 5, what is the value of y after: y = ++x;",
        options: ["6", "5", "4", "7"],
        answer: "6",
        explanation: "Prefix increments first, then uses the new value, so both x and y end up 6. Compare with y = x++, where y would get 5 instead."
    },
    {
        type: "multiple-choice",
        question: "Which header file is required to use sqrt() and pow()?",
        options: ["<cmath>", "<iostream>", "<string>", "<cstdlib>"],
        answer: "<cmath>",
        explanation: "cmath holds the math functions. iostream is for cin and cout, and string is for the string class — forgetting the include gives a not declared error."
    },
    {
        type: "multiple-choice",
        question: "What is the result of pow(2, 3)?",
        options: ["8", "6", "5", "9"],
        answer: "8",
        explanation: "pow(base, exponent) means 2 to the power of 3, which is 2 * 2 * 2 = 8. The trap answer 6 is 2 * 3, which is multiplication, not exponentiation."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (20 Questions)
// ==========================================
const comprog1Test2 = [
    // Escape Sequences (4 questions)
    {
        type: "identification",
        question: "What escape sequence is used to create a new line?",
        answer: ["\\n", "\\N", "/n", "newline"],
        explanation: "The backslash tells the compiler the next character is a command, not a letter. It must be a backslash and not a forward slash."
    },
    {
        type: "identification",
        question: "What escape sequence is used to create a horizontal tab?",
        answer: ["\\t", "\\T", "/t", "tab"],
        explanation: "It jumps to the next tab stop, which is handy for lining output up in columns without counting spaces."
    },
    {
        type: "identification",
        question: "What escape sequence prints a backslash character?",
        answer: ["\\\\", "backslash"],
        explanation: "You need two because a single backslash is read as the start of an escape sequence. The first one escapes the second."
    },
    {
        type: "identification",
        question: "What escape sequence prints a single quote?",
        answer: ["\\'", "single quote", "apostrophe"],
        explanation: "Inside a char literal the quote marks the end, so it has to be escaped: '\\'' prints an apostrophe."
    },

    // I/O Objects (4 questions)
    {
        type: "identification",
        question: "What C++ object is used to receive input from the keyboard?",
        answer: ["cin", "CIN", "Cin"],
        explanation: "Character IN, used with the >> extraction operator. It stops reading at the first whitespace, which is why getline exists for full lines."
    },
    {
        type: "identification",
        question: "What C++ object is used to display output to the screen?",
        answer: ["cout", "COUT", "Cout"],
        explanation: "Character OUT, used with the << insertion operator. Remember the arrows point in the direction the data travels."
    },
    {
        type: "identification",
        question: "What manipulator inserts a newline and flushes the buffer?",
        answer: ["endl", "ENDL", "Endl"],
        explanation: "It does two jobs, which is what separates it from \\n — the flush forces waiting output onto the screen immediately."
    },
    {
        type: "identification",
        question: "What header file is needed to use cin and cout? (without angle brackets)",
        answer: ["iostream", "IOSTREAM", "Iostream"],
        explanation: "The name reads as input output stream. Without this include, every cin and cout line fails to compile."
    },

    // Functions (4 questions)
    {
        type: "identification",
        question: "What function returns the square root of a number?",
        answer: ["sqrt", "sqrt()", "SQRT", "Sqrt"],
        explanation: "It needs the cmath header and returns a double, so sqrt(16) gives 16.0 rather than an int."
    },
    {
        type: "identification",
        question: "What function raises a number to a power?",
        answer: ["pow", "pow()", "POW", "Pow"],
        explanation: "The order is pow(base, exponent), so pow(5, 2) is 25 and not 32. It also lives in cmath."
    },
    {
        type: "identification",
        question: "What function returns the absolute value of a number?",
        answer: ["abs", "abs()", "ABS", "Abs", "fabs"],
        explanation: "It strips the sign, so abs(-8) and abs(8) both give 8. fabs is the version for floating-point values."
    },
    {
        type: "identification",
        question: "What function reads an entire line including spaces?",
        answer: ["getline", "getline()", "Getline", "GETLINE"],
        explanation: "Written as getline(cin, variable). You need it because cin >> stops at the first space, so it cannot read a full name."
    },

    // String and Data Types (4 questions)
    {
        type: "identification",
        question: "What method returns the number of characters in a string object?",
        answer: ["length", "length()", "size", "size()"],
        explanation: "Called on the object itself, as in name.length(). length() and size() do exactly the same thing for a string."
    },
    {
        type: "identification",
        question: "What operator is used to concatenate strings?",
        answer: ["+", "plus", "addition"],
        explanation: "The same symbol as addition, but with strings it joins them end to end. This is operator overloading — the meaning depends on the operand types."
    },
    {
        type: "identification",
        question: "What data type stores whole numbers?",
        answer: ["int", "INT", "Int", "integer"],
        explanation: "Short for integer, using 4 bytes. Assigning 3.9 to an int truncates it to 3 rather than rounding to 4."
    },
    {
        type: "identification",
        question: "What data type stores decimal numbers?",
        answer: ["double", "float", "Double", "Float"],
        explanation: "Both work, but double is preferred because its 8 bytes give roughly twice the precision of a 4-byte float."
    },

    // Keywords and Conversion (4 questions)
    {
        type: "identification",
        question: "What C++ keyword is used for explicit type conversion?",
        answer: ["static_cast", "staticcast", "static cast", "cast"],
        explanation: "Written as static_cast<double>(x). It is what forces true division, since static_cast<double>(17) / 5 gives 3.4 instead of 3."
    },
    {
        type: "identification",
        question: "What keyword makes a variable's value unchangeable?",
        answer: ["const", "CONST", "Const", "constant"],
        explanation: "Any attempt to reassign it is caught by the compiler. Constants must be given their value on the same line they are declared."
    },
    {
        type: "identification",
        question: "What header file contains sqrt() and pow()? (without angle brackets)",
        answer: ["cmath", "CMATH", "Cmath", "math"],
        explanation: "The c in front marks it as the C++ version of the old C math.h header. It also carries abs, ceil, floor and the trigonometric functions."
    },
    {
        type: "identification",
        question: "What header file is needed for the string class? (without angle brackets)",
        answer: ["string", "STRING", "String"],
        explanation: "Needed for the string class and its methods such as length(). iostream alone is not enough, even though cout can print strings."
    }
];

// Export for quiz engine
const comprog1Questions = {
    test1: comprog1Test1,
    test2: comprog1Test2,
    title: "ComProg1: Variables, Operators & Functions"
};
