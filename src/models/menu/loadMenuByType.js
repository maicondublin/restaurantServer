'use strict'

const getConnection = require("../../../db")
// Nesta tabela são cadastraddos os itens de menu, o tipo(TYPE) difere em qual aba do  menu vai aparecer o item
// Exemplo: 'FOOD', DRINK, SNACK
const sql = `
SELECT * 
  FROM MENU_ITEM_RES
 WHERE TYPE = :TYPE
`

module.exports.loadMenuByType = async (type) => {

    try {
        let conn = await getConnection()
        let result = await conn.query(sql, {'TYPE':type})
        return result[0]
    } catch (error) {
        throw new Error(error)
    }

}