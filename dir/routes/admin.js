"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const adminRouter = express_1.default.Router();
adminRouter.get("/add-product", (req, res, next) => {
    res.sendFile(path_1.default.join(__dirname, "../", "../", "views", "add-product.html"));
});
adminRouter.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});
exports.default = adminRouter;