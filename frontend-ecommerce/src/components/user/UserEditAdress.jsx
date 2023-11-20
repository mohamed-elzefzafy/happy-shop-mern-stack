import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOneAddress, updateAddress } from "../../redux/actions/addressAction";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const UserEditAdress = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate  = useNavigate(); 
  const [addressName, setAddressName] = useState("");
const [addressDetail, setAddressDetail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [addressCity, setAddressCity] = useState("");

  const [loadingGet, setLoadingGet] = useState(true);

  useEffect(() => {
    const getSpecificAddress = async() => {
    await dispatch(getOneAddress(id));
    };
    setLoadingGet(true);
    getSpecificAddress();
    setLoadingGet(false);
  },[])

  const oneAddressRes = useSelector((state) => state.address.getOneAddress);

  useEffect(() => {
if (loadingGet === false) 
{
  if (oneAddressRes && oneAddressRes?.ststus === "success")
  {
    setAddressName(oneAddressRes?.data?.alias);
    setAddressDetail(oneAddressRes?.data?.details);
    setPhoneNumber(oneAddressRes?.data?.phone);
    setAddressCity(oneAddressRes?.data?.city);
  }
}
  },[loadingGet])




  const [loading, setLoading] = useState(true);

  const onSubmit = async()=> {
    setLoading(true);
    await dispatch(updateAddress(id , {
      alias: addressName,
      details: addressDetail,
      phone: phoneNumber,
      city: addressCity,
    }))
    setLoading(false);
  } 

  const updateRes = useSelector((state) => state.address.updateAddress);


  let updatedData = [];
  if(updateRes.data)
  {
  updatedData =  updateRes?.data?.data
  } else {
    updatedData = [];
  }
  

  useEffect(() => {
if (loading === false)
{
  if(updateRes?.status === 201)
  {
    toast.success("تم التعديل بنجاح")
  
    // setAddressName("");
    // setAddressDetail("");
    // setPhoneNumber("");
    // setAddressCity("");

    setTimeout(() => {
      navigate("/user/addresses");
    }, 1500);
  } else {
    toast.error("لم يتم التعديل ! يوجد مشكله")
  }
}

  },[loading])










  const onchangeAddressName = (e) => {
    setAddressName(e.target.value);
    }
    const onchangeAddressDetail = (e) => {
    setAddressDetail(e.target.value);
    }
    const onchangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    }
    const onchangeAddressCity = (e) => {
    setAddressCity(e.target.value);
    }
    
    



  return (
    <div>
    <Row className="justify-content-start ">
    <ToastContainer/>
        <div className="admin-content-text pb-2">تعديل العنوان </div>
        <Col sm="8">
            <input
                onChange={onchangeAddressName}
                type="text"
                className="input-form d-block mt-3 px-3"
                value={addressName}
                placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            />
            <textarea
            onChange={onchangeAddressDetail}
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                value={addressDetail}
                placeholder="العنوان بالتفصيل"
            />
            <input
            onChange={onchangePhoneNumber}
                type="text"
                value={phoneNumber}
                className="input-form d-block mt-3 px-3"
                placeholder="رقم الهاتف"
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={onSubmit} className="btn-save d-inline mt-2 mastercolor">حفظ تعديل العنوان</button>
        </Col>
    </Row>
</div>
  )
}

export default UserEditAdress;