import { Col, Row } from "react-bootstrap";
import UserAdressCard from "./UserAdressCard";
import { Link } from "react-router-dom";


const UserAllAdress = () => {
  return (
    <div>
        <div className="admin-content-text pb-4">  دفتر العناوين </div>
        <UserAdressCard/>
        <UserAdressCard/>

        <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
    </div>
  )
}

export default UserAllAdress