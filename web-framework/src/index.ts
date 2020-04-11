import User from "./model/User";

const user = new User({ id: 1 });

user.on("change", function () {
  console.log("User Changed");
});

user.on("save", () => alert("Successfully saving data"));

user.fetch();
