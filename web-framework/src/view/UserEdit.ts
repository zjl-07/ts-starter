import User, { userProps } from "../model/User";
import UserForm from "./UserForm";
import UserShow from "./UserShow";
import View from "./View";

export default class UserEdit extends View<User, userProps> {
  regionsMap = (): { [key: string]: string } => ({
    userShow: ".userShow",
    userForm: ".userForm",
  });

  onRender = (): void => {
    new UserShow(this.regions.userShow, this.data).render();
    new UserForm(this.regions.userForm, this.data).render();
  };

  template = () => `
    <div>
        <h1>User Edit Form</h1>
        <div class="userShow"></div>
        <div class="userForm"></div>
    </div>
  `;
}
