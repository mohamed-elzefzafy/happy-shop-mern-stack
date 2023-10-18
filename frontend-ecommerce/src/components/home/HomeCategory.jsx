import { Container, Row, Spinner } from "react-bootstrap";
import SubTitleComp from "../utilities/SubTitleComp";
import CategoryCard from "../category/CategoryCard";
import UseHomeCategoryHook from "../../customHooks/category/UseHomeCategoryHook";


const HomeCategory = () => {
const [loading , category ,colors] = UseHomeCategoryHook();
  return (
  <Container>
      <SubTitleComp title="التصنيفات"  btntitle="المزيد" pathText="/allcategory" />  
    <Row className="d-flex my-2 justify-content-start">
    {
    !loading ? (  category?.data ? category?.data?.slice(0 , 6).map((category , index) => 
      <CategoryCard   img={category.image}  title={category.name} background={colors[index]} key={index}/>
      ) : <h4>لا يوجد تصنيقات</h4>   ) : <Spinner animation="border" variant="primary" />
    }
    </Row>
  </Container>
  )
}

export default HomeCategory;