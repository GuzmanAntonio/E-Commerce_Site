import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products, deleteProduct, addItemToCart}) => {
  return (
    <div>
      {
        products.map(product => {
          return <ProductCard
            {...product}
            deleteProduct={deleteProduct}
            addItemToCart={addItemToCart}
          />
        })
      }
    </div>
  )
}

export default ProductList
