import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify"
import { useEffect } from "react";
import { verifyRestCode } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";


const VerifyPasswordPage = () => {
const [verifyCode, setVerifyCode] = useState("");
const [loading, setLoading] = useState(true);

const dispatch = useDispatch();
const navigate = useNavigate();
const onchangeVerifyCode = (e) => {
setVerifyCode(e.target.value);
}
  const onSubmit = async () => {
if(verifyCode === "")
{
  return toast.warning("أدخل الكود");
}
setLoading(true);
await dispatch(verifyRestCode({
  resetCode :  verifyCode 
}))
setLoading(false);
  }

  const res = useSelector((state) => state.auth.verifyCode)

  useEffect(() => {
if (loading === false)
{
  if (res) {
    if(res.data.status === "success") {
      toast.success("الكود صحيح");
      setTimeout(() => {
        navigate("/resetpassword")
      }, 1500);
    } else if (res.data.status === "Error")
    {
      toast.error("الكود خاطىء أو منتهى الصلاحيه ")
    }
  }
}
  },[loading])
  return (
    <Container style={{ minHeight: "680px" }}>
    <ToastContainer/>
        <Row className="py-5 d-flex justify-content-center">
            <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto title-login mt-3">أدخل الكود المرسل بالإيميل</label>
                <input
                onChange={onchangeVerifyCode}
                value={verifyCode}
                    placeholder="الكود..."
                    type="text"
                    className="user-input mt-3 text-center mx-auto"
                />
        
                <button onClick={onSubmit}  className="btn-login mx-auto mt-4 mastercolor"> تأكيد</button>
              
          
            </Col>
  
        </Row>
    </Container>
  )
}

export default VerifyPasswordPage