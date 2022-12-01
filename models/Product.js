const sequelize = require("../database");

const { DataTypes } = require("sequelize");
const Department = require("./Department");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    defaultValue: 0.0,
  },
  weight: {
    type: DataTypes.DECIMAL,
    defaultValue: 0.0,
  },
});

module.exports = Product;
