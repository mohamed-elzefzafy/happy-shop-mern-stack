import { Col, Container, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import RateItem from "../../components/rating/RateItem";
import RatePost from "../../components/rating/RatePost";
import Pagination from "../../components/utilities/Pagination";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allReviewsForProduct, productReviews } from "../../redux/actions/reviewAction";
import { useEffect } from "react";

const RateContainer = ({rateAvg , rateQty}) => {
  const {id} = useParams();
  const dispatch = useDispatch();
  // console.log(id);
  const getProductReviews = async() => {
  await dispatch(allReviewsForProduct(id , 1 , 5))
  }

  const res = useSelector((state) => state.review.productReviews);
  if (res)
  console.log(res);

  useEffect(() => {
    getProductReviews();
  },[res])


  const onPress = async (page) => {
    await dispatch(allReviewsForProduct(id , page , 5))
  }
  return (
    <Container className='rate-container'>
    <Row>
        <Col className="d-flex">
            <div className="sub-tile d-inline p-1 ">التقيمات</div>
            <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
            <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg ? rateAvg : 0} </div>
            <div className="rate-count d-inline p-1 pt-2">({rateQty} تقييم)</div>
        </Col>
    </Row>
    <RatePost/>
    {
      res.data?.map((rate , index) => 
      <RateItem rate={rate} key={index}/>
      )
    }

{res?.paginationResult?.numberOfPage > 1 &&
  <Pagination pageCount={res?.paginationResult ? res?.paginationResult?.numberOfPage: 0} onPress={onPress} />
}
    </Container>
  )
}

export default RateContainer;