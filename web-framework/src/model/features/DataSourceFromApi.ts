import httpRequest, { AxiosPromise } from "../../config/url";

interface IhasId {
  id?: string;
}

export default class DataSourceFromApi<T extends IhasId> {
  constructor(private url: string) {}

  fetch = (id: string): AxiosPromise => httpRequest.get(`${this.url}/${id}`);

  save = (data: T): AxiosPromise =>
    !data.id
      ? httpRequest.post(this.url, data)
      : httpRequest.put(`${this.url}/${data.id}`, data);
}
