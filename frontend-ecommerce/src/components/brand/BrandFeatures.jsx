import { Container, Row, Spinner } from "react-bootstrap"
import SubTitleComp from "../utilities/SubTitleComp"
import BrandCard from "./BrandCard"
import UseHomeBrandHook from "../../customHooks/brand/UseHomeBrandHook";


const BrandFeatures = ({title , btntitle}) => {

  const [loading , brand ] = UseHomeBrandHook();
  return (
    <Container>

        <SubTitleComp title={title} btntitle={btntitle} pathText="/allbrand" />
    <Row className='my-1 d-flex justify-content-between'>
        
        {
    !loading ? (  brand?.data ? brand?.data?.slice(0 , 6).map((brand , index) => 
    
                   <BrandCard img={brand.image} key={index}/>
      ) : <h4>لا يوجد ماركات</h4>   ) : <Spinner animation="border" variant="primary" />
    }
    </Row>
  

</Container>
  )
}

export default BrandFeatures