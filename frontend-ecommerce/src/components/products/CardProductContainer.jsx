import { Container, Row } from "react-bootstrap";
import SubTitleComp from "../utilities/SubTitleComp";
import ProductCard from "./ProductCard";


const CardProductContainer = ({title , btntitle , pathText}) => {
  return (
    <Container>
      <SubTitleComp title={title} btntitle={btntitle} pathText={pathText}/>  
    <Row className="d-flex my-2 justify-content-center">
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
    </Row>
  </Container>
  )
}

export default CardProductContainer;