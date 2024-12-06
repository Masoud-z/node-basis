import bodyParser from "body-parser";
import express from "express";
import adminRouter from "./routes/admin";
import shopRouter from "./routes/shop";
import path from "path";
import rootDir from "./util/path";
import { notFoundPage } from "./controllers/notFound";
import sequelize from "./util/database";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRouter);

app.use(shopRouter);

app.use(notFoundPage);

sequelize
  .sync()
  .then((result) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("error: ", err);
  });

app.listen(3000);
