import { Row } from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllOrders } from "../../redux/actions/orderAction";
import AdminOrdersDetails from "./AdminOrdersDetails";
import Pagination from "../utilities/Pagination";


const AdminAllOrders = () => {

  
  const dispatch = useDispatch();

  useEffect(() => {
    const getOrders = async () => {
await dispatch(getAllOrders( "" , 10 ));
    };
    getOrders();
  } , [])

  const res = useSelector((state) => state.completeOrders.allOrders);



  const onPress = async (page) => {
    await dispatch(getAllOrders(page ,10 ));
  }
  return (
    <div >
    <div className="admin-content-text">إدارة جميع الطلبات</div>
    <div className="admin-content-text my-3">عدد الطلبات   : {res?.results}</div>
    <Row className="justify-content-start">

    {res?.data ? (
        res?.data?.map((order , index) => 
        <AdminOrdersDetails order={order}  user={order?.user} total={order?.totalOrderPrice} key={index}/>
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

export default AdminAllOrders;