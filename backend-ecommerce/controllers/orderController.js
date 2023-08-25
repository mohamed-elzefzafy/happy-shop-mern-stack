const asyncHandler = require("express-async-handler");
const CartModel = require("../models/cartModel");
const ApiError = require("../utils/apiError");
const OrderModel = require("../models/orderModel");
const ProductModel = require("../models/productModel")
const factory = require("./handlerFactory");


/**
 * @desc    create cash order
 * @route   /api/v1/orders/cartId
 * @method  POST
 * @access  private /user
 */
exports.createCashOrder = asyncHandler(async(req , res , next) => { 
   // app settings
   const taxPrice = 0;
   const shippingPrice = 0;
// 1 - Get cart depend on cartId
const cart = await CartModel.findById(req.params.cartId);
if (!cart) {
  return next(new ApiError(`there is no cart for this Id ${req.params.cartId}` , 404));
}
// 2 - Get order price depend on cart price "Check if coupon apply"
const cartPrice = cart.totalCartPriceAfterDiscount?cart.totalCartPriceAfterDiscount : cart.totalCartPrice;
const totalOrderPrice = cartPrice + taxPrice + shippingPrice;
// 3 - Create order with default paymentMethodType cash
const order = await OrderModel.create({user : req.user._id , cartItems : cart.cartItems , totalOrderPrice 
,shippinAddress : req.body.shippinAddress});
// 4 - After creating order, decrement product quantity, increment product sold
if (!order) {
  return next(new ApiError(`there is no order`, 404 ));
}
const bulkoption = cart.cartItems.map((item) => ({
  updateOne : {
    filter : {_id : item.product},
    update : {$inc :{quantity : -item.quantity , sold : +item.quantity} }
  }
  }))
  await ProductModel.bulkWrite(bulkoption , {})
// 5 -  Clear cart depend on cartId
await CartModel.findByIdAndDelete(req.params.cartId);

res.status(201).json({statue : "success" , data : order})

}) 



exports.filterOrderForLoggedUser = asyncHandler(async( req , res , next) => {
  if (req.user.role ===  "user") {
    req.filterObject = {user : req.user._id }
  }
  next();
})
/**
 * @desc    get all orders
 * @route   /api/v1/orders
 * @method  GET
 * @access  private /user Admin manger
 */
exports.getAllOrders = factory.getAll(OrderModel);


/**
 * @desc    get specific order
 * @route   /api/v1/orders
 * @method  GET
 * @access  private /user Admin manger
 */
exports.getOneOrder = factory.getOneById(OrderModel);