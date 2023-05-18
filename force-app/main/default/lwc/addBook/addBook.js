import { LightningElement } from "lwc";
import { createRecord } from "lightning/uiRecordApi";

import BOOK_OBJECT from "@salesforce/schema/Book__c";
import NAME_FIELD from "@salesforce/schema/Book__c.Name";
import PRICE_FIELD from "@salesforce/schema/Book__c.Price__c";

export default class AddBook extends LightningElement {
  name = "";
  price = 0;
  error = "";
  success = "";

  handleNameChange(e) {
    this.name = e.target.value;
  }
  handlePriceChange(e) {
    this.price = e.target.value;
  }
  handleClick(e) {
    e.preventDefault();

    if (this.name === "" || this.price === 0) return;

    const fields = {};
    fields[NAME_FIELD.fieldApiName] = this.name;
    fields[PRICE_FIELD.fieldApiName] = this.price;

    const recordInput = { apiName: BOOK_OBJECT.objectApiName, fields };

    createRecord(recordInput)
      .then((res) => {
        const successMessage =
          JSON.stringify(res) + "Successfully created record maybe";
        this.success = successMessage;
        console.log(successMessage);
      })
      .catch((err) => {
        this.error = err.message;
      });
  }
}
