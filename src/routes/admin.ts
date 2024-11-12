import express from "express";
import path from "path";
const adminRouter = express.Router();

adminRouter.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "views", "add-product.html"));
});

adminRouter.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

export default adminRouter;
