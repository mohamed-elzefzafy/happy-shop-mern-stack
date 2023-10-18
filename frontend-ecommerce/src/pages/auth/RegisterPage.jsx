import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { registerUser } from '../../redux/actions/authAction';

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const onchangeName = (e) => {
setName(e.target.value);
console.log(name);
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
    } else if (confirmPassword === "" ) {
      toast.warning("من فضلك أدخل تأكيد كلمة المرور");
      return;
    } else if ( confirmPassword !== password) {
      toast.warning("كلمة المرور غير مطابقه");
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

  if (res)
  console.log(res);
  console.log(res.data);
// 

useEffect(() => {
if (loading === false)
{
if (res)
{
  if(res.data.token)
  {
    localStorage.setItem("token" , res.data.token);
    toast.success("تم إنشاء حساب للمستخدم بنجاح");
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



// if(user.status === 201)
// {
//   toast.success("تم إنشاء حساب للمستخدم بنجاح")
// } else {
//   toast.error("يوجد خطأ! لم يتم إنشاء الحساب")
// }
  return (
      <Container style={{ minHeight: "680px" }}>
      <ToastContainer/>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل حساب جديد</label>
            <input
            value={name}
            onChange={onchangeName}
              placeholder="اسم المستخدم..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
            value={email}
              placeholder="الايميل..."
              onChange={onchangeEmail}
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
                <input
                value={phone}
              placeholder="التليفون..."
              onChange={onchangePhone}
              type="phone"
              className="user-input mb-3 text-center mx-auto"
            />
            <input
            value={password}
              placeholder="كلمه السر..."
              onChange={onChangePassword}
              type="password"
              className="user-input text-center mx-auto"
            />
                <input
                value={confirmPassword}
              placeholder="تأكيد كلمة السر..."
              onChange={onChangeConfirmPassword}
              type="password"
              className="user-input text-center my-3 mx-auto"
            />
            <button onClick={onSubmit} className="btn-login mx-auto mt-4 mastercolor" >تسجيل الحساب</button>
            <label className="mx-auto my-4">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>

  )
}

export default RegisterPage;