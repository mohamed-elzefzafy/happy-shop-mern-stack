import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";


const CategoryContainer = ({category , loading }) => {

  const colors = ["#FFD3E8" , "#F4DBA5" , "#55CFDF" , "#FF6262" , "#0034FF"]
  return (
  
  <Container>
    <div className="admin-content-text mt-4 ">كل التصنيفات</div>
    <Row className="d-flex my-2 justify-content-start">
    {
      !loading ? (  category.data ?category.data.map((category , index) => 
      <CategoryCard id={category._id}  img={category.image}  title={category.name} background={colors[Math.floor(Math.random() * 5)]} key={index}/>
      ) :<h4>لا يوجد تصنيفات</h4> ) : (<Spinner animation="border" variant="primary" />)
  
    }
    </Row>
  </Container>
  )
}

export default CategoryContainer