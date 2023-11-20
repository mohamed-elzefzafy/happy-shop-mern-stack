import { Col, Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";
import UseGetLoggedUserData from './../../customHooks/auth/UseGetLoggedUserData';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/orderAction";
import Pagination from './../utilities/Pagination';


const UserAllOrder = () => {
  const [userData] = UseGetLoggedUserData();


  const dispatch = useDispatch();

  useEffect(() => {
    const getOrders = async () => {
await dispatch(getAllOrders( "" , 6 ));
    };
    getOrders();
  } , [])

  const res = useSelector((state) => state.completeOrders.allOrders);


  const onPress = async (page) => {
    await dispatch(getAllOrders(page ,3 ));
  }
  return (
    <div>
    <Row className="">
      <Col sm="3">
      {userData ? (  <div className=" pb-4 fs-6 fw-bold">أهلا  : {userData?.name}</div>) : null}
  
      </Col>
      <Col sm="3">
      {userData ? (  <div className=" pb-4 fs-6 fw-bold">عدد الطلبات   : {res?.results}</div>) : null}
      </Col>
    </Row>
      <Row className="justify-content-between">
      {res.data ? (
        res?.data?.map((order , index) => 
        <UserAllOrderItem order={order} key={index}/>
        )
      ) : null}


{
  res?.paginationResult?.numberOfPage > 1 ? (
    <Pagination pageCount={res?.paginationResult?.numberOfPage} onPress={onPress}/>
  ) :null
}
      </Row>
    </div>
  )
}

export default UserAllOrder;