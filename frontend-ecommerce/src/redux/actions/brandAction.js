
import useGetData from '../../Hooks/useGetData';
import { useInsertDataWithImage } from '../../Hooks/useInsertData';
import { CREATE_BRAND, GET_ALL_BRAND,  GET_ERROR, GET_ONE_BRAND } from '../type';



//get all brands
export const getAllBrand = (limit) => async (dispatch) => {
  try {

const response = await useGetData(`/api/v1/brands?limit=${limit}`);
  
    dispatch ({
      type : GET_ALL_BRAND,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}

//get one brands
export const getOneBrand = (id) => async (dispatch) => {
  try {

const response = await useGetData(`/api/v1/brands/${id}`);
  
    dispatch ({
      type : GET_ONE_BRAND,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}


//get all brands with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
  try {

const response =await useGetData(`/api/v1/brands?limit=4&page=${page}`);

    dispatch ({
      type : GET_ALL_BRAND,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}


//create new brand 
export const createBrand = (formData) => async (dispatch) => {
  try {

const response = await useInsertDataWithImage(`/api/v1/brands` , formData);

    dispatch ({
      type : CREATE_BRAND,
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