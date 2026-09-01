// Theology: Understanding Theology
// Source of truth: UNDERSTANDING-THEOLOGY-EXAM-REVIEWER.pdf (24 pages, sections I-XXVIII)
// Test 1: modified multiple choice - the student enters how many choices are
//         correct and ticks exactly those choices. Choice E ("None of the above")
//         is added by the engine, so each question lists only A-D here.
//         `answer` holds the correct letters; ["E"] means none of A-D is correct.
// Test 2: ordinary True or False.

const theologyTest1 = [
    {
        type: "multi-select",
        question: "According to the reviewer, which of the following are true of science?",
        options: [
            "The word comes from the Latin scientia, meaning knowledge.",
            "It is described as the systematic study of the physical and natural world.",
            "Observation, experiment and reasoning are among the processes it uses.",
            "It is the branch of knowledge the Middle Ages called the \"Queen of All Sciences\"."
        ],
        answer: ["A", "B", "C"],
        explanation: "Science is scientia, the systematic study of the physical and natural world through observation, experiment, reasoning and systematic processes. It was theology, not science, that the Middle Ages called the Queen of All Sciences."
    },
    {
        type: "multi-select",
        question: "Which statements correctly present William of Auxerre's explanation of theology?",
        options: [
            "Theology has principles and conclusions, just as other sciences do.",
            "Theology's principles are the conclusions it reaches through reasoning.",
            "Theology's principles are the articles of faith.",
            "The articles of faith were worked out by human beings using reason alone."
        ],
        answer: ["A", "C"],
        explanation: "William of Auxerre's point is that theology is structured like a science: it has principles and conclusions, and its principles are the articles of faith. The trap is direction - the articles of faith are the starting point, not the conclusion, and they come through divine revelation rather than unaided human reason."
    },
    {
        type: "multi-select",
        question: "Which are reasons the reviewer gives for theology being regarded as the \"Queen of All Sciences\"?",
        options: [
            "It dealt with both the natural world and the divine world.",
            "It addressed questions such as why we exist and what the purpose of human life is.",
            "It was considered the highest form of knowledge during the Renaissance.",
            "The strong relationship between the Church and education during the Middle Ages."
        ],
        answer: ["A", "B", "D"],
        explanation: "Theology earned the title because it covered both the natural and the divine, tackled the largest questions, and grew alongside a Church that controlled education. The period is the Middle Ages, not the Renaissance."
    },
    {
        type: "multi-select",
        question: "Which are correct about the word \"theology\" and its origin?",
        options: [
            "Theos is the Greek word for God.",
            "Logos can mean study, science, reasoned discourse, or Word.",
            "The term was first used by Thomas Aquinas.",
            "Plato used the term in The Republic to refer to \"discourse on god\"."
        ],
        answer: ["A", "B", "D"],
        explanation: "Theology is theos plus logos - discourse about God. The reviewer credits the first use to Plato in the 4th century BC in The Republic. Aquinas comes much later and is associated with theology's scientific character, not with coining the word."
    },
    {
        type: "multi-select",
        question: "According to the reviewer's proposed definition, theology is which of the following?",
        options: [
            "A rational discourse and prayerful reflection on the mystery of God.",
            "Concerned with God's relationship with humanity and creation.",
            "Revealed through salvation history.",
            "Founded on Sacred Scripture and Church teachings."
        ],
        answer: ["A", "B", "C", "D"],
        explanation: "All four belong to the single definition the reviewer proposes. Notice that theology is not simply \"studying God\" - the definition deliberately includes prayer, revelation, human relationship and creation."
    },
    {
        type: "multi-select",
        question: "Which are correct about the etymology and general meaning of faith?",
        options: [
            "The Latin fides means \"to lift the veil\".",
            "The Greek pistis carries the sense of faith, belief, conviction and assurance.",
            "The Latin fidere means \"to trust\".",
            "The reviewer summarises faith as certainty produced by proof."
        ],
        answer: ["B", "C"],
        explanation: "Fides simply means faith and fidere means to trust - the reviewer's shorthand is Faith = TRUST. \"To lift the veil\" is revelare, the root of revelation, and faith concerns what is not directly seen or proven."
    },
    {
        type: "multi-select",
        question: "Which correctly describe the relationship between revelation and faith?",
        options: [
            "Revelation comes from the Latin revelare, meaning \"to lift the veil\".",
            "Faith is God's response to human searching.",
            "Revelation is the human being's disclosure of themselves to God.",
            "Faith is the free human response to God's disclosure."
        ],
        answer: ["A", "D"],
        explanation: "The direction matters: God reveals, and the human being responds through faith. Options B and C reverse who is doing the revealing and who is doing the responding."
    },
    {
        type: "multi-select",
        question: "Which are among the five characteristics of faith presented in the reviewer?",
        options: [
            "Faith is a grace.",
            "Faith is a human act.",
            "Faith is certain.",
            "Faith seeks understanding."
        ],
        answer: ["A", "B", "C", "D"],
        explanation: "All four are listed, and the fifth is that faith is a free human response. Faith being both a grace and a human act is not a contradiction - it is a gift from God that we then answer with concrete action."
    },
    {
        type: "multi-select",
        question: "A student says: \"I believe, and precisely because I believe I want to study and understand my faith more deeply.\" Which characteristic of faith does this best illustrate?",
        options: [
            "Faith is a grace.",
            "Faith is certain.",
            "Faith seeks understanding.",
            "Faith is a free human response."
        ],
        answer: ["C"],
        explanation: "This is exactly the reviewer's formulation of the fourth characteristic: not \"I believe, so I do not need to understand\" but \"I believe, therefore I want to understand more\". The other three characteristics are real, but nothing in the student's statement illustrates them."
    },
    {
        type: "multi-select",
        question: "Which are among the things the reviewer says faith IS?",
        options: [
            "Faith is trust, expressed by the term fides qua.",
            "Faith is opposed to reason.",
            "Faith is ecclesial and communal - \"I believe\" exists within \"We believe\".",
            "Faith is dynamic and ongoing; it can grow, struggle, mature and encounter doubts."
        ],
        answer: ["A", "C", "D"],
        explanation: "Fides qua is the faith by which we believe - personal trust rather than stored religious information. The reviewer is explicit that faith is NOT opposed to reason: faith seeks truth and tries to understand it, so the two work together."
    },
    {
        type: "multi-select",
        question: "Which of the following attitudes are contrary to authentic faith as the reviewer describes it?",
        options: [
            "A person performs a religious practice in a fixed way, believing this guarantees the outcome they want.",
            "A person can name every doctrine of their religion, but this never changes how they live.",
            "A person refuses to ask any question at all about what they believe.",
            "A person insists their faith is only between them and God and concerns no one else."
        ],
        answer: ["A", "B", "C", "D"],
        explanation: "Each one matches an item on the reviewer's list of what faith is NOT: magic or superstition, mere intellectual assent, blind belief, and private individualism. Authentic faith engages reason and shows itself in how a person lives and relates to others."
    },
    {
        type: "multi-select",
        question: "According to the reviewer, in which of the following does authentic faith consist?",
        options: [
            "Believing without engaging reason at all.",
            "Memorising religious teachings as the essence of faith.",
            "Using religious practice to guarantee a desired result.",
            "Keeping faith entirely private and unconnected from society."
        ],
        answer: ["E"],
        explanation: "None of the above. All four are drawn from the reviewer's list of what faith is NOT - blind belief, mere intellectual assent, magic or superstition, and private individualism. When every choice is wrong, E is the answer."
    },
    {
        type: "multi-select",
        question: "Which are correct about James W. Fowler III?",
        options: [
            "He was an American theologian and professor who studied faith development.",
            "His book Stages of Faith was published in 1981.",
            "His theory was influenced by Jean Piaget's work on moral development.",
            "He viewed faith as a form of meaning-making."
        ],
        answer: ["A", "B", "D"],
        explanation: "The two influences are easy to swap: Piaget contributed cognitive development and Kohlberg contributed moral development. Fowler's own contribution is to treat faith as meaning-making - how we answer what our life means and how we are connected to others."
    },
    {
        type: "multi-select",
        question: "Which are correct about Fowler's stages of faith?",
        options: [
            "The first stage is Intuitive-Projective Faith, with no stage before it.",
            "Mythic-Literal Faith comes before Synthetic-Conventional Faith.",
            "The final stage is Conjunctive Faith.",
            "Individuative-Reflective Faith comes before Conjunctive Faith."
        ],
        answer: ["B", "D"],
        explanation: "The order runs pre-stage Undifferentiated, then Intuitive-Projective, Mythic-Literal, Synthetic-Conventional, Individuative-Reflective, Conjunctive and finally Universalizing. Two traps here: there is a pre-stage before stage 1, and Conjunctive is the fifth stage, not the last."
    },
    {
        type: "multi-select",
        question: "A young person takes the stories of their religious tradition literally, understanding them mainly as straightforward accounts of what happened. Which of Fowler's stages does this best describe?",
        options: [
            "Intuitive-Projective Faith",
            "Mythic-Literal Faith",
            "Individuative-Reflective Faith",
            "Universalizing Faith"
        ],
        answer: ["B"],
        explanation: "The reviewer's shorthand for the progression is imagination, then literal stories, then group beliefs, then personal reflection. Taking the stories literally places this person at stage 2, Mythic-Literal Faith."
    },
    {
        type: "multi-select",
        question: "Which correctly describe the role of faith in theology?",
        options: [
            "Faith is the foundation of theological inquiry.",
            "Faith replaces reason, which has no role in theology.",
            "Faith acts as the bridge between reason and revelation.",
            "Faith is needed only once human reason has exhausted every question."
        ],
        answer: ["A", "C"],
        explanation: "Faith is both the foundation of theological inquiry and the bridge that lets reason engage what God has revealed. It does not replace reason, and it is not a last resort - the order is revelation, then faith, then reason and reflection, then theology."
    },
    {
        type: "multi-select",
        question: "In the theology process, praxis means putting theological understanding into practice. Which of the following situations are examples of praxis as the reviewer lists it?",
        options: [
            "A believer lets what they have come to understand shape how they live day to day.",
            "A believer takes part in the mission of their community.",
            "A believer works for justice on behalf of those who are treated unfairly.",
            "A believer joins in the worship of their community."
        ],
        answer: ["A", "B", "C", "D"],
        explanation: "The reviewer names four forms of praxis - life, mission, justice and worship - and all four situations match one of them. Praxis is the step where theology stops being an idea and becomes something lived."
    },
    {
        type: "multi-select",
        question: "Which are correct about the theology process as the reviewer sets it out?",
        options: [
            "It begins with revelation and the human response of faith.",
            "It ends permanently once theology has been articulated.",
            "Discernment comes before theological reflection.",
            "New human experience leads back into further reflection, making it a cycle."
        ],
        answer: ["A", "D"],
        explanation: "The full sequence is revelation, faith, theological questions, reflection, discernment, theology, praxis, new experience - and the new experience feeds back into reflection. So reflection comes before discernment, and the process never simply stops."
    },
    {
        type: "multi-select",
        question: "Which are correct about Thomas Aquinas as presented in the reviewer?",
        options: [
            "He was an Italian Dominican friar and a Doctor of the Church.",
            "He held that theology is a science of faith.",
            "He argued that sacred doctrine proceeds from principles established by a higher science, namely God's knowledge.",
            "He was the Archbishop of Canterbury."
        ],
        answer: ["A", "B", "C"],
        explanation: "Aquinas was an Italian Dominican friar, priest, philosopher, theologian and Doctor of the Church who treated theology as a science of faith receiving its principles from God's own knowledge. The Archbishop of Canterbury was Anselm."
    },
    {
        type: "multi-select",
        question: "Which are correct about theology as a probable and as a subalternate science?",
        options: [
            "Scientia probabilis means theology offers the same absolute certainty as the empirical sciences.",
            "Theology is called a probable science because divine mysteries cannot be completely exhausted by human understanding.",
            "Subalternation refers to where theology's principles come from.",
            "Calling theology subalternate means it is inferior and less valuable than the other sciences."
        ],
        answer: ["B", "C"],
        explanation: "Probable science means theology gives credible, reasoned understanding without claiming to exhaust divine mystery. Subalternate is about the source of its principles - God's knowledge through revelation - and the reviewer states plainly that it does not mean inferior."
    },
    {
        type: "multi-select",
        question: "Which are correct about Richard McBrien and Thomas Groome?",
        options: [
            "McBrien was a Catholic priest and theology professor at the University of Notre Dame.",
            "Groome held that knowing God is mainly a matter of holding correct information about God.",
            "McBrien defined theology as knowledge of God that need not affect how a person lives.",
            "Groome said that, biblically, knowing God is dynamic, experiential and relational."
        ],
        answer: ["A", "D"],
        explanation: "Both thinkers push in the same direction: knowing God is not information storage. McBrien speaks of knowledge of God expressed through loving obedience to God's will, and Groome insists that without loving action, God is not known."
    },
    {
        type: "multi-select",
        question: "Which of the following statements about Anselm of Canterbury are correct?",
        options: [
            "His principle fides quaerens intellectum means \"understanding seeking faith\".",
            "He taught that a person must fully understand before they can believe.",
            "He was a Dominican friar and a Doctor of the Church.",
            "He was an Italian priest who wrote The Republic."
        ],
        answer: ["E"],
        explanation: "None of the above. Fides quaerens intellectum is faith seeking understanding, and the order runs the other way: I believe, therefore I seek deeper understanding. Anselm was a Benedictine monk, abbot and Archbishop of Canterbury - the Dominican Doctor of the Church is Aquinas, and The Republic is Plato's."
    },
    {
        type: "multi-select",
        question: "Which are correct about theologizing?",
        options: [
            "Theologizing is the process of doing theology.",
            "It is purely intellectual, and its goal is information about God.",
            "It is prayerful and critical reflection on personal experience in relation to faith.",
            "It is enlightened by Sacred Scripture, Church teachings and Tradition."
        ],
        answer: ["A", "C", "D"],
        explanation: "Theologizing asks how we can make sense of the mysteries of life and faith, working from joys, sorrows, successes and failures. Its goal is not intellectual understanding alone but an encounter with life and with God that deepens the relationship."
    },
    {
        type: "multi-select",
        question: "A student has already recalled a difficult experience and told its story. They now ask: \"What does my faith say about this? What do Scripture and the Church's teachings mean for what happened to me?\" Which of Trokan's five steps is the student now performing?",
        options: [
            "Retrieving",
            "Retelling",
            "Reframing",
            "Revisioning"
        ],
        answer: ["C"],
        explanation: "Reframing is the step where the experience is looked at through the lens of faith and connected to God, Scripture, Church teachings and meaning. Retrieving and Retelling have already been done, and Revisioning comes later, when a new understanding or way of living emerges."
    },
    {
        type: "multi-select",
        question: "Which correctly describe the roles of human experience and Sacred Scripture in theologizing?",
        options: [
            "Theologizing begins with human experience.",
            "Sacred Scripture supplies the matter or context for reflection.",
            "Sacred Scripture serves as the basis or reference point for interpretation.",
            "Human experience serves as the basis against which Scripture is judged."
        ],
        answer: ["A", "C"],
        explanation: "The two roles are easy to swap. Human experience provides the matter or context - the situation being reflected on - while Sacred Scripture provides the basis or reference point for interpreting that situation in light of God's revelation."
    }
];

