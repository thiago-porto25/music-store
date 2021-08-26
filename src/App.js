import React, { useEffect, useState } from 'react'
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
import { appContext as AppContext } from './context/appContext'

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
  const [user, setUser] = useState(null)

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
    const userData = await getUser(auth.currentUser)

    if (!userData) {
      const userInfo = {
        displayName: auth.currentUser.displayName,
        photoUrl: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
        cart: cart,
      }
      await addNewUser(userInfo)
      const { docId } = await getUser(auth.currentUser)
      setUser({ docId, ...userInfo })
    } else {
      setUser(userData)
      setCart(userData.cart)
    }
  }

  const signOut = () => {
    setCart([])
    setUser(null)
    auth.signOut()
  }

  const getUser = async (currentUser) => {
    let data

    await firestore
      .collection('users')
      .where('uid', '==', currentUser.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(
          (doc) => (data = { docId: doc.id, ...doc.data() })
        )
      })
      .catch((error) => console.log(`Error catching documents: ${error}`))

    return data
  }

  const addNewUser = async (userInfo) => {
    firestore.collection('users').add(userInfo)
  }

  useEffect(() => {
    const updateCartInDb = async () => {
      firestore.collection('users').doc(user.docId).update({ cart: cart })
    }
    if (user) updateCartInDb()
  }, [cart])

  return (
    <AppContext.Provider value={{ user, signInWithGoogle, signOut }}>
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
    </AppContext.Provider>
  )
}

export default App
