import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UseProductDetailHook from "../../customHooks/product/UseProductDetailHook";
import rateIMG from "../../images/rate.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/actions/cartAction";
import { useEffect } from "react";
import { toast } from "react-toastify";


const ProductText = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [item , images , brand] = UseProductDetailHook(id);
const [colora, setColora] = useState("");
const [indexa, setIndexa] = useState();
const [loading, setLoading] = useState(true);


const onColorClick = (index , color) => {
setIndexa(index);
setColora(color);
}


const addToCart =async () => {
  if (item?.colors.length > 0)
  {
    if (colora === "")
    {
      toast.warning("يجب إدخال لون المنتج");
      return;
    }
  }
  console.log(item);
  setLoading(true);
await dispatch(addProductToCart({
  productId : id,
  color : colora
}));
setLoading(false);
}

const addCartRes = useSelector((state) => state.cart.addToCart);

useEffect(() => {
if (loading === false) 
{
if (addCartRes && addCartRes.status === 200)
{
  toast.success("تم إضافة المنتج للعربه")
  setTimeout(() => {
    window.location.reload();
  }, 1500);
  console.log(addCartRes);
} else {
  toast.error("لم يتم إضافة المنتج للعربه");
  console.log(addCartRes);
}
}
},[loading])


  return (
    <div>
    <Row className="mt-2">
      <div className="cat-text">{item.category?.name} :</div>
    </Row>
    <Row>
      <Col md="8">
        <div className="cat-text d-inline fs-5">
      {item?.title}
  
        </div>
      <div>
      <div className="cat-rate d-inline ">{item?.ratingsAverage} </div>
        <img className="" src={rateIMG} alt="" height="16px" width="16px" />
      </div>
      </Col>
  
    </Row>
    <Row>
      <Col md="8" className="mt-2">
        <div className="cat-text d-inline">الماركة :</div>
        <div className="barnd-text d-inline mx-1">{item?.brand?.name} </div>
      </Col>
    </Row>
    <Row>
      <Col md="8" className="mt-1 d-flex">
{
  item.colors?.length > 0 ? <div className="cat-text d-inline px-1">الألوان المتاحه :</div> : null
}
      
    
{
item.colors? (
  item?.colors.map((color , index) =>  
      <div
      onClick={() => onColorClick(index , color)}
          className="color ms-2  " key={index}
          style={{ backgroundColor: color , scale : index === indexa ? "1.2" : "none" ,  }}>
          </div>
  )
): null
}

<div className="cat-text d-block">الكميه  :  {item?.quantity}</div>
      </Col>
    </Row>

    <Row className="mt-4">
      <div className="cat-text">المواصفات :</div>
    </Row>
    <Row className="mt-2">
      <Col md="10">
        <div className="product-description d-inline">
                  {item?.description}
        </div>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col md="12">
        <div className="product-price d-inline px-3 py-3 border">{item?.price} جنية</div>
        <div onClick={addToCart} className="product-cart-add px-3 py-3 d-inline mx-3 mastercolor">اضف للعربة</div>
      </Col>
    </Row>
  </div>
  )
}

export default ProductText;