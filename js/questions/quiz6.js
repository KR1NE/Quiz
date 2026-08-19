// Quiz 6: Parts 10-11 - Companies/Platforms & Modern Topics (AI, Chat, Social Media)
const quiz6Questions = [
    // Part 10: Yahoo
    {
        question: "Who founded Yahoo in 1994?",
        options: ["Jerry Yang and David Filo", "Larry Page and Sergey Brin", "Bill Gates and Paul Allen", "Mark Zuckerberg"],
        answer: "Jerry Yang and David Filo"
    },
    {
        question: "What does YAHOO stand for?",
        options: ["Yet Another Hierarchical Officious Oracle", "Your Access to Help Online", "Young Americans Have Online Options", "You Always Have Open Opportunities"],
        answer: "Yet Another Hierarchical Officious Oracle"
    },
    {
        question: "Yahoo considered acquiring which company in 2002 for around $3B?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
        answer: "Google"
    },
    {
        question: "In 2006, Yahoo offered roughly how much for Facebook?",
        options: ["$1 billion", "$500 million", "$5 billion", "$10 billion"],
        answer: "$1 billion"
    },
    {
        question: "Microsoft offered to buy Yahoo in 2008 for roughly how much?",
        options: ["$44.6B to $47.5B", "$10B", "$100B", "$1B"],
        answer: "$44.6B to $47.5B"
    },
    {
        question: "Who acquired Yahoo's core business in 2017?",
        options: ["Verizon", "AT&T", "Google", "Microsoft"],
        answer: "Verizon"
    },

    // Part 10: Google
    {
        question: "What was Google originally called as a Stanford research project?",
        options: ["BackRub", "SearchBot", "WebCrawler", "InfoSeek"],
        answer: "BackRub"
    },
    {
        question: "Who founded Google?",
        options: ["Larry Page and Sergey Brin", "Jerry Yang and David Filo", "Steve Jobs and Steve Wozniak", "Bill Gates and Paul Allen"],
        answer: "Larry Page and Sergey Brin"
    },
    {
        question: "When was Google incorporated?",
        options: ["1998", "1994", "2000", "2004"],
        answer: "1998"
    },
    {
        question: "Who founded Android Inc. in 2003?",
        options: ["Andy Rubin, Rich Miner, Nick Sears, Chris White", "Larry Page and Sergey Brin", "Steve Jobs", "Mark Zuckerberg"],
        answer: "Andy Rubin, Rich Miner, Nick Sears, Chris White"
    },
    {
        question: "When did Google acquire Android?",
        options: ["2005", "2003", "2008", "2010"],
        answer: "2005"
    },
    {
        question: "Who founded YouTube in 2004?",
        options: ["Chad Hurley, Steve Chen, Jawed Karim (former PayPal employees)", "Larry Page and Sergey Brin", "Mark Zuckerberg", "Jack Dorsey"],
        answer: "Chad Hurley, Steve Chen, Jawed Karim (former PayPal employees)"
    },
    {
        question: "When did Google acquire YouTube?",
        options: ["2006", "2004", "2008", "2010"],
        answer: "2006"
    },

    // Part 11: History of AI
    {
        question: "Who published 'Computing Machinery and Intelligence' introducing the Turing Test in 1950?",
        options: ["Alan Turing", "John McCarthy", "Marvin Minsky", "Claude Shannon"],
        answer: "Alan Turing"
    },
    {
        question: "Where and when was the term 'Artificial Intelligence' coined?",
        options: ["Dartmouth Conference, 1956", "MIT, 1950", "Stanford, 1960", "CERN, 1970"],
        answer: "Dartmouth Conference, 1956"
    },
    {
        question: "When was OpenAI founded?",
        options: ["2015", "2010", "2018", "2020"],
        answer: "2015"
    },
    {
        question: "When was ChatGPT launched?",
        options: ["November 2022", "January 2020", "March 2023", "June 2021"],
        answer: "November 2022"
    },
    {
        question: "How many users did ChatGPT reach in 5 days?",
        options: ["1 million", "100,000", "10 million", "500,000"],
        answer: "1 million"
    },
    {
        question: "How many parameters does GPT-3 have?",
        options: ["175 billion", "100 billion", "1 trillion", "50 billion"],
        answer: "175 billion"
    },
    {
        question: "When did Google's AlphaGo beat Lee Sedol?",
        options: ["2016", "2014", "2018", "2020"],
        answer: "2016"
    },
    {
        question: "When was DeepMind founded and where?",
        options: ["2010 in London", "2015 in San Francisco", "2005 in Boston", "2018 in Beijing"],
        answer: "2010 in London"
    },
    {
        question: "What does GPT stand for?",
        options: ["Generative Pre-trained Transformer", "General Processing Technology", "Global Pattern Tracking", "Graphical Processing Tool"],
        answer: "Generative Pre-trained Transformer"
    },
    {
        question: "Anthropic, creators of Claude, was founded by whom?",
        options: ["Ex-OpenAI researchers in 2021", "Google engineers in 2018", "Meta researchers in 2020", "Microsoft team in 2019"],
        answer: "Ex-OpenAI researchers in 2021"
    },

    // Part 11: Chat and Messaging
    {
        question: "What was ELIZA (1966)?",
        options: ["Early chatbot using pattern matching", "First email system", "First web browser", "First social network"],
        answer: "Early chatbot using pattern matching"
    },
    {
        question: "What was IRC?",
        options: ["Internet Relay Chat - archetypal real-time text chat", "Internal Resource Control", "Internet Resource Center", "Integrated Routing Connection"],
        answer: "Internet Relay Chat - archetypal real-time text chat"
    },
    {
        question: "Who released Zoom in 2011?",
        options: ["Eric Yuan, a former Cisco WebEx engineer", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"],
        answer: "Eric Yuan, a former Cisco WebEx engineer"
    },

    // Part 11: Social Media
    {
        question: "What was the first modern social network (1997)?",
        options: ["SixDegrees.com", "Friendster", "MySpace", "Facebook"],
        answer: "SixDegrees.com"
    },
    {
        question: "When was Facebook launched?",
        options: ["February 2004", "2003", "2005", "2006"],
        answer: "February 2004"
    },
    {
        question: "Where was Facebook launched?",
        options: ["Harvard", "Stanford", "MIT", "Yale"],
        answer: "Harvard"
    },
    {
        question: "When was Twitter founded?",
        options: ["2006", "2004", "2008", "2010"],
        answer: "2006"
    },
    {
        question: "When was Instagram founded?",
        options: ["2010", "2008", "2012", "2006"],
        answer: "2010"
    },
    {
        question: "TikTok is owned by which company?",
        options: ["ByteDance", "Meta", "Google", "Tencent"],
        answer: "ByteDance"
    }
];
