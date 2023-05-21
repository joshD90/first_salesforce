@IsTest
private class IWRControllerTest {
    @IsTest
    static void testGetAllRecords() {
        // Create test data
        List<Individual_Work_Report__c> testRecords = new List<Individual_Work_Report__c>();
        // Populate the testRecords list with test data

        // Insert the test data
        insert testRecords;

        // Call the getAllRecords method
        List<Individual_Work_Report__c> result = IWRController.getAllRecords();

        // Perform assertions to validate the results
        System.assertEquals(testRecords.size(), result.size(), 'Incorrect number of records returned');
        // Perform additional assertions as needed
    }
}
