
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import UseRegisterHook from '../../customHooks/auth/UseRegisterHook';
import avatar from "../../images/avatar.png";
import { useState } from 'react';
const RegisterPage = () => {
const [name ,email ,phone ,password , confirmPassword ,
   onchangeName , onchangeEmail , onchangePhone , onChangePassword , 
   onChangeConfirmPassword , onSubmit] =UseRegisterHook();

   const [img, setImg] = useState(avatar);
  //  const [selectedFile, setSelectedFile] = useState(null);

  //  const onImageChange = (event) =>{
  //   if(event.target.files && event.target.files[0] )
  //   {
  //     setImg(URL.createObjectURL(event.target.files[0]))
  //     setSelectedFile(event.target.files[0]);
  //   }  }
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

              
{/* <div className='text-center'>
              <label htmlFor="upload-photo">
                              <img
                                  src={img}
                                  alt="fzx"
                                  height="100px"
                                  width="120px"
                                  style={{ cursor: "pointer" }}
                              />
                          </label>
                          <input
                            type="file"
                            name="photo"
                            // onChange={onImageChange}
                            id="upload-photo"
                        />
                      <p className='fw-bold text-secondary mt-2'>صورة الملف الشخصى</p>

          </div> */}



            <button onClick={onSubmit} className="btn-login mx-auto mt-4 mastercolor" >تسجيل الحساب</button>
            <label className="mx-auto my-4 text-secondary fw-bold">
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