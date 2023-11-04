import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import UseGetLoggedUserData from './../../customHooks/auth/UseGetLoggedUserData';
import { createReview } from "../../redux/actions/reviewAction";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";


const RatePost = () => {
  const [userData] = UseGetLoggedUserData();
  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const {id} = useParams();

  let user;
  if(userData)
  {
    user = userData;
  }
else
{user = "";
}

const onChangeRateText = (e) => {
setRateText(e.target.value)
}

const onSubmit = async() => {
if (rateText === "")
{
  toast.warning("من فضلك أدخل التقييم");
  return;
}
if (rateValue === null)
{
  toast.warning("يجب أن يوجد تقييم");
  return;
}
if (rateValue < 1 || rateValue > 5)
{
  toast.warning("التقييم يجب أن يكون بين من 1 إلى 5");
  return;
}
setLoading(true);
await  dispatch(createReview(id , {
    title : rateText ,
    ratings :rateValue
  }))
  setLoading(false);
}

const res = useSelector((state) => state.review.createReview);


useEffect(() => {
  if (loading === false)
  {
    if (res)
    {
      console.log(res);  
        if(res.data.errors && res.data.errors[0].msg === "you have reviewed this product before")
      {
        toast.error("تم تقييم هذا المنتج من قبل");
        return;
      }

      if(res.status && res.status === 403)
      {
        toast.error("غير مسموح للأدمن بتقييم المنتجات");
        return;
      }

        
      if(res.status && res.status === 201)
      {
        toast.success("تم التقييم بنجاح");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }

  }
},[loading])
  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
        console.log(`Example 2: new value is ${newValue}`);
        setRateValue(newValue);
    }
};
  return (
    <div>
    <ToastContainer/>
    <Row className="mt-3 ">
      <Col sm="12" className="me-5  d-flex">
        <div className="rate-name  d-inline ms-3 mt-1 "> {user.name}</div>
        <ReactStars {...setting} />
      </Col>
    </Row>
    <Row className="border-bottom mx-2">
      <Col className="d-felx me-4 pb-2">
        <textarea
        onChange={onChangeRateText}
        value={rateText}
          className="input-form-area p-2 mt-3"
          rows="2"
          cols="20"
          placeholder="اكتب تعليقك...."
        />
        <div className=" d-flex justify-content-end al">
          <div onClick={onSubmit} className="product-cart-add px-3  py-2 text-center d-inline mastercolor">اضف تعليق</div>
        </div>
      </Col>
    </Row>
  </div>
  )
}

export default RatePost;