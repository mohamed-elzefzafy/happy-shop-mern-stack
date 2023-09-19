
import useGetData from '../../Hooks/useGetData';
import { GET_ALL_CATEGORY, GET_ERROR } from '../type';




export const getAllCategory = (limit) => async (dispatch) => {
  try {

const response =await useGetData(`/api/v1/categories?limit=${limit}`);
    console.log(response.data);
    dispatch ({
      type : GET_ALL_CATEGORY,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}

export const getAllCategoryPage = (page) => async (dispatch) => {
  try {

const response =await useGetData(`/api/v1/categories?limit=3&page=${page}`);
    console.log(response.data);
    dispatch ({
      type : GET_ALL_CATEGORY,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}