import express from "express";
import bodyParser from "body-parser";
import router from "./login";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => console.log("listen to port 3000"));
