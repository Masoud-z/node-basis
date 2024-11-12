import express from "express";
import path from "path";
import rootDir from "../util/path";
const adminRouter = express.Router();

adminRouter.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

adminRouter.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

export default adminRouter;
