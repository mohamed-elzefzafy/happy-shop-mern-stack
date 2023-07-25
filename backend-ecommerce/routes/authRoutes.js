const express = require('express');
const { registerValidator, loginValidator } = require('../utils/validator/authValidator');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();




router.route("/register").post(registerValidator , registerUser);
router.route("/login").post(loginValidator , loginUser);





module.exports = router;