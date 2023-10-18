import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";



const AdminAllProducts = ({products}) => {
  return (
    <div >
    <div className="admin-content-text">إدارة جميع المنتجات</div>
    <Row className="justify-content-start">
    {
      products? (
        products?.map((product , index) => 
        <AdminAllProductsCard key={index} product={product}/>
        )
      ) :null
    }
  

    </Row>

    </div>
  )
}

export default AdminAllProducts;