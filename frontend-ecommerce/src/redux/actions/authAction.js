import { useInsertData } from "../../Hooks/useInsertData";
import { GET_ERROR, LOGIN, REGISTER } from "../type";


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
