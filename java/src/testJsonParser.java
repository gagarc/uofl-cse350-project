public class testJsonParser {
    public static void main(String[] args) {
        String jsonContent = jsonParser.getJSONFromFile("datasets\\addition.json");
        System.out.println(jsonContent);
    }
}
