import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { base_url_string } from '../../Api/constans';


const AdminAllOrdersItem = ({product }) => {
  console.log(product);

  return (
    <Col sm="12">
    <Link
        // to={`/admin/orders/${order._id}`}
        className="cart-item-body my-2 px-1 d-flex p-2"
        style={{ textDecoration: "none" , height : "fit-content" }}>
      <img width="93px" height="120px" src={`${base_url_string}/products/${product?.product?.imageCover}`}  alt="imageCover" />
        <div className="w-100 w-75" >
            <Row className="justify-content-between">
                <Col sm="12" className=" d-flex flex-row justify-content-between">
                    <div className="d-inline pt-2 cat-text">طلب رقم #2321</div>
                    {/* <div className="d-inline pt-2 cat-text">ازاله</div> */}
                </Col>
            </Row>
            <Row className="justify-content-center mt-2">
                <Col sm="12" className=" d-flex flex-row justify-content-start">
                    <div className="d-inline pt-2 cat-title">
                    {product?.product?.title}
                    </div>
              
                </Col>
            </Row>
            <Row>
                <Col sm="12" className=" d-flex">
                    <div className="mt-2  cat-text d-inline">الماركة :</div>
                    <div className="mt-1 barnd-text d-inline mx-1">ابل </div>
                    {/* <div
                        className="color  me-1 border"
                        style={{ backgroundColor: "#E52C2C" }}></div> */}
                </Col>
            </Row>


            
        </div>
    </Link>
</Col>
  )
}

export default AdminAllOrdersItem;









