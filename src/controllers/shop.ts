import { NextFunction, Request, Response } from "express";
import Product from "../models/product";
import { GetProductParams } from "../dto/ProductDto";
import { CartInstance } from "../dto/cartDto";

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
  Product.findOne({ where: { id: req.params.productId } }).then((product) => {
    if (product) {
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products",
      });
    }
  });
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
  req.user
    .getCart()
    .then((cart) => {
      return cart
        .getProducts()
        .then((products) => {
          res.render("shop/cart", {
            path: "/cart",
            pageTitle: "Your Cart",
            products: products,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  // Cart.getCart((cart) => {
  //   Product.fetchAll((products) => {
  //     const cartProducts = [];
  //     for (let product of products) {
  //       const cartProductData = cart.products.find(
  //         (prod) => prod.id === product.id
  //       );
  //       if (cartProductData) {
  //         cartProducts.push({ productData: product, qty: cartProductData.qty });
  //       }
  //     }
  //     res.render("shop/cart", {
  //       path: "/cart",
  //       pageTitle: "Your Cart",
  //       products: cartProducts,
  //     });
  //   });
  // });
}

export function postCart(
  req: Request<any, any, GetProductParams>,
  res: Response,
  next: NextFunction
) {
  const prodId = req.body.productId;
  let fetchedCart: CartInstance;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((products) => {
      const product = products[0];
      let newQuantity = 1;
      if (product) {
      }
      return Product.findByPk(prodId)
        .then((product) => {
          if (product)
            return fetchedCart.addProduct(product, {
              through: { quantity: newQuantity },
            });
        })
        .catch((err) => console.log(err));
    })
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
}

export function postCartDeleteProduct(
  req: Request<any, any, GetProductParams>,
  res: Response,
  next: NextFunction
) {}

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
