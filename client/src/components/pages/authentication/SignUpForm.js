import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'

const SignUpForm = () =>
  <form>
    <div>
      <Card>
        <Typography type='headline2' gutterBottom >
          Sign-Up
        </Typography>
        <input type='text' id='firstName' placeholder='first Name' />
        <input type='text' id='lastName' placeholder='Last Name' />
        <input type='text' id='email' placeholder='Email' />
      </Card>
    </div>
    <div>
      <Button raised>
        <Link to='/' >SUBMIT</Link>
      </Button>
    </div>
  </form>

export default SignUpForm
