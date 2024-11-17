import express from "express";
import {
  getAddProduct,
  getProducts,
  postAddProduct,
} from "../controllers/admin";
const adminRouter = express.Router();

adminRouter.get("/add-product", getAddProduct);

adminRouter.post("/add-product", postAddProduct);

adminRouter.get("/products", getProducts);

export default adminRouter;
