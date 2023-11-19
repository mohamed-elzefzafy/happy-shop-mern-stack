import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import { FORGET_PASSWORD, GET_CURRENT_USER,  LOGIN, REGISTER, RESET_PASSWORD, UPDATE_LOGGED_USER_DATA, UPDATE_LOGGED_USER_PASSWORD, VERIFY_RESET_CODE} from "../type";



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
      type : VERIFY_RESET_CODE,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : VERIFY_RESET_CODE,
      payload :error.response
     })
  }
}


export const restUserPassword = (data) => async (dispatch) => {
  try {

const response = await useUpdateData(`/api/v1/auth/resetpassword` , data);
  
    dispatch ({
      type : RESET_PASSWORD,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : RESET_PASSWORD,
      payload :error.response
     })
  }
}



export const updateLoggedUserData = (data) => async (dispatch) => {
  try {

const response = await useUpdateData(`/api/v1/users/updateme` , data);
  
    dispatch ({
      type : UPDATE_LOGGED_USER_DATA,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : UPDATE_LOGGED_USER_DATA,
      payload :error.response
     })
  }
}


export const updateLoggedUserPassword = (data) => async (dispatch) => {
  try {

const response = await useUpdateData(`/api/v1/users/changemypassword` , data);
  
    dispatch ({
      type : UPDATE_LOGGED_USER_PASSWORD,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : UPDATE_LOGGED_USER_PASSWORD,
      payload :error.response
     })
  }
}