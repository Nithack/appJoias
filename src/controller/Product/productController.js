const { createProduct } = require('./entity/createProduct')
const { listProducts } = require('./entity/listProducts')
const { deleteProduct } = require('./entity/deleteProduct')
const { findProduct } = require('./entity/findProduct')

module.exports = {
    createProduct,
    listProducts,
    deleteProduct,
    findProduct
}