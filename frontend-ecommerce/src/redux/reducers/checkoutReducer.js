import { CREATE_CASH_ORDER, CREATE_CREDIT_ORDER } from "../type";

const inital = {
  addCashOrder : [] ,
  addCreditOrder : [] ,

}
const checkoutReducer = (state = inital, action) => {
switch (action.type)
 {
case CREATE_CASH_ORDER:
  return {
    ...state ,
    addCashOrder : action.payload ,
    }

    case CREATE_CREDIT_ORDER:
  return {
    ...state ,
    addCreditOrder : action.payload ,
    }


  default :
  return state;  
}
}

export default checkoutReducer;