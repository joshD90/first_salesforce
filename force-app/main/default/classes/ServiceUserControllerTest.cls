@isTest
public class ServiceUserControllerTest {
    @isTest
    static void testGetAllServiceUsers() {
        // Create test data
        Service_User__c user1 = new Service_User__c(Name__c = 'User 1', Date_Of_Birth__c = Date.today());
        Service_User__c user2 = new Service_User__c(Name__c = 'User 2', Date_Of_Birth__c = Date.today());
        insert new List<Service_User__c>{user1, user2};
        
        // Call the method to test
        Test.startTest();
        List<Service_User__c> serviceUsers = ServiceUserController.getAllServiceUsers();
        Test.stopTest();
        
        // Verify the results
        System.assertEquals(2, serviceUsers.size());
        System.assertEquals('User 1', serviceUsers[0].Name__c);
        System.assertEquals('User 2', serviceUsers[1].Name__c);
        // Add more assertions as needed
    }
}
