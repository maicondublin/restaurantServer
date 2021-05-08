'use strict'

const getConnection = require("../../../db")

const sql = `
UPDATE ORDER_RES
   SET OBSERVATIONS = :OBSERVATIONS,
       STATUS = :STATUS
 WHERE ID = :ID 
`

module.exports.orderUpdate = async (order) => {

    let binds = {
        OBSERVATIONS:   order.OBSERVATIONS,
        STATUS:         order.STATUS,
        ID:             order.ID
    }

    try {
        let conn = await getConnection()
        await conn.query(sql, binds)
        return {message:'Pedido alterado com sucesso!'}
    } catch (error) {
        throw new Error(error)
    }

}