const app = require('./src')
require('dotenv').config()

app(process.env.PORT || 3002)