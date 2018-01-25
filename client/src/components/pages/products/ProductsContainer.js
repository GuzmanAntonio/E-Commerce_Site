import React from 'react'
import ProductsList from './ProductList'

const ProductsContainer = ({domainData}) =>

  <ProductsList
    products={domainData.products}
    deleteProduct={domainData.deleteProduct}
    addItemToCart={domainData.addItemToCart}
  />

export default ProductsContainer
