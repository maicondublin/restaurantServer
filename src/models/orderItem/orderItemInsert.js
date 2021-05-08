'use strict'

const getConnection = require("../../../db")

const sql = `
INSERT INTO ORDER_ITEMS_RES (
    ORDER_ID,
    MENU_ITEM_ID
) VALUES(
    :ORDER_ID,
    :MENU_ITEM_ID
)
`

module.exports.orderItemInsert = async (orderItem) => {

    let binds = {
        ORDER_ID:       orderItem.ORDER_ID,
        MENU_ITEM_ID:   orderItem.MENU_ITEM_ID
    }

    try {
        let conn = await getConnection()
        await conn.query(sql, binds)
        return true
    } catch (error) {
        throw new Error(error)
    }

}