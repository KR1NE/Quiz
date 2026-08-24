// Quiz 7: Parts 12-13 - Intel CPU Components & Quick Recall Sheets
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz7Questions = [
    // Part 12: General Purpose Registers
    {
        question: "In the Intel CPU registers, what does AX stand for?",
        options: ["Accumulator", "Address", "Auxiliary", "Arithmetic", "None of the Other Choices"],
        answer: "Accumulator"
    },
    {
        question: "In the Intel CPU registers, what does BX stand for?",
        options: ["Base", "Binary", "Buffer", "Byte", "None of the Other Choices"],
        answer: "Base"
    },
    {
        question: "In the Intel CPU registers, what does CX stand for?",
        options: ["Counter", "Control", "Carry", "Code", "None of the Other Choices"],
        answer: "Counter"
    },
    {
        question: "In the Intel CPU registers, what does DX stand for?",
        options: ["Data", "Destination", "Division", "Double", "None of the Other Choices"],
        answer: "Data"
    },
    {
        question: "Which prefix indicates a 32-bit Intel register?",
        options: ["E, for Extended", "R", "X", "L", "None of the Other Choices"],
        answer: "E, for Extended"
    },
    {
        question: "Which prefix indicates a 64-bit Intel register?",
        options: ["R", "E", "X", "Q", "None of the Other Choices"],
        answer: "R"
    },
    {
        question: "What is the 64-bit version of AX?",
        options: ["RAX", "EAX", "QAX", "LAX", "None of the Other Choices"],
        answer: "RAX"
    },
    {
        question: "What is the 32-bit version of BX?",
        options: ["EBX", "RBX", "LBX", "QBX", "None of the Other Choices"],
        answer: "EBX"
    },

    // Part 12: Index and Address Registers
    {
        question: "In the Intel CPU registers, what does SI stand for?",
        options: ["Source Index", "Stack Index", "System Index", "Segment Index", "None of the Other Choices"],
        answer: "Source Index"
    },
    {
        question: "In the Intel CPU registers, what does DI stand for?",
        options: ["Destination Index", "Data Index", "Division Index", "Direct Index", "None of the Other Choices"],
        answer: "Destination Index"
    },
    {
        question: "In the Intel CPU registers, what does SP stand for?",
        options: ["Stack Pointer", "Source Pointer", "Segment Pointer", "System Pointer", "None of the Other Choices"],
        answer: "Stack Pointer"
    },
    {
        question: "In the Intel CPU registers, what does BP stand for?",
        options: ["Base Pointer", "Binary Pointer", "Buffer Pointer", "Byte Pointer", "None of the Other Choices"],
        answer: "Base Pointer"
    },
    {
        question: "Which of the following best describes the IP register?",
        options: ["The Instruction Pointer, which serves as the program counter", "The interrupt priority level", "The input port selector", "The index pointer for arrays", "None of the Other Choices"],
        answer: "The Instruction Pointer, which serves as the program counter"
    },

    // Part 12: EFLAGS
    {
        question: "EFLAGS is a register found in which unit of the CPU?",
        options: ["ALU", "FPU", "Control Unit", "Cache Controller", "None of the Other Choices"],
        answer: "ALU"
    },
    {
        question: "Which flag occupies bit 0 of the EFLAGS register?",
        options: ["CF, the Carry flag", "ZF, the Zero flag", "SF, the Sign flag", "OF, the Overflow flag", "None of the Other Choices"],
        answer: "CF, the Carry flag"
    },
    {
        question: "Which flag occupies bit 6 of the EFLAGS register?",
        options: ["ZF, the Zero flag", "CF, the Carry flag", "SF, the Sign flag", "PF, the Parity flag", "None of the Other Choices"],
        answer: "ZF, the Zero flag"
    },
    {
        question: "Which flag occupies bit 7 of the EFLAGS register?",
        options: ["SF, the Sign flag", "ZF, the Zero flag", "CF, the Carry flag", "OF, the Overflow flag", "None of the Other Choices"],
        answer: "SF, the Sign flag"
    },
    {
        question: "Which flag occupies bit 11 of the EFLAGS register?",
        options: ["OF, the Overflow flag", "SF, the Sign flag", "DF, the Direction flag", "IF, the Interrupt flag", "None of the Other Choices"],
        answer: "OF, the Overflow flag"
    },

    // Part 13: Quick Recall - Firsts
    {
        question: "Which of the following is the first mechanical calculator, together with its inventor and year?",
        options: ["Pascaline, by Blaise Pascal, 1642", "Arithmometer, by Thomas de Colmar, 1820", "Step Reckoner, by Leibniz, 1673", "Difference Engine, by Charles Babbage, 1822", "None of the Other Choices"],
        answer: "Pascaline, by Blaise Pascal, 1642"
    },
    {
        question: "Which of the following is the first commercially successful calculator, together with its inventor and year?",
        options: ["Arithmometer, by Thomas de Colmar, 1820", "Pascaline, by Blaise Pascal, 1642", "Step Reckoner, by Leibniz, 1673", "HP 9100A, by Hewlett-Packard, 1968", "None of the Other Choices"],
        answer: "Arithmometer, by Thomas de Colmar, 1820"
    },
    {
        question: "Which of the following is the first electronic general-purpose digital computer, together with its year?",
        options: ["ENIAC, 1945", "ABC, 1942", "UNIVAC I, 1951", "Harvard Mark I, 1944", "None of the Other Choices"],
        answer: "ENIAC, 1945"
    },
    {
        question: "Which of the following is the first machine built on the stored-program architecture, together with its designer?",
        options: ["IAS Machine, by Jon Von Neumann", "ENIAC, by Eckert and Mauchly", "Harvard Mark I, by Howard Aiken", "Colossus Mark 1, by Tommy Flowers", "None of the Other Choices"],
        answer: "IAS Machine, by Jon Von Neumann"
    },
    {
        question: "Which of the following is the first computer virus on DOS, together with its year?",
        options: ["Brain, 1986", "ILOVEYOU, 2000", "Melissa, 1999", "Morris Worm, 1988", "None of the Other Choices"],
        answer: "Brain, 1986"
    },
    {
        question: "Which of the following is the first computer to run a computer game?",
        options: ["IBM 7094", "IBM 709", "Xerox Alto", "Altair 8800", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "The PDP-1 of 1959 ran Spacewar!, the first computer game."
    },

    // Part 13: Numbers Worth Memorizing
    {
        question: "How many vacuum tubes did the ENIAC have?",
        options: ["18,000", "10,000", "25,000", "5,000", "None of the Other Choices"],
        answer: "18,000"
    },
    {
        question: "How many decimal digits could the Store of the Analytical Engine hold?",
        options: ["1,000 numbers of 40 decimal digits", "500 numbers of 20 decimal digits", "100 numbers of 10 decimal digits", "10,000 numbers of 8 decimal digits", "None of the Other Choices"],
        answer: "1,000 numbers of 40 decimal digits"
    },
    {
        question: "How much RAM did the base model of the Altair 8800 have?",
        options: ["256 bytes", "1 KB", "4 KB", "64 bytes", "None of the Other Choices"],
        answer: "256 bytes"
    },
    {
        question: "How many units of the PDP-11 were sold?",
        options: ["Over 600,000", "Over 100,000", "Over 1 million", "Over 50,000", "None of the Other Choices"],
        answer: "Over 600,000"
    }
];
