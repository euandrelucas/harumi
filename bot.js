const config = require("./src/config/json/config.json")
const Discord = require("discord.js");

const client = new Discord.Client({
    prefix: config.prefix,
    token: config.token,
    fetchAllMembers: true,
    shardCount: config.shards,
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

require("./handler")(client)
//require("./src/client/giveawayManager")(client)

client.login(client.options.token);