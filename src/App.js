import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { globalStyle as GlobalStyle } from './globalStyles'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Shop from './pages/Shop'
import * as ROUTES from './constants/Routes'

firebase.initializeApp({
  apiKey: 'AIzaSyCS3EUTzby1m51aWdIZfA0BDT_XEGzpxuo',
  authDomain: 'music-store-9cab8.firebaseapp.com',
  projectId: 'music-store-9cab8',
  storageBucket: 'music-store-9cab8.appspot.com',
  messagingSenderId: '304103599756',
  appId: '1:304103599756:web:098671fd5d21fa7cf715a9',
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  const [cart, setCart] = useState([])

  function addUser() {
    firestore.collection('users').add({ test: 'test' })
  }

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
