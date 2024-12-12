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
    const price = +req.body.price;
    req.user
        .createProduct({ title, description, imageUrl, price })
        .then((result) => {
        console.log(result);
        res.redirect("/admin/products");
    })
        .catch((err) => {
        console.log(err);
    });
}
exports.postAddProduct = postAddProduct;
function getEditProduct(req, res, next) {
    const editMode = req.query.edit;
    if (!editMode)
        return res.redirect("/");
    const prodId = req.params.productId;
    req.user
        .getProducts({ where: { id: prodId } })
        .then((products) => {
        const product = products[0];
        if (!product)
            return res.redirect("/");
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
exports.getEditProduct = getEditProduct;
function postEditProduct(req, res, next) {
    const prodId = req.body.id;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    product_1.default.findByPk(prodId)
        .then((product) => {
        if (!product)
            return res.redirect("/");
        product.title = updatedTitle;
        product.price = updatedPrice;
        product.imageUrl = updatedImageUrl;
        product.description = updatedDesc;
        product.save().then((result) => {
            console.log("UPDATED PRODUCT!");
            res.redirect("/admin/products");
        });
    })
        .catch((err) => {
        console.log(err);
    });
}
exports.postEditProduct = postEditProduct;
function postDeleteProduct(req, res, next) {
    const prodId = req.body.productId;
    product_1.default.findByPk(prodId)
        .then((product) => {
        if (!product)
            return res.redirect("/admin/products");
        product.destroy().then((result) => {
            console.log("DESTROYED PRODUCT");
            res.redirect("/admin/products");
        });
    })
        .catch((err) => {
        console.log(err);
    });
}
exports.postDeleteProduct = postDeleteProduct;
function getProducts(req, res, next) {
    req.user.getProducts().then((products) => {
        res.render("admin/products", {
            prods: products,
            pageTitle: "Admin Products",
            path: "/admin/products",
        });
    });
}
exports.getProducts = getProducts;
