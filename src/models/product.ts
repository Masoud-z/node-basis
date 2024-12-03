import fs from "fs";
import path from "path";
import { ProductDto } from "../dto/ProductDto";
import rootDir from "../util/path";
import Cart from "./cart";
const p = path.join(rootDir, "data", "products.json");

function getProductFromFile(cb: (products: ProductDto[]) => void) {
  fs.readFile(p, (err, fileContent) => {
    if (err) return cb([]);
    return cb(JSON.parse(fileContent.toString()));
  });
}

export default class Product implements ProductDto {
  constructor(
    public title: string,
    public imageUrl: string,
    public description: string,
    public price: string,
    public id: string = ""
  ) {}

  save() {
    getProductFromFile((products) => {
      if (this.id.length > 0) {
        const existingProductIndex = products.findIndex(
          (product) => product.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = (
          (Math.random() * Math.random() * 10000000000000000) /
          (Math.random() * Math.random())
        ).toString();

        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(cb: (products: ProductDto[]) => void) {
    getProductFromFile(cb);
  }

  static findById(id: string, cb: (product?: ProductDto) => void) {
    getProductFromFile((products) => {
      const product = products.find((product) => product.id === id);
      cb(product);
    });
  }

  static deleteById(id: string) {
    getProductFromFile((products) => {
      const product = products.find((product) => product.id === id);
      const updatedProducts = products.filter((product) => product.id !== id);
      if (product) {
        Cart.deleteProduct(product.id, product.price);
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      }
    });
  }
}
