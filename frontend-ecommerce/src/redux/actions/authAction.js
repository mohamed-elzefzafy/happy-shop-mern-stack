import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { FORGET_PASSWORD, GET_CURRENT_USER, GET_ERROR, LOGIN, REGISTER, VERIFY_RESET_PASSWORD } from "../type";


export const registerUser = (data) => async (dispatch) => {
  try {

const response = await useInsertData(`/api/v1/auth/register` , data);
  
    dispatch ({
      type : REGISTER,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : REGISTER,
      payload :error.response
     })
  }
}


export const loginUser = (data) => async (dispatch) => {
  try {

const response = await useInsertData(`/api/v1/auth/login` , data);
  
    dispatch ({
      type : LOGIN,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : LOGIN,
      payload :error.response
     })
  }
}


export const getLoggedUser = () => async (dispatch) => {
  try {

const response = await useGetDataToken(`/api/v1/users/getme`);
  
    dispatch ({
      type : GET_CURRENT_USER,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_CURRENT_USER,
      payload :error.response
     })
  }
}

export const userForgetPassword = (data) => async (dispatch) => {
  try {

const response = await useInsertData(`/api/v1/auth/forgotpassword` , data);
  
    dispatch ({
      type : FORGET_PASSWORD,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : FORGET_PASSWORD,
      payload :error.response
     })
  }
}


export const verifyRestCode = (data) => async (dispatch) => {
  try {

const response = await useInsertData(`/api/v1/auth/verifyrestcode` , data);
  
    dispatch ({
      type : VERIFY_RESET_PASSWORD,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : VERIFY_RESET_PASSWORD,
      payload :error.response
     })
  }
}
