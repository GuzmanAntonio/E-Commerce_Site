import React from 'react'
import PropTypes from 'prop-types'
import CartList from './CartList'

const CartContainer = ({domainData}) => {
  // console.log(domainData.user.cart)
  return (
    <div>
      {
        domainData.user != null
          ? <CartList
            cartProducts={domainData.user.cart}
            cartReady={domainData.cartReady}
            removeItemFromCart={domainData.removeItemFromCart}
          />
          : 'NO USER LOGGED IN'
      }
    </div>
  )
}

CartContainer.propTypes = {
  domainData: PropTypes.func.isRequired
}

export default CartContainer
