import { ADD_COUPON, DELETE_COUPON, GET_ALL_COUPONS, GET_ONE_COUPON, UPDATE_COUPON } from "../type"

const inital = {
  addCoupon : [] ,
  getAllCoupons : [] ,
  updateCoupon : [] ,
  deleteCoupon : [] ,
  getOneCoupon : [] ,
}
const couponReducer = (state = inital, action) => {
switch (action.type)
 {
case ADD_COUPON :
  return {
    ...state ,
    addCoupon : action.payload ,
    }
    case GET_ALL_COUPONS :
  return {
    ...state ,
    getAllCoupons : action.payload ,
    }
    case UPDATE_COUPON :
      return {
        ...state ,
        updateCoupon : action.payload ,
        }
        case DELETE_COUPON :
          return {
            ...state ,
            deleteCoupon : action.payload ,
            }
            case GET_ONE_COUPON :
              return {
                ...state ,
                getOneCoupon : action.payload ,
                }
            
        
    

  default :
  return state;  
}
}

export default couponReducer;