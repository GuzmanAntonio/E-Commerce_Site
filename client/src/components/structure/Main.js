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
import OrderContainer from '../pages/products/OrderContainer'

const styles = {
  container: {
    display: 'flex',
    padding: '100px',
    width: '100vw',
    backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)'
    // background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
    // backgroundBlendMode: 'multiply,multiply'
    // backgroundColor: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898'
    // backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")'
  }
}

const Main = ({domainData}) =>
  <main style={styles.container}>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/add-product' component={AddProductContainer} />
    <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />
    <Route exact path='/product/:_id' component={ViewSingleProductContainer} />
    <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} />
    <Route path='/login' render={() => <LogInContainer domainData={domainData} />} />
    <Route path='/cart' render={() => <CartContainer domainData={domainData} />} />
    <Route path='/orders' render={() => <OrderContainer domainData={domainData} />} />
  </main>

export default Main
