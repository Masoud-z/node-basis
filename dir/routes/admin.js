"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const express_1 = __importDefault(require("express"));
const adminRouter = express_1.default.Router();
exports.products = [];
adminRouter.get("/add-product", (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});
adminRouter.post("/add-product", (req, res, next) => {
    exports.products.push({ title: req.body.title });
    res.redirect("/");
});
exports.default = adminRouter;
