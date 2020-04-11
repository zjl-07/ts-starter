import Event from "./features/Event";
import DataSource from "./features/DataSourceFromApi";
import Attribute from "./features/Attribute";
import Model from "./shared/Model";

type userProps = {
  id?: string;
  name?: string;
  age?: number;
};

export default class User extends Model<userProps> {
  static start = (attr: userProps) =>
    new User(
      new Attribute<userProps>(attr),
      new Event(),
      new DataSource<userProps>("user")
    );
}
