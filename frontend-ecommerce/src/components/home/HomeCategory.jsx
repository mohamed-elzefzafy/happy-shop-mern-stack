import { Container, Row } from "react-bootstrap";
import SubTitleComp from "../utilities/SubTitleComp";
import CategoryCard from "../category/CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";


const HomeCategory = () => {
  return (
    // btntitle="المزيد"
  <Container>
      <SubTitleComp title="التصنيفات"  btntitle="المزيد" />  
    <Row className="d-flex my-2 justify-content-center">
    <CategoryCard   img={clothe}  title="أجهزه منزليه" background="#F4DBA4"/>
      <CategoryCard   img={cat2}  title="أجهزه منزليه" background="#F4DBA4"/>
      <CategoryCard   img={labtop}  title="أجهزه منزليه" background="#0034FF" />
      <CategoryCard   img={sale}  title="أجهزه منزليه" background="#F4DBA4"/>
      <CategoryCard   img={pic}  title="أجهزه منزليه" background="#FF6262" />
      <CategoryCard   img={clothe}  title="أجهزه منزليه" background="#F4DBA4"/>
    </Row>
  </Container>
  )
}

export default HomeCategory;