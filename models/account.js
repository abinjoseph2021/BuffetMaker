const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    accountType: String,
    username: String,
    email: String,
    salt: String,
    hash: String
})

const users = mongoose.model('users', accountSchema)
module.exports = users