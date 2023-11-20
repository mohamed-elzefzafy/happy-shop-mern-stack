import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand, getAllBrandPage } from "../../redux/actions/brandAction";


const UseAllBrandPageHook = () => {
  const dispatch = useDispatch();

// when first load
  useEffect(()=> {
    dispatch(getAllBrand(6));
  },[])
  
  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);

  let pageCount =0;
if (brand.paginationResult)
pageCount = brand.paginationResult.numberOfPage

// when press pagination
const getPage = (page) => {
dispatch(getAllBrandPage(page))
}

return [brand , loading , pageCount , getPage];

}

export default UseAllBrandPageHook;