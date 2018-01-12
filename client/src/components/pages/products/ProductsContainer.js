import React from 'react'
import ProductsList from './ProductList'

const ProductsContainer = ({domainData}) =>

  <ProductsList
    products={domainData.products}
    deleteProduct={domainData.deleteProduct}
  />

export default ProductsContainer
