// Quiz Engine - History of Computing & ComProg1
// Handles quiz logic, scoring, and navigation

// ITC Quiz titles
const itcQuizTitles = {
    1: "Quiz 1: The Big Picture & Mechanical Era",
    2: "Quiz 2: Modern & Pre-Electronic Period",
    3: "Quiz 3: First Generation & Comparisons",
    4: "Quiz 4: Second & Third Generation",
    5: "Quiz 5: Fourth Generation & Timelines",
    6: "Quiz 6: Companies & Modern Topics",
    7: "Quiz 7: CPU Components & Quick Recall"
};

// ITC Quiz data mapping
const itcQuizData = {
    1: typeof quiz1Questions !== 'undefined' ? quiz1Questions : [],
    2: typeof quiz2Questions !== 'undefined' ? quiz2Questions : [],
    3: typeof quiz3Questions !== 'undefined' ? quiz3Questions : [],
    4: typeof quiz4Questions !== 'undefined' ? quiz4Questions : [],
    5: typeof quiz5Questions !== 'undefined' ? quiz5Questions : [],
    6: typeof quiz6Questions !== 'undefined' ? quiz6Questions : [],
    7: typeof quiz7Questions !== 'undefined' ? quiz7Questions : []
};

// ComProg1 Quiz titles
const comprog1QuizTitles = {
    1: "ComProg1: Variables, Operators & Functions",
    2: "ComProg1: Variables, Operators & Functions (Set 2)",
    3: "ComProg1 Week 1: Introduction to Computer Programming",
    4: "ComProg1 Week 4: Input and Output with Streams",
    5: "ComProg1 Week 5: Operators for Fundamental Types",
    6: "ComProg1 Week 6: Control Flow 1 (Selection)",
    7: "ComProg1 Week 7: Control Flow 2 (Repetition)",
    8: "ComProg1 Week 8 & 9: Nested Loops, Conversions & the string Class"
};

// ComProg1 Quiz data mapping
const comprog1QuizData = {
    1: typeof comprog1Questions !== 'undefined' ? comprog1Questions : null,
    2: typeof comprog1Quiz2Questions !== 'undefined' ? comprog1Quiz2Questions : null,
    3: typeof comprog1Week1Questions !== 'undefined' ? comprog1Week1Questions : null,
    4: typeof comprog1Week4Questions !== 'undefined' ? comprog1Week4Questions : null,
    5: typeof comprog1Week5Questions !== 'undefined' ? comprog1Week5Questions : null,
    6: typeof comprog1Week6Questions !== 'undefined' ? comprog1Week6Questions : null,
    7: typeof comprog1Week7Questions !== 'undefined' ? comprog1Week7Questions : null,
    8: typeof comprog1Week8And9Questions !== 'undefined' ? comprog1Week8And9Questions : null
};

// State variables
let currentSubject = 'itc';
let currentQuiz = 1;
let currentQuestionIndex = 0;
let questions = [];
let score = 0;
let userAnswers = [];
let answered = false;

// ComProg1-specific state.
// A ComProg1 quiz is a list of sections: [{ label, short, info, questions }].
// Most quizzes have two of them (Multiple Choice + Identification); the
// Week 8 & 9 quiz adds a third (True or False).
let sections = [];
let currentSectionIndex = 0;
let scoreAtSectionStart = 0;

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    currentSubject = urlParams.get('subject') || 'itc';
    currentQuiz = parseInt(urlParams.get('quiz')) || 1;

    initQuiz();
});

// Initialize the quiz
function initQuiz() {
    // Keep the nav link pointing back at the tab this quiz came from
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.href = homeUrl();
    }

    if (currentSubject === 'comprog1') {
        initComprog1Quiz();
    } else {
        initItcQuiz();
    }
}

// Initialize ITC Quiz (original behavior)
function initItcQuiz() {
    // Set quiz title
    document.getElementById('quiz-title').textContent = itcQuizTitles[currentQuiz] || 'Quiz';

    // Get and shuffle questions
    questions = shuffleArray([...itcQuizData[currentQuiz]]);

    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    answered = false;

    // Update total questions display
    document.getElementById('total-questions').textContent = questions.length;

    // Show first question
    showQuestion();
}

