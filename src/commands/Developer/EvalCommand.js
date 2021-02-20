const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
    const player = message.client.manager.players.get(message.guild.id);

    if(message.author.id !== "717766639260532826") return message.quote(`<:hm_error:812689130043211787>  ›  Esse comando só pode ser ultilizado por meu desenvolvedor`)
    
    try {
        if(!args.join(' ')) return message.reply('Escreve ai')
        let code = await eval(args.join(" "));
        if (typeof code !== 'string') code = await require('util').inspect(code, { depth: 0 });
        let embed = new MessageEmbed()
        .setColor("F47FFF")
        .addField('📩 Entrada', `\`\`\`js\n${args.join(" ")}\`\`\``)
        .addField('🚩 Saída', `\`\`\`js\n${code.slice(0, 1010)}\n\`\`\``)
        if(code.length > 1010) embed.addField('🚩 Continuação do Resultado', `\`\`\`js\n${code.slice(1010, 2020)}\n\`\`\``)
        message.quote({embed})
    } catch(err) {
        message.quote(`\`\`\`js\n${err}\n\`\`\``);
    }
}
exports.help = { 
    name: 'eval', 
    aliases: ['ev', 'e'],
    category: 'developer'
  }