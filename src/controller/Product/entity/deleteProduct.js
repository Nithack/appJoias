const { product } = require('../../../models')

const deleteProduct = async(req, res, next) => {
    const { Id } = req.params
    try {
        let product = await product.findOne({ where: { id: id } });
        if (product != null) {
            await product.destroy({ where: { id: id } })
            res.json({ message: product.name + ' has be delete' })
        } else {
            throw new Error('Not Find Product')
        }

    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = { deleteProduct }