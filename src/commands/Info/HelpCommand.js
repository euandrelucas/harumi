const {MessageEmbed} = require("discord.js");   

exports.run = (client, message, args, prefix) => {
    
    var prefix = client.options.prefix
    
    const musicsize = client.commands.filter(command => command.help.category === "music").size
    const music = client.commands.filter(command => command.help.category === "music").map(e => `\`${prefix}${e.help.name}\``).join(" **|** ")
    
    let discordajuda = new MessageEmbed()
    .setTitle(`Ajuda | ${client.user.username}`)
    .addField(`Musica [${musicsize}]`, `${music}`)
    
    message.quote(discordajuda)
}
exports.help = { 
  name: 'ajuda', 
  aliases: ['help', 'comandos', 'commands', 'cmds', 'cmd'],
  category: 'info'
}