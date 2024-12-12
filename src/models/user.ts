import { UserInstance } from "../dto/user.dto";
import { DataTypes } from "sequelize";
import sequelize from "../util/database";

const User = sequelize.define<UserInstance>("user", {
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
