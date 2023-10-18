import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import { getSubcategoriesForCategory } from "../../redux/actions/subcategoryActions";
import { createProduct } from "../../redux/actions/productAction";


const UseAddProductHook = () => {
  const [images, setImages] = useState([]);
  const [options, setOptions] = useState([]);
  const [prodName, setProdName] = useState('');
  const [prodDescription, setProdDescription] = useState('');
  const [priceBefore, setPriceBefore] = useState();
  const [priceAftr, setPriceAftr] = useState();
  const [qty, setQty] = useState();
  const [CatID, setCatID] = useState('');
  const [BrandID, SetBrandID] = useState('');
  const [subCatID, setSubCatID] = useState([]);
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

const handleChangeComplete = (color) => {
  setShowColor(!showColor)
  setColors([...colors , color.hex])
  console.log(colors[0]);
}

const removeColor = (color) => {
const newColorsArray = colors.filter((Color) => Color !== color);
setColors(newColorsArray)
}


const colorBoxShow = () => {
setShowColor(!showColor)
}

  const dispatch = useDispatch();
  useEffect(()=> {
    if (!navigator.onLine)
{
  toast.error("لا يوجد إتصال بالإنترنت");
  return;
}
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  },[])
  
  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrand.brand);
  const subCategory = useSelector((state) => state.allSubcategory.subcategory);







const onSelectCategory = async(e)=> {
if (e.target.value !== 0) {
   await dispatch(getSubcategoriesForCategory(e.target.value));
  
}

  setCatID(e.target.value);

}

useEffect(()=> {
if (CatID !== 0 ) {
  if (subCategory.data) {
    setOptions(subCategory.data);
  }
}
},[CatID])


const onSelectBrand = (e)=> {
  SetBrandID(e.target.value);
}


  
const onSelect = (selectedList)=> {
setSelectedSubID(selectedList)
}

const onRemove = (selectedList)=> {
  setSelectedSubID(selectedList)
}




  //to convert base 64 to file
  function dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}


// to save product
const handleSubmit =async (e) => {
  e.preventDefault();
  if (prodName === "" || prodDescription === "" || qty === "" || priceBefore === "" || images.length <= 0 || CatID === 0 
  || colors.length <= 0 )
  {
    toast.warning("من فضلك أكمل البيانات");
    return;
  }
  if ( +priceAftr > +priceBefore) {
    toast.warning("السعر بعد الخصم لا يمكن أن يكون أكبر من السعر قبل الخصم");
    return;
  }
  
    //convert base 64 image to file 
  const imageCover = dataURLtoFile(images[0] , Math.random() + ".png");
//convert array of base 64 image to file 
  const itemImage = Array.from(Array(Object.keys(images).length).keys()).map((item , index) => {
    return (
      dataURLtoFile(images[index] , Math.random() + ".png")
    )
  })

  const formData = new FormData();
  formData.append("title" , prodName);
  formData.append("description" , prodDescription);
  formData.append("quantity" , qty);
  formData.append("price" , priceBefore);
  formData.append("imageCover" , imageCover);
  formData.append("category" , CatID);
  formData.append("brand" , BrandID);
  formData.append("priceAfterDiscount" , priceAftr);

  colors.map((color) => formData.append("colors" , color));
  selectedSubID.map((subcategory) => formData.append("subcategories" , subcategory._id));
  itemImage.map((image) => formData.append("images" , image));


setLoading(true);
await  dispatch(createProduct(formData));
setLoading(false);
}

const product = useSelector((state) => state.allProduct.product)

useEffect(()=> {
if (loading === false)
{
  setCatID("0");
  setColors([]);
  setImages([]);
setProdName("");
setProdDescription("");
setPriceBefore('السعر قبل الخصم');
setPriceAftr('السعر بعد الخصم');
setQty('الكمية المتاحة');
SetBrandID("");
setSelectedSubID([])
setLoading(true);
SetBrandID(0);
setCatID("");
setOptions([]);


if (product) {
  if(product.status === 201)
  {
    toast.success("تمت الإضافه بنجاح");
  } else  {
    toast.error("يوجد مشكله")
  }
}
}
},[loading])



return [images ,prodName ,CatID , prodDescription,priceBefore , priceAftr,qty ,category,options , BrandID ,brand,colors,showColor,
   colorBoxShow,onSelect , onRemove, onSelectBrand, removeColor,handleChangeComplete,handleSubmit,
  setImages , setProdName , setProdDescription , setPriceBefore , setPriceAftr , setQty , onSelectCategory]
}

export default UseAddProductHook