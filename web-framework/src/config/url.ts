import axios, { AxiosResponse, AxiosPromise } from "axios";

export default axios.create({
  baseURL: "http://localhost:3000"
});

export { AxiosResponse, AxiosPromise };
