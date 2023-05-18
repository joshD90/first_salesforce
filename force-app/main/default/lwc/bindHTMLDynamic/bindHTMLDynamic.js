import { LightningElement } from "lwc";

export default class BindHTMLDynamic extends LightningElement {
  classOptions = ["red", "yellow", "green", "blue", "orange"];
  currentClass = "blue";
  name = "";

  setNewClass() {
    const currentIndex = this.classOptions.indexOf(this.currentClass);
    const nextIndex =
      currentIndex + 1 > this.classOptions.length - 1 ? 0 : currentIndex + 1;

    return this.classOptions[nextIndex];
  }

  handleClick() {
    this.currentClass = this.setNewClass();
  }

  handleInputChange(e) {
    this.name = e.target.value;
  }
  
}
