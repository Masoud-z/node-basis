import { DataTypes, Model } from "sequelize";
import sequelize from "../util/database";
import { ProductDto } from "../dto/ProductDto";

const Product = sequelize.define<Model<ProductDto> & ProductDto>("product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: { type: DataTypes.STRING, allowNull: false },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Product;
