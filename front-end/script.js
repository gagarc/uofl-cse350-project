
// Initialize an empty array to hold the question-answer pairs
let additionList = [];
let subtractionList = []
let multiplicationList = [];
let divisionList = [];
let currentAnswer = null; // Holds the correct answer for the current question


// ADDITION DATASET

function loadAddition(){
    // Fetch JSON data
    fetch("../datasets/addition.json")
        .then(response => response.json())
        .then(data => {
            additionList = data;
            displayRandomQA_add(); // Display a random Q&A pair when data loads
        })
        .catch(error => console.error("Error loading JSON:", error));
}

// Display a random question-answer pair
function displayRandomQA_add() {
    if (additionList.length === 0) return;

    // Get a random question-answer pair from the list
    const randomIndex = Math.floor(Math.random() * additionList.length);
    const { question, answer } = additionList[randomIndex];

    // Update the current answer
    currentAnswer = answer;

    // Display the question and clear previous feedback/input
    document.getElementById("question").textContent = `${question}`;
    document.getElementById("user-answer").value = "";
    document.getElementById("feedback").textContent = "";
}

// SUBTRACTION DATASET

function loadSubtraction(){
    // Fetch JSON data
    fetch("../datasets/subtraction.json")
        .then(response => response.json())
        .then(data => {
            subtractionList = data;
            displayRandomQA_sub(); // Display a random Q&A pair when data loads
        })
        .catch(error => console.error("Error loading JSON:", error));
}


// Display a random question-answer pair
function displayRandomQA_sub() {
    if (subtractionList.length === 0) return;

    // Get a random question-answer pair from the list
    const randomIndex = Math.floor(Math.random() * subtractionList.length);
    const { question, answer } = subtractionList[randomIndex];

    // Update the current answer
    currentAnswer = answer;

    // Display the question and clear previous feedback/input
    document.getElementById("question").textContent = `${question}`;
    document.getElementById("user-answer").value = "";
    document.getElementById("feedback").textContent = "";
}

function loadMultiplication(){
    // Fetch JSON data
    fetch("../datasets/multiplication.json")
        .then(response => response.json())
        .then(data => {
            multiplicationList = data;
            displayRandomQA_mult(); // Display a random Q&A pair when data loads
        })
        .catch(error => console.error("Error loading JSON:", error));
}

// Display a random question-answer pair
function displayRandomQA_mult() {
    if (multiplicationList.length === 0) return;

    // Get a random question-answer pair from the list
    const randomIndex = Math.floor(Math.random() * multiplicationList.length);
    const { question, answer } = multiplicationList[randomIndex];

    // Update the current answer
    currentAnswer = answer;

    // Display the question and clear previous feedback/input
    document.getElementById("question").textContent = `${question}`;
    document.getElementById("user-answer").value = "";
    document.getElementById("feedback").textContent = "";
}

function loadDivision(){
    // Fetch JSON data
    fetch("../datasets/division.json")
        .then(response => response.json())
        .then(data => {
            divisionList = data;
            displayRandomQA_div(); // Display a random Q&A pair when data loads
        })
        .catch(error => console.error("Error loading JSON:", error));
}

// Display a random question-answer pair
function displayRandomQA_div() {
    if (divisionList.length === 0) return;

    // Get a random question-answer pair from the list
    const randomIndex = Math.floor(Math.random() * divisionList.length);
    const { question, answer } = divisionList[randomIndex];

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
