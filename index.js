const express = require('express')
const cors = require('cors')
require('dotenv').config()

require('./config/db')
const router = require('./routes/route')

const app = express()

app.use(cors())

router(app)

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})