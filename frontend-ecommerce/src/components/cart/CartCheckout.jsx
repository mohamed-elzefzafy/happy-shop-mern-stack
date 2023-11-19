import { Button, Col, Modal, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { applyCoupobToCart, deleteAllProductsCart } from "../../redux/actions/cartAction";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";


const CartCheckout = ({allCartProducts , totalCartPrice , totalCartAfterDiscount , couponName}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadingCoupon, setLoadingCoupon] = useState(true);
  // const [total, setTotal] = useState(totalCartAfterDiscount > 0 ? totalCartAfterDiscount : totalCartPrice);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [coupon, setCoupon] = useState("");


const onChangeCoupon = (e) => {
setCoupon(e?.target?.value);
}


  const onDeleteAllCart = async () => {
    setLoading(true);
await dispatch(deleteAllProductsCart());
setLoading(false);
handleClose();
  }

  const deleteAllRes = useSelector((state) => state.cart.deleteAllProductsCart)

  useEffect(() => {
    if (loading === false)
    {
      if (deleteAllRes && deleteAllRes.status === "allCart Deleted successfully")
      {
        toast.success("تم حذف محتويات العربه")
        console.log(deleteAllRes);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        toast.warning("العربه فارغه بالفعل");
      }
    }
  },[loading])



  const upplyCoupon = async() => {
    if (coupon === "")
    {
      toast.warning("أدخل كوبون الخصم");
      return;
    }
setLoadingCoupon(true);
await dispatch(applyCoupobToCart({
  coupon : coupon
}));
setLoadingCoupon(false);
  }

  const upplyCouponRes = useSelector((state) => state.cart.applyCouponToCart);



  useEffect(() => {
    if (loadingCoupon === false)
    {
      if (upplyCouponRes && upplyCouponRes.status === 200)
      {
        toast.success("تم تطبيق الكوبون")
        console.log(upplyCouponRes);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        toast.error("الكوبون غير صحيح")
      }
    }
  },[loadingCoupon])


  useEffect(() => {
    if (couponName !== "")
    {
      onChangeCoupon(couponName);
    }
  },[couponName]);



const onHandleCheckOut = () => {
  if (allCartProducts?.cartItems?.length >= 1)
  {
    navigate("/order/paymentmethod");
    console.log(allCartProducts);
  } else {
    toast.warning("لا يوجد بالعربه منتجات للشرء");
    console.log(allCartProducts);
  }
}



  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
    <ToastContainer/>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> <div className="font">تأكيد الحذف</div> </Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="font">هل تريد حذف جميع محتويات العربه ؟</div> </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
         تراجع 
          </Button>
          <Button  variant="danger" onClick={onDeleteAllCart}>
          حذف
          </Button>
        </Modal.Footer>
      </Modal>



    <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
            <input
            onChange={onChangeCoupon}
            value={coupon}
                className="copon-input d-inline text-center "
                // placeholder="كود الخصم"
                placeholder={couponName !== "" ? couponName : "كود الخصم"}
            />
            <button onClick={upplyCoupon} className="copon-btn d-inline mastercolor fs-12">تطبيق الكوبون</button>
        </div>
      {
        totalCartAfterDiscount > 0 ? (
          <div className="product-price d-inline w-100 my-3  border fs-6">{totalCartAfterDiscount ? totalCartAfterDiscount : 0} جنية</div>
        ) : (
          <div className="product-price d-inline w-100 my-3  border fs-6">{totalCartPrice ? totalCartPrice : 0} جنية</div>
        )
       }

        <button onClick={handleShow} className="product-cart-add w-100 px-2 mb-4 btn btn-danger" style={{fontSize : "13px"}}> مسح محتويات العربه</button>
        {/* <Link
            to="/order/paymentmethod"
            style={{ textDecoration: "none" }}
            className="product-cart-add  d-inline "> */}
          
            <button onClick={onHandleCheckOut} className="product-cart-add w-100 px-2 mastercolor product-cart-add  d-inline "> اتمام الشراء</button>
        {/* </Link> */}
    </Col>
</Row>
  )
}

export default CartCheckout