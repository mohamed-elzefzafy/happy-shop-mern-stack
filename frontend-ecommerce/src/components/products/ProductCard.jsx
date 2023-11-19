import { Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import favoff from "../../images/download2.png";
import favon from "../../images/download.png";
import rate from "../../images/rate.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addToWishList, removeFromWishList } from "../../redux/actions/wishListAction";
import { ToastContainer, toast } from "react-toastify";


const ProductCard = ({product , favproduct}) => {
  const [favImage, setFavImage] = useState(favoff);
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);
let fav = favproduct?.some(item => item === product._id);
const [isFav, setIsFav] = useState(fav);
const dispatch = useDispatch();

useEffect(() => {
  setIsFav(favproduct?.some(item => item === product._id))
},[favproduct])


  const handleFav = () => {
    if (isFav)
     {
      removeFromWishListFun();
     } else {
      addToWishListfun();
     }
 }

 useEffect(() => {
if (isFav === true)
{
  setFavImage(favon);
} else {

  setFavImage(favoff);
}
 },[isFav])

 const resAdd = useSelector((state) => state.wishList.addWishList);
 const resRemove = useSelector((state) => state.wishList.removeWishList);


const addToWishListfun =async () => {
  setLoadingAdd(true);
await dispatch(addToWishList({
  productId : product?._id
}))
setLoadingAdd(false);
setIsFav(true);
setFavImage(favon);
  }

  const removeFromWishListFun =async () => {
    setLoadingRemove(true);
    await dispatch(removeFromWishList(product?._id));
    setLoadingRemove(false);
    setIsFav(false);
setFavImage(favoff);
      }
  
useEffect(() => {
  if(loadingAdd === false)
  {
    if (resAdd && resAdd.status === 200)
{
  toast.success("تمت إضافة المنتج إلى المفضله");

} else if (resAdd?.status === 500 || resAdd?.status === 401 || resAdd?.status === "error")
{
  toast.error("يجب تسجيل الدخول أولا");
}
  } 
},[loadingAdd]);


useEffect(() => {
  if(loadingRemove === false)
  {
    if (resRemove && resRemove.status === "success")
    {
      toast.success("تمت حذف المنتج من المفضله")
    
    } else if (  resRemove?.status === 500 || resRemove?.status === 401 || resRemove?.status === "error")
    {
      toast.error("يجب تسجيل الدخول أولا");
    }
  }
},[loadingRemove]);

  return (
    <Col xs="12" sm="12" md="6" lg="3" className="d-flex justify-content-center">
<ToastContainer/>
            <Card
                className="my-2 d-flex jud"
                style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                <Link to={`/products/${product?._id}`} style={{ textDecoration: 'none' }}>
                    <Card.Img style={{padding : "20px", height: "170px", width: "100%" , objectFit: "contain" }} src={product?.imageCover} />
                </Link>
                <div className="d-flex justify-content-end mx-2">
                    <img
                    onClick={handleFav}
                        src={favImage}
                        alt=""
                        className="text-center"
                        style={{
                          cursor : "pointer",
                            height: "24px",
                            width: "26px",
                        }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">
                          {product?.title}
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex">
                         <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">{product?.ratingsAverage || 0}</div>
                            </div>
                            <div className="d-flex">
                                <div className="card-price">  
                                {/* {product?.priceAfterDiscount < product?.price ? (

                         <div> <span style={{textDecoration : "line-through"}}>{product?.price}</span>  {" "}  {product?.priceAfterDiscount}    </div>
                                ) :  */}
                                {product?.price}
                                {/* } */}
                                  </div>
                                <div className="card-currency mx-1">جنيه</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
  )
}

export default ProductCard;