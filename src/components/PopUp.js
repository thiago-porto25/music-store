import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 6.5rem;
  right: 10px;
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: 1000ms ease-in-out;
  background-color: #c6f6d5;
  border-radius: 10px;
  border: 1px solid #cccccc;

  @media (max-width: 550px) {
    top: 50%;
  }

  p {
    width: 80%;
    word-wrap: break-word;
  }

  i {
    color: green;
  }
`

export default function PopUp({ isVisible }) {
  return (
    <Container isVisible={isVisible}>
      <p>
        <i className="fas fa-check-circle"></i>
        {` `}
        Item successfully added to cart!
      </p>
    </Container>
  )
}
