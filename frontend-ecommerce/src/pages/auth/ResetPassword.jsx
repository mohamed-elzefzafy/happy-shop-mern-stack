import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { restUserPassword } from "../../redux/actions/authAction";


const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
const navigate = useNavigate();

const onChangeEmail = (e) => {
setEmail(e.target.value);
}
const onChangePassword = (e) => {
setPassword(e.target.value);
}
// const onChangeConfirmPassword = (e) => {
// setConfirmPassword(e.target.value);
// }

const validationValue = () => {
  if(email === "")
  {
    toast.warning("من فضلك أدخل الإيميل");
    return;
  }
  if(password === "")
  {
    toast.warning("من فضلك أدخل كلمة المرور");
    return;
  }
  if(password.length <  6)
  {
    toast.warning("كلمة المرور يجب ألا تقل عن ستة حروف أو أرقام");
    return;
  }
  // if(confirmPassword === "")
  // {
  //   toast.warning("من فضلك أدخل تأكيد كلمة المرور");
  //   return;
  
  // }
  // if(password !== confirmPassword)
  // {
  //   toast.warning("تأكيد كلمة المرور غير مطابق");
  //   return;
  // }
}
const onSubmit = async() => {
validationValue();
setLoading(true);

await dispatch(restUserPassword({
  email : email,
  newpassword : password
}))
setLoading(false);
}

const res = useSelector((state) => state.auth.verifyPassword);

useEffect(() => {
  if (loading === false)
  {
  if (res)
  {
    if (res.data.status === "success")
    {
      toast.success("تم تعيين كلمة السر بنجاح");
      // localStorage.setItem("token" , res?.data?.token)
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }

  }
  }
})


  return (
    <Container style={{ minHeight: "680px" }}>
    <ToastContainer/>
        <Row className="py-5 d-flex justify-content-center">
            <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto title-login">تأكيد كلمة السر</label>
                <input
                onChange={onChangeEmail}
                value={email}
                    placeholder="الايميل..."
                    type="text"
                    className="user-input my-3 text-center mx-auto"
                />
                <input
                onChange={onChangePassword}
                value={password}
                    placeholder="كلمه السر الجديده..."
                    type="password"
                    className="user-input text-center mx-auto"
                />

{/* <input
                onChange={onChangeConfirmPassword}
                value={confirmPassword}
                    placeholder="تأكيد كلمة السر الجديده..."
                    type="password"
                    className="user-input text-center mx-auto mt-3"
                />
       */}
      
                <button onClick={onSubmit} className="btn-login mx-auto mt-3 mastercolor">حفظ التغيرات</button>
                
          
              
            </Col>

        </Row>
    </Container>
  )
}

export default ResetPassword