import "reflect-metadata";

import { RequestHandler } from "express";
import { METADATA_KEYS } from "../../utils/enums";

export const use = (middleware: RequestHandler) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  const middlewares =
    Reflect.getMetadata(METADATA_KEYS.MIDDLEWARE, target, key) || [];

  Reflect.defineMetadata(
    METADATA_KEYS.MIDDLEWARE,
    [...middlewares, middleware],
    target,
    key
  );
};
