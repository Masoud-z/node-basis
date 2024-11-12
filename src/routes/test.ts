import express from "express";
import path from "path";
const testRouter = express.Router();

testRouter.get("/test", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "views", "test.html"));
});

export default testRouter;
