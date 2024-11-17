import express from "express";
import {
  getCart,
  getCheckout,
  getIndex,
  getOrders,
  getProducts,
} from "../controllers/shop";

const shopRouter = express.Router();

shopRouter.get("/", getIndex);

shopRouter.get("/products", getProducts);

shopRouter.get("/cart", getCart);

shopRouter.get("/orders", getOrders);

shopRouter.get("/checkout", getCheckout);

export default shopRouter;
