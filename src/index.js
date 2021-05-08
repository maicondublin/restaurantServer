'use strict'
const express = require('express')
const cors = require('cors')
const app = express()
const orders = require('./routes/orders')
const menu = require('./routes/menu')
const order = require('./routes/order')

app.use(cors())
app.use(express.json())
app.use(orders)
app.use(menu)
app.use(order)

module.exports = (port) => {
    app.listen(port, function(){
        console.log('App Listen in port '+ port)
    })
} 