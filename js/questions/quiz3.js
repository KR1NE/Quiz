// Quiz 3: Parts 4-5 - First Generation (1946-1958) & Comparison Tables
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz3Questions = [
    // Part 4: First Generation - Wartime Machines
    {
        question: "The Bombe was commissioned in 1939 for which purpose?",
        options: ["To break German Enigma messages", "To calculate artillery trajectories", "To process census data", "To design military aircraft", "None of the Other Choices"],
        answer: "To break German Enigma messages"
    },
    {
        question: "Who created The Bombe, and where?",
        options: ["Alan Turing at Bletchley Park", "Tommy Flowers at Bletchley Park", "Howard Aiken at Harvard", "Jon Von Neumann at Princeton", "None of the Other Choices"],
        answer: "Alan Turing at Bletchley Park"
    },
    {
        question: "The Bombe reduced the time needed for codebreaking from what to what?",
        options: ["Weeks to minutes", "Days to hours", "Years to months", "Hours to seconds", "None of the Other Choices"],
        answer: "Weeks to minutes"
    },
    {
        question: "Who built the Colossus Mark 1 in 1943?",
        options: ["Tommy Flowers", "Alan Turing", "Howard Aiken", "Jon Von Neumann", "None of the Other Choices"],
        answer: "Tommy Flowers"
    },
    {
        question: "The Harvard Mark I gave its name to which class of computers?",
        options: ["Harvard class", "Princeton class", "von Neumann class", "Turing class", "None of the Other Choices"],
        answer: "Harvard class"
    },

    // Part 4: First Generation Proper
    {
        question: "Which of the following is the first electronic general-purpose digital computer?",
        options: ["ENIAC", "ABC", "UNIVAC I", "EDVAC", "None of the Other Choices"],
        answer: "ENIAC"
    },
    {
        question: "In which year was the ENIAC completed?",
        options: ["1945", "1942", "1949", "1951", "None of the Other Choices"],
        answer: "1945"
    },
    {
        question: "Who created the IAS Machine, and where?",
        options: ["Jon Von Neumann at Princeton", "Eckert and Mauchly at the University of Pennsylvania", "Atanasoff and Berry at Iowa State", "Alan Turing at Bletchley Park", "None of the Other Choices"],
        answer: "Jon Von Neumann at Princeton"
    },
    {
        question: "The architecture of the IAS Machine became known as which of the following?",
        options: ["von Neumann architecture, also called Princeton class", "Harvard architecture", "RISC architecture", "CISC architecture", "None of the Other Choices"],
        answer: "von Neumann architecture, also called Princeton class"
    },
    {
        question: "Who formulated the Stored Program Concept?",
        options: ["Jon Von Neumann", "Howard Aiken", "Alan Turing", "Charles Babbage", "None of the Other Choices"],
        answer: "Jon Von Neumann"
    },
    {
        question: "How did the EDVAC differ from the ENIAC?",
        options: ["It was binary instead of decimal, and it was a stored-program machine", "It used faster vacuum tubes", "It was significantly smaller in size", "It used transistors instead of tubes", "None of the Other Choices"],
        answer: "It was binary instead of decimal, and it was a stored-program machine"
    },
    {
        question: "In which year was the EDVAC completed?",
        options: ["1949", "1945", "1951", "1954", "None of the Other Choices"],
        answer: "1949"
    },
    {
        question: "The UNIVAC I was built for which organization?",
        options: ["US Census Bureau", "US Army Ordnance Department", "NASA", "IBM", "None of the Other Choices"],
        answer: "US Census Bureau"
    },
    {
        question: "Who invented FORTRAN, and for which company?",
        options: ["John Backus at IBM", "Grace Murray Hopper at the US Navy", "Alan Turing at Manchester", "Jon Von Neumann at Princeton", "None of the Other Choices"],
        answer: "John Backus at IBM"
    },
    {
        question: "FORTRAN was invented and released in which years?",
        options: ["Invented in 1954, released in 1957", "Invented in 1950, released in 1952", "Invented in 1960, released in 1963", "Invented in 1945, released in 1946", "None of the Other Choices"],
        answer: "Invented in 1954, released in 1957"
    },
    {
        question: "Which of the following is the first third-level programming language?",
        options: ["COBOL", "BASIC", "Assembly language", "C", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "FORTRAN was the first 3rd-level (high-level) programming language."
    },

    // ENIAC Design Details
    {
        question: "Which of the following was the input device of the ENIAC?",
        options: ["IBM card reader", "Teletype keyboard", "Paper tape reader", "Magnetic tape drive", "None of the Other Choices"],
        answer: "IBM card reader"
    },
    {
        question: "How many vacuum tubes did the ENIAC have?",
        options: ["18,000", "10,000", "5,000", "25,000", "None of the Other Choices"],
        answer: "18,000"
    },
    {
        question: "How many accumulators did the ENIAC have?",
        options: ["20 ten-digit signed accumulators", "10 eight-digit signed accumulators", "15 twelve-digit signed accumulators", "25 six-digit signed accumulators", "None of the Other Choices"],
        answer: "20 ten-digit signed accumulators"
    },
    {
        question: "How many additions per second could the ENIAC perform?",
        options: ["5,000", "1,000", "10,000", "500", "None of the Other Choices"],
        answer: "5,000"
    },
    {
        question: "How was the ENIAC programmed?",
        options: ["By setting switches and connecting wires on a plugboard", "By feeding it punched cards containing the program", "By typing on a keyboard console", "By loading a magnetic tape", "None of the Other Choices"],
        answer: "By setting switches and connecting wires on a plugboard"
    },
    {
        question: "Approximately how large was the ENIAC in floor area?",
        options: ["About 1,800 square feet", "About 500 square feet", "About 5,000 square feet", "About 100 square feet", "None of the Other Choices"],
        answer: "About 1,800 square feet"
    },

    // Part 5: Comparison Tables
    {
        question: "Which single characteristic is shared by both the Analytical Engine and the ENIAC?",
        options: ["Fixed point decimal", "Use of vacuum tubes", "Stored program capability", "Binary number system", "None of the Other Choices"],
        answer: "Fixed point decimal"
    },
    {
        question: "Who programmed the Analytical Engine?",
        options: ["Countess Ada Lovelace", "Charles Babbage", "Herman Hollerith", "Grace Murray Hopper", "None of the Other Choices"],
        answer: "Countess Ada Lovelace"
    },
    {
        question: "Which of the following were the programmers of the ENIAC?",
        options: ["Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Meltzer, Fran Bilas and Ruth Lichterman", "Countess Ada Lovelace alone", "Jon Von Neumann and Herman Goldstine", "Eckert and Mauchly themselves", "None of the Other Choices"],
        answer: "Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Meltzer, Fran Bilas and Ruth Lichterman"
    },
    {
        question: "Which number system and word size did the IAS Machine use?",
        options: ["Binary, 40 bits", "Decimal, 40 digits", "Hexadecimal, 32 bits", "Octal, 36 bits", "None of the Other Choices"],
        answer: "Binary, 40 bits"
    },
    {
        question: "How many instructions did the IAS Machine store per word?",
        options: ["Two 20-bit instructions per 40-bit word", "One 40-bit instruction per word", "Four 10-bit instructions per word", "Eight 5-bit instructions per word", "None of the Other Choices"],
        answer: "Two 20-bit instructions per 40-bit word"
    },
    {
        question: "How much memory did the IAS Machine have?",
        options: ["1,024 words, roughly 5.1 KB", "512 words, roughly 2.5 KB", "2,048 words, roughly 10 KB", "256 words, roughly 1.2 KB", "None of the Other Choices"],
        answer: "1,024 words, roughly 5.1 KB"
    },
    {
        question: "How did the IAS Machine represent negative numbers?",
        options: ["Two's complement", "One's complement", "Sign and magnitude", "Binary coded decimal", "None of the Other Choices"],
        answer: "Two's complement"
    },
    {
        question: "In the von Neumann architecture, where do program instructions and data reside?",
        options: ["In the same memory", "In two separate memories", "Instructions in ROM and data in RAM", "Instructions on cards and data in memory", "None of the Other Choices"],
        answer: "In the same memory"
    }
];
