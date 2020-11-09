const express = require('express')
const Router = require('./src/routers/router')
const app = express()

app.use(express.json())
app.use(Router)

app.listen(9000)