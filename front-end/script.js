// Initialize an empty array to hold the question-answer pairs
let questionAnswerList = [];
let currentAnswer = null; // Holds the correct answer for the current question

// Fetch JSON data
fetch("datasets/addition.json")
    .then(response => response.json())
    .then(data => {
        questionAnswerList = data;
        displayRandomQA(); // Display a random Q&A pair when data loads
    })
    .catch(error => console.error("Error loading JSON:", error));

// Display a random question-answer pair
function displayRandomQA() {
    if (questionAnswerList.length === 0) return;

    // Get a random question-answer pair from the list
    const randomIndex = Math.floor(Math.random() * questionAnswerList.length);
    const { question, answer } = questionAnswerList[randomIndex];

    // Update the current answer
    currentAnswer = answer;

    // Display the question and clear previous feedback/input
    document.getElementById("question").textContent = `${question}`;
    document.getElementById("user-answer").value = "";
    document.getElementById("feedback").textContent = "";
}

// Check the user’s answer
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("user-answer").value.trim(), 10);
    const correctAnswer = parseInt(currentAnswer, 10);

    // Display feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = `Incorrect. The correct answer is ${currentAnswer}.`;
    }
}
