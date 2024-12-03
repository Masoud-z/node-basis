"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const path_2 = __importDefault(require("../util/path"));
const cart_1 = __importDefault(require("./cart"));
const p = path_1.default.join(path_2.default, "data", "products.json");
function getProductFromFile(cb) {
    fs_1.default.readFile(p, (err, fileContent) => {
        if (err)
            return cb([]);
        return cb(JSON.parse(fileContent.toString()));
    });
}
class Product {
    constructor(title, imageUrl, description, price, id = "") {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.id = id;
    }
    save() {
        getProductFromFile((products) => {
            if (this.id.length > 0) {
                const existingProductIndex = products.findIndex((product) => product.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs_1.default.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                    console.log(err);
                });
            }
            else {
                this.id = ((Math.random() * Math.random() * 10000000000000000) /
                    (Math.random() * Math.random())).toString();
                products.push(this);
                fs_1.default.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }
        });
    }
    static fetchAll(cb) {
        getProductFromFile(cb);
    }
    static findById(id, cb) {
        getProductFromFile((products) => {
            const product = products.find((product) => product.id === id);
            cb(product);
        });
    }
    static deleteById(id) {
        getProductFromFile((products) => {
            const product = products.find((product) => product.id === id);
            const updatedProducts = products.filter((product) => product.id !== id);
            if (product) {
                cart_1.default.deleteProduct(product.id, product.price);
                fs_1.default.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                    console.log(err);
                });
            }
        });
    }
}
exports.default = Product;
