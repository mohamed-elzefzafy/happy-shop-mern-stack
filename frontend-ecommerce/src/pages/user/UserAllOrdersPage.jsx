import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../components/user/UserSideBar";
import UserAllOrder from "../../components/user/UserAllOrder";


const UserAllOrdersPage = () => {
  return (
    <Container>
    <Row className="py-3">
    <Col sm="3" xs="2" md="2">
    <UserSideBar/>
      </Col>
  
      <Col sm="9" xs="10" md="10">
<UserAllOrder/>
      </Col>

    </Row>
    </Container>
  )
}

export default UserAllOrdersPage;