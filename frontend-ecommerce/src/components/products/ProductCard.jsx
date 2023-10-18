import { Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import prod1 from "../../images/prod1.png";


const ProductCard = ({product}) => {
  return (
    <Col xs="12" sm="12" md="6" lg="3" className="d-flex justify-content-center">

            <Card
                className="my-2 d-flex jud"
                style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                <Link to={`/products/${product?._id}`} style={{ textDecoration: 'none' }}>
                    <Card.Img style={{padding : "20px", height: "170px", width: "100%" , objectFit: "contain" }} src={product?.imageCover} />
                </Link>
                <div className="d-flex justify-content-end mx-2">
                    <img
                        src={favoff}
                        alt=""
                        className="text-center"
                        style={{
                            height: "24px",
                            width: "26px",
                        }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">
                          {product?.title}
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex">
                                <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">{product?.ratingsQuantity}</div>
                            </div>
                            <div className="d-flex">
                                <div className="card-price">{product?.price}</div>
                                <div className="card-currency mx-1">جنيه</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
  )
}

export default ProductCard;