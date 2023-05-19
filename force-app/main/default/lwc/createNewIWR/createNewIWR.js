import { LightningElement } from "lwc";
// import IWRObject from "@salesforce/schema/Individual_Work_Report__c";
import IWRObject from "@salesforce/schema/Individual_Work_Report__c";
import DATE_FIELD from "@salesforce/schema/Individual_Work_Report__c.Date__c";
import DETAILS_FIELD from "@salesforce/schema/Individual_Work_Report__c.Details__c";
import FOLLOW_UP_FIELD from "@salesforce/schema/Individual_Work_Report__c.Follow_Up__c";
import PLANNED_FIELD from "@salesforce/schema/Individual_Work_Report__c.Planned__c";

export default class CreateNewIWR extends LightningElement {
  objectApiName = IWRObject.objectApiName;

  //expose a field to make it available in the template
  fields = [DATE_FIELD, DETAILS_FIELD, FOLLOW_UP_FIELD, PLANNED_FIELD];

  handleClick() {
    console.log(DATE_FIELD, DETAILS_FIELD, FOLLOW_UP_FIELD, this.objectApiName);
  }
}
