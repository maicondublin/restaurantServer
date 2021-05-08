'use strict'
const { Router } = require('express')
const { loadOrderInfoCtrl } = require('../controllers/order/loadOrderInfo.ctrl')
const { orderDeleteCtrl } = require('../controllers/order/orderDelete.ctrl')
const { orderInsertCtrl } = require('../controllers/order/orderInsert.ctrl')
const { orderUpdate } = require('../models/orders/orderUpdate')
const order = Router()

order.get('/order/:tableNumber', async function(req, res){
    try {
        res.send(await loadOrderInfoCtrl(req.params.tableNumber))
    } catch (error) {
        res.status(500).send(error)
    }
})

order.post('/order', async function(req, res){
    try {
        res.send(await orderInsertCtrl(req.body))
    } catch (error) {
        res.status(500).send(error)
    }
})

order.put('/order', async function(req, res){
    try {
        res.send(await orderUpdate(req.body))
    } catch (error) {
        res.status(500).send(error)
    }
})

order.delete('/order/:id', async function(req, res){
    try {
        res.send(await orderDeleteCtrl(req.params.id))
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = order