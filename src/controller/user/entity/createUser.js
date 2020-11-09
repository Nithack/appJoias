const { user } = require('../../../models/')

const createUser = async(req, res, next) => {
    let { name } = req.body
    let modelBuild = user.build({ name: name });
    let validateErrors = await modelBuild.validate().catch(err => err.errors);
    if (validateErrors.length > 0) {
        let field = validateErrors[0].path
        let message = validateErrors[0].message
        return res.status(422).json({ field, message })
    }
    let createUser = await user.create({ name: name }).catch(err => err.errors)
    if (createUser.length > 0) {
        let field = createUser[0].path
        let message = createUser[0].message
        return res.status(422).json({ field, message })
    }
    res.json({ createUser })

}
module.exports = {
    createUser
}