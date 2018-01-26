import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ProductsContainer from '../pages/products/ProductsContainer'
import ViewSingleProductContainer from '../pages/products/ViewSingleProductContainer'
import SignUpContainer from '../pages/authentication/SignUpContainer'
import LogInContainer from '../pages/authentication/LogInContainer'
import AddProductContainer from '../pages/products/AddProductContainer'
import CartContainer from '../pages/products/CartContainer'

const styles = {
  container: {
    display: 'flex',
    padding: '100',
    backgroundColor: '#ececec',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")'
  }
}

const Main = ({domainData}) =>
  <main style={styles.container}>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/add-product' component={AddProductContainer} />
    <Route path='/products' render={() => <ProductsContainer domainData={domainData} /> } />
    <Route exact path='/product/:_id' component={ViewSingleProductContainer} />
    <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} />
    <Route path='/login' render={() => <LogInContainer domainData={domainData} /> } />
    <Route path='/cart' render={() => <CartContainer domainData={domainData} /> } />
  </main>

export default Main
