import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage } from "../../redux/actions/productAction";
import { useEffect } from "react";


const UseViewProductAdminHook = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    const getProducts =async () => {

      await dispatch(getAllProducts(10))
  }
    getProducts()
  }

,[])

const onPress = async(page) => {
  await dispatch(getAllProductsPage(page,12))
  }

  
  const allProducts = useSelector((state) => state.allProduct.allProducts)
  let items =[];
try {

  if(allProducts)
  {
    items = allProducts;
  } else {
    items = [];
  }

} catch (error) {
  
}

return [items , onPress  ]

}

export default UseViewProductAdminHook;