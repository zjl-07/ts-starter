import httpRequest, { AxiosPromise } from "../config/url";

interface IhasId {
  id?: string;
}

export default class DataSource<T extends IhasId> {
  constructor(private url: string) {}

  fetch(id: string): AxiosPromise {
    return httpRequest.get(`${this.url}/${id}`);
  }

  save(data: T): AxiosPromise {
    const id = data.id;

    return !id
      ? httpRequest.post(this.url, data)
      : httpRequest.put(`${this.url}/${id}`, data);
  }
}
