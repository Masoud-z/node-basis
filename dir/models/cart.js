"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const path_2 = __importDefault(require("../util/path"));
const fs_1 = __importDefault(require("fs"));
const p = path_1.default.join(path_2.default, "data", "cart.json");
function getCartsFromFile(cb) {
    fs_1.default.readFile(p, (err, fileContent) => {
        if (err) {
            return cb({
                products: [],
                totalPrice: 0,
            });
        }
        return cb(JSON.parse(fileContent.toString()));
    });
}
class Cart {
    static addProduct(id, productPrice) {
        getCartsFromFile((cart) => {
            let found = false;
            cart.products = cart.products.map((product) => {
                if (product.id === id) {
                    found = true;
                    return { id, qty: ++product.qty };
                }
                return product;
            });
            if (!found) {
                cart.products.push({ id, qty: 1 });
            }
            cart.totalPrice += +productPrice;
            fs_1.default.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }
    static deleteProduct(id, productPrice) {
        getCartsFromFile((cart) => {
            const product = cart.products.find((product) => product.id === id);
            if (!product)
                return;
            cart.products = cart.products.filter((product) => product.id !== id);
            cart.totalPrice -= +productPrice * product.qty;
            fs_1.default.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }
    static getCart(cb) {
        getCartsFromFile((cart) => {
            cb(cart);
        });
    }
}
exports.default = Cart;
