const { product } = require('../../../models')

const deleteProduct = async(req, res, next) => {
    const { id } = req.params
    let deleteProduct = await product.findOne({ where: { id: id } });
    if (deleteProduct != null) {
        await product.destroy({ where: { id: id } })
            .then(res.json({ message: product.name + ' has be delete' }))
            .catch((error) => res.json({ message: error.message }))
    }
    res.json({ message: "product not exist" })
}

module.exports = { deleteProduct }