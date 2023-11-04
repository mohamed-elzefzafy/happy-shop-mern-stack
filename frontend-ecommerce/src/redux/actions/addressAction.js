import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES } from "../type";
import useDeleteData from './../../Hooks/useDeleteData';

export const addAddress = (data) => async (dispatch) => {
  try {

const response = await useInsertData(`/api/v1/addresses` , data);

    dispatch ({
      type :ADD_ADDRESS,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : ADD_ADDRESS,
      payload :error.response
     })
  }
}

export const getAllAddresses = () => async (dispatch) => {
  try {

const response = await useGetDataToken(`/api/v1/addresses`);

    dispatch ({
      type :GET_ALL_ADDRESSES,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ALL_ADDRESSES,
      payload :error.response
     })
  }
}

export const deleteAddress = (id) => async (dispatch) => {
  try {

const response = await useDeleteData(`/api/v1/addresses/${id}`);

    dispatch ({
      type :DELETE_ADDRESS,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : DELETE_ADDRESS,
      payload :error.response
     })
  }
}