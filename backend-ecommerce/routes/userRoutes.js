const express = require('express');
const { getUsers, uploadUserImage, resizeImageUser, createUser,
   getOneUser, updateUser, deleteUser, updateUserPassword } = require('../controllers/userController');
const { createUserValidator, getuserValidator, updateUserValidator, deleteeUserValidator, updateUserPasswordValidator } = require('../utils/validator/userValidator');
const router = express.Router();




router.route("/").get(getUsers).post(uploadUserImage , resizeImageUser  , createUserValidator , createUser);
router.route("/:id")
.get(getuserValidator , getOneUser)
.put(uploadUserImage , resizeImageUser ,updateUserValidator  , updateUser)
.delete(deleteeUserValidator , deleteUser);
router.put("/changepassword/:id" , updateUserPasswordValidator , updateUserPassword )








module.exports = router;