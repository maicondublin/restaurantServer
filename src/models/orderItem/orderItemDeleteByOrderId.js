'use strict'

const getConnection = require("../../../db")

const sql = `
DELETE FROM ORDER_ITEMS_RES
 WHERE ORDER_ID = :ORDER_ID
` 

module.exports.orderItemDeleteByOrderId = async (orderId) => {

    try {
        let conn = await getConnection()
        await conn.query(sql, {'ORDER_ID': orderId})
    } catch (error) {
        throw new Error(error)
    }

}