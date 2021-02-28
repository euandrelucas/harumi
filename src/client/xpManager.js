const config = require("../config/json/config.json")
const Levels = require("discord-xp");
module.exports = (client) => {

    Levels.setURL(config.database.mongoose)

}
module.exports = {
    Levels
}