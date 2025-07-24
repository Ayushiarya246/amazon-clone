import React, { useEffect, useState } from 'react'
import Header from './Header';
import styled from 'styled-components';
import Cart from './Cart';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {db,auth} from './firebase'
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Login from './Login';
import {signOut } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    return storedUser && storedUser.uid ? storedUser : null;
  });

  const[cartItems,setCartItems]=useState([]);

  const getCartItems=()=>{
    if (!user) return;
    try {
        const q = query(
          collection(db, 'cartItems'),
          where("userId", "==", user.uid)
        );

        const unsub = onSnapshot(q , (snapshot) => {
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
    const unsub = getCartItems();
    return () => unsub && unsub();
  },[user]);

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
          <Route path="/" element={<Home user={user}/>} />
          </Routes>
          </div>
        )
      }
    </Router>
  )
}

export default App




