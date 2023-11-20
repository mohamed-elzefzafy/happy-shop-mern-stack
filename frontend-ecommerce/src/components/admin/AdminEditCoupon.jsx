import { useState } from "react";
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { getOneCoupon, updateCoupon } from "../../redux/actions/copounAction";
import { useEffect } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";


const AdminEditCoupon = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dateRef = useRef();
  const [couponName, setCouponName] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [loadingOneCoupon, setLoadingOneCoupon] = useState(true);
  const [loading, setLoading] = useState(true);

  
try {
  useEffect(() => {
    const getSpecificCoupon =async () => {
  await dispatch(getOneCoupon(id));
    }
    setLoadingOneCoupon(true);
    getSpecificCoupon();
    setLoadingOneCoupon(false);
  },[])
  
} catch (error) {
  
}
const oneCouponRes = useSelector((state) => state.coupon.getOneCoupon);



const dateString = oneCouponRes?.data?.expire;
const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

useEffect(() => {
if (loadingOneCoupon === false)
{
  if (oneCouponRes.data)
  {
    setCouponName(oneCouponRes?.data?.name);
    setExpireDate(formatDate(dateString));
    setDiscountAmount(oneCouponRes?.data?.discount);

  }

}
},[loadingOneCoupon])










  const onChangeCouponName = (e) => {
    setCouponName(e.target.value);
      }
      const onChangeExpireDate = (e) => {
    setExpireDate(e.target.value);
      }
      const onChangeDiscountAmount = (e) => {
    setDiscountAmount(e.target.value);
      }
    
    const onSubmit = async () => {
//       if (couponName === "")
// {
//   return toast.warning("يجب إدخال إسم الكوبون");
// }
// if (couponName === couponName.toUpperCase())
// {
//   return toast.warning("إسم الكوبون يجب أن يكون بحروف كبيره");
// }
if (expireDate === "")
{
  return toast.warning("يجب إدخال تاريخ إنتهاء الكوبون");
}
// if (typeof(expireDate) !== Date)
// {
//   return toast.warning("يرجى إدخال تاريخ صحيح");
// }
if (discountAmount < 1)
{
  return toast.warning("يجب إدخال نسبة خصم الكوبون");
}
if (typeof(discountAmount) === Number)
{
  return toast.warning("أدخل نسبة خصم صحيحه");
}
    setLoading(true);
    await dispatch(updateCoupon(id , {
      name : couponName ,
      expire : expireDate,
      discount : discountAmount
  }))
    setLoading(false);
    }

    const updateCouponRes = useSelector((state) => state.coupon.updateCoupon);

    useEffect(() => {
    if (loading === false)
    {
      if (updateCouponRes)
      {
        if (updateCouponRes && updateCouponRes?.status === 201)
      {
        toast.success("تم تعديل الكوبون")
        // setCouponName("");
        // setExpireDate("");
        // setDiscountAmount(""); 
      setTimeout(() => {
        navigate("/admin/addcoupon")
      }, 1000);
      }
      } else {
        toast.error("يوجد مشكله")
      }
    }
    },[loading])

  return (
    <div>
    <Row className="justify-content-start ">
    <ToastContainer/>
        <div className="admin-content-text pb-2">تعديل الكوبون </div>
        <Col sm="8">
            <input
                type="text"
                onChange={onChangeCouponName}
                className="input-form d-block mt-3 px-3"
                value={couponName}
                placeholder="إسم الكوبون"
            />
      
  <input
                onChange={onChangeExpireDate}
                value={expireDate}
                type="text"
                ref={dateRef}
                className="input-form d-block mt-3 px-3"
                placeholder=" تاريخ الإنتهاء"
                onFocus={() => dateRef.current.type = "date"}
                onBlur={() => dateRef.current.type = "text"}
            />

            <input
                type="text"
                onChange={onChangeDiscountAmount}
                value={discountAmount}
                className="input-form d-block mt-3 px-3"
                placeholder="قيمة خصم الكوبون"
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={onSubmit} className="btn-save d-inline mt-2 mastercolor">حفظ تعديل الكوبون</button>
        </Col>
    </Row>
</div>
  )
}

export default AdminEditCoupon;