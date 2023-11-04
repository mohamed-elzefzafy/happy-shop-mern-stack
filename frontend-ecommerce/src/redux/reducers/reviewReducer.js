import { CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW, GET_ERROR, PRODUCT_REVIEWS, UPDATE_REVIEW } from "../type"


const inital = {
createReview : [] ,
productReviews : [],
deleteReview : [],
updateReview : [],
  loading : true
}
const reviewReducer = (state = inital, action) => {
switch (action.type)
 {
case CREATE_REVIEW :
  return {
    ...state ,
    createReview : action.payload ,
    loading :false
    }

    case PRODUCT_REVIEWS :
  return {
    ...state ,
    productReviews : action.payload ,
    loading :false
    }

    case DELETE_REVIEW :
      return {
        ...state ,
        deleteReview : action.payload ,
        loading :false
        }
    
        case UPDATE_REVIEW :
          return {
            ...state ,
            updateReview : action.payload ,
            loading :false
            }

  default :
  return state;  
}
}

export default reviewReducer;