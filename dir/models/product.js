"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const path_2 = __importDefault(require("../util/path"));
const p = path_1.default.join(path_2.default, "data", "products.json");
function getProductFromFile(cb) {
    fs_1.default.readFile(p, (err, fileContent) => {
        if (err)
            return cb([]);
        return cb(JSON.parse(fileContent.toString()));
    });
}
class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    save() {
        getProductFromFile((products) => {
            let newProducts = products;
            newProducts.push(this);
            fs_1.default.writeFile(p, JSON.stringify(newProducts), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getProductFromFile(cb);
    }
}
exports.default = Product;
