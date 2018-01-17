import React, { Component } from 'react'
import ViewSingleProduct from './ViewSingleProduct'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
// import PropTypes from 'prop-types'

class ViewSingleProductContainer extends Component {
  state = {
    product: null
  }

  componentDidMount () {
    this.singleProductFromServer(this.props.match.params._id)
  }

  singleProductFromServer = (id) => {
    $.ajax({
      url: `/api/products/${id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response, 'Successful View')
      this.setState({product: response.product})
    })
  }

  render () {
    return (
      <div>
        {
          this.state.product
            ? <ViewSingleProduct product={this.state.product} />
            : 'No Product'
        }
      </div>
    )
  }
}

export default withRouter(ViewSingleProductContainer)
