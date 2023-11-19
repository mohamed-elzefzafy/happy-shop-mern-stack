import { Container } from "react-bootstrap";
import CategoryHeader from "../../components/category/CategoryHeader";
import ProductDetails from "../../components/products/ProductDetails";
import RateContainer from './../../components/rating/RateContainer';
import CardProductContainer from "../../components/products/CardProductContainer";
import { useParams } from "react-router-dom";
import UseProductDetailHook from "../../customHooks/product/UseProductDetailHook";


const ProductDetailsPage = () => {
  const {id} = useParams();
const [item , images , brand , likeProductArr] = UseProductDetailHook(id);

console.log(item);

let rateAvg , rateQty;
if (item) {
  rateAvg = item.ratingsAverage;
  rateQty = item.ratingsQuantity;
} else {
  rateAvg = 0;
  rateQty = 0;
}

  return (
    <div style={{minHeight : "670px"}}>
    <CategoryHeader/>
  <Container>
  <ProductDetails />
  <RateContainer rateAvg={rateAvg} rateQty={rateQty}/>
<CardProductContainer products={likeProductArr?.slice(0,4)} title="منتجات قد تعجبك" btntitle="" pathText=""/>
  </Container>
  
    </div>
  )
}

export default ProductDetailsPage;