const Product = require('express').Router()


Product.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

module.exports = Product