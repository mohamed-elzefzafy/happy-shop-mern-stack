import { Button, Col, Modal, Row } from "react-bootstrap";
import rateIMG from "../../images/rate.png";
import {BsFillTrash3Fill} from "react-icons/bs";
import {FaRegEdit} from "react-icons/fa";
import UseGetLoggedUserData from './../../customHooks/auth/UseGetLoggedUserData';
import { useDispatch, useSelector } from "react-redux";
import { deleteReview, updateReview } from "../../redux/actions/reviewAction";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";



const RateItem = ({rate}) => {
  const [userData] = UseGetLoggedUserData();
  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(true);
  const [showDelete, SetshowDelete] = useState(false);
  const [showEdit, SetshowEdit] = useState(false);
  const [newRteText, setNewRteText] = useState(rate?.title);
  const [rateValue, setRateValue] = useState(rate?.ratings);
const dispatch = useDispatch();
  let userLoggedId ;
  if(userData )
  {
    userLoggedId = userData._id;
  } else {
    userLoggedId ="";
  }



  const handleClose = () => {
    SetshowDelete(false);
  }

  const handleShowModal = () => {
    SetshowDelete(true);
  }


  const handleDelete =async () => {
    setLoading(true);
await dispatch(deleteReview(rate?._id));
setLoading(false);
handleClose();

  }


  const res = useSelector((state) => state.review.deleteReview);
  useEffect(() => {
    if(loading === false)
    {
      if (res)
      {
        if(res && res.status === "deleted succesufully")
        SetshowDelete(false);
        toast.success("تم حذف التقييم");
      //  setTimeout(() => {
      //   window.location.reload();
      //  }, 700);
        console.log(res);
      } else {
        toast.error("يوجد خطأ");
      
      }
    }
  },[loading])



  const handleEditClose = () => {
    SetshowEdit(false);
  }

  const handleShowEditModal = () => {
    SetshowEdit(true);
  }


const handleChangeRateText = (e) => {
  setNewRteText(e.target.value);
}

const onEditReview = async() => {
  if (newRteText === "")
  {
    toast.warning("من فضلك أدخل التقييم");
    return;
  }
  if (rateValue === null)
  {
    toast.warning("يجب أن يوجد تقييم");
    return;
  }
  if (rateValue < 1 || rateValue > 5)
  {
    toast.warning("التقييم يجب أن يكون بين من 1 إلى 5");
    return;
  }

  setLoadingEdit(true);
  await dispatch(updateReview(rate?._id , {
    title : newRteText ,
    ratings :rateValue
  }))
  setLoadingEdit(false);
handleEditClose();
}


const updateRes = useSelector((state) => state.review.updateReview)

useEffect(() => {
if (loadingEdit === false)
{
  if (updateRes)
  {
    if  ( updateRes.status && updateRes.status === 201)
    {
      toast.success("تم تعديل التقييم");
      console.log(updateRes);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("يوجد مشكله");
      console.log(updateRes);
    }
  }
}
},[loadingEdit])




const setting = {
  size: 20,
  count: 5,
  color: "#979797",
  activeColor: "#ffc107",
  value: rateValue,
  a11y: true,
  isHalf: true,
  emptyIcon: <i className="far fa-star" />,
  halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: newValue => {
      console.log(`Example 2: new value is ${newValue}`);
      setRateValue(newValue);
  }
};
  return (
    <div>
    
    <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> <div className="font">تأكيد الحذف</div> </Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="font">هل أنت متأكد من حذف التقييم ؟</div> </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
         تراجع 
          </Button>
          <Button  variant="danger" onClick={handleDelete}>
          حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleEditClose}>
        <Modal.Header>
          <Modal.Title> <div className="font">تأكيد الحذف</div> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <span>{rate?.ratings}</span>
        <ReactStars {...setting} />
    <input 
    onChange={handleChangeRateText}
    className="border-0 font w-100 form-control shadow-none"
    type="text"
    value={newRteText}
     />
         </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleEditClose}>
         تراجع 
          </Button>
          <Button  variant="danger" onClick={onEditReview}>
          تعديل
          </Button>
        </Modal.Footer>
      </Modal>

    
    <Row className="mt-3 justify-content-between">
    
        <Col className="d-felx me-5" sm="7">
            <div className="rate-name  d-inline ms-2">{rate?.user?.name}</div>
            <img className="ms-2" src={rateIMG} alt="" height="16px" width="16px" />
            <div className="cat-rate  d-inline  p-1 pt-2">{rate?.ratings}</div>
            <img className="mx-2" src={rate?.user?.profileImage} alt="" height="30px" width="30px" />
        </Col>
        <Col className="text-center" sm="3" >
      {userLoggedId === rate?.user?._id &&
        <div className="d-flex justify-content-end  gap-3 px-3">
          <BsFillTrash3Fill onClick={handleShowModal} className=" fs-5" style={{cursor : "pointer" , color : "#c40707b3"}}/>
          
            <FaRegEdit onClick={handleShowEditModal} className="fs-5" style={{cursor : "pointer" , color : "#1700c4ba"}}/>
        </div>
      }
  
  
  
        </Col>
    </Row>
    <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
            <div className="rate-description  d-inline ms-5">
                {/* منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة */}
                {rate?.title}
            </div>
        </Col>
    </Row>
    <ToastContainer/>
</div>
  )
}

export default RateItem;