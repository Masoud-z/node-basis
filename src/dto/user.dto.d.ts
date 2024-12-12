import {
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManySetAssociationsMixin,
  Model,
} from "sequelize";
import { ProductDto } from "./ProductDto";

export interface UserDto {
  id: number;
  name: string;
  email: string;
}

export interface UserInstance extends Model, UserDto {
  getProducts: HasManyGetAssociationsMixin<ProductDto>;
  addProduct: HasManyAddAssociationMixin<ProductDto, number>;
  addProducts: HasManyAddAssociationsMixin<ProductDto, number>;
  setProducts: HasManySetAssociationsMixin<ProductDto, number>;
  removeProduct: HasManyRemoveAssociationMixin<ProductDto, number>;
  removeProducts: HasManyRemoveAssociationsMixin<ProductDto, number>;
  hasProduct: HasManyHasAssociationMixin<ProductDto, number>;
  hasProducts: HasManyHasAssociationsMixin<ProductDto, number>;
  countProducts: HasManyCountAssociationsMixin;
  createProduct: HasManyCreateAssociationMixin<Model & ProductDto, "userId">;
}
