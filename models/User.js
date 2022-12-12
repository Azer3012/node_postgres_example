const sequelize =require('../database')

const {DataTypes}=require('sequelize')

const User=sequelize.define('User',{
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    birthDate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    
})



module.exports=User;