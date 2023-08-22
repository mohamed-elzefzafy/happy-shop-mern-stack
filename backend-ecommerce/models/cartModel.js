const  Mongoose  = require("mongoose");


const cartSchema = new Mongoose.Schema({
  cartItems : [
  {
    product : {
      type : Mongoose.Schema.ObjectId , 
      ref : "Product"
    },
    quantity : {
      type : Number,
      default : 1
    },
    color : String ,
    price : Number
  }
  ] ,
  totalCartPrice : Number ,
  totalCartPriceAfterDiscount : Number ,
  user : {
   type :  Mongoose.Schema.ObjectId ,
   ref : "User"
  }
 }, {timestamps : true} );



 const CartModel =  Mongoose.model("Cart" , cartSchema);

 module.exports = CartModel;