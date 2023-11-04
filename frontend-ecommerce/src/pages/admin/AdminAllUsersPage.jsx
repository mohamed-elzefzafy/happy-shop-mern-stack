import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from './../../components/admin/AdminSideBar';
import AdminAllUsers from "../../components/admin/AdminAllUsers";


const AdminAllUsersPage = () => {
  return (
    <Container>
    <Row className="py-3">
    <Col sm="3" xs="2" md="2">
      <AdminSideBar/>
      </Col>
  
      <Col sm="9" xs="10" md="10">
<AdminAllUsers/>

      </Col>

    </Row>
    </Container>
  )
}

export default AdminAllUsersPage;