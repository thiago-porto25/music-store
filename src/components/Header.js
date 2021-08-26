import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/Routes'
import { appContext } from '../context/appContext'
import styled from 'styled-components'

const CartCounter = styled.div`
  z-index: 10;
  background-color: #e85a4f;
  font-size: 12px;
  color: black !important;
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  text-align: center;
  transform: translateX(-20px);
  padding-top: 3px !important;
  padding-right: 2.5px !important;
  padding-left: 1.5px !important;
`

const Container = styled.nav`
  background-color: black;
  height: 6rem;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    height: fit-content;
  }
`
const Logo = styled.h1`
  font-size: 35px;
  margin-left: 10%;
  color: #d8c3a5;
  pointer-events: none;

  span {
    color: #e85a4f;
  }

  @media (max-width: 700px) {
    font-size: 30px;
    margin: 0;
    margin-top: 15px;
    margin-bottom: 30px;
  }
`

const List = styled.ul`
  width: 30%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 12%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;

  & * {
    margin-left: 10%;
    margin-right: 10%;
    text-decoration: none;
    list-style: none;
    color: #e85a4f;
    transition: 200ms ease-in-out;

    &:hover {
      color: #d8c3a5;
    }

    &:hover > ${CartCounter} {
      background-color: #d8c3a5;
    }
  }

  @media (max-width: 900px) {
    margin-right: 40px;
  }
  @media (max-width: 700px) {
    margin-right: 0;
    padding: 0;
    list-style-type: none;
    justify-content: space-evenly;
    position: relative;
    margin-bottom: 20px;
    width: 100%;
    right: 0;

    * {
      padding: 0;
      margin: 0;
    }
  }
`

const ListItem = styled.li`
  font-size: 20px;
  width: 3.5rem;

  i {
    margin-left: 0;
    position: relative;
  }
`

const SignButton = styled.button`
  transition: 200ms ease-in-out;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 2rem;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-1rem);
  right: 20px;
  background-color: #e85a4f;
  color: black;

  &:hover {
    background-color: #d8c3a5;
  }

  p {
    font-weight: bold;
    display: initial;
    margin: 0;
    width: fit-content;
  }

  i {
    transition: 200ms ease-in-out;
    display: none;
  }

  @media (max-width: 700px) {
    right: 10px;
    top: 10px;
    transform: none;
    background-color: transparent;
    width: 2.5rem;

    &:hover {
      background-color: initial;
      i {
        transform: scale(1.1);
        color: #d8c3a5;
      }
    }
    p {
      display: none;
    }
    i {
      font-size: 30px;
      display: initial;
      color: #e85a4f;
    }
  }
`

const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-20px);

  @media (max-width: 700px) {
    width: 35px;
    height: 35px;
    top: 10px;
    transform: none;
  }
`

export default function Header({ cart }) {
  const { user, signInWithGoogle, signOut } = useContext(appContext)

  const displayQuantity = () => {
    let quantity = 0
    cart.forEach((item) => {
      if (item.quantity) quantity += item.quantity
    })
    return quantity
  }

  return (
    <Container>
      <Logo>
        Music <span>Store</span>
      </Logo>
      <List>
        <Link to={ROUTES.HOME}>
          <ListItem>Home</ListItem>
        </Link>
        <Link to={ROUTES.SHOP}>
          <ListItem>Shop</ListItem>
        </Link>
        <Link to={ROUTES.CART}>
          <ListItem>
            <i className="fas fa-shopping-cart">
              <CartCounter>{displayQuantity()}</CartCounter>
            </i>
          </ListItem>
        </Link>
      </List>
      {!user ? (
        <SignButton onClick={signInWithGoogle}>
          <p>Sign In</p>
          <i className="fas fa-sign-in-alt"></i>
        </SignButton>
      ) : (
        <>
          <ProfilePicture src={user.photoURL} alt={user.displayName} />
          <SignButton onClick={signOut}>
            <p>Sign Out</p>
            <i className="fas fa-sign-out-alt"></i>
          </SignButton>
        </>
      )}
    </Container>
  )
}
