import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../redux/actions/authAction";
import { useEffect } from "react";
import { useState } from "react";


const UseGetLoggedUserData = () => {
  const [user, setUser] = useState("");
const dispatch = useDispatch();


const getUserData = async () => {
await dispatch(getLoggedUser());
}


try {
  useEffect(() => {
    getUserData();
    setUser(res?.data);
    },[user])
    
} catch (error) {
  
}

const res = useSelector((state) =>  state.auth.currentUser);

let userData;
if (res?.data)
{
  userData = res?.data;
} else {
  userData = "";
}
return [userData]
}

export default UseGetLoggedUserData