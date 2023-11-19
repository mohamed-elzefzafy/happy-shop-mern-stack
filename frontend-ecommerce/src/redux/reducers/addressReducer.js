import { ADD_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES, GET_ONE_ADDRESS, UPDATE_ADDRESS } from "../type"

const inital = {
  addAddress : [] ,
  allAddresses : [] ,
  deleteAddress : [] ,
  updateAddress : [] ,
  getOneAddress : [] ,
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
      
      case UPDATE_ADDRESS:
        return {
        ...state ,
        updateAddress : action.payload ,
        }

        case GET_ONE_ADDRESS:
          return {
          ...state ,
          getOneAddress : action.payload ,
          }
        
      
  
  default :
  return state;  
}
}

export default addressReducer;