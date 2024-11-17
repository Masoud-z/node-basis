"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.postAddProduct = exports.getAddProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
function getAddProduct(req, res, next) {
    res.render("admin/add-product", {
        pageTitle: "admin/Add Product",
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
    });
}
exports.getAddProduct = getAddProduct;
function postAddProduct(req, res, next) {
    const product = new product_1.default(req.body.title);
    product.save();
    res.redirect("/");
}
exports.postAddProduct = postAddProduct;
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
