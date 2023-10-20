import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../redux/actions/authAction";
import { useEffect } from "react";


const UseLoginKook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [ispressed, setIspressed] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
const  onchangeEmail = (e) => {
setEmail(e.target.value)
}

const  onchangePassword = (e) => {
  setPassword(e.target.value)
  }

  const validationValue = () => {

    if (email === "") {
      toast.warning("من فضلك أدخل الإيميل");
      return;
    } 
     else if (password === "") {
      toast.warning("من فضلك أدخل كلمة المرور");
      return;
    }  else if (password.length < 6) {
      toast.warning("كلمة المرور يجب ألا تقل عن ستة حروف أو أرقام");
      return;
    }

  }

const onSubmit =async () => {
  setIspressed(true);
  validationValue();

await dispatch(loginUser({
    email : email,
    password : password
}))
setLoading(false);
setIspressed(false);
}

const res = useSelector((state) => state.auth.loginUser)

useEffect(() => {
if (loading === false)
{
  if (res) 
  {
    console.log(res);
    console.log(res.data.data);
  if (res.data.token) 
  {
  
    localStorage.setItem("token" , res.data.token);
    // localStorage.setItem("user" , JSON.stringify(res.data.data));
    toast.success("تم تسجيل الدخول للمستخدم بنجاح");
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);

  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // toast.error("الإميل أو كلمة السر غير صحيحه");
  } 
  if (res.data.message === "incorrect email or password")
  {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.error("الإميل أو كلمة السر غير صحيحه");
  }
    setLoading(true)
  }
}
},[loading])


return [ email , password  , ispressed , loading ,onchangeEmail , onchangePassword , onSubmit]
}

export default UseLoginKook