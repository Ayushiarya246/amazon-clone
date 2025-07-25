import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({cartItems}) {
  
  const getTotalPrice=()=>{
    let total=0;
    cartItems.forEach((item)=>{
      total+=(item.product.price * item.product.quantity)
    })
    return total;
  }

  const getCount=()=>{
  let count=0;
  cartItems.forEach((item)=>{
    count+=item.product.quantity;
  })
  return count;
}

  return (
    <Container>
        <CartItems cartItems={cartItems}/>
        <CartTotal getCount={getCount} getTotalPrice={getTotalPrice}/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 18px 0 18px;
  align-items: flex-start;

  @media (min-width: 1025px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
export default Cart