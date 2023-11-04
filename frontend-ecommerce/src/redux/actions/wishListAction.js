
import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_WISHLIST } from "../type";
import useDeleteData from './../../Hooks/useDeleteData';


export const addToWishList = (data) => async (dispatch) => {
  try {

const response = await useInsertData(`/api/v1/wishlist` , data );


    dispatch ({
      type : ADD_TO_WISHLIST,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : ADD_TO_WISHLIST,
      payload :error.response
     })
  }
}




export const removeFromWishList = (id) => async (dispatch) => {
  try {

const response = await useDeleteData(`/api/v1/wishList/${id}`);


    dispatch ({
      type :REMOVE_FROM_WISHLIST,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : REMOVE_FROM_WISHLIST,
      payload :error.response
     })
  }
}


export const getProductWishList = (id) => async (dispatch) => {
  try {

const response = await useGetDataToken(`/api/v1/wishlist`);


    dispatch ({
      type :USER_WISHLIST,
      payload : response
    })
  } catch (error) {
     dispatch ({
      type : USER_WISHLIST,
      payload :error.response
     })
  }
}
