import { Request, Response } from "express";
import { get, controller } from "./decorators";

@controller("/")
class RootController {
  @get("/")
  getHomePage(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
            <div>
                <div>
                    Your're Logged In!
                </div>
                <div>
                    <a href="/auth/logout">Logout</a>
                </div>
            </div>
        `);
    } else {
      res.send(`
            <div>
                <a href="/auth/login">Login</a>
            </div>
        `);
    }
  }
}
