import useDeleteData from "../../Hooks/useDeleteData";
import { useGetData } from "../../Hooks/useGetData";
import { useInsertDataWithImage } from "../../Hooks/useInsertData";
import  { useUpdateDataWithImage } from "../../Hooks/useUpdateData";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR, GET_ONE_PRODUCT, GET_PRODUCT_LIKE, UPDATE_PRODUCT } from "../type";


//create new Product 
export const createProduct = (formData) => async (dispatch) => {
  try {

const response = await useInsertDataWithImage(`/api/v1/products` , formData);

    dispatch ({
      type : CREATE_PRODUCT,
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

//get All Products 
export const getAllProducts = (limit) => async (dispatch) => {
  try {

const response =await useGetData(`/api/v1/products?limit=${limit}`);

    dispatch ({
      type : GET_ALL_PRODUCTS,
      payload : response,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}



//get All Products with page number
export const getAllProductsPage = (page , limit) => async (dispatch) => {
  try {

const response =await useGetData(`/api/v1/products?page=${page}&limit=${limit}`);

    dispatch ({
      type : GET_ALL_PRODUCTS,
      payload : response,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}



//get All Products with queryString
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {

const response =await useGetData(`/api/v1/products?${queryString}`);

    dispatch ({
      type : GET_ALL_PRODUCTS,
      payload : response,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}





//get one Product
export const getOneProduct = (id) => async (dispatch) => {
  try {

const response = await useGetData(`/api/v1/products/${id}`);

    dispatch ({
      type : GET_ONE_PRODUCT,
      payload : response,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}


//get one Product
export const getProductLike = (id) => async (dispatch) => {
  try {

const response = await useGetData(`/api/v1/products?category[]=${id}`);

    dispatch ({
      type : GET_PRODUCT_LIKE,
      payload : response,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}


//delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {

const response = await useDeleteData(`/api/v1/products/${id}`);

    dispatch ({
      type : DELETE_PRODUCT,
      payload : response,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}


//update Product
export const updateProduct = (id , formData) => async (dispatch) => {
  try {

const response = await useUpdateDataWithImage(`/api/v1/products/${id}` , formData);

    dispatch ({
      type : UPDATE_PRODUCT,
      payload : response,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type : GET_ERROR,
      payload : "error " + error
     })
  }
}

