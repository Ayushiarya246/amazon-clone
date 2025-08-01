import React, { useState } from 'react'
import styled from 'styled-components'
import { doc, updateDoc,deleteDoc} from "firebase/firestore";
import { db } from "./firebase";

const CartItem=({id,item}) =>{

    const[quantity,Setquantity]=useState(item.quantity || 1);
    
    const del = async () => {
    if (id) {
        const cartItemRef = doc(db, "cartItems", id);
        try {
            await deleteDoc(cartItemRef);
            console.log(`🗑️ Deleted item ${id} from Firestore`);
        } catch (err) {
            console.error("❌ Failed to delete item from Firestore:", err);
        }
    }
    };
    const onChangeHandler=async(e)=>{
        const newQuantity=Number(e.target.value);
        Setquantity(newQuantity);
        if(id){
            const cartItemRef=doc(db,"cartItems",id);
            try{
                await updateDoc(cartItemRef,{
                    quantity:newQuantity
                });
            }
            catch(err){
                console.error("❌ Failed to update quantity in Firestore:", err);
            }
        }
    };
    
    let options=[]
    for(let i=1;i<Math.max(item.quantity+1,20);i++){
        options.push(<option key={i} value={i}> Qty : {i}</option>)
    }
  return (
    <Container>
        <ImageContainer>
            <img src={item.image}/>
        </ImageContainer>

        <CartItemInfo>
            <InfoTop>
                <h2>{item.name}</h2>
            </InfoTop>
            <InfoBottom>
                <Quantity>
                <select
                   value={quantity} 
                   onChange={onChangeHandler}
                >
                    {options}
                </select>
                </Quantity>
                <Delete 
                    onClick={del}
                >
                    Delete</Delete>
            </InfoBottom>
        </CartItemInfo>
        <Price>${item.price}</Price>
    </Container>
  )
}

const Container=styled.div`
    padding-top:12px;
    padding-bottom:12px;
    display:flex;
    @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid #ddd;
    padding: 16px 0;
  }
`;

const ImageContainer = styled.div`
  height: 180px;
  width: 180px;
  flex-shrink: 0;
  margin-right: 16px;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 140px;         /* ✅ Set a fixed smaller width */
    height: 140px;        /* ✅ Maintain aspect ratio */
    margin-right: 0;
    margin-bottom: 10px;
    align-self: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
  width: 100%;

  @media (max-width: 767px) {
    margin-top: 10px;
  }
`;

const InfoTop=styled.div`
    color:#007185;
    h2{
        font-size:18px;
    }
`;

const InfoBottom = styled.div`
  display: flex;
  margin-top: 4px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const Quantity=styled.div`
    select{
        border-radius:7px;
        background-color:#F0F2F2;
        padding:8px;

        &:focus{
            outline:none;
        }
    }
`;
const Delete = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;

  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;

  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 8px;
  }
`;
export default CartItem