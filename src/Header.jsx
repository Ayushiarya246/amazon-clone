import React from 'react'
import styled from 'styled-components';
import logo from './assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Header({ cartItems, user, signOut }) {
  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });
    return count;
  };

  return (
    <div>
      <Navbar>
        <TopRow>
          <Nav_logo />
          <NavbarAddress>
            <FontAwesomeIcon icon={faLocationDot} />
            <NavbarAddressLines>
              <Line1>Hello</Line1>
              <Line2>Select Your Address</Line2>
            </NavbarAddressLines>
          </NavbarAddress>
        </TopRow>

        <NavbarSearch>
          <NavbarSearchOption>
            <option>All</option>
          </NavbarSearchOption>
          <NavbarSearchInput type="text" placeholder="Search Amazon" />
          <NavbarSearchIcon>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </NavbarSearchIcon>
        </NavbarSearch>

        <BottomRow>
          <NavbarAddressLines onClick={signOut}>
            <Line1>Hello, {user.name}</Line1>
            <Line2>Sign Out</Line2>
          </NavbarAddressLines>

          <NavbarAddressLines>
            <Line1>Returns</Line1>
            <Line2>& Orders</Line2>
          </NavbarAddressLines>

          <Link to="/cart">
            <Cart>
              <p>{getCount()}</p>
              <FontAwesomeIcon icon={faCartShopping} />
            </Cart>
          </Link>
        </BottomRow>
      </Navbar>
    </div>
  );
}

const Navbar = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 0 15px;
  height: 75px;
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    height: auto;
    padding: 10px;
    gap: 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 8px;
    padding: 0 10px;
    height: auto;
    justify-content: space-around;
    flex-wrap: wrap; /* allow wrapping if cramped */
  }
`;


const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap:nowrap;
  @media (max-width: 767px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

`;

const Nav_logo = styled.div`
  background-image: url(${() => logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  width: 110px;
  cursor: pointer;

  &:hover {
    border: 2px solid white;
    padding: 4px;
    border-radius: 4px;
  }
`;

const NavbarAddress = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const NavbarAddressLines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 8px;
  cursor: pointer;
  min-width: 80px;

  &:hover {
    border: 2px solid white;
    padding: 4px;
    border-radius: 4px;
  }

  @media (max-width: 767px) {
    align-items: center;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 0 5px;
    min-width: 90px;
  }
`;



const Line1 = styled.div`
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;

const Line2 = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 15px;
`;

const NavbarSearch = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 600px;
  margin: 0 20px;

  &:focus-within {
    box-shadow: 0 0 0 3px #F90;
    border-radius: 4px;
    border: 0;
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
    max-width: 95%;
    justify-content: center;
    margin: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-grow: 1;
    max-width: 80%;
    margin: 0 auto;
  }
`;




const NavbarSearchOption = styled.select`
  height: 40px;
  background-color: #f3f3f3;
  padding: 0 10px;
  color: grey;
  font-weight: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: none;
`;

const NavbarSearchInput = styled.input`
  height: 40px;
  padding-left: 10px;
  font-size: 15px;
  flex-grow: 1;

  &:focus {
    outline: none;
    border: none;
  }
`;

const NavbarSearchIcon = styled.div`
  background-color: #f8bd19;
  color: black;
  height: 40px;
  width: 45px;
  font-size: larger;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cart = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin: 0 10px;
  color: white;

  p {
    font-size: 14px;
    color: orange;
    font-weight: bold;
  }

  text-decoration: none;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
    margin: 0 6px;
  }
`;


export default Header

