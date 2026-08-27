// ComProg1 Week 4: Input and Output with Streams
// Test 1: Multiple Choice (20 Questions) - Items 1-20
// Test 2: Identification (20 Questions) - Items 21-40

// ==========================================
// TEST 1: MULTIPLE CHOICE (20 Questions)
// ==========================================
const comprog1Week4Test1 = [
    // Streams and operators
    {
        type: "multiple-choice",
        question: "A stream is best described as:",
        options: [
            "A sequence or flow of data between a program and an input/output device",
            "A block of memory reserved for storing a variable",
            "A loop that repeats until the user stops it",
            "A file saved permanently on the hard disk"
        ],
        answer: "A sequence or flow of data between a program and an input/output device",
        explanation: "The word flow is the point: data moves from the keyboard into the program and out to the screen. The major stream classes are istream for input and ostream for output."
    },
    {
        type: "multiple-choice",
        question: "What is the >> symbol used with cin called, and what does it do?",
        options: [
            "The extraction operator, which extracts data from an input stream",
            "The insertion operator, which extracts data from an input stream",
            "The extraction operator, which sends data into an output stream",
            "The assignment operator, which copies a value into a variable"
        ],
        answer: "The extraction operator, which extracts data from an input stream",
        explanation: "Extraction pulls data out of the input stream; << is insertion and pushes data into the output stream. Both arrows point in the direction the data actually travels."
    },
    {
        type: "multiple-choice",
        question: "Which standard stream object is used for UNBUFFERED error output?",
        options: ["cerr", "clog", "cout", "cin"],
        answer: "cerr",
        explanation: "cerr and clog both carry error messages, but cerr is unbuffered so it appears immediately. That is what makes it the right choice when a program is about to fail."
    },
    {
        type: "multiple-choice",
        question: "Which standard stream object is described as BUFFERED log or error output?",
        options: ["clog", "cerr", "cout", "cin"],
        answer: "clog",
        explanation: "Think c-log for logging. It is the buffered counterpart of cerr, so its messages are collected before being written out."
    },

    // Manipulators
    {
        type: "multiple-choice",
        question: "What is a manipulator?",
        options: [
            "Something inserted into a stream to change how later input or output is handled",
            "A function that calculates a new value from a variable",
            "A special character that ends a C++ statement",
            "A header file that provides input and output objects"
        ],
        answer: "Something inserted into a stream to change how later input or output is handled",
        explanation: "The key word is later. A manipulator does not print anything itself, it changes how the data that follows will be interpreted or displayed."
    },
    {
        type: "multiple-choice",
        question: "Which group of manipulators requires #include <iomanip>?",
        options: [
            "setw(), setprecision() and setfill()",
            "endl, fixed and scientific",
            "hex, oct and dec",
            "left, right and boolalpha"
        ],
        answer: "setw(), setprecision() and setfill()",
        explanation: "The ones that take an argument in parentheses need iomanip. Manipulators without arguments, such as fixed and hex, work with iostream alone."
    },

    // Integer bases and persistence
    {
        type: "multiple-choice",
        question: "If int number = 255; what does cout << oct << number; display?",
        options: ["377", "255", "FF", "11111111"],
        answer: "377",
        explanation: "Octal is base 8, so 255 becomes 377. The same value shows as 255 in dec and FF in hex; 11111111 would be binary, which has no manipulator here."
    },
    {
        type: "multiple-choice",
        question: "If int number = 255; what does cout << uppercase << hex << number; display?",
        options: ["FF", "ff", "377", "255"],
        answer: "FF",
        explanation: "hex gives the digits and uppercase decides their case. Without uppercase you would get the lowercase ff instead."
    },
    {
        type: "multiple-choice",
        question: "What is the output of this code?\n\nint n = 255;\ncout << hex << n << endl;\ncout << 100 << endl;",
        options: ["ff then 64", "ff then 100", "255 then 100", "ff then ff"],
        answer: "ff then 64",
        explanation: "This is the persistence trap. hex stays in effect after the first line, so 100 is also shown in hexadecimal, where it is 64. Only cout << dec restores decimal."
    },

    // Floating point formatting
    {
        type: "multiple-choice",
        question: "Used on its own, without fixed, what does setprecision(n) control?",
        options: [
            "The total number of significant digits",
            "The number of digits after the decimal point",
            "The minimum width of the output field",
            "The character used to pad short output"
        ],
        answer: "The total number of significant digits",
        explanation: "It only means decimal places once fixed is also in effect. That is why cout << setprecision(2) << 12.345 gives 12 rather than the 12.35 beginners expect."
    },
    {
        type: "multiple-choice",
        question: "Which line correctly forces all later floating-point output to show exactly two decimal places?",
        options: [
            "cout << fixed << setprecision(2);",
            "cout << setprecision(2);",
            "cout << scientific << setprecision(2);",
            "cout << setw(2) << showpoint;"
        ],
        answer: "cout << fixed << setprecision(2);",
        explanation: "fixed makes precision mean digits after the decimal point. The lesson calls this the best beginner pattern for grades, money and measurements."
    },
    {
        type: "multiple-choice",
        question: "If double value = 1234567.89; what does cout << scientific << value; display?",
        options: ["1.234568e+06", "1234567.89", "1234567.890000", "1.23e+06"],
        answer: "1.234568e+06",
        explanation: "Scientific notation is useful for very large or very small numbers. It can be combined with setprecision to control how many digits appear."
    },

    // Fields, width, fill, alignment
    {
        type: "multiple-choice",
        question: "In the statement cout << setw(10) << a << b; which values receive the field width of 10?",
        options: [
            "Only a",
            "Both a and b",
            "Only b",
            "Neither, because setw needs to come last"
        ],
        answer: "Only a",
        explanation: "setw(n) affects only the next output item. To give both a width you must repeat it: cout << setw(10) << a << setw(10) << b;"
    },
    {
        type: "multiple-choice",
        question: "How does setfill(ch) behave differently from setw(n)?",
        options: [
            "setfill remains active until changed, while setw applies only to the next item",
            "setfill applies only to the next item, while setw remains active until changed",
            "Both remain active until changed",
            "Both apply only to the next output item"
        ],
        answer: "setfill remains active until changed, while setw applies only to the next item",
        explanation: "The lesson draws this distinction deliberately: a temporary field width against a continuing fill character. Restore the default with cout << setfill(' ');"
    },
    {
        type: "multiple-choice",
        question: "What does cout << setfill('*') << setw(10) << 25; display?",
        options: ["********25", "25********", "**25", "2525252525"],
        answer: "********25",
        explanation: "The field is 10 wide and 25 uses two of those positions, so eight fill characters pad it. Numbers are right aligned by default, so the padding goes in front."
    },
    {
        type: "multiple-choice",
        question: "By default, how is numeric output positioned inside a field created by setw()?",
        options: [
            "Right aligned",
            "Left aligned",
            "Centred",
            "It depends on the value of the number"
        ],
        answer: "Right aligned",
        explanation: "Numbers line up on the right by default, which is what makes columns of figures readable. Use left when you want text such as names aligned to the left edge."
    },
    {
        type: "multiple-choice",
        question: "What is the output of this code?\n\nint n = 255;\ncout << dec << setw(8) << n;",
        options: [
            "Five spaces followed by 255",
            "255 followed by five spaces",
            "Eight spaces followed by 255",
            "FF preceded by six spaces"
        ],
        answer: "Five spaces followed by 255",
        explanation: "The field is 8 characters wide and 255 fills 3 of them, leaving 5 spaces of padding in front. dec is there to undo any earlier hex setting."
    },

    // Characters and booleans
    {
        type: "multiple-choice",
        question: "What is the output of this code on an ASCII-based system?\n\nchar letter = 'A';\nint code = letter;\ncout << code;",
        options: ["65", "A", "0", "97"],
        answer: "65",
        explanation: "A char normally prints its character, but assigning it to an int reveals the character code underneath. 97 would be lowercase a."
    },
    {
        type: "multiple-choice",
        question: "If bool passed = true; what does cout << passed; display, and how do you make it display the word true?",
        options: [
            "It displays 1; use cout << boolalpha << passed;",
            "It displays true; use cout << noboolalpha << passed;",
            "It displays 1; use cout << showpos << passed;",
            "It displays true; no manipulator is needed"
        ],
        answer: "It displays 1; use cout << boolalpha << passed;",
        explanation: "By default a bool prints as 1 or 0. boolalpha switches to the words true and false, and noboolalpha switches back to the numbers."
    },

    // Formatted input
    {
        type: "multiple-choice",
        question: "If the user types Juan Dela Cruz in response to cin >> firstName; what is stored in the string firstName?",
        options: ["Juan", "Juan Dela Cruz", "Juan Dela", "Nothing, because the input fails"],
        answer: "Juan",
        explanation: "cin >> skips leading whitespace but then stops reading a string at the first whitespace it meets. Use getline when the input may contain spaces."
    }
];

