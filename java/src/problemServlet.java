import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;

public class QuizServlet extends HttpServlet {
    private ArrayList<QuestionAnswer> questionAnswerList;
    private QuestionAnswer currentQuestion;

    @Override
    public void init() throws ServletException {
        String jsonFilePath = getServletContext().getRealPath("/WEB-INF/questions.json");
        String jsonData = jsonParser.getJSONFromFile(jsonFilePath);
        questionAnswerList = jsonParser.parseJsonToList(jsonData);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Select a random question
        Random random = new Random();
        currentQuestion = questionAnswerList.get(random.nextInt(questionAnswerList.size()));

        // Set the question and answer as request attributes
        request.setAttribute("questionText", currentQuestion.getQuestion());
        request.setAttribute("correctAnswer", currentQuestion.getAnswer());

        // Forward to the JSP
        RequestDispatcher dispatcher = request.getRequestDispatcher("quiz.jsp");
        dispatcher.forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Get the user's answer from the request
        String userAnswer = request.getParameter("answer").trim();

        // Compare with the correct answer
        String resultMessage;
        if (userAnswer.equalsIgnoreCase(currentQuestion.getAnswer().trim())) {
            resultMessage = "Correct!";
        } else {
            resultMessage = "Incorrect. The correct answer was: " + currentQuestion.getAnswer();
        }

        // Set result message to be displayed on the JSP page
        request.setAttribute("questionText", currentQuestion.getQuestion());
        request.setAttribute("resultMessage", resultMessage);

        // Forward back to the JSP
        RequestDispatcher dispatcher = request.getRequestDispatcher("quiz.jsp");
        dispatcher.forward(request, response);
    }
}
