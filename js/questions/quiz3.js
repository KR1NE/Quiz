// Quiz 3: Parts 4-5 - First Generation (1946-1958) & Comparison Tables
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz3Questions = [
    // Part 4: First Generation - Wartime Machines
    {
        question: "The Bombe was commissioned in 1939 for which purpose?",
        options: ["To break German Enigma messages", "To calculate artillery trajectories", "To process census data", "To design military aircraft", "None of the Other Choices"],
        answer: "To break German Enigma messages",
        explanation: "Artillery trajectories were ENIAC's job. The Bombe was purely a codebreaking machine, built the moment war broke out."
    },
    {
        question: "Who created The Bombe, and where?",
        options: ["Alan Turing at Bletchley Park", "Tommy Flowers at Bletchley Park", "Howard Aiken at Harvard", "Jon Von Neumann at Princeton", "None of the Other Choices"],
        answer: "Alan Turing at Bletchley Park",
        explanation: "Both Turing and Flowers worked at Bletchley Park, so the trap is the name, not the place: Turing built the Bombe, Flowers built Colossus."
    },
    {
        question: "The Bombe reduced the time needed for codebreaking from what to what?",
        options: ["Weeks to minutes", "Days to hours", "Years to months", "Hours to seconds", "None of the Other Choices"],
        answer: "Weeks to minutes",
        explanation: "Enigma settings changed daily, so a message cracked weeks later was worthless. Cutting the time to minutes is what made the intelligence usable."
    },
    {
        question: "Who built the Colossus Mark 1 in 1943?",
        options: ["Tommy Flowers", "Alan Turing", "Howard Aiken", "Jon Von Neumann", "None of the Other Choices"],
        answer: "Tommy Flowers",
        explanation: "Flowers was a telephone engineer who insisted vacuum tubes would be reliable if left permanently powered. Colossus attacked the Lorenz cipher, not Enigma."
    },
    {
        question: "The Harvard Mark I gave its name to which class of computers?",
        options: ["Harvard class", "Princeton class", "von Neumann class", "Turing class", "None of the Other Choices"],
        answer: "Harvard class",
        explanation: "Harvard class keeps program and data in separate memories. Princeton class, from the IAS Machine, puts them in the same memory."
    },

    // Part 4: First Generation Proper
    {
        question: "Which of the following is the first electronic general-purpose digital computer?",
        options: ["ENIAC", "ABC", "UNIVAC I", "EDVAC", "None of the Other Choices"],
        answer: "ENIAC",
        explanation: "The words general-purpose are what decide it. The ABC was electronic and earlier, but it could only solve linear equations."
    },
    {
        question: "In which year was the ENIAC completed?",
        options: ["1945", "1942", "1949", "1951", "None of the Other Choices"],
        answer: "1945",
        explanation: "1945 ENIAC, 1949 EDVAC, 1951 UNIVAC I — learn them as a sequence. 1942 is the ABC."
    },
    {
        question: "Who created the IAS Machine, and where?",
        options: ["Jon Von Neumann at Princeton", "Eckert and Mauchly at the University of Pennsylvania", "Atanasoff and Berry at Iowa State", "Alan Turing at Bletchley Park", "None of the Other Choices"],
        answer: "Jon Von Neumann at Princeton",
        explanation: "IAS stands for Institute for Advanced Study, which is at Princeton. That is why the architecture is also called Princeton class."
    },
    {
        question: "The architecture of the IAS Machine became known as which of the following?",
        options: ["von Neumann architecture, also called Princeton class", "Harvard architecture", "RISC architecture", "CISC architecture", "None of the Other Choices"],
        answer: "von Neumann architecture, also called Princeton class",
        explanation: "One memory holds both instructions and data, so a program can be loaded like any other data instead of being rewired."
    },
    {
        question: "Who formulated the Stored Program Concept?",
        options: ["Jon Von Neumann", "Howard Aiken", "Alan Turing", "Charles Babbage", "None of the Other Choices"],
        answer: "Jon Von Neumann",
        explanation: "Set out in his 1945 First Draft of a Report on the EDVAC. It ended the era of programming by rewiring and is the basis of every computer today."
    },
    {
        question: "How did the EDVAC differ from the ENIAC?",
        options: ["It was binary instead of decimal, and it was a stored-program machine", "It used faster vacuum tubes", "It was significantly smaller in size", "It used transistors instead of tubes", "None of the Other Choices"],
        answer: "It was binary instead of decimal, and it was a stored-program machine",
        explanation: "Two changes at once, and both stuck. ENIAC counted in decimal and had to be physically rewired for each new job."
    },
    {
        question: "In which year was the EDVAC completed?",
        options: ["1949", "1945", "1951", "1954", "None of the Other Choices"],
        answer: "1949",
        explanation: "Designed from 1945 but not finished until 1949, which is why other stored-program machines beat it into operation."
    },
    {
        question: "The UNIVAC I was built for which organization?",
        options: ["US Census Bureau", "US Army Ordnance Department", "NASA", "IBM", "None of the Other Choices"],
        answer: "US Census Bureau",
        explanation: "The same customer Hollerith served in 1890, now buying the first commercial computer. The Army Ordnance Department was ENIAC's sponsor."
    },
    {
        question: "Who invented FORTRAN, and for which company?",
        options: ["John Backus at IBM", "Grace Murray Hopper at the US Navy", "Alan Turing at Manchester", "Jon Von Neumann at Princeton", "None of the Other Choices"],
        answer: "John Backus at IBM",
        explanation: "Backus and FORTRAN go with IBM and science; Hopper and COBOL go with the Navy and business. Keep the two pairs apart."
    },
    {
        question: "FORTRAN was invented and released in which years?",
        options: ["Invented in 1954, released in 1957", "Invented in 1950, released in 1952", "Invented in 1960, released in 1963", "Invented in 1945, released in 1946", "None of the Other Choices"],
        answer: "Invented in 1954, released in 1957",
        explanation: "Three years passed because nobody believed a compiler could produce code as fast as hand-written assembly. It did, and high-level languages took over."
    },
    {
        question: "Which of the following is the first third-level programming language?",
        options: ["COBOL", "BASIC", "Assembly language", "C", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "It was FORTRAN, released in 1957. COBOL came in 1959, BASIC in 1964, and assembly is only 2nd level."
    },

    // ENIAC Design Details
    {
        question: "Which of the following was the input device of the ENIAC?",
        options: ["IBM card reader", "Teletype keyboard", "Paper tape reader", "Magnetic tape drive", "None of the Other Choices"],
        answer: "IBM card reader",
        explanation: "Punched cards were the standard medium of the day, straight out of Hollerith's line. Note that cards carried the data, while the program was set on the plugboard."
    },
    {
        question: "How many vacuum tubes did the ENIAC have?",
        options: ["18,000", "10,000", "5,000", "25,000", "None of the Other Choices"],
        answer: "18,000",
        explanation: "About 18,000 tubes drawing 150 kilowatts, with tubes burning out constantly. This is exactly the problem the transistor would solve."
    },
    {
        question: "How many accumulators did the ENIAC have?",
        options: ["20 ten-digit signed accumulators", "10 eight-digit signed accumulators", "15 twelve-digit signed accumulators", "25 six-digit signed accumulators", "None of the Other Choices"],
        answer: "20 ten-digit signed accumulators",
        explanation: "The accumulators were both its arithmetic units and its only working memory — just 20 numbers at a time."
    },
    {
        question: "How many additions per second could the ENIAC perform?",
        options: ["5,000", "1,000", "10,000", "500", "None of the Other Choices"],
        answer: "5,000",
        explanation: "About a thousand times faster than the electromechanical Harvard Mark I. That speed gap is what justified the switch to vacuum tubes."
    },
    {
        question: "How was the ENIAC programmed?",
        options: ["By setting switches and connecting wires on a plugboard", "By feeding it punched cards containing the program", "By typing on a keyboard console", "By loading a magnetic tape", "None of the Other Choices"],
        answer: "By setting switches and connecting wires on a plugboard",
        explanation: "Reprogramming meant physically rewiring the machine and could take days. Removing that pain is the whole point of the Stored Program Concept."
    },
    {
        question: "Approximately how large was the ENIAC in floor area?",
        options: ["About 1,800 square feet", "About 500 square feet", "About 5,000 square feet", "About 100 square feet", "None of the Other Choices"],
        answer: "About 1,800 square feet",
        explanation: "Roughly the floor area of a house, weighing about 30 tons, for less computing power than a modern pocket calculator."
    },

    // Part 5: Comparison Tables
    {
        question: "Which single characteristic is shared by both the Analytical Engine and the ENIAC?",
        options: ["Fixed point decimal", "Use of vacuum tubes", "Stored program capability", "Binary number system", "None of the Other Choices"],
        answer: "Fixed point decimal",
        explanation: "Both counted in base 10, one with gears and one with tubes. Neither was binary and neither stored its program in memory."
    },
    {
        question: "Who programmed the Analytical Engine?",
        options: ["Countess Ada Lovelace", "Charles Babbage", "Herman Hollerith", "Grace Murray Hopper", "None of the Other Choices"],
        answer: "Countess Ada Lovelace",
        explanation: "Babbage designed the machine; Lovelace wrote the program for it. Design and programming were already separate jobs in 1842."
    },
    {
        question: "Which of the following were the programmers of the ENIAC?",
        options: ["Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Meltzer, Fran Bilas and Ruth Lichterman", "Countess Ada Lovelace alone", "Jon Von Neumann and Herman Goldstine", "Eckert and Mauchly themselves", "None of the Other Choices"],
        answer: "Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Meltzer, Fran Bilas and Ruth Lichterman",
        explanation: "Six women who worked out the wiring with no manual and no programming language. Eckert and Mauchly built the hardware, not the programs."
    },
    {
        question: "Which number system and word size did the IAS Machine use?",
        options: ["Binary, 40 bits", "Decimal, 40 digits", "Hexadecimal, 32 bits", "Octal, 36 bits", "None of the Other Choices"],
        answer: "Binary, 40 bits",
        explanation: "Note the trap in the wording: 40 bits, not 40 decimal digits. Decimal 40 digits is the Analytical Engine's Store."
    },
    {
        question: "How many instructions did the IAS Machine store per word?",
        options: ["Two 20-bit instructions per 40-bit word", "One 40-bit instruction per word", "Four 10-bit instructions per word", "Eight 5-bit instructions per word", "None of the Other Choices"],
        answer: "Two 20-bit instructions per 40-bit word",
        explanation: "Packing two instructions per word saved scarce memory, since one fetch brought back two instructions at once."
    },
    {
        question: "How much memory did the IAS Machine have?",
        options: ["1,024 words, roughly 5.1 KB", "512 words, roughly 2.5 KB", "2,048 words, roughly 10 KB", "256 words, roughly 1.2 KB", "None of the Other Choices"],
        answer: "1,024 words, roughly 5.1 KB",
        explanation: "1,024 words times 40 bits gives about 5.1 kilobytes — the entire memory of a machine that defined modern computer architecture."
    },
    {
        question: "How did the IAS Machine represent negative numbers?",
        options: ["Two's complement", "One's complement", "Sign and magnitude", "Binary coded decimal", "None of the Other Choices"],
        answer: "Two's complement",
        explanation: "Two's complement lets the same adder circuit handle subtraction, so no separate hardware is needed. Every CPU still does it this way."
    },
    {
        question: "In the von Neumann architecture, where do program instructions and data reside?",
        options: ["In the same memory", "In two separate memories", "Instructions in ROM and data in RAM", "Instructions on cards and data in memory", "None of the Other Choices"],
        answer: "In the same memory",
        explanation: "One shared memory is the defining feature; two separate memories is Harvard architecture. This is the most commonly confused pair in the whole subject."
    }
];
