import React from 'react'
import PropTypes from 'prop-types'

const CartList = ({cartProducts, products, cartReady}) =>
  <div>
    {
      cartReady
        ? cartProducts.map((product) => {
          return (
            product = {product}
          )
        })
        : 'EMPTY CART'
    }
  </div>

CartList.propTypes = {
  cartProducts: PropTypes.func.isRequired,
  cartReady: PropTypes.func.isRequired
}

export default CartList
