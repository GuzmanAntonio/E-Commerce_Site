import React from 'react'
import OrderCard from './OrderContainer'
import PropTypes from 'prop-types'

const OrderList = ({orders, ordersReady}) => {
  return (
    <div>
      {
        ordersReady
          ? orders.map(order => {
            return <OrderCard
              order={order}
            />
          })
          : 'NO ORDERS'
      }
    </div>
  )
}

OrderList.propTypes = {
  ordersReady: PropTypes.func.isRequired,
  orders: PropTypes.func.isRequired
}

export default OrderList
