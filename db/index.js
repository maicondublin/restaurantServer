'use strict'
const mysql = require('mysql2/promise')

const getConnection = async () => {
    var connection = await mysql.createConnection({
        host:process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE,
        port:process.env.DATABASE_PORT
    })

    connection.config.queryFormat = function (query, values) {
        if (!values) return query;
        return query.replace(/\:(\w+)/g, function (txt, key) {
            if (values.hasOwnProperty(key)) {
                return this.escape(values[key]);
            }
            return txt;
        }.bind(this));
    }

    return connection
}

module.exports = getConnection