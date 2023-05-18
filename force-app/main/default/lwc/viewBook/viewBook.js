import { LightningElement, api } from "lwc";
import NAME_FIELD from "@salesforce/schema/Book__c.name";

export default class ViewBook extends LightningElement {
  nameField = NAME_FIELD;

  @api recordId;
  @api objectApiName;
}
