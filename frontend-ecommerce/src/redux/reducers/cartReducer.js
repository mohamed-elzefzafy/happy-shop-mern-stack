import { ADD_PRODUCT_TO_CART, APPLY_COUPON_TO_CART, DELETE_ALL_PRODUCTS_CART, DELETE_ONE_PRODUCT_FROM_CART, GET_ALL_PRODUCTS_CART, UPDATE_PRODUCT_QUANTITY_IN_CART } from "../type";


const inital = {
  addToCart : [] ,
  allProductsCart : [] ,
  deleteAllProductsCart : [] ,
  deleteOneProductFromCart : [] ,
  updateQuantityInProductCart : [] ,
  applyCouponToCart : [] ,

}
const cartReducer = (state = inital, action) => {
switch (action.type)
 {
case ADD_PRODUCT_TO_CART :
  return {
    ...state ,
    addToCart : action.payload ,
    }

    case GET_ALL_PRODUCTS_CART :
  return {
    ...state ,
    allProductsCart : action.payload ,
    }
    case DELETE_ALL_PRODUCTS_CART:
      return {
        ...state ,
        deleteAllProductsCart : action.payload ,
        }

        case DELETE_ONE_PRODUCT_FROM_CART:
          return {
            ...state ,
            deleteOneProductFromCart : action.payload ,
            }

            case UPDATE_PRODUCT_QUANTITY_IN_CART:
              return {
                ...state ,
                updateQuantityInProductCart : action.payload ,
                }

                case APPLY_COUPON_TO_CART:
                  return {
                    ...state ,
                    applyCouponToCart : action.payload ,
                    }
            
        
    

  default :
  return state;  
}
}

export default cartReducer;