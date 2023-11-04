import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from './../user/UserSideBar';
import UserEditCoupon from "./AdminEditCoupon";
import AdminEditCoupon from "./AdminEditCoupon";


const AdminEditCouponPage = () => {
  return (
    <Container>
    <Row className="py-3">
    <Col sm="3" xs="2" md="2">
    <UserSideBar/>
      </Col>
  
      <Col sm="9" xs="10" md="10">
<AdminEditCoupon/>
      </Col>
    </Row>
    </Container>
  )
}

export default AdminEditCouponPage;