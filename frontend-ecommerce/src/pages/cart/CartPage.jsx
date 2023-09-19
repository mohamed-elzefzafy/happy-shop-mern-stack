import { Col, Container, Row } from "react-bootstrap"
import CartItem from "../../components/cart/CartItem"
import CartCheckout from "../../components/cart/CartCheckout"


const CartPage = () => {
  return (
    <Container style={{minHeight : "670px"}}>
    <Row>
    <div className="cart-title my-4">عربة التسوق</div>
    </Row>

    <Row className="d-flex justify-content-center">
  
      <Col xs="12" md="9">
<CartItem/>
<CartItem/>

      </Col>

      <Col xs="6" md="3">
      <CartCheckout/>
        </Col>
    </Row>
    </Container>
  )
}

export default CartPage