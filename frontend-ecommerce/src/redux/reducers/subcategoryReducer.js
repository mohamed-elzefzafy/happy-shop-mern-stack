import {  CREATE_SUBCATEGORY,  GET_ERROR, GET_SUBCATEGORY_FOR_CATEGORY } from "../type";

const inital = {
  subcategory : [] ,
  loading : true
}
const subcategoryReducer = (state = inital, action) => {
switch (action.type)
 {
    case CREATE_SUBCATEGORY :
   return {
    ...state,
    subcategory : action.payload ,
    loading :false
    }

    case GET_SUBCATEGORY_FOR_CATEGORY :
      return {
       subcategory : action.payload ,
       loading :false
       }

    case GET_ERROR :
    return {
    subcategory : action.payload ,
    loading :true
    }

  default :
  return state;  
}
}

export default subcategoryReducer;