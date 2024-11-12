import express from "express";
import path from "path";
import rootDir from "../util/path";
const testRouter = express.Router();

testRouter.get("/test", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "test.html"));
});

export default testRouter;
