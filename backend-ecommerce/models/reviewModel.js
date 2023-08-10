const  Mongoose  = require("mongoose");

const reviewSchema = new Mongoose.Schema({
  title : {
    type : "string",
  },
  ratings : {
    type : Number,
    min : [ 1 , "min rating value is  1.0" ],
    max : [ 5 , "max rating value is  5.0"],
    required :[true , "review rating required"]
  } , 
  user : {
    type : Mongoose.Schema.ObjectId,
    ref : "User" ,
    required : [true , "review must be belong to user"]
  },
  product : {
    type : Mongoose.Schema.ObjectId,
    ref : "Product",
    required : [true , "review must be belong to product"]
  }
} , {timestamps : true });


reviewSchema.pre(/^find/ , function (next) {
  this.populate({path : "user" , select : "name"});
  next();
});





const reviewModel = Mongoose.model("Review" , reviewSchema);

module.exports = reviewModel;