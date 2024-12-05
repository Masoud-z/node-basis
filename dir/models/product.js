"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../util/database"));
class Product {
    constructor(title, imageUrl, description, price, id = "") {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.id = id;
    }
    save() {
        return database_1.default.execute("INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)", [this.title, this.price, this.imageUrl, this.description]);
    }
    static fetchAll() {
        return database_1.default.execute("SELECT * FROM products");
    }
    static findById(id) {
        return database_1.default.execute("SELECT * FROM products WHERE products.id = ?", [id]);
    }
    static deleteById(id) { }
}
exports.default = Product;
