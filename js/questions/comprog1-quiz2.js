// ComProg1 Quiz 2: Variables, Data Types, Operators, Functions & Classes
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (20 Questions) - Items 21-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Quiz2Test1 = [
    // Identifiers (4 questions)
    {
        type: "multiple-choice",
        question: "Which identifier follows C++ naming conventions?",
        options: ["myVariable", "my-variable", "my variable", "123variable"],
        answer: "myVariable"
    },
    {
        type: "multiple-choice",
        question: "Which character can be the FIRST character of a C++ identifier?",
        options: ["Underscore (_)", "Dollar sign ($)", "Hyphen (-)", "Digit (0-9)"],
        answer: "Underscore (_)"
    },
    {
        type: "multiple-choice",
        question: "Why can't you use 'double' as a variable name?",
        options: [
            "It is a reserved keyword",
            "It contains too many letters",
            "It starts with lowercase",
            "It has a vowel"
        ],
        answer: "It is a reserved keyword"
    },
    {
        type: "multiple-choice",
        question: "Which is a valid C++ variable name?",
        options: ["_count", "1st_place", "total-sum", "my name"],
        answer: "_count"
    },

    // Data Types (4 questions)
    {
        type: "multiple-choice",
        question: "What is the default value of an uninitialized local int variable?",
        options: [
            "Undefined (garbage value)",
            "0",
            "1",
            "null"
        ],
        answer: "Undefined (garbage value)"
    },
    {
        type: "multiple-choice",
        question: "Which data type would you use to store 3.14159?",
        options: ["double", "int", "char", "bool"],
        answer: "double"
    },
    {
        type: "multiple-choice",
        question: "What is the byte size of a 'double' data type?",
        options: ["8 bytes", "4 bytes", "2 bytes", "1 byte"],
        answer: "8 bytes"
    },
    {
        type: "multiple-choice",
        question: "Which data type uses the least memory?",
        options: ["char", "int", "double", "float"],
        answer: "char"
    },

    // Variables and Constants (4 questions)
    {
        type: "multiple-choice",
        question: "What does the following declare? const int MAX = 100;",
        options: [
            "A constant integer with value 100",
            "A variable that can change",
            "A function named MAX",
            "An array of 100 integers"
        ],
        answer: "A constant integer with value 100"
    },
    {
        type: "multiple-choice",
        question: "Which is the correct way to declare multiple variables of the same type?",
        options: [
            "int a, b, c;",
            "int a; b; c;",
            "int(a, b, c);",
            "int a & b & c;"
        ],
        answer: "int a, b, c;"
    },
    {
        type: "multiple-choice",
        question: "What is initialization in C++?",
        options: [
            "Giving a variable its first value",
            "Creating a variable without a value",
            "Deleting a variable",
            "Changing a variable's type"
        ],
        answer: "Giving a variable its first value"
    },
    {
        type: "multiple-choice",
        question: "What is wrong with: const double TAX_RATE;",
        options: [
            "Constants must be initialized when declared",
            "TAX_RATE cannot be uppercase",
            "double cannot be const",
            "Nothing is wrong"
        ],
        answer: "Constants must be initialized when declared"
    },

    // Arithmetic Operators (4 questions)
    {
        type: "multiple-choice",
        question: "What is the result of 25 / 4 when both are integers?",
        options: ["6", "6.25", "7", "6.0"],
        answer: "6"
    },
    {
        type: "multiple-choice",
        question: "What is the result of 25 % 4?",
        options: ["1", "6", "6.25", "4"],
        answer: "1"
    },
    {
        type: "multiple-choice",
        question: "In the expression 2 + 3 * 4, what is the result?",
        options: ["14", "20", "24", "9"],
        answer: "14"
    },
    {
        type: "multiple-choice",
        question: "What is the result of 10 - 3 - 2?",
        options: ["5", "9", "7", "3"],
        answer: "5"
    },

    // Prefix/Postfix and Functions (4 questions)
    {
        type: "multiple-choice",
        question: "If a = 10, what is a after: a++;",
        options: ["11", "10", "9", "12"],
        answer: "11"
    },
    {
        type: "multiple-choice",
        question: "If b = 7, what is the value of c after: c = --b;",
        options: ["6", "7", "8", "5"],
        answer: "6"
    },
    {
        type: "multiple-choice",
        question: "What does abs(-15) return?",
        options: ["15", "-15", "0", "1"],
        answer: "15"
    },
    {
        type: "multiple-choice",
        question: "What does pow(3, 4) return?",
        options: ["81", "12", "7", "64"],
        answer: "81"
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (20 Questions)
// ==========================================
const comprog1Quiz2Test2 = [
    // Escape Sequences (4 questions)
    {
        type: "identification",
        question: "What escape sequence prints a double quote character?",
        answer: ["\\\"", "double quote", "quote"]
    },
    {
        type: "identification",
        question: "What escape sequence moves the cursor to the beginning of the line?",
        answer: ["\\r", "\\R", "carriage return"]
    },
    {
        type: "identification",
        question: "What escape sequence creates a backslash character?",
        answer: ["\\\\", "backslash"]
    },
    {
        type: "identification",
        question: "What escape sequence produces a beep/alert sound?",
        answer: ["\\a", "\\A", "alert", "beep"]
    },

    // Operators (4 questions)
    {
        type: "identification",
        question: "What operator is used to get the remainder of division?",
        answer: ["%", "modulo", "mod", "percent"]
    },
    {
        type: "identification",
        question: "What is the insertion operator used with cout?",
        answer: ["<<", "insertion", "left shift"]
    },
    {
        type: "identification",
        question: "What is the extraction operator used with cin?",
        answer: [">>", "extraction", "right shift"]
    },
    {
        type: "identification",
        question: "What operator is used for string concatenation in C++?",
        answer: ["+", "plus", "addition"]
    },

    // Data Types and Keywords (4 questions)
    {
        type: "identification",
        question: "What keyword declares a variable that cannot be modified?",
        answer: ["const", "CONST", "Const", "constant"]
    },
    {
        type: "identification",
        question: "What data type stores a single character?",
        answer: ["char", "CHAR", "Char", "character"]
    },
    {
        type: "identification",
        question: "What data type stores true or false values?",
        answer: ["bool", "boolean", "Bool", "BOOL"]
    },
    {
        type: "identification",
        question: "What data type stores decimal numbers with double precision?",
        answer: ["double", "Double", "DOUBLE"]
    },

    // Functions (4 questions)
    {
        type: "identification",
        question: "What function returns the absolute value of a number?",
        answer: ["abs", "abs()", "ABS", "Abs"]
    },
    {
        type: "identification",
        question: "What function calculates a number raised to a power?",
        answer: ["pow", "pow()", "POW", "Pow"]
    },
    {
        type: "identification",
        question: "What function calculates the square root?",
        answer: ["sqrt", "sqrt()", "SQRT", "Sqrt"]
    },
    {
        type: "identification",
        question: "What function reads an entire line including spaces?",
        answer: ["getline", "getline()", "Getline", "GETLINE"]
    },

    // Headers and I/O (4 questions)
    {
        type: "identification",
        question: "What header file contains sqrt() and pow()?",
        answer: ["cmath", "CMATH", "Cmath", "math.h"]
    },
    {
        type: "identification",
        question: "What header file is needed for the string class?",
        answer: ["string", "STRING", "String"]
    },
    {
        type: "identification",
        question: "What C++ object is used for keyboard input?",
        answer: ["cin", "CIN", "Cin"]
    },
    {
        type: "identification",
        question: "What function converts a value from one type to another explicitly?",
        answer: ["static_cast", "staticcast", "cast", "static cast"]
    }
];

// Export for quiz engine
const comprog1Quiz2Questions = {
    test1: comprog1Quiz2Test1,
    test2: comprog1Quiz2Test2,
    title: "ComProg1: Variables, Operators & Functions (Set 2)"
};
