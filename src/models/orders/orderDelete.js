'use strict'

const getConnection = require("../../../db")

const sql = `
DELETE FROM ORDER_RES
 WHERE ID = :ID
`

module.exports.orderDelete = async (orderId) => {

    try {
        let conn = await getConnection()
        await conn.query(sql, {'ID': orderId})
    } catch (error) {
        throw new Error(error)
    }

}