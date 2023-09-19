import { Col } from "react-bootstrap";


const CategoryCard = ({background , img , title}) => {
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
        <img alt="zcv" src={img} className="categoty-card-img p-3" />
        <p className="categoty-card-text my-2 fs-6">{title}</p>
    </div>
</Col>
  )
}

export default CategoryCard;