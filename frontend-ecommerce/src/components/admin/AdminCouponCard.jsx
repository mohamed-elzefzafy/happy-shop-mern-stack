import { Button, Col, Modal, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon } from "../../redux/actions/copounAction";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AdminCouponCard = ({coupon}) => {
const [loading, setLoading] = useState(true);
const [show, setShow] = useState(false);


const handleClose = () =>  setShow(false)
const handleShow = () => setShow(true);
const dispatch = useDispatch();
  const onDeleteCoupon = async() => {
   setLoading(true);
   await dispatch(deleteCoupon(coupon?._id));
   setLoading(false);
   handleClose();
  }

  const resDelete = useSelector((state => state.coupon.deleteCoupon))


  useEffect(() => {
    if(loading === false)
    {
      if (resDelete && resDelete.status === "deleted succesufully")
      {
        toast.success("تم حذف الكوبون بنجاح");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error("يوجد مشكله بالحذف")
      }
    }
  })

  const dateString = coupon.expire;
  const formatDate = (dateString) => {
      const options = { year: "numeric", month: "numeric", day: "numeric" }
      return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="user-address-card my-3 px-3">
 
 <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> <div className="font">تأكيد الحذف</div> </Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="font">هل أنت متأكد من الحذف ؟</div> </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
         تراجع 
          </Button>
          <Button  variant="danger" onClick={onDeleteCoupon}>
          حذف
          </Button>
        </Modal.Footer>
      </Modal>



    <Row className="d-flex justify-content-between  ">
    <Col xs="8"  className="d-flex flex-row justify-content-start align-items-center gap-2  text-secondary coupon-admin-card">
      <div   style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    // fontSize: "14px",
                }}>إسم الكوبون :  </div>
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    // fontSize: "14px",
                }}>
              {coupon?.name}
            </div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end ">
            <div className="d-flex p-2">
            <Link to={`/admin/editcoupon/${coupon?._id}`} className="text-decoration-none">
                <div className="d-flex mx-2">
              
                    <img
                        alt=""
                        className="ms-1 mt-2"
                        src={editicon}
                        height="17px"
                        width="15px"
                    />
                        <p className="item-delete-edit coupon-admin-card "> تعديل</p>
              
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
                    <p className="item-delete-edit coupon-admin-card"> ازاله</p>
                </div>
            </div>
        </Col>
    </Row>

    <Row>
        <Col xs="12"  className="d-flex flex-row justify-content-start align-items-center gap-2  text-secondary coupon-admin-card">
      <div   style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    // fontSize: "14px",
                }}> تاريخ إنتهاء الكوبون :  </div>
                {"  "}
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    // fontSize: "14px",
                }}>
              {formatDate(dateString)}
            </div>
        </Col>
    </Row>

    <Row className="mt-3">
    <Col xs="12"  className="d-flex flex-row justify-content-start align-items-center gap-2  text-secondary coupon-admin-card">
      <div 
        style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    // fontSize: "14px",
                }}>  نسبة خصم الكوبون  :  </div>
                {"  "}
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    // fontSize: "14px",
                }}>
              {coupon?.discount}%
            </div>
        </Col>
    </Row>
</div>
  )
}

export default AdminCouponCard;