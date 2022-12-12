const express = require("express");
const connection = require("./database");
const Department = require("./models/Department");
const Order = require("./models/Order");
const Product = require("./models/Product");
const User = require("./models/User");

User.belongsToMany(Product, { through: Order });
Product.belongsToMany(User, { through: Order });

Product.belongsTo(Department);
Department.hasMany(Product);

connection.sync();

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.findAll();

  res.send(users);
});

app.get("/users/:id/orders", async (req, res) => {
  const UserId = Number(req.params.id);
  try {
    const orders = User.findOne({ where: { id: UserId }, include: {
        model:Product,
        through:[]
    } });
    res.send(orders);
  } catch (error) {
    res.send({
      message: error.errors,
    });
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body, {
      fields: ["firstName", "lastName", "email", "password", "birthDate"],
    });

    res.status(201).send(user);
  } catch (error) {
    res.send({
      message: error.errors,
    });
  }
});

app.get("/departments", async (req, res) => {
  const deparments = await Department.findAll();

  res.status(200).send(deparments);
});

app.post("/departments", async (req, res) => {
  const deparments = await Department.create(req.body, {
    fields: ["name"],
  });

  res.status(201).send(deparments);
});

app.get("/products", async (req, res) => {
  const products = await Product.findAll({ include: "Department" });
  res.send(products);
});
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body, {
      fields: ["name", "price", "weight", "DepartmentId"],
    });
    res.status(201).send(product);
  } catch (error) {
    res.send({
      message: error.errors,
    });
  }
});

app.post("/order", async (req, res) => {
  try {
    const order = await Order.create(req.body, {
      fields: ["count", "paid", "UserId", "ProductId"],
    });
    res.status(201).send(order);
  } catch (error) {
    res.send({
      message: error.errors,
    });
  }
});

app.listen(8080, () => console.log("listening app"));
