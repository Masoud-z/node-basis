import express from "express";
import path from "path";
import rootDir from "../util/path";

const shopRouter = express.Router();

shopRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

export default shopRouter;
