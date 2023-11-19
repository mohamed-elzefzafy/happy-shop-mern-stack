import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_CASH_ORDER } from "../type";



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
