import { useEffect, useState } from "react";
import UseSearchProduct from "../product/UseSearchProduct";
import { useNavigate } from "react-router-dom";


const UseNavbarSearchHook = () => {
  const [searchWord, setSearchWord] = useState("");
  const [items , results , pagination , onPress , getProducts] = UseSearchProduct();


const navigate = useNavigate();
const onChangeSearch = (e) => {
  // localStorage.setItem("searchWord", e.target.value);
  setSearchWord(e.target.value);
  // navigate("/products")
  const path =window.location.pathname;
  if (path != "/products")
  {
    // window.location.href = "/products";
    navigate("/products")
  }
}

useEffect(() => {
// setTimeout(() => {

  getProducts(`sort=&limit=8&keyword=${searchWord}`);
// }, 1000);

}, [searchWord])

return [searchWord , onChangeSearch ]
}

export default UseNavbarSearchHook;