import React from 'react'
import { Container } from 'react-bootstrap'
import ShowPaymentMethod from '../../components/checkout/ShowPaymentMethod'

const ChoosePayMethoudPage = () => {
  return (
  <Container style={{minHeight : "670px"}}>
  <ShowPaymentMethod/>
  </Container>
  )
}

export default ChoosePayMethoudPage