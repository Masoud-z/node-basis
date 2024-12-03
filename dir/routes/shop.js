"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shop_1 = require("../controllers/shop");
const shopRouter = express_1.default.Router();
shopRouter.get("/", shop_1.getIndex);
shopRouter.get("/products", shop_1.getProducts);
shopRouter.get("/products/:productId", shop_1.getProduct);
shopRouter.get("/cart", shop_1.getCart);
shopRouter.post("/cart", shop_1.postCart);
shopRouter.post("/cart-delete-item", shop_1.postCartDeleteProduct);
shopRouter.get("/orders", shop_1.getOrders);
shopRouter.get("/checkout", shop_1.getCheckout);
exports.default = shopRouter;
