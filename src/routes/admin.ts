import express from "express";
import path from "path";
import rootDir from "../util/path";
const adminRouter = express.Router();

export const products: { title: string }[] = [];

adminRouter.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

adminRouter.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export default adminRouter;
