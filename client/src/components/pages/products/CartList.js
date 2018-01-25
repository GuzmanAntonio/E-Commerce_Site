import React from 'react'
import CartCard from './CartCard'
import PropTypes from 'prop-types'

const CartList = ({cartProducts, products}) => {
  return (
    <div>
      {
        products.map(product =>
          <CartCard
            product={product}
          />
        )
      }
    </div>
  )
}

CartList.propTypes = {
  cartProducts: PropTypes.func.isRequired
}

export default CartList
