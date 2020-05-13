import "reflect-metadata";
import { REQUEST_TYPE, METADATA_KEYS } from "../../utils/enums";

const routeBinder = (method: REQUEST_TYPE) => (path: string) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  Reflect.defineMetadata(METADATA_KEYS.PATH, path, target, key);
  Reflect.defineMetadata(METADATA_KEYS.METHOD, method, target, key);
};

export const get = routeBinder(REQUEST_TYPE.GET);
export const post = routeBinder(REQUEST_TYPE.POST);
export const del = routeBinder(REQUEST_TYPE.DELETE);
export const patch = routeBinder(REQUEST_TYPE.PATCH);
export const put = routeBinder(REQUEST_TYPE.PUT);
