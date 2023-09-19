import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../components/user/UserSideBar";
import UserEditAdress from "../../components/user/UserEditAdress";


const UserEditAdressPage = () => {
  return (
    <Container>
    <Row className="py-3">
    <Col sm="3" xs="2" md="2">
    <UserSideBar/>
      </Col>
  
      <Col sm="9" xs="10" md="10">
<UserEditAdress/>
      </Col>

    </Row>
    </Container>
  )
}

export default UserEditAdressPage;