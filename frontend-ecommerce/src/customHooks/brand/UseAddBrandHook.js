import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import avatar from "../../images/avatar.png";
import { createBrand } from './../../redux/actions/brandAction';


const UseAddBrandHook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress , setIsPress] = useState(false);


  const onChangeName = (e) => {
      setName(e.target.value)
      console.log(name);
  }

  const onImageChange = (event) =>{
    if(event.target.files && event.target.files[0] )
    {
      setImg(URL.createObjectURL(event.target.files[0]))
      setSelectedFile(event.target.files[0]);
    }
    console.log(img);
    }


  const res = useSelector((state) => state.allBrand.brand);

console.log(res);

    const handleSubmit = async(event) =>{
      event.preventDefault();
      if (name === "" || selectedFile === null)
      {

        console.log("أكمل البيانات");
        return toast.warning("أكمل البيانات");
      }
      const formData = new FormData();
      formData.append("name" , name);
      formData.append("image" , selectedFile);
setLoading(true);
setIsPress(true);
   await  dispatch(createBrand( formData))
    setLoading(false);

      }
    
useEffect(() =>{

  if(loading === false)
{ 
  
  setImg(avatar);
  setName("");
  setSelectedFile(null);
  console.log("finished");
  setLoading(true);

    setIsPress(false);

if (res.status ===  201) {
   toast.success("تمت الإضافه بنجاح")
} else {
  toast.error("يوجد خطأ بالبيانات"); 
}
}
},[loading])



return [img ,  name , loading, isPress ,  handleSubmit , onImageChange , onChangeName  ]
}

export default UseAddBrandHook