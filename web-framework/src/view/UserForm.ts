import User, { userProps } from "../model/User";
import View from "./View";

export default class UserForm extends View<User, userProps> {
  eventMap = (): { [key: string]: () => void } => ({
    "click:.setAgeButton": this.onSetAgeButtonClick,
    "click:.updateNameButton": this.onUpdateNameButtonClick,
    "click:.saveButton": this.onSaveButtonClick,
  });

  onSaveButtonClick = (): void => this.data.save();
  onSetAgeButtonClick = (): void => this.data.setRandomAge();
  onUpdateNameButtonClick = (): void => {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;
      this.data.set({ name });
    }
  };

  template = () => `
    <div>
        <input placeholder="${this.data.get("name")}"/>
        <button class="setAgeButton">SET RANDOM AGE</button>
        <button class="updateNameButton">UPDATE NAME</button>
        <button class="saveButton">SAVE</button>
    </div>
  `;
}
