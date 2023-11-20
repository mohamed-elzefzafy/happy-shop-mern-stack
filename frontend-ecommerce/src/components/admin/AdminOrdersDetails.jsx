import { Col, Row } from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import { Link } from "react-router-dom";


const AdminOrdersDetails = ({order , user , total}) => {

  return (
    <Link
        to={`/admin/orders/${order?._id}`}
        style={{textDecoration : "none"}}
    >
    <div  className="mb-3 border border-secondary rounded d-flex flex-column align-items-center pb-2"
    style={{backgroundColor : "#ffffff"}}>
    <div className='admin-content-text my-3'> تفاصيل الطلب رقم# </div>

    {
      order?.cartItems?.map((product , index) => 
        <AdminAllOrdersItem product={product} order={order} key={index}/>
      )
    }

<Row>
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
</Row>
    <Row className="justify-content-center mt-4 user-data w-75"
    style={{height: "fit-content"}}>
        <Col xs="12" className=" d-flex">
            {/* <div className="admin-content-text py-2">تفاصيل العميل</div> */}
        </Col>
        <Col xs="12" className="d-flex p-2">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}>
                الاسم:
            </div>

            <div
                style={{
                    color: "#979797",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}
                className="mx-2">
              {user?.name}
            </div>
        </Col>

        {/* <Col xs="12" className="d-flex">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}>
                رقم الهاتف:
            </div>

            <div
                style={{
                    color: "#979797",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}
                className="mx-2">
              {user?.phone}
            </div>
        </Col>
        <Col xs="12" className="d-flex">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}>
                الايميل:
            </div>

            <div
                style={{
                    color: "#979797",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}
                className="mx-2">
                {user?.email}
            </div>
        </Col> */}
        <div className=" d-inline border text-center  text-dark fw-bold p-2 "
        style={{textDecoration : "none"}}
        >
            المجموع {total} جنيه
        </div>
    </Row>
</div>
    </Link>

  )
}

export default AdminOrdersDetails;