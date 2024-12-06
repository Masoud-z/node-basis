import { NextFunction, Request, Response } from "express";
import Product from "../models/product";
import { GetProductParams } from "../dto/ProductDto";
import Cart from "../models/cart";

export function getProducts(req: Request, res: Response, next: NextFunction) {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getProduct(
  req: Request<GetProductParams>,
  res: Response,
  next: NextFunction
) {
  Product.findOne({ where: { id: req.params.productId } }).then(
    (product) => {
      if(product) {
        res.render("shop/product-detail", {
          product: product,
          pageTitle: product.title,
          path: "/products",
        });
  );
  
}

export function getIndex(req: Request, res: Response, next: NextFunction) {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getCart(req: Request, res: Response, next: NextFunction) {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (let product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
}

export function postCart(
  req: Request<any, any, GetProductParams>,
  res: Response,
  next: NextFunction
) {
  Product.findById(req.body.productId, (product) => {
    if (product) {
      Cart.addProduct(req.body.productId, product.price);
      res.redirect("/cart");
    }
  });
}

export function postCartDeleteProduct(
  req: Request<any, any, GetProductParams>,
  res: Response,
  next: NextFunction
) {
  Product.findById(req.body.productId, (product) => {
    if (product) {
      Cart.deleteProduct(req.body.productId, product.price);
      res.redirect("/cart");
    }
  });
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