// Build the section list for a ComProg1 quiz.
// test1 and test2 are always present; test3 is optional, so the quizzes that
// only have two tests are unaffected.
function buildSections(quizData) {
    const built = [];

    built.push({
        label: 'Multiple Choice',
        short: 'MC',
        questions: shuffleArray([...quizData.test1]),
        info: quizData.test1Info || `${quizData.test1.length} questions`
    });

    const test2Label = quizData.test2Label || 'Identification';
    built.push({
        label: test2Label,
        // Only "Identification" is abbreviated in the counter
        short: test2Label === 'Identification' ? 'ID' : test2Label,
        // Some tests (e.g. the prefix/postfix tracing drill) are deliberately
        // ordered easy to hard, so they opt out of shuffling.
        questions: quizData.shuffleTest2 === false
            ? [...quizData.test2]
            : shuffleArray([...quizData.test2]),
        info: quizData.test2Info || `${quizData.test2.length} questions - Type your answers`
    });

    if (quizData.test3) {
        const test3Label = quizData.test3Label || 'True or False';
        built.push({
            label: test3Label,
            short: test3Label,
            questions: quizData.shuffleTest3 === false
                ? [...quizData.test3]
                : shuffleArray([...quizData.test3]),
            info: quizData.test3Info ||
                `${quizData.test3.length} questions - Choose True or False`
        });
    }

    return built;
}

// Initialize ComProg1 Quiz (two or three tests)
function initComprog1Quiz() {
    // Set quiz title
    document.getElementById('quiz-title').textContent = comprog1QuizTitles[currentQuiz] || 'ComProg1 Quiz';

    // Build the sections for this quiz
    const quizData = comprog1QuizData[currentQuiz];
    sections = quizData ? buildSections(quizData) : [];

    // Start with the first section
    currentSectionIndex = 0;
    questions = sections.length ? sections[0].questions : [];

    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    scoreAtSectionStart = 0;
    userAnswers = [];
    answered = false;

    // Update total questions display
    document.getElementById('total-questions').textContent = totalQuestionCount();

    // Show first question
    showQuestion();
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Escape HTML special characters to prevent XSS and render issues
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Prompt shown above a prefix/postfix tracing table
const TRACE_PROMPT = 'Trace the code below. Enter the final value of x and the final value of y.';

// ---- Section helpers ------------------------------------------------------

// Total questions across every section of the current ComProg1 quiz
function totalQuestionCount() {
    return sections.reduce((sum, section) => sum + section.questions.length, 0);
}

// How many questions come before section i, so numbering runs on continuously
function questionsBeforeSection(index) {
    return sections
        .slice(0, index)
        .reduce((sum, section) => sum + section.questions.length, 0);
}

// Short tag used in the question counter, e.g. "Test 2 - ID"
function sectionShort(index) {
    return sections[index] ? sections[index].short : '';
}

// Which section a review entry belongs to, found by cumulative ranges
function sectionForAnswerIndex(answerIndex) {
    let seen = 0;
    for (let i = 0; i < sections.length; i++) {
        seen += sections[i].questions.length;
        if (answerIndex < seen) return i;
    }
    return sections.length - 1;
}

// True when the current question is the very last one of the whole quiz, so
// the Next button should read "See Results" instead
function isLastQuestionOfQuiz() {
    if (currentQuestionIndex !== questions.length - 1) return false;
    if (currentSubject !== 'comprog1') return true;
    return currentSectionIndex === sections.length - 1;
}

// ---- Tracing table --------------------------------------------------------

// Collect the two tracing inputs (may be absent on pages without the table)
function traceInputs() {
    return [
        document.getElementById('trace-final-x'),
        document.getElementById('trace-final-y')
    ].filter(Boolean);
}

// Clear and re-enable the tracing table so it is ready for the next question
function resetTraceInputs() {
    traceInputs().forEach(input => {
        input.value = '';
        input.disabled = false;
        input.classList.remove('cell-correct', 'cell-incorrect');
    });
    const traceSubmit = document.getElementById('trace-submit-btn');
    if (traceSubmit) traceSubmit.disabled = false;
}

// Fill the tracing table for the current question
function showTraceQuestion(question) {
    resetTraceInputs();

    document.getElementById('trace-code').textContent = question.code;
    document.getElementById('trace-init-x').textContent = question.initialX;
    document.getElementById('trace-init-y').textContent = question.initialY;

    const preamble = document.getElementById('trace-preamble');
    if (preamble) {
        preamble.textContent =
            `Assume:  int x = ${question.initialX};   int y = ${question.initialY};`;
    }

    const [finalX, finalY] = traceInputs();
    if (!finalX || !finalY) return;

    // Enter moves on to the y cell, or submits once both are filled in
    finalX.onkeypress = function(e) {
        if (e.key !== 'Enter' || answered) return;
        if (finalY.value.trim() === '') {
            finalY.focus();
        } else {
            submitTraceAnswer();
        }
    };
    finalY.onkeypress = function(e) {
        if (e.key === 'Enter' && !answered) {
            submitTraceAnswer();
        }
    };

    finalX.focus();
}

// Submit a prefix/postfix tracing answer - BOTH values must be correct
function submitTraceAnswer() {
    if (answered) return;
    answered = true;

    const question = questions[currentQuestionIndex];
    const [finalX, finalY] = traceInputs();

    const rawX = finalX ? finalX.value.trim() : '';
    const rawY = finalY ? finalY.value.trim() : '';

    // An empty cell is always wrong; Number('') would otherwise be 0
    const xOk = rawX !== '' && Number(rawX) === question.answerX;
    const yOk = rawY !== '' && Number(rawY) === question.answerY;
    const isCorrect = xOk && yOk;

    // Mark each cell independently so the student sees which one was wrong
    if (finalX) finalX.classList.add(xOk ? 'cell-correct' : 'cell-incorrect');
    if (finalY) finalY.classList.add(yOk ? 'cell-correct' : 'cell-incorrect');

    // Store user answer
    userAnswers.push({
        question: `${question.code}   (starting from x = ${question.initialX}, y = ${question.initialY})`,
        userAnswer: `x = ${rawX || '(blank)'}, y = ${rawY || '(blank)'}`,
        correctAnswer: `x = ${question.answerX}, y = ${question.answerY}`,
        isCorrect: isCorrect,
        explanation: question.explanation
    });

    // Update score
    if (isCorrect) {
        score++;
    }

    // Disable the inputs and the submit button
    traceInputs().forEach(input => { input.disabled = true; });
    const traceSubmit = document.getElementById('trace-submit-btn');
    if (traceSubmit) traceSubmit.disabled = true;

    // Show feedback
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Correct! Well done!';
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent =
            `Incorrect. Final x = ${question.answerX}, final y = ${question.answerY}`;
    }
    appendExplanation(feedback, question);

    // Show next button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.display = 'block';
    nextBtn.textContent = isLastQuestionOfQuiz() ? 'See Results' : 'Next Question →';
}

