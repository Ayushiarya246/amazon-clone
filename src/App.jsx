import React, { useEffect, useState } from 'react'
import Header from './Header';
import styled from 'styled-components';
import Cart from './Cart';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {db} from './firebase'
import { collection, onSnapshot } from "firebase/firestore";
function App() {
  const[cartItems,setCartItems]=useState([]);

  const getCartItems=()=>{
    try {
        const unsub = onSnapshot(collection(db, 'cartItems'), (snapshot) => {
            let tempProducts=[]
            tempProducts = snapshot.docs.map((doc) => ({
            id: doc.id,
            product: doc.data()
          }));
          setCartItems(tempProducts);
        });
        return unsub;
      } catch (err) {
        console.error("❌ Error fetching products:", err);
      }
      }
    

  useEffect(()=>{
    getCartItems();
  },[])
  return (
    <Router>
    <div>
      <Header cartItems={cartItems}/>

       <Routes>
          <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      
    </div>
    </Router>
  )
}

export default App




