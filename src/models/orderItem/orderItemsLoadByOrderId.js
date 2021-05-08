'use strict'

const getConnection = require("../../../db")

const sql = `
SELECT M.*
  FROM MENU_ITEM_RES M,
       ORDER_ITEMS_RES I
 WHERE I.ORDER_ID = :ORDER_ID
   AND M.ID = I.MENU_ITEM_ID
`
module.exports.orderItemsLoadByOrderId = async (orerId) => {

    try {
        let conn = await getConnection()
        let result = await conn.query(sql, {'ORDER_ID':orerId})
        return result[0]
    } catch (error) {
        throw new Error(error)
    }

}