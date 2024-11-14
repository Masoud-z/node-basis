import express from "express";
import { getAddProduct, postAddProduct } from "../controllers/products";
const adminRouter = express.Router();

adminRouter.get("/add-product", getAddProduct);

adminRouter.post("/add-product", postAddProduct);

export default adminRouter;
