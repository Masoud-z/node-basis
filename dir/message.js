"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function MessagePage(req, res) {
    const body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    });
    req.on("end", () => {
        const parsedBody = body.concat().toString();
        const message = parsedBody.split("=")[1];
        fs_1.default.writeFileSync("message.txt", message);
        console.log(message);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    });
}
exports.default = MessagePage;
