import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
// import TextField from 'material-ui/TextField'

const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30
  },
  formContainer: {
    padding: 45
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10
  }
}

const LogInForm = ({onChange, handleChange, email, password, onSubmit}) => {
  return (
    <div style={styles.container}>
      <form>
        <Card raised>
          <Typography type='headline' component='h2'>Log-In</Typography>
          <div>
            <input onChange={handleChange} id='email' label='E-Mail' />
          </div>
          <div>
            <input onChange={handleChange} id='password' label='Password' />
          </div>
        </Card>
        <div>
          <Button raised onClick={onSubmit}>
            <Link to='/sign-up'>
              LOGIN
            </Link>
          </Button>
        </div>
      </form>
    </div>
  )
}

LogInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default LogInForm
