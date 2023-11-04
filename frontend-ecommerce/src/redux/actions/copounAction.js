import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import { ADD_COUPON, DELETE_COUPON, GET_ALL_COUPONS, GET_ONE_COUPON, UPDATE_COUPON } from "../type";
import useDeleteData from './../../Hooks/useDeleteData';



export const addCoupon = (data) => async (dispatch) => {
  try {

const response = await useInsertData(`/api/v1/coupons` , data);

    dispatch ({
      type : ADD_COUPON,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : ADD_COUPON,
      payload :error.response
     })
  }
}

export const getAllCoupons = () => async (dispatch) => {
  try {

const response = await useGetDataToken(`/api/v1/coupons`);

    dispatch ({
      type : GET_ALL_COUPONS,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ALL_COUPONS,
      payload :error.response
     })
  }
}

export const updateCoupon = (id , data) => async (dispatch) => {
  try {

const response = await useUpdateData(`/api/v1/coupons/${id}` , data);

    dispatch ({
      type : UPDATE_COUPON,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : UPDATE_COUPON,
      payload :error.response
     })
  }
}

export const deleteCoupon = (id , data) => async (dispatch) => {
  try {

const response = await useDeleteData(`/api/v1/coupons/${id}` , data);

    dispatch ({
      type : DELETE_COUPON,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : DELETE_COUPON,
      payload :error.response
     })
  }
}

export const getOneCoupon = (id ) => async (dispatch) => {
  try {

const response = await useGetDataToken(`/api/v1/coupons/${id}`);

    dispatch ({
      type : GET_ONE_COUPON,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ONE_COUPON,
      payload :error.response
     })
  }
}