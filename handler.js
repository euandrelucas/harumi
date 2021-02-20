require("./src/functions/MessageQuote")

const Discord = require("discord.js")
const cor = require("colors")
const fs = require("fs")

module.exports = (client) => {
// Event Handler
fs.readdir("./src/events/", (err, files) => {
    if(err)
        console.error(err);
    const eventsFiles = files.filter(file => file.split(".").pop() == "js");
    if(eventsFiles.length <= 0)
        return console.warn(cor.brightRed("[EVENTS] | There are no events to load"));
    eventsFiles.forEach((file, i) => {
        require("./src/events/" + file);
    })
    console.log(cor.brightCyan("[EVENTS] | Uploaded successfully"))
  });
// Command Handler
fs.readdirSync('./src/commands/').forEach(dir => {
    const files = fs.readdirSync(`./src/commands/${dir}/`).filter(file => file.split(".").pop() === "js")
    for (let file of files) {
        let pull = require(`./src/commands/${dir}/${file}`);
        if (pull.help.name) {
            client.commands.set(pull.help.name, pull);  
        }
        if (pull.help.aliases) {
            pull.help.aliases.forEach(alias => {
            client.aliases.set(alias, pull.help.name)
            });
        };
    };
});

}