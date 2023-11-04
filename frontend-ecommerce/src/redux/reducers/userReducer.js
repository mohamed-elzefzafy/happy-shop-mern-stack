import { GET_ALL_USERS, GET_ERROR } from "../type"

const inital = {
  users : [] ,
  loading : true
}
const userReducer = (state = inital, action) => {
switch (action.type)
 {
case GET_ALL_USERS :
  return {
    ...state ,
    users : action.payload ,
    loading :false
    }
    case GET_ERROR :
  return {
    ...state ,
    users : action.payload ,
    loading :true
    }

  default :
  return state;  
}
}

export default userReducer;