import { Col, Container, Row } from "react-bootstrap";
import UseAllCategoryPageHook from './../../customHooks/category/UseAllCategoryPageHook';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const CategoryHeader = () => {
  const [category , loading , pageCount , getPage] = UseAllCategoryPageHook();
const [categoryItems, setCategoryItems] = useState([]);

useEffect(() => {
if (category)
{
  setCategoryItems(category?.data)
}
},[category])
  
  return (
    <div className="cat-header">
    <Container>
      <Row>
        <Col className="d-flex justify-content-start py-2 flex-wrap">
        {
          categoryItems ? (
            categoryItems?.map((category , index) =>
          <Link to={`/product/category/${category?._id}`} key={index} style={{textDecoration : "none"}}>
          <div className="cat-text-header " >{category?.name}</div>
          </Link>
            )
          ): (null)
        }
      
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default CategoryHeader;