import { ADD_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES } from "../type"

const inital = {
  addAddress : [] ,
  allAddresses : [] ,
  deleteAddress : [] ,
}
const addressReducer = (state = inital, action) => {
switch (action.type)
 {
case ADD_ADDRESS :
  return {
    ...state ,
    addAddress : action.payload ,
    }
    case GET_ALL_ADDRESSES :
      return {
    ...state ,
    allAddresses : action.payload ,
    }

    case DELETE_ADDRESS :
      return {
      ...state ,
      deleteAddress : action.payload ,
      }
        
      
  
  default :
  return state;  
}
}

export default addressReducer;