import { CartDto } from "./../dto/cartDto.d";
import path from "path";
import rootDir from "../util/path";
import fs from "fs";

const p = path.join(rootDir, "data", "cart.json");

function getCartsFromFile(cb: (cart: CartDto) => void) {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb({
        products: [],
        totalPrice: 0,
      });
    }

    return cb(JSON.parse(fileContent.toString()));
  });
}

export default class Cart {
  static addProduct(id: string, productPrice: string) {
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
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id: string, productPrice: string) {
    getCartsFromFile((cart) => {
      const product = cart.products.find((product) => product.id === id);
      if (!product) return;
      cart.products = cart.products.filter((product) => product.id !== id);
      cart.totalPrice -= +productPrice * product.qty;

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
  static getCart(cb: (cart: CartDto) => void) {
    getCartsFromFile((cart) => {
      cb(cart);
    });
  }
}
