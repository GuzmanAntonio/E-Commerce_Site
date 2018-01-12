import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products, deleteProduct}) => {
  return (
    <div>
      {
        products.map(product => {
          return <ProductCard
            {...product}
            deleteProduct={deleteProduct}
          />
        })
      }
    </div>
  )
}

export default ProductList
