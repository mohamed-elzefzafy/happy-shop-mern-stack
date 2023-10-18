import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct, getProductLike } from "../../redux/actions/productAction";
import avatar from "../../images/avatar.png"
import { getOneBrand } from "../../redux/actions/brandAction";

const UseProductDetailHook = (id) => {

  const dispatch = useDispatch();

  const getProducts =async () => {

      await dispatch(getOneProduct(id))
  }
  useEffect(() => {
    getProducts()
  }

,[])

  const oneProduct = useSelector((state) => state.allProduct.oneProduct)

  let item =[];
  if(oneProduct?.data)
  {
    item = oneProduct?.data;
  } else {
    item = [];
  }

//view image
let images;
if(item?.images) {
 
   images = item.images.map((image) =>{ return { original: image}}
    )
} else {
  images =[
    { original: `${avatar}`}
  ]
}



const getBrands =async () => {
if(item.brand)
  await dispatch(getOneBrand(item.brand))
}
const getProductLikeFun =async () => {
  if(item?.category)
  await dispatch(getProductLike(item.category._id));
  }

useEffect(() => {
getBrands();
getProductLikeFun();
}
,[item])

const oneBrand = useSelector((state) => state.allBrand.oneBrand)
let brand =[];
if(oneBrand?.data) {
  brand = oneBrand?.data;
} else {
  brand =[];
}


const likeProduct = useSelector((state)=> state.allProduct.productLike);
let likeProductArr =[];
if(likeProduct?.data) {
  likeProductArr = likeProduct?.data;
} else {
  likeProductArr =[];
}



  return [item , images , brand , likeProductArr]
}

export default UseProductDetailHook;