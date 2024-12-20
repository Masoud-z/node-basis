"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const path_2 = __importDefault(require("../util/path"));
const testRouter = express_1.default.Router();
testRouter.get("/test", (req, res, next) => {
    res.sendFile(path_1.default.join(path_2.default, "views", "test.html"));
});
exports.default = testRouter;
