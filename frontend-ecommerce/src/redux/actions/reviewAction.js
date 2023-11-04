import useDeleteData from "../../Hooks/useDeleteData";
import { useGetData } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData, useUpdateDataWithImage } from "../../Hooks/useUpdateData";
import { CREATE_REVIEW, DELETE_REVIEW, DELETE_REVIEWS, EDIT_REVIEW, GET_ERROR, PRODUCT_REVIEWS, UPDATE_REVIEW } from "../type";



export const createReview = (id , body) => async (dispatch) => {
  try {
    
const response = await useInsertData(`/api/v1/products/${id}/reviews` , body);

    dispatch ({
      type : CREATE_REVIEW,
      payload : response ,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type : CREATE_REVIEW,
      payload : error.response
     })
  }
}


export const allReviewsForProduct = (id , page , limit) => async (dispatch) => {
  try {
    
const response = await useGetData(`/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`);

    dispatch ({
      type : PRODUCT_REVIEWS,
      payload : response ,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type : PRODUCT_REVIEWS,
      payload : error.response
     })
  }
}


export const deleteReview = (id) => async (dispatch) => {
  try {
    
const response = await useDeleteData(`/api/v1/reviews/${id}`);

    dispatch ({
      type : DELETE_REVIEW,
      payload : response ,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type : DELETE_REVIEW,
      payload : error.response
     })
  }
}


export const updateReview = (id , bodyData) => async (dispatch) => {
  try {
    
const response = await useUpdateData(`/api/v1/reviews/${id}` , bodyData);

    dispatch ({
      type : UPDATE_REVIEW,
      payload : response ,
      loading : true
    })
  } catch (error) {
     dispatch ({
      type :UPDATE_REVIEW,
      payload : error.response
     })
  }
}
