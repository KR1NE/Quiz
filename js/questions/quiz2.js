// Quiz 2: Parts 2-3 - Modern Period (1822-1884) & Pre-Electronic Period (1884-1945)
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz2Questions = [
    // Part 2: Modern Period
    {
        question: "Who designed the Difference Engine in 1822?",
        options: ["Charles Babbage", "Countess Ada Lovelace", "Herman Hollerith", "Blaise Pascal", "None of the Other Choices"],
        answer: "Charles Babbage"
    },
    {
        question: "The Difference Engine was designed to do which of the following?",
        options: ["Tabulate polynomial functions", "Weave textile patterns", "Process census data", "Break enemy codes", "None of the Other Choices"],
        answer: "Tabulate polynomial functions"
    },
    {
        question: "In which year did Charles Babbage propose the Analytical Engine?",
        options: ["1837", "1822", "1842", "1884", "None of the Other Choices"],
        answer: "1837"
    },
    {
        question: "Because of his work on the Analytical Engine, Charles Babbage is known as which of the following?",
        options: ["Father of the Modern Computer", "Father of the Internet", "The first computer programmer", "Father of Binary Arithmetic", "None of the Other Choices"],
        answer: "Father of the Modern Computer"
    },
    {
        question: "Which of the following best states the key difference between the Difference Engine and the Analytical Engine?",
        options: ["The Difference Engine did one specific job; the Analytical Engine was general-purpose", "The Analytical Engine was the simpler of the two", "The Difference Engine was electronic", "The Analytical Engine could only add and subtract", "None of the Other Choices"],
        answer: "The Difference Engine did one specific job; the Analytical Engine was general-purpose"
    },
    {
        question: "Who is considered to be the first ever computer programmer?",
        options: ["Countess Ada Lovelace", "Charles Babbage", "Herman Hollerith", "Grace Murray Hopper", "None of the Other Choices"],
        answer: "Countess Ada Lovelace"
    },
    {
        question: "What is the complete title of Ada Lovelace?",
        options: ["Augusta Ada King, Countess of Lovelace", "Lady Augusta Byron of Lovelace", "Princess Ada Cambridge", "Duchess Ada of York", "None of the Other Choices"],
        answer: "Augusta Ada King, Countess of Lovelace"
    },
    {
        question: "What did Ada Lovelace recognize about the Analytical Engine that Babbage himself did not emphasize?",
        options: ["That it had applications beyond pure calculation", "That it could only perform mathematics", "That it would be too slow to be useful", "That it needed electrical power", "None of the Other Choices"],
        answer: "That it had applications beyond pure calculation"
    },
    {
        question: "Which of the following did Ada Lovelace publish?",
        options: ["The first algorithm intended to be carried out by a machine", "The first computer operating manual", "The first high-level programming language", "The first database schema", "None of the Other Choices"],
        answer: "The first algorithm intended to be carried out by a machine"
    },
    {
        question: "Who invented the punched card tabulating machine in 1884?",
        options: ["Herman Hollerith", "Charles Babbage", "Thomas de Colmar", "Joseph Marie Jacquard", "None of the Other Choices"],
        answer: "Herman Hollerith"
    },
    {
        question: "Hollerith's tabulating machine began which era of data handling?",
        options: ["Semiautomatic data processing", "Electronic computing", "Personal computing", "The Internet age", "None of the Other Choices"],
        answer: "Semiautomatic data processing"
    },
    {
        question: "Which of the following are the three main components of the Analytical Engine?",
        options: ["Input, Mill, Store", "CPU, RAM, ROM", "Keyboard, Monitor, Printer", "Cards, Gears, Output", "None of the Other Choices"],
        answer: "Input, Mill, Store"
    },
    {
        question: "In the Analytical Engine, which component corresponds to the modern CPU?",
        options: ["The Mill", "The Store", "The Input", "The Barrel", "None of the Other Choices"],
        answer: "The Mill"
    },
    {
        question: "Which of the following best describes 'The Store' of the Analytical Engine?",
        options: ["Memory capable of holding 1,000 numbers of 40 decimal digits", "The arithmetic processing unit", "The punched card reader", "The printing output device", "None of the Other Choices"],
        answer: "Memory capable of holding 1,000 numbers of 40 decimal digits"
    },
    {
        question: "The Analytical Engine is architecturally closer to which of the following?",
        options: ["Harvard architecture", "von Neumann architecture", "RISC architecture", "CISC architecture", "None of the Other Choices"],
        answer: "Harvard architecture"
    },

    // Part 3: Pre-Electronic Period
    {
        question: "Who invented the vacuum tube diode in 1904?",
        options: ["John Ambrose Fleming", "Thomas Alva Edison", "Nikola Tesla", "Lee de Forest", "None of the Other Choices"],
        answer: "John Ambrose Fleming"
    },
    {
        question: "Hollerith's tabulating company eventually became which company in 1924?",
        options: ["IBM", "Microsoft", "Apple", "Intel", "None of the Other Choices"],
        answer: "IBM"
    },
    {
        question: "Who built the first electrically powered mechanical analogue computer in 1912?",
        options: ["Arthur Pollen", "Vannevar Bush", "Howard Aiken", "Konrad Zuse", "None of the Other Choices"],
        answer: "Arthur Pollen"
    },
    {
        question: "What was the name of Arthur Pollen's analogue computer?",
        options: ["The Argo Clock", "The Difference Engine", "The Colossus", "The Bombe", "None of the Other Choices"],
        answer: "The Argo Clock"
    },
    {
        question: "Who built the first practical general-purpose differential analyser between 1928 and 1931?",
        options: ["Vannevar Bush and Harold Locke Hazen", "Atanasoff and Berry", "Eckert and Mauchly", "Shockley and Bardeen", "None of the Other Choices"],
        answer: "Vannevar Bush and Harold Locke Hazen"
    },
    {
        question: "Which of the following is the first automatic electronic digital binary computer?",
        options: ["ENIAC", "EDVAC", "Harvard Mark I", "Colossus Mark 1", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "The ABC (Atanasoff-Berry Computer, 1937-1942) was the first automatic electronic digital binary computer."
    },
    {
        question: "Who conceived the ABC Computer?",
        options: ["Atanasoff and Berry", "Eckert and Mauchly", "Babbage and Lovelace", "Turing and Flowers", "None of the Other Choices"],
        answer: "Atanasoff and Berry"
    },
    {
        question: "Which of the following is the key limitation of the ABC Computer?",
        options: ["It was not programmable", "It was not electronic", "It was not binary", "It was not automatic", "None of the Other Choices"],
        answer: "It was not programmable"
    },
    {
        question: "Who proposed a mechanical computer to IBM in 1937?",
        options: ["Howard Aiken", "Jon Von Neumann", "Alan Turing", "Konrad Zuse", "None of the Other Choices"],
        answer: "Howard Aiken"
    },
    {
        question: "Who approved Howard Aiken's computer proposal at IBM in 1939?",
        options: ["Thomas Watson Sr.", "Thomas Watson Jr.", "Herman Hollerith", "William Bill Gates", "None of the Other Choices"],
        answer: "Thomas Watson Sr."
    },
    {
        question: "Who used relays to build a demonstration adder at Bell Labs in 1937?",
        options: ["George Stibitz", "Claude Shannon", "Jon Von Neumann", "Howard Aiken", "None of the Other Choices"],
        answer: "George Stibitz"
    },
    {
        question: "In which year was Hewlett-Packard founded?",
        options: ["1939", "1945", "1950", "1976", "None of the Other Choices"],
        answer: "1939"
    },
    {
        question: "Who finished the Z3 computer in 1941?",
        options: ["Konrad Zuse", "Howard Aiken", "Alan Turing", "John Atanasoff", "None of the Other Choices"],
        answer: "Konrad Zuse"
    },
    {
        question: "The Harvard Mark I was also known by which name, and was delivered where in 1944?",
        options: ["ASCC, delivered to Harvard University", "ENIAC, delivered to the University of Pennsylvania", "ABC, delivered to Iowa State", "Z3, delivered to Berlin", "None of the Other Choices"],
        answer: "ASCC, delivered to Harvard University"
    },
    {
        question: "On which machine was the computing term 'bug' first coined?",
        options: ["Harvard Mark I", "ENIAC", "ABC", "Colossus Mark 1", "None of the Other Choices"],
        answer: "Harvard Mark I"
    },
    {
        question: "Who built the ENIAC in 1945?",
        options: ["Mauchly and Eckert", "Atanasoff and Berry", "Babbage and Lovelace", "Turing and Flowers", "None of the Other Choices"],
        answer: "Mauchly and Eckert"
    }
];
