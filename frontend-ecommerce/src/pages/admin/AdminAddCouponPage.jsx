import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/admin/AdminSideBar";
import AdminAddCoupon from "../../components/admin/AdminAddCoupon";


const AdminAddCouponPage = () => {
  return (
    <Container>
    <Row className="py-3">
    <Col sm="5" xs="2" md="2">
      <AdminSideBar/>
      </Col>
  
      <Col sm="7" xs="10" md="10">

<AdminAddCoupon/>
      </Col>

    </Row>
    </Container>
  )
}

export default AdminAddCouponPage;