import User from "./model/User";

const user = User.start({ name: "emilda", age: 30 });

user.get("age");
console.log(user);
