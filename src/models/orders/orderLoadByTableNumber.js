'use strict'

const getConnection = require("../../../db")

const sql = `
SELECT *
  FROM ORDER_RES
 WHERE TABLE_NUMBER = :TABLE_NUMBER
 ORDER BY ID DESC
`

module.exports.orderLoadByTableNumber = async (tableNumber) => {

    try {
        let conn = await getConnection()
        let result = await conn.query(sql, {'TABLE_NUMBER':tableNumber})
        return result[0]
    } catch (error) {
        throw new Error(error)
    }

}