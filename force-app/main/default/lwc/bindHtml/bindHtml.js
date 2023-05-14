import { LightningElement } from "lwc";

export default class BindHtml extends LightningElement {
  header = "First Component";
  body = "This is my first component for this app but I have made one before";

  handleViewMore() {
    console.log("viewing more");
  }
}