// Append an optional explanation line under the feedback message
function appendExplanation(feedback, question) {
    if (!question.explanation) return;
    const note = document.createElement('div');
    note.className = 'feedback-note';
    note.textContent = question.explanation;
    feedback.appendChild(note);
}

// Display current question
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        // For ComProg1: move on to the next section if there is one
        if (currentSubject === 'comprog1' && currentSectionIndex < sections.length - 1) {
            showTestTransition();
            return;
        }
        showResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    answered = false;

    // Update progress
    updateProgress();

    // Update question number with test indicator for ComProg1.
    // Each section continues the numbering from the sections before it.
    if (currentSubject === 'comprog1') {
        const displayQuestionNum =
            questionsBeforeSection(currentSectionIndex) + currentQuestionIndex + 1;
        document.getElementById('question-number').textContent =
            `Test ${currentSectionIndex + 1} - ${sectionShort(currentSectionIndex)} | Question ${displayQuestionNum}`;
    } else {
        document.getElementById('question-number').textContent =
            `Question ${currentQuestionIndex + 1}`;
    }

    // Update question text
    document.getElementById('question-text').textContent =
        question.type === 'trace-table' ? TRACE_PROMPT : question.question;

    // Get containers
    const optionsContainer = document.getElementById('options-container');
    const identificationContainer = document.getElementById('identification-container');
    const traceContainer = document.getElementById('trace-container');

    // Clear previous content
    optionsContainer.innerHTML = '';

    // Check question type
    if (question.type === 'identification') {
        // Show identification input, hide the others
        optionsContainer.style.display = 'none';
        if (traceContainer) traceContainer.style.display = 'none';
        if (identificationContainer) {
            identificationContainer.style.display = 'block';
            const answerInput = document.getElementById('answer-input');
            answerInput.value = '';
            answerInput.focus();
            // Add Enter key listener
            answerInput.onkeypress = function(e) {
                if (e.key === 'Enter' && !answered) {
                    submitIdentificationAnswer();
                }
            };
        }
    } else if (question.type === 'trace-table') {
        // Show the tracing table, hide the others
        optionsContainer.style.display = 'none';
        if (identificationContainer) identificationContainer.style.display = 'none';
        if (traceContainer) {
            traceContainer.style.display = 'block';
            showTraceQuestion(question);
        }
    } else {
        // Show options, hide the input containers.
        // True/False reuses this path so it looks just like multiple choice.
        optionsContainer.style.display = 'block';
        if (identificationContainer) {
            identificationContainer.style.display = 'none';
        }
        if (traceContainer) traceContainer.style.display = 'none';

        // Shuffle options and create buttons.
        // True/False keeps its given order so True always sits above False.
        const displayOptions = question.type === 'true-false'
            ? [...question.options]
            : shuffleArray([...question.options]);
        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

        displayOptions.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.innerHTML = `
                <span class="option-letter">${letters[index]}</span>
                <span class="option-text">${escapeHtml(option)}</span>
            `;
            button.onclick = () => selectAnswer(option, button);
            optionsContainer.appendChild(button);
        });
    }

    // Hide feedback and next button
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
}

