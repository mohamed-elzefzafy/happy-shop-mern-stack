import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addAddress } from "../../redux/actions/addressAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const UserAddAdress = () => {
  const [addressName, setAddressName] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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

const onSubmit =async () => {
  if (addressName === "")
{
  return toast.warning("يجب إدخال العنوان");
}
  if (addressDetail === "")
{
  return toast.warning("يجب إدخال تفاصيل العنوان");
}
  if (phoneNumber === "")
{
  return toast.warning("يجب إدخال  رقم التليفون");
}
  if (addressCity === "")
{
  return toast.warning("يجب إدخال إسم المدينه");
}
  setLoading(true);
await dispatch(addAddress({
   alias  : addressName ,
  details  : addressDetail , 
  phone  : phoneNumber ,
   city  : addressCity ,
}))
  setLoading(false);
}

const addAddressRes = useSelector((state) => state.address.addAddress);

if (addAddressRes)
console.log(addAddress);

useEffect(() => {
  if (loading === false)
  {
    if (addAddressRes && addAddressRes.status === 201)
    {
      // setAddressName("");
      // setAddressDetail("");
      // setPhoneNumber("");
      // setAddressCity("");

        toast.success("تم إضافة عنوان")
        console.log(addAddressRes);
        setTimeout(() => {
          navigate("/user/addresses")
        }, 1500);
}}
},[loading])

  return (
    <div>
    <Row className="justify-content-start ">
   <ToastContainer/>
        <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
        <Col sm="8">
            <input
            onChange={onchangeAddressName}
            value={addressName}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            />
            <textarea
            onChange={onchangeAddressDetail}
            value={addressDetail}
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                placeholder="العنوان بالتفصيل"
            />
            <input
            onChange={onchangePhoneNumber}
            value={phoneNumber}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="رقم الهاتف"
            />
            <input
            onChange={onchangeAddressCity}
            value={addressCity}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="المدينه "
            />
        
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={onSubmit} className="btn-save d-inline mt-2 mastercolor">اضافة عنوان</button>
        </Col>
    </Row>
</div>
  )
}

export default UserAddAdress;