import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subcategoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import userReducer from "./userReducer";
import wishListReducer from "./wishListReducer";
import couponReducer from "./couponReducer";
import addressReducer from "./addressReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import completeReducer from "./orderReducer";


export default combineReducers({
allCategory : categoryReducer,
allBrand : brandReducer,
allSubcategory : subcategoryReducer,
allProduct : productReducer,
auth : authReducer,
review : reviewReducer,
allUsers : userReducer,
wishList : wishListReducer,
coupon : couponReducer, 
address : addressReducer, 
cart  : cartReducer,
order : checkoutReducer,
completeOrders : completeReducer
})