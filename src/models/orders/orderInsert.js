'use strict'

const getConnection = require("../../../db")

const sql = `
INSERT INTO ORDER_RES(
    TABLE_NUMBER,
    OBSERVATIONS,
    STATUS,
    ORDER_TIME
) VALUES (
    :TABLE_NUMBER,
    :OBSERVATIONS,
    :STATUS,
    :ORDER_TIME
)
`
module.exports.orderInsert = async (newOder) => {

    let binds = {
        TABLE_NUMBER:   newOder.TABLE_NUMBER,
        OBSERVATIONS:   newOder.OBSERVATIONS,
        STATUS:         newOder.STATUS,
        ORDER_TIME :    new Date()
    }

    try {
        let conn = await getConnection()
        let inserted = await conn.query(sql, binds)
        return inserted[0].insertId
    } catch (error) {
        throw new Error(error)
    }

}