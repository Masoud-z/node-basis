import { NextFunction, Request, Response } from "express";
import { ProductDto } from "../dto/ProductDto";
import Product from "../models/product";

export function getAddProduct(req: Request, res: Response, next: NextFunction) {
  res.render("admin/add-product", {
    pageTitle: "admin/Add Product",
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
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    });
  }

