import React from 'react'

const CartCard = ({product}) =>
  <div>
    {product.name}
    {product.price}
  </div>

export default CartCard