// Quiz Engine - History of Computing
// Handles quiz logic, scoring, and navigation

// Quiz titles
const quizTitles = {
    1: "Quiz 1: The Big Picture & Mechanical Era",
    2: "Quiz 2: Modern & Pre-Electronic Period",
    3: "Quiz 3: First Generation & Comparisons",
    4: "Quiz 4: Second & Third Generation",
    5: "Quiz 5: Fourth Generation & Timelines",
    6: "Quiz 6: Companies & Modern Topics",
    7: "Quiz 7: CPU Components & Quick Recall"
};

// Quiz data mapping
const quizData = {
    1: typeof quiz1Questions !== 'undefined' ? quiz1Questions : [],
    2: typeof quiz2Questions !== 'undefined' ? quiz2Questions : [],
    3: typeof quiz3Questions !== 'undefined' ? quiz3Questions : [],
    4: typeof quiz4Questions !== 'undefined' ? quiz4Questions : [],
    5: typeof quiz5Questions !== 'undefined' ? quiz5Questions : [],
    6: typeof quiz6Questions !== 'undefined' ? quiz6Questions : [],
    7: typeof quiz7Questions !== 'undefined' ? quiz7Questions : []
};

// State variables
let currentQuiz = 1;
let currentQuestionIndex = 0;
let questions = [];
let score = 0;
let userAnswers = [];
let answered = false;

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    currentQuiz = parseInt(urlParams.get('quiz')) || 1;

    initQuiz();
});

// Initialize the quiz
function initQuiz() {
    // Set quiz title
    document.getElementById('quiz-title').textContent = quizTitles[currentQuiz] || 'Quiz';

    // Get and shuffle questions
    questions = shuffleArray([...quizData[currentQuiz]]);

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

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Display current question
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    answered = false;

    // Update progress
    updateProgress();

    // Update question number
    document.getElementById('question-number').textContent =
        `Question ${currentQuestionIndex + 1}`;

    // Update question text
    document.getElementById('question-text').textContent = question.question;

    // Shuffle options and create buttons
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const shuffledOptions = shuffleArray([...question.options]);
    const letters = ['A', 'B', 'C', 'D'];

    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `
            <span class="option-letter">${letters[index]}</span>
            <span class="option-text">${option}</span>
        `;
        button.onclick = () => selectAnswer(option, button);
        optionsContainer.appendChild(button);
    });

    // Hide feedback and next button
    document.getElementById('feedback').className = 'feedback';
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
        isCorrect: isCorrect
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

    // Show next button
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('next-btn').textContent =
        currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next Question →';
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Update progress bar and text
function updateProgress() {
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

// Show results screen
function showResults() {
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    const percentage = Math.round((score / questions.length) * 100);

    document.getElementById('final-score').textContent = score;
    document.getElementById('max-score').textContent = questions.length;
    document.getElementById('score-percentage').textContent = `${percentage}%`;

    // Set message based on score
    let message = '';
    if (percentage >= 90) {
        message = 'Excellent! You really know your computing history!';
    } else if (percentage >= 70) {
        message = 'Great job! You have a solid understanding!';
    } else if (percentage >= 50) {
        message = 'Good effort! Keep studying to improve!';
    } else {
        message = 'Keep practicing! Review the study guide and try again.';
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

        let html = `
            <div class="review-question">
                <strong>Q${index + 1}:</strong> ${answer.question}
            </div>
        `;

        if (answer.isCorrect) {
            html += `
                <div class="review-answer user-correct">
                    Your answer: ${answer.userAnswer} ✓
                </div>
            `;
        } else {
            html += `
                <div class="review-answer user-incorrect">
                    Your answer: ${answer.userAnswer} ✗
                </div>
                <div class="review-answer correct-answer">
                    Correct answer: ${answer.correctAnswer} ✓
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
    document.getElementById('question-screen').style.display = 'block';

    initQuiz();
}

// Go back to home page
function goHome() {
    window.location.href = 'index.html';
}
