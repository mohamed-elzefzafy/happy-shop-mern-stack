
import { GET_ERROR, REGISTER } from "../type"


const inital = {
  registerUser : [] ,
  loading : true
}
const authReducer = (state = inital, action) => {
switch (action.type)
 {
case REGISTER :
  return {
    ...state ,
    registerUser : action.payload ,
    loading :false
    }
  //   case GET_ERROR :
  // return {
  //   ...state ,
  //   registerUser : action.payload ,
  //   loading :true
  //   }

  default :
  return state;  
}
}

export default authReducer;