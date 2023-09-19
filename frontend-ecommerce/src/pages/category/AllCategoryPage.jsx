import { useDispatch, useSelector } from "react-redux";
import CategoryContainer from "../../components/category/CategoryContainer";
import Pagination from "../../components/utilities/Pagination";
import { getAllCategory, getAllCategoryPage } from "../../redux/actions/categoryAction";
import { useEffect } from "react";




const AllCategoryPage = () => {
  const dispatch = useDispatch();

// when first load
  useEffect(()=> {
    dispatch(getAllCategory(3));
  },[])
  
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  let pageCount =0;
if (category.paginationResult)
pageCount = category.paginationResult.numberOfPage

// when press pagination
const getPage = (page) => {
console.log(page);
dispatch(getAllCategoryPage(page))
}
  return (
    <div style={{ minHeight: "680px" }}>
          <CategoryContainer category={category} loading={loading}  />
          {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/> }
            
  
    </div>
  )
}

export default AllCategoryPage;