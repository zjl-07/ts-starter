export default class Attribute<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => this.data[key];

  getAll = (): T => this.data;

  set = (newData: T): void => {
    Object.assign(this.data, newData);
  };
}
