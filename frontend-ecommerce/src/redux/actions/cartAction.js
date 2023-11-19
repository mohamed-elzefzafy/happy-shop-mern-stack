import useDeleteData from "../../Hooks/useDeleteData";
import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import {useUpdateData} from "../../Hooks/useUpdateData";
import { ADD_PRODUCT_TO_CART, APPLY_COUPON_TO_CART, DELETE_ALL_PRODUCTS_CART, DELETE_ONE_PRODUCT_FROM_CART, GET_ALL_PRODUCTS_CART, UPDATE_PRODUCT_QUANTITY_IN_CART } from "../type";


export const addProductToCart = (data ) => async (dispatch) => {
  try {

const response = await useInsertData(`/api/v1/cart` , data);

    dispatch ({
      type : ADD_PRODUCT_TO_CART,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : ADD_PRODUCT_TO_CART,
      payload :error.response
     })
  }
}


export const getAllProductsCart = () => async (dispatch) => {
  try {

const response = await useGetDataToken(`/api/v1/cart`);

    dispatch ({
      type : GET_ALL_PRODUCTS_CART,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : GET_ALL_PRODUCTS_CART,
      payload :error.response
     })
  }
}

export const deleteAllProductsCart = () => async (dispatch) => {
  try {

const response = await useDeleteData(`/api/v1/cart`);

    dispatch ({
      type : DELETE_ALL_PRODUCTS_CART,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : DELETE_ALL_PRODUCTS_CART,
      payload :error.response
     })
  }
}


export const deleteOneProductFromCart = (id) => async (dispatch) => {
  try {

const response = await useDeleteData(`/api/v1/cart/${id}`);

    dispatch ({
      type : DELETE_ONE_PRODUCT_FROM_CART,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : DELETE_ONE_PRODUCT_FROM_CART,
      payload :error.response
     })
  }
}


export const updateQuantityforProductInCart = (id , data) => async (dispatch) => {
  try {

const response = await useUpdateData(`/api/v1/cart/${id}` , data);

    dispatch ({
      type : UPDATE_PRODUCT_QUANTITY_IN_CART,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : UPDATE_PRODUCT_QUANTITY_IN_CART,
      payload :error.response
     })
  }
}


export const applyCoupobToCart = ( data) => async (dispatch) => {
  try {

const response = await useUpdateData(`/api/v1/cart/applycoupon` , data);

    dispatch ({
      type : APPLY_COUPON_TO_CART,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : APPLY_COUPON_TO_CART,
      payload :error.response
     })
  }
}