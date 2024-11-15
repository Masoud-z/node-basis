import { NextFunction, Request, Response } from "express";
import Product from "../models/product";
import { ProductDto } from "../dto/ProductDto";

export function getAddProduct(req: Request, res: Response, next: NextFunction) {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
}

export function postAddProduct(
  req: Request<any, any, ProductDto>,
  res: Response,
  next: NextFunction
) {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
}

export function getProducts(req: Request, res: Response, next: NextFunction) {
  const products = Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
}
