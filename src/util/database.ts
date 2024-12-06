import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node-basics", "root", "94120609", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
