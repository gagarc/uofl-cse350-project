public class testJsonParser {
    public static void main(String[] args) {
        String additionData = "front-end/datasets/addition.json";
        String subtractionData = "front-end/datasets/subtraction.json";

        String jsonContentAdd = jsonParser.getJSONFromFile(additionData);
        String jsonContentSub = jsonParser.getJSONFromFile(subtractionData);
        
        //System.out.println(jsonContentAdd);
        jsonParser.printRandomQuestionAnswerPair(additionData);
        jsonParser.printRandomQuestionAnswerPair(subtractionData);
    }
}