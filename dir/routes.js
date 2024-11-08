"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("./main"));
const message_1 = __importDefault(require("./message"));
function requestHandler(req, res) {
    if (req.url === "/") {
        (0, main_1.default)(req, res);
    }
    else if (req.url === "/message" && req.method === "POST") {
        (0, message_1.default)(req, res);
    }
}
exports.default = requestHandler;
