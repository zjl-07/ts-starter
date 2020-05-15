import "reflect-metadata";
import { METADATA_KEYS } from "../../utils/enums";

export const required = (...keys: string[]) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  Reflect.defineMetadata(METADATA_KEYS.VALIDATOR, keys, target, key);
};
