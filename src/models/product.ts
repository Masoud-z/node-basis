import { QueryResult } from "mysql2";
import { ProductDto } from "../dto/ProductDto";
import db from "../util/database";

export default class Product implements ProductDto {
  constructor(
    public title: string,
    public imageUrl: string,
    public description: string,
    public price: string,
    public id: string = ""
  ) {}

  save() {
    return db.execute(
      "INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id: string) {
    return db.execute<[ProductDto] & QueryResult>(
      "SELECT * FROM products WHERE products.id = ?",
      [id]
    );
  }

  static deleteById(id: string) {}
}
