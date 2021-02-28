const mongoose = require('mongoose')
let Schema = new mongoose.Schema({
    Money: Number,
    Bank: Number,
    Tag: String,
    User: String,
    WeeklyTime: String,
    DailyTime: String,
    CasinoTime: String,
    BegTime: String,
    RobTime: String,
    RPSTime: String,
    WorkTime: String
})
module.exports = mongoose.model("economy", Schema)