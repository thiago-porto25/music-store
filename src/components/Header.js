import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/Routes'
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

  @media (max-width: 600px) {
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

  @media (max-width: 600px) {
    font-size: 30px;
    margin: 0;
    margin-top: 15px;
    margin-bottom: 30px;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;

  & * {
    margin-left: 40px;
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

  @media (max-width: 600px) {
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
  margin-left: 0;
  font-size: 20px;
  width: 40px;

  i {
    margin-left: 0;
    position: relative;
  }
`

export default function Header({ cart }) {
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
    </Container>
  )
}
