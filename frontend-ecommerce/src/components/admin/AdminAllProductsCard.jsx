import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import prod1 from "../../images/prod1.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/actions/productAction";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const AdminAllProductsCard = ({product}) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {id} = useParams();

const dispatch = useDispatch();


  const handleDelete =async()=> {
    setLoading(true)
await dispatch(deleteProduct(product?._id))
setLoading(false)
setShow(false)
await   toast.success("تم الحذف")
setTimeout(() => {
  window.location.reload();
}, 1500);
  }


  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">


<Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> <div className="font">تأكيد الحذف</div> </Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="font">هل أنت متأكد من الحذف ؟</div> </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
         تراجع 
          </Button>
          <Button  variant="danger" onClick={handleDelete}>
          حذف
          </Button>
        </Modal.Footer>
      </Modal>


    <Card
        className="my-2"
        style={{
            width: "90%",
            height: "330px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
        }}>
        <Row className="d-flex justify-content-center px-2">
            <Col className=" d-flex justify-content-between">
                <div className="d-inline item-delete-edit" onClick={handleShow}>حذف</div>
              
                <Link style={{textDecoration : "none"}} to={`/admin/editproduct/${product._id}`}>
                <div className="d-inline item-delete-edit">تعديل</div>
                </Link>
            </Col>
        </Row>
        <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
            <Card.Img style={{padding : "20px", height: "200px", width: "100%" , objectFit: "contain"}} src={product?.imageCover} />
            <Card.Body>
                <Card.Title>
                    <div className="card-title">
                         {product?.title} 
                    </div>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-between">
                        <div className="card-rate">{product?.ratingsQuantity}</div>
                        <div className="d-flex">
                            <div className="card-currency mx-1">جنيه</div>
                            <div className="card-price">{product?.price}</div>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Link>
    </Card>
    <ToastContainer/>
</Col>
  )
}

export default AdminAllProductsCard;