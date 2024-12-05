# Louie Learns Math

Project Repository for CSE350 Intro to Software Engineering Project

Team Members: Alba Cuns, Gerardo Garcia, Mason McDonald, Titus Murdock

## Description

Hello! Welcome to our web-based Math e-Learning Tool, a project developed as part of the CSE 350 - Introduction to Software Engineering course at the University of Louisville. The primary goal of this project is to create an engaging, interactive platform for middle school students to learn and practice basic math operations.

The web page offers a variety of modes designed to enhance the learning experience, including practice, quizzes, a built-in calculator, as well as lecture notes. The user can choose specific arithmetic modules, among addition, subtraction, multiplication or division, for more focused practice and quizzes.

## Features
* Modules:
    - One for each of the arithmetic operations: addition, subtraction, multipliation and division.
* Calculator:
    - A simple easy to use calculator for practice and review modes, which supports basic operation: addition, subtraction, multiplication, division.
* Lectures:
    - Provided study materials and additional resources to help the user learn and understand the concepts before practice and quizzes.
* Practice:
    - Guided practice session for each different module with immediate feedback without scoring or time constraints, being the questions generated randomly from each dataset.
* Quiz:
    - Tests the knowledge of the users across the different modules, with options to focus in a specific one, through 10 different question, showing the scores after submission only. 

## Development and Design
### Requirements gathering
The requirement were gathered through brainstorming and use case scenarios based on the team members' experience with similar software like MyMathLab, Khan Academy, or GeoGebra. Some of the requirements were:
* Allow the user to input an answer.
* The system/ program outputs feedback, scores and points,...
* There are different modules for addition, subtraction, division and multiplication, which form the basic arithmetic operations unit.
* Each module has its own practice questions and review quiz.

### Architecture
The Model-View-Controller (MVC) design patterns was used:
* Model: It manages the data and businnes logic, retrieving the questions and answers from the JSON files.
* View: The user interface was built with HTML and CSS.
* Controller: It is the communication bridge, handling the user input and updating the view and model after each action.
  
### Tools and frameworks
* Languages: HTML, CSS and JavaScript.
* Datasets: Questions and answers are stpred in 4 different JSON files as datasets for each arithmetic operation. The addition dataset was found online at https://huggingface.co/datasets/WforGodot/Addition, and modifief to reduce size and complexity of the problems, since it is focused towards younger kids. The other datasets were created based on the addition dataset's structure and principles.
* Version Control: GitHub repository with 2 different branches: development and production.
  
## Testing
Manual testing was performed across multiple devices (laptops, mobile devices...) and browsers to ensure responsiveness and functionality. 
* Functional testing: check correct outputs for given inputs.
* Navigation testing: check all buttons, links and tabs lead to the intended page.
* Responsiveness testing: check consistency across different screen sizes and resolutions.
  
## Security and Scalability
Currently, the use of JSON files instead of a database systems minimizes security and attack issues, as well as simplifies data management. Some future enhancements are implementing user accounts, progress tracking, more modules... and look into a permanent URL and web server.

## Challenges and Risk Management

The main challenges were:
* Limited prior experience of the team members in software development.
* Coordination of meetings due to conflicting schedules.
* Integration of back-end and front-end.

And some strategies used were:
* Kanban board
* Weekly check-ins.
* Code reviews.
  
## Installation and Setup
1. Clone the repository:
```bash
git clone https://github.com/gagarc/uofl-cse350-project.git
```

2. Navigate the project directory and run the platform locally with an IDE.


