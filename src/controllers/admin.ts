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
  const title = req.body.title;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;

  const product = new Product(title, imageUrl,description, price);
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
