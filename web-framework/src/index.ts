import UserForm from "./view/UserForm";
import User from "./model/User";

const user = User.build({ name: "emilda zhang haha", age: 21 });

const userForm = new UserForm(document.getElementById("root"), user);
userForm.render();
