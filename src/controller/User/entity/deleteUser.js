const { user } = require('../../../models/')

const deleteUser = async(req, res, next) => {
    const { id } = req.params
    try {
        let users = await user.findOne({ where: { id: id } });
        if (users != null) {
            await user.destroy({ where: { id: id } })
            res.json({ message: users.name + ' has be delete' })
        } else {
            throw new Error('Not Find User')
        }

    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = { deleteUser }