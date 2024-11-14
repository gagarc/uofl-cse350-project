const quiz_content = document.getElementById("quiz-content");


function createBox(qnum){
    for (let i = 0; i < qnum; i++) {
        const container = document.createElement("div");
        container.className = "box";
        container.id = "qa-container" + i;
            
        // Add inner HTML content
        container.innerHTML = `
            <h2>ADD 2 NUMBERS</h2>
            <h1 id="question"></h1>
            <input type="number" id="user-answer" placeholder="Enter Your Answer Here">
            <p id="feedback"></p>
            `;
        // Append the container to the body (or any other element you want)
        quiz_content.appendChild(container);
    };
};