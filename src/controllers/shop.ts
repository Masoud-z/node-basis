import { NextFunction, Request, Response } from "express";
import Product from "../models/product";
import { GetProductParams } from "../dto/ProductDto";

export function getProducts(req: Request, res: Response, next: NextFunction) {
  const products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All products",
      path: "/products",
    });
  });
}

export function getProduct(
  req: Request<any, any, any, GetProductParams>,
  res: Response,
  next: NextFunction
) {
  console.log(req.query.productId);
  Product.getProductById(req.query.productId, (product) => {
    res.render("shop/product-detail", {
      product,
      pageTitle: product?.title,
      path: "/products",
    });
  });
}

export function getIndex(req: Request, res: Response, next: NextFunction) {
  const products = Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
}

export function getCart(req: Request, res: Response, next: NextFunction) {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
}

export function postCart(
  req: Request<any, any, GetProductParams>,
  res: Response,
  next: NextFunction
) {
  req.body.productId;
}

export function getOrders(req: Request, res: Response, next: NextFunction) {
  res.render("shop/orders", {
    pageTitle: "Your Orders",
    path: "/orders",
  });
}

export function getCheckout(req: Request, res: Response, next: NextFunction) {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/cart",
  });
}
