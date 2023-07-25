
const {v4 : uuidv4} = require("uuid");
const sharp = require("sharp");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const bcrypt = require("bcryptjs");
const factory = require("./handlerFactory");
const { uploadSingleImage } = require("../middlewares/uploadImageMiddleWare");
const UserModel = require("../models/userModel");
const ApiError = require("../utils/apiError");




exports.uploadUserImage = uploadSingleImage("profileImage");

exports.resizeImageUser = asyncHandler(async (req , res , next) => {
  const fileName = `User-${uuidv4()}-${Date.now()}.jpeg`;
if (req.file)
{
  await  sharp(req.file.buffer).resize(600 , 600)
 .toFormat("jpeg").jpeg({quality : 90})
 .toFile(`uploads/Users/${fileName}`);

// save image to db
req.body.profileImage = fileName;
}
 next();  

}
)


/**
 * @desc    get list of Users
 * @route   /api/v1/users
 * @method  GET
 * @access  private
 */
exports.getUsers =  factory.getAll(UserModel);


/**
 * @desc    get specific User by id
 * @route   /api/v1/users/:id
 * @method  GET
 * @access  private
 */
exports.getOneUser = factory.getOneById(UserModel)


/**
 * @desc    create User
 * @route   /api/v1/users
 * @method  POST
 * @access  private
 */


exports.createUser = factory.createOne(UserModel)



/**
 * @desc    update User
 * @route   /api/v1/users/:id
 * @method  PUT everything exept password
 * @access  private
 */


exports.updateUser = asyncHandler(async (req , res , next) => {

        if (req.body.name)        
        req.body.slug = slugify(req.body.name)

    const document = await UserModel.findByIdAndUpdate(req.params.id, {
      name : req.body.name,
      slug : req.body.slug,
      email : req.body.email,
      phone : req.body.phone,
      profileImage : req.body.profileImage,
      role : req.body.role,
      active : req.body.active

    } ,   {new : true});
  
    if (!document) {
       return next(new ApiError(`not found item for id ${req.params.id}` , 404))
     }
  
     res.status(201).json({data : document})
  
  
  });
  



/**
 * @desc    update User
 * @route   /api/v1/users/changepassword/:id
 * @method  PUT  password only
 * @access  private
 */


exports.updateUserPassword = asyncHandler(async (req , res , next) => {


const document = await UserModel.findByIdAndUpdate(req.params.id, {
  password : await bcrypt.hash(req.body.password , 12)
} ,   {new : true});


if (!document) {
 return next(new ApiError(`not found item for id ${req.params.id}` , 404))
}

res.status(201).json({data : document})


});


/**
 * @desc    Delete User
 * @route   /api/v1/users/:id
 * @method  DELETE
 * @access  private
 */


exports.deleteUser = factory.deleteOne(UserModel)
