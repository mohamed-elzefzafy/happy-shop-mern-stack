import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { toast } from "react-toastify";
import { createSubcategory } from "../../redux/actions/subcategoryActions";


const UseAddSubcategoryHook = () => {
  const [id, setId] = useState("0");
  const [name, setName] = useState("");
const [loading, setLoading] = useState(true);


  const dispatch = useDispatch();
  useEffect(()=> {
    if (!navigator.onLine)
{
  toast.error("لا يوجد إتصال بالإنترنت");
  return;
}
    dispatch(getAllCategory());
  },[])
  
  const category = useSelector((state) => state.allCategory.category);


  const subCategory = useSelector((state) => state.allSubcategory.subcategory);



const handleChange = (e) => {
setId(e.target.value);
} 

const onChangeName = (e) => {
  e.persist();
  setName(e.target.value)
}

const handleSubmit = async(e) => {
e.preventDefault();
if (!navigator.onLine)
{
  toast.error("لا يوجد إتصال بالإنترنت");
  return;
}
if (id === "0")
{
toast.warning("إختر تصنيف رئيسى")
  return;
} else if (name === "") {
  toast.warning("إختر تصنيف فرعى")
  return;
}

setLoading(true);
if(category)
await dispatch(createSubcategory({
  name,
  category : id
}))
setLoading(false);


}
useEffect(() => {
if (loading === false)
{
  setId("0");
  setName("");
  if (subCategory)
if (subCategory.status === 201)
{
  toast.success("تمت الإضافه بنجاح")
} else if (subCategory === "error AxiosError: Request failed with status code 400") {
  toast.warning("إسم التصنيف الفرعى مكرر"); 
}
 else {
  toast.error("يوجد خطأ بالبيانات"); 
}

setLoading(true);
}
}, [loading])


return [name ,  id , category  , onChangeName , handleChange  , handleSubmit]
}

export default UseAddSubcategoryHook