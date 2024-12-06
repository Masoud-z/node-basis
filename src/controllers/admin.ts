import { NextFunction, Request, Response } from "express";
import { GetProductParams, ProductDto } from "../dto/ProductDto";
import Product from "../models/product";

export function getAddProduct(req: Request, res: Response, next: NextFunction) {
  res.render("admin/edit-product", {
    pageTitle: "admin/Add Product",
    path: "/admin/add-product",
    editing: false,
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

  Product.create({ title, description, imageUrl, price })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getEditProduct(
  req: Request<GetProductParams, any, any, { edit: "true" | "false" }>,
  res: Response,
  next: NextFunction
) {
  const editMode = req.query.edit;
  if (!editMode) return res.redirect("/");
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      if (!product) return res.redirect("/");
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postEditProduct(
  req: Request<any, any, ProductDto>,
  res: Response,
  next: NextFunction
) {
  const prodId = req.body.id;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice,
    prodId
  );
  updatedProduct.save();
  res.redirect("/admin/products");
}

export function postDeleteProduct(
  req: Request<any, any, GetProductParams>,
  res: Response,
  next: NextFunction
) {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect("/admin/products");
}

export function getProducts(req: Request, res: Response, next: NextFunction) {
  Product.findAll().then((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
}
