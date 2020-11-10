const { user } = require('../../../models/')

const createUser = async(req, res, next) => {
    let { name } = req.body
    let modelBuild = user.build({ name: name });
    let validateErrors = await modelBuild.validate().catch(err => err.errors);
    if (validateErrors.length > 0) {
        let field = validateErrors[0].path
        let message = validateErrors[0].message
        res.status(422).json({ field, message })
    }
    let newProduc = await user.create({ name: name }).catch((error => {
        res.status(422).json({ message: error })
    }))
    res.json({ newProduc })

}
module.exports = {
    createUser
}