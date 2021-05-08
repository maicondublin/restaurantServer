'use strict'

const { orderItemsLoadByOrderId } = require("../../models/orderItem/orderItemsLoadByOrderId")
const { orderLoadByTableNumber } = require("../../models/orders/orderLoadByTableNumber")
const { getFirst } = require("../../util/getFirst")

module.exports.loadOrderInfoCtrl = async (tableNumber) => {

    try {
        let order = getFirst(await orderLoadByTableNumber(tableNumber))
        order.items = await orderItemsLoadByOrderId(order.ID)
        return order
    } catch (error) {
        throw new Error(error)
    }

}