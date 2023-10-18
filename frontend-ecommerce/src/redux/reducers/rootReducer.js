import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subcategoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";


export default combineReducers({
allCategory : categoryReducer,
allBrand : brandReducer,
allSubcategory : subcategoryReducer,
allProduct : productReducer,
auth : authReducer
})