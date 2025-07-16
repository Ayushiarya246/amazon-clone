import React, { useEffect, useState } from 'react'
import Header from './Header';
import styled from 'styled-components';
import Cart from './Cart';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {db,auth} from './firebase'
import { collection, onSnapshot } from "firebase/firestore";
import Login from './Login';
import {signOut } from 'firebase/auth';

function App() {
  const[user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
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

  const signOut=async()=>{
    try{
        await auth.signOut();
        localStorage.removeItem('user')
        setUser(null);
    }catch(error){
      alert(error);
    }
  }

  return (
    <Router>
      {
        !user?(
          <Login setUser={setUser}/>
        ):(
          <div>
          <Header cartItems={cartItems} user={user} signOut={signOut}/>

          <Routes>
          <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
          <Route path="/" element={<Home />} />
          </Routes>
          </div>
        )
      }
    </Router>
  )
}

export default App




