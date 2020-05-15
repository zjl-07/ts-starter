import { Request, Response, NextFunction } from "express";
import { get, controller, use, post, required } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  next();
}

@controller("/auth")
class LoginController {
  @get("/login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
			<div>
				<H1>Login</H1>
				<form method="POST" >
					<div>
						<pre>Email    : <input type="text" name="email"/></pre>
					</div>
					<div>
						<pre>Password : <input type="password" name="password"/></pre>
					</div>
					<button>Submit</button>
				</form>
			</div>
		`);
  }

  @post("/login")
  @required("email", "password")
  postLogin(req: Request, res: Response): void {
    const { password, email } = req.body;

    if (
      email &&
      password &&
      email == "emilda@emilda.com" &&
      password == "password"
    ) {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect("/");
  }
}
