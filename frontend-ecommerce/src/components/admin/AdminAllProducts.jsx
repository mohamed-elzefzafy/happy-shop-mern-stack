import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";
import Pagination from "../utilities/Pagination";


const AdminAllProducts = () => {
  return (
    <div >
    <div className="admin-content-text">إدارة جميع المنتجات</div>
    <Row className="justify-content-start">
    <AdminAllProductsCard/>
    <AdminAllProductsCard/>
    <AdminAllProductsCard/>
    <AdminAllProductsCard/>
    <AdminAllProductsCard/>
    </Row>

    </div>
  )
}

export default AdminAllProducts;