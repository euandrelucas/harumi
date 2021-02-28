const config = require("../config/json/config.json")
const mongoose = require('mongoose');
const c = require("colors")
module.exports = (client) => {
      mongoose.connect(config.database.mongoose, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }).then (function () {
        console.log(c.brightYellow(`[DATABASE] | The database has been successfully connected`))
    }).catch (function () {
        console.log(c.brightRed(`[DATABASE] | The database was not connected by error`))
    });
}