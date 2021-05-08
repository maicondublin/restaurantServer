'use strict'
const { Router } = require('express')
const { loadMenuByType } = require('../models/menu/loadMenuByType')
const menu = Router()

menu.get('/menu/:type', async function(req, res){
    try {        
        res.send(await loadMenuByType(req.params.type))
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = menu