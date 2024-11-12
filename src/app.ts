import bodyParser from "body-parser";
import express from "express";
import adminRouter from "./routes/admin";
import shopRouter from "./routes/shop";
import testRouter from "./routes/test";
import path from "path";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);

app.use("/test", testRouter);

app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
});

app.listen(3000);
