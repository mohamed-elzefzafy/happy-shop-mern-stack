import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "./AdminSideBar";
import AdminSpecificOrderDetail from "./AdminSpecificOrderDetail";


const AdminSpecificOrder = () => {
  return (
    <Container>
  <Row className="py-3">
  <Col sm="3" xs="2" md="2">
    <AdminSideBar/>
    </Col>

    <Col sm="9" xs="10" md="10">
<AdminSpecificOrderDetail/>
    </Col>
  </Row>
  </Container>
  )
}

export default AdminSpecificOrder;