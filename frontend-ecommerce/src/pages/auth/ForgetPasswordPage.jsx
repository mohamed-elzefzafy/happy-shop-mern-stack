import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { userForgetPassword } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";


const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
const navigate = useNavigate();
  const onchangeEmail = (e)=> {
setEmail(e.target.value);
  }

  
  const onSubmit =async () => {
    if(email === "")
    {
      return  toast.warning("يجب إدخال إيميلك")
    }
    
  setLoading(true);
await dispatch(userForgetPassword({
  email : email
}));
setLoading(false);
  }

  

const res = useSelector((state) => state.auth.forgetPassword)


useEffect(()=> {
if (loading === false)
{
if (res.data.statue === "success")
{
  toast.success("تم إرسال كود التفعيل إلى إميلك");
  setTimeout(() => {
    navigate("/verifycode")
  }, 1500);

} else if(res.data.status === "failed") {
toast.error("يوجد خطأ الإميل غير صحيح");
}
}
},[loading])
  return (
    <Container style={{ minHeight: "680px" }}>
            <ToastContainer/>
                <Row className="py-5 d-flex justify-content-center">
                    <Col sm="12" className="d-flex flex-column">
                    <label className="mx-auto title-login mt-3"> إعادة تعين كلمة المرور </label>
                        <input
                        onChange={onchangeEmail}
                        value={email}
                            placeholder="الايميل..."
                            type="text"
                            className="user-input mt-3 text-center mx-auto"
                        />
                
                        <button onClick={onSubmit}  className="btn-login mx-auto mt-4 mastercolor">إرسال الكود</button>
                      
                  
                    </Col>
          
                </Row>
            </Container>
  )
}

export default ForgetPasswordPage