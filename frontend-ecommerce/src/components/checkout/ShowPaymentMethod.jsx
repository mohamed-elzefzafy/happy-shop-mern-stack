import { useEffect } from "react";
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses, getOneAddress } from "../../redux/actions/addressAction";
import { useState } from "react";
import UseLoggedUserCartProducts from "../../customHooks/UseLoggedUserCartProducts";
import { createCashOrder, createCreditOrder } from "../../redux/actions/checkoutAction";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const ShowPaymentMethod = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [loadingSpecificAddress, setLoadingSpecificAddress] = useState(true);
  const [payMentMethod, setPayMentMethod] = useState("");
  const [loadingCashOrder, setLoadingCashOrder] = useState(true);
  const [loadingCreditOrder, setLoadingCreditOrder] = useState(true);
  const [addressDetails, setAddressDetails] = useState([]);

  const [ allCartProducts , cartLength , totalCartPriceVar , totalCartAfterDiscount , couponName , cartId]
  = UseLoggedUserCartProducts();

  const res = useSelector((state) => state.address.allAddresses)

  useEffect(() => {
    const getAdressesData = async() => {
  await dispatch(getAllAddresses());
    }
    setLoading(false);
    getAdressesData();
    setLoading(true);

  },[])





  useEffect(() => {

    setLoading(true);
    getSpecificAddress();
    setLoading(false);
  },[])




  const handleShooseAddress = (e) => {
    setAddressDetails([])
  if (e.target.value !== 0)
  {
    getSpecificAddress(e.target.value);
  }

  }


  const getSpecificAddress = async(id) => {
    setLoadingSpecificAddress(true);
    await dispatch(getOneAddress(id));
    setLoadingSpecificAddress(false);
    };


    const oneAddressRes = useSelector((state) => state.address.getOneAddress);

useEffect(() => {
  if (loadingSpecificAddress === false)
  {
    if (oneAddressRes && oneAddressRes.ststus === "success")
    {
      setAddressDetails(oneAddressRes?.data)
    } else {
      setAddressDetails([]);
    }
  }
},[loadingSpecificAddress])


const changePayMethod = (e) => {
setPayMentMethod(e.target.value);
}




const onCreateOrder = async() => {

if (cartId === "" || cartId === null || cartId === undefined)
{
  toast.warning("أدخل منتجات للعربه أولا");
    return;
}

if (payMentMethod === "")
{
  toast.warning("إختر طريقة الدفع");
} else if (payMentMethod === "cash")
{
//  if (addressDetails === "")
// {
//   toast.warning("من فضلك إختر العنوان");
//   return;
// }
setLoadingCashOrder(true)
await  dispatch(createCashOrder(cartId , {
  shippinAddress : {
  details :addressDetails?.details,
    phone : addressDetails?.phone,
    city : addressDetails?.city,
    postalCode : ""
  }
}))
setLoadingCashOrder(false);
} 

else if (payMentMethod === "visa")
{

  setLoadingCreditOrder(true)
await  dispatch(createCreditOrder(cartId , {
  shippinAddress : {
  details :addressDetails?.details,
    phone : addressDetails?.phone,
    city : addressDetails?.city,
    postalCode : ""
  }
}))
setLoadingCreditOrder(false);
}

}

const cashOrderRes = useSelector((state) => state.order.addCashOrder);



useEffect(() => {
if (loadingCashOrder === false)
{
  if (cashOrderRes && cashOrderRes.status === 201)
  {
    toast.success("تم إنشاء طلبك بنجاح");
    setTimeout(() => {
      navigate("/user/allorders");
    }, 1500);
  } else {
    toast.error("الطلب لم يكتمل");
  }
}
},[loadingCashOrder])


const creditOrderRes = useSelector((state) => state.order.addCreditOrder);


useEffect(() => {
if (loadingCreditOrder === false)
{
  if (creditOrderRes && creditOrderRes.status === "success")
  {
    toast.success("تم إنشاء طلبك بنجاح");
    setTimeout(() => {
      window.location.href = creditOrderRes?.session?.url
  
    }, 1500);
  } else {
    toast.error("الطلب لم يكتمل");
  }
}
},[loadingCreditOrder])






  return (
    <div>
  <ToastContainer/>
    <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
    <div className="user-address-card my-5 px-3">
        <Row className="d-flex justify-content-between ">
            <Col xs="12" className="my-4">
                <input
                  onChange={changePayMethod}
                    name="group" 
                     style={{cursor: 'pointer'}}
                    id="group1"
                    type="radio"
                    value="visa"
                    className="mt-2"
                />
                <label className="mx-2" for="group1"   style={{cursor: 'pointer'}}>
                    الدفع عن طريق البطاقه الائتمانية
                </label>
            </Col>
        </Row>

        <Row className="mt-3">
            <Col xs="12" className="d-flex">
                <input
                style={{cursor: 'pointer'}}
                onChange={changePayMethod}
                    name="group"
                    id="group2"
                    type="radio"
                    value="cash"
                    className="mt-2"
                />
                <label className="mx-2" for="group2"   style={{cursor: 'pointer'}}>
                    الدفع عند الاستلام
                </label>
            </Col>
        </Row>
          <Row>
            <Col xs="6">
              
        <select name="address" id="address" className="select mt-5 px-2 w-100 " 
        onChange={handleShooseAddress}>
            <option value="0"> إختر عنوان الشحن </option>
            {
          res?.data ? (    res?.data.map((address ) =>
              <option value={address?._id} key={address?._id}> {address?.alias}</option>
              )) : null
            }
            </select>
            </Col>
          </Row>
    </div>

    <Row className="mt-5">
        <Col xs="12" className="d-flex justify-content-end mt-5">
            <div className="product-price d-inline  fs-6 border">{totalCartPriceVar && totalCartPriceVar} جنية</div>
            <div onClick={onCreateOrder} className="product-cart-add px-3 pt-2 d-inline me-2 mastercolor"> اتمام الشراء</div>
        </Col>
    </Row>
</div>
  )
}

export default ShowPaymentMethod