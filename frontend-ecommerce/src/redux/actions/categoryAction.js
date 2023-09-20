
import  { useCreateDataWithImage } from '../../Hooks/useCreateData';
import useGetData from '../../Hooks/useGetData';
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR } from '../type';



//get all category
export const getAllCategory = (limit) => async (dispatch) => {
  try {

const response = await useGetData(`/api/v1/categories?limit=${limit}`);
  
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
//get all category with pagination
export const getAllCategoryPage = (page) => async (dispatch) => {
  try {

const response =await useGetData(`/api/v1/categories?limit=3&page=${page}`);

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


//create new category 
export const createCategory = (formData) => async (dispatch) => {
  try {

const response = await useCreateDataWithImage(`/api/v1/categories` , formData);

    dispatch ({
      type : CREATE_CATEGORY,
      payload : response ,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}