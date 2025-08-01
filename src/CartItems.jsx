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

const Container = styled.div`
  width: 100%; 
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 10px 5px #888888;
  padding: 20px;

  @media (min-width: 1025px) {
    width: 70%;
    margin-right: 20px;
    margin-bottom: 0;
  }
  
`;
const ItemsContainer=styled.div`
  height:80%;
`;
export default CartItems