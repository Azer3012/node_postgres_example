const sequelize =require('../database')

const {DataTypes}=require('sequelize')
const Product = require('./Product')

const Department=sequelize.define('Department',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
   
    
})




module.exports=Department;