const { user } = require('../../../models/')

const listUsers = async(req, res, next) => {
    try {
        let users = await user.scope('findAllUsers').findAll();
        return res.status(200).json(users)
    } catch (e) {
        res.json({ message: e.message })
    }
}

module.exports = { listUsers }