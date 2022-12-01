const sequelize = require("../database");

const { DataTypes } = require("sequelize");


const Order = sequelize.define("Order", {
  paid:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  },
  count:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
  
});

module.exports = Order;
