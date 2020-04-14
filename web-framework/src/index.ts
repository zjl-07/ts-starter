import UserEdit from "./view/UserEdit";
import User, { userProps } from "./model/User";
import UserCollectionView from "./view/UserCollectionView";
import Collection from "./model/shared/Collection";

// const user = User.build({ name: "emilda zhang haha", age: 21 });

// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
//   console.log(userEdit);
// } else {
//   alert("root element not found in document");
// }

const users = new Collection<User, userProps>("user", (res: userProps) =>
  User.build(res)
);

users.on("change", () => {
  const root = document.getElementById("root");
  if (root) {
    new UserCollectionView(users, root).render();
  }
});

users.fetch();
