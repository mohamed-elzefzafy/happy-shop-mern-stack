import React from 'react'
import { Container, Row  , Spinner} from 'react-bootstrap'
import BrandCard from './BrandCard'



const BrandContainer = ({data , loading}) => {

  
  return (
  <Container>
  <div className="admin-content-text mt-4 ">كل الماركات</div>
  <Row>
 {
  !loading ? (  data ? (data.map((brand , index) => 
    <BrandCard id={brand._id} img={brand.image} key={index}/>)) : <h4>لا يوجد ماركات</h4>) : (<Spinner animation="border" variant="primary" />)
  }
      

      

  </Row>
  </Container>


  )
}

export default BrandContainer



