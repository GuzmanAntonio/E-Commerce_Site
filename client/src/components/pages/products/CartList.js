import React from 'react'
import PropTypes from 'prop-types'
import CartCard from './CartCard'

const CartList = ({cartProducts, products, cartReady, removeItemFromCart}) =>
  <div>
    {
      cartReady
        ? cartProducts.map((product) => {
          return (
            <CartCard 
              product={product}
              removeItemFromCart={removeItemFromCart}
            />
          )
        })
        : 'EMPTY CART'
    }
  </div>

CartList.propTypes = {
  cartProducts: PropTypes.func.isRequired,
  cartReady: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
}

export default CartList
