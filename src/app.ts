import bodyParser from "body-parser";
import express from "express";
import adminRouter from "./routes/admin";
import shopRouter from "./routes/shop";
import path from "path";
import rootDir from "./util/path";
import testRouter from "./routes/test";
import { notFoundPage } from "./controllers/notFound";
import pool from "./util/database";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const db = pool;
db.execute("SELECT * FROM products");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRouter);

app.use("/test", testRouter);

app.use(shopRouter);

app.use(notFoundPage);

app.listen(3000);
