"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("../controllers/products");
const adminRouter = express_1.default.Router();
adminRouter.get("/add-product", products_1.getAddProduct);
adminRouter.post("/add-product", products_1.postAddProduct);
exports.default = adminRouter;
