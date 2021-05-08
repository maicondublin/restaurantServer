'use strict'

const getConnection = require("../../../db")

const sql = `
SELECT *
  FROM ORDER_RES
 WHERE STATUS = :STATUS
`
// 'SELECT *'
// +'  FROM ORDER_RES'
// +' WHERE STATUS = :STATUS'

module.exports.orderLoadAll = async (status) => {

    try {
        let conn = await getConnection()
        let result = await conn.query(sql, {'STATUS':status})
        return result[0]
    } catch (error) {
        throw new Error(error)
    }

}