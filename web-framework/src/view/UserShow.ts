import User, { userProps } from "../model/User";
import View from "./View";

export default class UserShow extends View<User, userProps> {
  template = () => `
    <div>
        <pre>User Name: ${this.data.get("name")}</pre>
        <pre>User Age : ${this.data.get("age")}</pre>
    </div>
  `;
}
