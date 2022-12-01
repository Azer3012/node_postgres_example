const {Sequelize}= require('sequelize')

const connection=new Sequelize('postgres://postgres:admin@localhost:5432/events_app')

connection.authenticate()

module.exports=connection;