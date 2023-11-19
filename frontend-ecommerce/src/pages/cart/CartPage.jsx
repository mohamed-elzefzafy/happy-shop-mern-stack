import { Col, Container, Row } from "react-bootstrap"
import CartItem from "../../components/cart/CartItem"
import CartCheckout from "../../components/cart/CartCheckout"
import UseLoggedUserCartProducts from './../../customHooks/UseLoggedUserCartProducts';


const CartPage = () => {
  const [ allCartProducts , cartLength , totalCartPriceVar , totalCartAfterDiscount , couponName , cartId]= UseLoggedUserCartProducts();


  console.log(totalCartAfterDiscount);
  return (
    <Container style={{minHeight : "670px"}}>
    <Row>
    <div className="cart-title my-4">عربة التسوق</div>
    </Row>

    <Row className="d-flex justify-content-center">
  
      <Col xs="12" md="9">

{
  allCartProducts ? (
  allCartProducts?.cartItems?.map((product , index) =>
  <CartItem product={product} key={index}/>
  )

  ) : null
}


      </Col>

      <Col xs="6" md="3">
      <CartCheckout allCartProducts={allCartProducts} totalCartPrice={totalCartPriceVar} totalCartAfterDiscount={totalCartAfterDiscount} couponName={couponName}/>
        </Col>
    </Row>
    </Container>
  )
}

export default CartPage