import User, { userProps } from "./model/User";
import Collection from "./model/shared/Collection";

const user = User.build({ id: "aeef" });
const allUser = User.buildUserCollection();
allUser.fetch();
