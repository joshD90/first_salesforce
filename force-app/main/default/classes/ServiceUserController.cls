public with sharing class ServiceUserController {


   @AuraEnabled(cacheable=true)
  
   public static List<Service_User__c>getAllServiceUsers(){
    return [SELECT Date_Of_Birth__c, Name__c FROM Service_User__c];
   }
}