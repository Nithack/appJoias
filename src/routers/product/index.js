const Product = require('express').Router()
const { productController } = require('../../controller')

Product.get('/', productController.listProducts)
Product.get('/:id', productController.findProduct)
Product.post('/', productController.createProduct)
Product.delete('/:id', productController.deleteProduct)

module.exports = Product