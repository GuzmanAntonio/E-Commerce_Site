import React from 'react'
import OrderList from './OrderList'
import PropTypes from 'prop-types'

const OrderContainer = ({domainData}) =>

  <OrderList
    orders={domainData.orders}
  />

OrderContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default OrderContainer
