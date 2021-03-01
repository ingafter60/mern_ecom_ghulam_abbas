// BACKEND/controllers/productController.js

// Import product model
const Product = require('../models/product')

// Create new prouduct => /api/v1/product/new
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body)

  res.status(201).json({
    success: true,
    product,
  })
}

// getProducts
exports.getProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'This route will show all products in database.',
  })
}
