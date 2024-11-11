import express from "express";
import path from "path";

const shopRouter = express.Router();

shopRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "../", "views", "shop.html"));
});

export default shopRouter;
