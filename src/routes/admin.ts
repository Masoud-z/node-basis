import express from "express";
import path from "path";
import rootDir from "../util/path";
const adminRouter = express.Router();

export const products: { title: string }[] = [];

adminRouter.get("/add-product", (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

adminRouter.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export default adminRouter;
