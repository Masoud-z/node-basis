import { ProductDto } from "./ProductDto.d";
import {
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  Model,
} from "sequelize";

export interface CartDto {
  products: { id: string; qty: number }[];
  totalPrice: number;
}

export interface CartInstance extends Model, CartDto {
  getProducts: HasManyGetAssociationsMixin<ProductDto>;
  addProduct: HasManyAddAssociationMixin<ProductDto, number>;
  addProducts: HasManyAddAssociationsMixin<ProductDto, number>;
  setProducts: HasManySetAssociationsMixin<ProductDto, number>;
  removeProduct: HasManyRemoveAssociationMixin<ProductDto, number>;
  removeProducts: HasManyRemoveAssociationsMixin<ProductDto, number>;
}
