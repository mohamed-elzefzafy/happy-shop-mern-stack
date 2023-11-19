import { useGetDataToken } from "../../Hooks/useGetData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import { GET_ALL_ORDERS, GET_ONE_ORDER, UPDATE_ORDER_TO_DELIVER, UPDATE_ORDER_TO_PAID } from "../type";

export const getAllOrders = ( page ,limit) => async (dispatch) => {
  try {

const response = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}`);

    dispatch ({
      type :GET_ALL_ORDERS,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ALL_ORDERS,
      payload :error.response
     })
  }
}


export const getSpecificOrder = (id) => async (dispatch) => {
  try {

const response = await useGetDataToken(`/api/v1/orders/${id}`);

    dispatch ({
      type :GET_ONE_ORDER,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ONE_ORDER,
      payload :error.response
     })
  }
}


export const updateOrderToPaid = (id) => async (dispatch) => {
  try {

const response = await useUpdateData(`/api/v1/orders/${id}/pay`);

    dispatch ({
      type :UPDATE_ORDER_TO_PAID,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : UPDATE_ORDER_TO_PAID,
      payload :error.response
     })
  }
}


export const updateOrderToDeliver = (id) => async (dispatch) => {
  try {

const response = await useUpdateData(`/api/v1/orders/${id}/deliver`);

    dispatch ({
      type :UPDATE_ORDER_TO_DELIVER,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : UPDATE_ORDER_TO_DELIVER ,
      payload :error.response
     })
  }
}
