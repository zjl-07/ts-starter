import UserEdit from "./view/UserEdit";
import User from "./model/User";

const user = User.build({ name: "emilda zhang haha", age: 21 });

const root = document.getElementById("root");
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  alert("root element not found in document");
}
