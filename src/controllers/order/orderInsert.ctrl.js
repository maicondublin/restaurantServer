'use strict'

const { orderItemInsert } = require("../../models/orderItem/orderItemInsert")
const { orderInsert } = require("../../models/orders/orderInsert")

module.exports.orderInsertCtrl = async (order) => {

    let newItem = {
        ORDER_ID:'',
        MENU_ITEM_ID:''
    }
    try {
        let newOrder = await orderInsert(order)
    
        for(let item of order.ORDER_ITEMS){
            newItem.ORDER_ID = newOrder
            newItem.MENU_ITEM_ID = item.ID
            await orderItemInsert(newItem)
        }
        return {message:'Pedido foi encaminhado para produção!'}    
    } catch (error) {
        throw new Error(error)
    }


}