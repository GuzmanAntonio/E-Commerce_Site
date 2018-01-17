import React from 'react'
import PropTypes from 'prop-types'

const ViewSingleProduct = ({product}) =>
  <div>
    <h1>{product.name}</h1>
    <p>{product.price}</p>
    <p>{product.image}</p>
    <p>{product.category}</p>
  </div>

ViewSingleProduct.propTypes = {
  product: PropTypes.string.isRequired
}

export default ViewSingleProduct
