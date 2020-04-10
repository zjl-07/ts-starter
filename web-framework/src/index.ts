import User from "./model/user";
import httpRequest from "./config/url";

const user = new User({ id: "1" });
user.fetch();
console.log("aa", user);
