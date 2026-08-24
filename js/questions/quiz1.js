// Quiz 1: Parts 0-1 - The Big Picture & Mechanical Era (1642-1820)
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz1Questions = [
    // Part 0: The Big Picture - Era Questions
    {
        question: "Which of the following is the core technology of the Mechanical Era (1642-1820)?",
        options: ["Gears and cranks", "Vacuum tubes", "Transistors", "Integrated circuits", "None of the Other Choices"],
        answer: "Gears and cranks"
    },
    {
        question: "Which era is described as using punched cards, relays, and the newly invented vacuum tube?",
        options: ["Pre-Electronic Period (1884-1945)", "First Generation (1946-1958)", "Mechanical Era (1642-1820)", "Modern/Design Era (1822-1884)", "None of the Other Choices"],
        answer: "Pre-Electronic Period (1884-1945)"
    },
    {
        question: "The First Generation of computers (1946-1958) is defined by which core technology?",
        options: ["Vacuum tubes", "Transistors", "Integrated circuits", "Microprocessors", "None of the Other Choices"],
        answer: "Vacuum tubes"
    },
    {
        question: "Which of the following are the landmark machines of the Second Generation (1956-1963)?",
        options: ["PDP-1 and IBM 7094", "ENIAC and EDVAC", "IBM System/360", "Altair 8800 and Apple II", "None of the Other Choices"],
        answer: "PDP-1 and IBM 7094"
    },
    {
        question: "The Third Generation (1964-1971) was defined by which core technology?",
        options: ["Integrated Circuits", "Transistors", "Microprocessors", "Vacuum tubes", "None of the Other Choices"],
        answer: "Integrated Circuits"
    },
    {
        question: "Which era spans from 1971 up to the present day?",
        options: ["Fourth Generation", "Third Generation", "Fifth Generation", "Modern/Design Era", "None of the Other Choices"],
        answer: "Fourth Generation"
    },
    {
        question: "Which of the following are the landmark machines of the Fourth Generation?",
        options: ["Altair 8800, Apple II, IBM PC", "ENIAC and UNIVAC", "PDP-1 and PDP-11", "Z3 and Harvard Mark I", "None of the Other Choices"],
        answer: "Altair 8800, Apple II, IBM PC"
    },
    {
        question: "The Modern/Design Era (1822-1884) is best characterized by which concept?",
        options: ["Mechanical, but programmable in concept", "Fully electronic computing", "Integrated circuit fabrication", "Binary stored-program processing", "None of the Other Choices"],
        answer: "Mechanical, but programmable in concept"
    },
    {
        question: "Which machine is the landmark of the Modern/Design Era?",
        options: ["Analytical Engine", "ENIAC", "PDP-1", "Altair 8800", "None of the Other Choices"],
        answer: "Analytical Engine"
    },
    {
        question: "The First and Second Generations of computers overlap during which years?",
        options: ["1956 to 1958", "1958 to 1960", "1960 to 1963", "1964 to 1966", "None of the Other Choices"],
        answer: "1956 to 1958"
    },
    {
        question: "Which of the following is considered to be the very first mechanical calculator?",
        options: ["Pascaline", "Arithmometer", "Step Reckoner", "Difference Engine", "None of the Other Choices"],
        answer: "Pascaline"
    },

    // Part 1: Mechanical Era - People and Inventions
    {
        question: "Who invented the Pascaline in 1642?",
        options: ["Blaise Pascal", "Gottfried Wilhelm von Leibniz", "Joseph Marie Jacquard", "Thomas de Colmar", "None of the Other Choices"],
        answer: "Blaise Pascal"
    },
    {
        question: "Which operations could the Pascaline perform?",
        options: ["Addition and subtraction only", "All four arithmetic operations", "Multiplication only", "Addition only", "None of the Other Choices"],
        answer: "Addition and subtraction only"
    },
    {
        question: "Who among the following is known as a strong advocate of the binary system?",
        options: ["Gottfried Wilhelm von Leibniz", "Blaise Pascal", "Charles Babbage", "Thomas de Colmar", "None of the Other Choices"],
        answer: "Gottfried Wilhelm von Leibniz"
    },
    {
        question: "Who invented the Step Reckoner in 1673?",
        options: ["Blaise Pascal", "Charles Babbage", "Thomas de Colmar", "Joseph Marie Jacquard", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "The Step Reckoner was invented by Gottfried Wilhelm von Leibniz in 1673."
    },
    {
        question: "How did the Step Reckoner perform multiplication?",
        options: ["By repeated addition and shifting", "By direct gear ratios", "By reading punched cards", "By electronic pulses", "None of the Other Choices"],
        answer: "By repeated addition and shifting"
    },
    {
        question: "Who invented the Jacquard loom in 1801?",
        options: ["Joseph Marie Jacquard", "Thomas de Colmar", "Blaise Pascal", "Charles Babbage", "None of the Other Choices"],
        answer: "Joseph Marie Jacquard"
    },
    {
        question: "What is the significance of the Jacquard loom to the history of computing?",
        options: ["It used punched cards that Babbage and Hollerith later borrowed", "It was the first computer", "It was the first machine to use binary code", "It was the first machine to perform division", "None of the Other Choices"],
        answer: "It used punched cards that Babbage and Hollerith later borrowed"
    },
    {
        question: "The Jacquard loom used punched wooden cards to automate which process?",
        options: ["Weaving patterns", "Mathematical tabulation", "Census data storage", "Book printing", "None of the Other Choices"],
        answer: "Weaving patterns"
    },
    {
        question: "Who invented the Arithmometer in 1820?",
        options: ["Thomas de Colmar", "Blaise Pascal", "Gottfried Wilhelm von Leibniz", "Joseph Marie Jacquard", "None of the Other Choices"],
        answer: "Thomas de Colmar"
    },
    {
        question: "Which of the following is considered to be the first commercially successful mechanical calculator?",
        options: ["Pascaline", "Step Reckoner", "Analytical Engine", "Difference Engine", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "The Arithmometer of Thomas de Colmar (1820) was the first commercially successful mechanical calculator."
    },
    {
        question: "How many arithmetic operations could the Arithmometer perform?",
        options: ["All 4 operations", "2 operations", "3 operations", "1 operation", "None of the Other Choices"],
        answer: "All 4 operations"
    },
    {
        question: "During which years was the Arithmometer manufactured?",
        options: ["1851 to 1915", "1820 to 1850", "1800 to 1820", "1900 to 1950", "None of the Other Choices"],
        answer: "1851 to 1915"
    },
    {
        question: "Blaise Pascal came from which country?",
        options: ["France", "Germany", "England", "United States", "None of the Other Choices"],
        answer: "France"
    },
    {
        question: "Gottfried Wilhelm von Leibniz came from which country?",
        options: ["Germany", "France", "England", "Italy", "None of the Other Choices"],
        answer: "Germany"
    }
];
