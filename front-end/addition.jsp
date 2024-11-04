<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head> <!-- Name of tab -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css"> <!--Link to the .css file-->
    <title> Cool Math Games | Addition </title>
</head>

<body>
<header id="mainheader">
    <h1><a href="index.html"> coolmathgames.com </a></h1> <!-- href is used to link -->
</header>

<nav id="mainnavbar">     <!--Horizontal navigation bar-->
    <!--List of elements-->
    <ul>
        <li><a href="askprofessor.html"> Ask Professor </a></li>
        <li><a href="practice.html"> Practice </a></li>
        <li><a href="calculator.html"> Calculator </a></li>
        <li><a href="quiz.html"> Quiz </a></li>
    </ul>

    <!--Search bar-->
    <form>
        <input type="search" name="q" placeholder="Search" />
        <input type="submit" value="Find" />
    </form>
</nav>


<main>
    <div>
        <h1> Practice Problems </h1>
        <form action="problemServlet" method="post">
            <p><strong>Question:</strong> ${questionText}</p>

            <input type="text" name="answer" placeholder="Enter your answer" required>
            <button type="submit">Submit</button>
        </form>

        <c:if test="${not empty resultMessage}">
            <p class="result">${resultMessage}</p>
        </c:if>
    </div>

    <aside> <!-- Menu on the side -->
        <p>
        <ol>
            <li> item </li>
            <li> item </li>
            <li> item </li>
        </ol>
        </p>
    </aside>
</main>

<footer>
    <p> CONTACT US </p>
</footer>
</body>
</html>
