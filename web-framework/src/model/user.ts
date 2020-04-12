import Event from "./features/Event";
import DataSource from "./features/DataSourceFromApi";
import Attribute from "./features/Attribute";
import Model from "./shared/Model";
import Collection from "./shared/Collection";

export type userProps = {
  id?: string;
  name?: string;
  age?: number;
};

const rootUrl = "user";

export default class User extends Model<userProps> {
  static build = (attr: userProps): User =>
    new User(
      new Attribute<userProps>(attr),
      new Event(),
      new DataSource<userProps>(rootUrl)
    );

  static buildUserCollection = (): Collection<User, userProps> =>
    new Collection<User, userProps>(rootUrl, (json: userProps) =>
      User.build(json)
    );

  setRandomAge = (): void => {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  };
}
