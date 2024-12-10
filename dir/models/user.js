"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../util/database"));
const User = database_1.default.define("user", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = User;
