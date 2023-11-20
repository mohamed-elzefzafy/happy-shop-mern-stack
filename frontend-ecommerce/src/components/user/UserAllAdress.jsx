import { Col, Row } from "react-bootstrap";
import UserAdressCard from "./UserAdressCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllAddresses } from "../../redux/actions/addressAction";


const UserAllAdress = () => {
  const dispatch = useDispatch();



  const res = useSelector((state) => state.address.allAddresses)

  useEffect(() => {
    const getAdressesData = async() => {
  await dispatch(getAllAddresses());
    }
    getAdressesData();

  },[res])




let userAddresses =[];
if (res?.data)
{
userAddresses = res?.data;
} else {
  userAddresses = [];
}
  return (
    <div>
        <div className="admin-content-text pb-4">  دفتر العناوين </div>
        {res?.data ? (
          userAddresses.map((address , index) => 
          <UserAdressCard address={address} key={index}/>
          )
        ) : null}
    
    

        <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address mastercolor">اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
    </div>
  )
}

export default UserAllAdress