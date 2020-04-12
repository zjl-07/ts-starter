import Event from "../features/Event";
import httpRequest, { AxiosResponse } from "../../config/url";

export default class Collection<T, K> {
  collection: T[] = [];
  events: Event = new Event();

  constructor(private urlPath: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    httpRequest.get(this.urlPath).then((res: AxiosResponse) => {
      res.data.forEach((el: K) => this.collection.push(this.deserialize(el)));
      this.trigger("change");
    });
  }
}
