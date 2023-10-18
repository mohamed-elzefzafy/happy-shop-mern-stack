import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/admin/AdminSideBar";
import AdminAllProducts from "../../components/admin/AdminAllProducts";
import Pagination from "../../components/utilities/Pagination";
import UseViewProductAdminHook from "../../customHooks/admin/UseViewProductAdminHook";


const AdminAllProductsPage = () => {

  const [items , onPress  ] = UseViewProductAdminHook();

  return (
    <Container>
      <Row className="py-3">
  <Col sm="3" xs="2" md="2">
<AdminSideBar/>
  </Col>

  <Col sm="9" xs="10" md="10">
<AdminAllProducts products={items?.data}/>

</Col>
{items?.paginationResult?.numberOfPage > 1 ?  <Pagination pageCount={items?.paginationResult?.numberOfPage} onPress={onPress}/> : null}

      </Row>
    </Container>
  )
}

export default AdminAllProductsPage;