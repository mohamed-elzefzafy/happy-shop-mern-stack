import { Button, Col, Modal, Row, ToastContainer } from "react-bootstrap";
import { base_url_string } from "../../Api/constans";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { deleteOneProductFromCart, updateQuantityforProductInCart } from "../../redux/actions/cartAction";
import { BsFillTrash3Fill } from 'react-icons/bs';

const CartItem = ({product}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loadingUpdate, setLoadingUpdate] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [productQuantity, setProductQuantity] = useState(product?.quantity);



  const onChangeProductQuantity = (e) => {
 setProductQuantity(e.target.value);
  }


const onUpdateProductQuantity = async () => {
setLoadingUpdate(true);
await dispatch(updateQuantityforProductInCart(product?._id ,{
  quantity : productQuantity
}))
setLoadingUpdate(false);
}


const updateQtyProductRes = useSelector((state) => state.cart.updateQuantityInProductCart)

useEffect(() => {
  if (loadingUpdate === false)
  {
    if (updateQtyProductRes && updateQtyProductRes.status === 200)
    {
      window.location.reload();
      console.log(updateQtyProductRes);
    }
  }
} , [loadingUpdate])

  const onDeleteOneProductFromCart = async () => {
    setLoading(true);
await dispatch(deleteOneProductFromCart(product?._id));
setLoading(false);
handleClose();
  }

  const deleteOneProductRes = useSelector((state) => state.cart.deleteOneProductFromCart)

  useEffect(() => {
    if (loading === false)
    {
  
      if (deleteOneProductRes && deleteOneProductRes.status === "deleted successefully")
      {
        toast.success("تم حذف المنتج من العربه")
        console.log(deleteOneProductRes);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        toast.warning("يوجد مشكله");
      }
    }
  },[loading])



  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">

<ToastContainer/>

<Modal show={show} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title> <div className="font">تأكيد الحذف</div> </Modal.Title>
    </Modal.Header>
    <Modal.Body> <div className="font">هل تريد حذف هذا المنتج من العربه ؟</div> </Modal.Body>
    <Modal.Footer>
      <Button className="font" variant="success" onClick={handleClose}>
     تراجع 
      </Button>
      <Button  variant="danger" onClick={onDeleteOneProductFromCart}>
      حذف
      </Button>
    </Modal.Footer>
  </Modal>


    <img width="160px" height="197px" src={`${base_url_string}/products/${product?.product.imageCover}`} alt="" className="ms-5"/>
    <div className="w-100">
      <Row className="justify-content-between">
        <Col sm="12" className=" d-flex flex-row justify-content-between">
          <div className="d-inline pt-2 cat-text">{product?.product?.category?.name}</div>
          <div onClick={handleShow} className="d-flex pt-2 " style={{ cursor: "pointer" }}>
            <BsFillTrash3Fill color="#dc3545" fontSize={18}/>
            <div  className="cat-text d-inline me-2">ازاله</div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-2">
        <Col sm="12" className=" d-flex flex-row justify-content-start">
          <div className="d-inline pt-2 cat-title">
          {product?.product?.title}
          
          </div>
          <div className="d-inline pt-2 cat-rate me-2">{product?.product?.ratingsAverage}</div>
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="mt-1">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{product?.product?.brand?.name} </div>
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="mt-1 d-flex">
        {
          product?.color !== "" ? (
            <div
            className="color ms-2 border"
            style={{ backgroundColor: product?.color }}></div>
          ) : null
         }
        </Col>
      </Row>

      <Row className="justify-content-between">
        <Col sm="12" className=" d-flex flex-row justify-content-between">
          <div className=" pt-2 d-flex justify-content-start align-items-center">
            <div className="cat-text  d-inline">الكميه :</div>
            <input
            onChange={onChangeProductQuantity}
            value={productQuantity}
              className="mx-2 w-25 h-100 text-center"
              type="number"
              min={1}
              style={{ width: "40px", height: "25px" }}
            />
          <Button onClick={onUpdateProductQuantity} className="w-25 mastercolor">تطبيق</Button>
          </div>
          <div className="d-inline pt-2 barnd-text">{product?.price} جنية</div>
        </Col>
      </Row>
    </div>
  </Col>
  )
}

export default CartItem;