import React from 'react'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import CardContent from 'material-ui/CardContent'

const styles = {
  container: {
    display: 'flex',
    background: '#dfe6e9',
    justifyContent: 'center',
    border: '3px black solid'
  }
}

const OrderCard = ({orders}) =>
  <div>
    <Card style={styles.container}>
      <Typography type='headline1'component='h2'> Orders </Typography>
      <CardContent>
        {orders.products}
        {orders.status}
        {orders.user}
        {orders.created}
      </CardContent>
    </Card>
  </div>

OrderCard.propTypes = {
  orders: PropTypes.func.isRequired
}

export default OrderCard
