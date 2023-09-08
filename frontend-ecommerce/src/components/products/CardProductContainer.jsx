import { Container, Row } from "react-bootstrap";
import SubTitleComp from "../utilities/SubTitleComp";
import ProductCard from "./ProductCard";


const CardProductContainer = ({title , btntitle}) => {
  return (
    <Container>
      <SubTitleComp title={title} btntitle={btntitle}/>  
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