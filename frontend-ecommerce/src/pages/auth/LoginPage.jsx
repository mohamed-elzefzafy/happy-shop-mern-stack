import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import UseLoginHook from '../../customHooks/auth/UseLoginHook';

const LoginPage = () => {

  const [ email , password  , ispressed , loading ,onchangeEmail , onchangePassword , onSubmit] = UseLoginHook();

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
                        <Link to={"/forgetpassword"} className='text-decoration-none text-secondary fw-bold mt-3'>
                        <p className="text-center">هل نسيت كلمة المرور ؟</p>
                        </Link>
                        <button onClick={onSubmit} className="btn-login mx-auto mt-2 mastercolor">تسجيل الدخول</button>
                        
                        <label className="mx-auto my-4  text-secondary fw-bold">
                            ليس لديك حساب ؟{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>
                        {ispressed === true ? (loading === true ?  <Spinner  animation="border" variant="primary" /> : null) : null}
                    </Col>
  
  
                </Row>
            </Container>
  )
}

export default LoginPage