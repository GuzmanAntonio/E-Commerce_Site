import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import SignUpForm from './SignUpForm'

class SignUpContainer extends Component {
  render () {
    return (
      <SignUpForm />
    )
  }
}

export default withRouter(SignUpContainer)
