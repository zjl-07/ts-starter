import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import AppRouter from "./appRouter";
import "./controllers/RootController";
import "./controllers/LoginController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["ksakmskamsk"] }));
app.use(AppRouter.getInstance());
app.listen(3000, () => console.log("listen to port 3000"));
