import React from 'react'
import styled from 'styled-components';
import {db} from './firebase'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

function Product({title,price,rating,image,id}) {
    const addToCart=async()=>{
        if (!id) {
        console.error("❌ No product ID provided");
        return;
    }
        const cartItemRef = doc(db, "cartItems", id);

        try {
            const docSnap = await getDoc(cartItemRef);

            if (docSnap.exists()) {
                await updateDoc(cartItemRef, {
                    quantity: docSnap.data().quantity + 1
                });
            } else {
                await setDoc(cartItemRef, {
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                });
            }
        } catch (err) {
            console.error("🔥 Firestore error:", err);
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
export default Product