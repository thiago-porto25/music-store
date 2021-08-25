import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 30%;
  min-width: 250px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
`

const Anchor = styled.a`
  margin-top: 20px;
  color: #e85a4f;
  text-decoration: none;
  font-size: 40px;
  transition: 200ms ease-in-out;

  &:hover {
    color: #d8c3a5;
  }
`

export default function Contact(props) {
  return (
    <Container>
      <Anchor href="https://github.com/thiago-porto25">
        <i className="fab fa-github"></i>
      </Anchor>
      <Anchor href="https://github.com/thiago-porto25">
        <i className="fab fa-facebook"></i>
      </Anchor>
      <Anchor href="mailto:thiago_porto25@hotmail.com">
        <i className="fas fa-envelope"></i>
      </Anchor>
      <Anchor href="https://github.com/thiago-porto25">
        <i className="fab fa-twitter"></i>
      </Anchor>
    </Container>
  )
}
