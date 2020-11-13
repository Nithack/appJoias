const { product } = require('../../../models')

const createProduct = async(req, res, next) => {
    let newJoia = { name, price, userId, amount, describe, image } = req.body
    console.log(newJoia.describe)
    let modelBuild = product.build({ name: newJoia.name, image: newJoia.image, price: newJoia.price, describe: newJoia.describe, amount: newJoia.amount, userId: newJoia.userId });
    let validateErrors = await modelBuild.validate().catch(err => err.errors);
    if (validateErrors.length > 0) {
        let field = validateErrors[0].path
        let message = validateErrors[0].message
        return res.status(422).json({ field, message })
    }
    try {
        let newProduct = await product.create({ name: newJoia.name, image: newJoia.image, price: newJoia.price, describe: newJoia.describe, amount: newJoia.amount, userId: newJoia.userId })
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