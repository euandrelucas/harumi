const config = require("./src/config/json/")
const Discord = require("discord.js");
const client = new Discord.Client({

});

client.login(client.options.token);