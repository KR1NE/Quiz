// Quiz 2: Parts 2-3 - Modern Period (1822-1884) & Pre-Electronic Period (1884-1945)
const quiz2Questions = [
    // Part 2: Modern Period
    {
        question: "Who designed the Difference Engine in 1822?",
        options: ["Charles Babbage", "Ada Lovelace", "Herman Hollerith", "Blaise Pascal"],
        answer: "Charles Babbage"
    },
    {
        question: "What was the Difference Engine designed to do?",
        options: ["Tabulate polynomial functions", "Weave patterns", "Process census data", "Break codes"],
        answer: "Tabulate polynomial functions"
    },
    {
        question: "In what year did Babbage propose the Analytical Engine?",
        options: ["1837", "1822", "1842", "1884"],
        answer: "1837"
    },
    {
        question: "What is Babbage called due to his work on the Analytical Engine?",
        options: ["Father of the modern computer", "Father of the Internet", "First programmer", "Inventor of binary"],
        answer: "Father of the modern computer"
    },
    {
        question: "What is the key difference between the Difference Engine and Analytical Engine?",
        options: ["Difference Engine did one specific job; Analytical Engine was general-purpose", "Analytical Engine was simpler", "Difference Engine was electronic", "They were the same"],
        answer: "Difference Engine did one specific job; Analytical Engine was general-purpose"
    },
    {
        question: "Who is considered the first computer programmer?",
        options: ["Ada Lovelace", "Charles Babbage", "Herman Hollerith", "Grace Hopper"],
        answer: "Ada Lovelace"
    },
    {
        question: "What was Ada Lovelace's full title?",
        options: ["Augusta Ada King, Countess of Lovelace", "Lady Augusta Byron", "Princess Ada Cambridge", "Duchess Ada of York"],
        answer: "Augusta Ada King, Countess of Lovelace"
    },
    {
        question: "What did Ada Lovelace recognize about the Analytical Engine?",
        options: ["It had uses beyond pure calculation", "It could only do math", "It was too slow", "It needed electricity"],
        answer: "It had uses beyond pure calculation"
    },
    {
        question: "What did Ada Lovelace publish?",
        options: ["The first algorithm intended for a machine", "The first computer manual", "The first programming language", "The first database schema"],
        answer: "The first algorithm intended for a machine"
    },
    {
        question: "Who invented the punched card tabulating machine in 1884?",
        options: ["Herman Hollerith", "Charles Babbage", "Thomas de Colmar", "Joseph Jacquard"],
        answer: "Herman Hollerith"
    },
    {
        question: "What era did Hollerith's invention begin?",
        options: ["Semiautomatic data processing", "Electronic computing", "Personal computing", "Internet age"],
        answer: "Semiautomatic data processing"
    },
    {
        question: "What are the three main components of the Analytical Engine?",
        options: ["Input, Mill, Store", "CPU, RAM, ROM", "Keyboard, Monitor, Printer", "Cards, Gears, Output"],
        answer: "Input, Mill, Store"
    },
    {
        question: "What was 'The Mill' in the Analytical Engine?",
        options: ["The Arithmetic Unit (like a modern CPU)", "The memory storage", "The input mechanism", "The output printer"],
        answer: "The Arithmetic Unit (like a modern CPU)"
    },
    {
        question: "What was 'The Store' in the Analytical Engine?",
        options: ["Memory - capable of holding 1,000 numbers of 40 decimal digits", "The processor", "The input cards", "The output device"],
        answer: "Memory - capable of holding 1,000 numbers of 40 decimal digits"
    },
    {
        question: "The Analytical Engine is architecturally closer to which architecture?",
        options: ["Harvard architecture", "von Neumann architecture", "RISC architecture", "CISC architecture"],
        answer: "Harvard architecture"
    },

    // Part 3: Pre-Electronic Period
    {
        question: "Who invented the vacuum tube diode in 1904?",
        options: ["John Ambrose Fleming", "Thomas Edison", "Nikola Tesla", "Alan Turing"],
        answer: "John Ambrose Fleming"
    },
    {
        question: "What company did Hollerith's company eventually become in 1924?",
        options: ["IBM", "Microsoft", "Apple", "Intel"],
        answer: "IBM"
    },
    {
        question: "Who built the first electrically powered mechanical analogue computer in 1912?",
        options: ["Arthur Pollen", "Vannevar Bush", "Howard Aiken", "Konrad Zuse"],
        answer: "Arthur Pollen"
    },
    {
        question: "What was the name of Pollen's analogue computer?",
        options: ["The Argo Clock", "The Difference Engine", "The Colossus", "The Bombe"],
        answer: "The Argo Clock"
    },
    {
        question: "Who built the practical general-purpose differential analyser (1928-1931)?",
        options: ["Vannevar Bush and Harold Locke Hazen", "Atanasoff and Berry", "Eckert and Mauchly", "Jobs and Wozniak"],
        answer: "Vannevar Bush and Harold Locke Hazen"
    },
    {
        question: "What was the ABC computer (1937-1942)?",
        options: ["First automatic electronic digital binary computer", "First programmable computer", "First commercial computer", "First personal computer"],
        answer: "First automatic electronic digital binary computer"
    },
    {
        question: "Who conceived the ABC computer?",
        options: ["Atanasoff and Berry", "Eckert and Mauchly", "Babbage and Lovelace", "Turing and Flowers"],
        answer: "Atanasoff and Berry"
    },
    {
        question: "What was a key limitation of the ABC computer?",
        options: ["It was not programmable", "It was too large", "It used vacuum tubes", "It was too expensive"],
        answer: "It was not programmable"
    },
    {
        question: "Memory hook for ABC: It WAS first, electronic, and binary. It was NOT ___.",
        options: ["Programmable", "Fast", "Digital", "Automatic"],
        answer: "Programmable"
    },
    {
        question: "Who proposed a mechanical computer to IBM in 1937?",
        options: ["Howard Aiken", "John von Neumann", "Alan Turing", "Konrad Zuse"],
        answer: "Howard Aiken"
    },
    {
        question: "Who approved Aiken's computer proposal at IBM in 1939?",
        options: ["Thomas Watson Sr.", "Thomas Watson Jr.", "Herman Hollerith", "Bill Gates"],
        answer: "Thomas Watson Sr."
    },
    {
        question: "Who used relays for a demonstration adder in 1937 at Bell Labs?",
        options: ["George Stibitz", "Claude Shannon", "John von Neumann", "Howard Aiken"],
        answer: "George Stibitz"
    },
    {
        question: "When was Hewlett-Packard founded?",
        options: ["1939", "1945", "1950", "1976"],
        answer: "1939"
    },
    {
        question: "Who finished the Z3 computer in 1941?",
        options: ["Konrad Zuse", "Howard Aiken", "Alan Turing", "John Atanasoff"],
        answer: "Konrad Zuse"
    },
    {
        question: "What was the Mark I also called, and where was it delivered in 1944?",
        options: ["ASCC, delivered to Harvard", "ENIAC, delivered to U. Penn", "ABC, delivered to Iowa", "Z3, delivered to Berlin"],
        answer: "ASCC, delivered to Harvard"
    },
    {
        question: "Where was the term 'bug' coined?",
        options: ["Harvard Mark I", "ENIAC", "ABC", "Colossus"],
        answer: "Harvard Mark I"
    },
    {
        question: "Who built ENIAC in 1945?",
        options: ["Mauchly and Eckert", "Atanasoff and Berry", "Babbage and Lovelace", "Turing and Flowers"],
        answer: "Mauchly and Eckert"
    },
    {
        question: "ENIAC resembled which earlier machine in being decimal-based?",
        options: ["Babbage's Analytical Engine", "ABC", "Z3", "Mark I"],
        answer: "Babbage's Analytical Engine"
    }
];
