
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    _id: { type: String, required: true }
})

module.exports = mongoose.model('levels', schema)