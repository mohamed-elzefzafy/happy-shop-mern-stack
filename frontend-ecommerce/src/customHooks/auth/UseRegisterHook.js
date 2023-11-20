import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../redux/actions/authAction";
import { useEffect } from "react";


const UseRegisterHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const onchangeName = (e) => {
setName(e.target.value);
  }
  const onchangeEmail = (e) => {
setEmail(e.target.value);
  }
  const onchangePhone = (e) => {
setPhone(e.target.value);
  }
  const onChangePassword = (e) => {
setPassword(e.target.value);
  }

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
      }

  const validationValue = () => {

    if (name === "") 
    {
      toast.warning("من فضلك أدخل إسم المستخدم");
      return;
    } else if (email === "") {
      toast.warning("من فضلك أدخل الإيميل");
      return;
    } else if (phone === "" ) {
      toast.warning("من فضلك أدخل رقم التليفون");
      return;
    } else if (phone.length !== 11 || !phone.startsWith("0")) {
      toast.warning("من فضلك أدخل رقم تليفون صحيح");
      return;
    }
     else if (password === "") {
      toast.warning("من فضلك أدخل كلمة المرور");
      return;
    }  else if (password.length < 6) {
      toast.warning("كلمة المرور يجب ألا تقل عن ستة حروف أو أرقام");
      return;
    }
    else if (confirmPassword === "" ) {
      toast.warning("من فضلك أدخل تأكيد كلمة المرور");
      return;
    } else if ( confirmPassword !== password) {
      toast.warning("تأكيد كلمة المرور غير مطابق");
      return;
    }
  }

  const onSubmit =async () => {
    validationValue();
    setLoading(true)
  await  dispatch(registerUser({
      name : name,
      email : email,
      password : password,
      passwordconfirm :confirmPassword,
      phone : phone
    }))
    setLoading(false);

  }

  const res = useSelector((state) => state.auth.registerUser)

useEffect(() => {
if (loading === false)
{
if (res)
{
  if(res.data.token)
  {
    localStorage.setItem("token" , res.data.token);
    localStorage.setItem("userRole" , res?.data?.data?.role);
    toast.success("تم إنشاء حساب للمستخدم بنجاح");
  setTimeout(() => {
    navigate("/login");
  }, 1500);
  } else if (res.data.errors) {
    if (res.data.errors[0].msg === "this email is already exist please login")
    {
      toast.error("هذا الإيميل مسجل لدينا بالفعل");
    } else {
      toast.error("يوجد خطأ! لم يتم إنشاء الحساب");
    }
    
  }
}

}
},[loading])



return [name ,email ,phone ,password , confirmPassword , onchangeName , onchangeEmail , onchangePhone , onChangePassword , onChangeConfirmPassword , onSubmit]
}

export default UseRegisterHook