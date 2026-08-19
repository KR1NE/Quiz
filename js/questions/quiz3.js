// Quiz 3: Parts 4-5 - First Generation (1946-1958) & Comparison Tables
const quiz3Questions = [
    // Part 4: First Generation - Wartime Machines
    {
        question: "What was 'The Bombe' commissioned for in 1939?",
        options: ["Break German Enigma messages", "Calculate missile trajectories", "Process census data", "Design aircraft"],
        answer: "Break German Enigma messages"
    },
    {
        question: "Who created The Bombe?",
        options: ["Alan Turing at Bletchley Park", "Tommy Flowers at CERN", "Howard Aiken at Harvard", "John von Neumann at Princeton"],
        answer: "Alan Turing at Bletchley Park"
    },
    {
        question: "What did The Bombe reduce codebreaking time from?",
        options: ["Weeks to minutes", "Days to hours", "Years to months", "Hours to seconds"],
        answer: "Weeks to minutes"
    },
    {
        question: "Who built the Colossus Mark 1 in 1943?",
        options: ["Tommy Flowers", "Alan Turing", "Howard Aiken", "John von Neumann"],
        answer: "Tommy Flowers"
    },
    {
        question: "The Harvard Mark I became known as what class of computers?",
        options: ["Harvard class", "Princeton class", "von Neumann class", "Turing class"],
        answer: "Harvard class"
    },

    // Part 4: First Generation Proper
    {
        question: "What was ENIAC?",
        options: ["First electronic general-purpose digital computer", "First stored-program computer", "First personal computer", "First binary computer"],
        answer: "First electronic general-purpose digital computer"
    },
    {
        question: "In what year was ENIAC completed?",
        options: ["1945", "1942", "1949", "1951"],
        answer: "1945"
    },
    {
        question: "Who created the IAS Machine?",
        options: ["John von Neumann at Princeton", "Eckert and Mauchly at U. Penn", "Atanasoff and Berry at Iowa", "Turing at Bletchley Park"],
        answer: "John von Neumann at Princeton"
    },
    {
        question: "What architecture did the IAS Machine become known as?",
        options: ["von Neumann architecture / Princeton class", "Harvard architecture", "RISC architecture", "CISC architecture"],
        answer: "von Neumann architecture / Princeton class"
    },
    {
        question: "How did EDVAC differ from ENIAC?",
        options: ["Binary not decimal, and stored-program", "Faster vacuum tubes", "Smaller size", "Used transistors"],
        answer: "Binary not decimal, and stored-program"
    },
    {
        question: "When was EDVAC completed?",
        options: ["1949", "1945", "1951", "1954"],
        answer: "1949"
    },
    {
        question: "UNIVAC I was built for what organization?",
        options: ["US Census Bureau", "US Military", "NASA", "IBM"],
        answer: "US Census Bureau"
    },
    {
        question: "Who invented FORTRAN?",
        options: ["John Backus at IBM", "Grace Hopper at Navy", "Alan Turing", "John von Neumann"],
        answer: "John Backus at IBM"
    },
    {
        question: "When was FORTRAN invented and released?",
        options: ["Invented 1954, released 1957", "Invented 1950, released 1952", "Invented 1960, released 1963", "Invented 1945, released 1946"],
        answer: "Invented 1954, released 1957"
    },
    {
        question: "What level programming language was FORTRAN?",
        options: ["First 3rd-level programming language", "First machine language", "First assembly language", "First 4th-level language"],
        answer: "First 3rd-level programming language"
    },

    // ENIAC Design Details
    {
        question: "What was ENIAC's input device?",
        options: ["IBM card reader", "Keyboard", "Paper tape", "Magnetic tape"],
        answer: "IBM card reader"
    },
    {
        question: "How many vacuum tubes did ENIAC have?",
        options: ["18,000", "10,000", "5,000", "25,000"],
        answer: "18,000"
    },
    {
        question: "How many accumulators did ENIAC have?",
        options: ["20 ten-digit signed accumulators", "10 eight-digit accumulators", "15 twelve-digit accumulators", "25 six-digit accumulators"],
        answer: "20 ten-digit signed accumulators"
    },
    {
        question: "How many additions could ENIAC perform per second?",
        options: ["5,000", "1,000", "10,000", "500"],
        answer: "5,000"
    },
    {
        question: "How was ENIAC programmed?",
        options: ["Setting switches and connecting wires on a plugboard", "Punch cards with programs", "Keyboard input", "Magnetic tape"],
        answer: "Setting switches and connecting wires on a plugboard"
    },

    // Part 5: Comparison Tables
    {
        question: "What is the ONE thing the Analytical Engine and ENIAC share?",
        options: ["Fixed point decimal", "Vacuum tubes", "Stored program", "Binary system"],
        answer: "Fixed point decimal"
    },
    {
        question: "Who programmed the Analytical Engine?",
        options: ["Ada Lovelace", "Charles Babbage", "Herman Hollerith", "Grace Hopper"],
        answer: "Ada Lovelace"
    },
    {
        question: "Who were the programmers of ENIAC?",
        options: ["Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Meltzer, Fran Bilas, Ruth Lichterman", "Ada Lovelace only", "John von Neumann", "Eckert and Mauchly"],
        answer: "Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Meltzer, Fran Bilas, Ruth Lichterman"
    },
    {
        question: "What number system did the IAS Machine use?",
        options: ["Binary, 40 bits", "Decimal, 40 digits", "Hexadecimal", "Octal"],
        answer: "Binary, 40 bits"
    },
    {
        question: "How many instructions per word did the IAS Machine store?",
        options: ["Two 20-bit instructions per 40-bit word", "One 40-bit instruction", "Four 10-bit instructions", "Eight 5-bit instructions"],
        answer: "Two 20-bit instructions per 40-bit word"
    },
    {
        question: "How much memory did the IAS Machine have?",
        options: ["1,024 words (about 5.1 KB)", "512 words", "2,048 words", "256 words"],
        answer: "1,024 words (about 5.1 KB)"
    },
    {
        question: "How did the IAS Machine represent negative numbers?",
        options: ["Two's complement", "One's complement", "Sign-magnitude", "BCD"],
        answer: "Two's complement"
    },
    {
        question: "In von Neumann architecture, where do program instructions and data reside?",
        options: ["Same memory", "Separate memories", "Instructions in ROM, data in RAM", "Instructions on cards, data in memory"],
        answer: "Same memory"
    },
    {
        question: "In Harvard architecture, where do instructions and data reside?",
        options: ["Separate memories", "Same memory", "Both in cache", "Both on disk"],
        answer: "Separate memories"
    },
    {
        question: "Which architecture is the Analytical Engine closer to?",
        options: ["Harvard architecture", "von Neumann architecture", "RISC", "CISC"],
        answer: "Harvard architecture"
    }
];
