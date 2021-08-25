import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  background-color: black;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const Anchor = styled.a`
  color: #e85a4f;
  pointer-events: all;
  transition: 200ms ease-in-out;

  &:hover {
    color: #d8c3a5;
  }
`

const Text = styled.p`
  font-style: italic;
  pointer-events: none;
  color: #e85a4f;
  word-wrap: break-word;
  text-align: center;
`

export default function Footer({ children }) {
  return (
    <Container>
      {children}
      <Text>
        Website create by{' '}
        <Anchor href="https://github.com/thiago-porto25">Thiago Porto.</Anchor>{' '}
        Fonts by <Anchor href="https://fontawesome.com/">FontAwesome.</Anchor>
      </Text>
    </Container>
  )
}
