const express = require('express')
const Router = express.Router()
const Product = require('../Models/Product')

Router.route('/')
  .get((req, res) => {
    Product.find((err, product) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', data: product})
      }
    })
  })
  .post((req, res) => {
    const product = new Product()
    product.setProductData(req.body)
    product.setDate()
    product.save((err, product) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `SUCCESSFUL POST`, product})
      }
    })
  })

Router.route('/:productId')
  .get((req, res) => {
    const productId = req.params.productId
    Product.findById({_id: productId}, (err, product) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `FOUND PRODUCT ${productId}`, product})
      }
    })
  })
  .delete((req, res) => {
    const deleteProductId = req.params.productId
    Product.findById({_id: deleteProductId}, (err, product) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `DELETED PRODUCT ${deleteProductId}`, product})
      }
    })
  })
  .put((req, res) => {
    const editProductId = req.params.productId
    Products.findById({_id: editProductId}, (err, product) => {
      if (err) {
        console.log('Wrong Turn', err)
        res.json({error: err})
      } else {
        product.setProductData(req.body)
        product.save((err, product) => {
          if (err) {
            res.json({error: err})
          } else {
            res.json({msg: `EDITED ${editProductId}`, product})
          }
        })
      }
    })
  })

// Router.route('/api/products')

module.exports = Router
