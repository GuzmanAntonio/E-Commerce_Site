import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import $ from 'jquery'
import * as UserApi from './lib/userApi'

class DataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null,
    cartReady: false
  }

  methods = {
    getAllProducts: () => {
      $.ajax({
        url: '/api/products',
        method: 'GET'
      }).done((response) => {
        console.log(response, 'Data Provider')
        this.setState({isLoaded: true, products: response.data})
      })
    },
    addProduct: (newProduct) => {
      $.ajax({
        url: '/api/products',
        method: 'POST',
        data: newProduct
      }).done((response) => {
        this.methods.getAllProducts()
      })
    },
    deleteProduct: (id) => {
      $.ajax({
        url: `/api/products/${id}`,
        method: 'DELETE'
      }).done((response) => {
        console.log('Delete Data Provider', response)
        this.methods.getAllProducts()
      })
    },
    newUser: (user) =>
      UserApi.signupUser(user)
        .then(user => {
          console.log(user)
          this.setState({user})
          return user
        }),
    loginUser: (email, password) =>
      UserApi.loginUser(email, password)
        .then(user => {
          this.methods.getUser(user)
          return user
        }),
    getUser: (user) =>
      UserApi.getUser(user._id)
        .then(user => {
          console.log('recieved user', user)
          this.setState({user, cartReady: true})
          return user
        }),
    logoutUser: () =>
      UserApi.logoutUser()
        .then(() => {
          this.setState({user: null})
        }),
    addItemToCart: (productId) => {
      // console.log(`add item method ${productId}`)
      if (this.state.user != null) {
        $.ajax({
          url: `/api/users/cart/${this.state.user._id}`,
          method: 'PUT',
          data: {product_id: productId}
        }).done((response) => {
          console.log(response, 'recieved response')
          this.methods.getUser(this.state.user)
        })
      } else {
        console.log('User not logged in')
      }
    },
    removeItemFromCart: (productId) => {
      if (this.state.user != null) {
        $.ajax({
          url: `/api/users/removeFromCart/${this.state.user._id}`,
          method: 'PUT',
          data: {product_id: productId}
        }).then((response) => {
          this.methods.getUser(this.state.user)
        }).catch((eror) => {
          console.log('COULD NOT REMOVE ITEM FROM CART')
        })
      } else {
        console.log('USER MUST BE LOGGED IN')
      }
    },
    orders: () => {
      $.ajax({
        url: '/api/orders',
        method: 'GET'
      }).done((response) => {
        console.log(response, 'ORDERS')
        this.setState({orders: response.data})
      })
    }
  }

  componentDidMount () {
    this.methods.getAllProducts()
    // this.methods.getUser()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.user != null,
      loggedOut: this.state.user == null
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
