import "reflect-metadata";
import AppRouter from "../../appRouter";
import { REQUEST_TYPE, METADATA_KEYS } from "../../utils/enums";

export function controller(prefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        METADATA_KEYS.PATH,
        target.prototype,
        key
      );

      const method: REQUEST_TYPE = Reflect.getMetadata(
        METADATA_KEYS.METHOD,
        target.prototype,
        key
      );

      if (path) {
        router[method](`${prefix}${path}`, routeHandler);
      }
    }
  };
}
