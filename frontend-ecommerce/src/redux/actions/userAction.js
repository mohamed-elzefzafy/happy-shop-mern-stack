import { useGetDataToken } from "../../Hooks/useGetData";
import { GET_ALL_USERS } from "../type";



export const getAllUsersAction = (page) => async (dispatch) => {
  try {

const response =await useGetDataToken(`/api/v1/users?sort=name`);

    dispatch ({
      type : GET_ALL_USERS,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ALL_USERS,
      payload :error.response
     })
  }
}