"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.postAddProduct = exports.getAddProduct = exports.products = void 0;
exports.products = [];
function getAddProduct(req, res, next) {
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
    });
}
exports.getAddProduct = getAddProduct;
function postAddProduct(req, res, next) {
    exports.products.push({ title: req.body.title });
    res.redirect("/");
}
exports.postAddProduct = postAddProduct;
function getProducts(req, res, next) {
    res.render("shop", {
        prods: exports.products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: exports.products.length > 0,
        activeShop: true,
        productCSS: true,
    });
}
exports.getProducts = getProducts;
