"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = require("../controllers/admin");
const adminRouter = express_1.default.Router();
adminRouter.get("/add-product", admin_1.getAddProduct);
adminRouter.post("/add-product", admin_1.postAddProduct);
adminRouter.get("/products", admin_1.getProducts);
exports.default = adminRouter;
