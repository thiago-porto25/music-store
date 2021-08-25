import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { globalStyle as GlobalStyle } from './globalStyles'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Shop from './pages/Shop'
import * as ROUTES from './constants/Routes'

function App() {
  const [cart, setCart] = useState([])
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home cart={cart} />
        </Route>
        <Route exact path={ROUTES.SHOP}>
          <Shop cart={cart} />
        </Route>
        <Route exact path={ROUTES.PRODUCT}>
          <Product cart={cart} setCart={setCart} />
        </Route>
        <Route exact path={ROUTES.CART}>
          <Cart cart={cart} setCart={setCart} />
        </Route>
        <Route exact path={ROUTES.NOT_FOUND}>
          <NotFound cart={cart} />
        </Route>
      </Switch>
    </>
  )
}

export default App
