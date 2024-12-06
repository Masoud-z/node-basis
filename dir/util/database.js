"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("node-basics", "root", "94120609", {
    dialect: "mysql",
    host: "localhost",
});
exports.default = sequelize;
