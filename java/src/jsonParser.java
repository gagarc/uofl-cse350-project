import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Random;

public class jsonParser {

    public static String getJSONFromFile(String filename) {
        StringBuilder jsonText = new StringBuilder();
        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                jsonText.append(line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonText.toString();
    }

    public static void printRandomQuestionAnswerPair(String filename) {
        String jsonText = getJSONFromFile(filename);
        ArrayList<QuestionAnswer> questionAnswerList = parseJsonToList(jsonText);

        if (questionAnswerList.isEmpty()) {
            System.out.println("No data found in the JSON file.");
            return;
        }

        Random random = new Random();
        int randomIndex = random.nextInt(questionAnswerList.size());
        QuestionAnswer randomPair = questionAnswerList.get(randomIndex);

        System.out.println("\"question\": \"" + randomPair.getQuestion() + "\", \"answer\": \"" + randomPair.getAnswer() + "\"");
    }

    private static ArrayList<QuestionAnswer> parseJsonToList(String jsonText) {
        ArrayList<QuestionAnswer> questionAnswerList = new ArrayList<>();

        jsonText = jsonText.substring(1, jsonText.length() - 1);
        String[] entries = jsonText.split("\\},\\{");

        for (String entry : entries) {
            entry = entry.replace("{", "").replace("}", "").replace("\"", "");
            String[] keyValuePairs = entry.split(",");

            String question = null;
            String answer = null;

            for (String pair : keyValuePairs) {
                String[] keyValue = pair.split(":");
                if (keyValue[0].trim().equals("question")) {
                    question = keyValue[1].trim();
                } else if (keyValue[0].trim().equals("answer")) {
                    answer = keyValue[1].trim();
                }
            }

            if (question != null && answer != null) {
                questionAnswerList.add(new QuestionAnswer(question, answer));
            }
        }
        return questionAnswerList;
    }
}

class QuestionAnswer {
    private final String question;
    private final String answer;

    public QuestionAnswer(String question, String answer) {
        this.question = question;
        this.answer = answer;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }
}