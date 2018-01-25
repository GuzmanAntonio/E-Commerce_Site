import React, {Component} from 'react'
import AddProductForm from './AddProductForm'
import $ from 'jquery'

class AddProductContainer extends Component {
  state = {
    name: undefined,
    price: undefined,
    image: undefined,
    category: undefined
  }

onChangeHandler = (e) => this.setState({ [e.target.id]: e.target.value })

submitProductToServer = (e) => {
  const {name, price, image, category} = this.state
  const newProduct = {name, price, image, category}
  $.ajax({
    url: '/api/products',
    method: 'POST',
    data: newProduct
  }).done(response => {
    console.log(response, 'Hola')
  })
}

render () {
  return <AddProductForm
    {...this.state}
    onChangeHandler={this.onChangeHandler}
    submitProductToServer={this.submitProductToServer}
  />
}
}

export default AddProductContainer
