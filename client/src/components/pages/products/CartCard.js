import React from 'react'
import Button from 'material-ui/Button'
import Card, {CardContent} from 'material-ui/Card'
// import Typography from 'material-ui/Typography'

const styles = {
  container: {
    border: '3px solid red',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '200px'
  },
  image: {

  },
  cardContent: {

  }
}

const CartCard = ({product, removeItemFromCart}) =>
  <div style={styles.container}>
    <Card>
      <CardContent style={styles.cardContent}>
        {product.name}
        {product.price}
        <Button type='button' onClick={() => removeItemFromCart(product._id)} >
          REMOVE FROM CART 
        </Button>
      </CardContent>
    </Card>
  </div>

export default CartCard
