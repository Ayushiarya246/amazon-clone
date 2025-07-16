import React from 'react'
import styled from 'styled-components';
import logo from './assets/logo.png';
import flag from './assets/flag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Header({cartItems,user,signOut}) {

const getCount=()=>{
  let count=0;
  cartItems.forEach((item)=>{
    count+=item.product.quantity;
  })
  return count;
}

  return (
    <div>
      
      <Navbar>
        <Nav_logo>
        </Nav_logo>

        <NavbarAddress>
          <FontAwesomeIcon icon={faLocationDot} />
          <NavbarAddressLines>
              <Line1>Hello</Line1>
              <Line2>Select Your Address</Line2>
          </NavbarAddressLines>
        </NavbarAddress>

        <NavbarSearch>
            <NavbarSearchOption>
              <option>All</option>
            </NavbarSearchOption>
            <NavbarSearchInput type='text' placeholder='Search Amazon'>
            </NavbarSearchInput>
            <NavbarSearchIcon>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </NavbarSearchIcon>
        </NavbarSearch>
        <LanguageWrapper>
          <Flag/>
          <LangOption defaultValue="en"> 
  
          </LangOption>
        </LanguageWrapper>
        
        <NavbarAddressLines onClick={signOut}>
          <Line1>Hello,{user.name}</Line1>
          <Line2>Account & Lists</Line2>
        </NavbarAddressLines>

        <NavbarAddressLines>
            <Line1>Returns</Line1>
            <Line2>& Orders</Line2>
        </NavbarAddressLines>

        <Link to="/cart">
          <Cart>
            <p>{getCount()}</p>
            <FontAwesomeIcon icon={faCartShopping}/>
          </Cart>
        </Link>
      </Navbar>
    </div>
  )
}

const Navbar = styled.div`
    height:60px;
    background-color:black;
    color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-left:5px;
    padding-right:5px;
`;
const Nav_logo = styled.div`
  background-image: url(${() => logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height:100px;
  width: 110px;
  margin-top:5px;
  margin-right:15px;
`;
const NavbarAddress=styled.div`
    height:auto;
    width:fit-content;
    display:flex;
    align-items:center;
    margin-right:15px;
    &:hover {
      border:2px solid white;
    }
`;
const NavbarAddressLines=styled.div`
    display:flex;
    flex-direction:column;
    margin-left:5px;
    margin-right:15px;
    cursor:pointer;
`;
const Line1=styled.div`
    font-size:12px;
    line-height:14px;
    height:14px;
    font-weight:400;
`;
const Line2=styled.div`
    display:flex;
    font-size:14px;
    font-weight:700;
    line-height:15px;
`;
const NavbarSearch=styled.div`
    display:flex;
    flex-grow:1;
    margin-right:15px;
    &:focus-within{
      box-shadow:0 0 0 3px #F90;
      border-radius:4px;
      border:0;
    }
`;
const NavbarSearchOption=styled.select`
      height:40px;
      background-color:#f3f3f3;
      padding:0 10px;
      color:grey;
      font-weight:10px;
      border-top-left-radius:4px;
      border-bottom-left-radius:4px;
      border:none;
`;
const NavbarSearchInput=styled.input`
    height:40px;
    padding-left:10px;
    font-size:15px;
    flex-grow:1;

    &:focus{
      outline:none;
      border:none;
    }
`;
const NavbarSearchIcon=styled.div`
    background-color:#f8bd19;
    color:black;
    height:40px;
    width:45px;
    font-size:larger;
    border-top-right-radius:4px;
    border-bottom-right-radius:4px;
    display:flex;
    justify-content:center; 
    align-items:center;
`;
const Flag=styled.div`
    background-image: url(${() => flag});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height:60px;
    width:30px;
`;
const LanguageWrapper=styled.div`
  display:flex;
  gap:2px;
  margin-right:15px;
`;
const LangOption=styled.select`
    background-color:black;
    color:white;
    font-weight:bold;
    border:none;
    font-size:15px;
`;
const Cart=styled.div`
  height:40px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-size:25px;
  margin-bottom:5px;
  color:white;
  
  p{
    font-size:15px;
    color:orange;
    font-weight:bold;
  }
  text-decoration: none;
`;
export default Header

