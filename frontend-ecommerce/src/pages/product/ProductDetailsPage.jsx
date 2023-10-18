import { Container } from "react-bootstrap";
import CategoryHeader from "../../components/category/CategoryHeader";
import ProductDetails from "../../components/products/ProductDetails";
import RateContainer from './../../components/rating/RateContainer';
import CardProductContainer from "../../components/products/CardProductContainer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductLike } from "../../redux/actions/productAction";
import UseProductDetailHook from "../../customHooks/product/UseProductDetailHook";


const ProductDetailsPage = () => {
  const {id} = useParams();
const [item , images , brand , likeProductArr] = UseProductDetailHook(id);

  return (
    <div style={{minHeight : "670px"}}>
    <CategoryHeader/>
  <Container>
  <ProductDetails />
  <RateContainer/>
<CardProductContainer products={likeProductArr?.slice(0,4)} title="منتجات قد تعجبك" btntitle="" pathText=""/>
  </Container>
  
    </div>
  )
}

export default ProductDetailsPage;