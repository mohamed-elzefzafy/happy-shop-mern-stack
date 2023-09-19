import { Container } from "react-bootstrap";
import CategoryHeader from "../../components/category/CategoryHeader";
import ProductDetails from "../../components/products/ProductDetails";
import RateContainer from './../../components/rating/RateContainer';
import CardProductContainer from "../../components/products/CardProductContainer";
// import CardProductContainer from "../../components/products/CardProductContainer";



const ProductDetailsPage = () => {
  return (
    <div style={{minHeight : "670px"}}>
    <CategoryHeader/>
  <Container>
  <ProductDetails/>
  <RateContainer/>
<CardProductContainer title="منتجات قد تعجبك" btntitle="" pathText=""/>
  </Container>
  
    </div>
  )
}

export default ProductDetailsPage;