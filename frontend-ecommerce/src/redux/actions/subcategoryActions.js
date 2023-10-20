import { useGetData } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_SUBCATEGORY, GET_ERROR, GET_SUBCATEGORY_FOR_CATEGORY } from "../type";


//create new Subcategory 
export const createSubcategory = (data) => async (dispatch) => {
  try {
    
const response = await useInsertData(`/api/v1/subcategories` , data);

    dispatch ({
      type : CREATE_SUBCATEGORY,
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


//get Subcategories depend on category 
export const getSubcategoriesForCategory = (id) => async (dispatch) => {
  try {
    
const response = await useGetData(`/api/v1/categories/${id}/subcategories`);

    dispatch ({
      type : GET_SUBCATEGORY_FOR_CATEGORY,
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