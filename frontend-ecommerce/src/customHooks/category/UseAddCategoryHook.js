import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createCategory } from "../../redux/actions/categoryAction";
import { useEffect } from "react";
import avatar from "../../images/avatar.png";



const UseAddCategoryHook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress , setIsPress] = useState(false);


  const onChangeName = (e) => {
      setName(e.target.value)
    
  }

  const onImageChange = (event) =>{
    if(event.target.files && event.target.files[0] )
    {
      setImg(URL.createObjectURL(event.target.files[0]))
      setSelectedFile(event.target.files[0]);
    }

    }


  const res = useSelector((state) => state.allCategory.category);


    const handleSubmit = async(event) =>{
      event.preventDefault();
      if (name === "" || selectedFile === null)
      {

        return toast.warning("أكمل البيانات");
      }
      const formData = new FormData();
      formData.append("name" , name);
      formData.append("image" , selectedFile);
setLoading(true);
setIsPress(true);
   await  dispatch(createCategory( formData))
    setLoading(false);

      }
    
useEffect(() =>{

  if(loading === false)
{ 
  
  setImg(avatar);
  setName("");
  setSelectedFile(null);
  setLoading(true);
  // setTimeout(() => {
    setIsPress(false);
  // }, 1000);
if (res.status ===  201) {
   toast.success("تمت الإضافه بنجاح")
} else {
  toast.error("يوجد خطأ بالبيانات"); 
}
}
},[loading])



return [img ,  name , loading, isPress ,  handleSubmit , onImageChange , onChangeName  ]
}


export default UseAddCategoryHook;