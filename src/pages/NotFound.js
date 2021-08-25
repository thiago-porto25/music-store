import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Header } from '../components'

const Container = styled.section`
  background: linear-gradient(120deg, #999999, #ffffff);
  overflow: hidden;
`

const Inner = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  transform: translateY(-10%);
  z-index: -1;
  pointer-events: none;

  i {
    font-size: 80px;
    margin-bottom: 20px;
  }
`

const Text = styled.h1`
  text-align: center;
  word-wrap: break-word;
  margin: 0;
  font-size: 45px;

  @media (max-width: 700px) {
    font-size: 40px;
  }
`

export default function NotFound({ cart }) {
  useEffect(() => {
    const html = document.querySelector('html')
    html.style.overflow = 'hidden'

    return () => {
      html.style.overflow = 'auto'
    }
  }, [])
  return (
    <Container>
      <Header cart={cart} />
      <Inner>
        <i className="far fa-question-circle"></i>
        <Text>Oops... Page not found!</Text>
      </Inner>
    </Container>
  )
}
