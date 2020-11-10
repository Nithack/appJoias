const { product } = require('../../../models')

const createProduct = async(req, res, next) => {
    let { name, price, userId } = req.body
    let modelBuild = product.build({ name: name, price: price, userId: userId });
    let validateErrors = await modelBuild.validate().catch(err => err.errors);
    if (validateErrors.length > 0) {
        let field = validateErrors[0].path
        let message = validateErrors[0].message
        return res.status(422).json({ field, message })
    }
    try {
        let newProduct = await product.create({ name: name, price: price, userId: userId })
        if (newProduct != null) {
            res.json({ newProduct })
        } else {
            throw error
        }

    } catch (error) {
        res.json({ message: error })
    }


}
module.exports = {
    createProduct
}