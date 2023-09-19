import { Container, Row, Spinner } from "react-bootstrap";
import SubTitleComp from "../utilities/SubTitleComp";
import CategoryCard from "../category/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";


const HomeCategory = () => {
  const dispatch = useDispatch();


  useEffect(()=> {
    dispatch(getAllCategory());
  },[])
  
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  const colors = ["#FFD3E8" , "#F4DBA5" , "#55CFDF" , "#FF6262" , "#0034FF"]
  return (
  <Container>
      <SubTitleComp title="التصنيفات"  btntitle="المزيد" pathText="/allcategory" />  
    <Row className="d-flex my-2 justify-content-start">
    {
    !loading ? (  category.data ? category.data.slice(0 , 6).map((category , index) => 
      <CategoryCard   img={category.image}  title={category.name} background={colors[index]} key={index}/>
      ) : <h4>لا يوجد تصنيقات</h4>   ) : <Spinner animation="border" variant="primary" />
    }
    </Row>
  </Container>
  )
}

export default HomeCategory;