import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex'
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    marginBottom: '10px'
  },
  button: {

  },
  link: {

  }
}

const SignUpForm = ({onUserChange, submitUser, firstName, lastName, email, password}) =>
  <form>
    <div style={styles.container} >
      <Card raised='true' >
        <Typography type='headline4' gutterBottom >
          Sign-Up
        </Typography>
        <input type='text' id='firstName' placeholder='first Name' onChange={onUserChange} />
        <input type='text' id='lastName' placeholder='Last Name' onChange={onUserChange} />
        <input type='text' id='email' placeholder='Email' onChange={onUserChange} />
        <input type='text' id='password' placeholder='password' onChange={onUserChange} />
      </Card>
    </div>
    <div>
      <Button raised onClick={submitUser}> SUBMIT </Button>
      <Button raised ><Link to='/login' >LOGIN</Link></Button>
    </div>
  </form>

SignUpForm.propTypes = {
  onUserChange: PropTypes.func.isRequired,
  submitUser: PropTypes.func.isRequired
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired
}

export default SignUpForm
