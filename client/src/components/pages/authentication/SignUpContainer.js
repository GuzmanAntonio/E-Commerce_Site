import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import SignUpForm from './SignUpForm'
import $ from 'jquery'

class SignUpContainer extends Component {
  state = {
    firstName: undefined,
    lastName: undefined,
    email: undefined
  }

  onUserChange = (e) => this.setState({ [e.target.id]: e.target.value })

  submitUser = (e) => {
    const {firstName, lastName, email} = this.state
    const newUser = {firstName, lastName, email}
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: newUser
    }).done((response) => {
      this.props.domainData.newUser(this.state)
      this.props.history.push('/users')
    })
  }

  render () {
    console.log(this.props)
    return (
      <SignUpForm
        onUserChange={this.onUserChange}
        submitUser={this.submitUser}
        {...this.state}
      />
    )
  }
}

export default withRouter(SignUpContainer)
