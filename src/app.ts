import bodyParser from "body-parser";
import express from "express";
import adminRouter from "./routes/admin";
import shopRouter from "./routes/shop";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin",adminRouter);

app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(3000);
