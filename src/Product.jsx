import React from 'react'
import styled from 'styled-components';
import {db} from './firebase'
import { collection, addDoc} from "firebase/firestore";


function Product({title,price,rating,image,id,user}) {
    const addToCart=async()=>{
        if (!id || !user.uid) {
        console.error("❌ No product ID provided");
        return;
    }
       try {
        await addDoc(collection(db, 'cartItems'), {
        name: title,
        image: image,
        price: price,
        quantity: 1,
        userId: user.uid // ✅ associate with user
    });
    console.log("🛒 Added to cart for user:", user.uid);
  } catch (error) {
    console.error("❌ Failed to add to cart:", error);
  }
};

  return (
    <Container>
        <Title>
            {title}
        </Title>

        <Price>
            ${price}
        </Price>

        <Rating>
            {
                Array(rating)
                .fill()
                .map(rating=><span>⭐</span>)
            }
        </Rating>

        <Image src={image}/>

        <AddToCartButton
            onClick={()=>addToCart()
            }
        >
            ADD TO CART
        </AddToCartButton>

    </Container>
  )
}

const Container=styled.div`
    background:white;
    height:306px;
    width:420px;
    z-index:100;
    display:flex;
    padding:20px;
    flex:1;
    margin:10px;
    flex-direction:column;
    align-items:center;
`;
const Title=styled.div`
    margin-bottom:4px;
    font-size:large;
`;
const Price=styled.div`
    font-weight:bold;
    margin-bottom:4px;
    
`;
const Rating=styled.div`
    line-height:1;
    display:flex;
`;
const Image=styled.img`
    height:120px;
    width:200px;
    object-fit:contain;
    margin:10px;
`;
const AddToCartButton=styled.button`
    width:100px;
    height:30px;
    margin-bottom:-20px;
    background:#f0c14b;
    border:2px solid #a88734;
    border-radius:2px;
    cursor:pointer;
`;
export default Product;