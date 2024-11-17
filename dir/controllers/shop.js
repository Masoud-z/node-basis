"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCheckout = exports.getCart = exports.getIndex = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
function getProducts(req, res, next) {
    const products = product_1.default.fetchAll((products) => {
        res.render("shop/product-list", {
            prods: products,
            pageTitle: "All products",
            path: "/products",
        });
    });
}
exports.getProducts = getProducts;
function getIndex(req, res, next) {
    const products = product_1.default.fetchAll((products) => {
        res.render("shop/index", {
            prods: products,
            pageTitle: "Shop",
            path: "/",
        });
    });
}
exports.getIndex = getIndex;
function getCart(req, res, next) {
    res.render("shop/cart", {
        pageTitle: "Your Cart",
        path: "/cart",
    });
}
exports.getCart = getCart;
function getCheckout(req, res, next) {
    res.render("shop/checkout", {
        pageTitle: "Checkout",
        path: "/cart",
    });
}
exports.getCheckout = getCheckout;
