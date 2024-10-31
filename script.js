// Sample HTML quiz data without images
const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Making Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Who is the creator of HTML?",
        options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        answer: "Tim Berners-Lee"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<newline>"],
        answer: "<br>"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<style>", "<script>", "<link>"],
        answer: "<style>"
    },
    {
        question: "Which attribute is used in HTML to define inline styles?",
        options: ["style", "class", "styles", "font"],
        answer: "style"
    }
];

// Select elements
const studentForm = document.getElementById("student-form");
const quizContainer = document.getElementById("quiz-container");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");

// Start the quiz after student details are entered
function startQuiz() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("admno").value;

    if (!name || !number) {
        alert("Please enter your name and adm no.");
        return;
    }

    studentForm.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    displayQuiz();
}

// Display quiz questions as cards
function displayQuiz() {
    quizElement.innerHTML = "";
    quizData.forEach((data, index) => {
        const card = document.createElement("div");
        card.classList.add("question-card");

        const questionText = document.createElement("h4");
        questionText.textContent = `${index + 1}. ${data.question}`;
        card.appendChild(questionText);

        data.options.forEach(option => {
            const label = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question${index}`;
            radio.value = option;

            label.appendChild(radio);
            label.append(option);
            card.appendChild(label);
        });

        quizElement.appendChild(card);
    });
}

// Submit quiz and calculate score
function submitQuiz() {
    let score = 0;

    quizData.forEach((data, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === data.answer) {
            score++;
        }
    });

    // Show score in an alert with a reattempt button
    const userWantsToReattempt = confirm(`Your score: ${score}/${quizData.length}\nWould you like to reattempt the quiz?`);
    if (userWantsToReattempt) {
        resetQuiz();
    }
}

// Reset quiz for reattempt
function resetQuiz() {
    resultElement.classList.add("hidden");
    resultElement.textContent = "";
    displayQuiz();
}
