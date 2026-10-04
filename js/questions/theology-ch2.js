// Essentials of Catholic Faith and Life
// Chapter 2: Sin and Grace
// 30 True or False questions
// Source of truth: Creation_and_Sin_and_Grace_Notes.md (Chapter 2)

const theologyCh2Questions = [
    {
        type: "true-false",
        question: "Merism is a literary figure in which totality is expressed by the first and last in a series, or by opposites, so that the phrase \"good and evil\" means everything.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The parallel example given is \"man and woman,\" which means the whole of humanity. Knowledge of good and evil is therefore knowledge of everything, a quality due only to the omniscient God."
    },
    {
        type: "true-false",
        question: "The Hebrews understood Genesis 2.4b-3 as the account of original sin.",
        options: ["True", "False"],
        answer: "False",
        explanation: "It is for Christians that this passage grounds the understanding of original sin. The Hebrews do not have the concept, and the first sin they noted was the Israelites forming the golden calf."
    },
    {
        type: "true-false",
        question: "The Yahwist editors are responsible for Genesis 1, in which man is created on the sixth day.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Genesis 1 comes from the Priestly editors, where man is made last, on the sixth day. The Yahwist wrote Genesis 2.4b onward, where man is created first, before everything else."
    },
    {
        type: "true-false",
        question: "The four rivers Pishon, Gihon, Tigris and Euphrates are used by the authors to locate Eden near the head of the Persian Gulf.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Genesis 2.10-14 names the four rivers. The location is where the Tigris and Euphrates join other streams."
    },
    {
        type: "true-false",
        question: "The primary fault of the man and the woman was their refusal to discern and decide in a conscious, deliberate, rational way.",
        options: ["True", "False"],
        answer: "True",
        explanation: "This is the central thesis of the chapter. They let the snake, the dark and unconscious side of their nature, decide for them."
    },
    {
        type: "true-false",
        question: "Man was given the task of tilling the soil as a punishment for his sin.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Verse 15 already assigns tilling and keeping the garden before the fall, so work is part of human vocation. Work is good in itself and integral to being human."
    },
    {
        type: "true-false",
        question: "In ancient Hebrew culture, to know something is primarily an intellectual act.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Knowing is experiential and relational, not intellectual. To know is to commit to an action and translate it into a concrete experience."
    },
    {
        type: "true-false",
        question: "Eating in this account refers to basic human desire, passion and appetite, so gaining the knowledge of good and evil by eating means acquiring it through appetite and mortal passion.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The man and woman chose to be learned and wise by eating, that is, by way of appetite rather than discernment. Ska adds that such knowledge does not belong to the world of our appetites at all."
    },
    {
        type: "true-false",
        question: "Genesis 3.16 teaches that childbearing is cursed.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Childbearing is a gift and good in itself, and is therefore not cursed. What the verse emphasizes is that certain painful aspects are not normal, coming from a disorder introduced into creation."
    },
    {
        type: "true-false",
        question: "Nakedness without shame in Genesis 2.25 is properly understood as the couple's vulnerability and defencelessness before each other, highlighting intimacy and union.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Not being ashamed points to intimacy and union, as opposed to the separation that shame indicates. It sits alongside \"one flesh\" as an affirmation of conjugal union willed by God."
    },
    {
        type: "true-false",
        question: "According to the Catholic clarification, what we are paying for is the sin of Adam and Eve in itself.",
        options: ["True", "False"],
        answer: "False",
        explanation: "It is not their sin in itself that we are paying for. Because of their action humanity inherits a state or condition of sinfulness, which influences us from the mere fact of being born."
    },
    {
        type: "true-false",
        question: "In God's final sentence at Genesis 3.19, the problem being raised is death itself.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Death as such is not the problem; the problem is its absurdity, the fact that it should not be so. An absurd death is not part of God's design but the effect of the disorder we call sin."
    },
    {
        type: "true-false",
        question: "In Genesis 3.21 God makes garments of skins for the man and his wife and clothes them, so that God's last word is forgiveness and restoration rather than punishment.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Their nakedness had revealed shame and separation, and God's gesture of clothing replaces shame with forgiveness and protection. It restores the dignity due to them."
    },
    {
        type: "true-false",
        question: "When called by the Lord in Genesis 3.8-13, the man blames the serpent and the woman then blames the man.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The man blames the woman, and the woman then blames the serpent. Both failed to have a sense of accountability for the sin and its consequence."
    },
    {
        type: "true-false",
        question: "A rainbow is a bow, an ancient weapon of war, so placing or hanging it indicates an end to war and the beginning of peace.",
        options: ["True", "False"],
        answer: "True",
        explanation: "God sets the rainbow in the sky when he makes his covenant, berit, with Noah and his sons after the flood. It is part of the repeating pattern of sin answered by grace."
    },
    {
        type: "true-false",
        question: "The first creation account is the older of the two narratives.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The second narrative, beginning at Genesis 2.4b, is the much older one. The difference in how and when man is created is the evidence for two different sets of writers."
    },
    {
        type: "true-false",
        question: "In the second creation account man is made first, before the rest of the creatures, which are made for his sake.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The opening scene is deliberately empty: no plant, no herb of the field, no man to till the soil. Because man comes first, the focus of reflection is man himself."
    },
    {
        type: "true-false",
        question: "The second account presents man as the summit of creation, the masterpiece and pride of God's creating.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The world came from God, but the formation of man is presented as his masterpiece. This differs from the first account, where man is made last, on the sixth day."
    },
    {
        type: "true-false",
        question: "The tree that offers immortality and the tree whose fruit is forbidden are one and the same tree.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The account distinguishes three kinds of trees, and the tree of life is not the forbidden one. It reappears at Genesis 3.22 as a remaining temptation from which danger expels the couple."
    },
    {
        type: "true-false",
        question: "The authors were precise in distinguishing the kinds of trees, and that precision is what the chapter's later argument depends on.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Genesis 2.9 draws a clear distinction between them. The failure at Genesis 3.6-7 is that the forbidden tree was confused with the tree that is good for food, so its specificity was lost."
    },
    {
        type: "true-false",
        question: "The real issue raised by the story is whether human beings need the knowledge of good and evil at all.",
        options: ["True", "False"],
        answer: "False",
        explanation: "We do need that knowledge, so that is not the issue. The issue is how it is acquired: by surrendering to appetite and impulse, or as the fruit of conscious and responsible discernment."
    },
    {
        type: "true-false",
        question: "Knowledge of everything is something human beings can possess fully, in the same way the Creator does.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Such knowledge is a supreme quality due only to God, who is omniscient. Humans, being limited, learn gradually and often through trial and error."
    },
    {
        type: "true-false",
        question: "Being able to stop one's appetite and desire opens up a world of values superior to anything that can satisfy natural appetite.",
        options: ["True", "False"],
        answer: "True",
        explanation: "This is the corollary drawn from the fact that the knowledge cannot be gained by eating a fruit. If it cannot be had that way, it does not belong to the world of our appetites."
    },
    {
        type: "true-false",
        question: "The consequences listed after the sin share the common thread of separation and alienation.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The list runs from the cursing of the serpent and the enmity with the woman to increased pain in childbearing and toil in tilling the soil. What unites them is separation and alienation."
    },
    {
        type: "true-false",
        question: "We are influenced by the inherited state of sinfulness only once we are old enough to tell right from wrong.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The influence is there from the mere fact of being born. It precedes any conscious decision of our own and any ability to discern right from wrong morally."
    },
    {
        type: "true-false",
        question: "Influenced by the evil in the world, personal sin becomes inevitable, so that we cannot not sin.",
        options: ["True", "False"],
        answer: "True",
        explanation: "We come into the world with a strong inclination to evil and a tendency to self-centeredness. As the personality develops we make a conscious decision to accept it and commit our own personal sins."
    },
    {
        type: "true-false",
        question: "The story is best understood as a historical account of events that actually happened in that way.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Taking the story historically creates more problems than it solves. It is a story offering an explanation: God is not the author of evil, human beings are."
    },
    {
        type: "true-false",
        question: "The heart of the doctrine is a humble affirmation of our inclination to evil, our capacity for sin, and most importantly our inescapable need of God's redeeming love and forgiveness.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The three belong together: an inclination to evil, a capacity for sin, and a need for redeeming love and forgiveness. That need is described as inescapable, which is why it is the most important of the three."
    },
    {
        type: "true-false",
        question: "The sin is best explained as a failure of knowledge, since the couple simply did not know what they were doing.",
        options: ["True", "False"],
        answer: "False",
        explanation: "They were supposed to maintain the differences between the trees and keep the warning in mind. Instead they surrendered to desire, were blinded by it, and deliberately chose the wrong tree."
    },
    {
        type: "true-false",
        question: "The pattern running through these chapters is that each sin is answered by an act of grace.",
        options: ["True", "False"],
        answer: "True",
        explanation: "A killing is answered by a protective mark, a flood by a covenant and a sign set in the sky, and divided nations by a new father of all nations. The sinfulness was never enough for God to turn away from his promises."
    }
];
