const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const productsRoutes = require('./Routes/productsRoutes')
const userRoutes = require('./Routes/userRoutes')
const app = express()

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/E-Commerce_Site')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.use('/api/products', productsRoutes)
app.use('/api/users', userRoutes)

const server = app.listen(port, () => console.log(`Running on port: ${port} 🙈 🙉 🙊`))

module.exports = server
