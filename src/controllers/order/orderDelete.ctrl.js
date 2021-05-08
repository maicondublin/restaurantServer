'use strict'

const { orderItemDeleteByOrderId } = require("../../models/orderItem/orderItemDeleteByOrderId")
const { orderDelete } = require("../../models/orders/orderDelete")

module.exports.orderDeleteCtrl = async (orderId) => {

    try {
        await orderItemDeleteByOrderId(orderId)
        await orderDelete(orderId)
    } catch (error) {
        throw new Error(error)
    }

}