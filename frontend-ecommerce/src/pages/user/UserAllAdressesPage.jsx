import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../components/user/UserSideBar";
import UserAllAdress from "../../components/user/UserAllAdress";


const UserAllAdressesPage = () => {
  return (
    <Container>
    <Row className="py-3">
    <Col sm="3" xs="2" md="2">
    <UserSideBar/>
      </Col>
  
      <Col sm="9" xs="10" md="10">
<UserAllAdress/>
      </Col>

    </Row>
    </Container>
  )
}

export default UserAllAdressesPage;