import { Button, Col, Modal, Row } from "react-bootstrap";
import editicon from "../../images/edit.png";
import UseGetLoggedUserData from "../../customHooks/auth/UseGetLoggedUserData";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLoggedUserData, updateLoggedUserPassword } from "../../redux/actions/authAction";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const UserProfile = () => {
  const [userData] = UseGetLoggedUserData();
  const dispatch = useDispatch();
const navigate = useNavigate();
  //change user data  
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  let user;
  if (userData)
  {
    user = userData;
  } else {
    user = ""
  }


  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
useEffect(() => {

  setName(user?.name);
  setEmail(user?.email);
  setPhone(user?.phone);

},[userData])









  const handleClose = () => {
    setShow(false);
  }

  const handleShowModal = () => {
    setShow(true);
  }

const  onchangeName = (e) => {
setName(e.target.value);
  }
const  onchangeEmail = (e) => {
setEmail(e.target.value);
  }
const  onchangePhone = (e) => {
setPhone(e.target.value);
  }

  const handleUpdateData =async () => {
    if(name === "")
    {
      toast.warning("أدخل إسم المستخدم")
      return 
    }
    if(email === "")
    {
      toast.warning("أدخل البريد الإلكترونى")
      return 
    }
    if(phone === "")
    {
      toast.warning(" أدخل رقم الهاتف  ")
      return 
    }
setLoading(true);
await dispatch(updateLoggedUserData({
  name : name,
  email : email,
  phone : phone
}));
setLoading(false);
 handleClose();
  }

  const updatedDataRes = useSelector((state) => state.auth.updateLoggedUserData);

  useEffect(() => {
    if (loading === false) 
    {
      if (updatedDataRes && updatedDataRes.status === 200)
      {
        toast.success(" تم التعديل")
    
        setTimeout(() => {
          window.location.reload();
        }, 1000);
  
      } else {
        toast.error("يوجد مشكله بالتعديل");
      }
    }
  },[loading])


  
    //change user password  

  const [passWord, setPassWord] = useState("");
  const [currentPassWord, setCurrentPassWord] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const [loadingPass, setLoadingPass] = useState(true);


const  onchangePassord = (e) => {
setPassWord(e.target.value);
  }
const  onchangeCurrentPassord  = (e) => {
setCurrentPassWord(e.target.value);
  }
const  onchangeConfirmPassord = (e) => {
setConfirmPassWord(e.target.value);
  }

const handleUpdatePassword = async() => {
  if(passWord === "")
  {
    toast.warning("أدخل كلمة المرور الجديده")
    return 
  }
  if(confirmPassWord === "")
  {
    toast.warning("أدخل تأكيد كلمة المرور ")
    return 
  }
  if(currentPassWord === "")
  {
    toast.warning("أدخل كلمة المرور القديمه")
    return 
  }
  if(passWord !==  confirmPassWord)
  {
    toast.warning("كلمة المرور غير مطابقه")
    return 
  }
  setLoadingPass(true);
await  dispatch(updateLoggedUserPassword({
    password : passWord,
    currentPassword :currentPassWord,
    passwordconfirm : confirmPassWord
}))
  setLoadingPass(false);

}

const updatedPassRes = useSelector((state) => state.auth.updateLoggedUserPassword);

useEffect(() => {
if (loadingPass === false)
{
  if (updatedPassRes && updatedPassRes.status === 200)
  {
    toast.success("تم تغيير الرقم السرى ")
  
    localStorage.setItem("token" , updatedPassRes.data.token);
    setPassWord("");
    setCurrentPassWord("");
    setConfirmPassWord("");
  } else {
    toast.error("يوجد مشكله لم يتم تغيير الرقم السرى")
  }
}
},[loadingPass])

  return (
    <div>
    <ToastContainer />
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> <div className="font fs-5">تعديل البيانات</div> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
<div className="d-flex flex-row align-items-center justify-content-center">
<label >الإسم: </label>
    <input 
    onChange={onchangeName}
    className="border-0 font w-100 form-control shadow-none"
    type="text"
    value={name}
     />
</div>
<div className="d-flex flex-row align-items-center justify-content-center">
<label > الإميل: </label>
    <input 
  
    onChange={onchangeEmail}
    className="border-0 font w-100 form-control shadow-none"
    type="text"
    value={email}
     />
</div>

<div className="d-flex flex-row align-items-center justify-content-center">
<label > الهاتف: </label>
    <input 

    onChange={onchangePhone}
    className="border-0 font w-100 form-control shadow-none"
    type="text"
    value={phone}
     />
</div>
         </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
         تراجع 
          </Button>
          <Button  variant="danger" onClick={handleUpdateData}>
          تعديل
          </Button>
        </Modal.Footer>
      </Modal>



    <div className="admin-content-text">الصفحه الشخصية</div>
    <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
            <Col xs="6" className="d-flex">
                <div className="p-2">الاسم:</div>
                <div className="p-1 item-delete-edit">{user?.name}</div>
            </Col>
            <Col xs="6" className="d-flex justify-content-end">
                <div onClick={handleShowModal} className="d-flex mx-2">
                    <img
                        alt=""
                        className="ms-1 mt-2"
                        src={editicon}
                        height="17px"
                        width="15px"
                    />
                    <p  className="item-delete-edit"> تعديل</p>
                </div>
            </Col>
        </Row>

        <Row className="">
            <Col xs="12" className="d-flex">
                <div className="p-2">رقم الهاتف:</div>
                <div className="p-1 item-delete-edit">{user?.phone}</div>
            </Col>
        </Row>
        <Row className="">
            <Col xs="12" className="d-flex">
                <div className="p-2">الايميل:</div>
                <div className="p-1 item-delete-edit">{user?.email}</div>
            </Col>
        </Row>
        <Row className="mt-5">
            <Col xs="10" sm="8" md="6" className="">
                <div className="admin-content-text">تغير كملة المرور</div>
                <input
                    onChange={onchangeCurrentPassord}
                    value={currentPassWord}
                    type="password"
                    className="input-form d-block mt-1 px-3"
                    placeholder="ادخل كلمة المرور القديمة"
                />
                <input
                onChange={onchangePassord}
                    value={passWord}
                    type="password"
                    className="input-form d-block mt-3 px-3"
                    placeholder="ادخل كلمة المرور الجديده"
                />

               <input
               onChange={onchangeConfirmPassord}
                    value={confirmPassWord}
                    type="password"
                    className="input-form d-block mt-3 px-3"
                    placeholder="تأكيد كلمة المرور الجديده"
                />
            </Col>
        </Row>
        <Row>
        <div  className="d-flex mt-3">
                    <img
                        alt=""
                        className="ms-1 mt-2"
                        src={user?.profileImage}
                        height="40px"
                        width="40px"
                    />
                    <p className="item-delete-edit mt-2"> تعديل الصوره الشخصيه</p>
                </div>
        </Row>

        <Row>
            <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                <button onClick={handleUpdatePassword} className="btn-save d-inline mt-2 mastercolor ">حفظ كلمة السر</button>
            </Col>
        </Row>
    </div>
</div>
  )
}

export default UserProfile;