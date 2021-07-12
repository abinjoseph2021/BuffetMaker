const mongoose = require('mongoose')

const startupSchema = mongoose.Schema({
    name: String,
    rating: Number,
    recentWorks: [String],
})

const users = mongoose.model('startups', startupSchema)
module.exports = users