public with sharing class IWRController {

    public IWRController(){

    }
    @AuraEnabled (cacheable=true)

        public static List<Individual_Work_Report__c> getAllRecords(){
            return [SELECT Date__c, Details__c,Follow_Up__c,Planned__c FROM Individual_Work_Report__c];
        }
    
}