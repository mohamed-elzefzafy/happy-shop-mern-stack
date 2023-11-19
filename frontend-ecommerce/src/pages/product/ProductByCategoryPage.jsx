import { Col, Container, Pagination, Row } from "react-bootstrap"
import CardProductContainer from "../../components/products/CardProductContainer"
import UseSearchProduct from "../../customHooks/product/UseSearchProduct"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"



const ProductByCategoryPage = () => {
  // const  [items , results , pagination , onPress , getProducts] = UseSearchProduct()
  const {id} = useParams();
  const [items , results , pagination , onPress , getProducts] = UseSearchProduct(`category=${id}`);

const [categories, setCategories] = useState([]);
useEffect(() => {
if (items)
{
  setCategories(items);
}
},[items])

  return (
    <div style={{minHeight : "670px"}}>
    <Container>
    <Row className="d-flex flex-row"> 
      <Col sm="9" xs="9" md="10">
      {/* <CardProductContainersSearch products={items} title="" btntitle=""/> */}
        <CardProductContainer products={categories} title="" btntitle=""/>
        
      </Col>
    </Row>
    {pagination > 1  &&  <Pagination pageCount={pagination} onPress={onPress}/>}
    </Container>

    
    </div>
  )
}

export default ProductByCategoryPage