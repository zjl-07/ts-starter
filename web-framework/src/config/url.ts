import axios, { AxiosResponse } from "axios";

export default axios.create({
  baseURL: "http://localhost:3000"
});

export { AxiosResponse };
