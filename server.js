const express=require('express')
const connection = require('./database')
const Department = require('./models/Department')
const Order = require('./models/Order')
const Product = require('./models/Product')
const User = require('./models/User')



User.belongsToMany(Product,{through:Order})
Product.belongsToMany(User,{through:Order})

Product.belongsTo(Department)
Department.hasMany(Product)

connection.sync({force:true})


const app=express()

app.use(express.json())


app.get('/users',async(req,res)=>{
const users=await User.findAll()

res.send(users)
})

app.post('/users',async(req,res)=>{
    const user=await User.create(req.body,{
        fields:['firstName','lastName','email','password','birthDate']
    })
 
    res.status(201).send(user)
})

app.post('/departments',async(req,res)=>{
    const deparments=await Department.create(req.body,{
        fields:["name"]
    })

    res.status(201).send(deparments)
})

app.get('/products',async(req,res)=>{
    const products=await Product.findAll()
    res.send(products)
})
app.post('/products',async(req,res)=>{
    const products=await Product.create(req.body,{
        fields:["name","price","weight"]
    })
   
})

app.listen(8080,()=>console.log('listening app'))