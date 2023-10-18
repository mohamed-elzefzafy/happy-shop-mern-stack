import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../components/category/CategoryHeader";
import SearchCountResult from "../../components/utilities/SearchCountResult";
import SideFilter from "../../components/utilities/SideFilter";
import CardProductContainer from "../../components/products/CardProductContainer";
import Pagination from "../../components/utilities/Pagination";
import UseSearchProduct from "../../customHooks/product/UseSearchProduct";




const ShopProductPage = () => {

  const [items , results , pagination , onPress , getProducts] = UseSearchProduct();
  return (
    <div style={{minHeight : "670px"}}>
    <CategoryHeader/>
    <Container>
    <SearchCountResult   title={`نتيجة بحث ${results} منتج`}/>
    <Row className="d-flex flex-row"> 
      <Col xs="3" sm="3" md="2" className="d-flex">
      <SideFilter/>
      </Col>
      <Col sm="9" xs="9" md="10">
        <CardProductContainer products={items} title="" btntitle=""/>
        
      </Col>
    </Row>
    {pagination > 1  &&  <Pagination pageCount={pagination} onPress={onPress}/>}
    </Container>

    
    </div>
  )
}

export default ShopProductPage;