// Handle answer selection
function selectAnswer(selectedOption, buttonElement) {
    if (answered) return;
    answered = true;

    const question = questions[currentQuestionIndex];
    const isCorrect = selectedOption === question.answer;

    // Store user answer
    userAnswers.push({
        question: question.question,
        userAnswer: selectedOption,
        correctAnswer: question.answer,
        isCorrect: isCorrect,
        explanation: question.explanation
    });

    // Update score
    if (isCorrect) {
        score++;
    }

    // Disable all buttons and show correct/incorrect
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.classList.add('disabled');
        const optionText = btn.querySelector('.option-text').textContent;

        if (optionText === question.answer) {
            btn.classList.add('correct');
        } else if (btn === buttonElement && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Show feedback
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Correct! Well done!';
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = `Incorrect. The correct answer is: ${question.answer}`;
    }
    appendExplanation(feedback, question);

    // Show next button
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('next-btn').textContent =
        isLastQuestionOfQuiz() ? 'See Results' : 'Next Question →';
}

// Submit identification answer
function submitIdentificationAnswer() {
    if (answered) return;
    answered = true;

    const question = questions[currentQuestionIndex];
    const answerInput = document.getElementById('answer-input');
    const userAnswer = answerInput.value.trim();

    // Check if answer is correct (case-insensitive)
    const isCorrect = question.answer.some(validAnswer =>
        userAnswer.toLowerCase() === validAnswer.toLowerCase()
    );

    // Store user answer
    userAnswers.push({
        question: question.question,
        userAnswer: userAnswer || '(no answer)',
        correctAnswer: question.answer[0], // Show first valid answer
        isCorrect: isCorrect,
        explanation: question.explanation
    });

    // Update score
    if (isCorrect) {
        score++;
    }

    // Disable input
    answerInput.disabled = true;
    document.getElementById('submit-btn').disabled = true;

    // Show feedback
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'Correct! Well done!';
    } else {
        feedback.className = 'feedback incorrect';
        feedback.textContent = `Incorrect. The correct answer is: ${question.answer[0]}`;
    }
    appendExplanation(feedback, question);

    // Show next button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.display = 'block';
    nextBtn.textContent = isLastQuestionOfQuiz() ? 'See Results' : 'Next Question →';
}

// Show transition screen between two sections (ComProg1)
function showTestTransition() {
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('test-transition-screen').style.display = 'block';

    const finished = sections[currentSectionIndex];
    const next = sections[currentSectionIndex + 1];

    // Score for the section that just ended
    const sectionScore = score - scoreAtSectionStart;
    const percentage = finished.questions.length
        ? Math.round((sectionScore / finished.questions.length) * 100)
        : 0;

    const heading = document.getElementById('transition-heading');
    if (heading) heading.textContent = `Test ${currentSectionIndex + 1} Complete!`;

    document.getElementById('test1-score').textContent = sectionScore;
    document.getElementById('test1-max').textContent = finished.questions.length;
    document.getElementById('test1-percentage').textContent = `${percentage}%`;

    const transitionMsg = document.querySelector('#test-transition-screen .transition-message');
    if (transitionMsg) {
        transitionMsg.textContent = `Ready for Test ${currentSectionIndex + 2}: ${next.label}`;
    }
    const nextInfo = document.getElementById('test2-info');
    if (nextInfo) nextInfo.textContent = next.info;

    const startBtn = document.getElementById('start-next-test-btn');
    if (startBtn) startBtn.textContent = `Start Test ${currentSectionIndex + 2}`;

    // Fill the progress bar up to where the next section begins
    const total = totalQuestionCount();
    const done = questionsBeforeSection(currentSectionIndex + 1);
    document.getElementById('progress-bar').style.width =
        `${total ? (done / total) * 100 : 0}%`;
}

