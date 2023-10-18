import { Container, Row } from "react-bootstrap";
import SubTitleComp from "../utilities/SubTitleComp";
import ProductCard from "./ProductCard";


const CardProductContainer = ({ products ,title , btntitle , pathText}) => {
  return (
    <Container>
    {products ?  <SubTitleComp title={title} btntitle={btntitle} pathText={pathText}/>  : null} 
    <Row className="d-flex my-2 justify-content-start">

    
    {
    products? (
      products.map((product , index) => 
      <ProductCard key={index} product={product}/>
      )
    ): null
    }


    </Row>
  </Container>
  )
}

export default CardProductContainer;