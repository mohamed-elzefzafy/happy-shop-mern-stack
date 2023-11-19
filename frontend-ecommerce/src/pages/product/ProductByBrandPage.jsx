import { Col, Container, Pagination, Row } from "react-bootstrap"
import CardProductContainer from "../../components/products/CardProductContainer"
import UseSearchProduct from "../../customHooks/product/UseSearchProduct";
import { useParams } from "react-router-dom";



const ProductByBrandPage = () => {
  const {id} = useParams();
  const [items , results , pagination , onPress , getProducts] = UseSearchProduct(`brand=${id}`);


  return (
    <div style={{minHeight : "670px"}}>
    <Container>
    <Row className="d-flex flex-row"> 
      <Col sm="9" xs="9" md="10">
      {/* <CardProductContainersSearch products={items} title="" btntitle=""/> */}
        <CardProductContainer products={items} title="" btntitle=""/>
        
      </Col>
    </Row>
    {pagination > 1  &&  <Pagination pageCount={pagination} onPress={onPress}/>}
    </Container>

    
    </div>
  )
}

export default ProductByBrandPage;