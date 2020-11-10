const { createProduct } = require('./entity/createProduct')
const { listProducts } = require('./entity/listProducts')
const { deleteProduct } = require('./entity/deleteProduct')

module.exports = {
    createProduct,
    listProducts,
    deleteProduct
}