import { Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";


const UserAllOrder = () => {
  return (
    <div>
      <div className="admin-content-text pb-4">أهلا محمد الزفزافى</div>
      <Row className="justify-content-between">
<UserAllOrderItem/>
      </Row>
    </div>
  )
}

export default UserAllOrder;