import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import { getSubcategoriesForCategory } from "../../redux/actions/subcategoryActions";
import { createProduct, getOneProduct, updateProduct } from "../../redux/actions/productAction";


const UseEditProductHook = (id) => {
  const dispatch = useDispatch();


  useEffect(()=> {
//     if (!navigator.onLine)
// {
//   toast.error("لا يوجد إتصال بالإنترنت");
//   return;
// }
const run = async() => {
await  dispatch(getOneProduct(id))
await  dispatch(getAllCategory());
await  dispatch(getAllBrand());
}
run();
  },[])
  



  const item = useSelector((state) => state.allProduct.oneProduct)
  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrand.brand);
  const subCategory = useSelector((state) => state.allSubcategory.subcategory);

  const onSelect = (selectedList)=> {
    setSelectedSubID(selectedList)
    }
    
    const onRemove = (selectedList)=> {
      setSelectedSubID(selectedList)
    }


  const [images, setImages] = useState([]);
  const [options, setOptions] = useState([]);
  const [prodName, setProdName] = useState('');
  const [prodDescription, setProdDescription] = useState('');
  const [priceBefore, setPriceBefore] = useState();
  const [priceAftr, setPriceAftr] = useState();
  const [qty, setQty] = useState();
  const [CatID, setCatID] = useState({});
  const [BrandID, SetBrandID] = useState('');
  const [subCatID, setSubCatID] = useState([]);
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  if(item.data)
  setImages(item?.data?.images)
  setProdName(item?.data?.title)
  setProdDescription(item?.data?.description)
  setPriceBefore(item?.data?.price)
  setQty(item?.data?.quantity)
  setCatID(item?.data?.category._id)
  setSelectedSubID(item?.data?.subcategories)
  SetBrandID(item?.data?.brand)
  setColors(item?.data?.colors)
},[item])


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


const onSelectCategory = async(e)=> {

  setCatID(e.target.value);
}


useEffect(()=> {
if (CatID !== 0 ) {
  const run = async () => {
    await dispatch(getSubcategoriesForCategory(CatID));
  }
  run();
}
},[CatID])

useEffect(() => {
if (subCategory?.data)
 {
  setOptions(subCategory?.data)
 }
}, [subCategory])


const onSelectBrand = (e)=> {
  SetBrandID(e.target.value);
}

  





  // to convert base 64 to file
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


    //convert url to file
    const convertURLtoFile = async (url) => {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.blob();
      const ext = url.split(".").pop();
      const filename = url.split("/").pop();
      const metadata = { type: `image/${ext}` };
      return new File([data], Math.random(), metadata);
  };


// to update product
const handleSubmit =async (e) => {
  e.preventDefault();
  if (prodName === "" || prodDescription === "" || qty === "" || priceBefore === "" || images?.length <= 0 || CatID === 0 
  || colors?.length <= 0 )
  {
    toast.warning("من فضلك أكمل البيانات");
    return;
  }
  if ( +priceAftr > +priceBefore) {
    toast.warning("السعر بعد الخصم لا يمكن أن يكون أكبر من السعر قبل الخصم");
    return;
  }
  

  let imageCover ;
  if(images[0].length <= 1000)
  {
convertURLtoFile(images[0]).then((val) => imageCover = val)
  } else {
    // convert base 64 image to file 
     imageCover = dataURLtoFile(images[0] , Math.random() + ".png");

  }




//convert array of base 64 image to file 
let itemImage =[];

 Array.from(Array(Object.keys(images)?.length).keys()).map((item , index) => {
    if (images[index].length <= 1000)
    {
      convertURLtoFile(images[index]).then((val) => itemImage.push(val))
    }else {
       itemImage.push(dataURLtoFile(images[index] , Math.random() + ".png"))  
    }
  

  })

  const formData = new FormData();
  formData.append("title" , prodName);
  formData.append("description" , prodDescription);
  formData.append("quantity" , qty);
  formData.append("price" , priceBefore);
  formData.append("category" , CatID);
  formData.append("brand" , BrandID);
  // formData.append("priceAfterDiscount" , priceAftr);
  setTimeout(() => {
    formData.append("imageCover" ,imageCover);
    itemImage?.map((image) => formData.append("images" , image));
  }, 1000);


  colors?.map((color) => formData.append("colors" , color));

  selectedSubID?.map((subcategory) => formData.append("subcategories" , subcategory?._id));




setTimeout(async() => {
  setLoading(true);
await  dispatch(updateProduct(id ,formData));
setLoading(false);
}, 1000);

}

const product = useSelector((state) => state.allProduct.updateProduct)

useEffect(()=> {
  console.log(product);
if (loading === false)
{
  setCatID(item?.category?._id);
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


if (product) {
  if(product.status === 201)
  {
    console.log(product.status);
    toast.success("تمت التعديل بنجاح");
  } else  {
    console.log(product.status);
    toast.error("يوجد مشكله")
  }
}
}
},[loading])



return [images ,prodName,CatID , prodDescription,priceBefore , priceAftr,qty ,category,options , BrandID ,brand,colors,showColor,
   colorBoxShow,onSelect , onRemove, onSelectBrand, removeColor,handleChangeComplete,handleSubmit,
  setImages , setProdName , setProdDescription , setPriceBefore , setPriceAftr , setQty , onSelectCategory]

}

export default UseEditProductHook;