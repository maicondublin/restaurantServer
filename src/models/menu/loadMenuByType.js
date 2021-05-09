'use strict'

const getConnection = require("../../../db")
//screen are registered the items of menu, o tipo(TYPE)
// its different from the screen whereas the items appear
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