// ==========================================
// TEST 2: IDENTIFICATION (20 Questions)
// ==========================================
const comprog1Week4Test2 = [
    // The four standard stream objects and their classes
    {
        type: "identification",
        question: "Which standard stream object represents standard input from the keyboard?",
        answer: ["cin", "CIN", "Cin", "std::cin"],
        explanation: "It is used with the >> extraction operator and skips leading whitespace before reading."
    },
    {
        type: "identification",
        question: "Which standard stream object represents standard output to the screen?",
        answer: ["cout", "COUT", "Cout", "std::cout"],
        explanation: "It is used with the << insertion operator. cerr and clog also send output, but they are meant for errors and logs."
    },
    {
        type: "identification",
        question: "Which standard stream object provides unbuffered error output?",
        answer: ["cerr", "CERR", "Cerr", "std::cerr"],
        explanation: "Unbuffered means the message is written straight away, which matters when a program is about to stop. The buffered version is clog."
    },
    {
        type: "identification",
        question: "Which standard stream object provides buffered log or error output?",
        answer: ["clog", "CLOG", "Clog", "std::clog"],
        explanation: "Read it as c-log. Its output is collected in a buffer first, unlike cerr which is written immediately."
    },
    {
        type: "identification",
        question: "What is the name of the stream class that cin belongs to?",
        answer: ["istream", "ISTREAM", "Istream", "std::istream"],
        explanation: "The i stands for input. Its counterpart is ostream, the class of cout, cerr and clog."
    },
    {
        type: "identification",
        question: "What is the name of the stream class that cout, cerr and clog belong to?",
        answer: ["ostream", "OSTREAM", "Ostream", "std::ostream"],
        explanation: "The o stands for output. All three output objects share it, which is why they all work with the << operator."
    },

    // Headers and manipulators
    {
        type: "identification",
        question: "Which header file must be included to use setw(), setprecision() and setfill()? (without angle brackets)",
        answer: ["iomanip", "IOMANIP", "Iomanip"],
        explanation: "Read it as input output manipulators. Forgetting it is one of the five common mistakes listed in the lesson."
    },
    {
        type: "identification",
        question: "Which manipulator sets the width of the next output field?",
        answer: ["setw", "setw()", "SETW", "Setw"],
        explanation: "It affects only the next item, so it must be repeated for every column of a table."
    },
    {
        type: "identification",
        question: "Which manipulator sets the numeric precision of floating-point output?",
        answer: ["setprecision", "setprecision()", "SETPRECISION", "Setprecision"],
        explanation: "On its own it counts significant digits; paired with fixed it counts digits after the decimal point."
    },
    {
        type: "identification",
        question: "Which manipulator changes the character used to pad an output field?",
        answer: ["setfill", "setfill()", "SETFILL", "Setfill"],
        explanation: "The default fill is a space. Unlike setw, this setting remains active until you change it back with setfill(' ')."
    },
    {
        type: "identification",
        question: "Which manipulator makes precision mean digits after the decimal point?",
        answer: ["fixed", "FIXED", "Fixed"],
        explanation: "Combined with setprecision(2) it is the standard pattern for money and grades. Without it you get significant digits instead."
    },
    {
        type: "identification",
        question: "Which manipulator displays numbers in scientific notation, useful for very large or very small values?",
        answer: ["scientific", "SCIENTIFIC", "Scientific"],
        explanation: "It turns 1234567.89 into 1.234568e+06, and it can be combined with setprecision to control the digits shown."
    },
    {
        type: "identification",
        question: "Which manipulator forces a decimal point and trailing zeroes to be shown?",
        answer: ["showpoint", "SHOWPOINT", "Showpoint", "showpoint()"],
        explanation: "Without it a value such as 5.0 may print as just 5, which looks wrong in a column of money amounts."
    },
    {
        type: "identification",
        question: "Which manipulator makes a bool display as the words true and false instead of 1 and 0?",
        answer: ["boolalpha", "BOOLALPHA", "Boolalpha"],
        explanation: "Alpha means letters. Its opposite, noboolalpha, switches back to the numeric form."
    },
    {
        type: "identification",
        question: "Which manipulator displays an integer in base 16?",
        answer: ["hex", "HEX", "Hex", "hexadecimal"],
        explanation: "It turns 255 into ff, or FF when uppercase is also used. Remember it stays in effect until dec is used."
    },
    {
        type: "identification",
        question: "Which manipulator restores integer output to base 10 after hex or oct has been used?",
        answer: ["dec", "DEC", "Dec", "decimal"],
        explanation: "Forgetting it is the persistence mistake in the lesson, where a later 100 unexpectedly prints as 64."
    },
    {
        type: "identification",
        question: "Which manipulator makes the letters A to F appear in capitals in hexadecimal output?",
        answer: ["uppercase", "UPPERCASE", "Uppercase"],
        explanation: "Its opposite is nouppercase. It changes only the case of the digits, not the base itself."
    },

    // Input functions
    {
        type: "identification",
        question: "What function reads an entire line of input, including the spaces inside it?",
        answer: ["getline", "getline()", "GETLINE", "Getline", "getline(cin, name)"],
        explanation: "Written as getline(cin, name). It is the fix for the mistake where cin >> stores only the first word of a full name."
    },
    {
        type: "identification",
        question: "Which cin member function reads a single character, including spaces and newlines?",
        answer: ["get", "get()", "cin.get", "cin.get()", "GET", "Get"],
        explanation: "Unlike cin >> ch, which skips leading whitespace, cin.get(ch) will hand you the space or newline itself."
    },
    {
        type: "identification",
        question: "Which cout member function writes a single character to the screen?",
        answer: ["put", "put()", "cout.put", "cout.put()", "PUT", "Put"],
        explanation: "It is the output partner of cin.get(). Both are unformatted, working one character at a time."
    }
];

// Export for quiz engine
const comprog1Week4Questions = {
    test1: comprog1Week4Test1,
    test2: comprog1Week4Test2,
    title: "ComProg1 Week 4: Input and Output with Streams",
    test2Label: "Identification",
    test2Info: "20 questions - Type your answers"
};
