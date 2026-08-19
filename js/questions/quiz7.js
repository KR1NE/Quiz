// Quiz 7: Parts 12-13 - Intel CPU Components & Quick Recall Sheets
const quiz7Questions = [
    // Part 12: General Purpose Registers
    {
        question: "What does AX stand for in CPU registers?",
        options: ["Accumulator", "Address", "Auxiliary", "Arithmetic"],
        answer: "Accumulator"
    },
    {
        question: "What does BX stand for in CPU registers?",
        options: ["Base", "Binary", "Buffer", "Byte"],
        answer: "Base"
    },
    {
        question: "What does CX stand for in CPU registers?",
        options: ["Counter", "Control", "Carry", "Code"],
        answer: "Counter"
    },
    {
        question: "What does DX stand for in CPU registers?",
        options: ["Data", "Destination", "Division", "Double"],
        answer: "Data"
    },
    {
        question: "What prefix indicates a 32-bit register?",
        options: ["E (Extended)", "R", "X", "L"],
        answer: "E (Extended)"
    },
    {
        question: "What prefix indicates a 64-bit register?",
        options: ["R", "E", "X", "Q"],
        answer: "R"
    },
    {
        question: "What is the 64-bit version of AX?",
        options: ["RAX", "EAX", "QAX", "LAX"],
        answer: "RAX"
    },
    {
        question: "What is the 32-bit version of BX?",
        options: ["EBX", "RBX", "LBX", "QBX"],
        answer: "EBX"
    },

    // Part 12: Index and Address Registers
    {
        question: "What does SI stand for?",
        options: ["Source Index", "Stack Index", "System Index", "Segment Index"],
        answer: "Source Index"
    },
    {
        question: "What does DI stand for?",
        options: ["Destination Index", "Data Index", "Division Index", "Direct Index"],
        answer: "Destination Index"
    },
    {
        question: "What does SP stand for?",
        options: ["Stack Pointer", "Source Pointer", "Segment Pointer", "System Pointer"],
        answer: "Stack Pointer"
    },
    {
        question: "What does BP stand for?",
        options: ["Base Pointer", "Binary Pointer", "Buffer Pointer", "Byte Pointer"],
        answer: "Base Pointer"
    },
    {
        question: "What is IP (Instruction Pointer)?",
        options: ["The 64-bit program counter", "The interrupt handler", "The input port", "The index pointer"],
        answer: "The 64-bit program counter"
    },

    // Part 12: EFLAGS
    {
        question: "EFLAGS is a register in which unit?",
        options: ["ALU (not FPU)", "FPU", "Control Unit", "Cache"],
        answer: "ALU (not FPU)"
    },
    {
        question: "What is bit 0 in EFLAGS?",
        options: ["CF - Carry flag", "ZF - Zero flag", "SF - Sign flag", "OF - Overflow flag"],
        answer: "CF - Carry flag"
    },
    {
        question: "What is bit 6 in EFLAGS?",
        options: ["ZF - Zero flag", "CF - Carry flag", "SF - Sign flag", "PF - Parity flag"],
        answer: "ZF - Zero flag"
    },
    {
        question: "What is bit 7 in EFLAGS?",
        options: ["SF - Sign flag", "ZF - Zero flag", "CF - Carry flag", "OF - Overflow flag"],
        answer: "SF - Sign flag"
    },
    {
        question: "What is bit 11 in EFLAGS?",
        options: ["OF - Overflow flag", "SF - Sign flag", "DF - Direction flag", "IF - Interrupt flag"],
        answer: "OF - Overflow flag"
    },

    // Part 13: Quick Recall - Firsts
    {
        question: "What was the first mechanical calculator?",
        options: ["Pascaline (Pascal, 1642)", "Arithmometer", "Step Reckoner", "Analytical Engine"],
        answer: "Pascaline (Pascal, 1642)"
    },
    {
        question: "What was the first commercially successful calculator?",
        options: ["Arithmometer (de Colmar, 1820)", "Pascaline", "Step Reckoner", "HP 9100A"],
        answer: "Arithmometer (de Colmar, 1820)"
    },
    {
        question: "What was the first electronic general-purpose digital computer?",
        options: ["ENIAC (1945)", "ABC", "UNIVAC", "Mark I"],
        answer: "ENIAC (1945)"
    },
    {
        question: "What was the first stored-program architecture?",
        options: ["IAS Machine (von Neumann, 1945)", "ENIAC", "EDVAC", "Mark I"],
        answer: "IAS Machine (von Neumann, 1945)"
    },
    {
        question: "What was the first computer virus on DOS?",
        options: ["Brain (1986)", "ILOVEYOU", "Melissa", "Morris Worm"],
        answer: "Brain (1986)"
    },

    // Part 13: Numbers Worth Memorizing
    {
        question: "How many vacuum tubes did ENIAC have?",
        options: ["18,000", "10,000", "25,000", "5,000"],
        answer: "18,000"
    },
    {
        question: "How large was ENIAC in square feet?",
        options: ["About 1,800 sq ft", "About 500 sq ft", "About 5,000 sq ft", "About 100 sq ft"],
        answer: "About 1,800 sq ft"
    },
    {
        question: "How many decimal digits could the Analytical Engine Store hold?",
        options: ["1,000 numbers of 40 decimal digits", "500 numbers of 20 digits", "100 numbers of 10 digits", "10,000 numbers of 8 digits"],
        answer: "1,000 numbers of 40 decimal digits"
    },
    {
        question: "How much RAM did the base Altair 8800 have?",
        options: ["256 bytes", "1 KB", "4 KB", "64 bytes"],
        answer: "256 bytes"
    },
    {
        question: "How many PDP-11 units were sold?",
        options: ["Over 600,000", "100,000", "1 million", "50,000"],
        answer: "Over 600,000"
    }
];
