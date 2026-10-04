// Essentials of Catholic Faith and Life
// Chapter 3: Passion, Death and Resurrection of Jesus - The Paschal Mystery
// 30 True or False questions
// Source of truth: Chapter 3 - Passion, Death, and Resurrection of Jesus (pp. 43-61)

const theologyCh3Questions = [
    {
        type: "true-false",
        question: "In John's account it is Caiaphas, the high priest that year, who says it is better that one man should die instead of the people so that the whole nation may not perish.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The Sanhedrin was convened after witnesses reported the raising of Lazarus. From that day on they planned to kill Jesus (John 11.47-53)."
    },
    {
        type: "true-false",
        question: "According to Scott Hahn, Jesus was executed because he sought to abolish the Law and the prophets.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Hahn says Jesus was a Jew who kept the Torah of Moses faithfully and was not executed for seeking to abolish the Law. He came into conflict with the Jewish leaders over issues of authority instead."
    },
    {
        type: "true-false",
        question: "Scott Hahn identifies three key issues of authority behind the conflict: authority over the Law shown by healing on the Sabbath, authority over the Temple, and Jesus' own self-claims.",
        options: ["True", "False"],
        answer: "True",
        explanation: "He claimed authority over the Temple by stopping its sacrificial services and prohibiting buying and selling. His self-claims brought the charges of sedition and of making himself God."
    },
    {
        type: "true-false",
        question: "The official Roman charge against Jesus was that he had incited a revolt among the Jews, also referred to as sedition.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Jesus and his disciples were perceived as a group of opposition and rebellion against the stability of the Roman government. The other civil ground was his being equated with a political king against Caesar."
    },
    {
        type: "true-false",
        question: "When Jesus spoke of destroying the temple and raising it in three days, he was referring to the physical, structural temple of Jerusalem.",
        options: ["True", "False"],
        answer: "False",
        explanation: "He alluded to his body as the temple, anticipating his passion and death. On the third day it is restored to life and rebuilt through his resurrection."
    },
    {
        type: "true-false",
        question: "During his lifetime Jesus explicitly and publicly declared that he was the Messiah.",
        options: ["True", "False"],
        answer: "False",
        explanation: "According to scholars he did not claim this explicitly and publicly; it was the shared, divinely revealed declaration of the evangelists, discovered after the resurrection. Mark even portrays Jesus forbidding the disciples from spreading the word (Mark 8.30)."
    },
    {
        type: "true-false",
        question: "The Sanhedrin handed Jesus over to Pilate because they lacked the legitimate authority to execute him, that power resting only with the Roman Procurator.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The Romans occupied Palestine at the time and held the greater jurisdiction over civil and criminal matters. Pilate was therefore a necessary character for the accusers."
    },
    {
        type: "true-false",
        question: "The Doctrine of Atonement means that Jesus atoned for our sins by the sheer gravity of the pain he suffered.",
        options: ["True", "False"],
        answer: "False",
        explanation: "He atoned not by the gravity of his pain but by his conscious and loving obedience to the Father throughout the greatest ordeal of his life. The invitation of the passion narrative is to incarnate that same loving obedience."
    },
    {
        type: "true-false",
        question: "Mark records three passion predictions, each of which ends with the Son of Man rising after three days.",
        options: ["True", "False"],
        answer: "True",
        explanation: "The three are at Mark 8.31, 9.31 and 10.33-34. Through them Jesus instructed the disciples about his fate and his glorification, though they repeatedly failed to understand."
    },
    {
        type: "true-false",
        question: "In the agony at the garden, Luke's account describes an angel appearing to strengthen Jesus while his sweat became like drops of blood falling on the ground.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Matthew adds that Jesus said \"My soul is sorrowful even to death.\" Here we encounter Jesus in all of his humanity, frightened and most vulnerable."
    },
    {
        type: "true-false",
        question: "Jesus' death happened as a result of divine necessity rather than any deliberate, personal commitment on his part.",
        options: ["True", "False"],
        answer: "False",
        explanation: "That view is the student's remark the chapter sets out to correct, as lacking context, truth and substance. Jesus freely and lovingly chose to obey the Father's will and voluntarily subordinated his freedom to it."
    },
    {
        type: "true-false",
        question: "According to Donald Senior, the issue the gospel writers were dealing with was racial rather than religious, and the passion story was meant as a perpetual indictment of the Jewish people.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Senior says the issue was religious, not racial, and that the passion story was never meant to be a perpetual indictment of the Jewish people. Using it as an excuse for anti-Semitism is one of the most tragic and shameful blots on Christian history."
    },
    {
        type: "true-false",
        question: "The washing of the disciples' feet is unique to John, and the gesture strongly affirms that Jesus' messiahship is that of a servant Messiah.",
        options: ["True", "False"],
        answer: "True",
        explanation: "It appears at John 13.1-11. All four gospels, by contrast, speak of Jesus instituting the Holy Eucharist at the Last Supper."
    },
    {
        type: "true-false",
        question: "John situates the Last Supper on the day of Passover itself, while the Synoptic gospels place it on the day before the Passover.",
        options: ["True", "False"],
        answer: "False",
        explanation: "It is the reverse: John places it on the day before the Passover and the Synoptics on the day of Passover itself. The gospels disagree on the exact day but all report the institution of the Eucharist."
    },
    {
        type: "true-false",
        question: "The objections to the resurrection listed in the chapter are the theft, conspiracy, drugged, coma or swoon, hallucination and lie theories.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Those six are set against seven affirmations, including the empty tomb, the post-resurrection appearances and the transformation of the disciples. The empty tomb and the appearances are presented as complementing each other."
    },
    {
        type: "true-false",
        question: "The passion accounts were written as neutral, on-the-spot reporting, independent of the writers' faith.",
        options: ["True", "False"],
        answer: "False",
        explanation: "They were written from the perspective of faith and interpreted after everything had happened, which is why they are described as history in the perspective of faith. That makes them faith-testimonies rather than detached reports."
    },
    {
        type: "true-false",
        question: "His reply to the charge of breaking the sabbath was that the law must serve the welfare and greatest good of man, rather than man being enslaved by the law for the sake of following it.",
        options: ["True", "False"],
        answer: "True",
        explanation: "He went beyond the trap of legalism and mere adherence to the law. The law was intended as a guide for man's affairs and a source of meaning."
    },
    {
        type: "true-false",
        question: "The purity laws of the time were applied in a way that welcomed the sick and the foreigner.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The law on purity discriminated against foreigners and the sick, labelling them unclean and ritually impure. He was the one who spoke to them, touched them, healed them and freed them from that bondage."
    },
    {
        type: "true-false",
        question: "The religious teachers of the time and Jesus grounded their authority in the same way, by citing a former teacher and the written law.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The teachers of the day derived their authority from a former teacher or from citing the written law. He rooted his in an intimate, loving relationship with the Father, which scandalized the leaders of his day."
    },
    {
        type: "true-false",
        question: "The civil authority found no guilt in him, yet still handed him over to be crucified after the crowd persisted.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Faithful to the custom of releasing a prisoner at the feast, the governor let the crowd choose between a criminal and Jesus. The crowd chose the criminal and demanded the crucifixion."
    },
    {
        type: "true-false",
        question: "He foretold his suffering more than once, and on these occasions the disciples repeatedly failed to grasp what he meant.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Through the predictions he instructed them about the fate awaiting him and about his glorification. Even the disciple who became the first head of the early church was rebuked for misunderstanding him."
    },
    {
        type: "true-false",
        question: "Because he was certain of the outcome, he faced his death without any fear.",
        options: ["True", "False"],
        answer: "False",
        explanation: "He had fear, but his courage and commitment stood greater. Courage is not the absence of fear; keeping and dying for one's conviction is what made the difference."
    },
    {
        type: "true-false",
        question: "Redemption in this setting means the payment of a ransom price to liberate someone held in captivity.",
        options: ["True", "False"],
        answer: "True",
        explanation: "In the biblical world it was often a kinsman winning the release of a family member. In biblical theology it is God delivering a people from bondage and making them his own by covenant."
    },
    {
        type: "true-false",
        question: "At the annual feast the people offered a sacrificial animal purely as a memorial, with no sense of it being a payment for sin.",
        options: ["True", "False"],
        answer: "False",
        explanation: "The animal was slaughtered and offered at the altar as an atonement, a payment for their sins. What changed is that a person, rather than an animal, became the ultimate sacrifice."
    },
    {
        type: "true-false",
        question: "An instrument of capital punishment could never come to carry a meaning other than cruelty.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Though crucifixion was a sign of the cruelty of Roman capital punishment, the cross was transformed into a symbol of sacrifice, love and forgiveness. That death became the threshold to resurrection and eternal life."
    },
    {
        type: "true-false",
        question: "The empty tomb and the appearances after the resurrection each need the other, since on its own either one could be explained away.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Without the empty tomb, the appearances could be read as confirmations of mere hallucination. Without the appearances, the empty tomb could be read as the body having been stolen or hidden."
    },
    {
        type: "true-false",
        question: "If the preaching about the resurrection had been invented, persecution would have made no difference to whether the followers kept it up.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Persecution is presented as the acid test of a lie against a conviction. The argument is that they would not willingly and wholeheartedly trade their life for a lie."
    },
    {
        type: "true-false",
        question: "One argument against the body having been secretly removed is that the authorities could have ended the preaching at once by producing it in public.",
        options: ["True", "False"],
        answer: "True",
        explanation: "That would have destroyed the preachers' credibility immediately, and it did not happen. The guards were instead paid a sum of money to say the body had been stolen while they slept."
    },
    {
        type: "true-false",
        question: "Those who doubted the first reports of the appearances were pushed aside and never offered any evidence.",
        options: ["True", "False"],
        answer: "False",
        explanation: "One of them challenged the first reports and said he would believe only if he could touch the scars. Being able to touch the risen body is itself listed among the affirmations."
    },
    {
        type: "true-false",
        question: "The resurrection is presented as a source of faith, of meaning and of hope, with faith itself being first and foremost a divine gift.",
        options: ["True", "False"],
        answer: "True",
        explanation: "As meaning, it shows that life's sufferings and failures are nothing beside the glory that awaits. As hope, it answers the one through whom sin and death came with the one who brings life."
    }
];
