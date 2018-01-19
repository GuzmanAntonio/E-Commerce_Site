import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import LogInForm from './LogInForm'

class LogInContainer extends Component {
  state = {
    emai: undefined,
    password: undefined
  }

  handleChange = (e) => this.setState({ [e.target.id]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    this.props.domainData.loginUser(this.state.email, this.state.password)
      .then(() => this.props.history.push('/'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <div>
        <LogInForm
          {...this.state}
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default withRouter(LogInContainer)
