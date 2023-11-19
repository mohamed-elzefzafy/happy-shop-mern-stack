import React from 'react'
import { Col, Row } from 'react-bootstrap';
import mobile from "../../images/mobile.png";
import { base_url_string } from '../../Api/constans';
import { Link } from 'react-router-dom';

const UserAllOrderCard = ({product}) => {
  console.log(product);

  return (
    <div>
    <Row className="d-flex mb-2">
        <Col xs="3" md="2" className="d-flex justify-content-start">
        <Link to={`/products/${product?.product._id}`}>
        <img width="93px" height="120px" src={`${base_url_string}/products/${product?.product.imageCover}`}  alt="imageCover" />

        </Link>
        </Col>
        <Col xs="8" md="6">
            <div className="d-block pt-2 cat-title">
              {product?.product?.title}
            </div>
          {
            product?.product?.colors?.length > 0 ? (<div className='d-flex flex-row mt-3'>
              <span className='mx-2 stat'>الللون : </span>
            <div style={{backgroundColor : product?.product?.colors[0] , width : "25px" , height : "25px" , borderRadius : "50%" }}></div>
            </div>  ) : null
          }
          
            {/* <div className="d-inline pt-2 cat-rate me-2">4.5</div> */}
            {/* <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div> */}
            <div className="mt-3">
                <div className="cat-text  d-inline">الكميه</div>
                <input
                value={product?.quantity}
                    className="mx-2 text-center"
                    disabled
                    type="number"
                    style={{ width: "40px", height: "25px" }}
                />
            </div>
        </Col>
    </Row>
</div>
  )
}

export default UserAllOrderCard