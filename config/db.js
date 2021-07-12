const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => {
        console.log(`Failed to connect to db: ${error}`)
    })

const db = mongoose.connection

db.on('open', () => {
    console.log("Connected to db")
})

// Handle error after connection
db.on('error', (error) => {
    console.log(`DB connection failed: ${error}`)
})