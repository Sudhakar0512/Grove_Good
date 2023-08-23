require("dotenv").config();

// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const customerRoutes = require("./routes/customerRoutes");

const customerIncome =require('./routes/transactions')

const { db } = require('./db/db');
const {readdirSync} = require('fs')

// store it in app const
const app = express();




// middleware
// it parses incoming request bodies in the JSON format and makes the parsed data available in the req.body property of the request object.
app.use(express.json({ limit: "50mb" }));
app.use(cors());

// readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
// routes
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/v1",customerIncome);

mongoose.set('strictQuery', true);

// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // db()
    // app.listen will only run after we succesfully connected to the db
    // to run this on terminal -> nodemon server.js
    app.listen(process.env.PORT, () => {
      console.log("database connected & port is running!", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
