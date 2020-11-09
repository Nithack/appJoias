const { createUser } = require('./entity/createUser')
const { listUsers } = require('./entity/listUsers')
const { deleteUser } = require('./entity/deleteUser')

module.exports = {
    createUser,
    listUsers,
    deleteUser
}