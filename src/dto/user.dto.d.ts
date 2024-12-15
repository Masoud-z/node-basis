import { CartInstance } from "./cartDto.d";
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
  HasOneGetAssociationMixin,
  Model,
} from "sequelize";

export interface UserDto {
  id: number;
  name: string;
  email: string;
}

export interface UserInstance
  extends Model<InferAttributes<UserDto>, InferCreationAttributes<UserDto>> {
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

  //Cart
  getCart: HasOneGetAssociationMixin<CartInstance>;
  addCart: HasManyAddAssociationMixin<CartInstance, number>;
  addCarts: HasManyAddAssociationsMixin<CartInstance, number>;
  setCarts: HasManySetAssociationsMixin<CartInstance, number>;
  removeCart: HasManyRemoveAssociationMixin<CartInstance, number>;
  removeCarts: HasManyRemoveAssociationsMixin<CartInstance, number>;
  hasCart: HasManyHasAssociationMixin<CartInstance, number>;
  hasCarts: HasManyHasAssociationsMixin<CartInstance, number>;
  countCarts: HasManyCountAssociationsMixin;
  createCart: HasManyCreateAssociationMixin<Model & CartInstance, "userId">;
}
