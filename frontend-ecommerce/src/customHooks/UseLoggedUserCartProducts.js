import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsCart } from "../redux/actions/cartAction";
import { useState } from "react";


const UseLoggedUserCartProducts = () => {
const dispatch = useDispatch();
const [loading, setLoading] = useState(true);
const [allCartProducts, setAllCartProducts] = useState([]);
const [cartLength, setCartLength] = useState(0);
const [cartId, setCartId] = useState("");
const [totalCartPriceVar, setTotalCartPriceVar] = useState(0);
const [totalCartAfterDiscount, setTotalCartAfterDiscount] = useState(0);
const [couponName, setCouponName] = useState("");


useEffect(() => {
  const getloggedUserCart = async() => {
    setLoading(true);
  await dispatch(getAllProductsCart());
  setLoading(false)
  }
  getloggedUserCart();
},[])

const res = useSelector((state) => state.cart.allProductsCart);
// if(res)
// console.log(res);


useEffect(() => {

  if (loading === false)
  {
   if (res && res.status === "success")
   {
    setAllCartProducts(res?.data);
    setCartLength(res?.result);
    setCartId(res?.data?._id);
    setTotalCartPriceVar(res?.data.totalCartPrice);
    setTotalCartAfterDiscount(res?.totalAfterDiscount);
    setCouponName(res?.data?.coupon);
   } else {
    setAllCartProducts([]);
    setCartLength(0);
    setCartId("");
    setTotalCartPriceVar(0);
    setTotalCartAfterDiscount(0);
    setCouponName("");
   }
  } 
},[loading ])


// let allCartProducts = [] , cartLength ;
// if(res)
// {
//   allCartProducts = res?.data;
//   cartLength = res?.result;
// } else{
//   allCartProducts = [];
// cartLength = 0;
// }
// try {
  
// } catch (error) {
//   console.log(error);
// }


return [ allCartProducts , cartLength , totalCartPriceVar , totalCartAfterDiscount , couponName , cartId];
  
}

export default UseLoggedUserCartProducts