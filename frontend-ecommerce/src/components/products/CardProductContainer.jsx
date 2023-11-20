import { Container, Row } from "react-bootstrap";
import SubTitleComp from "../utilities/SubTitleComp";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductWishList } from "../../redux/actions/wishListAction";


const CardProductContainer = ({ products ,title , btntitle , pathText}) => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favProduct, setFavProduct] = useState([]);
  const res = useSelector(state => state.wishList.allUserWishList);

  useEffect(() => {
  const getData = async () => {
    setLoading(true);
    await dispatch(getProductWishList());
    setLoading(false);
  } 
  getData();
  },[])


  useEffect(() => {
try {
  if (loading === false) 
  {
    if (res?.data)
    {
      setFavProduct(res?.data?.map(item => item?._id));

    }
  }
} catch (error) {

}
  },[loading])


  return (
    <Container>
    {products ?  <SubTitleComp title={title} btntitle={btntitle} pathText={pathText}/>  : null} 
    <Row className="d-flex my-2 justify-content-start">
    {
    products? (
      products?.map((product , index) => 
      <ProductCard key={index} product={product} favproduct={favProduct}/>
      )
    ): null
    }
    </Row>
  </Container>
  )
}

export default CardProductContainer;