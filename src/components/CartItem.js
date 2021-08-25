import React, { useRef } from 'react'
import styled from 'styled-components'
import productsData from '../data/productsData'

const Container = styled.section`
  background: linear-gradient(120deg, #999999, #eeeeee);
  display: flex;
  width: 100%;
  height: 150px;
  color: black;
  border: 1.5px solid #777777;
  position: relative;
  margin-bottom: 10px;
  border-radius: 5px;

  @media (max-width: 550px) {
    height: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const DeleteItemContainer = styled.div`
  position: absolute;
  top: 10%;
  right: 1%;

  @media (max-width: 550px) {
    top: 15px;
    right: 10px;
  }

  button {
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;

    &:hover > i {
      transform: scale(1.1);
      color: #c6382d;
    }

    i {
      font-size: 20px;
      color: black;
      transition: 200ms ease-in-out;
    }
  }
`

const ImageContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 5px 0 0 5px;

  @media (max-width: 550px) {
    width: 100%;
    border-radius: 5px 5px 0 0;

    img {
      height: 90%;
      width: 150px;
    }
  }

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
  }
`

const TextContainer = styled.div`
  flex-grow: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 15px;

  @media (max-width: 550px) {
    width: 100%;
  }

  h1 {
    width: 85%;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 700px) {
      width: 80%;
      font-size: 20px;
      height: 50px;
    }

    @media (max-width: 550px) {
      white-space: nowrap;
    }
  }

  p {
    font-size: 18px;
  }
`

const QuantityContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10%;
  right: 1%;

  input {
    width: 3rem;
    height: 2rem;
    padding-left: 10px;
    border: 1px solid #aaaaaa;
    border-right: none !important;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    font-size: 12px;
    color: #111111;
    width: 2rem;
    height: 34px;
    padding: 1%;
    outline: none;
    cursor: pointer;
    border: 1px solid #aaaaaa;

    &:hover {
      background-color: #cccccc;
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`

const Plus = styled.button`
  border-left: 1px solid #dddddd !important;
`

const Minus = styled.button`
  border-left: none !important;
  border-right: none !important;
`

export default function CartItem({ itemInfo, cart, setCart }) {
  const inputQuantity = useRef(null)

  const handleChange = ({ target }) => {
    const newCart = cart.map((item) => {
      if (item.id === itemInfo.id) {
        item.quantity = parseInt(target.value, 10)
        return item
      } else return item
    })
    setCart(newCart)
  }

  const handleDelete = () => {
    const newCart = cart.filter((item) => item.id !== itemInfo.id)
    setCart(newCart)
  }

  return (
    <Container>
      <ImageContainer>
        <img
          src={`./images/products/${itemInfo.id}.jpg`}
          alt={productsData[itemInfo.id].name}
        />
      </ImageContainer>
      <TextContainer>
        <h1>{productsData[itemInfo.id].name}</h1>
        <p>
          $
          {(
            Math.round(
              productsData[itemInfo.id].price * itemInfo.quantity * 100
            ) / 100
          ).toFixed(2)}
        </p>
      </TextContainer>
      <QuantityContainer>
        <input
          ref={inputQuantity}
          value={itemInfo.quantity}
          type="number"
          min="1"
          max="10"
          onChange={handleChange}
        />
        <Minus
          disabled={inputQuantity.current && inputQuantity.current.value <= 1}
          onClick={() => {
            if (inputQuantity.current.value <= 1) return
            inputQuantity.current.value -= 1
            handleChange({ target: inputQuantity.current })
          }}
        >
          <i className="fas fa-minus"></i>
        </Minus>
        <Plus
          disabled={inputQuantity.current && inputQuantity.current.value >= 10}
          onClick={() => {
            if (inputQuantity.current.value >= 10) return
            inputQuantity.current.value -= -1
            handleChange({ target: inputQuantity.current })
          }}
        >
          <i className="fas fa-plus"></i>
        </Plus>
      </QuantityContainer>
      <DeleteItemContainer>
        <button onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </DeleteItemContainer>
    </Container>
  )
}
