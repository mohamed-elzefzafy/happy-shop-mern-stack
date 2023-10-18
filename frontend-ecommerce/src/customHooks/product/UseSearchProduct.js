import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage, getAllProductsSearch } from "../../redux/actions/productAction";
import { useEffect } from "react";
import UseSideBarSearchHook from "../category/UseSideBarSearchHook";



const UseSearchProduct = ( ) => {

  // let  [clickCategory , clickBrand, category , brand , queryCategory]= UseSideBarSearchHook();

let priceFrom , priceTo;
  let sortType = "" , sort;

// const sortData = () => {
//   if (localStorage.getItem("sortType") !== null)
//   {
//     sortType = localStorage.getItem("sortType")
//   } else {
//     sortType = "";
//   }

//   if (sortType === "السعر من الاقل للاعلي") 
//   {
//     sort = "+price";
//   } else if (sortType === "السعر من الاعلي للاقل") 
//   {
//     sort = "-price";
//   }  else if (sortType === "") 
//   {
//     sort = "";
//   } else if (sortType === "الاكثر مبيعا") 
//   {
//     sort = "-sold";
//   } else if (sortType === "الاعلي تقييما") 
//   {
//     sort = "-ratingsQuantity";
//   }

// }

  let limit = 8

  const dispatch = useDispatch();

  const getProducts = async (queryString) => {
      //    let word = "";
      //    if (localStorage.getItem("searchWord") != null)
      // word =    localStorage.getItem("searchWord")
      // sortData();

      // let   QueryCategory = "";
      // if (queryCategory !== null)
      // {
      //   QueryCategory = queryCategory;
      // } else {
      //   QueryCategory = "";
      // }

    //   let QueryCategory ="";
    //   if (localStorage.getItem("catCecked") != null)
    //     QueryCategory = localStorage.getItem("catCecked") ;
    //   else
    //   QueryCategory ="";
  

    //   let QueryBrand = "";
      
    //   if (localStorage.getItem("brandCecked") != null)
    //   QueryBrand = localStorage.getItem("brandCecked") ;
    // else
    // QueryBrand ="";

    // if(localStorage.getItem("priceFrom") != null);
    // priceFrom = localStorage.getItem("priceFrom")

    // if(localStorage.getItem("priceTo") != null);
    // priceTo = localStorage.getItem("priceTo")

      // await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${QueryCategory}&${QueryBrand}`));
      // await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}`));
      await dispatch(getAllProductsSearch(queryString));
      // await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}&price[gt]=${priceTo}&price[lte]=${priceFrom}`));
  }
  useEffect(() => {
    getProducts()
  }

,[])

  const allProducts = useSelector((state) => state.allProduct.allProducts)

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
    results = allProducts.results
    } else {
      results = 0;
    }
  
} catch (error) {
  
}


try {
  if (allProducts?.paginationResult){
    pagination = allProducts.paginationResult.numberOfPage
    } else {
      pagination = 0;
    }
  
} catch (error) {
  
}

  const onPress = async(page) => {

    let word = "";
    if (localStorage.getItem("searchWord") != null)
 word =    localStorage.getItem("searchWord")
    await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}`))
    }
    
  return [items , results , pagination , onPress , getProducts]
}

export default UseSearchProduct