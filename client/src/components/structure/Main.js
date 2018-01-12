import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ProductsContainer from '../pages/products/ProductsContainer'
// import AddProductForm from '../products/AddProductForm'
import AddProductContainer from '../pages/products/AddProductContainer'

const styles = {
  container: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    borderBottom: '2px solid #bdc3c7'
  }
}

const Main = ({domainData}) =>
  <main style={styles.container}>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/add-product' component={AddProductContainer} />
    <Route path='/products' render={() => <ProductsContainer domainData={domainData}/>} />
  </main>

export default Main