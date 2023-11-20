import React, { useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, getSpecificOrder, updateOrderToDeliver, updateOrderToPaid } from '../../redux/actions/orderAction';
import { useParams } from 'react-router-dom';
import AdminAllOrdersItem from './AdminAllOrdersItem';
import { ToastContainer, toast } from 'react-toastify';

const AdminSpecificOrderDetail = () => {
const [paidCase, setPaidCase] = useState("");
const [deliverCase, setDeliverCase] = useState("");
const [loadingPaid, setLoadingPaid] = useState(true);
const [loadingDeliver, setLoadingDeliver] = useState(true);
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() => {
    const getOneOrders = async () => {
await dispatch(getSpecificOrder(id));
    };
    getOneOrders();
  } , [loadingPaid , loadingDeliver])

  const res = useSelector((state) => state.completeOrders.oneOrder);



const onSelectOrderToPaid =  (e) => {
  setPaidCase(e.target.value);
}


const onChangeOrderToPaid = async() => {
if (paidCase === "paid")
setLoadingPaid(true);
await dispatch(updateOrderToPaid(id));
setLoadingPaid(false);
}

const resPaidCase = useSelector((state) => state.completeOrders.updateOrderPaid);


useEffect(() => {
  if (loadingPaid === false)
  {
    if (resPaidCase && resPaidCase.status === 200)
    {
      toast.success("تم تغيير حالة الدفع إلى تم الدفع");
    } else if (  resPaidCase.status === 500)
    {
      toast.warning("تم تغيير حالة الدفع بالفعل");
    }
  }
},[loadingPaid])


const onSelectOrderToDeliver = (e) => {
setDeliverCase(e.target.value);
}
const onChangeOrderToDeliver = async() => {
  if (deliverCase === "deliver")
setLoadingDeliver(true);
await dispatch(updateOrderToDeliver(id));
setLoadingDeliver(false);
}


const resDeliverCase = useSelector((state) => state.completeOrders.updateOrderDeliver);

useEffect(() => {
  if (loadingDeliver === false)
  {
    if (resDeliverCase && resDeliverCase.status === 200)
    {
      toast.success("تم تغيير حالة التوصيل إلى تم التوصيل");
    } else if (  resDeliverCase.status === 500)
    {
      toast.warning("تم تغيير حالة التوصيل بالفعل");
    }
  }
  
},[loadingDeliver])


const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}
  return (
    <div  className="mb-3 border border-secondary rounded d-flex align-items-center flex-column"
    style={{backgroundColor : "#ffffff"}}>
    <ToastContainer/>
    <div className='admin-content-text my-3'>   {res._id} تفاصيل الطلب رقم# </div>
    <div className='admin-content-text my-3'>بتاريخ : {formatDate(res?.data?.createdAt)}  </div>

    {
      res?.data?.cartItems?.map((product , index) => 
        <AdminAllOrdersItem product={product}  key={index}/>
      )
    }

<Row className='text-end' >
<div>
                        <div className="d-inline mx-2 stat fs-6 fw-bold ">الحالة : </div>
                        <div className="d-inline mx-2 stat fs-6 fw-bold">  {res?.data?.isDelivered ? "تم التوصيل" : "لم يتم التوصيل"}</div>
                    </div>

                    <div>
                    <div className="d-inline mx-2 stat fs-6 fw-bold">حالة الدفع : </div>
                        <div className="d-inline mx-2 stat fs-6 fw-bold">  {res?.data?.isPaid ? "تم الدفع" : "لم يتم الدفع"}</div>
                    </div>

                    <div>
                    <div className="d-inline mx-2 stat fs-6 fw-bold">حالة الدفع : </div>
                        <div className="d-inline mx-2 stat fs-6 fw-bold">  {res?.data?.paymentMethodType === "cash" ? " كاش" : "  بطاقة إئتمان"}</div>
                    </div>
</Row>
    <Row className="justify-content-center mt-4 user-data w-100 mex-auto text-center pb-2">
        <Col xs="12" className=" d-flex">
            <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
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
              {res?.data?.user?.name}
            </div>
        </Col>

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
              {res?.data?.user?.phone}
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
                {res?.data?.user?.email}
            </div>
        </Col>
        <div className=" d-inline px-4 border text-center pt-2">
            المجموع {res?.data?.totalOrderPrice} جنيه
        </div>
    <Row >
      <Col sm="12" md="6">
      <div className="d-flex mt-2 justify-content-center">
            <select
            onChange={onSelectOrderToPaid}
                name="languages"
                id="lang"
                className="select input-form-area mt-1  text-center px-2 w-50">
                <option value="0">حالة الدفع</option>
                <option value="notPaid"> لم يتم الدفع</option>
                <option value="paid"> تم الدفع</option>
            
                {/* <option value="val2">الغاء</option> */}
            </select>
            <button onClick={onChangeOrderToPaid} className="btn-a px-3 d-inline mx-2 ">حفظ </button>
        </div>
      </Col>
      <Col sm="12" md="6">
      <div className="d-flex mt-2 justify-content-center">
            <select
              onChange={onSelectOrderToDeliver}
                name="languages"
                id="lang"
                className="select input-form-area mt-1  text-center px-2 w-50">
                <option value="0">حالة التوصيل</option>
                <option value="notDeliver">لم يتم التوصيل </option>
                <option value="deliver"> تم التوصيل</option>
            
            </select>
            <button onClick={onChangeOrderToDeliver} className="btn-a px-3 d-inline mx-2 ">حفظ </button>
        </div>
      </Col>
    </Row>
    </Row>
</div>
  )
}

export default AdminSpecificOrderDetail