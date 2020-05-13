import { Request, Response } from "express";
import { get, controller } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
			<div>
				<H1>Login</H1>
				<form method="POST" >
					<div>
						<pre>Email    : <input type="text" name="email"/></pre>
					</div>
					<div>
						<pre>Password : <input type="password" name="passowrd"/></pre>
					</div>
					<button>Submit</button>
				</form>
			</div>
		`);
  }

  getMany(req: Request, res: Response): void {
    res.send(`
			<div>
				<H1>Login</H1>
				<form method="POST" >
					<div>
						<pre>Email    : <input type="text" name="email"/></pre>
					</div>
					<div>
						<pre>Password : <input type="password" name="passowrd"/></pre>
					</div>
					<button>Submit</button>
				</form>
			</div>
		`);
  }
}
