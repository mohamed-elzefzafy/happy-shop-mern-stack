import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../components/user/UserSideBar";
import UserFavoriteProduct from "../../components/user/UserFavoriteProduct";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getProductWishList } from './../../redux/actions/wishListAction';

const UserFavoriteProductsPage = () => {



  return (
    <Container>
    <Row className="py-3">
    <Col sm="3" xs="2" md="2">
    <UserSideBar/>
      </Col>
  
      <Col sm="9" xs="10" md="10">
<UserFavoriteProduct />
      </Col>

    </Row>
    </Container>
  )
}

export default UserFavoriteProductsPage;