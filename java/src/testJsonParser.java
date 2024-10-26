public class testJsonParser {
    public static void main(String[] args) {
        String additionData = "datasets/addition.json";
        String subtractionData = "datasets/subtraction.json";

        String jsonContentAdd = jsonParser.getJSONFromFile(additionData);
        String jsonContentSub = jsonParser.getJSONFromFile(subtractionData);
        
        System.out.println(jsonContentAdd);
        jsonParser.printRandomQuestionAnswerPair(additionData);
        jsonParser.printRandomQuestionAnswerPair(subtractionData);
    }
}