// Start the next section (ComProg1)
function startNextTest() {
    document.getElementById('test-transition-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';

    // Move on to the next section
    currentSectionIndex++;
    questions = sections[currentSectionIndex].questions;
    currentQuestionIndex = 0;
    // Don't reset score or userAnswers - they run across every section
    scoreAtSectionStart = score;

    // Update total questions display
    document.getElementById('total-questions').textContent = totalQuestionCount();

    // Re-enable input if needed
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.disabled = false;
    }
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
    }
    resetTraceInputs();

    // Show first question of the new section
    showQuestion();
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;

    // Re-enable identification input for next question
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.disabled = false;
    }
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
    }
    resetTraceInputs();

    showQuestion();
}

// Update progress bar and text
function updateProgress() {
    if (currentSubject === 'comprog1') {
        // For ComProg1: progress runs across every section
        const totalQuestions = totalQuestionCount();
        const answeredSoFar =
            questionsBeforeSection(currentSectionIndex) + currentQuestionIndex;
        const progress = totalQuestions ? (answeredSoFar / totalQuestions) * 100 : 0;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = answeredSoFar + 1;
        document.getElementById('total-questions').textContent = totalQuestions;
    } else {
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    }
}

// Show results screen
function showResults() {
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    let totalQuestions, finalScore, percentage;

    if (currentSubject === 'comprog1') {
        // score already includes every section
        totalQuestions = totalQuestionCount();
        finalScore = score;
        percentage = totalQuestions ? Math.round((finalScore / totalQuestions) * 100) : 0;
    } else {
        totalQuestions = questions.length;
        finalScore = score;
        percentage = Math.round((finalScore / totalQuestions) * 100);
    }

    document.getElementById('final-score').textContent = finalScore;
    document.getElementById('max-score').textContent = totalQuestions;
    document.getElementById('score-percentage').textContent = `${percentage}%`;

    // Set message based on score
    let message = '';
    if (currentSubject === 'comprog1') {
        if (percentage >= 90) {
            message = 'Excellent! You have mastered C++ fundamentals!';
        } else if (percentage >= 70) {
            message = 'Great job! You have a solid understanding of C++!';
        } else if (percentage >= 50) {
            message = 'Good effort! Keep practicing your C++ skills!';
        } else {
            message = 'Keep practicing! Review the C++ concepts and try again.';
        }
    } else {
        if (percentage >= 90) {
            message = 'Excellent! You really know your computing history!';
        } else if (percentage >= 70) {
            message = 'Great job! You have a solid understanding!';
        } else if (percentage >= 50) {
            message = 'Good effort! Keep studying to improve!';
        } else {
            message = 'Keep practicing! Review the study guide and try again.';
        }
    }
    document.getElementById('score-message').textContent = message;

    // Update progress bar to 100%
    document.getElementById('progress-bar').style.width = '100%';
}

// Review answers
function reviewAnswers() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('review-screen').style.display = 'block';

    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';

    userAnswers.forEach((answer, index) => {
        const item = document.createElement('div');
        item.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;

        // Add test indicator for ComProg1
        let testLabel = '';
        if (currentSubject === 'comprog1') {
            const sectionIndex = sectionForAnswerIndex(index);
            testLabel = `(Test ${sectionIndex + 1} - ${sectionShort(sectionIndex)})`;
        }

        let html = `
            <div class="review-question">
                <strong>Q${index + 1} ${testLabel}:</strong> ${escapeHtml(answer.question)}
            </div>
        `;

        if (answer.isCorrect) {
            html += `
                <div class="review-answer user-correct">
                    Your answer: ${escapeHtml(answer.userAnswer)}
                </div>
            `;
        } else {
            html += `
                <div class="review-answer user-incorrect">
                    Your answer: ${escapeHtml(answer.userAnswer)}
                </div>
                <div class="review-answer correct-answer">
                    Correct answer: ${escapeHtml(answer.correctAnswer)}
                </div>
            `;
        }

        if (answer.explanation) {
            html += `
                <div class="review-explanation">
                    ${escapeHtml(answer.explanation)}
                </div>
            `;
        }

        item.innerHTML = html;
        reviewContainer.appendChild(item);
    });
}

// Back to results from review
function backToResults() {
    document.getElementById('review-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
}

// Restart the quiz
function restartQuiz() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('review-screen').style.display = 'none';
    document.getElementById('test-transition-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';

    // Re-enable identification input if needed
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.disabled = false;
    }
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
    }
    resetTraceInputs();

    initQuiz();
}

// Link back to the quiz list, keeping the subject tab the user came from
function homeUrl() {
    return currentSubject === 'comprog1'
        ? 'index.html?subject=comprog1'
        : 'index.html';
}

// Go back to home page
function goHome() {
    window.location.href = homeUrl();
}
