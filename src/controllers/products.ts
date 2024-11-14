import { NextFunction, Request, Response } from "express";
export const products: { title: string }[] = [];

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
  req: Request,
  res: Response,
  next: NextFunction
) {
  products.push({ title: req.body.title });
  res.redirect("/");
}

export function getProducts(req: Request, res: Response, next: NextFunction) {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
}
