const express = require("express");

// controllers
const {
  customerSignup,
  customerLogin,
} = require("../controllers/customerController");
const {addOrder} =require('../controllers/orderController')

const router = express.Router();

// SIGNUP
router.post("/signup", customerSignup);

// LOGIN
router.post("/login", customerLogin);

//orders
router.post("/order/:id",addOrder);

module.exports = router;
