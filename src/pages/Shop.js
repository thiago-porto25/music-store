import React from 'react'
import styled from 'styled-components'
import { Header, Footer, ShopItem } from '../components'
import productsData from '../data/productsData'

const Container = styled.div`
  background: linear-gradient(120deg, #999999, #eeeeee);
  height: fit-content;
`

const Inner = styled.div`
  margin: auto;
  width: 70%;
  height: fit-content;
  display: grid;
  justify-items: center;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 30px 0px 30px 0px;
`

export default function Shop({ cart }) {
  return (
    <Container>
      <Header cart={cart} />
      <Inner>
        {productsData.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </Inner>
      <Footer />
    </Container>
  )
}
