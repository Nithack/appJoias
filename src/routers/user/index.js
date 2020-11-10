const User = require('express').Router()
const { userController } = require('../../controller')

User.post('/', userController.createUser)
User.get('/', userController.listUsers)
User.delete('/:id', userController.deleteUser)
User.get('/:id', userController.findUser)

module.exports = User