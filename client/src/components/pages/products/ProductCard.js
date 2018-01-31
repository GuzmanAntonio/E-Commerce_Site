import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card'
import CardContent from 'material-ui/Card/CardContent'
import Typography from 'material-ui/Typography/Typography'
import CardMedia from 'material-ui/Card/CardMedia'
import CardActions from 'material-ui/Card/CardActions'
import Button from 'material-ui/Button/Button'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    border: '3px black solid',
    height: '200px',
    justifyContent: 'center'
  }
}

const ProductCard = ({name, price, image, category, _id, deleteProduct, addItemToCart}) =>
  <div>
    <Card style={styles.container}>
      <CardMedia
        style={styles.media}
        title={category}
      />
      <CardContent>
        <Typography type='headline1'component='h2'>
          {name}
          {price}
          {category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button dense color='primary' onClick={() => deleteProduct(_id)}>DELETE</Button>
        <Button raised color='primary'><Link to={`/product/${_id}`}>VIEW</Link></Button>
        <Button onClick={() => addItemToCart(_id)}>Add item</Button>
      </CardActions>
    </Card>
  </div>

ProductCard.protoType = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default ProductCard
