import { LightningElement, wire } from "lwc";
import getAllRecords from "@salesforce/apex/IWRController.getAllRecords";

const columns = [
  { label: "Date", fieldName: "Date__c" },
  { label: "Detail", fieldName: "Detail__c" },
  { label: "Follow Up", fieldName: "Follow_Up__c" },
  { label: "Planned", fieldName: "Planned__c" }
];

export default class EveryIWR extends LightningElement {
  objectRecords;
  columns = columns;

  @wire(getAllRecords)
  wiredRecords({ error, data }) {
    if (data) {
      this.objectRecords = data;
      console.log(data, "DATA");
    } else if (error) {
      console.error("Error fetching records:", error);
    }
  }
}
