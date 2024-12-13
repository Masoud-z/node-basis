"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCheckout = exports.getOrders = exports.postCartDeleteProduct = exports.postCart = exports.getCart = exports.getIndex = exports.getProduct = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
function getProducts(req, res, next) {
    product_1.default.findAll()
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
exports.getProducts = getProducts;
function getProduct(req, res, next) {
    product_1.default.findOne({ where: { id: req.params.productId } }).then((product) => {
        if (product) {
            res.render("shop/product-detail", {
                product: product,
                pageTitle: product.title,
                path: "/products",
            });
        }
    });
}
exports.getProduct = getProduct;
function getIndex(req, res, next) {
    product_1.default.findAll()
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
exports.getIndex = getIndex;
function getCart(req, res, next) {
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
exports.getCart = getCart;
function postCart(req, res, next) {
    const prodId = req.body.productId;
    let fetchedCart;
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
        return product_1.default.findByPk(prodId)
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
exports.postCart = postCart;
function postCartDeleteProduct(req, res, next) { }
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
