const Router = require('express').Router()

Router.use('/user', require('./user/index'))
Router.use('/product', require('./product/index'))

module.exports = Router