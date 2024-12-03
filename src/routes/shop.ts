import express from "express";
import {
  getCart,
  getCheckout,
  getIndex,
  getOrders,
  getProduct,
  getProducts,
  postCart,
  postCartDeleteProduct,
} from "../controllers/shop";

const shopRouter = express.Router();

shopRouter.get("/", getIndex);

shopRouter.get("/products", getProducts);

shopRouter.get("/products/:productId", getProduct);

shopRouter.get("/cart", getCart);

shopRouter.post("/cart", postCart);

shopRouter.post("/cart-delete-item", postCartDeleteProduct);

shopRouter.get("/orders", getOrders);

shopRouter.get("/checkout", getCheckout);

export default shopRouter;
