let currentAnswer

async function loadQuestions(qtype) {

    switch (qtype) {
        case 'add':
            filepath = 'datasets/addition.json';
            break;
        case 'sub':
            filepath = 'datasets/subtraction.json';
            break
        case 'mul':
            filepath = 'datasets/multiplication.json';
            break
        case 'div':
            filepath = 'datasets/division.json';
            break
        default:
            break;
    }

    try {
        const response = await fetch(filepath);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        questionList = await response.json(); // Load data into the variable
        console.log("Data loaded:", questionList); // Log to confirm data load
        loadQA(); // Call any function that depends on questionList here
    } catch (error) {
        console.error("Failed to load JSON file:", error);
    }

}

function displayQOTD() {
    randomIndex = Math.floor(Math.random() * 4);
    switch(randomIndex) {
        case 0:
            loadQuestions('add')
            break;
        case 1:
            loadQuestions('sub')
            break
        case 2:
            loadQuestions('mul')
            break
        case 3:
            loadQuestions('div')
            break
        default:
            break;
    }
}

function loadQA() {
    randomIndex = Math.floor(Math.random() * questionList.length);
    let { question, answer } = questionList[randomIndex];

    document.getElementById("question").textContent = `${question}`;
    document.getElementById("user-answer").value = "";
    document.getElementById("feedback").textContent = "";

    currentAnswer =  answer;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("user-answer").value.trim(), 10);
    const correctAnswer = parseInt(currentAnswer, 10);

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = `Incorrect. Keep trying!`;
    }
}