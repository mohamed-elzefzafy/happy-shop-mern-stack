import { ADD_TO_WISHLIST, GET_ERROR, REMOVE_FROM_WISHLIST, USER_WISHLIST } from "../type";

const inital = {
  addWishList : [] ,
  removeWishList : [] ,
  allUserWishList : [] ,
}
const wishListReducer = (state = inital, action) => {
switch (action.type)
 {
case ADD_TO_WISHLIST :
  return {
    ...state ,
    addWishList : action.payload ,
    }

    case REMOVE_FROM_WISHLIST :
  return {
    ...state ,
    removeWishList : action.payload ,
    }

  case USER_WISHLIST :
    return {
        ...state ,
        allUserWishList : action.payload ,
        }

  default :
  return state;  
}
}

export default wishListReducer;