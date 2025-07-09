import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem';
function CartItems({cartItems}) {
  return (
    <Container>
      <h1>Shopping Cart</h1>
      <hr/>
      <ItemsContainer>
        {
          cartItems.map((item)=>(
            <CartItem 
              id={item.id}
              item={item.product}
            />
          ))
        }
        
      </ItemsContainer>
    </Container>
  )
}

const Container=styled.div`
  flex:0.8;
  margin-right:80px;
  background-color:white;
  box-shadow:10px 5px #888888;
  padding:20px;
`;
const ItemsContainer=styled.div`
  height:80%;
`;
export default CartItems