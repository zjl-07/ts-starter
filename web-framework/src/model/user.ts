import httpRequest, { AxiosResponse } from "../config/url";

type userProps = {
  id?: string;
  name?: string;
  age?: number;
};

type Callback = () => void;

export default class User {
  events: {
    [key: string]: Callback[];
  } = {};

  constructor(private data: userProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(newData: userProps): void {
    Object.assign(this.data, newData);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);

    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers) {
      return;
    }

    handlers.forEach((callback) => callback());
  }

  fetch(): void {
    const id = this.get("id");

    httpRequest
      .get(`user/${id}`)
      .then((res: AxiosResponse) => this.set(res.data));
  }

  save(): void {
    const id = this.get("id");

    !id
      ? httpRequest.post("user", this.data)
      : httpRequest.put(`user/${id}`, this.data);
  }
}
