/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header, Footer, PopUp } from '../components'
import { useRouteMatch, useHistory } from 'react-router'
import productsData from '../data/productsData'
import * as ROUTES from '../constants/Routes'

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(120deg, #999999, #eeeeee);
  min-height: 100vh;
  height: fit-content;
  position: relative;
`

const Frame = styled.div`
  display: flex;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`

const Inner = styled.div`
  border: 1.5px solid #aaaaaa;
  border-radius: 10px;
  margin: auto;
  width: 70%;
  background-color: #111111;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 950px) {
    width: 95%;
  }
  @media (max-width: 550px) {
    width: 85%;
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0px 0px 10px;
  border: 1.5px solid #aaaaaa;
  background-color: white;
  width: 350px;
  overflow: hidden;
  padding: 10px 0px 10px 0px;

  img {
    width: auto;
    height: 350px;
    object-fit: cover;
    overflow: hidden;
  }

  @media (max-width: 550px) {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 70%;
  color: #dddddd;

  @media (max-width: 550px) {
    width: 100%;
  }

  h1 {
    width: 80%;
    padding-left: 10%;
    word-wrap: break-word;
  }

  h3 {
    width: 80%;
    padding-left: 10%;
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    text-align: justify;
    width: 80%;
    padding-left: 10%;
  }

  button {
    margin-bottom: 20px;
    background-color: #e85a4f;
    border: none;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    width: 11rem;
    height: 3.5rem;
    font-size: 25px;
    font-weight: bold;
    transition: 300ms ease-in-out;

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    i {
      transition: transform 200ms cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    &:hover {
      background-color: #c63a2d;
      color: white;
    }

    &:hover > i {
      transform: translateX(10px);
    }

    &:last-of-type {
      background: linear-gradient(120deg, #999999, #eeeeee);

      &:hover {
        background: linear-gradient(120deg, #222222, #777777);
      }
    }
  }
`

export default function Product({ cart, setCart }) {
  const [showPopUp, setShowPopUp] = useState(false)
  const [isCartFull, setIsCartFull] = useState(false)
  const {
    params: { id },
  } = useRouteMatch()
  const history = useHistory()

  const handleAddToCart = () => {
    setShowPopUp(true)

    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity += 1
        return item
      } else return item
    })
    const isOldItem = cart.some((item) => item.id === id)
    if (cart[0] && isOldItem) setCart(newCart)
    else setCart([...cart, { id, quantity: 1 }])

    setTimeout(() => setShowPopUp(false), 1000)
  }

  const handleGoToCart = () => {
    history.push(ROUTES.CART)
  }

  useEffect(() => {
    const checkQuantity = () => {
      let bool = false
      cart.forEach((item) => {
        if (item.id === id && item.quantity >= 10) {
          bool = true
        }
      })
      return bool
    }

    if (checkQuantity() || cart.length >= 99) {
      setIsCartFull(true)
    }
  }, [cart])

  return (
    <Container>
      <Header cart={cart} />
      <Inner>
        <PopUp isVisible={showPopUp} />
        <Frame>
          <ImageContainer>
            <img src={`../images/products/${id}.jpg`} alt={productsData[id]} />
          </ImageContainer>
          <TextContainer>
            <h1>{productsData[id].name}</h1>
            <h3>
              ${(Math.round(productsData[id].price * 100) / 100).toFixed(2)}
            </h3>
            <p>{productsData[id].description}</p>
            <ButtonsContainer>
              <button disabled={isCartFull} onClick={handleAddToCart}>
                {isCartFull ? (
                  <>
                    Full <i className="fas fa-shopping-cart"></i>
                  </>
                ) : (
                  <>
                    Add to <i className="fas fa-shopping-cart"></i>
                  </>
                )}
              </button>
              <button onClick={handleGoToCart}>
                Go to <i className="fas fa-shopping-cart"></i>
              </button>
            </ButtonsContainer>
          </TextContainer>
        </Frame>
      </Inner>
      <Footer />
    </Container>
  )
}
