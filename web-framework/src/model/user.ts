import Event from "./Event";
import DataSource from "./DataSource";
import Attribute from "./Attribute";

type userProps = {
  id?: string;
  name?: string;
  age?: number;
};

export default class User {
  public events: Event = new Event();
  public dataSource: DataSource<userProps> = new DataSource<userProps>("user");
  public attribute: Attribute<userProps>;

  constructor(attr: userProps) {
    this.attribute = new Attribute<userProps>(attr);
  }
}
