import Event from "./Event";
import DataSource from "./DataSource";

type userProps = {
  id?: string;
  name?: string;
  age?: number;
};

export default class User {
  public events: Event = new Event();
  public dataSource: DataSource<userProps> = new DataSource<userProps>("user");

  constructor(private data: userProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(newData: userProps): void {
    Object.assign(this.data, newData);
  }
}
