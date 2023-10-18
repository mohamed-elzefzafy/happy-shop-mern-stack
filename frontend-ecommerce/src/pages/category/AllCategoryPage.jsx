import CategoryContainer from "../../components/category/CategoryContainer";
import Pagination from "../../components/utilities/Pagination";
import UseAllCategoryPageHook from "../../customHooks/category/UseAllCategoryPageHook";





const AllCategoryPage = () => {
const  [category , loading , pageCount , getPage] = UseAllCategoryPageHook();
  return (
    <div style={{ minHeight: "680px" }}>
          <CategoryContainer category={category} loading={loading}  />
          {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/> }
            
  
    </div>
  )
}

export default AllCategoryPage;