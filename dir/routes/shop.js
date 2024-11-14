"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = require("./admin");
const shopRouter = express_1.default.Router();
shopRouter.get("/", (req, res, next) => {
    res.render("shop", {
        prods: admin_1.products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: admin_1.products.length > 0,
        activeShop: true,
        productCSS: true,
    });
});
exports.default = shopRouter;
