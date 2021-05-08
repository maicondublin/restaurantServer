'use strict'
const { Router } = require('express')
const { orderLoadAll } = require('../models/orders/orderLoadAll')
const orders = Router()

orders.get('/orders/:status', async function(req, res){
    try {
        res.send(await orderLoadAll(req.params.status))
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = orders