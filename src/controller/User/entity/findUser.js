const { user } = require('../../../models/')

const findUser = async(req, res, next) => {
    const { id } = req.params
    try {
        let users = await user.scope('findAllUsers').findOne({ where: { id: id }, include: ['products'] }, );
        return res.status(200).json(users)
    } catch (e) {
        res.json({ message: e.message })
    }
}

module.exports = { findUser }