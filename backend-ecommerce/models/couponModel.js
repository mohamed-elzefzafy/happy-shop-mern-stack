const  Mongoose  = require("mongoose");

const couponSchema = new Mongoose.Schema({
name : {
  type : String ,
  trim : true ,
  required : [true , "coupon name required"] ,
  unique : [true , "coupon name must be unique"] ,

} ,
expire : {
  type : Date , 
  required : [true , "coupon exspire time required"] ,
} , 
discount : {
  type : Number ,
  required : [true , "coupon discount value required"] ,
}
} , {timestamps : true})

const CouponModel = Mongoose.model("Coupon" , couponSchema);

module.exports = CouponModel;