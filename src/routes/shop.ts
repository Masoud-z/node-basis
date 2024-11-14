import express from "express";
import { products } from "./admin";

const shopRouter = express.Router();

shopRouter.get("/", (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

export default shopRouter;
