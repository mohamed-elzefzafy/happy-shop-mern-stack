import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteAddress } from '../../redux/actions/addressAction';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const UserAdressCard = ({address}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = ()=> {}


  const onDelete = async() => {
setLoading(true);
await dispatch(deleteAddress(address?._id));
setLoading(false);
handleClose();
  }

  const resDelete = useSelector((state) => state.address.deleteAddress);

  useEffect(() => {
    if (loading === false)
    {
      if (resDelete)
      {
        if (resDelete.status === "success")
        {
          toast.success("تم حذف العنوان");
          // setTimeout(() => {
          //   window.location.reload();
          // }, 1500);
        } else {
          toast.error("يوجد مشكله لم يتم الحذف")
        }
      }
    }

  },[loading]);


  return (
    <div className="user-address-card my-3 px-3">
    <ToastContainer/>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> <div className="font">تأكيد الحذف</div> </Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="font">هل أنت متأكد من الحذف ؟</div> </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
         تراجع 
          </Button>
          <Button  variant="danger" onClick={onDelete}>
          حذف
          </Button>
        </Modal.Footer>
      </Modal>


    <Row className="d-flex justify-content-between  ">
        <Col xs="1">
            <div className="p-2">{address?.alias} </div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
            <div className="d-flex p-2">
            <Link to={`/user/edit-address/${address?._id}`} style={{ textDecoration: "none" }}>
                <div className="d-flex mx-2">
                    <img
                        alt=""
                        className="ms-1 mt-2"
                        src={editicon}
                        height="17px"
                        width="15px"
                    />
                        <p className="item-delete-edit"> تعديل</p>  
                </div>
                    </Link>
                <div className="d-flex" onClick={handleShow}>
                    <img
                        alt=""
                        className="ms-1 mt-2"
                        src={deleteicon}
                        height="17px"
                        width="15px"
                    />
                    <p className="item-delete-edit">حذف</p>
                </div>
            </div>
        </Col>
    </Row>

    <Row>
        <Col xs="12">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "14px",
                }}>
              {address?.details}
            </div>
        </Col>
    </Row>

    <Row className="mt-3">
        <Col xs="12" className="d-flex">
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
              {address?.phone}
            </div>
        </Col>
    </Row>
</div>
  )
}

export default UserAdressCard