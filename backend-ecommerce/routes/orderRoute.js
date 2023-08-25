const express = require('express');
const { protect, allowedTo } = require('../controllers/authController');
const { createCashOrder, getAllOrders, filterOrderForLoggedUser, getOneOrder } = require('../controllers/orderController');
const router = express.Router();

// router.use(protect , allowedTo("user") )
router.route("/").get(protect ,  allowedTo("user" , "manger" , "admin") , filterOrderForLoggedUser , getAllOrders);
router.route("/:cartId").post(protect , allowedTo( "user") , createCashOrder);
router.route("/:id").get(protect ,  allowedTo("admin" , "manger" , "user") , filterOrderForLoggedUser , getOneOrder);

module.exports = router;
