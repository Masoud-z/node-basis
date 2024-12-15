import { ProductDto } from "./ProductDto.d";
import {
  Model,
  BelongsToManyAddAssociationMixin,
  BelongsToManySetAssociationsMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyRemoveAssociationMixinOptions,
  BelongsToManyRemoveAssociationsMixin,
  BelongsToManyRemoveAssociationsMixinOptions,
  BelongsToManyAddAssociationsMixin,
} from "sequelize";

export interface CartDto {
  products: { id: string; qty: number }[];
  totalPrice: number;
}

export interface CartInstance
  extends Model<InferAttributes<CartDto>, InferCreationAttributes<CartDto>> {
  getProducts: BelongsToManyGetAssociationsMixin<ProductDto>;
  addProduct: BelongsToManyAddAssociationMixin<ProductDto, number>;
  addProducts: BelongsToManyAddAssociationsMixin<ProductDto, number>;
  setProducts: BelongsToManySetAssociationsMixin<ProductDto, number>;
  removeProduct: BelongsToManyRemoveAssociationMixin<ProductDto, number>;
  removeProducts: BelongsToManyRemoveAssociationsMixin<ProductDto, number>;
}


