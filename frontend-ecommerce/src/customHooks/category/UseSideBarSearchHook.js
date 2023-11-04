import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import { useState } from "react";
import UseSearchProduct from "../product/UseSearchProduct";


const UseSideBarSearchHook = () => {
  const dispatch = useDispatch();

  const [items , results , pagination , onPress , getProducts] = UseSearchProduct();
// when first load
  useEffect(()=> {
const  getData = async() => {
  await  dispatch(getAllCategory());
  await  dispatch(getAllBrand());
  }
  getData();
  },[])
  
  const allCat = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrand.brand);

let category =[];
if (allCat.data)
category = allCat.data;
else
category = []


let brand =[];
if (allBrand?.data)
brand = allBrand?.data;
else
brand = [];


var queryCategory = "" , queryBrand = "";
const [catCheck, setCatCheck] = useState([]);
const clickCategory = (e) => {
let value = e.target.value;
if (value === "0")
{
  setCatCheck([]);
} else {
  if (e.target.checked === true)
  {

    setCatCheck([...catCheck , value])
  }else if (e.target.checked === false)
  {
  const newArray =  catCheck.filter((val) => val !== value)
  setCatCheck(newArray)
  }
}

console.log(catCheck);
}


// useEffect(() => {

  
//     queryCategory = catCheck.map((val) => "category[]=" + val).join("&");
   
//     localStorage.setItem("catCecked" , queryCategory)
//     setTimeout(() => {
//      getProducts();
//     }, 1000);
   

// },[catCheck])



 const [brandCheck, setBrandCheck] = useState([]);
const clickBrand = (e) => {
let value = e.target.value;
if (value === "0")
{
  setBrandCheck([]);
} else {
  if (e.target.checked === true)
  {
    setBrandCheck([...brandCheck , value])
  }else if (e.target.checked === false)
  {
  const newArray =  brandCheck.filter((val) => val !== value)
  setBrandCheck(newArray)
  }
}

console.log(brandCheck);
}


// useEffect(() => {

  
//     queryBrand = brandCheck.map((val) => "brand[in][]=" + val).join("&");
   
//     localStorage.setItem("brandCecked" , queryBrand)
//     setTimeout(() => {
//      getProducts();
//     }, 1000);
   

// },[catCheck])

const [from, setFrom] = useState(0);
const [to, setTo] = useState(0);

const priceFrom =  (e) => {
  localStorage.setItem("priceFrom" , e.target.value)
  setFrom(e.target.value);
}


const priceTo =  (e) => {
  localStorage.setItem("priceTo" , e.target.value)
  setTo(e.target.value);
}

useEffect(() => {
  setTimeout(() => {
    getProducts();
  }, 1000);
},[from , to])
return [clickCategory , clickBrand , priceFrom , priceTo, category , brand , queryCategory]
}

export default UseSideBarSearchHook;