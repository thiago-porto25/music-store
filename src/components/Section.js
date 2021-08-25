import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
`

export default function Section({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
