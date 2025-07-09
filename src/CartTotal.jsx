import React from 'react'
import styled from 'styled-components'
import { NumericFormat } from 'react-number-format'; // ✅ Correct for v5+


function CartTotal({getCount,getTotalPrice}) {


  return (
    <Container>
      <Total>Total({getCount()} items):
        <NumericFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      </Total>
      <CheckoutButton>Proceed To Pay</CheckoutButton>
    </Container>
  )
}

const Container=styled.div`
  flex:0.3;
  height:200px;
  box-shadow:5px 5px #888888;
  padding:20px;
`;
const Total=styled.h2`
  margin-bottom:16px;
`;
const CheckoutButton=styled.div`
  background-color:#f0c14b;
  width:100%;
  padding:4px 8px;
  border:2px solid black;
  border-radius:4px;
  margin-top:5px;
  cursor:pointer;
  font-size:16px;
  &:hover{
    background-color:#ddb347;
  }
`;
export default CartTotal