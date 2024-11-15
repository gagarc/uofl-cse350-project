const quiz_content = document.getElementById("quiz-content");
let q_nodes = [] ,question_h2, questionList = [], answers = []
let filepath

document.getElementById('add_btn').onclick = function() {quizType('add')}
document.getElementById('sub_btn').onclick = function() {quizType('sub')}
document.getElementById('mul_btn').onclick = function() {quizType('mul')}
document.getElementById('div_btn').onclick = function() {quizType('div')}


function createQuiz(){

    qnum = 10


    if (questionList) {
        console.log("Question list is ready to be used:", questionList);
        
        for (let i = 0; i < qnum; i++) {
        

            const container = document.createElement("div");
            container.className = "box";
            container.id = "qa-container" + i;
                
            // Create and append the <h2> element
            const heading = document.createElement("h2");
            heading.textContent = question_h2;
            container.appendChild(heading);
    
            // Get a random question-answer pair from the list
            randomIndex = Math.floor(Math.random() * questionList.length);
            let { question, answer } = questionList[randomIndex];
    
            // Create and append the <h1> element
            const qa = document.createElement("h1");
            qa.id = "question";
            qa.textContent = question
            container.appendChild(qa);

            //append answer to list
            answers[i] = answer
    
            // Create and append the <input> element
            const input = document.createElement("input");
            input.type = "number";
            input.id = "user-answer" + i;
            input.placeholder = "Enter Your Answer Here";
            container.appendChild(input);
    
            // Create and append the <p> element for feedback
            const feedback = document.createElement("p");
            feedback.id = "feedback";
            container.appendChild(feedback);
    
            q_nodes.push(container)
    
            // Append the container to the body (or any other element you want)
            quiz_content.appendChild(container);
            console.log(q_nodes[i].id)
            
        };
    } else {
        console.log("Question list not loaded yet.");
    }

};

async function loadQuestions(qtype) {

    switch (qtype) {
        case 'add':
            filepath = 'datasets/addition.json'
            question_h2 = "ADD 2 NUMBERS";
            break;
        case 'sub':
            filepath = 'datasets/subtraction.json'
            question_h2 = "SUBTRACT 2 NUMBERS";
            break
        case 'mul':
            filepath = 'datasets/multiplication.json'
            break
        case 'div':
            filepath = 'datasets/division.json'
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
        createQuiz(); // Call any function that depends on questionList here
    } catch (error) {
        console.error("Failed to load JSON file:", error);
    }
    //change text above question based on quiz type
}



function quizType(qtype) {
    while (quiz_content.firstChild) {
        quiz_content.removeChild(quiz_content.firstChild)
    }
   
    switch (qtype) {
        case 'add':
            loadQuestions('add')
            break;
        case 'sub':condition
            loadQuestions('sub')
            break
        case 'mul':
            loadQuestions('mul')
            break
        case 'div':
            loadQuestions('div')
            break
        default:
            break;
    }
    

}

function submitQA() {
    console.log("submitted")
    let num_correct = 0
    for (let i = 0; i < q_nodes.length; i++) {
        if (answers[i] == parseInt(document.getElementById("user-answer" + i).value.trim())) {
            num_correct++
            
        }
    }
    console.log(num_correct)
    while (quiz_content.firstChild) {
        quiz_content.removeChild(quiz_content.firstChild)
    }
    //make an element to display quiz score and then do that
    const score = document.createElement("h1")
    score.textContent = num_correct + "/" + q_nodes.length + " correct"
    quiz_content.appendChild(score)

}