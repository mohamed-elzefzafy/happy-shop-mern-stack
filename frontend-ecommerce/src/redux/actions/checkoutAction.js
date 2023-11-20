import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_CASH_ORDER, CREATE_CREDIT_ORDER } from "../type";



export const createCashOrder = (id , data) => async (dispatch) => {
  try {

const response = await useInsertData(`/api/v1/orders/${id}` , data);

    dispatch ({
      type : CREATE_CASH_ORDER,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : CREATE_CASH_ORDER,
      payload :error.response
     })
  }
}



export const createCreditOrder = (id , data) => async (dispatch) => {
  try {

const response = await useGetDataToken(`/api/v1/orders/checkoutsession/${id}` , data);

    dispatch ({
      type : CREATE_CREDIT_ORDER,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : CREATE_CREDIT_ORDER,
      payload :error.response
     })
  }
}
