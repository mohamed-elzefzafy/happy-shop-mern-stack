import { CREATE_CASH_ORDER } from "../type";

const inital = {
  addCashOrder : [] ,

}
const checkoutReducer = (state = inital, action) => {
switch (action.type)
 {
case CREATE_CASH_ORDER:
  return {
    ...state ,
    addCashOrder : action.payload ,
    }

    

  default :
  return state;  
}
}

export default checkoutReducer;