const { product } = require('../../../models/')

const findProduct = async(req, res, next) => {
    const { id } = req.params
    try {
        let findProduct = await product.scope('findAllProduct').findOne({ where: { id: id } });
        return res.status(200).json(findProduct)
    } catch (e) {
        res.json({ message: e.message })
    }
}

module.exports = { findProduct }