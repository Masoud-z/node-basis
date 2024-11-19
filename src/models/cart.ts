import { CartDto } from "./../dto/cartDto.d";
import path from "path";
import rootDir from "../util/path";
import fs from "fs";
import { ProductDto } from "../dto/ProductDto";

const p = path.join(rootDir, "data", "cart.json");

function getCartsFromFile(cb: (cart?: CartDto) => void) {
  fs.readFile(p, (err, fileContent) => {
    if (err) return cb();

    return cb(JSON.parse(fileContent.toString()));
  });
}

export default class Cart {
  static addProduct(id: string) {}
}
