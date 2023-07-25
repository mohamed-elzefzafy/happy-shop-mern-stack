const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const ApiError = require("../utils/apiError");
const UserModel = require("../models/userModel");



const createToken = (payLoad) => jwt.sign({userId : payLoad} , process.env.JWT_SECRET_KEY ,
   {expiresIn : process.env.JWT_EXPIRE_TIME})






/**
 * @desc    register
 * @route   /api/v1/auth/register
 * @method  POST
 * @access  public
 */

exports.registerUser = asyncHandler(async (req , res) => {
  // 1-ceate user 
  const user = await UserModel.create({
    name : req.body.name,
    email : req.body.email,
    password :req.body.password,
    // slug : req.body.slug,
    // phone : req.body.phone,
    // profileImage : req.body.profileImage,  
  })
// 1-generate token 
const token = createToken(user._id)
res.status(201).json({data : user , token});
})


/**
 * @desc    login
 * @route   /api/v1/auth/login
 * @method  POST
 * @access  public
 */

exports.loginUser = asyncHandler(async (req , res , next) => {
// check if the email and password is in the body (validation layer)
// check if user is exist and the password is correct 
const user = await UserModel.findOne({email : req.body.email});
if (!user || !(await bcrypt.compare(req.body.password , user.password)))
{
  return next(new ApiError("incorrect email or password" , 401));
}
// generate token 
const token = createToken(user._id)
// send response to client

res.status(200).json({data : user , token} )
})