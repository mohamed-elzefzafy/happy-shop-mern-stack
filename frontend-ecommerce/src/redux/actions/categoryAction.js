import { useGetData } from '../../Hooks/useGetData';
import { useInsertDataWithImage } from '../../Hooks/useInsertData';
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY } from '../type';



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

//get one category
export const getOneCategory = (id) => async (dispatch) => {
  try {

const response = await useGetData(`/api/v1/categories/${id}`);
  
    dispatch ({
      type : GET_ONE_CATEGORY,
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

const response =await useGetData(`/api/v1/categories?limit=6&page=${page}`);

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

const response = await useInsertDataWithImage(`/api/v1/categories` , formData);

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