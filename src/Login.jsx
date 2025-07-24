import React from 'react'
import styled from 'styled-components'
import logo from './assets/logo.png'
import{auth , provider} from './firebase'
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Login({setUser}) {

  const navigate = useNavigate();   

  const signIn=async()=>{
    try{
        const result=await signInWithPopup(auth, provider);
        let user=result.user;
        let newUser={
            name:user.displayName,
            email:user.email,
            photo:user.photoURL,
            uid:user.uid
        }
        localStorage.setItem('user',JSON.stringify(newUser)) //only stores strings
        setUser(newUser)
        navigate('/');
    }catch(error){
        alert(error.message);
    }
};

  return (
    <Container>
        <Content>
            <AmazonLogo src={logo}/>
            <h1>Sign into Amazon</h1>
            <LoginButton
                onClick={signIn}
            >
                Sign in with Google
            </LoginButton>   
        </Content>
    </Container>
  )
}

const Container=styled.div`
    width:100%;
    height:100vh;
    background-color: #f8f8f8;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Content=styled.div`
    padding:100px;
    background-color:white;
    border-radius:5px;
    box-shadow:0 1px 3px gray;
    text-align:center;
`;

const AmazonLogo=styled.img`
    background-color:black;
    height:100px;
    width:250px;
    margin-bottom:40px;
`;

const LoginButton=styled.button`
    margin-top:50px;
    background-color:#f0c14b;
    border-radius:4px;
    border:2px solid #a88734;
    font-size:16px;
    padding:4px 8px 4px 8px;
    cursor:pointer;
`;
export default Login