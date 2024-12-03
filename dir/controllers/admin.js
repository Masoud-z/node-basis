"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.postDeleteProduct = exports.postEditProduct = exports.getEditProduct = exports.postAddProduct = exports.getAddProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
function getAddProduct(req, res, next) {
    res.render("admin/edit-product", {
        pageTitle: "admin/Add Product",
        path: "/admin/add-product",
        editing: false,
    });
}
exports.getAddProduct = getAddProduct;
function postAddProduct(req, res, next) {
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const product = new product_1.default(title, imageUrl, description, price);
    product.save();
    res.redirect("/");
}
exports.postAddProduct = postAddProduct;
function getEditProduct(req, res, next) {
    const editMode = req.query.edit;
    if (!editMode)
        return res.redirect("/");
    const prodId = req.params.productId;
    product_1.default.findById(prodId, (product) => {
        if (!product)
            return res.redirect("/");
        res.render("admin/edit-product", {
            pageTitle: "Edit Product",
            path: "/admin/edit-product",
            editing: editMode,
            product: product,
        });
    });
}
exports.getEditProduct = getEditProduct;
function postEditProduct(req, res, next) {
    const prodId = req.body.id;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    const updatedProduct = new product_1.default(updatedTitle, updatedImageUrl, updatedDesc, updatedPrice, prodId);
    updatedProduct.save();
    res.redirect("/admin/products");
}
exports.postEditProduct = postEditProduct;
function postDeleteProduct(req, res, next) {
    const prodId = req.body.productId;
    product_1.default.deleteById(prodId);
    res.redirect("/admin/products");
}
exports.postDeleteProduct = postDeleteProduct;
function getProducts(req, res, next) {
    const products = product_1.default.fetchAll((products) => {
        res.render("admin/products", {
            prods: products,
            pageTitle: "Admin Products",
            path: "/admin/products",
        });
    });
}
exports.getProducts = getProducts;
