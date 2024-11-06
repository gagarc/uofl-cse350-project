// Initialize an empty array to hold the question-answer pairs
let questionAnswerList = [];

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

    // Display the question and answer in the HTML
    document.getElementById("question").textContent = `Q: ${question}`;
    document.getElementById("answer").textContent = `A: ${answer}`;
}
