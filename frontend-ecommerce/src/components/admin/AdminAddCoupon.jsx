import { useState } from "react";
import { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addCoupon, getAllCoupons } from "../../redux/actions/copounAction";
import { useEffect } from "react";
import AdminAddCouponCard from "./AdminCouponCard";
import AdminCouponCard from "./AdminCouponCard";


const AdminAddCoupon = () => {
  const dateRef = useRef();
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState();
  const [expireDate, setExpireDate] = useState();
  const [discountAmount, setDiscountAmount] = useState();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

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
if (couponName === "")
{
  return toast.warning("يجب إدخال إسم الكوبون");
}
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
await dispatch(addCoupon({
  name : couponName ,
  expire : expireDate,
  discount : discountAmount
}))
setLoading(false);
}

const res = useSelector((state) => state.coupon.addCoupon)

useEffect(() => {
  if (loading === false)
  {
    console.log(res);
    if (res && res?.status === 201)
    {
      toast.success("تمت إضافة الكوبون بنجاح")
setTimeout(() => {
  window.location.reload();
}, 1000);
    } else if (res && res?.status === 403)
    {
      toast.warning("ليس لديك الصلاحيه لإضافة كوبون");
    } else if (res?.data?.errors[0]?.msg === "coupon name already exist")
    {
      toast.warning("إسم الكوبون مكرر");
    } 
    //  else if (res.data.errors[0].msg === "expire date is old")
    // {
    //   toast.warning("تاريخ الكوبون قديم");
    // }
     else {
      toast.error("يوجد مشكله")
    }
  }
},[loading])

  console.log(couponName);
  console.log(expireDate);
  console.log(discountAmount);

useEffect(() => {
  const getCoupons = async () => {
    await dispatch(getAllCoupons());
  }
  setLoading2(true);
  getCoupons();
  setLoading2(false);
},[loading2])

const allcouponsRes = useSelector((state) => state.coupon.getAllCoupons)
if(allcouponsRes);
console.log(allcouponsRes);

  return (
    <div>
    <Row className="justify-content-start ">
    <ToastContainer />
        <div className="admin-content-text pb-4 mt-3">اضف كوبون</div>
        <Col sm="12" md="12" lg="8">

            <input
                onChange={onChangeCouponName}
                value={couponName}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم الكوبون"
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
                onChange={onChangeDiscountAmount}
                value={discountAmount}
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="نسبة الخصم"
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={onSubmit}  className="btn-save d-inline mt-2 mastercolor"> إضافة الكوبون</button>
        </Col>
    </Row>

    <Row className="justify-content-start ">
    <ToastContainer />
        <div className="admin-content-text pb-4">اضف كوبون</div>
        <Col sm="12" md="12" lg="8">
    {
      allcouponsRes?.data ? (
        allcouponsRes?.data?.map((coupon , index) =>
        <AdminCouponCard coupon={coupon} key={index}/>
        )
      ) : <h4>لا يوجد كوبونات</h4>
    }
        </Col>
    </Row>



</div>
  )
}

export default AdminAddCoupon;