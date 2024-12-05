"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCheckout = exports.getOrders = exports.postCartDeleteProduct = exports.postCart = exports.getCart = exports.getIndex = exports.getProduct = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const cart_1 = __importDefault(require("../models/cart"));
function getProducts(req, res, next) {
    product_1.default.fetchAll()
        .then(([productRows, fieldDate]) => {
        res.render("shop/product-list", {
            prods: productRows,
            pageTitle: "All products",
            path: "/products",
        });
    })
        .catch((err) => {
        console.log(err);
    });
}
exports.getProducts = getProducts;
function getProduct(req, res, next) {
    product_1.default.findById(req.params.productId).then(([product, fieldDate]) => {
        res.render("shop/product-detail", {
            product: product[0],
            pageTitle: product[0].title,
            path: "/products",
        });
    });
}
exports.getProduct = getProduct;
function getIndex(req, res, next) {
    product_1.default.fetchAll()
        .then(([productRows, fieldDate]) => {
        res.render("shop/index", {
            prods: productRows,
            pageTitle: "Shop",
            path: "/",
        });
    })
        .catch((err) => {
        console.log(err);
    });
}
exports.getIndex = getIndex;
function getCart(req, res, next) {
    cart_1.default.getCart((cart) => {
        product_1.default.fetchAll((products) => {
            const cartProducts = [];
            for (let product of products) {
                const cartProductData = cart.products.find((prod) => prod.id === product.id);
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
exports.getCart = getCart;
function postCart(req, res, next) {
    product_1.default.findById(req.body.productId, (product) => {
        if (product) {
            cart_1.default.addProduct(req.body.productId, product.price);
            res.redirect("/cart");
        }
    });
}
exports.postCart = postCart;
function postCartDeleteProduct(req, res, next) {
    product_1.default.findById(req.body.productId, (product) => {
        if (product) {
            cart_1.default.deleteProduct(req.body.productId, product.price);
            res.redirect("/cart");
        }
    });
}
exports.postCartDeleteProduct = postCartDeleteProduct;
function getOrders(req, res, next) {
    res.render("shop/orders", {
        pageTitle: "Your Orders",
        path: "/orders",
    });
}
exports.getOrders = getOrders;
function getCheckout(req, res, next) {
    res.render("shop/checkout", {
        pageTitle: "Checkout",
        path: "/cart",
    });
}
exports.getCheckout = getCheckout;
