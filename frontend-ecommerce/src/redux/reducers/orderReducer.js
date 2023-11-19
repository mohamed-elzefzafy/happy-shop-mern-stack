import { GET_ALL_ORDERS, GET_ONE_ORDER, UPDATE_ORDER_TO_DELIVER, UPDATE_ORDER_TO_PAID } from "../type";


const inital = {
allOrders : [] ,
oneOrder : [] ,
updateOrderPaid : [] ,
updateOrderDeliver : [] ,

}
const completeReducer = (state = inital, action) => {
switch (action.type)
 {
case GET_ALL_ORDERS:
  return {
    ...state ,
    allOrders : action.payload ,
    }
    case GET_ONE_ORDER:
      return {
        ...state ,
        oneOrder : action.payload ,
        }
        case UPDATE_ORDER_TO_PAID:
          return {
            ...state ,
            updateOrderPaid : action.payload ,
            }
            case UPDATE_ORDER_TO_DELIVER:
          return {
            ...state ,
            updateOrderDeliver : action.payload ,
            }
        
  default :
  return state;  
}
}

export default completeReducer;