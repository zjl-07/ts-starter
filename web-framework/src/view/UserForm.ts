import User, { userProps } from "../model/User";
import View from "./View";

export default class UserForm extends View<User, userProps> {
  eventMap = (): { [key: string]: () => void } => ({
    "click:.setAgeButton": this.onSetAgeButtonClick,
    "click:.updateNameButton": this.onUpdateNameButtonClick,
  });

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
        <H1>Edit Form</H1>
        <pre>User name : ${this.data.get("name")}</pre>
        <pre>User age  : ${this.data.get("age")}</pre>
        <input/>
        <button class="setAgeButton">SET RANDOM AGE</button>
        <button class="updateNameButton">UPDATE NAME</button>
    </div>
  `;
}
