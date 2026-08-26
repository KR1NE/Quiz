// Quiz 5: Parts 8-9 - Fourth Generation (1971+) & Timelines
// Professor-style format: 5 choices (a-e) with a "None of the Other Choices" option
const quiz5Questions = [
    // Part 8: Fourth Generation - Microprocessors
    {
        question: "Which of the following is the first microprocessor?",
        options: ["Intel 4004", "Intel 8008", "Intel 8080", "Zilog Z80", "None of the Other Choices"],
        answer: "Intel 4004",
        explanation: "It put an entire CPU on one chip for the first time, which is what starts the Fourth Generation. The 8008, 8080 and Z80 all come after it."
    },
    {
        question: "In which year was the Intel 4004 released?",
        options: ["1971", "1972", "1974", "1969", "None of the Other Choices"],
        answer: "1971",
        explanation: "1971 is the boundary year of the whole subject: the Third Generation ends and the Fourth Generation begins with this chip."
    },
    {
        question: "The Intel 4004 was a microprocessor of which word size?",
        options: ["4-bit", "8-bit", "16-bit", "32-bit", "None of the Other Choices"],
        answer: "4-bit",
        explanation: "The 4 in the name is the clue. Trace the doubling from here: 4004 is 4-bit, 8008 and 8080 are 8-bit, 8086 is 16-bit, i386 is 32-bit."
    },
    {
        question: "The Intel 8008 was originally called the '1201' and was commissioned by which company and for which machine?",
        options: ["CTC, for the Datapoint 2200", "IBM, for the IBM PC", "Apple, for the Macintosh", "Hewlett-Packard, for its calculators", "None of the Other Choices"],
        answer: "CTC, for the Datapoint 2200",
        explanation: "CTC rejected the finished chip as too slow, so Intel sold it on the open market — and accidentally created the microprocessor industry."
    },
    {
        question: "How much memory could the Intel 8008 address?",
        options: ["16 KB", "64 KB", "4 KB", "1 MB", "None of the Other Choices"],
        answer: "16 KB",
        explanation: "Its 14-bit address bus caps it at 16 KB. The later 8080 widened this to 16 bits, giving 64 KB."
    },
    {
        question: "In which year was the Intel 8080 released?",
        options: ["1974", "1971", "1978", "1980", "None of the Other Choices"],
        answer: "1974",
        explanation: "It is the chip inside the Altair 8800 of 1975, which is what makes 1974 the year the personal computer became possible."
    },
    {
        question: "Was the Intel 8080 binary compatible with the Intel 8008?",
        options: ["No, it extended the 8008 but was not binary compatible with it", "Yes, it was fully binary compatible", "Yes, but only for arithmetic instructions", "It used an entirely unrelated architecture", "None of the Other Choices"],
        answer: "No, it extended the 8008 but was not binary compatible with it",
        explanation: "Source code could be translated, but existing 8008 machine code would not run unchanged. Intel only committed to strict backward compatibility from the 8086 onward."
    },
    {
        question: "Which of the following is the first commercially available microprocessor-based computer?",
        options: ["Micral N", "Altair 8800", "Apple I", "IBM PC", "None of the Other Choices"],
        answer: "Micral N",
        explanation: "A French machine of 1973 built on the Intel 8008, two years before the Altair. The Altair gets the fame, but the Micral N came first."
    },
    {
        question: "The Altair 8800 is credited with sparking which of the following?",
        options: ["The microcomputer revolution", "The Internet", "The artificial intelligence boom", "The social media age", "None of the Other Choices"],
        answer: "The microcomputer revolution",
        explanation: "Its 1975 magazine cover convinced hobbyists a personal computer was within reach. It is also what prompted William Bill Gates and Paul Allen to found Microsoft."
    },
    {
        question: "The bus of the Altair 8800 became which industry standard?",
        options: ["S-100 bus", "ISA bus", "PCI bus", "Universal Serial Bus", "None of the Other Choices"],
        answer: "S-100 bus",
        explanation: "Named for its 100 signal lines. It was the first time third parties could build expansion cards for someone else's computer."
    },
    {
        question: "Which of the following is the first operating system for microcomputers, and who created it?",
        options: ["CP/M, by Gary Kildall", "MS-DOS, by William Bill Gates", "UNIX, by Ken Thompson", "Apple DOS, by Steve Wozniak", "None of the Other Choices"],
        answer: "CP/M, by Gary Kildall",
        explanation: "CP/M came first and MS-DOS was closely modelled on it. IBM approached Kildall before Microsoft, and his failure to close that deal is famous."
    },
    {
        question: "Which of the following is the first among the products of Microsoft?",
        options: ["BASIC programming language", "MS-DOS", "MS Windows", "MS Office", "None of the Other Choices"],
        answer: "BASIC programming language",
        explanation: "Altair BASIC in 1975 came six years before MS-DOS. Microsoft began as a language company, not an operating system company."
    },
    {
        question: "Who founded Apple, and in which year?",
        options: ["Steve Jobs and Steve Wozniak, 1976", "William Bill Gates and Paul Allen, 1975", "Ken Olsen and Harlan Anderson, 1957", "Jerry Yang and David Filo, 1994", "None of the Other Choices"],
        answer: "Steve Jobs and Steve Wozniak, 1976",
        explanation: "Microsoft in 1975, Apple in 1976 — one year apart, and often swapped in exams. Ronald Wayne was a third Apple founder who sold his share almost immediately."
    },
    {
        question: "Which of the following is considered to be the first electronic spreadsheet?",
        options: ["VisiCalc", "Lotus 1-2-3", "Google Sheets", "Microsoft Excel", "None of the Other Choices"],
        answer: "VisiCalc",
        explanation: "Released in 1979 for the Apple II. Lotus 1-2-3 and Excel are its successors, not its predecessors."
    },
    {
        question: "VisiCalc turned the microcomputer from a hobbyist device into which of the following?",
        options: ["A serious business tool", "A gaming console", "A scientific instrument", "A military system", "None of the Other Choices"],
        answer: "A serious business tool",
        explanation: "It was the first killer app — software so useful that people bought the computer just to run it. Apple II sales climbed on its back."
    },
    {
        question: "Which of the following is the first electronic word processor on a personal computer?",
        options: ["WordStar", "WordPerfect", "Microsoft Word", "Google Docs", "None of the Other Choices"],
        answer: "WordStar",
        explanation: "Released in 1978 for CP/M. Pair it with VisiCalc: the spreadsheet and the word processor together made the PC a business machine."
    },
    {
        question: "Where did Steve Jobs see the graphical user interface that inspired the Macintosh?",
        options: ["Xerox PARC", "IBM Research", "Bell Labs", "MIT Media Lab", "None of the Other Choices"],
        answer: "Xerox PARC",
        explanation: "Xerox invented the GUI, the mouse and Ethernet but failed to commercialize them. Jobs saw a 1979 demonstration and built the Lisa and Macintosh from it."
    },
    {
        question: "Which computer had the first mouse?",
        options: ["Xerox Alto", "Apple Macintosh", "Apple Lisa", "IBM PC", "None of the Other Choices"],
        answer: "Xerox Alto",
        explanation: "The Alto of 1973 had the mouse and the GUI a decade before the Macintosh made them famous."
    },
    {
        question: "In which year was the IBM PC released?",
        options: ["1981", "1979", "1984", "1976", "None of the Other Choices"],
        answer: "1981",
        explanation: "Its open architecture invited clones, which is why PC-compatible machines rather than IBM itself came to dominate. 1984 is the Macintosh."
    },
    {
        question: "Which of the following is the first operating system on the IBM PC?",
        options: ["MS-DOS", "CP/M", "Windows 1.0", "Windows 3.0", "None of the Other Choices"],
        answer: "MS-DOS",
        explanation: "This deal made Microsoft. Windows was not an operating system yet in 1981 — early versions ran on top of MS-DOS."
    },

    // Part 9: Timelines - Intel and IBM
    {
        question: "In which year was the Intel 8086/8088 released?",
        options: ["1978", "1974", "1981", "1985", "None of the Other Choices"],
        answer: "1978",
        explanation: "The 8086 started the x86 line still used today. Note it is released in 1978 but only reaches the IBM PC in 1981."
    },
    {
        question: "Which processor was used in the original IBM PC?",
        options: ["Intel 8088", "Intel 8086", "Intel 80286", "Intel 4004", "None of the Other Choices"],
        answer: "Intel 8088",
        explanation: "The 8088, not the 8086. It was the same 16-bit chip with an 8-bit external bus, which made the surrounding hardware cheaper to build."
    },
    {
        question: "Which Intel processor introduced 32-bit computing?",
        options: ["Intel i386", "Intel 80286", "Intel Pentium", "Intel 8086", "None of the Other Choices"],
        answer: "Intel i386",
        explanation: "Released in 1985. The 80286 was still 16-bit, and the Pentium came later while remaining 32-bit."
    },
    {
        question: "In which year was Windows 95 released?",
        options: ["1995", "1993", "1998", "2000", "None of the Other Choices"],
        answer: "1995",
        explanation: "Microsoft named these releases after their year, so 95, 98 and 2000 give away their own answers."
    },
    {
        question: "Which version of Windows first came with a 64-bit version?",
        options: ["Windows XP", "Windows 95", "Windows 98", "Windows Vista", "None of the Other Choices"],
        answer: "Windows XP",
        explanation: "XP shipped a 64-bit edition in 2001. Vista is the trap — it made 64-bit common, but XP got there first."
    },

    // Part 9: Internet Timeline
    {
        question: "The first concept of globally interconnected computers, which initiated the Internet, was called what?",
        options: ["Galactic Network Concept", "Packet Switching Concept", "DARPA Concept", "ARPANET Concept", "None of the Other Choices"],
        answer: "Galactic Network Concept",
        explanation: "It is the idea that came first; packet switching is the technique that made it work, and ARPANET is the network actually built from it."
    },
    {
        question: "Who conceived the Galactic Network concept in 1962?",
        options: ["J.C.R. Licklider", "Vint Cerf", "Tim Berners-Lee", "Leonard Kleinrock", "None of the Other Choices"],
        answer: "J.C.R. Licklider",
        explanation: "Learn the Internet chain in order: Licklider had the vision, Kleinrock supplied packet switching, Cerf and Kahn wrote TCP/IP, Berners-Lee added the Web."
    },
    {
        question: "Who developed the theory of packet switching from 1961 to 1964?",
        options: ["Leonard Kleinrock", "J.C.R. Licklider", "Tim Berners-Lee", "Robert E. Kahn", "None of the Other Choices"],
        answer: "Leonard Kleinrock",
        explanation: "Packet switching chops a message into pieces that travel separately and reassemble at the other end, so no dedicated circuit is needed."
    },
    {
        question: "Who developed TCP/IP and is therefore called the Father of the Internet?",
        options: ["Vint Cerf and Robert E. Kahn", "Tim Berners-Lee", "J.C.R. Licklider", "Leonard Kleinrock", "None of the Other Choices"],
        answer: "Vint Cerf and Robert E. Kahn",
        explanation: "TCP/IP is the common language that let separate networks join into one Internet. Berners-Lee is Father of the Web, a different title."
    },
    {
        question: "Who developed Ethernet at Xerox PARC in 1973?",
        options: ["Bob Metcalfe", "Vint Cerf", "Tim Berners-Lee", "Leonard Kleinrock", "None of the Other Choices"],
        answer: "Bob Metcalfe",
        explanation: "Another Xerox PARC invention, alongside the GUI and the mouse. Ethernet handles the local network; TCP/IP connects those networks together."
    },
    {
        question: "Who proposed the World Wide Web in 1989, and at which institution?",
        options: ["Tim Berners-Lee at CERN", "Vint Cerf at DARPA", "Marc Andreessen at NCSA", "Larry Page at Stanford", "None of the Other Choices"],
        answer: "Tim Berners-Lee at CERN",
        explanation: "The Web is not the Internet — it is an application running on top of it, arriving twenty years after ARPANET. Andreessen wrote the Mosaic browser at NCSA."
    },
    {
        question: "Which of the following is the first commercial web browser?",
        options: ["Internet Explorer", "Mosaic", "Opera", "Lynx", "None of the Other Choices"],
        answer: "None of the Other Choices",
        explanation: "It was Netscape Navigator in 1994. Mosaic came earlier but was free academic software, and Internet Explorer was Microsoft's later answer to Netscape."
    }
];
