// Quiz 7: Parts 12-13 - Intel CPU Components & Quick Recall Sheets
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz7Questions = [
    // Part 12: General Purpose Registers
    {
        question: "In the Intel CPU registers, what does AX stand for?",
        options: ["Accumulator", "Address", "Auxiliary", "Arithmetic", "None of the Other Choices"],
        answer: "Accumulator",
        explanation: "It is where arithmetic results accumulate. Many instructions default to AX, so using it produces shorter machine code."
    },
    {
        question: "In the Intel CPU registers, what does BX stand for?",
        options: ["Base", "Binary", "Buffer", "Byte", "None of the Other Choices"],
        answer: "Base",
        explanation: "It holds a base memory address that other values are offset from, which is how arrays are indexed."
    },
    {
        question: "In the Intel CPU registers, what does CX stand for?",
        options: ["Counter", "Control", "Carry", "Code", "None of the Other Choices"],
        answer: "Counter",
        explanation: "Loop and string instructions automatically decrement CX and stop when it hits zero, so it is the built-in loop counter."
    },
    {
        question: "In the Intel CPU registers, what does DX stand for?",
        options: ["Data", "Destination", "Division", "Double", "None of the Other Choices"],
        answer: "Data",
        explanation: "It works as a general data register and pairs with AX to hold the upper half of multiplication and division results. Destination is DI, not DX."
    },
    {
        question: "Which prefix indicates a 32-bit Intel register?",
        options: ["E, for Extended", "R", "X", "L", "None of the Other Choices"],
        answer: "E, for Extended",
        explanation: "Extended because the i386 doubled the 16-bit registers to 32 bits. AX becomes EAX, BX becomes EBX, and so on."
    },
    {
        question: "Which prefix indicates a 64-bit Intel register?",
        options: ["R", "E", "X", "Q", "None of the Other Choices"],
        answer: "R",
        explanation: "The naming ladder is AX at 16 bits, EAX at 32 and RAX at 64. R stands for register in the 64-bit extension."
    },
    {
        question: "What is the 64-bit version of AX?",
        options: ["RAX", "EAX", "QAX", "LAX", "None of the Other Choices"],
        answer: "RAX",
        explanation: "R prefix means 64-bit, so RAX. EAX would be the 32-bit version of the same register."
    },
    {
        question: "What is the 32-bit version of BX?",
        options: ["EBX", "RBX", "LBX", "QBX", "None of the Other Choices"],
        answer: "EBX",
        explanation: "E for Extended means 32-bit. RBX is the same register at 64 bits."
    },

    // Part 12: Index and Address Registers
    {
        question: "In the Intel CPU registers, what does SI stand for?",
        options: ["Source Index", "Stack Index", "System Index", "Segment Index", "None of the Other Choices"],
        answer: "Source Index",
        explanation: "In a string copy, SI points at where data is read from and DI at where it is written to. Source and Destination always work as a pair."
    },
    {
        question: "In the Intel CPU registers, what does DI stand for?",
        options: ["Destination Index", "Data Index", "Division Index", "Direct Index", "None of the Other Choices"],
        answer: "Destination Index",
        explanation: "It marks where data is being written to, the partner of SI. Do not confuse it with DX, which is Data."
    },
    {
        question: "In the Intel CPU registers, what does SP stand for?",
        options: ["Stack Pointer", "Source Pointer", "Segment Pointer", "System Pointer", "None of the Other Choices"],
        answer: "Stack Pointer",
        explanation: "It always points at the top of the stack and moves automatically on every push and pop, which is how function calls and returns work."
    },
    {
        question: "In the Intel CPU registers, what does BP stand for?",
        options: ["Base Pointer", "Binary Pointer", "Buffer Pointer", "Byte Pointer", "None of the Other Choices"],
        answer: "Base Pointer",
        explanation: "It marks a fixed reference point inside the current stack frame, so parameters and local variables can be reached even as SP keeps moving."
    },
    {
        question: "Which of the following best describes the IP register?",
        options: ["The Instruction Pointer, which serves as the program counter", "The interrupt priority level", "The input port selector", "The index pointer for arrays", "None of the Other Choices"],
        answer: "The Instruction Pointer, which serves as the program counter",
        explanation: "It holds the address of the next instruction to execute. Jumps and calls work by changing IP, which is what makes branching possible."
    },

    // Part 12: EFLAGS
    {
        question: "EFLAGS is a register found in which unit of the CPU?",
        options: ["ALU", "FPU", "Control Unit", "Cache Controller", "None of the Other Choices"],
        answer: "ALU",
        explanation: "The ALU sets these flag bits as a side effect of each arithmetic or logic operation, and conditional jumps then read them."
    },
    {
        question: "Which flag occupies bit 0 of the EFLAGS register?",
        options: ["CF, the Carry flag", "ZF, the Zero flag", "SF, the Sign flag", "OF, the Overflow flag", "None of the Other Choices"],
        answer: "CF, the Carry flag",
        explanation: "Set when an unsigned result is too large to fit and carries out of the top bit. Learn the bit positions as 0, 6, 7, 11."
    },
    {
        question: "Which flag occupies bit 6 of the EFLAGS register?",
        options: ["ZF, the Zero flag", "CF, the Carry flag", "SF, the Sign flag", "PF, the Parity flag", "None of the Other Choices"],
        answer: "ZF, the Zero flag",
        explanation: "Set when the result is exactly zero. Comparing two values works by subtracting them and checking whether ZF came on."
    },
    {
        question: "Which flag occupies bit 7 of the EFLAGS register?",
        options: ["SF, the Sign flag", "ZF, the Zero flag", "CF, the Carry flag", "OF, the Overflow flag", "None of the Other Choices"],
        answer: "SF, the Sign flag",
        explanation: "It simply copies the most significant bit of the result, which in two's complement means 1 for negative. Note it sits right after ZF at bit 6."
    },
    {
        question: "Which flag occupies bit 11 of the EFLAGS register?",
        options: ["OF, the Overflow flag", "SF, the Sign flag", "DF, the Direction flag", "IF, the Interrupt flag", "None of the Other Choices"],
        answer: "OF, the Overflow flag",
        explanation: "Overflow is the signed counterpart of Carry: it fires when a signed result no longer fits, such as adding two positives and getting a negative."
    },

    // Part 13: Quick Recall - Firsts
    {
        question: "Which of the following is the first mechanical calculator, together with its inventor and year?",
        options: ["Pascaline, by Blaise Pascal, 1642", "Arithmometer, by Thomas de Colmar, 1820", "Step Reckoner, by Leibniz, 1673", "Difference Engine, by Charles Babbage, 1822", "None of the Other Choices"],
        answer: "Pascaline, by Blaise Pascal, 1642",
        explanation: "1642 is the earliest date offered, and it also opens the Mechanical Era. It could only add and subtract."
    },
    {
        question: "Which of the following is the first commercially successful calculator, together with its inventor and year?",
        options: ["Arithmometer, by Thomas de Colmar, 1820", "Pascaline, by Blaise Pascal, 1642", "Step Reckoner, by Leibniz, 1673", "HP 9100A, by Hewlett-Packard, 1968", "None of the Other Choices"],
        answer: "Arithmometer, by Thomas de Colmar, 1820",
        explanation: "Commercially successful, not first — the Pascaline came 178 years earlier but was never mass produced. The Arithmometer sold from 1851 to 1915."
    },
    {
        question: "Which of the following is the first electronic general-purpose digital computer, together with its year?",
        options: ["ENIAC, 1945", "ABC, 1942", "UNIVAC I, 1951", "Harvard Mark I, 1944", "None of the Other Choices"],
        answer: "ENIAC, 1945",
        explanation: "General-purpose is the deciding phrase. The ABC was electronic and earlier but could only solve linear equations, and the Harvard Mark I was electromechanical."
    },
    {
        question: "Which of the following is the first machine built on the stored-program architecture, together with its designer?",
        options: ["IAS Machine, by Jon Von Neumann", "ENIAC, by Eckert and Mauchly", "Harvard Mark I, by Howard Aiken", "Colossus Mark 1, by Tommy Flowers", "None of the Other Choices"],
        answer: "IAS Machine, by Jon Von Neumann",
        explanation: "Stored program means instructions live in the same memory as data. ENIAC had to be rewired by hand for each new job."
    },
    {
        question: "Which of the following is the first computer virus on DOS, together with its year?",
        options: ["Brain, 1986", "ILOVEYOU, 2000", "Melissa, 1999", "Morris Worm, 1988", "None of the Other Choices"],
        answer: "Brain, 1986",
        explanation: "Written by two brothers in Pakistan and spread by floppy disk. The others are all much later, and the Morris Worm was an Internet worm rather than a DOS virus."
    },
    {
        question: "Which of the following is the first computer to run a computer game?",
        options: ["IBM 7094", "IBM 709", "Xerox Alto", "Altair 8800", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "It was the PDP-1 of 1959, which ran Spacewar! in 1962. It could do so because it had the first CRT monitor. The IBM 7094 is the machine that sang Daisy Bell."
    },

    // Part 13: Numbers Worth Memorizing
    {
        question: "How many vacuum tubes did the ENIAC have?",
        options: ["18,000", "10,000", "25,000", "5,000", "None of the Other Choices"],
        answer: "18,000",
        explanation: "About 18,000 tubes drawing 150 kilowatts. Tubes failed so often that keeping the machine running was a full-time job."
    },
    {
        question: "How many decimal digits could the Store of the Analytical Engine hold?",
        options: ["1,000 numbers of 40 decimal digits", "500 numbers of 20 decimal digits", "100 numbers of 10 decimal digits", "10,000 numbers of 8 decimal digits", "None of the Other Choices"],
        answer: "1,000 numbers of 40 decimal digits",
        explanation: "Roughly 16.6 kilobytes made of brass gears. Careful with the wording: the Analytical Engine counts in decimal digits, while the IAS Machine uses 40 bits."
    },
    {
        question: "How much RAM did the base model of the Altair 8800 have?",
        options: ["256 bytes", "1 KB", "4 KB", "64 bytes", "None of the Other Choices"],
        answer: "256 bytes",
        explanation: "Bytes, not kilobytes. With no keyboard or screen either, you programmed it by flicking front-panel switches."
    },
    {
        question: "How many units of the PDP-11 were sold?",
        options: ["Over 600,000", "Over 100,000", "Over 1 million", "Over 50,000", "None of the Other Choices"],
        answer: "Over 600,000",
        explanation: "DEC's best seller by far, and the machine UNIX and the C language were developed on at Bell Labs."
    }
];
