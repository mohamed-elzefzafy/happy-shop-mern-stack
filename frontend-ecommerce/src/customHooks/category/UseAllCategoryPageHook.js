import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getAllCategoryPage } from "../../redux/actions/categoryAction";


const UseAllCategoryPageHook = () => {
  const dispatch = useDispatch();

// when first load
  useEffect(()=> {
  const getCategories = async() => {
  await  dispatch(getAllCategory(6));
  };
  getCategories();
  },[])
  
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  let pageCount =0;
if (category.paginationResult)
pageCount = category.paginationResult.numberOfPage

// when press pagination
const getPage = async(page) => {
await dispatch(getAllCategoryPage(page))
}

return [category , loading , pageCount , getPage]
}

export default UseAllCategoryPageHook;