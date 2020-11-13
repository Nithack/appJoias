const { product } = require('../../../models')

const listProducts = async(req, res, next) => {
    try {
        let products = await product.scope('findAllProducts').findAll();
        return res.status(200).json(products)
    } catch (e) {
        res.json({ message: e.message })
    }
}

module.exports = { listProducts }