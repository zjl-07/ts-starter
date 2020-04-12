import UserForm from "./view/UserForm";
import User from "./model/User";

const user = User.build({ name: "emilda zhang haha", age: 21 });

const root = document.getElementById("root");
if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  alert("root element not found in document");
}
