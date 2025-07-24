import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import {db} from './firebase'
import { collection, onSnapshot } from "firebase/firestore";
function Home({user}) {
  const[products,setProducts]=useState([]);
  const getProducts=()=>{
   try {
    const unsub = onSnapshot(collection(db, 'product'), (snapshot) => {
        let tempProducts=[]
        tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }));
      setProducts(tempProducts);
    });
    return unsub;
  } catch (err) {
    console.error("❌ Error fetching products:", err);
  }
  }

  useEffect(()=>{
    getProducts();
  },[])
  return (
    <Container>
        <Banner/>
         
        <Content>
            {
                products.map((data)=>(
                    <Product
                        title={data.product.name}
                        price={data.product.price}
                        rating={data.product.rating}
                        image={data.product.image}
                        id={data.id}
                        user={user}
                    />
                ))
            }

        </Content>
    </Container>
  )
}
const Container=styled.div`
    max-width:1500px;
`;
const Banner=styled.div`
    background-image:url('https://i.imgur.com/SYHeuYM.jpg');
    min-height:600px;
    background-position:center;
    background-size:cover;
    z-index:1;
    mask-image:linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));
`;
const Content=styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    margin-top:-350px;
    z-index:100;
`;
export default Home