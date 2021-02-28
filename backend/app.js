// BACKEND/app.js

const express = require('express')
const app = express()

// Use app
app.use(express.json())

// Import all routes
const products = require('./routes/product')

// Use routes
app.use('/api/v1', products)

module.exports = app
