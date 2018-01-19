const express = require('express')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const productsRoutes = require('./Routes/productsRoutes')
const userRoutes = require('./Routes/userRoutes')
const app = express()

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/E-Commerce_Site')
console.log(session)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  name: 'ecommerce',
  secret: 'hush',
  secure: 'false'
}))
app.use(passport.initialize())
app.use(passport.session())
require('./passport/Strategies')(passport)
require('./passport/Routes')(app, passport)
app.use(require('./config/error-handler'))

app.use('/api/products', productsRoutes)
app.use('/api/users', userRoutes)

const server = app.listen(port, () => console.log(`Running on port: ${port} 🙈 🙉 🙊`))

module.exports = server
