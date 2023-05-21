import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import ServiceUserObj from "@salesforce/schema/Service_User__c";
import DOB_FIELD from "@salesforce/schema/Service_User__c.Date_Of_Birth__c";
import NAME_FIELD from "@salesforce/schema/Service_User__c.Name__c";

export default class Create_Service_User extends LightningElement {
  objectApiName = ServiceUserObj.objectApiName;

  fields = [DOB_FIELD, NAME_FIELD];

  handleSuccess(e) {
    const evt = new ShowToastEvent({
      title: "Service User Created",
      message: "Record Id: " + e.detail.id,
      variant: "success"
    });
    this.dispatchEvent(evt);
  }
  resetForm() {
    const recordForm = this.template.querySelector("lightning-record-form");
    recordForm.recordId = null;
  }
}
