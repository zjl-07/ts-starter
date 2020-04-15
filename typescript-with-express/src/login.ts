import { Router, Request, Response } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response) => {
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
});

router.post("/login", (req: Request, res: Response) => {
  const { password, email } = req.body;
  res.send(password + email);
});

export default router;
