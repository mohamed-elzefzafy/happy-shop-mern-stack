import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


const CategoryCard = ({background , img , title , id}) => {
  return (
    <Col
    xs="6"
    sm="6"
    md="4"
    lg="2"
    className="my-4 d-flex justify-content-around ">
    <div className="allCard mb-3 ">
        <div
            className="categoty-card "
            style={{ backgroundColor: `${background}` }}></div>{" "}
      <Link to={`/product/category/${id}`} style={{ textDecoration: 'none' }}>
      <img alt="zcv" src={img} className="categoty-card-img p-3" />
        <p className="categoty-card-text my-2 fs-6" >{title}</p>
      </Link>
    </div>
</Col>
  )
}

export default CategoryCard;