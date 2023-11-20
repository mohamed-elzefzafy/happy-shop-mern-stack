import { useEffect } from 'react';
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsersAction } from '../../redux/actions/userAction';

const AdminAllUsers = () => {
  const dispatch = useDispatch();

  const getAllUsers =async () => {
await dispatch(getAllUsersAction())
  }
  useEffect(() => {
getAllUsers();
  },[])

  const usersRes = useSelector((state) => state.allUsers.users);

  if (usersRes)


  
  return (
    <Table striped bordered hover size="sm" responsive className='text-center'>
      <thead >
        <tr >
          <th className="col-1">م</th>
          <th className="col-1">الإسم</th>
          <th className="col-3">الإميل</th>
          <th className="col-2">الصوره الشخصيه</th>
          <th className="col-3"> تعديل / حذف</th>
        </tr>
      </thead>
      <tbody>
      {
usersRes?.data ? (
usersRes?.data.map((user , index) => 

  <tr>
          <td></td>
          <td>{user?.name}</td>
          <td>{user?.email}</td>
          <td><img src={user?.profileImage} alt="user" width={"50px"}/> </td>
          <td></td>
        
        
        </tr>
)
) :null
      }
      
  

      </tbody>
    </Table>
  )
}

export default AdminAllUsers;