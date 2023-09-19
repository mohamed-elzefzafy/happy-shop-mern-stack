import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../components/category/CategoryHeader";
import SearchCountResult from "../../components/utilities/SearchCountResult";
import SideFilter from "../../components/utilities/SideFilter";
import CardProductContainer from "../../components/products/CardProductContainer";
import Pagination from "../../components/utilities/Pagination";



const ShopProductPage = () => {
  return (
    <div style={{minHeight : "670px"}}>
    <CategoryHeader/>
    <Container>
    <SearchCountResult title="400 نتيجة بحث"/>
    <Row className="d-flex flex-row">
      <Col xs="2" sm="2" md="1" className="d-flex">
      <SideFilter/>
      </Col>
      <Col sm="10" xs="10" md="11">
        <CardProductContainer title="" btntitle=""/>
        
      </Col>
    </Row>
<Pagination/>
    </Container>

    
    </div>
  )
}

export default ShopProductPage;