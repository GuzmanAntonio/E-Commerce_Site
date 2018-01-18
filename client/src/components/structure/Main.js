import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ProductsContainer from '../pages/products/ProductsContainer'
import ViewSingleProductContainer from '../pages/products/ViewSingleProductContainer'
import SignUpContainer from '../pages/authentication/SignUpContainer'
// import AddProductForm from '../products/AddProductForm'
import AddProductContainer from '../pages/products/AddProductContainer'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    padding: '20',
    backgroundColor: '#ECECEC',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-thread.png")'
  }
}

const Main = ({domainData}) =>
  <main style={styles.container}>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/add-product' component={AddProductContainer} />
    <Route path='/products' render={() => <ProductsContainer domainData={domainData}/>} />
    <Route exact path='/product/:_id' component={ViewSingleProductContainer} />
    <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} />
  </main>

export default Main
