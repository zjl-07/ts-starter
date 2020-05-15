import "reflect-metadata";
import AppRouter from "../../appRouter";
import { REQUEST_TYPE, METADATA_KEYS } from "../../utils/enums";
import { RequestHandler, NextFunction, Request, Response } from "express";

const BodyValidator = (keys: string): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
      res.status(422).send("invalid status");
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send("invalid status");
        return;
      }
    }

    next();
  };
};

export const controller = (prefix: string) => (target: Function) => {
  const router = AppRouter.getInstance();

  for (let key in target.prototype) {
    const routeHandler = target.prototype[key];
    const path = Reflect.getMetadata(METADATA_KEYS.PATH, target.prototype, key);
    const method: REQUEST_TYPE = Reflect.getMetadata(
      METADATA_KEYS.METHOD,
      target.prototype,
      key
    );
    const middlewares =
      Reflect.getMetadata(METADATA_KEYS.MIDDLEWARE, target.prototype, key) ||
      [];

    const requiredBodyProps =
      Reflect.getMetadata(METADATA_KEYS.VALIDATOR, target.prototype, key) || [];

    const validator = BodyValidator(requiredBodyProps);

    path &&
      router[method](
        `${prefix}${path}`,
        ...middlewares,
        validator,
        routeHandler
      );
  }
};
