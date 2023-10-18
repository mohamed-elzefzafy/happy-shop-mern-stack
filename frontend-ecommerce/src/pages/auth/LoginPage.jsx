import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/actions/authAction';
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
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
  if (res.data.token) 
  {
  
    localStorage.setItem("token" , res.data.token);
    toast.success("تم تسجيل الدخول للمستخدم بنجاح");
    setTimeout(() => {
      navigate("/");
    }, 1500);

  } else {
    localStorage.removeItem("token");
    // toast.error("الإميل أو كلمة السر غير صحيحه");
  } 
  if (res.data.message === "incorrect email or password")
  {
    localStorage.removeItem("token");
    toast.error("الإميل أو كلمة السر غير صحيحه");
  }
    setLoading(true)
  }
}
},[loading])

  return (
            <Container style={{ minHeight: "680px" }}>
            <ToastContainer/>
                <Row className="py-5 d-flex justify-content-center">
                    <Col sm="12" className="d-flex flex-column">
                    <label className="mx-auto title-login">تسجيل الدخول </label>
                        <input
                        onChange={onchangeEmail}
                        value={email}
                            placeholder="الايميل..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <input
                        onChange={onchangePassword}
                        value={password}
                            placeholder="كلمه السر..."
                            type="password"
                            className="user-input text-center mx-auto"
                        />
                        <button onClick={onSubmit} className="btn-login mx-auto mt-4 mastercolor">تسجيل الدخول</button>
                        <label className="mx-auto my-4">
                            ليس لديك حساب ؟{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>
                        {ispressed === true ? (loading === true ?  <Spinner  animation="border" variant="primary" /> : null) : null}
                    </Col>
                    <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            الدخول ادمن
                        </span>
                    </Link>

                    <Link to="/user/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                            الدخول مستخدم
                        </span>
                    </Link>
                </label>
                </Row>
            </Container>
  )
}

export default LoginPage