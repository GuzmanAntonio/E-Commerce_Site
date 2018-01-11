import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const styles = {
  container: {
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  formContainer: {
    display: 'flex'
  },
  buttonContainer: {
    display: 'flex'
  }
}

const AddProductForm = ({ onChangeHandler, submitProductToServer, name, price, image, category }) =>
  <div style={styles.container}>
    <Card>
      <form style={styles.formContainer}>
        <Typography type='display1' gutterBottom> Add Product </Typography>
        <div>
          <TextField label='Name' placeholder='name' onChange={onChangeHandler} id={'name'} />
        </div>
        <div>
          <TextField label='Price' placeholder='price' onChange={onChangeHandler} id={'price'} />
        </div>
        <div>
          <TextField label='Image' placeholder='image' onChange={onChangeHandler} id={'image'} />
        </div>
        <div>
          <TextField label='Category' placeholder='category'onChange={onChangeHandler} id={'category'} />
        </div>
        <div style={styles.buttonContainer}>
          <Button raised disabled={!name || !price || !image || !category} onClick={submitProductToServer} >
            SUBMIT
          </Button>
        </div>
      </form>
    </Card>
  </div>

AddProductForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  submitProductToServer: PropTypes.func.isRequired
}

export default AddProductForm
