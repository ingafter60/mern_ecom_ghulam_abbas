// BACKEND/routes/product.js

// Import modules
const express = require('express')
const router = express.Router()

// Import product controller
const { getProducts, newProduct } = require('../controllers/productController')

// Product routes
router.route('/products').get(getProducts)
router.route('/product/new').post(newProduct)

// Export router
module.exports = router