const theologyTest2 = [
    {
        type: "true-false",
        question: "Science comes from the Latin word scientia, which means knowledge.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Scientia means knowledge, and science is described as the systematic study of the physical and natural world."
    },
    {
        type: "true-false",
        question: "In theology, the articles of faith are the conclusions reached at the end of theological reasoning.",
        options: ["True", "False"],
        answer: "False",
        explanation: "They are the starting point, not the conclusion. Ordinary science moves from principles to conclusions; theology moves from the articles of faith, received through revelation, to understanding."
    },
    {
        type: "true-false",
        question: "Theology was regarded as the \"Queen of All Sciences\" during the Middle Ages.",
        options: ["True", "False"],
        answer: "True",
        explanation: "It was then considered the highest and most comprehensive form of knowledge, covering both the natural and the divine world."
    },
    {
        type: "true-false",
        question: "The reviewer states that the term theology was first used by Aristotle in his Metaphysics.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The reviewer credits Plato, in The Republic, in the 4th century BC, referring to \"discourse on god\"."
    },
    {
        type: "true-false",
        question: "One reason the reviewer gives for there being many theologies is that the mystery of God is inexhaustible.",
        options: ["True", "False"],
        answer: "True",
        explanation: "God cannot be completely understood from only one perspective. The other reasons are the diversity of human experience, the need for theology to be incarnated in culture and context, and the new questions that keep arising."
    },
    {
        type: "true-false",
        question: "Hebrews 11:1 defines faith in terms of confidence in what is hoped for and conviction regarding what is not seen.",
        options: ["True", "False"],
        answer: "True",
        explanation: "This is the scriptural definition the reviewer cites: faith involves trusting in what is not necessarily visible or physically proven."
    },
    {
        type: "true-false",
        question: "Revelation is described as the human person's free response to God's disclosure.",
        options: ["True", "False"],
        answer: "False",
        explanation: "That describes faith. Revelation is God's self-disclosure - from revelare, \"to lift the veil\". God reveals, and we respond through faith."
    },
    {
        type: "true-false",
        question: "According to the reviewer, faith is more certain than human knowledge because it is founded on the word of God.",
        options: ["True", "False"],
        answer: "True",
        explanation: "This is the third of the five characteristics of faith - faith is certain."
    },
    {
        type: "true-false",
        question: "Because faith is a gift from God, the reviewer concludes that a person may be required to believe.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The opposite. The fifth characteristic is that faith is a free human response - the reviewer cites the Catechism to stress that the act of faith is inherently free and nobody should be forced to believe."
    },
    {
        type: "true-false",
        question: "Fides qua refers to the faith by which we believe - personal trust in God.",
        options: ["True", "False"],
        answer: "True",
        explanation: "It is the difference between \"I trust God\" and merely \"I know religious information\"."
    },
    {
        type: "true-false",
        question: "The reviewer presents faith as purely individual, summed up in the phrase \"I believe\".",
        options: ["True", "False"],
        answer: "False",
        explanation: "Faith is ecclesial and communal: \"I believe\" exists within \"We believe\". Faith is not purely individual - it exists within a community."
    },
    {
        type: "true-false",
        question: "Authentic faith engages reason, experience, relationships, society, history and creation.",
        options: ["True", "False"],
        answer: "True",
        explanation: "This is the reviewer's answer to the claim that faith is blind belief - authentic faith engages all of these rather than shutting them out."
    },
    {
        type: "true-false",
        question: "Fowler's stages of faith begin with Intuitive-Projective Faith, with no stage preceding it.",
        options: ["True", "False"],
        answer: "False",
        explanation: "There is a pre-stage before stage 1: Infancy, or Undifferentiated Faith. Intuitive-Projective is stage 1, which follows it."
    },
    {
        type: "true-false",
        question: "Lawrence Kohlberg's work on moral development was one of the influences on Fowler's theory.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Fowler drew on Piaget for cognitive development and Kohlberg for moral development. Swapping the two is the usual mistake."
    },
    {
        type: "true-false",
        question: "The reviewer presents the Trinity as a mystery that can eventually be fully grasped once a person has studied enough theology.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The Trinity is presented as a deep and unfathomable mystery. The reviewer's point is the reverse: the more we know, the more there is to know."
    },
    {
        type: "true-false",
        question: "According to the reviewer, faith is expressed only in a person's relationship with God, and not toward other people or creation.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Faith is expressed through love, compassion and mercy, and it extends toward God, other human beings and creation."
    },
    {
        type: "true-false",
        question: "Faith serves as a bridge between reason and revelation.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Reason is what we can grasp with our intellect and revelation is what God makes known; faith connects the two, letting us engage mysteries reason alone cannot fully grasp."
    },
    {
        type: "true-false",
        question: "In the theology process, praxis comes before theological discernment.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Discernment comes first. The order is revelation, faith, theological questions, reflection, discernment, theology, praxis, and then new human experience."
    },
    {
        type: "true-false",
        question: "Thomas Aquinas was a Benedictine monk who served as Archbishop of Canterbury.",
        options: ["True", "False"],
        answer: "False",
        explanation: "That describes Anselm. Aquinas was an Italian Dominican friar, priest, philosopher, theologian and Doctor of the Church."
    },
    {
        type: "true-false",
        question: "Describing theology as a subalternate science means the reviewer considers it inferior to the other sciences.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Subalternation refers to where theology's principles come from - God's knowledge, through revelation. The reviewer states explicitly that subalternate does not mean inferior or less valuable."
    },
    {
        type: "true-false",
        question: "Thomas Groome's position is summarised by the statement that without loving action, God is not known.",
        options: ["True", "False"],
        answer: "True",
        explanation: "For Groome, knowing God biblically is dynamic, experiential and relational, involves the whole person, and should lead to loving obedience to God's will."
    },
    {
        type: "true-false",
        question: "Fides quaerens intellectum is Anselm's principle and means \"faith seeking understanding\".",
        options: ["True", "False"],
        answer: "True",
        explanation: "The logic runs: I believe, therefore I seek deeper understanding - not \"I need to understand everything before I believe\"."
    },
    {
        type: "true-false",
        question: "Theologizing begins with Sacred Scripture, while human experience serves as the reference point for interpreting it.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The two roles are reversed. Theologizing begins with human experience, which supplies the matter or context; Sacred Scripture is the basis or reference point for interpreting it."
    },
    {
        type: "true-false",
        question: "In contemporary theology as the reviewer presents it, faith is the lens, human experience is the context, and theology is the dialogue between them.",
        options: ["True", "False"],
        answer: "True",
        explanation: "We interpret experience through faith while also re-understanding faith through our experiences - an ongoing dialogue rather than a one-way reading."
    },
    {
        type: "true-false",
        question: "Karl Rahner described theology as the self-expression of the Church's faith in ever-new historical contexts.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Rahner's line summarises why there are many theologies: new situations, such as climate, gender and AI, raise new theological questions."
    }
];

// Export for quiz engine
const theologyQuestions = {
    test1: theologyTest1,
    test2: theologyTest2,
    title: "Theology: Understanding Theology",
    test2Label: "True or False",
    test2Info: "25 questions - Choose True or False"
};
