const User = require('express').Router()
const { userController } = require('../../controller')

User.post('/', userController.createUser)
User.get('/', userController.listUsers)
User.delete('/:userId', userController.deleteUser)

module.exports = User