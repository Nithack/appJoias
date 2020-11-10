const Product = require('express').Router()
const { productController } = require('../../controller')

Product.post('/', productController.createProduct)
Product.get('/', productController.listProducts)
Product.delete('/:productId', productController.deleteProduct)

module.exports = Product