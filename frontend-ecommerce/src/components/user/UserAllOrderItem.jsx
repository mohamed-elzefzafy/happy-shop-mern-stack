import { Col, Row } from "react-bootstrap";
import UserAllOrderCard from "./UserAllOrderCard";



const UserAllOrderItem = ({order}) => {

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "numeric", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
  return (
    <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">طلب رقم #</div>
                <div className="py-2 order-title"> بتاريخ :  {formatDate(order?.createdAt)}</div>
            </Row>
            {  order?.cartItems ? (order?.cartItems?.map((product , index) =>
              <UserAllOrderCard product={product} key={index}/>
              )) : null}
    
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline mx-2 stat">الحالة : </div>
                        <div className="d-inline mx-2 stat">  {order?.isDelivered ? "تم التوصيل" : "لم يتم التوصيل"}</div>
                    </div>

                    <div>
                    <div className="d-inline mx-2 stat">حالة الدفع : </div>
                        <div className="d-inline mx-2 stat">  {order?.isPaid ? "تم الدفع" : "لم يتم الدفع"}</div>
                    </div>

                    <div>
                    <div className="d-inline mx-2 stat">حالة الدفع : </div>
                        <div className="d-inline mx-2 stat">  {order?.paymentMethodType === "cash" ? " كاش" : "  بطاقة إئتمان"}</div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">{order?.totalOrderPrice} جنيه</div>
                    </div>
                </Col>
            </Row>
        </div>
  )
}

export default UserAllOrderItem;