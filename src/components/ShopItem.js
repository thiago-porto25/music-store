import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/Routes'

const Button = styled.button`
  width: 9rem;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: #e85a4f;
  font-size: 19px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    background-color: #e85a4f;
    color: black;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  width: 250px;
  margin: 20px;
  border-radius: 5px;
  border: 1px solid #bbbbbb;
`

const InfoContainer = styled.div`
  width: 80%;
  h3 {
    text-align: center;
    word-wrap: break-word;
  }
`

const ImageContainer = styled.div`
  width: 200px;
  height: 220px;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #aaaaaa;

  img {
    margin-top: 10px;
    margin-bottom: 10px;
    width: auto;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
  }
`

export default function ShopItem({ item }) {
  return (
    <Container>
      <ImageContainer>
        <img src={`./images/products/${item.id}.jpg`} alt={item.name} />
      </ImageContainer>
      <InfoContainer>
        <h3>{item.name}</h3>
        <p>${(Math.round(item.price * 100) / 100).toFixed(2)}</p>
      </InfoContainer>
      <Link to={`${ROUTES.SHOP}/${item.id}`}>
        <Button>Buy</Button>
      </Link>
    </Container>
  )
}
