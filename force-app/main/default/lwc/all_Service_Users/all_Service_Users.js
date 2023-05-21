import { LightningElement, wire } from "lwc";
import getAllServiceUsers from "@salesforce/apex/ServiceUserController.getAllServiceUsers";

export default class All_Service_Users extends LightningElement {
  serviceUserRecords;

  @wire(getAllServiceUsers)
  wireRecords({ error, data }) {
    console.log(data, "data");
    if (data) this.serviceUserRecords = data;
    if (error) console.log("Fetching data encountered an error " + error);
  }
}
