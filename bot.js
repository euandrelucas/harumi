const config = require("./src/config/json/config.json")
const Discord = require("discord.js");

const client = new Discord.Client({
    restTimeOffset: config.client.retry,
    prefix: config.client.prefix,
    token: config.discord.token,
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

require("./handler")(client);
require("./src/database/mongodb")(client)
require("./src/client/lavalinkManager")(client);
require("./src/client/giveawayManager")(client);

client.login(client.options.token);

module.exports = {
    client
}