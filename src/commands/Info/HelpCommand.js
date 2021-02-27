const {MessageEmbed} = require("discord.js");   

exports.run = (client, message, args, prefix) => {
    
    var prefix = client.options.prefix
    
    const musicsize = client.commands.filter(command => command.help.category === "music").size
    const music = client.commands.filter(command => command.help.category === "music").map(e => `\`${prefix}${e.help.name}\``).join(" **|** ")

    const acaosize = client.commands.filter(command => command.help.category === "acoes").size
    const acao = client.commands.filter(command => command.help.category === "acoes").map(e => `\`${prefix}${e.help.name}\``).join(" **|** ")

    const pesize = client.commands.filter(command => command.help.category === "pesquisas").size
    const pe = client.commands.filter(command => command.help.category === "pesquisas").map(e => `\`${prefix}${e.help.name}\``).join(" **|** ")

    const filtersize = client.commands.filter(command => command.help.category === "filters").size
    const filters = client.commands.filter(command => command.help.category === "filters").map(e => `\`${prefix}${e.help.name}\``).join(" **|** ")

    const givesize = client.commands.filter(command => command.help.category === "giveaways").size
    const give = client.commands.filter(command => command.help.category === "giveaways").map(e => `\`${prefix}${e.help.name}\``).join(" **|** ")

    let embed = new MessageEmbed()
    .setTitle(`Ajuda | ${client.user.username}`)

    .addField(`Música: [${musicsize}]`, `${music}`)
    .addField(`Filtros: [${filtersize}]`, `${filters}`)
    .addField(`Ações: [${acaosize}]`, `${acao}`)
    .addField(`Pesquisas: [${pesize}]`, `${pe}`)
    .addField(`Giveaways: [${givesize}]`, `${give}`)

    .setThumbnail(client.user.displayAvatarURL({dynamic:true}))
    .setColor("F47FFF")
    
    message.quote(embed)
}
exports.help = { 
  name: 'ajuda', 
  aliases: ['help', 'comandos', 'commands', 'cmds', 'cmd'],
  category: 'info'
}