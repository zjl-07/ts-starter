import { AxiosPromise, AxiosResponse, AxiosError } from "axios";

interface Attribute<T> {
  get<K extends keyof T>(key: K): T[K];
  set(newData: T): void;
  getAll(): T;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface DataSourceFromApi<T> {
  fetch(id: string): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface HasId {
  id?: string;
}

export default class Model<T extends HasId> {
  constructor(
    private attribute: Attribute<T>,
    private events: Events,
    private dataSourceFromApi: DataSourceFromApi<T>
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attribute.get;

  set = (data: T) => {
    this.attribute.set(data);
    this.trigger("change");
  };

  fetch = (): void => {
    const id = this.attribute.get("id");

    if (!id) {
      throw new Error("Cannot Fetch Id of undefined");
    }

    this.dataSourceFromApi.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  };

  save = (): void => {
    const data = this.attribute.getAll();

    this.dataSourceFromApi
      .save(data)
      .then((res: AxiosResponse) => this.trigger("save"))
      .catch((err: AxiosError) => alert(err));
  };
}
