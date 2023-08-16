const  Mongoose  = require("mongoose");
const ProductModel = require("./productModel");

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
    // parent refrence (one to many)
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




reviewSchema.statics.calcAverageRatingsAndQuantity = async function (productId) {
const result = await this.aggregate([
    //  stage 1 : get all reviews on specefic product and calculate avRatings rating and ratingsQuantity
{$match : {product : productId}},
// stage 1 : groping reviews base on productId
{$group : {_id : "product" , avRatings :{$avg : "$ratings"} , ratingsQuantity : {$sum : 1} }}
])
console.log(result);
if (result.length > 0) 
{
  await ProductModel.findByIdAndUpdate(productId , 
    {ratingsQuantity : result[0].ratingsQuantity , ratingsAverage : result[0].avRatings})

} else {
  await ProductModel.findByIdAndUpdate(productId , 
    {ratingsQuantity : 0 , ratingsAverage : 0 })

}
}


  reviewSchema.post("save" ,async function () {
  await  this.constructor.calcAverageRatingsAndQuantity(this.product);

})

reviewSchema.post("remove" ,async function () {
  await  this.constructor.calcAverageRatingsAndQuantity(this.product);

})


const reviewModel = Mongoose.model("Review" , reviewSchema);

module.exports = reviewModel;