import fs from "fs";
import path from "path";
import { ProductDto } from "../dto/ProductDto";
import rootDir from "../util/path";
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
    public price: string
  ) {}

  save() {
    getProductFromFile((products) => {
      let newProducts: ProductDto[] = products;
      newProducts.push(this);
      fs.writeFile(p, JSON.stringify(newProducts), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb: (products: ProductDto[]) => void) {
    getProductFromFile(cb);
  }
}
