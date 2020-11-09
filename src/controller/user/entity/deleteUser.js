const { user } = require('../../../models/')

const deleteUser = async(req, res, next) => {
    const { userId } = req.params
    try {
        let users = await user.findOne({ where: { userId: userId } });
        if (users != null) {
            await user.destroy({ where: { userId: userId } })
            res.json({ message: users.name + ' has be delete' })
        } else {
            throw new Error('Not Find User')
        }

    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = { deleteUser }