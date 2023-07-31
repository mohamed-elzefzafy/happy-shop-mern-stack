const express = require('express');
const { getUsers, uploadUserImage, resizeImageUser, createUser,
   getOneUser, updateUser, deleteUser, updateUserPassword } = require('../controllers/userController');
const { createUserValidator, getuserValidator, updateUserValidator, deleteeUserValidator, updateUserPasswordValidator } = require('../utils/validator/userValidator');
const { protect, allowedTo } = require('../controllers/authController');
const router = express.Router();



router.put("/changepassword/:id" , updateUserPasswordValidator , updateUserPassword )
router.route("/").get( protect , allowedTo("admin" , "manger" ) ,getUsers)
.post( protect , allowedTo("admin") , uploadUserImage , resizeImageUser  , createUserValidator , createUser);
router.route("/:id")
.get( protect , allowedTo("admin") ,getuserValidator , getOneUser)
.put( protect , allowedTo("admin")  ,uploadUserImage , resizeImageUser ,updateUserValidator  , updateUser)
.delete( protect , allowedTo("admin") ,deleteeUserValidator , deleteUser);









module.exports = router;