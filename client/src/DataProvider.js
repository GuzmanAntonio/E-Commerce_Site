import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import $ from 'jquery'

class DataProvider extends Component {
  state = {
    isLoaded: false,
    products: []
  }

  methods = {
    getAllProducts: () => {
      $.ajax({
        url: '/api/products',
        method: 'GET'
      }).done((response) => {
        console.log(response, 'GET ALL PRODUCTS from DataProvider')
        this.setState({isLoaded: true, products: response.data})
      })
    },
    deleteProduct: (id) => {
      $.ajax({
        url: `/api/products/${id}`,
        method: 'DELETE'
      }).done((response) => {
        console.log(response, 'DELETED PRODUCT METHOD')
        this.methods.getAllProducts()
      })
    }
  }

  componentDidMount () {
    this.methods.getAllProducts()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods
    }

    return (
      <div>
        {
          this.state.isLoaded
            ? <Layout domainData={domainData} />
            : <div>...Loading</div>
        }
      </div>
    )
  }
}

export default DataProvider
