import { UserDto } from "./../dto/user.dto.d";
import { DataTypes, Model } from "sequelize";
import sequelize from "../util/database";

const User = sequelize.define<Model & UserDto>("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
