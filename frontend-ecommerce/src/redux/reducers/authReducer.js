
import {  LOGIN, REGISTER } from "../type"


const inital = {
  registerUser : [] ,
  loginUser : [] ,
  loading : true
}
const authReducer = (state = inital, action) => {
switch (action.type)
 {
case REGISTER :
  return {
    ...state ,
    registerUser : action.payload ,
    }
    case LOGIN :
      return {
        ...state ,
        loginUser : action.payload ,
        }

  default :
  return state;  
}
}

export default authReducer;