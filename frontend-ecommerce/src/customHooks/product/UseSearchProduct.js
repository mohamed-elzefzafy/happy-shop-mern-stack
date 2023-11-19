import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage, getAllProductsSearch } from "../../redux/actions/productAction";
import { useEffect } from "react";
import UseSideBarSearchHook from "../category/UseSideBarSearchHook";



const UseSearchProduct = ( queryString) => {
let priceFrom , priceTo;
  let sortType = "" , sort;

  let limit = 8

  const dispatch = useDispatch();

  
  const getProducts = async () => {

      await dispatch(getAllProductsSearch(queryString));
  }

  useEffect(() => {
    getProducts()
  }

,[])

  const allProducts = useSelector((state) => state.allProduct.allProducts);

  let items =[];     let results;     let pagination ;

try {
  if(allProducts?.data)
  {
    items = allProducts?.data;
  } else {
    items = [];
  }

} catch (error) {
  
}


try {
  if (allProducts?.results){
    results = allProducts?.results
    } else {
      results = 0;
    }
  
} catch (error) {
  
}


try {
  if (allProducts?.paginationResult){
    pagination = allProducts?.paginationResult?.numberOfPage
    } else {
      pagination = 0;
    }
  
} catch (error) {
  
}

  const onPress = async(page) => {

//     let word = "";
//     if (localStorage.getItem("searchWord") != null)
//  word =    localStorage.getItem("searchWord")
    await dispatch(getAllProductsSearch())
    }
    
  return [items , results , pagination , onPress , getProducts]
}

export default UseSearchProduct