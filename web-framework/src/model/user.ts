import { AxiosResponse, AxiosError } from "axios";
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

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attribute.get;
  }

  set = (data: userProps) => {
    this.attribute.set(data);
    this.trigger("change");
  };

  fetch() {
    const id = this.attribute.get("id");

    if (!id) {
      throw new Error("Cannot Fetch Id of undefined");
    }

    this.dataSource.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save = () => {
    const data = this.attribute.getAll();

    this.dataSource
      .save(data)
      .then((res: AxiosResponse) => this.trigger("save"))
      .catch((err: AxiosError) => alert(err));
  };
}
