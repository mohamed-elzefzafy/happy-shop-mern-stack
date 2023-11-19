
import { useState } from 'react';
import UseGetLoggedUserData from './auth/UseGetLoggedUserData';
import { useEffect } from 'react';

const UseProtectedRoute = () => {
const [userData] = UseGetLoggedUserData();
const userRole = localStorage.getItem("userRole");

// const [loggedUserData, setLoggedUserData] = useState(userData);
const [isUser, setIsUser] = useState();
const [isAdmin, setIsAdmin] = useState();

useEffect(() => {
  if (userRole !== null)
  {
    if (userRole === "admin")
    {
      setIsUser(false);
      setIsAdmin(true);
    } else {
      setIsUser(true);
      setIsAdmin(false);
    }

  } else {
    setIsUser(false);
    setIsAdmin(false);
  }
},[])

return [isUser , isAdmin , userData]

}

export default UseProtectedRoute;